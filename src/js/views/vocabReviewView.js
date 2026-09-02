import { getUserVocabList, updateUserVocabItem, getVocabStats } from '../modules/vocab/vocabModel.js';
import { AdaptiveVocabEngine } from '../modules/vocab/adaptiveEngine.js';
import { QuestionGenerator } from '../modules/vocab/questionGenerator.js';
import { AnalyticsStore } from '../modules/analytics/analyticsStore.js';
import { speakText } from '../utils/audioPlayer.js';

let engine = null;
let generator = null;
let currentWord = null;
let currentQuestion = null;
let isAnswered = false;
let sessionActive = true;

// Session Tracking
let sessionStats = {
  totalAnswered: 0,
  correct: 0,
  wrong: 0,
  promotedCount: 0,
  demotedCount: 0,
  currentStreak: 0,
  maxStreak: 0,
  history: []
};

export function renderVocabReviewView() {
  // Initialize or re-attach engine with current user vocab data
  const vocabList = getUserVocabList();
  if (!engine) {
    engine = new AdaptiveVocabEngine(vocabList);
    generator = new QuestionGenerator(vocabList);
  } else {
    engine.setVocabList(vocabList);
    generator.setVocabList(vocabList);
  }

  // Global window functions for the view
  window.submitVocabChoice = (selectedAnswer, btnIndex) => {
    if (isAnswered) return;
    handleAnswerSubmission(selectedAnswer, btnIndex);
  };

  window.submitVocabTextInput = () => {
    if (isAnswered) return;
    const inputEl = document.getElementById('vocab-spelling-input');
    if (!inputEl) return;
    const answer = inputEl.value.trim().toLowerCase();
    if (!answer) {
      inputEl.focus();
      return;
    }
    handleAnswerSubmission(answer, null);
  };

  window.nextAdaptiveQuestion = () => {
    loadNextQuestion();
  };

  window.stopVocabReviewSession = () => {
    sessionActive = false;
    window.app.renderCurrentView();
  };

  window.resumeVocabReviewSession = () => {
    sessionActive = true;
    sessionStats = {
      totalAnswered: 0,
      correct: 0,
      wrong: 0,
      promotedCount: 0,
      demotedCount: 0,
      currentStreak: 0,
      maxStreak: 0,
      history: []
    };
    engine.resetCooldown();
    loadNextQuestion();
  };

  window.speakReviewWord = (word) => {
    if (word) speakText(word, 'en-US');
  };

  // Keyboard shortcut listener
  if (!window._vocabReviewKeydown) {
    window._vocabReviewKeydown = true;
    window.addEventListener('keydown', (e) => {
      if (window.location.hash !== '#vocab-review' && window.location.hash !== '#/vocab-review') return;

      if (isAnswered) {
        if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') {
          e.preventDefault();
          window.nextAdaptiveQuestion();
        }
      } else {
        // Number keys 1-4 for multiple choice options
        if (currentQuestion && currentQuestion.type === 'multiple_choice') {
          const num = parseInt(e.key);
          if (num >= 1 && num <= 4) {
            const btns = document.querySelectorAll('.review-option-btn');
            if (btns[num - 1]) {
              e.preventDefault();
              btns[num - 1].click();
            }
          }
        } else if (currentQuestion && currentQuestion.type === 'text_input') {
          if (e.key === 'Enter') {
            e.preventDefault();
            window.submitVocabTextInput();
          }
        }
      }
    });
  }

  // If session is completed/stopped, show Summary Screen
  if (!sessionActive) {
    return renderSummaryScreen();
  }

  // Load first question if not yet loaded
  if (!currentQuestion) {
    currentWord = engine.getNextWord();
    if (currentWord) {
      currentQuestion = generator.generateQuestion(currentWord);
    }
  }

  return renderActiveSessionScreen();
}

function loadNextQuestion() {
  isAnswered = false;
  currentWord = engine.getNextWord();
  if (currentWord) {
    currentQuestion = generator.generateQuestion(currentWord);
  }
  const arena = document.getElementById('vocab-review-arena');
  if (arena) {
    arena.innerHTML = renderQuestionCardHTML();
    if (window.lucide) window.lucide.createIcons();
    // Auto focus spelling input if present
    const input = document.getElementById('vocab-spelling-input');
    if (input) input.focus();
  } else {
    window.app.renderCurrentView();
  }
}

function handleAnswerSubmission(userAnswer, btnIndex) {
  isAnswered = true;
  sessionStats.totalAnswered += 1;

  let isCorrect = false;
  if (currentQuestion.type === 'text_input') {
    isCorrect = userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
  } else {
    isCorrect = userAnswer === currentQuestion.correctAnswer;
  }

  if (isCorrect) {
    sessionStats.correct += 1;
    sessionStats.currentStreak += 1;
    if (sessionStats.currentStreak > sessionStats.maxStreak) {
      sessionStats.maxStreak = sessionStats.currentStreak;
    }
  } else {
    sessionStats.wrong += 1;
    sessionStats.currentStreak = 0;
  }

  // Update mastery through engine
  const record = engine.recordResult(currentWord.id, isCorrect, currentQuestion.format);
  if (record && record.levelChanged) {
    if (record.currentLevel > record.previousLevel) {
      sessionStats.promotedCount += 1;
    } else {
      sessionStats.demotedCount += 1;
    }
  }
  if (record && record.updatedItem) {
    updateUserVocabItem(record.updatedItem);
  }

  // Update central competency score
  AnalyticsStore.updateSkillScore('vocabulary', isCorrect ? +2 : 0);

  // Update UI Elements
  renderFeedbackInDOM(isCorrect, userAnswer, btnIndex, record);
}

function renderFeedbackInDOM(isCorrect, userAnswer, btnIndex, record) {
  // Update header counters
  const totalEl = document.getElementById('stat-total-answered');
  const correctEl = document.getElementById('stat-correct-count');
  const wrongEl = document.getElementById('stat-wrong-count');
  const streakEl = document.getElementById('stat-streak-count');

  if (totalEl) totalEl.innerText = sessionStats.totalAnswered;
  if (correctEl) correctEl.innerText = sessionStats.correct;
  if (wrongEl) wrongEl.innerText = sessionStats.wrong;
  if (streakEl) streakEl.innerText = sessionStats.currentStreak;

  // Highlight option buttons
  if (currentQuestion.type === 'multiple_choice') {
    const btns = document.querySelectorAll('.review-option-btn');
    btns.forEach((btn) => {
      btn.disabled = true;
      const optText = btn.getAttribute('data-opt');
      if (optText === currentQuestion.correctAnswer) {
        btn.classList.add('correct-choice');
        btn.innerHTML += ' <i data-lucide="check" style="width: 18px; height: 18px; margin-left: auto;"></i>';
      } else if (optText === userAnswer && !isCorrect) {
        btn.classList.add('wrong-choice');
        btn.innerHTML += ' <i data-lucide="x" style="width: 18px; height: 18px; margin-left: auto;"></i>';
      }
    });
  } else {
    const input = document.getElementById('vocab-spelling-input');
    const submitBtn = document.getElementById('vocab-submit-input-btn');
    if (input) {
      input.disabled = true;
      input.style.borderColor = isCorrect ? 'var(--success, #10b981)' : 'var(--danger, #ef4444)';
      input.style.backgroundColor = isCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)';
    }
    if (submitBtn) submitBtn.disabled = true;
  }

  // Inject Explanation & Next Button
  const feedbackContainer = document.getElementById('review-feedback-area');
  if (feedbackContainer) {
    const levelChangeBadge = record && record.levelChanged
      ? (record.currentLevel > record.previousLevel
          ? `<span class="badge badge-success animate-scale-in" style="font-weight: 700;">🎉 Thăng cấp: Level ${record.currentLevel}!</span>`
          : `<span class="badge badge-danger animate-scale-in" style="font-weight: 700;">⚠️ Giảm cấp: Cần ôn lại Level ${record.currentLevel}</span>`)
      : '';

    feedbackContainer.innerHTML = `
      <div class="card animate-fade-in" style="margin-top: 1.25rem; border-left: 5px solid ${isCorrect ? 'var(--success, #10b981)' : 'var(--danger, #ef4444)'}; padding: 1.25rem 1.5rem; background: ${isCorrect ? 'rgba(16, 185, 129, 0.05)' : 'rgba(239, 68, 68, 0.05)'};">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="${isCorrect ? 'check-circle' : 'alert-circle'}" style="width: 22px; height: 22px; color: ${isCorrect ? 'var(--success, #10b981)' : 'var(--danger, #ef4444)'};"></i>
            <strong style="font-size: 1.05rem; color: ${isCorrect ? 'var(--success-text, #059669)' : 'var(--danger-text, #dc2626)'};">
              ${isCorrect ? 'Chính Xác!' : 'Chưa Chính Xác!'}
            </strong>
          </div>
          ${levelChangeBadge}
        </div>

        <div style="font-size: 0.925rem; color: var(--text-primary); margin-bottom: 1rem; line-height: 1.6;">
          ${currentQuestion.explanation}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <button class="btn btn-secondary btn-sm" onclick="window.speakReviewWord('${currentWord.word}')" style="display: inline-flex; align-items: center; gap: 0.4rem;">
            <i data-lucide="volume-2" style="width: 15px; height: 15px;"></i> Nghe Phát Âm (/ ${currentWord.phonetic || currentWord.word} /)
          </button>

          <button class="btn btn-primary" onclick="window.nextAdaptiveQuestion()" style="font-weight: 700; padding: 0.65rem 1.5rem; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: var(--shadow-md);">
            <span>Câu Tiếp Theo</span>
            <kbd style="background: rgba(255,255,255,0.2); padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.75rem;">Enter ↵</kbd>
          </button>
        </div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  }
}

function getLevelBadgeInfo(level = 1, score = 0) {
  switch (level) {
    case 1:
      return { text: 'Level 1: Chưa nắm', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.12)', icon: '🔴' };
    case 2:
      return { text: 'Level 2: Đang hình thành', color: '#f97316', bg: 'rgba(249, 115, 22, 0.12)', icon: '🟠' };
    case 3:
      return { text: 'Level 3: Đang củng cố', color: '#eab308', bg: 'rgba(234, 179, 8, 0.12)', icon: '🟡' };
    case 4:
      return { text: 'Level 4: Nhớ tốt', color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)', icon: '🟢' };
    case 5:
    default:
      return { text: 'Level 5: Nhớ bền vững', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.12)', icon: '🔵' };
  }
}

function getFormatBadgeLabel(format) {
  switch (format) {
    case 'meaning_to_word': return 'Nghĩa ➔ Chọn Từ';
    case 'word_to_meaning': return 'Từ ➔ Chọn Nghĩa';
    case 'cloze_sentence': return 'Điền Từ Vào Câu';
    case 'collocation': return 'Cụm Từ Cố Định (Collocation)';
    case 'spelling': return 'Kiểm Tra Chính Tả (Dictation)';
    case 'advanced_context': return 'Phân Tích Ngữ Cảnh B1';
    default: return 'Trắc Nghiệm';
  }
}

function renderQuestionCardHTML() {
  if (!currentQuestion || !currentWord) {
    return `<div class="card" style="text-align: center; padding: 3rem;">Không tìm thấy câu hỏi phù hợp.</div>`;
  }

  const levelInfo = getLevelBadgeInfo(currentWord.level || 1, currentWord.masteryScore || 0);
  const formatLabel = getFormatBadgeLabel(currentQuestion.format);

  return `
    <div class="card animate-fade-in" style="padding: 2rem; border-top: 5px solid ${levelInfo.color}; box-shadow: var(--shadow-lg);">
      <!-- Top Meta Badge Row -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="badge" style="background: ${levelInfo.bg}; color: ${levelInfo.color}; font-weight: 700; font-size: 0.825rem; border: 1px solid ${levelInfo.color}40;">
            ${levelInfo.icon} ${levelInfo.text} (${currentWord.masteryScore || 0}đ)
          </span>
          <span class="badge badge-secondary" style="font-size: 0.8rem;">
            ${formatLabel}
          </span>
        </div>

        <button class="btn btn-secondary btn-icon btn-sm" onclick="window.speakReviewWord('${currentWord.word}')" title="Nghe phát âm chuẩn" style="border-radius: var(--radius-full);">
          <i data-lucide="volume-2"></i>
        </button>
      </div>

      <!-- Prompt Question -->
      <div style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.5rem; font-weight: 600;">
        ${currentQuestion.prompt}
      </div>

      <!-- Highlight Core Area -->
      <div style="font-size: 1.65rem; font-weight: 800; color: var(--primary); margin-bottom: 0.5rem; line-height: 1.4; font-family: var(--font-heading);">
        ${currentQuestion.highlight}
      </div>

      ${currentQuestion.subText ? `
        <div style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.75rem; font-style: italic;">
          ${currentQuestion.subText}
        </div>
      ` : '<div style="margin-bottom: 1.25rem;"></div>'}

      <!-- Options / Input Area -->
      ${currentQuestion.type === 'multiple_choice' ? `
        <div class="review-options-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.85rem;">
          ${currentQuestion.options.map((opt, idx) => `
            <button class="btn btn-secondary review-option-btn" 
                    data-opt="${opt.replace(/"/g, '&quot;')}"
                    onclick="window.submitVocabChoice('${opt.replace(/'/g, "\\'")}', ${idx})"
                    style="padding: 1rem 1.25rem; text-align: left; justify-content: flex-start; font-size: 0.975rem; font-weight: 600; border-radius: var(--radius-md); transition: all 0.2s ease;">
              <span class="option-key-badge" style="background: var(--bg-muted); border-radius: 4px; padding: 0.15rem 0.45rem; font-size: 0.75rem; margin-right: 0.65rem; font-family: var(--font-mono); color: var(--text-muted);">${idx + 1}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
      ` : `
        <div style="display: flex; gap: 0.75rem; max-width: 500px;">
          <input type="text" id="vocab-spelling-input" class="search-input" 
                 placeholder="Gõ từ tiếng Anh vào đây..." 
                 autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                 style="font-size: 1.1rem; padding: 0.85rem 1rem; font-weight: 700; color: var(--primary);" />
          <button id="vocab-submit-input-btn" class="btn btn-primary" onclick="window.submitVocabTextInput()" style="font-weight: 700; padding: 0 1.5rem;">
            Kiểm Tra
          </button>
        </div>
      `}

      <!-- Dynamic Feedback Box Injection Target -->
      <div id="review-feedback-area"></div>
    </div>
  `;
}

function renderActiveSessionScreen() {
  const globalStats = getVocabStats();

  return `
    <div class="vocab-review-page animate-fade-in" style="max-width: 860px; margin: 0 auto;">
      <!-- Active Session Header Bar -->
      <div class="card" style="margin-bottom: 1.25rem; background: var(--bg-surface); padding: 1rem 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-left: 4px solid var(--secondary);">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <button class="btn btn-secondary btn-sm" onclick="window.stopVocabReviewSession()" style="font-weight: 700; display: inline-flex; align-items: center; gap: 0.4rem;">
            <i data-lucide="flag" style="width: 15px; height: 15px;"></i>
            <span>Dừng Luyện Tập</span>
          </button>
          <span style="font-size: 0.85rem; color: var(--text-muted); display: none; @media(min-width: 640px){display: inline;}">
            Chế độ ôn tập thích ứng (Spaced Repetition)
          </span>
        </div>

        <!-- Realtime Live Stats -->
        <div style="display: flex; align-items: center; gap: 1rem; font-size: 0.875rem; font-weight: 700; font-family: var(--font-mono);">
          <div style="color: var(--text-primary);">
            Đã làm: <span id="stat-total-answered" style="color: var(--primary);">${sessionStats.totalAnswered}</span>
          </div>
          <div style="color: var(--success, #10b981);">
            Đúng: <span id="stat-correct-count">${sessionStats.correct}</span>
          </div>
          <div style="color: var(--danger, #ef4444);">
            Sai: <span id="stat-wrong-count">${sessionStats.wrong}</span>
          </div>
          <div style="color: var(--warning, #f59e0b);">
            🔥 Chuỗi: <span id="stat-streak-count">${sessionStats.currentStreak}</span>
          </div>
        </div>
      </div>

      <!-- Main Question Arena -->
      <div id="vocab-review-arena">
        ${renderQuestionCardHTML()}
      </div>
    </div>
  `;
}

function renderSummaryScreen() {
  const accuracy = sessionStats.totalAnswered > 0 
    ? Math.round((sessionStats.correct / sessionStats.totalAnswered) * 100) 
    : 0;

  const globalStats = getVocabStats();

  return `
    <div class="vocab-review-summary animate-fade-in" style="max-width: 760px; margin: 0 auto; text-align: center;">
      <div class="card" style="padding: 2.5rem 2rem; background: var(--bg-card); box-shadow: var(--shadow-xl); border-top: 6px solid var(--primary);">
        
        <div style="width: 72px; height: 72px; border-radius: 50%; background: rgba(59, 130, 246, 0.12); color: var(--primary); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto;">
          <i data-lucide="award" style="width: 40px; height: 40px;"></i>
        </div>

        <h2 style="font-size: 1.85rem; color: var(--text-primary); margin: 0 0 0.5rem 0;">Tổng Kết Phiên Luyện Tập</h2>
        <p style="color: var(--text-secondary); margin: 0 0 2rem 0; font-size: 0.95rem;">
          Trí nhớ từ vựng của bạn đã được thuật toán thích ứng cập nhật tự động!
        </p>

        <!-- Metric Cards Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
          <div style="background: var(--bg-muted); padding: 1.25rem 1rem; border-radius: var(--radius-md);">
            <div style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Tổng Câu Đã Làm</div>
            <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary); font-family: var(--font-mono);">${sessionStats.totalAnswered}</div>
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem 1rem; border-radius: var(--radius-md);">
            <div style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Độ Chính Xác</div>
            <div style="font-size: 1.8rem; font-weight: 800; color: ${accuracy >= 75 ? 'var(--success, #10b981)' : 'var(--warning, #f59e0b)'}; font-family: var(--font-mono);">${accuracy}%</div>
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem 1rem; border-radius: var(--radius-md);">
            <div style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Chuỗi Đúng Kỷ Lục</div>
            <div style="font-size: 1.8rem; font-weight: 800; color: #f59e0b; font-family: var(--font-mono);">${sessionStats.maxStreak} 🔥</div>
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem 1rem; border-radius: var(--radius-md);">
            <div style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Số Từ Thăng Cấp</div>
            <div style="font-size: 1.8rem; font-weight: 800; color: #10b981; font-family: var(--font-mono);">+${sessionStats.promotedCount}</div>
          </div>
        </div>

        <!-- Global Mastery Level Distribution Bar -->
        <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 2rem; text-align: left;">
          <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.75rem; color: var(--text-primary);">
            📊 Phân Bố Độ Bền Trí Nhớ Toàn Bộ Kho Từ (${globalStats.total} từ):
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; font-size: 0.825rem;">
            <span class="badge" style="background: rgba(239, 68, 68, 0.12); color: #ef4444;">🔴 Level 1: ${globalStats.levelCounts[1]} từ</span>
            <span class="badge" style="background: rgba(249, 115, 22, 0.12); color: #f97316;">🟠 Level 2: ${globalStats.levelCounts[2]} từ</span>
            <span class="badge" style="background: rgba(234, 179, 8, 0.12); color: #eab308;">🟡 Level 3: ${globalStats.levelCounts[3]} từ</span>
            <span class="badge" style="background: rgba(16, 185, 129, 0.12); color: #10b981;">🟢 Level 4: ${globalStats.levelCounts[4]} từ</span>
            <span class="badge" style="background: rgba(59, 130, 246, 0.12); color: #3b82f6;">🔵 Level 5: ${globalStats.levelCounts[5]} từ</span>
          </div>
        </div>

        <!-- Actions -->
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="#vocabulary" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-weight: 600;">
            <i data-lucide="book-open"></i> Về Kho Từ Vựng
          </a>
          <button class="btn btn-primary" onclick="window.resumeVocabReviewSession()" style="padding: 0.75rem 1.75rem; font-weight: 700;">
            <i data-lucide="play"></i> Luyện Tiếp Phiên Mới
          </button>
        </div>

      </div>
    </div>
  `;
}
