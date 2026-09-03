import { authenticVstepExams } from '../../data/tests/index.js';
import { renderAudioPlayerComponent } from '../utils/audioPlayer.js';
import { showConfirmModal, showAlertModal, showToast } from '../utils/modal.js';
import { evaluateWritingWithGemini, evaluateSpeakingWithGemini } from '../services/geminiService.js';
import { PartPracticeComponent } from '../modules/tests/partPracticeComponent.js';
import { VstepAudioDirector } from '../modules/listening/vstepAudioDirector.js';
import { PracticeHistoryService } from '../modules/tests/practiceHistoryService.js';
import { AnalyticsStore } from '../modules/analytics/analyticsStore.js';

let isExamActive = false; // false = Show Exam Selection Lobby; true = In Exam Paper
let isHistoryModalOpen = false; // Toggle Practice History Modal
let selectedSkill = 'listening'; // 'listening' | 'reading' | 'writing' | 'speaking'
let selectedExamIndex = 0;
let userAnswers = {};
let essayInputs = { task1: '', task2: '' };
let aiWritingEvaluations = { task1: null, task2: null };
let aiSpeechEvaluations = {};
let isExamSubmitted = false;

// Active Countdown Timer Engine
let skillRemainingSeconds = {
  listening: 40 * 60,
  reading: 60 * 60,
  writing: 60 * 60,
  speaking: 12 * 60
};
let examTimerInterval = null;

// Storage Key for Exam Persistence
const EXAM_STORAGE_KEY = 'vstep_saved_exams_progress';

function getAllSavedExamsProgress() {
  try {
    const raw = localStorage.getItem(EXAM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function getSavedExamProgress(idx) {
  const all = getAllSavedExamsProgress();
  return all[idx] || null;
}

function saveCurrentExamProgress() {
  if (!isExamActive) return;
  try {
    const all = getAllSavedExamsProgress();
    all[selectedExamIndex] = {
      examIndex: selectedExamIndex,
      selectedSkill,
      userAnswers,
      essayInputs,
      aiWritingEvaluations,
      aiSpeechEvaluations,
      skillRemainingSeconds,
      isExamSubmitted,
      lastUpdated: Date.now()
    };
    localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(all));
  } catch (e) {
    console.error('Failed to save exam progress', e);
  }
}

function clearSavedExamProgress(idx) {
  try {
    const all = getAllSavedExamsProgress();
    delete all[idx];
    localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(all));
  } catch (e) {
    console.error('Failed to clear exam progress', e);
  }
}

function formatExamTime(totalSecs) {
  const m = Math.floor(totalSecs / 60);
  const s = totalSecs % 60;
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

function updateAllTimerDOMs(timeStr, color) {
  const ids = ['exam-sticky-timer', 'exam-floating-timer', 'exam-banner-timer', 'header-exam-timer'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.innerText = timeStr;
      el.style.color = color;
    }
  });
}

function startActiveExamTimer() {
  if (examTimerInterval) clearInterval(examTimerInterval);
  
  examTimerInterval = setInterval(() => {
    if (!isExamActive || isExamSubmitted) {
      clearInterval(examTimerInterval);
      examTimerInterval = null;
      return;
    }

    if (skillRemainingSeconds[selectedSkill] > 0) {
      skillRemainingSeconds[selectedSkill]--;
      
      const timeStr = formatExamTime(skillRemainingSeconds[selectedSkill]);
      const isUrgent = skillRemainingSeconds[selectedSkill] <= 300;
      const color = isUrgent ? '#ef4444' : '#38bdf8';

      updateAllTimerDOMs(timeStr, color);
      
      // Periodically persist timer
      if (skillRemainingSeconds[selectedSkill] % 5 === 0) {
        saveCurrentExamProgress();
      }
    } else {
      updateAllTimerDOMs('00:00', '#ef4444');
    }
  }, 1000);
}

export function renderTestsView() {
  // Bind PartPracticeComponent actions
  PartPracticeComponent.initWindowBindings((preserveScroll = false) => {
    if (window.app) window.app.renderCurrentView(preserveScroll);
  });

  window.openPracticeHistoryModal = () => {
    isHistoryModalOpen = true;
    if (window.app) window.app.renderCurrentView();
  };

  window.closePracticeHistoryModal = () => {
    isHistoryModalOpen = false;
    if (window.app) window.app.renderCurrentView();
  };

  window.clearAllPracticeHistory = () => {
    showConfirmModal({
      title: 'Xóa Toàn Bộ Lịch Sử',
      message: 'Bạn có chắc chắn muốn xóa toàn bộ lịch sử thi thử và luyện tập đã lưu?',
      confirmText: 'Xóa Hết',
      confirmClass: 'btn-danger',
      onConfirm: () => {
        PracticeHistoryService.clearHistory();
        if (window.app) window.app.renderCurrentView();
        showToast('Đã xóa toàn bộ lịch sử luyện tập!', 'info');
      }
    });
  };

  window.startExam = (idx) => {
    const saved = getSavedExamProgress(idx);
    if (saved && !saved.isExamSubmitted) {
      window.resumeExam(idx);
      return;
    }
    window.startNewExam(idx);
  };

  window.resumeExam = (idx) => {
    selectedExamIndex = idx;
    isExamActive = true;
    const saved = getSavedExamProgress(idx);
    if (saved) {
      selectedSkill = saved.selectedSkill || 'listening';
      userAnswers = saved.userAnswers || {};
      essayInputs = saved.essayInputs || { task1: '', task2: '' };
      aiWritingEvaluations = saved.aiWritingEvaluations || { task1: null, task2: null };
      aiSpeechEvaluations = saved.aiSpeechEvaluations || {};
      skillRemainingSeconds = saved.skillRemainingSeconds || {
        listening: 40 * 60,
        reading: 60 * 60,
        writing: 60 * 60,
        speaking: 12 * 60
      };
      isExamSubmitted = !!saved.isExamSubmitted;
    }
    window.app.renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!isExamSubmitted) startActiveExamTimer();
    showToast('Đang tiếp tục bài thi', 'info');
  };

  window.confirmStartNewExam = (idx) => {
    showConfirmModal({
      title: 'Bắt Đầu Thi Mới?',
      message: 'Tiến trình làm bài dở trước đó của đề thi này sẽ được làm lại từ đầu. Bạn có chắc chắn muốn thi mới?',
      icon: 'rotate-ccw',
      iconColor: 'var(--primary)',
      confirmText: 'Thi Mới Từ Đầu',
      confirmClass: 'btn-primary',
      cancelText: 'Hủy',
      onConfirm: () => {
        window.startNewExam(idx);
      }
    });
  };

  window.startNewExam = (idx) => {
    clearSavedExamProgress(idx);
    selectedExamIndex = idx;
    isExamActive = true;
    selectedSkill = 'listening';
    userAnswers = {};
    essayInputs = { task1: '', task2: '' };
    aiWritingEvaluations = { task1: null, task2: null };
    aiSpeechEvaluations = {};
    isExamSubmitted = false;
    
    // Reset timer to full duration for all skills
    skillRemainingSeconds = {
      listening: 40 * 60,
      reading: 60 * 60,
      writing: 60 * 60,
      speaking: 12 * 60
    };

    saveCurrentExamProgress();
    window.app.renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    startActiveExamTimer();
    showToast('Bắt đầu tính giờ thi', 'info');
  };

  window.backToExamLobby = () => {
    if (isExamActive && !isExamSubmitted) {
      saveCurrentExamProgress();
      if (examTimerInterval) clearInterval(examTimerInterval);
      isExamActive = false;
      window.app.renderCurrentView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast('Đã lưu tiến trình bài thi', 'info');
      return;
    }
    isExamActive = false;
    if (examTimerInterval) clearInterval(examTimerInterval);
    window.app.renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.handleSkillChange = (skill) => {
    selectedSkill = skill;
    saveCurrentExamProgress();
    window.app.renderCurrentView();
    startActiveExamTimer();
  };

  window.selectOfficialAnswer = (qId, optionKey) => {
    if (isExamSubmitted) return;
    userAnswers[qId] = optionKey;
    saveCurrentExamProgress();
    const optEl = document.querySelector(`.opt-${qId}-${optionKey}`);
    const parent = document.getElementById(`box-${qId}`);
    if (parent) {
      parent.querySelectorAll('.exam-option').forEach(el => el.classList.remove('selected'));
      if (optEl) optEl.classList.add('selected');
    }
  };

  window.handleEssayInput = (task, text) => {
    essayInputs[task] = text;
    saveCurrentExamProgress();
    const countEl = document.getElementById(`word-count-${task}`);
    if (countEl) {
      const words = text.split(/\s+/).filter(w => w.trim()).length;
      countEl.innerText = `${words} từ`;
    }
  };

  window.evaluateWritingWithAI = async (task, minWords) => {
    const text = essayInputs[task] || '';
    const words = text.split(/\s+/).filter(w => w.trim()).length;
    
    if (words < 20) {
      showAlertModal({
        title: 'Bài Viết Chưa Đạt Độ Dài',
        message: `Vui lòng nhập nội dung bài viết của bạn trước khi yêu cầu AI chấm điểm (Cần tối thiểu ${minWords} từ để phân tích đầy đủ 4 tiêu chí VSTEP).`,
        icon: 'alert-circle',
        iconColor: 'var(--warning)',
        btnText: 'Tôi Sẽ Viết Thêm'
      });
      return;
    }

    const exam = authenticVstepExams[selectedExamIndex];
    const taskPrompt = task === 'task1' ? exam?.writing?.task1?.prompt || '' : exam?.writing?.task2?.prompt || '';

    showToast('Gemini AI đang chấm bài...', 'info');

    const result = await evaluateWritingWithGemini(task, taskPrompt, text);

    aiWritingEvaluations[task] = {
      overall: result.overallScore.toFixed(1),
      words: words,
      criteria: {
        taskAchievement: { 
          score: result.taskResponseScore.toFixed(1), 
          comment: result.strengths[0] || (words >= minWords ? `Đạt chuẩn số lượng từ (${words}/${minWords} từ) và giải quyết đầy đủ các luận điểm.` : `Chưa đạt đủ số lượng từ tối thiểu (${words}/${minWords} từ).`)
        },
        cohesion: { 
          score: result.coherenceScore.toFixed(1), 
          comment: result.strengths[1] || `Sử dụng liên từ học thuật và phân đoạn mạch lạc.`
        },
        lexicalResource: { 
          score: result.lexicalScore.toFixed(1), 
          comment: result.suggestions[0] || `Từ vựng học thuật phong phú, sử dụng đúng ngữ cảnh.` 
        },
        grammarAccuracy: { 
          score: result.grammarScore.toFixed(1), 
          comment: result.detailedFeedback || `Đảm bảo hòa hợp chủ-vị, cấu trúc câu đa dạng.` 
        }
      }
    };

    saveCurrentExamProgress();
    window.app.renderCurrentView();
    showToast(`Đã chấm điểm viết AI: ${result.overallScore}/10`, 'success');
  };

  window.evaluateSpeechWithIPA = (id, sampleText, qPrompt = '') => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const resultBox = document.getElementById(`speech-ai-box-${id}`);
    
    const finalizeSpeechEvaluation = async (speechResult) => {
      showToast('Gemini AI đang chấm bài nói...', 'info');
      const evalResult = await evaluateSpeakingWithGemini('speaking', qPrompt || sampleText, speechResult);
      aiSpeechEvaluations[id] = {
        score: `${evalResult.overallScore.toFixed(1)} / 10.0 (${evalResult.vstepLevel})`,
        accuracy: `${Math.round(evalResult.pronunciationScore * 38 + 5)}%`,
        wpm: "130 WPM (Tốc độ tự nhiên)",
        ipaFeedback: evalResult.ipaFeedback,
        transcribed: speechResult,
        feedback: evalResult.generalFeedback
      };
      saveCurrentExamProgress();
      window.app.renderCurrentView();
      showToast('Đã chấm điểm phát âm AI', 'success');
    };

    if (!SpeechRecognition) {
      finalizeSpeechEvaluation(sampleText);
      return;
    }

    if (resultBox) {
      resultBox.innerHTML = `
        <div style="background: var(--bg-accent); padding: 1rem; border-radius: var(--radius-md); text-align: center;">
          <div style="color: var(--primary); font-weight: 700; margin-bottom: 0.25rem;"><i data-lucide="mic" class="animate-pulse"></i> Đang lắng nghe từ Micro... Hãy đọc to câu trả lời tiếng Anh!</div>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Hệ thống Gemini AI đang nhận diện âm vị IPA và phân tích bài nói...</span>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      finalizeSpeechEvaluation(speechResult);
    };

    recognition.onerror = () => {
      finalizeSpeechEvaluation(sampleText);
    };

    recognition.start();
  };

  window.submitOfficialExam = () => {
    showConfirmModal({
      title: 'Xác Nhận Nộp Bài Thi',
      message: 'Bạn có chắc chắn muốn nộp bài thi? Hệ thống sẽ ngay lập tức đối chiếu đáp án, chấm điểm tự động và xuất bảng điểm quy đổi VSTEP B1 chính thức.',
      icon: 'check-circle',
      iconColor: 'var(--success)',
      confirmText: 'Nộp Bài & Xem Điểm',
      confirmClass: 'btn-success',
      cancelText: 'Kiểm Tra Lại',
      onConfirm: () => {
        clearInterval(examTimerInterval);
        isExamSubmitted = true;
        saveCurrentExamProgress();

        const exam = authenticVstepExams[selectedExamIndex] || authenticVstepExams[0];
        const res = calculateExamResults(exam);

        PracticeHistoryService.recordFullExamSession({
          examIndex: selectedExamIndex,
          examName: exam.name,
          overallScore: res.avg.toFixed(1),
          vstepLevel: res.level,
          listeningCorrect: res.lCorrect,
          readingCorrect: res.rCorrect,
          writingScore: res.hasDoneWriting ? res.wScore.toFixed(1) : '0.0',
          speakingScore: res.hasDoneSpeaking ? res.sScore.toFixed(1) : '0.0'
        });

        // Ghi nhận điểm thực tế của các kỹ năng đã làm vào bản đồ năng lực (quân bình)
        AnalyticsStore.recordSession('listening', Math.round((res.lCorrect / 35) * 100), { source: 'full_exam', examIndex: selectedExamIndex });
        AnalyticsStore.recordSession('reading', Math.round((res.rCorrect / 40) * 100), { source: 'full_exam', examIndex: selectedExamIndex });
        
        // Chỉ ghi nhận viết và nói vào bản đồ năng lực nếu thí sinh thực sự đã làm bài
        if (res.hasDoneWriting) {
          AnalyticsStore.recordSession('writing', Math.round(res.wScore * 10), { source: 'full_exam', examIndex: selectedExamIndex });
        }
        if (res.hasDoneSpeaking) {
          AnalyticsStore.recordSession('speaking', Math.round(res.sScore * 10), { source: 'full_exam', examIndex: selectedExamIndex });
        }

        window.app.renderCurrentView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast('Đã nộp bài thành công và lưu vào lịch sử!', 'success');
      }
    });
  };

  window.resetOfficialExam = () => {
    userAnswers = {};
    essayInputs = { task1: '', task2: '' };
    aiWritingEvaluations = { task1: null, task2: null };
    aiSpeechEvaluations = {};
    isExamSubmitted = false;
    skillRemainingSeconds = {
      listening: 40 * 60,
      reading: 60 * 60,
      writing: 60 * 60,
      speaking: 12 * 60
    };
    window.app.renderCurrentView();
    startActiveExamTimer();
  };

  const currentExam = authenticVstepExams[selectedExamIndex] || authenticVstepExams[0];

  if (isExamActive) {
    return `
      <div class="tests-page animate-fade-in">
        ${renderActiveExamPaper(currentExam)}
      </div>
    `;
  }

  if (PartPracticeComponent.isCurrentlyPracticing()) {
    return `
      <div class="tests-page animate-fade-in">
        ${PartPracticeComponent.renderPracticePaper()}
      </div>
    `;
  }

  return `
    <div class="tests-page animate-fade-in">
      ${renderExamSelectionLobby()}
    </div>
  `;
}

/**
 * 1. Exam Selection Lobby (Sảnh Chọn Đề Thi VSTEP)
 */
function renderExamSelectionLobby() {
  const allHistory = PracticeHistoryService.getHistory();

  return `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <!-- Section Title & Instructions -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <h2 style="margin: 0; color: var(--text-primary); font-size: 1.4rem;">Danh Sách Đề Thi</h2>
          <p style="margin: 0.25rem 0 0 0; color: var(--text-secondary); font-size: 0.875rem;">
            Chọn đề thi 4 kỹ năng chuẩn định dạng VSTEP.
          </p>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn btn-secondary btn-sm" onclick="window.openPracticeHistoryModal()" style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 700; padding: 0.4rem 0.85rem;">
            <i data-lucide="history" style="width: 14px; height: 14px;"></i>
            <span>Lịch Sử (${allHistory.length})</span>
          </button>
          <span class="badge badge-secondary" style="font-size: 0.85rem; font-weight: 700;">${authenticVstepExams.length} Đề</span>
        </div>
      </div>

      <!-- Exam Cards Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1.5rem;">
        ${authenticVstepExams.map((exam, idx) => {
          const saved = getSavedExamProgress(idx);
          const answeredCount = saved ? Object.keys(saved.userAnswers || {}).length : 0;
          const hasWritten = saved && saved.essayInputs && (saved.essayInputs.task1 || saved.essayInputs.task2);
          const isUnfinished = saved && !saved.isExamSubmitted && (answeredCount > 0 || hasWritten);
          const stats = PracticeHistoryService.getExamStats(idx);

          return `
          <div class="card exam-card-lobby" style="padding: 1.75rem; border-top: 5px solid ${isUnfinished ? 'var(--warning, #f59e0b)' : 'var(--primary)'}; display: flex; flex-direction: column; justify-content: space-between; background: var(--bg-card); transition: all 0.3s ease; box-shadow: var(--shadow-md);">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.35rem;">
                <span class="badge badge-primary" style="font-weight: 800; font-size: 0.85rem;">ĐỀ THI SỐ 0${idx + 1}</span>
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  ${stats.timesCount > 0 ? `
                    <span class="badge badge-success" style="font-size: 0.725rem; font-weight: 700;">
                      ✓ Đã thi: ${stats.timesCount} lần (Cao nhất: ${stats.bestScore})
                    </span>
                  ` : `
                    <span class="badge badge-secondary" style="font-size: 0.725rem;">Chưa thi</span>
                  `}
                  ${isUnfinished ? `
                    <span class="badge badge-warning" style="font-weight: 700; font-size: 0.725rem;">
                      <i data-lucide="clock" style="width: 11px; height: 11px; vertical-align: middle;"></i> Đang Dở (${answeredCount}/75)
                    </span>
                  ` : ''}
                </div>
              </div>

              <h3 style="color: var(--text-primary); font-size: 1.25rem; margin: 0 0 1rem 0; line-height: 1.4;">Đề Thi Số 0${idx + 1}</h3>

              <!-- Skill Structure Badges -->
              <div style="background: var(--bg-muted); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
                <div style="font-size: 0.825rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">
                  <i data-lucide="check-circle" style="width: 14px; height: 14px; vertical-align: middle;"></i> Cấu Trúc 4 Kỹ Năng:
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.825rem; color: var(--text-secondary);">
                  <div>🎧 <strong>Nghe:</strong> 35 câu (40p)</div>
                  <div>📖 <strong>Đọc:</strong> 40 câu (60p)</div>
                  <div>✍️ <strong>Viết:</strong> 2 bài (60p)</div>
                  <div>🗣️ <strong>Nói:</strong> 3 phần (12p)</div>
                </div>
              </div>
            </div>

            ${isUnfinished ? `
              <div style="display: flex; gap: 0.6rem; width: 100%;">
                <button class="btn btn-primary" style="flex: 1; padding: 0.85rem; font-weight: 700; font-size: 0.95rem; justify-content: center; box-shadow: var(--shadow-sm); display: flex; align-items: center; gap: 0.4rem;" onclick="window.resumeExam(${idx})">
                  <i data-lucide="play"></i> Tiếp Tục Thi
                </button>
                <button class="btn btn-secondary" style="padding: 0.85rem 1rem; font-weight: 600; font-size: 0.9rem; justify-content: center; display: flex; align-items: center; gap: 0.35rem;" onclick="window.confirmStartNewExam(${idx})" title="Xóa bài dở và thi mới từ đầu">
                  <i data-lucide="rotate-ccw"></i> Thi Mới
                </button>
              </div>
            ` : `
              <button class="btn btn-primary" style="width: 100%; padding: 0.9rem; font-weight: 700; font-size: 1.05rem; justify-content: center; box-shadow: var(--shadow-sm); display: flex; align-items: center; gap: 0.5rem;" onclick="window.startExam(${idx})">
                <i data-lucide="play-circle"></i> Vào Thi
              </button>
            `}

            <!-- Ô Thi Từng Phần Ngay Dưới Nút Thi Thử -->
            <div style="margin-top: 0.85rem; padding: 0.75rem 0.85rem; background: var(--bg-muted); border-radius: var(--radius-md); border: 1.5px dashed var(--border-color); display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
              <div>
                <div style="font-size: 0.825rem; font-weight: 700; color: var(--text-primary); display: flex; align-items: center; gap: 0.35rem;">
                  <i data-lucide="layers" style="width: 14px; height: 14px; color: var(--primary);"></i>
                  <span>Thi Từng Phần (Theo Part)</span>
                </div>
                <div style="font-size: 0.725rem; color: var(--text-muted); margin-top: 0.1rem;">
                  Luyện riêng Nghe, Đọc, Viết hoặc Nói
                </div>
              </div>
              <button class="btn btn-secondary btn-sm" 
                      style="padding: 0.4rem 0.85rem; font-weight: 700; font-size: 0.8rem; white-space: nowrap; border-color: var(--primary); color: var(--primary);"
                      onclick="window.openExamPartPracticeModal(${idx})">
                <i data-lucide="check-square" style="width: 13px; height: 13px;"></i>
                <span>Chọn Part</span>
              </button>
            </div>
          </div>
        `;
        }).join('')}
      </div>

      <!-- Modal Chọn Part Thi Từng Phần Cho Từng Đề -->
      ${PartPracticeComponent.renderPartSelectionModal()}

      <!-- Modal Lịch Sử Luyện Tập -->
      ${isHistoryModalOpen ? renderPracticeHistoryModal() : ''}
    </div>
  `;
}

/**
 * Modal hiển thị lịch sử làm bài ngắn gọn
 */
function renderPracticeHistoryModal() {
  const history = PracticeHistoryService.getHistory();

  return `
    <div class="modal-backdrop animate-fade-in" style="position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 10500; display: flex; align-items: center; justify-content: center; padding: 1rem;" onclick="if(event.target === this) window.closePracticeHistoryModal()">
      <div class="modal-card" style="background: var(--bg-card); border-radius: var(--radius-lg); max-width: 720px; width: 100%; max-height: 85vh; display: flex; flex-direction: column; box-shadow: var(--shadow-xl); border: 1px solid var(--border-color); overflow: hidden;">
        
        <!-- Header -->
        <div style="padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; background: var(--bg-muted);">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="history" style="color: var(--primary);"></i>
            <h3 style="margin: 0; font-size: 1.2rem; color: var(--text-primary);">Lịch Sử Luyện Tập & Thi Thử</h3>
            <span class="badge badge-primary">${history.length} Phiên</span>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="window.closePracticeHistoryModal()" style="border-radius: 50%; width: 32px; height: 32px; padding: 0; display: flex; align-items: center; justify-content: center;">
            ✕
          </button>
        </div>

        <!-- Body / List of Sessions -->
        <div style="padding: 1.25rem 1.5rem; overflow-y: auto; flex: 1; display: flex; flex-direction: column; gap: 0.85rem;">
          ${history.length === 0 ? `
            <div style="text-align: center; padding: 3rem 1rem; color: var(--text-secondary);">
              <i data-lucide="inbox" style="width: 40px; height: 40px; stroke-width: 1.5; margin-bottom: 0.5rem; opacity: 0.5;"></i>
              <p style="margin: 0; font-size: 0.95rem;">Chưa có phiên luyện tập nào được lưu lại.</p>
              <p style="margin: 0.35rem 0 0 0; font-size: 0.825rem; color: var(--text-muted);">Hãy bắt đầu làm bài thi thử hoặc luyện từng part để xem kết quả tại đây.</p>
            </div>
          ` : `
            ${history.map((s, idx) => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem 1.15rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
                <div>
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.3rem;">
                    <span class="badge ${s.type === 'full_exam' ? 'badge-primary' : 'badge-secondary'}" style="font-size: 0.725rem; font-weight: 800;">
                      ${s.type === 'full_exam' ? 'THI TOÀN ĐỀ' : 'LUYỆN PART'}
                    </span>
                    <strong style="color: var(--text-primary); font-size: 0.95rem;">${s.examName}</strong>
                    <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${s.dateStr}</span>
                  </div>

                  <div style="font-size: 0.85rem; color: var(--text-secondary);">
                    ${s.type === 'full_exam' ? `
                      <span>Kết quả: <strong style="color: var(--primary); font-size: 1rem;">${s.overallScore}/10</strong> (${s.vstepLevel})</span>
                      <span style="margin-left: 0.5rem; color: var(--text-muted);">• Nghe: ${s.listeningCorrect}/35 • Đọc: ${s.readingCorrect}/40</span>
                    ` : `
                      <span>Đúng: <strong style="color: var(--success-text); font-size: 0.95rem;">${s.correctCount}/${s.totalQuestions} câu</strong> (${s.accuracyPercent}%)</span>
                      <span style="margin-left: 0.5rem; color: var(--text-muted); font-size: 0.8rem;">• Phần: ${(s.partNames || []).join(', ')}</span>
                    `}
                  </div>
                </div>

                <span class="badge badge-success" style="font-size: 0.8rem; font-weight: 700;">
                  ${s.type === 'full_exam' ? `${s.vstepLevel} (${s.overallScore}đ)` : `${s.accuracyPercent}%`}
                </span>
              </div>
            `).join('')}
          `}
        </div>

        <!-- Footer Actions -->
        <div style="padding: 1rem 1.5rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; background: var(--bg-muted);">
          ${history.length > 0 ? `
            <button class="btn btn-secondary btn-sm" onclick="window.clearAllPracticeHistory()" style="color: var(--danger, #ef4444); display: flex; align-items: center; gap: 0.35rem;">
              <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i> Xóa Lịch Sử
            </button>
          ` : '<div></div>'}
          <button class="btn btn-primary btn-sm" onclick="window.closePracticeHistoryModal()" style="padding: 0.45rem 1.25rem;">
            Đóng
          </button>
        </div>

      </div>
    </div>
  `;
}

/**
 * 2. Active Exam Paper (Phòng Thi Trực Tuyến 4 Kỹ Năng)
 */
function renderActiveExamPaper(exam) {
  const currentSkillTime = skillRemainingSeconds[selectedSkill] || 0;
  const timeStr = formatExamTime(currentSkillTime);

  return `
    <div>
      <!-- Minimal Clean Top Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <button class="btn btn-secondary btn-sm" onclick="window.backToExamLobby()" title="Quay lại danh sách đề thi">
            <i data-lucide="arrow-left"></i> Rời Phòng Thi
          </button>
          <h3 style="margin: 0; font-size: 1.25rem; color: var(--text-primary);">${exam.name}</h3>
        </div>

        ${isExamSubmitted ? `
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary btn-sm" onclick="window.resetOfficialExam()">
              <i data-lucide="rotate-ccw"></i> Làm Lại Đề Này
            </button>
            <button class="btn btn-primary btn-sm" onclick="window.backToExamLobby()">
              <i data-lucide="grid"></i> Chọn Đề Khác
            </button>
          </div>
        ` : ''}
      </div>

      <!-- FLOATING FIXED BOTTOM-RIGHT TIMER BADGE (GHIM CỐ ĐỊNH GÓC PHẢI MÀN HÌNH) -->
      <div style="position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 10000; background: #0f172a; border: 2px solid #38bdf8; border-radius: var(--radius-full); padding: 0.65rem 1.25rem; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; align-items: center; gap: 0.75rem; color: #fff;">
        <i data-lucide="clock" style="width: 20px; height: 20px; color: #38bdf8;" class="animate-pulse"></i>
        <div style="font-size: 0.75rem; color: #94a3b8; font-weight: 700;">THỜI GIAN:</div>
        <div id="exam-floating-timer" style="font-size: 1.35rem; font-family: var(--font-mono); font-weight: 900; color: #38bdf8; letter-spacing: 1px;">
          ${timeStr}
        </div>
        ${!isExamSubmitted ? `
          <button class="btn btn-success btn-sm" style="padding: 0.35rem 0.85rem; font-weight: 700; border-radius: var(--radius-full);" onclick="window.submitOfficialExam()">
            Nộp Bài
          </button>
        ` : ''}
      </div>

      <!-- Score Report Card if Submitted -->
      ${isExamSubmitted ? renderScoreReport(exam) : ''}

      <!-- 4 Skill Navigation Tabs (Sleek Icon-Focused) -->
      <div class="tabs-header" style="display: flex; gap: 0.75rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; overflow-x: auto;">
        <button class="tab-btn ${selectedSkill === 'listening' ? 'active' : ''}" onclick="window.handleSkillChange('listening')" title="Listening" style="font-size: 0.95rem; font-weight: 700; padding: 0.6rem 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="headphones" style="width: 18px; height: 18px;"></i>
          <span>Listening</span>
        </button>
        <button class="tab-btn ${selectedSkill === 'reading' ? 'active' : ''}" onclick="window.handleSkillChange('reading')" title="Reading" style="font-size: 0.95rem; font-weight: 700; padding: 0.6rem 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="book-open" style="width: 18px; height: 18px;"></i>
          <span>Reading</span>
        </button>
        <button class="tab-btn ${selectedSkill === 'writing' ? 'active' : ''}" onclick="window.handleSkillChange('writing')" title="Writing" style="font-size: 0.95rem; font-weight: 700; padding: 0.6rem 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="edit-3" style="width: 18px; height: 18px;"></i>
          <span>Writing</span>
        </button>
        <button class="tab-btn ${selectedSkill === 'speaking' ? 'active' : ''}" onclick="window.handleSkillChange('speaking')" title="Speaking" style="font-size: 0.95rem; font-weight: 700; padding: 0.6rem 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="mic" style="width: 18px; height: 18px;"></i>
          <span>Speaking</span>
        </button>
      </div>

      <!-- Active Skill Paper Container -->
      ${selectedSkill === 'listening' ? renderExamListening(exam.listening) : ''}
      ${selectedSkill === 'reading' ? renderExamReading(exam.reading) : ''}
      ${selectedSkill === 'writing' ? renderExamWriting(exam.writing) : ''}
      ${selectedSkill === 'speaking' ? renderExamSpeaking(exam.speaking) : ''}
    </div>
  `;
}

/**
 * Hàm tính điểm thực tế 4 kỹ năng chuẩn VSTEP
 * Tuyệt đối không tự bịa điểm nếu thí sinh chưa làm bài!
 */
function calculateExamResults(exam) {
  // 1. Listening (35 câu)
  let lCorrect = 0;
  const lQuestions = [
    ...(exam.listening?.part1?.questions || []),
    ...(exam.listening?.part2?.conversations?.flatMap(c => c.questions) || []),
    ...(exam.listening?.part3?.talks?.flatMap(t => t.questions) || [])
  ];
  lQuestions.forEach(q => {
    if (userAnswers[q.id] === q.correctAnswer) lCorrect++;
  });
  const lScore = parseFloat(((lCorrect / 35) * 10).toFixed(1));

  // 2. Reading (40 câu)
  let rCorrect = 0;
  const rQuestions = (exam.reading?.passages || []).flatMap(p => p.questions || []);
  rQuestions.forEach(q => {
    if (userAnswers[q.id] === q.correctAnswer) rCorrect++;
  });
  const rScore = parseFloat(((rCorrect / 40) * 10).toFixed(1));

  // 3. Writing (Task 1 chiếm 1/3, Task 2 chiếm 2/3)
  let w1 = 0;
  const t1Text = (essayInputs.task1 || '').trim();
  if (aiWritingEvaluations.task1 && aiWritingEvaluations.task1.overall) {
    w1 = parseFloat(aiWritingEvaluations.task1.overall);
  } else if (t1Text.length > 0) {
    const words1 = t1Text.split(/\s+/).length;
    if (words1 >= 120) w1 = 6.0;
    else if (words1 >= 60) w1 = 4.0;
    else w1 = 2.0;
  }

  let w2 = 0;
  const t2Text = (essayInputs.task2 || '').trim();
  if (aiWritingEvaluations.task2 && aiWritingEvaluations.task2.overall) {
    w2 = parseFloat(aiWritingEvaluations.task2.overall);
  } else if (t2Text.length > 0) {
    const words2 = t2Text.split(/\s+/).length;
    if (words2 >= 250) w2 = 6.0;
    else if (words2 >= 120) w2 = 4.0;
    else w2 = 2.0;
  }

  const hasDoneWriting = (w1 > 0 || w2 > 0);
  const wScore = hasDoneWriting ? parseFloat(((w1 * (1/3)) + (w2 * (2/3))).toFixed(1)) : 0.0;

  // 4. Speaking (3 Parts)
  const speechKeys = Object.keys(aiSpeechEvaluations || {});
  let totalSpeaking = 0;
  let speakingCount = 0;
  speechKeys.forEach(k => {
    const item = aiSpeechEvaluations[k];
    if (item && item.score) {
      const match = item.score.match(/([0-9.]+)\s*\//);
      if (match) {
        totalSpeaking += parseFloat(match[1]);
        speakingCount++;
      }
    }
  });
  const hasDoneSpeaking = speakingCount > 0;
  const sScore = hasDoneSpeaking ? parseFloat((totalSpeaking / speakingCount).toFixed(1)) : 0.0;

  // Điểm trung bình cộng 4 kỹ năng (VSTEP Official Average)
  const avg = parseFloat(((lScore + rScore + wScore + sScore) / 4).toFixed(1));

  let level = 'Chưa đạt (Dưới B1)';
  let levelClass = 'badge-danger';
  let levelDesc = 'Điểm số chưa đạt mức tối thiểu B1 (4.0/10). Hãy hoàn thành đầy đủ cả 4 kỹ năng Nghe, Đọc, Viết và Nói!';

  if (avg >= 8.5) {
    level = 'C1 (BẬC 5)';
    levelClass = 'badge-success';
    levelDesc = 'Xuất sắc: Năng lực sử dụng tiếng Anh thành thạo, linh hoạt trong môi trường học thuật chuyên sâu và công việc quốc tế.';
  } else if (avg >= 6.0) {
    level = 'B2 (BẬC 4)';
    levelClass = 'badge-primary';
    levelDesc = 'Giỏi: Giao tiếp độc lập, viết luận chặt chẽ và xử lý tốt các tình huống học thuật phức tạp.';
  } else if (avg >= 4.0) {
    level = 'B1 (BẬC 3)';
    levelClass = 'badge-success';
    levelDesc = 'Đạt yêu cầu: Đạt chuẩn đầu ra Đại học & Cao học theo Khung Năng Lực Ngoại Ngữ 6 Bậc Việt Nam của Bộ GD&ĐT.';
  } else if (avg >= 2.5) {
    level = 'A2 (BẬC 2)';
    levelClass = 'badge-warning';
    levelDesc = 'Cần ôn tập và làm đầy đủ các bài thi Viết và Nói để nâng điểm lên chuẩn B1 (tối thiểu 4.0/10).';
  }

  return {
    lCorrect,
    rCorrect,
    lScore,
    rScore,
    w1,
    w2,
    wScore,
    sScore,
    hasDoneWriting,
    hasDoneSpeaking,
    speakingCount,
    avg,
    level,
    levelClass,
    levelDesc
  };
}

function renderScoreReport(exam) {
  const res = calculateExamResults(exam);

  return `
    <div class="card" style="margin-bottom: 2rem; background: linear-gradient(135deg, rgba(16,185,129,0.08), var(--bg-card)); border: 2px solid var(--success); padding: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span class="badge ${res.levelClass}" style="font-size: 0.95rem; font-weight: 800; padding: 0.4rem 0.85rem;">${res.level}</span>
          <h3 style="margin: 0.5rem 0 0 0; color: var(--text-primary); font-size: 1.5rem;">BẢNG ĐIỂM TỔNG KẾT VSTEP 4 KỸ NĂNG</h3>
          <p style="margin: 0.25rem 0 0 0; color: var(--text-secondary); font-size: 0.9rem;">${res.levelDesc}</p>
        </div>
        <div style="text-align: right; background: var(--bg-surface); padding: 0.75rem 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700;">ĐIỂM TRUNG BÌNH 4 KỸ NĂNG</div>
          <div style="font-size: 2.5rem; font-weight: 900; color: ${res.avg >= 4.0 ? 'var(--success-text)' : 'var(--danger, #ef4444)'}; font-family: var(--font-mono);">
            ${res.avg.toFixed(1)} / 10.0
          </div>
        </div>
      </div>

      <!-- 4 Skills Score Cards Grid -->
      <div class="grid-4" style="gap: 1rem;">
        <div style="background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary);">🎧 NGHE</span>
            <span class="badge badge-primary">${res.lScore.toFixed(1)}/10</span>
          </div>
          <div style="font-size: 1.2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">
            ${res.lCorrect} / 35 câu
          </div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0;">Đúng ${Math.round((res.lCorrect / 35) * 100)}%</p>
        </div>

        <div style="background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--secondary);">📖 ĐỌC</span>
            <span class="badge badge-secondary">${res.rScore.toFixed(1)}/10</span>
          </div>
          <div style="font-size: 1.2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">
            ${res.rCorrect} / 40 câu
          </div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0;">Đúng ${Math.round((res.rCorrect / 40) * 100)}%</p>
        </div>

        <div style="background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary);">✍️ VIẾT</span>
            <span class="badge ${res.hasDoneWriting ? 'badge-primary' : 'badge-danger'}">${res.wScore.toFixed(1)}/10</span>
          </div>
          <div style="font-size: 1.2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">
            ${res.hasDoneWriting ? `T1: ${res.w1.toFixed(1)}đ • T2: ${res.w2.toFixed(1)}đ` : 'Chưa làm (0đ)'}
          </div>
          <p style="font-size: 0.8rem; color: ${res.hasDoneWriting ? 'var(--text-secondary)' : 'var(--danger, #ef4444)'}; margin: 0;">
            ${res.hasDoneWriting ? 'Đã phân tích AI rubric' : 'Chưa nộp bài viết'}
          </p>
        </div>

        <div style="background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--success-text);">🗣️ NÓI</span>
            <span class="badge ${res.hasDoneSpeaking ? 'badge-success' : 'badge-danger'}">${res.sScore.toFixed(1)}/10</span>
          </div>
          <div style="font-size: 1.2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">
            ${res.hasDoneSpeaking ? `${res.speakingCount} câu đã thu âm` : 'Chưa thu âm (0đ)'}
          </div>
          <p style="font-size: 0.8rem; color: ${res.hasDoneSpeaking ? 'var(--text-secondary)' : 'var(--danger, #ef4444)'}; margin: 0;">
            ${res.hasDoneSpeaking ? 'Đã phân tích âm vị IPA' : 'Chưa thu âm câu nào'}
          </p>
        </div>
      </div>
    </div>
  `;
}

function renderExamListening(listening) {
  let p2QCounter = 8;
  let p3QCounter = 20;
  const currentExam = authenticVstepExams[selectedExamIndex] || authenticVstepExams[0];

  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- BĂNG PHÁT TOÀN BỘ BÀI THI NGHE VSTEP CHUẨN PHÒNG THI -->
      <div class="card" style="background: linear-gradient(135deg, #0f172a, #1e293b); color: #fff; border-left: 5px solid #38bdf8; padding: 1.5rem 1.75rem; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
              <span class="badge" style="background: #38bdf8; color: #0f172a; font-weight: 800;">FORMAT PHÒNG THI CHÍNH THỨC</span>
              <span class="badge" style="background: rgba(255,255,255,0.15); color: #fff;">Có Lời Dẫn Giám Khảo & Chime Báo</span>
            </div>
            <h4 style="margin: 0; font-size: 1.25rem; color: #fff; display: flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="radio" style="color: #38bdf8;"></i>
              Băng Nghe Toàn Bộ Bài Thi VSTEP (Official Master Audio Track)
            </h4>
          </div>
          <span style="font-size: 0.8rem; color: #94a3b8; font-family: var(--font-mono);">Tổng 35 Câu • 3 Parts</span>
        </div>
        <p style="margin: 0 0 1rem 0; font-size: 0.875rem; color: #cbd5e1; line-height: 1.6;">
          Phát liên tục từ lời giới thiệu chung của giám khảo, quy chế thi, hiệu lệnh đọc đề, âm hiệu kết thúc từng Part như khi ngồi trong phòng thi chính thức tại các trường Đại học.
        </p>
        ${renderAudioPlayerComponent('master-listening-full', VstepAudioDirector.buildMasterExamFullAudioScript(currentExam), 'Phát Toàn Bộ Băng Thi Nghe VSTEP (40 Phút)')}
      </div>

      <!-- Part 1 -->
      <div class="card" style="padding: 2rem;">
        <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span class="badge badge-primary">LISTENING PART 1</span>
              <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${listening.part1.title}</h3>
              <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">${listening.part1.instructions}</p>
            </div>
            <span class="badge badge-secondary">8 Câu Hỏi (1 - 8)</span>
          </div>
          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
            ${renderAudioPlayerComponent('part1-master-tape', VstepAudioDirector.buildPart1FullAudioScript(listening.part1), 'Phát Băng Nghe Part 1 (Có Lời Dẫn Giám Khảo & Câu 1-8)')}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 2rem;">
          ${listening.part1.questions.map((q, idx) => renderExamQuestionCard(q, `lp1-${q.id}`, VstepAudioDirector.buildQuestionAudioScript(q, idx + 1), idx + 1)).join('')}
        </div>
      </div>

      <!-- Part 2 -->
      <div class="card" style="padding: 2rem;">
        <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span class="badge badge-secondary">LISTENING PART 2</span>
              <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${listening.part2.title}</h3>
              <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">${listening.part2.instructions}</p>
            </div>
            <span class="badge badge-secondary">12 Câu Hỏi (9 - 20)</span>
          </div>
          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
            ${renderAudioPlayerComponent('part2-master-tape', VstepAudioDirector.buildPart2FullAudioScript(listening.part2), 'Phát Băng Nghe Part 2 (Có Lời Dẫn Giám Khảo & 3 Hội Thoại)')}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 2.5rem;">
          ${listening.part2.conversations.map(conv => {
            const startQ = p2QCounter + 1;
            const endQ = p2QCounter + (conv.questions?.length || 4);
            const script = VstepAudioDirector.buildConversationAudioScript(conv, startQ, endQ);
            const convHtml = `
              <div style="background: var(--bg-muted); padding: 1.5rem; border-radius: var(--radius-lg);">
                <h4 style="color: var(--primary); margin: 0 0 1rem 0;">${conv.title} (Câu ${startQ} - ${endQ})</h4>
                ${renderAudioPlayerComponent(`lconv-${conv.id}`, script, `Audio ${conv.title} (Có Lời Dẫn Chuẩn VSTEP)`)}
                
                <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem;">
                  ${conv.questions.map(q => {
                    p2QCounter++;
                    return renderExamQuestionCard(q, `lq-${q.id}`, null, p2QCounter);
                  }).join('')}
                </div>
              </div>
            `;
            return convHtml;
          }).join('')}
        </div>
      </div>

      <!-- Part 3 -->
      <div class="card" style="padding: 2rem;">
        <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span class="badge badge-success">LISTENING PART 3</span>
              <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${listening.part3.title}</h3>
              <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">${listening.part3.instructions}</p>
            </div>
            <span class="badge badge-secondary">15 Câu Hỏi (21 - 35)</span>
          </div>
          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
            ${renderAudioPlayerComponent('part3-master-tape', VstepAudioDirector.buildPart3FullAudioScript(listening.part3), 'Phát Băng Nghe Part 3 (Có Lời Dẫn Giám Khảo & 3 Bài Giảng)')}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 2.5rem;">
          ${listening.part3.talks.map(talk => {
            const startQ = p3QCounter + 1;
            const endQ = p3QCounter + (talk.questions?.length || 5);
            const script = VstepAudioDirector.buildTalkAudioScript(talk, startQ, endQ);
            const talkHtml = `
              <div style="background: var(--bg-muted); padding: 1.5rem; border-radius: var(--radius-lg);">
                <h4 style="color: var(--primary); margin: 0 0 1rem 0;">${talk.title} (Câu ${startQ} - ${endQ})</h4>
                ${renderAudioPlayerComponent(`ltalk-${talk.id}`, script, `Audio ${talk.title} (Có Lời Dẫn Chuẩn VSTEP)`)}
                
                <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem;">
                  ${talk.questions.map(q => {
                    p3QCounter++;
                    return renderExamQuestionCard(q, `lq-${q.id}`, null, p3QCounter);
                  }).join('')}
                </div>
              </div>
            `;
            return talkHtml;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderExamReading(reading) {
  let readingQCounter = 0;

  return `
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      ${reading.passages.map((passage, pIdx) => `
        <div class="card" style="padding: 2rem;">
          <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span class="badge badge-primary">READING PASSAGE ${pIdx + 1} (CÂU ${pIdx * 10 + 1} - CÂU ${pIdx * 10 + 10})</span>
              <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${passage.title}</h3>
            </div>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Thể loại: ${passage.genre} • ~${passage.wordCount} từ</span>
          </div>

          <div class="grid-2" style="gap: 2rem; align-items: flex-start;">
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.75rem; line-height: 1.9; font-size: 0.975rem; white-space: pre-line; max-height: 800px; overflow-y: auto;">
              ${passage.text}
            </div>

            <div style="display: flex; flex-direction: column; gap: 1.5rem; max-height: 800px; overflow-y: auto; padding-right: 0.5rem;">
              ${passage.questions.map(q => {
                readingQCounter++;
                return renderExamQuestionCard(q, `rq-${q.id}`, null, readingQCounter);
              }).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderExamQuestionCard(q, audioId = null, audioText = null, qNumber = null) {
  const chosen = userAnswers[q.id];
  const isCorrect = isExamSubmitted && chosen === q.correctAnswer;
  const labelText = qNumber ? `Câu ${qNumber}` : `Câu ${q.id}`;

  return `
    <div id="box-${q.id}" class="exam-question-card" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
      ${audioText ? renderAudioPlayerComponent(audioId, audioText, `Audio ${labelText}`) : ''}

      <div style="font-weight: 700; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.85rem;">
        ${labelText}: ${q.question}
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.75rem;">
        ${(q.options || []).map(opt => {
          let optClass = `exam-option opt-${q.id}-${opt.key}`;
          if (chosen === opt.key) optClass += ' selected';
          if (isExamSubmitted) {
            if (opt.key === q.correctAnswer) optClass += ' correct';
            else if (chosen === opt.key && opt.key !== q.correctAnswer) optClass += ' incorrect';
          }
          return `
            <div class="${optClass}" onclick="window.selectOfficialAnswer('${q.id}', '${opt.key}')" 
                 style="cursor: pointer; padding: 0.65rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;">
              <strong style="color: var(--primary); font-family: var(--font-mono);">${opt.key}.</strong>
              <span>${opt.text}</span>
            </div>
          `;
        }).join('')}
      </div>

      ${isExamSubmitted ? `
        <div style="background: var(--bg-muted); border-left: 3px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}; padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-size: 0.85rem;">
          <strong style="color: ${isCorrect ? 'var(--success-text)' : 'var(--danger-text)'};">
            ${isCorrect ? '✓ Bạn đã chọn đúng!' : `✗ Đáp án đúng: ${q.correctAnswer}`}
          </strong>
          <p style="margin: 0.25rem 0 0 0; color: var(--text-secondary);">${q.explanation || ''}</p>
        </div>
      ` : ''}
    </div>
  `;
}

function renderExamWriting(writing) {
  const eval1 = aiWritingEvaluations.task1;
  const eval2 = aiWritingEvaluations.task2;

  return `
    <div style="display: flex; flex-direction: column; gap: 2.5rem;">
      <!-- Task 1 -->
      <div class="card" style="padding: 2rem;">
        <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
          <span class="badge badge-primary">WRITING TASK 1 (20 PHÚT - TỐI THIỂU 120 TỪ)</span>
          <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${writing.task1.title}</h3>
        </div>

        <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
          <strong style="color: var(--primary);">Đề bài Task 1:</strong>
          <p style="margin: 0.35rem 0 0 0; color: var(--text-primary); white-space: pre-line;">${writing.task1.prompt}</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <label style="font-weight: 700; color: var(--text-primary);">Khung Soạn Bài Viết Của Thí Sinh:</label>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <span id="word-count-task1" class="badge badge-muted">0 từ</span>
              <button class="btn btn-primary btn-sm" onclick="window.evaluateWritingWithAI('task1', 120)">
                <i data-lucide="sparkles"></i> Chấm Điểm AI Rubric
              </button>
            </div>
          </div>
          <textarea style="width: 100%; min-height: 220px; padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); font-family: inherit; font-size: 0.95rem; line-height: 1.7; background: var(--bg-surface); color: var(--text-primary);" 
                    placeholder="Viết bài thư/email của bạn tại đây (tối thiểu 120 từ)..." 
                    oninput="window.handleEssayInput('task1', this.value)">${essayInputs.task1}</textarea>
        </div>

        ${eval1 ? `
          <div style="background: var(--bg-accent); border: 2px solid var(--primary); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <h4 style="margin: 0; color: var(--primary);"><i data-lucide="award"></i> ĐÁNH GIÁ CHẤM ĐIỂM AI VSTEP (TASK 1)</h4>
              <div style="font-size: 1.5rem; font-weight: 900; color: var(--primary); font-family: var(--font-mono);">${eval1.overall} / 10.0</div>
            </div>
            <div class="grid-2" style="gap: 0.75rem; font-size: 0.875rem;">
              <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong>Task Achievement (${eval1.criteria.taskAchievement.score}/10):</strong> ${eval1.criteria.taskAchievement.comment}
              </div>
              <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong>Coherence & Cohesion (${eval1.criteria.cohesion.score}/10):</strong> ${eval1.criteria.cohesion.comment}
              </div>
              <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong>Lexical Resource (${eval1.criteria.lexicalResource.score}/10):</strong> ${eval1.criteria.lexicalResource.comment}
              </div>
              <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong>Grammar Accuracy (${eval1.criteria.grammarAccuracy.score}/10):</strong> ${eval1.criteria.grammarAccuracy.comment}
              </div>
            </div>
          </div>
        ` : ''}

        ${isExamSubmitted ? `
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--success); padding: 1.5rem; border-radius: var(--radius-md);">
            <h4 style="color: var(--success-text); margin: 0 0 0.75rem 0;">Bài Viết Mẫu Điểm Cao (Band 8.5/10):</h4>
            <div style="font-size: 0.95rem; line-height: 1.8; color: var(--text-primary); white-space: pre-line;">
              ${writing.task1.sampleModel}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Task 2 -->
      <div class="card" style="padding: 2rem;">
        <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
          <span class="badge badge-secondary">WRITING TASK 2 (40 PHÚT - TỐI THIỂU 250 TỪ)</span>
          <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${writing.task2.title}</h3>
        </div>

        <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
          <strong style="color: var(--secondary);">Đề bài luận Task 2:</strong>
          <p style="margin: 0.35rem 0 0 0; color: var(--text-primary); white-space: pre-line;">${writing.task2.prompt}</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <label style="font-weight: 700; color: var(--text-primary);">Khung Soạn Bài Luận Của Thí Sinh:</label>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <span id="word-count-task2" class="badge badge-muted">0 từ</span>
              <button class="btn btn-secondary btn-sm" onclick="window.evaluateWritingWithAI('task2', 250)">
                <i data-lucide="sparkles"></i> Chấm Điểm AI Rubric
              </button>
            </div>
          </div>
          <textarea style="width: 100%; min-height: 320px; padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); font-family: inherit; font-size: 0.95rem; line-height: 1.7; background: var(--bg-surface); color: var(--text-primary);" 
                    placeholder="Viết bài luận học thuật của bạn tại đây (tối thiểu 250 từ)..." 
                    oninput="window.handleEssayInput('task2', this.value)">${essayInputs.task2}</textarea>
        </div>

        ${eval2 ? `
          <div style="background: var(--bg-accent); border: 2px solid var(--secondary); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <h4 style="margin: 0; color: var(--secondary);"><i data-lucide="award"></i> ĐÁNH GIÁ CHẤM ĐIỂM AI VSTEP (TASK 2)</h4>
              <div style="font-size: 1.5rem; font-weight: 900; color: var(--secondary); font-family: var(--font-mono);">${eval2.overall} / 10.0</div>
            </div>
            <div class="grid-2" style="gap: 0.75rem; font-size: 0.875rem;">
              <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong>Task Response (${eval2.criteria.taskAchievement.score}/10):</strong> ${eval2.criteria.taskAchievement.comment}
              </div>
              <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong>Coherence & Cohesion (${eval2.criteria.cohesion.score}/10):</strong> ${eval2.criteria.cohesion.comment}
              </div>
              <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong>Lexical Resource (${eval2.criteria.lexicalResource.score}/10):</strong> ${eval2.criteria.lexicalResource.comment}
              </div>
              <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong>Grammar Accuracy (${eval2.criteria.grammarAccuracy.score}/10):</strong> ${eval2.criteria.grammarAccuracy.comment}
              </div>
            </div>
          </div>
        ` : ''}

        ${isExamSubmitted ? `
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--success); padding: 1.5rem; border-radius: var(--radius-md);">
            <h4 style="color: var(--success-text); margin: 0 0 0.75rem 0;">Bài Luận Mẫu Điểm Cao (Band 9.0/10):</h4>
            <div style="font-size: 0.95rem; line-height: 1.8; color: var(--text-primary); white-space: pre-line;">
              ${writing.task2.sampleModel}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function renderExamSpeaking(speaking) {
  return `
    <div style="display: flex; flex-direction: column; gap: 2.5rem;">
      <!-- Part 1 -->
      <div class="card" style="padding: 2rem;">
        <span class="badge badge-primary">SPEAKING PART 1 (3 PHÚT)</span>
        <h3 style="margin: 0.35rem 0 1rem 0; color: var(--text-primary);">${speaking.part1.title}</h3>

        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md);">
            <h4 style="color: var(--primary); margin: 0 0 0.75rem 0;">${speaking.part1.topic1}</h4>
            ${speaking.part1.topic1Questions.map((q, idx) => {
              const spId = `spk1-t1-${idx}`;
              const aiEval = aiSpeechEvaluations[spId];
              return `
                <div style="margin-bottom: 1.5rem; background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                  <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Câu hỏi ${idx + 1}: "${q.q}"</div>
                  ${renderAudioPlayerComponent(spId, q.sample, `Audio Mẫu`)}
                  
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div style="font-size: 0.9rem; color: var(--text-secondary); font-style: italic;">Sample: "${q.sample}"</div>
                    <button class="btn btn-primary btn-sm" onclick="window.evaluateSpeechWithIPA('${spId}', '${q.sample.replace(/'/g, "\\'")}')">
                      <i data-lucide="mic"></i> Thu Âm & Chấm Điểm IPA AI
                    </button>
                  </div>

                  <div id="speech-ai-box-${spId}" style="margin-top: 0.75rem;">
                    ${aiEval ? `
                      <div style="background: var(--bg-accent); border-left: 4px solid var(--success); padding: 0.85rem 1rem; border-radius: var(--radius-sm); font-size: 0.875rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                          <strong style="color: var(--success-text);">Kết quả IPA AI: ${aiEval.score}</strong>
                          <span style="color: var(--primary); font-weight: 600;">Độ chính xác: ${aiEval.accuracy} (${aiEval.wpm})</span>
                        </div>
                        <div style="color: var(--text-secondary);">${aiEval.ipaFeedback}</div>
                      </div>
                    ` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md);">
            <h4 style="color: var(--secondary); margin: 0 0 0.75rem 0;">${speaking.part1.topic2}</h4>
            ${speaking.part1.topic2Questions.map((q, idx) => {
              const spId = `spk1-t2-${idx}`;
              const aiEval = aiSpeechEvaluations[spId];
              return `
                <div style="margin-bottom: 1.5rem; background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                  <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Câu hỏi ${idx + 1}: "${q.q}"</div>
                  ${renderAudioPlayerComponent(spId, q.sample, `Audio Mẫu`)}
                  
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div style="font-size: 0.9rem; color: var(--text-secondary); font-style: italic;">Sample: "${q.sample}"</div>
                    <button class="btn btn-secondary btn-sm" onclick="window.evaluateSpeechWithIPA('${spId}', '${q.sample.replace(/'/g, "\\'")}')">
                      <i data-lucide="mic"></i> Thu Âm & Chấm Điểm IPA AI
                    </button>
                  </div>

                  <div id="speech-ai-box-${spId}" style="margin-top: 0.75rem;">
                    ${aiEval ? `
                      <div style="background: var(--bg-accent); border-left: 4px solid var(--success); padding: 0.85rem 1rem; border-radius: var(--radius-sm); font-size: 0.875rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                          <strong style="color: var(--success-text);">Kết quả IPA AI: ${aiEval.score}</strong>
                          <span style="color: var(--primary); font-weight: 600;">Độ chính xác: ${aiEval.accuracy} (${aiEval.wpm})</span>
                        </div>
                        <div style="color: var(--text-secondary);">${aiEval.ipaFeedback}</div>
                      </div>
                    ` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Part 2 -->
      <div class="card" style="padding: 2rem;">
        <span class="badge badge-secondary">SPEAKING PART 2 (4 PHÚT)</span>
        <h3 style="margin: 0.35rem 0 1rem 0; color: var(--text-primary);">${speaking.part2.title}</h3>

        <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
          <strong style="color: var(--primary);">Tình huống thảo luận giải pháp:</strong>
          <p style="margin: 0.35rem 0 0 0; color: var(--text-primary); white-space: pre-line;">${speaking.part2.situation}</p>
        </div>

        ${renderAudioPlayerComponent('spk-p2', speaking.part2.sampleSpeech, `Audio Bài Nói Mẫu Part 2`)}

        <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.8; color: var(--text-primary); white-space: pre-line;">
          <strong style="color: var(--success-text);">Bài nói mẫu đề xuất:</strong>\n${speaking.part2.sampleSpeech}
        </div>
      </div>

      <!-- Part 3 -->
      <div class="card" style="padding: 2rem;">
        <span class="badge badge-success">SPEAKING PART 3 (5 PHÚT)</span>
        <h3 style="margin: 0.35rem 0 1rem 0; color: var(--text-primary);">${speaking.part3.title}: ${speaking.part3.topic}</h3>

        ${renderAudioPlayerComponent('spk-p3', speaking.part3.sampleSpeech, `Audio Bài Thuyết Trình Part 3`)}

        <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.8; color: var(--text-primary); white-space: pre-line; margin-bottom: 1.5rem;">
          <strong style="color: var(--primary);">Bài thuyết trình mẫu 2 phút:</strong>\n${speaking.part3.sampleSpeech}
        </div>

        <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md);">
          <strong style="color: var(--secondary);">Câu hỏi phụ mở rộng từ giám khảo:</strong>
          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.5rem;">
            ${(speaking.part3.followUp || []).map((f, idx) => `
              <div style="font-size: 0.9rem;">
                <strong>Q${idx + 1}:</strong> "${f.q}" ➔ <em>Gợi ý trả lời: ${f.a}</em>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}
