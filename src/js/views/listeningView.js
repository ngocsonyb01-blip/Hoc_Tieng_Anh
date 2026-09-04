import { microSkills, listeningPracticeTests } from '../../data/listening/index.js';
import { renderAudioPlayerComponent } from '../utils/audioPlayer.js';
import { AnalyticsStore } from '../modules/analytics/analyticsStore.js';
import { VstepAudioDirector } from '../modules/listening/vstepAudioDirector.js';

let activeListeningTab = 'practice'; // 'skills' | 'practice'
let selectedTestSetIndex = 0;
let selectedPart = 'part1'; // 'part1' | 'part2' | 'part3'
const listeningUserAnswers = {}; // { [setIndex]: { [qId]: optionKey } }
const listeningSubmitted = {}; // { [setIndex]: boolean }

function getAllTestQuestions(testSet) {
  const qList = [];
  if (testSet.part1?.questions) {
    qList.push(...testSet.part1.questions);
  }
  if (testSet.part2?.conversations) {
    testSet.part2.conversations.forEach(c => {
      if (c.questions) qList.push(...c.questions);
    });
  }
  const talks = testSet.part3?.lectures || testSet.part3?.talks || [];
  talks.forEach(t => {
    if (t.questions) qList.push(...t.questions);
  });
  return qList;
}

export function renderListeningView() {
  window.handleListeningTabChange = (tab) => {
    activeListeningTab = tab;
    window.app.renderCurrentView();
  };

  window.handleListeningSetChange = (idx) => {
    selectedTestSetIndex = idx;
    window.app.renderCurrentView();
  };

  window.handleListeningPartChange = (part) => {
    selectedPart = part;
    window.app.renderCurrentView();
  };

  // Chọn đáp án: chỉ đánh dấu đã chọn, KHÔNG chấm đúng sai ngay lập tức
  window.selectListeningAnswer = (qId, optionKey) => {
    if (listeningSubmitted[selectedTestSetIndex]) return; // Đã nộp bài thì khóa

    if (!listeningUserAnswers[selectedTestSetIndex]) {
      listeningUserAnswers[selectedTestSetIndex] = {};
    }
    listeningUserAnswers[selectedTestSetIndex][qId] = optionKey;

    // Cập nhật DOM nhanh gọn
    const qCard = document.getElementById(`lq-${qId}`);
    if (qCard) {
      const options = qCard.querySelectorAll('.quiz-option');
      options.forEach(opt => {
        const key = opt.getAttribute('data-key');
        if (key === optionKey) {
          opt.classList.add('selected');
        } else {
          opt.classList.remove('selected');
        }
      });
    }

    // Cập nhật nút trong bảng điều hướng câu hỏi
    const navBtn = document.getElementById(`nav-lq-${qId}`);
    if (navBtn) {
      navBtn.style.background = 'var(--primary)';
      navBtn.style.color = '#fff';
    }

    // Cập nhật số câu đã chọn trên các nút nộp bài
    const sets = listeningPracticeTests.testSets || [];
    const testSet = sets[selectedTestSetIndex] || sets[0] || {};
    const allQuestions = getAllTestQuestions(testSet);
    const currentAnswers = listeningUserAnswers[selectedTestSetIndex] || {};
    const answeredCount = allQuestions.filter(q => currentAnswers[q.id] !== undefined).length;

    const submitBtnTop = document.getElementById('btn-submit-listening-top');
    const submitBtnBtm = document.getElementById('btn-submit-listening-btm');
    if (submitBtnTop) {
      submitBtnTop.innerHTML = `<i data-lucide="check-circle" style="width: 14px; height: 14px;"></i> Nộp bài (${answeredCount}/${allQuestions.length})`;
    }
    if (submitBtnBtm) {
      submitBtnBtm.innerHTML = `<i data-lucide="check-circle"></i> Nộp Bài Luyện Nghe (${answeredCount}/${allQuestions.length})`;
    }
  };

  // Nộp bài nghe: chỉ khi bấm Nộp mới chấm điểm, hiển thị kết quả và hiện giải thích
  window.submitListeningTest = () => {
    const sets = listeningPracticeTests.testSets || [];
    const testSet = sets[selectedTestSetIndex] || sets[0] || {};
    const allQuestions = getAllTestQuestions(testSet);
    const currentAnswers = listeningUserAnswers[selectedTestSetIndex] || {};
    const answeredCount = allQuestions.filter(q => currentAnswers[q.id] !== undefined).length;

    if (answeredCount === 0) {
      if (window.showToast) window.showToast('Vui lòng chọn đáp án trước khi nộp bài!', 'warning');
      return;
    }

    listeningSubmitted[selectedTestSetIndex] = true;

    // Tính điểm số
    let correctCount = 0;
    allQuestions.forEach(q => {
      if (currentAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });
    const percent = Math.round((correctCount / allQuestions.length) * 100);

    // Ghi nhận điểm vào Analytics
    AnalyticsStore.recordSession('listening', percent, {
      source: 'listening_practice',
      setIndex: selectedTestSetIndex,
      correctCount,
      total: allQuestions.length
    });

    if (window.showToast) {
      window.showToast(`🎉 Đã nộp bài! Kết quả: ${correctCount}/${allQuestions.length} câu đúng (${percent}%)`, 'success');
    }

    window.app.renderCurrentView(true);

    // Cuộn mượt lên bảng điểm
    setTimeout(() => {
      const banner = document.getElementById('listening-score-banner');
      if (banner) {
        banner.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Làm lại đề nghe này
  window.retryListeningTest = () => {
    delete listeningSubmitted[selectedTestSetIndex];
    delete listeningUserAnswers[selectedTestSetIndex];

    if (window.showToast) {
      window.showToast('Đã làm mới đề nghe, bạn có thể làm lại từ đầu.', 'info');
    }

    window.app.renderCurrentView(true);
  };

  window.scrollToListeningQuestion = (qId) => {
    const el = document.getElementById(`lq-${qId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.style.boxShadow = '0 0 0 2px var(--primary)';
      setTimeout(() => { el.style.boxShadow = ''; }, 1500);
    }
  };

  return `
    <div class="listening-page animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2>Luyện Kỹ Năng Nghe</h2>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn ${activeListeningTab === 'practice' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleListeningTabChange('practice')">
            <i data-lucide="play-circle"></i> Luyện Đề (${(listeningPracticeTests.testSets || []).length})
          </button>
          <button class="btn ${activeListeningTab === 'skills' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleListeningTabChange('skills')">
            <i data-lucide="compass"></i> 12 Kỹ Năng
          </button>
        </div>
      </div>

      ${activeListeningTab === 'practice' ? renderPracticeTab() : renderSkillsTab()}
    </div>
  `;
}

function renderPracticeTab() {
  const sets = listeningPracticeTests.testSets || [];
  const testSet = sets[selectedTestSetIndex] || sets[0] || {};
  const isAuthentic = !!testSet.audioUrl;
  const isSubmitted = !!listeningSubmitted[selectedTestSetIndex];
  const currentAnswers = listeningUserAnswers[selectedTestSetIndex] || {};

  const allQuestions = getAllTestQuestions(testSet);
  const answeredCount = allQuestions.filter(q => currentAnswers[q.id] !== undefined).length;
  let correctCount = 0;
  if (isSubmitted) {
    allQuestions.forEach(q => {
      if (currentAnswers[q.id] === q.correctAnswer) correctCount++;
    });
  }
  const percent = allQuestions.length > 0 ? Math.round((correctCount / allQuestions.length) * 100) : 0;
  const wrongCount = answeredCount - correctCount;
  const unansweredCount = allQuestions.length - answeredCount;

  const part1 = testSet.part1 || { title: 'Part 1: 8 Thông Báo Ngắn', questions: [] };
  const part2 = testSet.part2 || { title: 'Part 2: 3 Đoạn Hội Thoại Dài', conversations: [] };
  const part3 = testSet.part3 || { title: 'Part 3: 3 Bài Thuyết Trình Học Thuật', lectures: [] };

  return `
    <div>
      <!-- Test Set Selector Carousel -->
      <div class="tabs-header" style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.5rem; margin-bottom: 1.25rem;">
        ${sets.map((s, idx) => `
          <button class="tab-btn ${selectedTestSetIndex === idx ? 'active' : ''}" onclick="window.handleListeningSetChange(${idx})" style="white-space: nowrap; font-weight: 700; font-size: 0.9rem; display: flex; align-items: center; gap: 0.4rem;">
            <i data-lucide="disc" style="width: 15px; height: 15px;"></i>
            <span>Đề ${idx + 1}</span>
            ${listeningSubmitted[idx] ? '<span class="badge badge-success" style="font-size: 0.7rem; padding: 0.1rem 0.35rem;">Đã nộp</span>' : ''}
          </button>
        `).join('')}
      </div>

      <!-- Bảng Kết Quả Chấm Điểm Sau Khi Nộp Bài -->
      ${isSubmitted ? `
        <div id="listening-score-banner" class="card animate-fade-in" style="margin-bottom: 2rem; border-left: 6px solid ${percent >= 60 ? 'var(--success)' : 'var(--warning)'}; background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); padding: 1.75rem 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.25rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                <span class="badge ${percent >= 60 ? 'badge-success' : 'badge-warning'}" style="font-size: 0.9rem; font-weight: 800; padding: 0.35rem 0.75rem;">
                  ${percent >= 80 ? 'Xuất sắc • C1 VSTEP' : (percent >= 65 ? 'Đạt Chuẩn B2' : (percent >= 45 ? 'Đạt Chuẩn B1' : 'Cần Cải Thiện'))}
                </span>
                <span style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600;">Kết Quả Bài Luyện Nghe</span>
              </div>
              <h2 style="margin: 0 0 0.5rem 0; font-size: 2rem; color: var(--text-primary); font-weight: 800;">
                ${correctCount} / ${allQuestions.length} <span style="font-size: 1.2rem; font-weight: 600; color: var(--text-secondary);">câu đúng (${percent}%)</span>
              </h2>
              <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem; max-width: 600px; line-height: 1.6;">
                ${percent >= 80 
                  ? 'Kỹ năng nghe của bạn rất xuất sắc! Bạn đã nắm bắt trọn vẹn mạch thông tin và vượt qua các bẫy đảo ngữ của đề thi.' 
                  : (percent >= 60 
                    ? 'Bạn đã đạt chuẩn năng lực B1-B2 vững vàng. Hãy rà soát lại các câu sai bên dưới để rút kinh nghiệm về các bẫy thời gian và địa điểm.' 
                    : 'Hãy xem lại đáp án và phân tích chi tiết từng câu bên dưới để củng cố thêm từ vựng và phản xạ nghe hiểu.')}
              </p>
            </div>
            
            <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
              <div style="text-align: center; padding: 0.75rem 1.25rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                <div style="font-size: 1.4rem; font-weight: 800; color: var(--success);">${correctCount}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Câu đúng</div>
              </div>
              <div style="text-align: center; padding: 0.75rem 1.25rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                <div style="font-size: 1.4rem; font-weight: 800; color: var(--danger);">${wrongCount}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Câu sai</div>
              </div>
              <div style="text-align: center; padding: 0.75rem 1.25rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                <div style="font-size: 1.4rem; font-weight: 800; color: var(--text-muted);">${unansweredCount}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Chưa làm</div>
              </div>
              <button class="btn btn-secondary" onclick="window.retryListeningTest()" style="font-weight: 700; padding: 0.75rem 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="rotate-ccw"></i> Làm lại
              </button>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Sticky Master Audio Player & Navigation Header -->
      <div style="position: sticky; top: 10px; z-index: 99; margin-bottom: 2rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1rem 1.25rem; box-shadow: var(--shadow-md);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="badge badge-primary"><i data-lucide="disc"></i> Audio Đề ${selectedTestSetIndex + 1}</span>
            <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">
              ${isSubmitted ? `Đã nộp: ${correctCount}/${allQuestions.length} đúng` : `Đã làm: ${answeredCount}/${allQuestions.length} câu`}
            </span>
          </div>
          
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <div style="display: flex; gap: 0.35rem;">
              <button class="btn btn-secondary btn-sm" onclick="document.getElementById('p1-block').scrollIntoView({behavior: 'smooth'})" style="font-size: 0.75rem; padding: 0.2rem 0.55rem;">Part 1</button>
              <button class="btn btn-secondary btn-sm" onclick="document.getElementById('p2-block').scrollIntoView({behavior: 'smooth'})" style="font-size: 0.75rem; padding: 0.2rem 0.55rem;">Part 2</button>
              <button class="btn btn-secondary btn-sm" onclick="document.getElementById('p3-block').scrollIntoView({behavior: 'smooth'})" style="font-size: 0.75rem; padding: 0.2rem 0.55rem;">Part 3</button>
            </div>
            
            ${isSubmitted ? `
              <button class="btn btn-secondary btn-sm" onclick="window.retryListeningTest()" style="font-weight: 700; white-space: nowrap; font-size: 0.8rem; padding: 0.35rem 0.75rem; display: flex; align-items: center; gap: 0.35rem;">
                <i data-lucide="rotate-ccw" style="width: 14px; height: 14px;"></i> Làm lại
              </button>
            ` : `
              <button id="btn-submit-listening-top" class="btn btn-primary btn-sm" onclick="window.submitListeningTest()" style="font-weight: 700; white-space: nowrap; font-size: 0.8rem; padding: 0.35rem 0.75rem; display: flex; align-items: center; gap: 0.35rem;">
                <i data-lucide="check-circle" style="width: 14px; height: 14px;"></i> Nộp bài (${answeredCount}/${allQuestions.length})
              </button>
            `}
          </div>
        </div>

        ${isAuthentic ? renderAudioPlayerComponent(`lview-full-master-${selectedTestSetIndex}`, testSet.audioUrl, `Audio Đề ${selectedTestSetIndex + 1}`, testSet.audioUrl) : ''}

        <!-- Mini Question Jump Navigation -->
        <div style="display: flex; gap: 0.25rem; flex-wrap: wrap; margin-top: 0.75rem; padding-top: 0.65rem; border-top: 1px dashed var(--border-color); align-items: center;">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); margin-right: 0.25rem;">Câu hỏi:</span>
          ${allQuestions.map((q, idx) => {
            const hasAnswered = currentAnswers[q.id] !== undefined;
            const isRight = isSubmitted && currentAnswers[q.id] === q.correctAnswer;
            const isWrong = isSubmitted && hasAnswered && currentAnswers[q.id] !== q.correctAnswer;
            let btnStyle = '';
            if (isSubmitted) {
              btnStyle = isRight 
                ? 'background: var(--success); color: #fff;' 
                : (isWrong ? 'background: var(--danger); color: #fff;' : 'background: var(--bg-muted); color: var(--text-muted);');
            } else if (hasAnswered) {
              btnStyle = 'background: var(--primary); color: #fff;';
            }
            return `
              <button id="nav-lq-${q.id}" class="tab-btn" 
                      style="padding: 0.15rem 0.45rem; font-size: 0.75rem; font-weight: 700; min-width: 26px; text-align: center; ${btnStyle}" 
                      onclick="window.scrollToListeningQuestion('${q.id}')">
                ${idx + 1}
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Hiển thị liền mạch toàn bộ 35 câu từ Part 1 đến Part 3 -->
      <div id="p1-block" style="margin-bottom: 3rem;">
        ${renderPart1Section(part1, testSet, isSubmitted, currentAnswers)}
      </div>
      <div id="p2-block" style="margin-bottom: 3rem;">
        ${renderPart2Section(part2, testSet, isSubmitted, currentAnswers)}
      </div>
      <div id="p3-block" style="margin-bottom: 3rem;">
        ${renderPart3Section(part3, testSet, isSubmitted, currentAnswers)}
      </div>

      <!-- Khối Nộp Bài Cuối Trang -->
      <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 3rem; margin-bottom: 4rem; padding: 2.25rem 2rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); text-align: center; box-shadow: var(--shadow-sm);">
        ${isSubmitted ? `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.85rem;">
            <div class="badge badge-success" style="font-size: 0.9rem; font-weight: 700; padding: 0.4rem 1rem;">Đã hoàn thành chấm điểm</div>
            <h3 style="margin: 0; color: var(--text-primary); font-size: 1.4rem;">Điểm của bạn: ${correctCount} / ${allQuestions.length} câu đúng (${percent}%)</h3>
            <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">Bạn có thể rà soát lại lời giải thích chi tiết ở từng câu phía trên hoặc làm lại đề này.</p>
            <button class="btn btn-secondary" onclick="window.retryListeningTest()" style="font-weight: 700; padding: 0.75rem 2rem; margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="rotate-ccw"></i> Làm lại đề này
            </button>
          </div>
        ` : `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; max-width: 500px;">
            <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
              Đã trả lời <strong style="color: var(--primary);">${answeredCount}/${allQuestions.length}</strong> câu hỏi. Sau khi bạn bấm <strong>Nộp bài</strong>, hệ thống sẽ chấm điểm và hiển thị toàn bộ đáp án đúng kèm giải thích chi tiết.
            </p>
            <button id="btn-submit-listening-btm" class="btn btn-primary" onclick="window.submitListeningTest()" style="font-weight: 800; font-size: 1.05rem; padding: 0.85rem 2.5rem; box-shadow: var(--shadow-md); display: flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="check-circle"></i> Nộp Bài Luyện Nghe (${answeredCount}/${allQuestions.length})
            </button>
          </div>
        `}
      </div>
    </div>
  `;
}

function renderSkillsTab() {
  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--primary); padding: 1.5rem 2rem;">
        <h3 style="color: var(--primary); margin: 0 0 0.5rem 0; font-size: 1.45rem;">12 Kỹ Năng Nghe Vi Mô Trọng Tâm VSTEP B1 (Micro-Skills)</h3>
        <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">Hệ thống hóa toàn diện các kỹ thuật nghe hiểu, bắt bẫy số liệu, thời gian, từ đồng nghĩa và nhận diện thái độ người nói.</p>
      </div>

      <div class="grid-2" style="gap: 1.5rem;">
        ${(microSkills || []).map(skill => `
          <div class="card" style="padding: 1.75rem; border-top: 4px solid var(--primary); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <span class="badge badge-primary">Kỹ Năng ${skill.id}</span>
                <span class="badge badge-secondary">Chuẩn B1</span>
              </div>
              <h3 style="color: var(--primary); margin: 0 0 0.75rem 0; font-size: 1.2rem; line-height: 1.4;">${skill.name}</h3>
              
              <div style="background: var(--bg-muted); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
                <strong style="color: var(--secondary); font-size: 0.875rem; display: block; margin-bottom: 0.35rem;">
                  <i data-lucide="crosshair" style="width: 14px; height: 14px; vertical-align: middle;"></i> Chiến thuật xử lý:
                </strong>
                <p style="font-size: 0.875rem; margin: 0; line-height: 1.6; color: var(--text-primary);">${skill.technique}</p>
              </div>

              ${skill.cueWords && skill.cueWords.length > 0 ? `
                <div style="margin-bottom: 1rem;">
                  <strong style="font-size: 0.85rem; color: var(--text-muted); display: block; margin-bottom: 0.35rem;">
                    <i data-lucide="sparkles" style="width: 13px; height: 13px; vertical-align: middle;"></i> Tín hiệu nhận diện âm thanh (Cue words):
                  </strong>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
                    ${skill.cueWords.map(c => `<span class="badge badge-muted" style="font-size: 0.8rem;">${c}</span>`).join('')}
                  </div>
                </div>
              ` : ''}

              ${skill.sampleQuestion ? `
                <div style="background: var(--bg-accent); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-size: 0.85rem; margin-bottom: 0.75rem;">
                  <strong style="color: var(--primary);">Dạng câu hỏi mẫu:</strong>
                  <div style="color: var(--text-primary); margin-top: 0.2rem; font-style: italic;">"${skill.sampleQuestion}"</div>
                </div>
              ` : ''}
            </div>

            ${skill.tip ? `
              <div style="background: var(--success-light, rgba(16,185,129,0.1)); border-left: 3px solid var(--success); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.825rem; color: var(--success-text, #047857);">
                <strong>Mẹo bắt bẫy VSTEP:</strong> ${skill.tip}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderPart1Section(part1, testSet = null, isSubmitted = false, currentAnswers = {}) {
  const questions = part1.questions || [];
  const isAuthentic = !!testSet?.audioUrl;
  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--primary);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h3 style="margin: 0 0 0.25rem 0; color: var(--primary);">${part1.title}</h3>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">${part1.description || 'Nghe 8 đoạn thông báo/hướng dẫn ngắn và chọn đáp án chính xác'}</p>
          </div>
          <span class="badge badge-secondary">8 Câu Hỏi (1 - 8)</span>
        </div>
        ${!isAuthentic ? `
          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
            ${renderAudioPlayerComponent('lview-p1-master', VstepAudioDirector.buildPart1FullAudioScript(part1), 'Audio Part 1')}
          </div>
        ` : ''}
      </div>

      ${questions.map((q, idx) => {
        const audioId = `lp1-${q.id}`;
        const script = VstepAudioDirector.buildQuestionAudioScript(q, idx + 1);
        const userAns = currentAnswers[q.id];
        const isCorrect = isSubmitted && userAns === q.correctAnswer;
        const isWrong = isSubmitted && userAns && userAns !== q.correctAnswer;

        return `
          <div class="card" id="lq-${q.id}" style="padding: 2rem; border: 1px solid var(--border-color); ${isSubmitted ? (isCorrect ? 'border-left: 4px solid var(--success);' : 'border-left: 4px solid var(--danger);') : ''} transition: all 0.3s ease;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span class="badge badge-primary" style="font-weight: 700;">Câu ${idx + 1}</span>
                ${isSubmitted ? (isCorrect 
                  ? '<span class="badge badge-success" style="font-weight: 700;">✓ Đúng</span>' 
                  : (userAns ? `<span class="badge badge-danger" style="font-weight: 700;">✗ Sai (Bạn chọn ${userAns})</span>` : '<span class="badge badge-muted" style="font-weight: 700;">Chưa làm</span>')) : ''}
              </div>
              <span style="font-size: 0.85rem; color: var(--text-muted);">Dạng bài: Thông báo công cộng / Hướng dẫn</span>
            </div>

            <!-- Audio Player chỉ hiện khi đề dùng TTS tổng hợp -->
            ${!isAuthentic ? renderAudioPlayerComponent(audioId, script, `Audio Câu ${idx + 1}`) : ''}

            <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 1.25rem; color: var(--text-primary); line-height: 1.5;">
              ${q.question}
            </div>

            <!-- Multiple Choice Options -->
            <div style="display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.25rem;">
              ${(q.options || []).map(opt => {
                let optClass = 'quiz-option';
                let optStyle = 'cursor: pointer; padding: 0.85rem 1.15rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); font-size: 0.95rem; display: flex; align-items: center; gap: 0.75rem; transition: all var(--transition-fast);';

                if (isSubmitted) {
                  optStyle += ' cursor: default;';
                  if (opt.key === q.correctAnswer) {
                    optClass += ' correct';
                  } else if (userAns === opt.key && opt.key !== q.correctAnswer) {
                    optClass += ' incorrect';
                  }
                } else {
                  if (userAns === opt.key) {
                    optClass += ' selected';
                  }
                }

                return `
                  <div class="${optClass}" data-key="${opt.key}" 
                       ${!isSubmitted ? `onclick="window.selectListeningAnswer('${q.id}', '${opt.key}')"` : ''} 
                       style="${optStyle}">
                    <strong style="color: var(--primary); font-family: var(--font-mono);">${opt.key}.</strong>
                    <span>${opt.text}</span>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Detailed Explanation Drawer (CHỈ HIỂN THỊ KHI ĐÃ BẤM NỘP BÀI) -->
            <div class="quiz-explanation" style="${isSubmitted ? 'display: block;' : 'display: none;'} background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--success); padding: 1.25rem; border-radius: var(--radius-md); font-size: 0.9rem; line-height: 1.7;">
              <strong style="color: var(--success-text); font-size: 0.95rem;">Đáp án đúng: ${q.correctAnswer}</strong>
              <p style="margin: 0.35rem 0 0.5rem 0; color: var(--text-primary);">${q.explanation}</p>
              ${q.keyVocab ? `
                <div style="color: var(--secondary); font-size: 0.85rem;">
                  <strong>Từ vựng then chốt:</strong> ${Array.isArray(q.keyVocab) ? q.keyVocab.join(' • ') : q.keyVocab}
                </div>
              ` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderPart2Section(part2, testSet = null, isSubmitted = false, currentAnswers = {}) {
  const conversations = part2.conversations || [];
  const isAuthentic = !!testSet?.audioUrl;
  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--secondary);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h3 style="margin: 0 0 0.25rem 0; color: var(--secondary);">${part2.title}</h3>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">${part2.instructions || 'Nghe 3 cuộc hội thoại và chọn đáp án chính xác cho các câu hỏi 9 - 20'}</p>
          </div>
          <span class="badge badge-secondary">12 Câu Hỏi (9 - 20)</span>
        </div>
        ${!isAuthentic ? `
          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
            ${renderAudioPlayerComponent('lview-p2-master', VstepAudioDirector.buildPart2FullAudioScript(part2), 'Audio Part 2')}
          </div>
        ` : ''}
      </div>

      ${conversations.map((conv, cIdx) => {
        const audioId = `lp2-${conv.id}`;
        const startQ = 9 + (cIdx * 4);
        const endQ = startQ + 3;
        const script = VstepAudioDirector.buildConversationAudioScript(conv, startQ, endQ);
        return `
          <div class="card" style="padding: 2rem; border: 1px solid var(--border-color);">
            <div style="margin-bottom: 1rem;">
              <span class="badge badge-secondary" style="margin-bottom: 0.35rem;">Hội Thoại ${cIdx + 1} (Câu ${startQ} - ${endQ})</span>
              <h3 style="margin: 0; font-size: 1.3rem; color: var(--primary);">${conv.title}</h3>
            </div>

            <!-- Audio Player chỉ hiện khi đề dùng TTS tổng hợp -->
            ${!isAuthentic ? renderAudioPlayerComponent(audioId, script, `Audio ${conv.title}`) : ''}

            <!-- Sub-questions -->
            <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem;">
              ${(conv.questions || []).map(q => {
                const userAns = currentAnswers[q.id];
                const isCorrect = isSubmitted && userAns === q.correctAnswer;
                const isWrong = isSubmitted && userAns && userAns !== q.correctAnswer;

                return `
                  <div id="lq-${q.id}" style="background: var(--bg-surface); border: 1px solid var(--border-color); ${isSubmitted ? (isCorrect ? 'border-left: 4px solid var(--success);' : 'border-left: 4px solid var(--danger);') : ''} border-radius: var(--radius-md); padding: 1.25rem; transition: all 0.3s ease;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
                      <div style="font-weight: 700; font-size: 1rem; color: var(--text-primary);">
                        Câu ${q.id}: ${q.question}
                      </div>
                      ${isSubmitted ? (isCorrect 
                        ? '<span class="badge badge-success" style="font-weight: 700;">✓ Đúng</span>' 
                        : (userAns ? `<span class="badge badge-danger" style="font-weight: 700;">✗ Sai (Bạn chọn ${userAns})</span>` : '<span class="badge badge-muted" style="font-weight: 700;">Chưa làm</span>')) : ''}
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.6rem; margin-bottom: 0.85rem;">
                      ${(q.options || []).map(opt => {
                        let optClass = 'quiz-option';
                        let optStyle = 'cursor: pointer; padding: 0.75rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; transition: all var(--transition-fast);';

                        if (isSubmitted) {
                          optStyle += ' cursor: default;';
                          if (opt.key === q.correctAnswer) {
                            optClass += ' correct';
                          } else if (userAns === opt.key && opt.key !== q.correctAnswer) {
                            optClass += ' incorrect';
                          }
                        } else {
                          if (userAns === opt.key) {
                            optClass += ' selected';
                          }
                        }

                        return `
                          <div class="${optClass}" data-key="${opt.key}" 
                               ${!isSubmitted ? `onclick="window.selectListeningAnswer('${q.id}', '${opt.key}')"` : ''} 
                               style="${optStyle}">
                            <strong style="color: var(--primary);">${opt.key}.</strong>
                            <span>${opt.text}</span>
                          </div>
                        `;
                      }).join('')}
                    </div>

                    <!-- Detailed Explanation Drawer (CHỈ HIỆN KHI ĐÃ NỘP BÀI) -->
                    <div class="quiz-explanation" style="${isSubmitted ? 'display: block;' : 'display: none;'} background: var(--bg-muted); padding: 0.85rem 1rem; border-radius: var(--radius-sm); font-size: 0.875rem; border-left: 3px solid var(--success); line-height: 1.6;">
                      <strong style="color: var(--success-text);">Đáp án đúng: ${q.correctAnswer}</strong> ➔ ${q.explanation}
                      ${q.keyVocab ? `
                        <div style="color: var(--secondary); font-size: 0.825rem; margin-top: 0.35rem;">
                          <strong>Từ vựng:</strong> ${Array.isArray(q.keyVocab) ? q.keyVocab.join(' • ') : q.keyVocab}
                        </div>
                      ` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderPart3Section(part3, testSet = null, isSubmitted = false, currentAnswers = {}) {
  const talks = part3.lectures || part3.talks || [];
  const isAuthentic = !!testSet?.audioUrl;
  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--success);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h3 style="margin: 0 0 0.25rem 0; color: var(--success-text);">${part3.title}</h3>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">${part3.instructions || 'Nghe 3 bài nói/bài giảng và chọn đáp án chính xác cho các câu hỏi 21 - 35'}</p>
          </div>
          <span class="badge badge-secondary">15 Câu Hỏi (21 - 35)</span>
        </div>
        ${!isAuthentic ? `
          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
            ${renderAudioPlayerComponent('lview-p3-master', VstepAudioDirector.buildPart3FullAudioScript(part3), 'Audio Part 3')}
          </div>
        ` : ''}
      </div>

      ${talks.map((talk, tIdx) => {
        const audioId = `lp3-${talk.id}`;
        const startQ = 21 + (tIdx * 5);
        const endQ = startQ + 4;
        const script = VstepAudioDirector.buildTalkAudioScript(talk, startQ, endQ);
        return `
          <div class="card" style="padding: 2rem; border: 1px solid var(--border-color);">
            <div style="margin-bottom: 1rem;">
              <span class="badge badge-secondary" style="margin-bottom: 0.35rem;">Bài Giảng ${tIdx + 1} (Câu ${startQ} - ${endQ})</span>
              <h3 style="margin: 0; font-size: 1.3rem; color: var(--primary);">${talk.title}</h3>
            </div>

            <!-- Audio Player chỉ hiện khi đề dùng TTS tổng hợp -->
            ${!isAuthentic ? renderAudioPlayerComponent(audioId, script, `Audio ${talk.title}`) : ''}

            <!-- Sub-questions -->
            <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem;">
              ${(talk.questions || []).map(q => {
                const userAns = currentAnswers[q.id];
                const isCorrect = isSubmitted && userAns === q.correctAnswer;
                const isWrong = isSubmitted && userAns && userAns !== q.correctAnswer;

                return `
                  <div id="lq-${q.id}" style="background: var(--bg-surface); border: 1px solid var(--border-color); ${isSubmitted ? (isCorrect ? 'border-left: 4px solid var(--success);' : 'border-left: 4px solid var(--danger);') : ''} border-radius: var(--radius-md); padding: 1.25rem; transition: all 0.3s ease;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
                      <div style="font-weight: 700; font-size: 1rem; color: var(--text-primary);">
                        Câu ${q.id}: ${q.question}
                      </div>
                      ${isSubmitted ? (isCorrect 
                        ? '<span class="badge badge-success" style="font-weight: 700;">✓ Đúng</span>' 
                        : (userAns ? `<span class="badge badge-danger" style="font-weight: 700;">✗ Sai (Bạn chọn ${userAns})</span>` : '<span class="badge badge-muted" style="font-weight: 700;">Chưa làm</span>')) : ''}
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.6rem; margin-bottom: 0.85rem;">
                      ${(q.options || []).map(opt => {
                        let optClass = 'quiz-option';
                        let optStyle = 'cursor: pointer; padding: 0.75rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; transition: all var(--transition-fast);';

                        if (isSubmitted) {
                          optStyle += ' cursor: default;';
                          if (opt.key === q.correctAnswer) {
                            optClass += ' correct';
                          } else if (userAns === opt.key && opt.key !== q.correctAnswer) {
                            optClass += ' incorrect';
                          }
                        } else {
                          if (userAns === opt.key) {
                            optClass += ' selected';
                          }
                        }

                        return `
                          <div class="${optClass}" data-key="${opt.key}" 
                               ${!isSubmitted ? `onclick="window.selectListeningAnswer('${q.id}', '${opt.key}')"` : ''} 
                               style="${optStyle}">
                            <strong style="color: var(--primary);">${opt.key}.</strong>
                            <span>${opt.text}</span>
                          </div>
                        `;
                      }).join('')}
                    </div>

                    <!-- Detailed Explanation Drawer (CHỈ HIỆN KHI ĐÃ NỘP BÀI) -->
                    <div class="quiz-explanation" style="${isSubmitted ? 'display: block;' : 'display: none;'} background: var(--bg-muted); padding: 0.85rem 1rem; border-radius: var(--radius-sm); font-size: 0.875rem; border-left: 3px solid var(--success); line-height: 1.6;">
                      <strong style="color: var(--success-text);">Đáp án đúng: ${q.correctAnswer}</strong> ➔ ${q.explanation}
                      ${q.keyVocab ? `
                        <div style="color: var(--secondary); font-size: 0.825rem; margin-top: 0.35rem;">
                          <strong>Từ vựng:</strong> ${Array.isArray(q.keyVocab) ? q.keyVocab.join(' • ') : q.keyVocab}
                        </div>
                      ` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}
