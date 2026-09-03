import { FlashcardPackService } from './flashcardPackService.js';
import { VOCAB_TOPICS } from '../../../data/vocabulary/topics.js';
import { speakText } from '../../utils/audioPlayer.js';
import { AnalyticsStore } from '../analytics/analyticsStore.js';

/**
 * Quản lý trạng thái giao diện của Flashcard Test
 */
let currentView = 'lobby'; // 'lobby' | 'create' | 'flashcard' | 'test' | 'test_result'
let activePack = null;
let currentCardIndex = 0;
let isCardFlipped = false;

// Create Form State
let createFormState = {
  name: '',
  requestedCount: 20,
  selectedTopicIds: [] // empty means all
};

// Test Quiz State
let quizQuestions = [];
let quizCurrentIndex = 0;
let quizUserAnswers = {}; // { [questionIdx]: selectedAnswer }
let quizResult = null;

export class FlashcardTestComponent {
  /**
   * Khởi tạo các sự kiện toàn cục trên window
   */
  static initWindowBindings(onStateChangeCallback) {
    const notify = () => {
      if (typeof onStateChangeCallback === 'function') {
        onStateChangeCallback();
      }
    };

    window.openCreatePackView = () => {
      currentView = 'create';
      createFormState = {
        name: `Gói Flashcard #${FlashcardPackService.getPacks().length + 1}`,
        requestedCount: 20,
        selectedTopicIds: []
      };
      notify();
    };

    window.backToPackLobby = () => {
      currentView = 'lobby';
      activePack = null;
      notify();
    };

    window.selectPackForFlashcard = (packId) => {
      const packs = FlashcardPackService.getPacks();
      const pack = packs.find(p => p.id === packId);
      if (!pack || !pack.words || pack.words.length === 0) {
        if (window.showToast) window.showToast('Gói này không có từ vựng!', 'warning');
        return;
      }
      activePack = pack;
      currentCardIndex = 0;
      isCardFlipped = false;
      currentView = 'flashcard';
      notify();
    };

    window.selectPackForTest = (packId) => {
      const packs = FlashcardPackService.getPacks();
      const pack = packs.find(p => p.id === packId);
      if (!pack || !pack.words || pack.words.length === 0) {
        if (window.showToast) window.showToast('Gói này không có từ vựng để kiểm tra!', 'warning');
        return;
      }
      activePack = pack;
      this.generateQuizForPack(pack);
      currentView = 'test';
      notify();
    };

    window.deleteFlashcardPack = (packId, packName) => {
      if (confirm(`Bạn có chắc chắn muốn xóa gói "${packName}"? Các từ vựng trong gói này sẽ được giải phóng để có thể dùng trong các gói tạo sau.`)) {
        FlashcardPackService.deletePack(packId);
        if (window.showToast) window.showToast(`Đã xóa gói "${packName}"`, 'info');
        if (activePack && activePack.id === packId) {
          activePack = null;
          currentView = 'lobby';
        }
        notify();
      }
    };

    // Form Handlers
    window.handlePackNameInput = (e) => {
      createFormState.name = e.target.value;
    };

    window.handlePackCountSelect = (count) => {
      createFormState.requestedCount = parseInt(count) || 20;
      notify();
    };

    window.handlePackCountInput = (e) => {
      const val = parseInt(e.target.value);
      if (val > 0) {
        createFormState.requestedCount = val;
        const availableEl = document.getElementById('available-words-indicator');
        if (availableEl) {
          const availableCount = FlashcardPackService.getAvailableWordsForTopics(createFormState.selectedTopicIds).length;
          availableEl.innerText = availableCount;
        }
      }
    };

    window.toggleTopicSelection = (topicSlug) => {
      const idx = createFormState.selectedTopicIds.indexOf(topicSlug);
      if (idx > -1) {
        createFormState.selectedTopicIds.splice(idx, 1);
      } else {
        createFormState.selectedTopicIds.push(topicSlug);
      }
      notify();
    };

    window.selectAllTopics = () => {
      createFormState.selectedTopicIds = VOCAB_TOPICS.map(t => t.slug);
      notify();
    };

    window.deselectAllTopics = () => {
      createFormState.selectedTopicIds = [];
      notify();
    };

    window.submitCreatePack = () => {
      const res = FlashcardPackService.createPack({
        name: createFormState.name,
        requestedCount: createFormState.requestedCount,
        selectedTopicIds: createFormState.selectedTopicIds
      });

      if (!res.success) {
        if (window.showToast) window.showToast(res.message, 'warning');
        alert(res.message);
        return;
      }

      if (window.showToast) window.showToast(res.message, 'success');
      activePack = res.pack;
      currentCardIndex = 0;
      isCardFlipped = false;
      currentView = 'flashcard';
      notify();
    };

    // Flashcard Flip Handlers
    window.flipFlashcard = () => {
      isCardFlipped = !isCardFlipped;
      const cardInner = document.getElementById('flashcard-3d-inner');
      if (cardInner) {
        if (isCardFlipped) {
          cardInner.classList.add('is-flipped');
        } else {
          cardInner.classList.remove('is-flipped');
        }
      }
    };

    window.nextFlashcard = () => {
      if (!activePack || !activePack.words) return;
      if (currentCardIndex < activePack.words.length - 1) {
        currentCardIndex += 1;
        isCardFlipped = false;
        notify();
      }
    };

    window.prevFlashcard = () => {
      if (!activePack || !activePack.words) return;
      if (currentCardIndex > 0) {
        currentCardIndex -= 1;
        isCardFlipped = false;
        notify();
      }
    };

    window.markFlashcardMastered = (wordId, mastered) => {
      if (!activePack) return;
      const updatedPack = FlashcardPackService.toggleWordMastery(activePack.id, wordId, mastered);
      if (updatedPack) {
        activePack = updatedPack;
        if (mastered) {
          AnalyticsStore.updateSkillScore('vocabulary', +2);
          if (window.showToast) window.showToast('✅ Đã nhớ từ vựng này! (+2 điểm từ vựng)', 'success');
        } else {
          if (window.showToast) window.showToast('Đã đánh dấu cần ôn lại từ này.', 'info');
        }
        // Auto move to next card if not at end
        if (currentCardIndex < activePack.words.length - 1) {
          currentCardIndex += 1;
          isCardFlipped = false;
        }
        notify();
      }
    };

    window.shuffleFlashcardPack = () => {
      if (!activePack || !activePack.words) return;
      const shuffled = [...activePack.words];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      activePack.words = shuffled;
      currentCardIndex = 0;
      isCardFlipped = false;
      if (window.showToast) window.showToast('Đã xáo trộn thứ tự các thẻ!', 'info');
      notify();
    };

    window.speakFlashcardWord = (word) => {
      if (word) speakText(word, 'en-US');
    };

    // Quiz Handlers
    window.selectQuizAnswer = (questionIdx, answerOption) => {
      quizUserAnswers[questionIdx] = answerOption;
      notify();
    };

    window.submitPackQuiz = () => {
      let correctCount = 0;
      quizQuestions.forEach((q, idx) => {
        if (quizUserAnswers[idx] === q.correctAnswer) {
          correctCount += 1;
        }
      });

      const total = quizQuestions.length;
      const percent = Math.round((correctCount / total) * 100);

      // Save result to pack
      if (activePack) {
        const updated = FlashcardPackService.recordTestResult(activePack.id, correctCount, total);
        if (updated) activePack = updated;
      }

      AnalyticsStore.updateSkillScore('vocabulary', Math.round(correctCount * 1.5));

      quizResult = {
        correctCount,
        total,
        percent,
        questions: quizQuestions,
        userAnswers: quizUserAnswers
      };

      currentView = 'test_result';
      notify();
    };

    window.retakePackQuiz = () => {
      if (activePack) {
        this.generateQuizForPack(activePack);
        currentView = 'test';
        notify();
      }
    };
  }

  /**
   * Tạo câu hỏi trắc nghiệm tự động từ các từ trong gói
   */
  static generateQuizForPack(pack) {
    quizUserAnswers = {};
    quizResult = null;
    const words = pack.words || [];

    quizQuestions = words.map((w, idx) => {
      // Create 3 distractor meanings from other words
      const otherWords = words.filter(item => item.id !== w.id);
      const distractors = [];
      const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random());
      
      for (const other of shuffledOthers) {
        if (other.meaningVn && other.meaningVn !== w.meaningVn && !distractors.includes(other.meaningVn)) {
          distractors.push(other.meaningVn);
          if (distractors.length >= 3) break;
        }
      }

      // Fill fallback distractors if pack has < 4 words
      const fallbackDistractors = [
        'sự phát triển bền vững', 'cải thiện điều kiện sống', 'mối quan hệ thân thiết',
        'thay đổi tích cực', 'đạt được mục tiêu', 'giải quyết khó khăn'
      ];
      while (distractors.length < 3) {
        const fb = fallbackDistractors[Math.floor(Math.random() * fallbackDistractors.length)];
        if (!distractors.includes(fb) && fb !== w.meaningVn) {
          distractors.push(fb);
        }
      }

      const options = [w.meaningVn, ...distractors].sort(() => 0.5 - Math.random());

      // Format sentence cloze if available
      let clozeSentence = '';
      if (w.example) {
        const regex = new RegExp(`\\b${w.word}\\b`, 'gi');
        clozeSentence = w.example.replace(regex, '______');
      }

      return {
        word: w.word,
        phonetic: w.phonetic,
        pos: w.pos,
        correctAnswer: w.meaningVn,
        options: options,
        example: w.example,
        exampleVn: w.exampleVn,
        clozeSentence: clozeSentence,
        topicName: w.topicName
      };
    });
  }

  /**
   * Render chính
   */
  static render() {
    switch (currentView) {
      case 'create':
        return this.renderCreateForm();
      case 'flashcard':
        return this.renderFlashcardPlayer();
      case 'test':
        return this.renderTestQuiz();
      case 'test_result':
        return this.renderTestResult();
      case 'lobby':
      default:
        return this.renderLobby();
    }
  }

  /**
   * 1. LOBBY: Danh sách gói flashcard
   */
  static renderLobby() {
    const packs = FlashcardPackService.getPacks();
    const totalWordsInPacks = packs.reduce((acc, p) => acc + (p.wordCount || 0), 0);
    const totalMastered = packs.reduce((acc, p) => acc + ((p.studyProgress && p.studyProgress.cardsLearned) || 0), 0);
    const overallMasteryRate = totalWordsInPacks > 0 ? Math.round((totalMastered / totalWordsInPacks) * 100) : 0;

    return `
      <div class="flashcard-lobby animate-fade-in" style="padding: 1.5rem 0;">
        <!-- Hero Header -->
        <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--primary); padding: 1.75rem 2rem; margin-bottom: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
                <span class="badge badge-primary" style="font-weight: 700;">Học & Kiểm Tra Thích Ứng</span>
                <span class="badge badge-success">Không Trùng Lặp Từ</span>
              </div>
              <h3 style="color: var(--primary); margin: 0 0 0.4rem 0; font-size: 1.55rem;">
                Gói Flashcard Ôn Tập & Kiểm Tra Kiến Thức VSTEP B1
              </h3>
              <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
                Tạo gói từ vựng ngẫu nhiên theo chủ đề bạn chọn, lật thẻ flashcard 3D để ghi nhớ và làm bài kiểm tra trắc nghiệm đánh giá trình độ.
              </p>
            </div>

            <!-- Action: Create Pack Button -->
            <button class="btn btn-primary" style="padding: 0.85rem 1.6rem; font-weight: 700; font-size: 1rem; border-radius: var(--radius-full); box-shadow: 0 8px 20px rgba(37,99,235,0.35); display: inline-flex; align-items: center; gap: 0.5rem;"
                    onclick="window.openCreatePackView()">
              <i data-lucide="plus-circle"></i>
              <span>Tạo Gói Flashcard Mới</span>
            </button>
          </div>

          <!-- Overall Stats Summary Bar -->
          <div class="grid-4" style="gap: 1rem; margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color);">
            <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: center;">
              <div style="font-size: 0.8rem; color: var(--text-muted);">Gói Flashcard Đã Tạo</div>
              <div style="font-size: 1.35rem; font-weight: 800; color: var(--primary);">${packs.length}</div>
            </div>
            <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: center;">
              <div style="font-size: 0.8rem; color: var(--text-muted);">Tổng Số Từ Đã Gói</div>
              <div style="font-size: 1.35rem; font-weight: 800; color: var(--secondary);">${totalWordsInPacks}</div>
            </div>
            <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: center;">
              <div style="font-size: 0.8rem; color: var(--text-muted);">Số Từ Đã Thuộc Lòng</div>
              <div style="font-size: 1.35rem; font-weight: 800; color: var(--success);">${totalMastered}</div>
            </div>
            <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: center;">
              <div style="font-size: 0.8rem; color: var(--text-muted);">Tỷ Lệ Nhớ Từ</div>
              <div style="font-size: 1.35rem; font-weight: 800; color: var(--warning);">${overallMasteryRate}%</div>
            </div>
          </div>
        </div>

        <!-- Pack List Grid -->
        ${packs.length === 0 ? `
          <div class="card" style="padding: 3.5rem 2rem; text-align: center; background: var(--bg-surface); border: 2px dashed var(--border-color); border-radius: var(--radius-lg);">
            <i data-lucide="package-open" style="width: 56px; height: 56px; color: var(--text-muted); margin: 0 auto 1.25rem auto;"></i>
            <h4 style="font-size: 1.25rem; color: var(--text-primary); margin: 0 0 0.5rem 0;">Chưa có gói flashcard nào</h4>
            <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto; font-size: 0.95rem; line-height: 1.6;">
              Nhấn nút <strong>"Tạo Gói Flashcard Mới"</strong> ở góc trên bên phải để chọn số lượng từ và tích chọn chủ đề cần học. Hệ thống sẽ bốc ngẫu nhiên và đảm bảo không bao giờ trùng từ với các gói đã tạo!
            </p>
          </div>
        ` : `
          <div class="grid-2" style="gap: 1.5rem;">
            ${packs.map((pack, pIdx) => {
              const learned = (pack.studyProgress && pack.studyProgress.cardsLearned) || 0;
              const total = pack.wordCount || (pack.words ? pack.words.length : 0);
              const percentLearned = total > 0 ? Math.round((learned / total) * 100) : 0;
              const lastScore = pack.studyProgress && pack.studyProgress.lastScore;

              return `
                <div class="card" style="padding: 1.75rem; border: 1px solid var(--border-color); border-top: 4px solid var(--primary); display: flex; flex-direction: column; justify-content: space-between; position: relative; transition: transform var(--transition-fast), box-shadow var(--transition-fast);">
                  <div>
                    <!-- Card Top Header -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
                      <div>
                        <span class="badge badge-primary" style="font-weight: 700; font-size: 0.75rem;">${total} Từ Vựng</span>
                        <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.35rem;">Tạo lúc: ${pack.createdAt}</span>
                      </div>
                      <button class="btn btn-secondary btn-sm btn-icon" title="Xóa gói này" onclick="window.deleteFlashcardPack('${pack.id}', '${pack.name.replace(/'/g, "\\'")}')" style="color: var(--danger-text, #ef4444); border-color: transparent;">
                        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
                      </button>
                    </div>

                    <!-- Pack Title -->
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin: 0 0 0.5rem 0; line-height: 1.4;">
                      ${pack.name}
                    </h4>

                    <!-- Topics Covered -->
                    <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.25rem;">
                      ${(pack.topicNames || []).slice(0, 4).map(tName => `
                        <span class="badge badge-secondary" style="font-size: 0.75rem; padding: 0.2rem 0.6rem;">${tName}</span>
                      `).join('')}
                      ${(pack.topicNames || []).length > 4 ? `
                        <span class="badge badge-secondary" style="font-size: 0.75rem;">+${(pack.topicNames || []).length - 4} chủ đề</span>
                      ` : ''}
                    </div>

                    <!-- Study Progress Bar -->
                    <div style="background: var(--bg-muted); padding: 0.85rem 1rem; border-radius: var(--radius-md); margin-bottom: 1.25rem;">
                      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.4rem;">
                        <span style="color: var(--text-secondary);">Tiến độ ghi nhớ:</span>
                        <strong style="color: var(--primary);">${learned}/${total} từ (${percentLearned}%)</strong>
                      </div>
                      <div style="width: 100%; height: 7px; background: var(--border-color); border-radius: var(--radius-full); overflow: hidden;">
                        <div style="width: ${percentLearned}%; height: 100%; background: linear-gradient(90deg, var(--primary), var(--success)); border-radius: var(--radius-full); transition: width 0.4s ease;"></div>
                      </div>

                      <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-top: 0.6rem; color: var(--text-muted);">
                        <span>Điểm bài test:</span>
                        <span>${lastScore !== null && lastScore !== undefined ? `<strong style="color: var(--success);">${lastScore}%</strong> (Cao nhất: ${pack.studyProgress.bestScore}%)` : '<em style="color: var(--text-muted);">Chưa làm bài test</em>'}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Actions for this pack -->
                  <div style="display: flex; gap: 0.6rem; margin-top: 0.5rem; flex-wrap: wrap;">
                    <button class="btn btn-primary" style="flex: 1; font-weight: 700; font-size: 0.9rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem;"
                            onclick="window.selectPackForFlashcard('${pack.id}')">
                      <i data-lucide="layers"></i>
                      <span>Lật Thẻ Ôn Tập</span>
                    </button>
                    <button class="btn btn-success" style="flex: 1; font-weight: 700; font-size: 0.9rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem;"
                            onclick="window.selectPackForTest('${pack.id}')">
                      <i data-lucide="file-check"></i>
                      <span>Làm Bài Test</span>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}
      </div>
    `;
  }

  /**
   * 2. FORM: Tạo Gói Flashcard Mới
   */
  static renderCreateForm() {
    const topicStats = FlashcardPackService.getTopicsStats();
    const availablePool = FlashcardPackService.getAvailableWordsForTopics(createFormState.selectedTopicIds);
    const availableTotal = availablePool.length;

    const isAllSelected = createFormState.selectedTopicIds.length === VOCAB_TOPICS.length;

    return `
      <div class="create-pack-container animate-fade-in" style="max-width: 860px; margin: 0 auto; padding: 1.5rem 0;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <button class="btn btn-secondary btn-sm" onclick="window.backToPackLobby()" style="display: inline-flex; align-items: center; gap: 0.35rem; margin-bottom: 0.5rem;">
              <i data-lucide="arrow-left"></i>
              <span>Quay Lại Danh Sách Gói</span>
            </button>
            <h3 style="margin: 0; color: var(--primary); font-size: 1.6rem; font-weight: 800;">
              Thiết Lập Gói Flashcard Mới
            </h3>
          </div>
          <span class="badge badge-success" style="font-weight: 700;">Hệ Thống Tự Động Loại Trừ Từ Trùng Lặp</span>
        </div>

        <div class="card" style="padding: 2rem; border-top: 4px solid var(--primary); margin-bottom: 2rem;">
          
          <!-- 1. Tên Gói -->
          <div style="margin-bottom: 1.75rem;">
            <label style="display: block; font-weight: 700; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.5rem;">
              1. Đặt tên cho gói Flashcard:
            </label>
            <input type="text" 
                   value="${createFormState.name}" 
                   placeholder="Ví dụ: Gói từ vựng ôn thi số 1, 20 từ Giao tiếp cơ bản..." 
                   oninput="window.handlePackNameInput(event)"
                   style="width: 100%; padding: 0.85rem 1.25rem; font-size: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary);" />
          </div>

          <!-- 2. Chọn số lượng từ -->
          <div style="margin-bottom: 1.75rem;">
            <label style="display: block; font-weight: 700; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.5rem;">
              2. Chọn số lượng từ trong gói:
            </label>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center; margin-bottom: 0.75rem;">
              ${[10, 15, 20, 30, 50].map(cnt => `
                <button class="btn ${createFormState.requestedCount === cnt ? 'btn-primary' : 'btn-secondary'}" 
                        style="font-weight: 700; padding: 0.6rem 1.2rem;"
                        onclick="window.handlePackCountSelect(${cnt})">
                  ${cnt} từ
                </button>
              `).join('')}
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 0.9rem; color: var(--text-secondary);">Hoặc nhập số tùy ý:</span>
                <input type="number" min="1" max="500" 
                       value="${createFormState.requestedCount}" 
                       oninput="window.handlePackCountInput(event)"
                       style="width: 90px; padding: 0.55rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary); text-align: center; font-weight: 700;" />
              </div>
            </div>
          </div>

          <!-- 3. Tích chọn chủ đề -->
          <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
              <label style="font-weight: 700; font-size: 1rem; color: var(--text-primary); margin: 0;">
                3. Tích chọn chủ đề từ vựng (Chọn 1 hoặc nhiều chủ đề):
              </label>
              <div style="display: flex; gap: 0.5rem;">
                <button class="btn btn-secondary btn-sm" onclick="window.selectAllTopics()">
                  ${isAllSelected ? '✓ Đang chọn tất cả' : 'Chọn tất cả'}
                </button>
                <button class="btn btn-secondary btn-sm" onclick="window.deselectAllTopics()">
                  Bỏ chọn hết
                </button>
              </div>
            </div>

            <!-- Topic Grid Selection -->
            <div class="grid-3" style="gap: 0.6rem; max-height: 380px; overflow-y: auto; padding: 0.5rem; background: var(--bg-muted); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
              ${VOCAB_TOPICS.map(t => {
                const isSelected = createFormState.selectedTopicIds.includes(t.slug) || (createFormState.selectedTopicIds.length === 0);
                const stat = topicStats[t.slug] || { available: 0, total: 0 };

                return `
                  <div style="background: ${isSelected ? 'var(--bg-surface)' : 'transparent'}; border: 2px solid ${isSelected ? 'var(--primary)' : 'var(--border-color)'}; padding: 0.7rem 0.85rem; border-radius: var(--radius-sm); cursor: pointer; display: flex; align-items: center; justify-content: space-between; transition: all var(--transition-fast);"
                       onclick="window.toggleTopicSelection('${t.slug}')">
                    <div style="display: flex; align-items: center; gap: 0.5rem; overflow: hidden;">
                      <input type="checkbox" ${isSelected ? 'checked' : ''} style="cursor: pointer;" onclick="event.stopPropagation(); window.toggleTopicSelection('${t.slug}');" />
                      <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                        <div style="font-weight: 700; font-size: 0.875rem; color: var(--text-primary);">${t.vn}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">${t.name}</div>
                      </div>
                    </div>
                    <span class="badge ${stat.available > 0 ? 'badge-primary' : 'badge-secondary'}" style="font-size: 0.7rem; font-weight: 700;">
                      ${stat.available} từ
                    </span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Dynamic Counter & Notice Banner -->
          <div style="background: rgba(37,99,235,0.08); border-left: 4px solid var(--primary); padding: 1rem 1.25rem; border-radius: var(--radius-md); margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div>
              <div style="font-weight: 700; color: var(--primary); font-size: 1.05rem;">
                🎯 Tổng số từ khả dụng (chưa dùng trong gói nào): <span id="available-words-indicator">${availableTotal}</span> từ
              </div>
              <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">
                Hệ thống sẽ chọn ngẫu nhiên đúng <strong>${createFormState.requestedCount}</strong> từ và lưu vào gói của bạn.
              </div>
            </div>

            <button class="btn btn-primary" 
                    ${availableTotal === 0 ? 'disabled' : ''}
                    style="padding: 0.85rem 2rem; font-weight: 700; font-size: 1.05rem; border-radius: var(--radius-full);"
                    onclick="window.submitCreatePack()">
              <i data-lucide="sparkles"></i>
              <span>🚀 Tạo Gói & Bắt Đầu Học</span>
            </button>
          </div>

        </div>
      </div>
    `;
  }

  /**
   * 3. FLASHCARD: Chế độ lật thẻ 3D
   */
  static renderFlashcardPlayer() {
    if (!activePack || !activePack.words || activePack.words.length === 0) {
      return this.renderLobby();
    }

    const words = activePack.words;
    const currentWord = words[currentCardIndex];
    const total = words.length;
    const masteredIds = new Set(activePack.studyProgress?.masteredWordIds || []);
    const isMastered = masteredIds.has(currentWord.id);

    return `
      <div class="flashcard-study-container animate-fade-in" style="max-width: 760px; margin: 0 auto; padding: 1rem 0;">
        
        <!-- Top Controls Bar -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button class="btn btn-secondary btn-sm" onclick="window.backToPackLobby()" style="display: inline-flex; align-items: center; gap: 0.35rem;">
              <i data-lucide="arrow-left"></i>
              <span>Danh Sách Gói</span>
            </button>
            <strong style="color: var(--text-primary); font-size: 1.1rem;">${activePack.name}</strong>
          </div>

          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button class="btn btn-secondary btn-sm" onclick="window.shuffleFlashcardPack()" title="Xáo trộn thứ tự các từ">
              <i data-lucide="shuffle"></i>
              <span>Trộn Thẻ</span>
            </button>
            <button class="btn btn-success btn-sm" onclick="window.selectPackForTest('${activePack.id}')">
              <i data-lucide="file-check"></i>
              <span>Làm Bài Test Gói Này</span>
            </button>
          </div>
        </div>

        <!-- Progress Indicator -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; font-size: 0.9rem;">
          <span style="color: var(--text-secondary);">Thẻ số: <strong style="color: var(--primary);">${currentCardIndex + 1} / ${total}</strong></span>
          <span style="color: var(--text-secondary);">Đã thuộc: <strong style="color: var(--success);">${masteredIds.size} / ${total}</strong></span>
        </div>
        <div style="width: 100%; height: 6px; background: var(--border-color); border-radius: var(--radius-full); overflow: hidden; margin-bottom: 1.75rem;">
          <div style="width: ${Math.round(((currentCardIndex + 1) / total) * 100)}%; height: 100%; background: var(--primary); transition: width 0.3s ease;"></div>
        </div>

        <!-- 3D Flashcard Element -->
        <div class="flashcard-3d-scene" style="perspective: 1200px; width: 100%; min-height: 380px; margin-bottom: 1.75rem; cursor: pointer;" onclick="window.flipFlashcard()">
          <div id="flashcard-3d-inner" class="flashcard-3d-card ${isCardFlipped ? 'is-flipped' : ''}" 
               style="position: relative; width: 100%; min-height: 380px; transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);">
            
            <!-- Mặt Trước (Front: English Word, Phonetic, Audio, Sentence Hint) -->
            <div class="card flashcard-face front" 
                 style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; flex-direction: column; justify-content: space-between; padding: 2.5rem 2rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); border: 2px solid var(--border-color); background: var(--bg-card); text-align: center;">
              
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="badge badge-primary">${currentWord.topicName || 'Từ Vựng B1'}</span>
                <span class="badge ${isMastered ? 'badge-success' : 'badge-muted'}">${isMastered ? '★ Đã Thuộc' : 'Chưa Thuộc'}</span>
              </div>

              <div style="margin: 1.5rem 0;">
                <div style="font-size: 2.75rem; font-weight: 900; color: var(--primary); letter-spacing: -0.5px; font-family: var(--font-heading); margin-bottom: 0.5rem;">
                  ${currentWord.word}
                </div>
                
                <div style="display: flex; align-items: center; justify-content: center; gap: 0.6rem;">
                  <span style="font-size: 1.15rem; color: var(--text-muted); font-family: var(--font-mono);">
                    /${currentWord.phonetic}/
                  </span>
                  <span class="badge badge-secondary" style="font-size: 0.8rem;">${currentWord.pos}</span>
                  <button class="btn btn-secondary btn-icon btn-sm" onclick="event.stopPropagation(); window.speakFlashcardWord('${currentWord.word.replace(/'/g, "\\'")}')" title="Nghe phát âm chuẩn">
                    <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i>
                  </button>
                </div>

                ${currentWord.example ? `
                  <div style="margin-top: 1.5rem; font-size: 1.05rem; color: var(--text-secondary); font-style: italic; background: var(--bg-muted); padding: 0.85rem 1.25rem; border-radius: var(--radius-md);">
                    "${currentWord.example.replace(new RegExp(`\\b${currentWord.word}\\b`, 'gi'), '______')}"
                  </div>
                ` : ''}
              </div>

              <div style="color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; justify-content: center; gap: 0.35rem;">
                <i data-lucide="rotate-cw" style="width: 14px; height: 14px;"></i>
                <span>Nhấn vào thẻ để xem nghĩa Tiếng Việt</span>
              </div>
            </div>

            <!-- Mặt Sau (Back: Meaning VN, Definition, Example VN, Collocations) -->
            <div class="card flashcard-face back" 
                 style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; transform: rotateY(180deg); display: flex; flex-direction: column; justify-content: space-between; padding: 2.5rem 2rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); border: 2px solid var(--primary); background: linear-gradient(135deg, var(--bg-card), var(--bg-surface)); text-align: center;">
              
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 700; color: var(--primary); font-size: 1.1rem;">${currentWord.word}</span>
                <span class="badge badge-success">Giải Nghĩa Chi Tiết</span>
              </div>

              <div style="margin: 1.5rem 0;">
                <div style="font-size: 2rem; font-weight: 800; color: var(--success); margin-bottom: 0.75rem;">
                  ${currentWord.meaningVn}
                </div>

                <div style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.5;">
                  ${currentWord.definition}
                </div>

                ${currentWord.example ? `
                  <div style="background: var(--bg-muted); padding: 1rem 1.25rem; border-radius: var(--radius-md); text-align: left; margin-bottom: 0.75rem;">
                    <div style="font-size: 0.95rem; color: var(--text-primary); font-style: italic; margin-bottom: 0.25rem;">
                      "${currentWord.example}"
                    </div>
                    ${currentWord.exampleVn ? `
                      <div style="font-size: 0.875rem; color: var(--text-muted);">
                        ➔ ${currentWord.exampleVn}
                      </div>
                    ` : ''}
                  </div>
                ` : ''}

                ${currentWord.collocations ? `
                  <div style="font-size: 0.85rem; color: var(--text-secondary);">
                    <strong>Cụm từ hay gặp:</strong> ${currentWord.collocations}
                  </div>
                ` : ''}
              </div>

              <div style="color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; justify-content: center; gap: 0.35rem;">
                <i data-lucide="rotate-ccw" style="width: 14px; height: 14px;"></i>
                <span>Nhấn vào thẻ để quay lại mặt trước</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Navigation & Mastery Action Buttons -->
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn btn-secondary" 
                  ${currentCardIndex === 0 ? 'disabled' : ''} 
                  onclick="window.prevFlashcard()" style="font-weight: 700; padding: 0.75rem 1.25rem;">
            <i data-lucide="chevron-left"></i>
            <span>Từ Trước</span>
          </button>

          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-danger" style="background: #ef4444; border-color: #dc2626; color: #fff; font-weight: 700;"
                    onclick="window.markFlashcardMastered('${currentWord.id}', false)">
              <i data-lucide="x"></i>
              <span>Chưa Thuộc</span>
            </button>
            <button class="btn btn-success" style="font-weight: 700;"
                    onclick="window.markFlashcardMastered('${currentWord.id}', true)">
              <i data-lucide="check"></i>
              <span>Đã Nhớ Từ Này</span>
            </button>
          </div>

          <button class="btn btn-secondary" 
                  ${currentCardIndex === total - 1 ? 'disabled' : ''} 
                  onclick="window.nextFlashcard()" style="font-weight: 700; padding: 0.75rem 1.25rem;">
            <span>Từ Tiếp</span>
            <i data-lucide="chevron-right"></i>
          </button>
        </div>

      </div>
    `;
  }

  /**
   * 4. QUIZ: Chế độ Làm Bài Kiểm Tra
   */
  static renderTestQuiz() {
    if (!activePack || !quizQuestions || quizQuestions.length === 0) {
      return this.renderLobby();
    }

    const answeredCount = Object.keys(quizUserAnswers).length;
    const total = quizQuestions.length;

    return `
      <div class="pack-quiz-container animate-fade-in" style="max-width: 820px; margin: 0 auto; padding: 1.5rem 0;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <button class="btn btn-secondary btn-sm" onclick="window.selectPackForFlashcard('${activePack.id}')" style="display: inline-flex; align-items: center; gap: 0.35rem; margin-bottom: 0.35rem;">
              <i data-lucide="arrow-left"></i>
              <span>Quay Lại Flashcard</span>
            </button>
            <h3 style="margin: 0; color: var(--primary); font-size: 1.5rem; font-weight: 800;">
              Bài Kiểm Tra: ${activePack.name}
            </h3>
          </div>

          <span class="badge badge-primary" style="font-size: 0.9rem; font-weight: 700;">
            Đã làm: ${answeredCount} / ${total} câu
          </span>
        </div>

        <!-- Questions List -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          ${quizQuestions.map((q, idx) => {
            const selected = quizUserAnswers[idx];

            return `
              <div class="card" style="padding: 1.75rem; border: 1px solid var(--border-color); border-left: 4px solid var(--primary);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                  <span class="badge badge-primary" style="font-weight: 700;">Câu ${idx + 1}</span>
                  <span style="font-size: 0.8rem; color: var(--text-muted);">${q.topicName || 'VSTEP B1'}</span>
                </div>

                <div style="font-size: 1.15rem; color: var(--text-primary); margin-bottom: 0.5rem; line-height: 1.5;">
                  Nghĩa chính xác của từ <strong>"${q.word}"</strong> 
                  <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">/${q.phonetic}/ (${q.pos})</span> là gì?
                </div>

                ${q.clozeSentence ? `
                  <div style="background: var(--bg-muted); padding: 0.65rem 1rem; border-radius: var(--radius-sm); font-style: italic; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
                    Ngữ cảnh: "${q.clozeSentence}"
                  </div>
                ` : ''}

                <!-- Options Grid -->
                <div class="grid-2" style="gap: 0.75rem;">
                  ${q.options.map(opt => {
                    const isChecked = selected === opt;
                    return `
                      <button class="btn ${isChecked ? 'btn-primary' : 'btn-secondary'}" 
                              style="text-align: left; padding: 0.85rem 1.15rem; font-size: 0.95rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem; justify-content: flex-start;"
                              onclick="window.selectQuizAnswer(${idx}, '${opt.replace(/'/g, "\\'")}')">
                        <span style="width: 20px; height: 20px; border-radius: var(--radius-full); border: 2px solid currentColor; display: inline-flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800;">
                          ${isChecked ? '✓' : ''}
                        </span>
                        <span>${opt}</span>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Submit Quiz Button -->
        <div style="margin-top: 2rem; text-align: center;">
          <button class="btn btn-primary" 
                  ${answeredCount < total ? 'title="Bạn chưa hoàn thành hết các câu hỏi"' : ''}
                  style="padding: 0.85rem 2.5rem; font-weight: 800; font-size: 1.1rem; border-radius: var(--radius-full); box-shadow: 0 10px 25px rgba(37,99,235,0.4);"
                  onclick="window.submitPackQuiz()">
            <i data-lucide="check-circle"></i>
            <span>Nộp Bài & Chấm Điểm</span>
          </button>
        </div>

      </div>
    `;
  }

  /**
   * 5. TEST RESULT: Kết quả bài kiểm tra
   */
  static renderTestResult() {
    if (!quizResult) return this.renderLobby();

    const { correctCount, total, percent, questions, userAnswers } = quizResult;
    const isPassed = percent >= 70;

    return `
      <div class="test-result-container animate-fade-in" style="max-width: 820px; margin: 0 auto; padding: 1.5rem 0;">
        
        <!-- Score Hero Card -->
        <div class="card" style="padding: 2.5rem 2rem; text-align: center; background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border: 2px solid ${isPassed ? 'var(--success)' : 'var(--warning)'}; border-radius: var(--radius-xl); margin-bottom: 2rem;">
          <div style="display: inline-flex; align-items: center; justify-content: center; width: 72px; height: 72px; border-radius: var(--radius-full); background: ${isPassed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)'}; color: ${isPassed ? 'var(--success)' : 'var(--warning)'}; margin-bottom: 1rem;">
            <i data-lucide="${isPassed ? 'award' : 'alert-circle'}" style="width: 38px; height: 38px;"></i>
          </div>

          <h3 style="font-size: 1.8rem; font-weight: 900; color: var(--text-primary); margin: 0 0 0.5rem 0;">
            ${isPassed ? 'Chúc Mừng! Bạn Đã Vượt Qua Bài Kiểm Tra' : 'Cần Cố Gắng Thêm! Hãy Ôn Lại Flashcard'}
          </h3>

          <div style="font-size: 3rem; font-weight: 900; color: ${isPassed ? 'var(--success)' : 'var(--warning)'}; margin: 0.5rem 0;">
            ${percent}%
          </div>
          <p style="font-size: 1.1rem; color: var(--text-secondary); margin: 0 0 1.5rem 0;">
            Đạt <strong>${correctCount} / ${total}</strong> câu hỏi chuẩn kiến thức VSTEP B1
          </p>

          <div style="display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="window.retakePackQuiz()">
              <i data-lucide="rotate-ccw"></i>
              <span>Kiểm Tra Lại</span>
            </button>
            <button class="btn btn-secondary" onclick="window.selectPackForFlashcard('${activePack.id}')">
              <i data-lucide="layers"></i>
              <span>Ôn Lại Thẻ Flashcard</span>
            </button>
            <button class="btn btn-secondary" onclick="window.backToPackLobby()">
              <i data-lucide="grid"></i>
              <span>Về Danh Sách Gói</span>
            </button>
          </div>
        </div>

        <!-- Detailed Review -->
        <h4 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 1rem;">
          Chi Tiết Từng Câu Hỏi:
        </h4>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${questions.map((q, idx) => {
            const userAns = userAnswers[idx];
            const isCorrect = userAns === q.correctAnswer;

            return `
              <div class="card" style="padding: 1.25rem 1.5rem; border-left: 5px solid ${isCorrect ? 'var(--success)' : 'var(--danger-text, #ef4444)'}; background: var(--bg-surface);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                  <strong style="color: var(--text-primary); font-size: 1.05rem;">
                    Câu ${idx + 1}: ${q.word} (${q.pos})
                  </strong>
                  <span class="badge ${isCorrect ? 'badge-success' : 'badge-danger'}">
                    ${isCorrect ? '✓ Đúng' : '✗ Sai'}
                  </span>
                </div>

                <div style="font-size: 0.95rem; margin-bottom: 0.25rem;">
                  Đáp án của bạn: <span style="font-weight: 700; color: ${isCorrect ? 'var(--success)' : 'var(--danger-text, #ef4444)'};">${userAns || '(Chưa chọn)'}</span>
                </div>
                ${!isCorrect ? `
                  <div style="font-size: 0.95rem; color: var(--success); font-weight: 700;">
                    Đáp án đúng: ${q.correctAnswer}
                  </div>
                ` : ''}

                ${q.example ? `
                  <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.4rem; font-style: italic;">
                    "${q.example}"
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>

      </div>
    `;
  }
}
