import { readingSkills, practicePassages } from '../../data/reading/index.js';
import { initReadingInTextLookup } from '../modules/reading/readingLookup.js';
import { AnalyticsStore } from '../modules/analytics/analyticsStore.js';

let activeReadingTab = 'passages'; // 'passages' | 'strategies'
let selectedPassageIndex = 0;
let readingUserAnswers = {};
let passageSubmitted = {}; // { [passageIndex]: boolean }

export function renderReadingView() {
  window.handleReadingTabChange = (tab) => {
    activeReadingTab = tab;
    window.app.renderCurrentView();
  };

  window.handlePassageSelect = (idx) => {
    selectedPassageIndex = idx;
    window.app.renderCurrentView();
  };

  // Chọn đáp án: chỉ đánh dấu đã chọn, KHÔNG chấm đúng sai ngay lập tức
  window.selectReadingAnswer = (qId, optionKey) => {
    if (passageSubmitted[selectedPassageIndex]) return; // Đã nộp bài thì không đổi

    readingUserAnswers[qId] = optionKey;

    // Cập nhật DOM tại chỗ nhanh chóng, không giật màn hình
    const qCard = document.getElementById(`rq-${qId}`);
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
    const navBtn = document.getElementById(`nav-rq-${qId}`);
    if (navBtn) {
      navBtn.classList.add('active');
    }

    // Cập nhật số câu đã chọn trên nút nộp bài
    const submitBtn = document.getElementById('btn-submit-reading-top');
    const submitBtnBtm = document.getElementById('btn-submit-reading-btm');
    const currentPassage = (practicePassages && practicePassages[selectedPassageIndex]) || (practicePassages && practicePassages[0]) || {};
    const pQuestions = currentPassage.questions || [];
    const answeredCount = pQuestions.filter(q => readingUserAnswers[q.id] !== undefined).length;
    if (submitBtn) submitBtn.innerText = `Nộp bài (${answeredCount}/${pQuestions.length})`;
    if (submitBtnBtm) submitBtnBtm.innerText = `Nộp bài (${answeredCount}/${pQuestions.length})`;
  };

  // Nộp bài đọc: chỉ khi bấm Nộp mới chấm điểm và hiện giải thích
  window.submitReadingPassage = () => {
    const currentPassage = (practicePassages && practicePassages[selectedPassageIndex]) || (practicePassages && practicePassages[0]) || {};
    const questions = currentPassage.questions || [];
    const answeredCount = questions.filter(q => readingUserAnswers[q.id] !== undefined).length;

    if (answeredCount === 0) {
      if (window.showToast) window.showToast('Vui lòng chọn đáp án trước khi nộp bài!', 'warning');
      return;
    }

    passageSubmitted[selectedPassageIndex] = true;

    // Tính điểm số thực tế
    let correctCount = 0;
    questions.forEach(q => {
      if (readingUserAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });
    const percent = Math.round((correctCount / questions.length) * 100);

    // Ghi nhận điểm quân bình vào bản đồ năng lực
    AnalyticsStore.recordSession('reading', percent, {
      source: 'reading_practice',
      passageIndex: selectedPassageIndex,
      correctCount,
      total: questions.length
    });

    if (window.showToast) {
      window.showToast(`🎉 Kết quả: ${correctCount}/${questions.length} câu đúng (${percent}%)`, 'success');
    }

    window.app.renderCurrentView(true);
  };

  // Làm lại bài đọc này
  window.retryReadingPassage = () => {
    delete passageSubmitted[selectedPassageIndex];
    const currentPassage = (practicePassages && practicePassages[selectedPassageIndex]) || (practicePassages && practicePassages[0]) || {};
    (currentPassage.questions || []).forEach(q => {
      delete readingUserAnswers[q.id];
    });

    if (window.showToast) {
      window.showToast('Đã làm mới bài đọc, bạn có thể làm lại từ đầu.', 'info');
    }

    window.app.renderCurrentView(true);
  };

  // Initialize In-Text Quick Lookup when passage is displayed
  setTimeout(() => {
    initReadingInTextLookup('.passage-paper');
  }, 50);

  window.scrollToQuestion = (qId) => {
    const el = document.getElementById(`rq-${qId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.style.boxShadow = '0 0 0 2px var(--primary)';
      setTimeout(() => el.style.boxShadow = '', 1500);
    }
  };

  const currentPassage = (practicePassages && practicePassages[selectedPassageIndex]) || (practicePassages && practicePassages[0]) || {};

  return `
    <div class="reading-page animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2>Luyện Kỹ Năng Đọc</h2>
          <p>Luyện đọc hiểu theo định dạng bài thi VSTEP kèm phân tích câu hỏi</p>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn ${activeReadingTab === 'passages' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleReadingTabChange('passages')">
            <i data-lucide="book-open"></i> Bài Đọc (${practicePassages.length})
          </button>
          <button class="btn ${activeReadingTab === 'strategies' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleReadingTabChange('strategies')">
            <i data-lucide="crosshair"></i> 9 Chiến Thuật
          </button>
        </div>
      </div>

      ${activeReadingTab === 'passages' ? renderPassagesTab(currentPassage) : renderStrategiesTab()}
    </div>
  `;
}

function renderPassagesTab(passage) {
  const paragraphs = passage.paragraphs || (passage.text ? passage.text.split('\n').filter(p => p.trim()) : []);
  const questions = passage.questions || [];
  const isSubmitted = !!passageSubmitted[selectedPassageIndex];
  const answeredCount = questions.filter(q => readingUserAnswers[q.id] !== undefined).length;
  let correctCount = 0;
  if (isSubmitted) {
    questions.forEach(q => {
      if (readingUserAnswers[q.id] === q.correctAnswer) correctCount += 1;
    });
  }
  const percent = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  return `
    <div>
      <!-- Passage Selector Carousel -->
      <div class="tabs-header" style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.5rem; margin-bottom: 1.25rem;">
        ${(practicePassages || []).map((p, idx) => `
          <button class="tab-btn ${idx === selectedPassageIndex ? 'active' : ''}" 
                  style="white-space: nowrap; font-size: 0.875rem; font-weight: 700;"
                  onclick="window.handlePassageSelect(${idx})">
            Bài ${idx + 1}
          </button>
        `).join('')}
      </div>

      <!-- Split-Pane Reading Interface -->
      <div class="grid-2" style="gap: 2rem; align-items: flex-start;">
        
        <!-- Left Column: Authentic Passage Paper -->
        <div class="card" style="padding: 2rem; background: var(--bg-surface); border: 1px solid var(--border-color); box-shadow: var(--shadow-md); position: sticky; top: 1rem; max-height: calc(100vh - 120px); overflow-y: auto;">
          <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
              <span class="badge badge-primary" style="font-weight: 700;">VSTEP B1 Reading • Passage ${selectedPassageIndex + 1}</span>
              <span class="badge badge-secondary">${passage.genre || 'Academic Text'}</span>
            </div>
            <h3 style="font-size: 1.35rem; color: var(--text-primary); margin: 0 0 0.5rem 0; line-height: 1.4;">
              ${passage.title}
            </h3>
            <div style="display: flex; gap: 1rem; font-size: 0.825rem; color: var(--text-muted);">
              <span><i data-lucide="file-text" style="width: 13px; height: 13px;"></i> ~${passage.wordCount || 380} từ</span>
              <span><i data-lucide="clock" style="width: 13px; height: 13px;"></i> Thời gian gợi ý: 12-15 phút</span>
              <span><i data-lucide="check-circle" style="width: 13px; height: 13px;"></i> ${questions.length} câu hỏi</span>
            </div>
          </div>

          <!-- Paragraphs Content -->
          <div class="passage-paper" style="color: var(--text-primary); font-size: 1rem; line-height: 1.9;">
            ${paragraphs.map((para, idx) => `
              <div style="margin-bottom: 1.5rem; text-align: justify;">
                <span style="font-weight: 800; color: var(--primary); font-family: var(--font-mono); background: var(--bg-muted); padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.85rem; margin-right: 0.35rem;">
                  [P${idx + 1}]
                </span>
                ${para}
              </div>
            `).join('')}
          </div>

          <!-- Key Vocabulary Drawer -->
          ${passage.vocabularyHighlights && passage.vocabularyHighlights.length > 0 ? `
            <div style="margin-top: 2rem; background: var(--bg-accent); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-md);">
              <h4 style="color: var(--primary); margin: 0 0 0.75rem 0; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="sparkles" style="width: 16px; height: 16px;"></i> Từ Vựng Học Thuật Cốt Lõi Trong Bài:
              </h4>
              <div style="display: grid; grid-template-columns: 1fr; gap: 0.5rem;">
                ${passage.vocabularyHighlights.map(v => typeof v === 'object' ? `
                  <div style="background: var(--bg-surface); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.875rem; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                      <strong style="color: var(--primary);">${v.word}</strong> 
                      <span style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem; margin-left: 0.35rem;">${v.ipa || ''}</span>
                    </div>
                    <span style="color: var(--secondary); font-style: italic; font-weight: 500;">${v.meaning || ''}</span>
                  </div>
                ` : `
                  <span class="badge badge-secondary">${v}</span>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Right Column: Interactive Questions & Trap Analysis -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          
          <!-- Question Quick Navigator & Submit Bar -->
          <div class="card" style="padding: 1rem 1.25rem; background: var(--bg-accent); border-left: 4px solid var(--primary);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
              <div>
                <h4 style="margin: 0; font-size: 1rem; color: var(--primary);">Bảng Câu Hỏi</h4>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">
                  ${isSubmitted 
                    ? `Kết quả: <strong style="color: var(--primary);">${correctCount}/${questions.length} đúng (${percent}%)</strong>`
                    : `Đã chọn: <strong>${answeredCount}/${questions.length}</strong>`}
                </span>
              </div>

              <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                <div style="display: flex; gap: 0.25rem; flex-wrap: wrap;">
                  ${questions.map((q, qIdx) => {
                    const hasAnswered = readingUserAnswers[q.id] !== undefined;
                    const isRight = isSubmitted && readingUserAnswers[q.id] === q.correctAnswer;
                    const isWrong = isSubmitted && hasAnswered && readingUserAnswers[q.id] !== q.correctAnswer;
                    let btnColorStyle = '';
                    if (isSubmitted) {
                      btnColorStyle = isRight ? 'background: var(--success); color: #fff;' : (isWrong ? 'background: var(--danger); color: #fff;' : '');
                    } else if (hasAnswered) {
                      btnColorStyle = 'background: var(--primary); color: #fff;';
                    }
                    return `
                      <button id="nav-rq-${q.id}" class="tab-btn" 
                              style="padding: 0.25rem 0.55rem; font-size: 0.775rem; font-weight: 700; ${btnColorStyle}" 
                              onclick="window.scrollToQuestion('${q.id}')">
                        Q${qIdx + 1}
                      </button>
                    `;
                  }).join('')}
                </div>

                ${isSubmitted ? `
                  <button class="btn btn-secondary btn-sm" onclick="window.retryReadingPassage()" style="font-weight: 600; white-space: nowrap;">
                    Làm lại
                  </button>
                ` : `
                  <button id="btn-submit-reading-top" class="btn btn-primary btn-sm" onclick="window.submitReadingPassage()" style="font-weight: 700; white-space: nowrap;">
                    Nộp bài ${answeredCount > 0 ? `(${answeredCount}/${questions.length})` : ''}
                  </button>
                `}
              </div>
            </div>
          </div>

          <!-- Question Cards -->
          ${questions.map((q, qIdx) => {
            const userAnswer = readingUserAnswers[q.id];
            const isCorrect = isSubmitted && userAnswer === q.correctAnswer;
            const isIncorrect = isSubmitted && userAnswer && userAnswer !== q.correctAnswer;

            return `
            <div class="card" id="rq-${q.id}" style="padding: 1.75rem; border: 1px solid var(--border-color); ${isSubmitted ? (isCorrect ? 'border-left: 4px solid var(--success);' : 'border-left: 4px solid var(--danger);') : ''} transition: all 0.3s ease;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span class="badge badge-primary" style="font-weight: 700;">Câu Hỏi ${qIdx + 1}</span>
                  ${isSubmitted ? (isCorrect 
                    ? '<span class="badge badge-success" style="font-weight: 700;">✓ Đúng</span>' 
                    : '<span class="badge badge-danger" style="font-weight: 700;">✗ Sai</span>') : ''}
                </div>
                ${q.questionType ? `<span class="badge badge-muted">${q.questionType}</span>` : ''}
              </div>

              <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-primary); margin-bottom: 1.25rem; line-height: 1.5;">
                ${q.question}
              </div>

              <!-- Options List -->
              <div style="display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.25rem;">
                ${(q.options || []).map(opt => {
                  let optionClass = 'quiz-option';
                  let inlineStyle = 'cursor: pointer; padding: 0.85rem 1.15rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); font-size: 0.95rem; display: flex; align-items: flex-start; gap: 0.75rem; transition: all var(--transition-fast);';

                  if (isSubmitted) {
                    inlineStyle += ' cursor: default;';
                    if (opt.key === q.correctAnswer) {
                      optionClass += ' correct';
                    } else if (userAnswer === opt.key && opt.key !== q.correctAnswer) {
                      optionClass += ' incorrect';
                    }
                  } else {
                    if (userAnswer === opt.key) {
                      optionClass += ' selected';
                    }
                  }

                  return `
                    <div class="${optionClass}" data-key="${opt.key}" 
                         ${!isSubmitted ? `onclick="window.selectReadingAnswer('${q.id}', '${opt.key}')"` : ''}
                         style="${inlineStyle}">
                      <span style="font-weight: 800; color: var(--primary); font-family: var(--font-mono);">${opt.key}.</span>
                      <span style="color: var(--text-primary); line-height: 1.4;">${opt.text}</span>
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- Detailed Explanation & Trap Analysis (Chỉ hiện khi đã bấm Nộp bài) -->
              <div class="quiz-explanation" style="${isSubmitted ? 'display: block;' : 'display: none;'} background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--success); padding: 1.25rem; border-radius: var(--radius-md); font-size: 0.9rem; line-height: 1.7;">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                  <span class="badge badge-success" style="font-size: 0.85rem;">Đáp Án Đúng: ${q.correctAnswer}</span>
                </div>
                
                <div style="margin-bottom: 0.5rem; color: var(--text-primary);">
                  <strong>Phân tích đáp án:</strong> ${q.explanation || ''}
                </div>

                ${q.evidence ? `
                  <div style="background: var(--bg-muted); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); color: var(--secondary); font-size: 0.85rem; margin-bottom: 0.5rem;">
                    <strong>Dẫn chứng trong bài đọc:</strong> <em>"${q.evidence}"</em>
                  </div>
                ` : ''}

                ${q.trapAnalysis ? `
                  <div style="color: var(--danger-text); font-size: 0.825rem; background: var(--danger-light); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm);">
                    <strong>Bẫy đề thi thường gặp:</strong> ${q.trapAnalysis}
                  </div>
                ` : ''}
              </div>
            </div>
          `;
          }).join('')}

          <!-- Bottom Submit / Result Bar -->
          <div style="margin-top: 0.5rem; padding: 1.25rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <div style="font-weight: 800; font-size: 1rem; color: var(--text-primary);">
                ${isSubmitted 
                  ? `Kết quả: ${correctCount}/${questions.length} câu đúng (${percent}%)` 
                  : `Đã hoàn thành ${answeredCount}/${questions.length} câu hỏi`}
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.15rem;">
                ${isSubmitted ? 'Bấm "Làm lại" để luyện tập lại từ đầu bài đọc này' : 'Kiểm tra kỹ các đáp án trước khi nộp bài'}
              </div>
            </div>

            ${isSubmitted ? `
              <button class="btn btn-secondary" onclick="window.retryReadingPassage()" style="font-weight: 700; padding: 0.65rem 1.4rem;">
                Làm lại
              </button>
            ` : `
              <button id="btn-submit-reading-btm" class="btn btn-primary" onclick="window.submitReadingPassage()" style="font-weight: 700; padding: 0.65rem 1.6rem;">
                Nộp bài ${answeredCount > 0 ? `(${answeredCount}/${questions.length})` : ''}
              </button>
            `}
          </div>

        </div>
      </div>
    </div>
  `;
}

function renderStrategiesTab() {
  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Hero Banner -->
      <div class="card" style="background: linear-gradient(135deg, #0f172a, #1e293b); color: #fff; border-left: 6px solid var(--primary); padding: 2rem 2.25rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span class="badge badge-primary" style="font-weight: 700;">VSTEP B1 READING MASTERCLASS</span>
          <span style="color: #94a3b8; font-size: 0.9rem;">Khung Năng Lực 6 Bậc Việt Nam</span>
        </div>
        <h2 style="margin: 0 0 0.5rem 0; font-size: 1.85rem; color: #fff;">9 Chiến Thuật Đọc Hiểu Độc Quyền VSTEP B1</h2>
        <p style="margin: 0; color: #cbd5e1; font-size: 1rem; line-height: 1.6;">
          Hệ thống phương pháp xử lý bài thi đọc hiểu đạt điểm tối đa: Tối ưu hóa thời gian, bắt đúng từ khóa, giải mã câu hỏi bẫy và suy luận logic chuẩn xác theo đề thi thật của Bộ GD&ĐT.
        </p>
      </div>

      <!-- 9 Strategies Grid -->
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        ${(readingSkills || []).map(strat => `
          <div class="card" style="padding: 2rem; border-left: 5px solid var(--primary); background: var(--bg-card); box-shadow: var(--shadow-md);">
            <!-- Strategy Header -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
              <div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
                  <span class="badge badge-primary" style="font-weight: 800; font-size: 0.9rem;">CHIẾN THUẬT ${strat.id}</span>
                  <span class="badge badge-secondary" style="font-weight: 600;">${strat.badge || 'Chuẩn B1'}</span>
                </div>
                <h3 style="margin: 0.25rem 0 0.15rem 0; color: var(--text-primary); font-size: 1.35rem;">${strat.name}</h3>
                <span style="color: var(--primary); font-size: 0.95rem; font-style: italic; font-weight: 600;">${strat.engName}</span>
              </div>
            </div>

            <!-- Core Principle -->
            <div style="background: var(--bg-muted); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; margin-bottom: 1.5rem;">
              <strong style="color: var(--primary); font-size: 0.95rem; display: block; margin-bottom: 0.35rem;">
                <i data-lucide="target" style="width: 16px; height: 16px; vertical-align: middle;"></i> Nguyên Lý Cốt Lõi:
              </strong>
              <p style="margin: 0; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">${strat.corePrinciple}</p>
            </div>

            <!-- 2-Column: Step-by-Step & Applied Questions -->
            <div class="grid-2" style="gap: 1.5rem; margin-bottom: 1.5rem;">
              <!-- 3-Step Process -->
              <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
                <h4 style="margin: 0 0 0.85rem 0; color: var(--secondary); font-size: 1.05rem;">
                  <i data-lucide="list-checks" style="width: 16px; height: 16px; vertical-align: middle;"></i> Quy Trình 3 Bước Xử Lý:
                </h4>
                <div style="display: flex; flex-direction: column; gap: 0.65rem;">
                  ${strat.stepByStep.map(step => `
                    <div style="font-size: 0.9rem; line-height: 1.6; color: var(--text-primary);">
                      ${step}
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Applied Question Types -->
              <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
                <h4 style="margin: 0 0 0.85rem 0; color: var(--primary); font-size: 1.05rem;">
                  <i data-lucide="help-circle" style="width: 16px; height: 16px; vertical-align: middle;"></i> Dạng Câu Hỏi Đề Thi Thật:
                </h4>
                <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.7; color: var(--text-primary);">
                  ${strat.appliedQuestionTypes.map(qType => `
                    <li><em>"${qType}"</em></li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- Demonstration & Pro-Tip -->
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <!-- Excerpt Demonstration -->
              <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--success); padding: 1.25rem; border-radius: var(--radius-md);">
                <div style="font-weight: 700; color: var(--success-text); margin-bottom: 0.35rem;">
                  <i data-lucide="book-open" style="width: 16px; height: 16px; vertical-align: middle;"></i> Đoạn Văn Minh Họa Đề Thi:
                </div>
                <p style="margin: 0 0 0.65rem 0; font-style: italic; font-size: 0.9rem; line-height: 1.7; color: var(--text-primary);">
                  "${strat.sampleExcerpt}"
                </p>
                <div style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; font-weight: 500;">
                  ${strat.demonstration}
                </div>
              </div>

              <!-- Pro-Tip Box -->
              <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-left: 4px solid #f59e0b; padding: 1rem 1.25rem; border-radius: var(--radius-md); font-size: 0.9rem; line-height: 1.6; color: var(--text-primary);">
                <strong style="color: #b45309;">
                  <i data-lucide="zap" style="width: 16px; height: 16px; vertical-align: middle;"></i> Bẫy Thường Gặp & Mẹo Độc Quyền:
                </strong>
                <div style="margin-top: 0.25rem; color: var(--text-secondary);">${strat.proTip}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
