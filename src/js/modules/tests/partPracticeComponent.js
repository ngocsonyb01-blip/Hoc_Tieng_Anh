/**
 * src/js/modules/tests/partPracticeComponent.js
 * Quản lý chế độ "Luyện Thi Từng Phần Của Đề VSTEP" (Sectional Practice)
 * Cho phép thí sinh chọn bộ đề và tích chọn chính xác các Part muốn luyện
 */
import { authenticVstepExams } from '../../../data/tests/authenticVstepExams.js';
import { renderAudioPlayerComponent } from '../../utils/audioPlayer.js';
import { showConfirmModal, showAlertModal, showToast } from '../../utils/modal.js';
import { evaluateWritingWithGemini, evaluateSpeakingWithGemini } from '../../services/geminiService.js';
import { AnalyticsStore } from '../analytics/analyticsStore.js';
import { VstepAudioDirector } from '../listening/vstepAudioDirector.js';
import { PracticeHistoryService } from './practiceHistoryService.js';

export const VSTEP_PARTS_CONFIG = [
  {
    skill: 'listening',
    skillLabel: 'Kỹ Năng Nghe (Listening)',
    icon: 'headphones',
    color: '#06b6d4',
    bgLight: 'rgba(6, 182, 212, 0.08)',
    parts: [
      { id: 'listening_part1', code: 'Part 1', name: '8 Thông Báo / Hội Thoại Ngắn', desc: '8 câu hỏi trắc nghiệm A-B-C-D', defaultMins: 10, count: 8, countLabel: '8 câu' },
      { id: 'listening_part2', code: 'Part 2', name: '3 Đoạn Hội Thoại Dài', desc: '12 câu hỏi trắc nghiệm A-B-C-D', defaultMins: 15, count: 12, countLabel: '12 câu' },
      { id: 'listening_part3', code: 'Part 3', name: '3 Bài Nói Chuyện / Thuyết Trình', desc: '15 câu hỏi trắc nghiệm A-B-C-D', defaultMins: 15, count: 15, countLabel: '15 câu' }
    ]
  },
  {
    skill: 'reading',
    skillLabel: 'Kỹ Năng Đọc (Reading)',
    icon: 'book-open',
    color: '#3b82f6',
    bgLight: 'rgba(59, 130, 246, 0.08)',
    parts: [
      { id: 'reading_p1', code: 'Passage 1', name: 'Bài Đọc Hiểu Số 1', desc: '10 câu hỏi đọc hiểu học thuật', defaultMins: 15, count: 10, countLabel: '10 câu' },
      { id: 'reading_p2', code: 'Passage 2', name: 'Bài Đọc Hiểu Số 2', desc: '10 câu hỏi đọc hiểu học thuật', defaultMins: 15, count: 10, countLabel: '10 câu' },
      { id: 'reading_p3', code: 'Passage 3', name: 'Bài Đọc Hiểu Số 3', desc: '10 câu hỏi đọc hiểu học thuật', defaultMins: 15, count: 10, countLabel: '10 câu' },
      { id: 'reading_p4', code: 'Passage 4', name: 'Bài Đọc Hiểu Số 4', desc: '10 câu hỏi đọc hiểu học thuật', defaultMins: 15, count: 10, countLabel: '10 câu' }
    ]
  },
  {
    skill: 'writing',
    skillLabel: 'Kỹ Năng Viết (Writing)',
    icon: 'pen-tool',
    color: '#8b5cf6',
    bgLight: 'rgba(139, 92, 246, 0.08)',
    parts: [
      { id: 'writing_task1', code: 'Task 1', name: 'Viết Thư / Email Tương Tác', desc: 'Tối thiểu 120 từ theo rubric B1-B2', defaultMins: 20, count: 1, countLabel: '1 bài thư' },
      { id: 'writing_task2', code: 'Task 2', name: 'Viết Luận Tranh Luận Học Thuật', desc: 'Tối thiểu 250 từ theo chuẩn P.E.E.L', defaultMins: 40, count: 1, countLabel: '1 bài luận' }
    ]
  },
  {
    skill: 'speaking',
    skillLabel: 'Kỹ Năng Nói (Speaking)',
    icon: 'mic',
    color: '#ec4899',
    bgLight: 'rgba(236, 72, 153, 0.08)',
    parts: [
      { id: 'speaking_part1', code: 'Part 1', name: 'Tương Tác Xã Hội (Social Interaction)', desc: '3 chủ đề giao tiếp quen thuộc', defaultMins: 3, count: 3, countLabel: '3 chủ đề' },
      { id: 'speaking_part2', code: 'Part 2', name: 'Thảo Luận Giải Pháp (Solution Discussion)', desc: '1 tình huống & 3 lựa chọn giải pháp', defaultMins: 4, count: 1, countLabel: '1 tình huống' },
      { id: 'speaking_part3', code: 'Part 3', name: 'Phát Triển Chủ Đề (Topic Development)', desc: '1 sơ đồ Mindmap & câu hỏi phản biện', defaultMins: 5, count: 1, countLabel: '1 sơ đồ ý' }
    ]
  }
];

// Helper to flatten parts
export const ALL_PARTS_FLAT = VSTEP_PARTS_CONFIG.flatMap(g => g.parts.map(p => ({ ...p, skill: g.skill, skillLabel: g.skillLabel, color: g.color })));

// Component State
let selectedExamIdx = 0;
let selectedPartIds = ['listening_part1', 'reading_p1'];
let isPartSelectionModalOpen = false;
let isPracticing = false;
let isSubmitted = false;
let userAnswers = {};
let essayInputs = { task1: '', task2: '' };
let aiWritingEvaluations = { task1: null, task2: null };
let aiSpeechEvaluations = {};
let activeTabPartId = null;
let remainingSeconds = 0;
let timerInterval = null;

export class PartPracticeComponent {
  /**
   * Đăng ký các hàm window global cho các thao tác giao diện
   */
  static initWindowBindings(onStateChange) {
    window.openExamPartPracticeModal = (idx) => {
      selectedExamIdx = parseInt(idx, 10) || 0;
      isPartSelectionModalOpen = true;
      if (selectedPartIds.length === 0) {
        selectedPartIds = ALL_PARTS_FLAT.map(p => p.id);
      }
      if (onStateChange) onStateChange(true);
    };

    window.closeExamPartPracticeModal = () => {
      isPartSelectionModalOpen = false;
      if (onStateChange) onStateChange(true);
    };

    window.changePartPracticeExam = (idx) => {
      selectedExamIdx = parseInt(idx, 10) || 0;
      if (onStateChange) onStateChange(true);
    };

    window.togglePartSelection = (partId) => {
      if (selectedPartIds.includes(partId)) {
        selectedPartIds = selectedPartIds.filter(id => id !== partId);
      } else {
        selectedPartIds = [...selectedPartIds, partId];
      }
      if (onStateChange) onStateChange(true);
    };

    window.selectAllParts = () => {
      selectedPartIds = ALL_PARTS_FLAT.map(p => p.id);
      if (onStateChange) onStateChange(true);
    };

    window.deselectAllParts = () => {
      selectedPartIds = [];
      if (onStateChange) onStateChange(true);
    };

    window.selectPartsBySkill = (skill) => {
      const partsOfSkill = ALL_PARTS_FLAT.filter(p => p.skill === skill).map(p => p.id);
      const otherParts = selectedPartIds.filter(id => {
        const item = ALL_PARTS_FLAT.find(p => p.id === id);
        return item && item.skill !== skill;
      });
      selectedPartIds = [...new Set([...otherParts, ...partsOfSkill])];
      if (onStateChange) onStateChange(true);
    };

    window.startPartPractice = () => {
      if (selectedPartIds.length === 0) {
        showToast('Vui lòng tích chọn ít nhất một phần để bắt đầu luyện tập!', 'warning');
        return;
      }

      isPartSelectionModalOpen = false;
      isPracticing = true;
      isSubmitted = false;
      userAnswers = {};
      essayInputs = { task1: '', task2: '' };
      aiWritingEvaluations = { task1: null, task2: null };
      aiSpeechEvaluations = {};
      activeTabPartId = selectedPartIds[0] || null;

      // Compute total timer in seconds
      const totalMins = selectedPartIds.reduce((acc, id) => {
        const found = ALL_PARTS_FLAT.find(p => p.id === id);
        return acc + (found ? found.defaultMins : 15);
      }, 0);
      remainingSeconds = totalMins * 60;

      PartPracticeComponent.startTimer(onStateChange);
      if (onStateChange) onStateChange(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast(`Bắt đầu luyện tập ${selectedPartIds.length} phần đã chọn`, 'info');
    };

    window.switchPracticeTab = (partId) => {
      activeTabPartId = partId;
      if (onStateChange) onStateChange();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.selectPracticeAnswer = (qId, optionKey) => {
      if (isSubmitted) return;
      userAnswers[qId] = optionKey;
      
      const parent = document.getElementById(`practice-box-${qId}`);
      if (parent) {
        parent.querySelectorAll('.exam-option').forEach(el => el.classList.remove('selected'));
        const optEl = parent.querySelector(`.opt-${qId}-${optionKey}`);
        if (optEl) optEl.classList.add('selected');
      }
    };

    window.handlePracticeEssayInput = (taskKey, text) => {
      essayInputs[taskKey] = text;
      const countEl = document.getElementById(`practice-word-count-${taskKey}`);
      if (countEl) {
        const words = text.split(/\s+/).filter(w => w.trim()).length;
        countEl.innerText = `${words} từ`;
      }
    };

    window.evalPracticeWritingAI = async (taskKey, minWords) => {
      const text = essayInputs[taskKey] || '';
      const words = text.split(/\s+/).filter(w => w.trim()).length;
      if (words < 20) {
        showAlertModal({
          title: 'Bài Viết Chưa Đạt Độ Dài',
          message: `Vui lòng nhập bài viết của bạn (cần tối thiểu ${minWords} từ để Gemini AI chấm điểm chính xác 4 tiêu chí).`,
          icon: 'alert-circle',
          iconColor: 'var(--warning)',
          btnText: 'Tôi Sẽ Viết Thêm'
        });
        return;
      }

      const exam = authenticVstepExams[selectedExamIdx] || authenticVstepExams[0];
      const prompt = taskKey === 'task1' ? exam.writing?.task1?.prompt : exam.writing?.task2?.prompt;

      showToast('Gemini AI đang chấm bài viết...', 'info');
      const result = await evaluateWritingWithGemini(taskKey, prompt || '', text);

      aiWritingEvaluations[taskKey] = {
        overall: result.overallScore.toFixed(1),
        words: words,
        result
      };

      // Ghi nhận điểm thực tế bài viết vào bản đồ năng lực (quân bình)
      const writingPercent = Math.round((result.overallScore / 10) * 100);
      AnalyticsStore.recordSession('writing', writingPercent, { source: 'part_practice_writing', examIndex: selectedExamIdx });

      if (onStateChange) onStateChange();
      showToast(`Đã chấm điểm AI: ${result.overallScore.toFixed(1)}/10`, 'success');
    };

    window.evalPracticeSpeakingAI = (spId, sampleText, qPrompt = '') => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const resultBox = document.getElementById(`practice-speech-box-${spId}`);

      const finalize = async (transcribed) => {
        showToast('Gemini AI đang chấm bài nói...', 'info');
        const evalResult = await evaluateSpeakingWithGemini('speaking', qPrompt || sampleText, transcribed);
        aiSpeechEvaluations[spId] = {
          score: `${evalResult.overallScore.toFixed(1)} / 10.0 (${evalResult.vstepLevel})`,
          accuracy: `${Math.round(evalResult.pronunciationScore * 38 + 5)}%`,
          ipaFeedback: evalResult.ipaFeedback,
          transcribed: transcribed,
          feedback: evalResult.generalFeedback
        };

        // Ghi nhận điểm thực tế bài nói vào bản đồ năng lực (quân bình)
        const speakingPercent = Math.round((evalResult.overallScore / 10) * 100);
        AnalyticsStore.recordSession('speaking', speakingPercent, { source: 'part_practice_speaking', examIndex: selectedExamIdx });

        if (onStateChange) onStateChange();
        showToast('Đã chấm điểm phát âm AI', 'success');
      };

      if (!SpeechRecognition) {
        finalize(sampleText);
        return;
      }

      if (resultBox) {
        resultBox.innerHTML = `
          <div style="background: var(--bg-accent); padding: 0.85rem; border-radius: var(--radius-md); text-align: center;">
            <div style="color: var(--primary); font-weight: 700; margin-bottom: 0.2rem;">
              <i data-lucide="mic" class="animate-pulse"></i> Đang lắng nghe Micro... Hãy đọc to câu trả lời!
            </div>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Phân tích âm vị IPA & ngữ pháp...</span>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }

      const rec = new SpeechRecognition();
      rec.lang = 'en-US';
      rec.interimResults = false;
      rec.onresult = (e) => finalize(e.results[0][0].transcript);
      rec.onerror = () => finalize(sampleText);
      rec.start();
    };

    window.submitPartPractice = () => {
      showConfirmModal({
        title: 'Nộp Bài Luyện Tập',
        message: 'Bạn có chắc chắn muốn nộp bài để xem bảng điểm và giải thích chi tiết cho các phần đã làm?',
        icon: 'check-circle',
        iconColor: 'var(--success)',
        confirmText: 'Nộp Bài & Xem Điểm',
        confirmClass: 'btn-success',
        cancelText: 'Làm Tiếp',
        onConfirm: () => {
          isSubmitted = true;
          if (timerInterval) clearInterval(timerInterval);
          
          // Tự động cộng điểm các kỹ năng trắc nghiệm vào AnalyticsStore
          PartPracticeComponent.updateCompetencyScoresOnSubmit();

          // Lưu vào lịch sử luyện tập
          const exam = authenticVstepExams[selectedExamIdx] || authenticVstepExams[0];
          const activeParts = ALL_PARTS_FLAT.filter(p => selectedPartIds.includes(p.id));
          let totalQ = 0, totalCorrect = 0;
          const breakdown = activeParts.map(part => {
            let qList = [];
            if (part.id === 'listening_part1') qList = exam.listening?.part1?.questions || [];
            else if (part.id === 'listening_part2') qList = exam.listening?.part2?.conversations?.flatMap(c => c.questions) || [];
            else if (part.id === 'listening_part3') qList = exam.listening?.part3?.talks?.flatMap(t => t.questions) || [];
            else if (part.id.startsWith('reading_p')) {
              const pNum = parseInt(part.id.replace('reading_p', ''), 10) - 1;
              qList = exam.reading?.passages?.[pNum]?.questions || [];
            }
            let cCount = 0;
            qList.forEach(q => { if (userAnswers[q.id] === q.correctAnswer) cCount++; });
            if (qList.length > 0) {
              totalQ += qList.length;
              totalCorrect += cCount;
            }
            return {
              partId: part.id,
              name: part.name,
              correct: cCount,
              total: qList.length
            };
          });

          PracticeHistoryService.recordPartPracticeSession({
            examIndex: selectedExamIdx,
            examName: exam.name,
            partIds: selectedPartIds,
            partNames: activeParts.map(p => p.name),
            totalQuestions: totalQ,
            correctCount: totalCorrect,
            accuracyPercent: totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 100,
            partsBreakdown: breakdown
          });

          if (onStateChange) onStateChange();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          showToast('Đã nộp bài và lưu vào lịch sử luyện tập!', 'success');
        }
      });
    };

    window.retryCurrentParts = () => {
      userAnswers = {};
      essayInputs = { task1: '', task2: '' };
      aiWritingEvaluations = { task1: null, task2: null };
      aiSpeechEvaluations = {};
      isSubmitted = false;

      const totalMins = selectedPartIds.reduce((acc, id) => {
        const found = ALL_PARTS_FLAT.find(p => p.id === id);
        return acc + (found ? found.defaultMins : 15);
      }, 0);
      remainingSeconds = totalMins * 60;

      PartPracticeComponent.startTimer(onStateChange);
      if (onStateChange) onStateChange();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast('Đã làm mới bài thi, bắt đầu làm lại!', 'info');
    };

    window.exitPartPractice = () => {
      if (isPracticing && !isSubmitted) {
        showConfirmModal({
          title: 'Rời Khỏi Bài Luyện Tập?',
          message: 'Bài luyện tập chưa nộp sẽ không được tính điểm. Bạn có muốn thoát về sảnh chọn phần thi?',
          icon: 'alert-triangle',
          iconColor: 'var(--warning)',
          confirmText: 'Rời Phòng',
          cancelText: 'Làm Tiếp',
          onConfirm: () => {
            isPracticing = false;
            isSubmitted = false;
            if (timerInterval) clearInterval(timerInterval);
            if (onStateChange) onStateChange();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
        return;
      }
      isPracticing = false;
      isSubmitted = false;
      if (timerInterval) clearInterval(timerInterval);
      if (onStateChange) onStateChange();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  static startTimer(onStateChange) {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (!isPracticing || isSubmitted) {
        clearInterval(timerInterval);
        return;
      }
      if (remainingSeconds > 0) {
        remainingSeconds--;
        const el = document.getElementById('practice-floating-timer');
        if (el) {
          const m = Math.floor(remainingSeconds / 60);
          const s = remainingSeconds % 60;
          el.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
          if (remainingSeconds <= 300) el.style.color = '#ef4444';
        }
      }
    }, 1000);
  }

  static updateCompetencyScoresOnSubmit() {
    const exam = authenticVstepExams[selectedExamIdx] || authenticVstepExams[0];
    let lCorrect = 0, lTotal = 0;
    let rCorrect = 0, rTotal = 0;

    // Check listening
    if (selectedPartIds.includes('listening_part1') && exam.listening?.part1?.questions) {
      exam.listening.part1.questions.forEach(q => {
        lTotal++;
        if (userAnswers[q.id] === q.correctAnswer) lCorrect++;
      });
    }
    if (selectedPartIds.includes('listening_part2') && exam.listening?.part2?.conversations) {
      exam.listening.part2.conversations.flatMap(c => c.questions).forEach(q => {
        lTotal++;
        if (userAnswers[q.id] === q.correctAnswer) lCorrect++;
      });
    }
    if (selectedPartIds.includes('listening_part3') && exam.listening?.part3?.talks) {
      exam.listening.part3.talks.flatMap(t => t.questions).forEach(q => {
        lTotal++;
        if (userAnswers[q.id] === q.correctAnswer) lCorrect++;
      });
    }

    // Check reading
    const passageKeys = ['reading_p1', 'reading_p2', 'reading_p3', 'reading_p4'];
    passageKeys.forEach((pKey, idx) => {
      if (selectedPartIds.includes(pKey) && exam.reading?.passages && exam.reading.passages[idx]) {
        exam.reading.passages[idx].questions.forEach(q => {
          rTotal++;
          if (userAnswers[q.id] === q.correctAnswer) rCorrect++;
        });
      }
    });

    if (lTotal > 0) {
      const lPercent = Math.round((lCorrect / lTotal) * 100);
      AnalyticsStore.recordSession('listening', lPercent, { source: 'part_practice_listening', examIndex: selectedExamIdx, correct: lCorrect, total: lTotal });
    }
    if (rTotal > 0) {
      const rPercent = Math.round((rCorrect / rTotal) * 100);
      AnalyticsStore.recordSession('reading', rPercent, { source: 'part_practice_reading', examIndex: selectedExamIdx, correct: rCorrect, total: rTotal });
    }
  }

  static isCurrentlyPracticing() {
    return isPracticing;
  }

  /**
   * Render Modal chọn các Part thi cho một đề cụ thể
   */
  static renderPartSelectionModal() {
    if (!isPartSelectionModalOpen) return '';

    const currentExam = authenticVstepExams[selectedExamIdx] || authenticVstepExams[0];
    const totalEstMins = selectedPartIds.reduce((acc, id) => {
      const found = ALL_PARTS_FLAT.find(p => p.id === id);
      return acc + (found ? found.defaultMins : 15);
    }, 0);

    return `
      <div class="modal-backdrop animate-fade-in" style="position: fixed; inset: 0; background: rgba(0,0,0,0.75); z-index: 10600; display: flex; align-items: center; justify-content: center; padding: 1rem;" onclick="if(event.target === this) window.closeExamPartPracticeModal()">
        <div class="modal-card" style="background: var(--bg-card); border-radius: var(--radius-lg); max-width: 900px; width: 100%; max-height: 90vh; display: flex; flex-direction: column; box-shadow: var(--shadow-xl); border: 1px solid var(--border-color); overflow: hidden;">
          
          <!-- Modal Header -->
          <div style="padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; background: var(--bg-muted); flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                <span class="badge badge-secondary" style="font-weight: 700;">Luyện Từng Phần</span>
                <span class="badge badge-primary">Đề Số 0${selectedExamIdx + 1}</span>
              </div>
              <h3 style="margin: 0; font-size: 1.25rem; color: var(--text-primary);">${currentExam.name}</h3>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="window.closeExamPartPracticeModal()" style="border-radius: 50%; width: 32px; height: 32px; padding: 0; display: flex; align-items: center; justify-content: center;">
              ✕
            </button>
          </div>

          <!-- Quick Filter Toolbar -->
          <div style="padding: 0.75rem 1.5rem; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary);">
              Tích chọn phần bạn muốn làm:
            </span>
            <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
              <button class="btn btn-secondary btn-sm" onclick="window.selectAllParts()">
                ✓ Tất Cả (12)
              </button>
              <button class="btn btn-secondary btn-sm" onclick="window.selectPartsBySkill('listening')">
                🎧 Nghe
              </button>
              <button class="btn btn-secondary btn-sm" onclick="window.selectPartsBySkill('reading')">
                📖 Đọc
              </button>
              <button class="btn btn-secondary btn-sm" onclick="window.selectPartsBySkill('writing')">
                ✍️ Viết
              </button>
              <button class="btn btn-secondary btn-sm" onclick="window.selectPartsBySkill('speaking')">
                🗣️ Nói
              </button>
              <button class="btn btn-secondary btn-sm" onclick="window.deselectAllParts()" style="color: var(--danger);">
                Bỏ Chọn
              </button>
            </div>
          </div>

          <!-- Body: Grid of 12 parts in 4 skills -->
          <div style="padding: 1.25rem 1.5rem; overflow-y: auto; flex: 1; display: flex; flex-direction: column; gap: 1.25rem;">
            <div class="grid-2" style="gap: 1.25rem;">
              ${VSTEP_PARTS_CONFIG.map(group => `
                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; border-top: 4px solid ${group.color};">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.4rem; font-weight: 800; color: var(--text-primary); font-size: 0.95rem;">
                      <i data-lucide="${group.icon}" style="width: 16px; height: 16px; color: ${group.color};"></i>
                      <span>${group.skillLabel}</span>
                    </div>
                    <button class="btn btn-secondary btn-sm" style="font-size: 0.7rem; padding: 0.15rem 0.5rem;" onclick="window.selectPartsBySkill('${group.skill}')">
                      Chọn nhóm
                    </button>
                  </div>

                  <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    ${group.parts.map(part => {
                      const isChecked = selectedPartIds.includes(part.id);
                      const partStat = PracticeHistoryService.getPartStats(selectedExamIdx, part.id);
                      return `
                        <div style="background: ${isChecked ? group.bgLight : 'var(--bg-muted)'}; border: 2px solid ${isChecked ? group.color : 'transparent'}; border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; cursor: pointer; transition: all var(--transition-fast); display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;"
                             onclick="window.togglePartSelection('${part.id}')">
                          <div style="display: flex; align-items: center; gap: 0.65rem;">
                            <input type="checkbox" ${isChecked ? 'checked' : ''} 
                                   style="cursor: pointer; width: 17px; height: 17px; accent-color: ${group.color};" 
                                   onclick="event.stopPropagation(); window.togglePartSelection('${part.id}');" />
                            <div>
                              <div style="font-weight: 700; font-size: 0.875rem; color: var(--text-primary);">
                                <span style="color: ${group.color}; font-family: var(--font-mono); margin-right: 0.25rem;">[${part.code}]</span>
                                ${part.name}
                              </div>
                              <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.1rem;">
                                ${part.desc}
                              </div>
                              <div style="margin-top: 0.2rem;">
                                ${partStat.timesCount > 0 ? `
                                  <span class="badge badge-success" style="font-size: 0.65rem; font-weight: 700; padding: 0.1rem 0.4rem;">
                                    ✓ Đã làm: ${partStat.timesCount} lần
                                  </span>
                                ` : `
                                  <span style="font-size: 0.65rem; color: var(--text-muted);">Chưa làm</span>
                                `}
                              </div>
                            </div>
                          </div>

                          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.15rem; flex-shrink: 0;">
                            <span class="badge ${isChecked ? 'badge-primary' : 'badge-secondary'}" style="font-size: 0.7rem; font-weight: 700;">
                              ${part.countLabel}
                            </span>
                            <span style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">
                              ~${part.defaultMins}p
                            </span>
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Footer Summary & Launch Button -->
          <div style="padding: 1rem 1.5rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; background: var(--bg-muted); flex-wrap: wrap; gap: 0.75rem;">
            <div>
              <div style="font-size: 0.95rem; font-weight: 800; color: var(--primary);">
                🎯 Đang chọn: ${selectedPartIds.length} phần của đề
              </div>
              <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.1rem;">
                Ước tính: <strong>~${totalEstMins} phút làm bài</strong>
              </div>
            </div>

            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-secondary btn-sm" onclick="window.closeExamPartPracticeModal()">
                Đóng
              </button>
              <button class="btn btn-primary" 
                      ${selectedPartIds.length === 0 ? 'disabled' : ''}
                      style="padding: 0.55rem 1.4rem; font-weight: 700; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 0.4rem;"
                      onclick="window.startPartPractice()">
                <i data-lucide="play"></i>
                <span>Bắt Đầu Luyện Tập (${selectedPartIds.length} Phần)</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  /**
   * 2. Render phòng thi làm bài các Part đã chọn
   */
  static renderPracticePaper() {
    const exam = authenticVstepExams[selectedExamIdx] || authenticVstepExams[0];
    const m = Math.floor(remainingSeconds / 60);
    const s = remainingSeconds % 60;
    const timeStr = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

    if (isSubmitted) {
      return this.renderScoreReport(exam);
    }

    // Parts selected list
    const activeParts = ALL_PARTS_FLAT.filter(p => selectedPartIds.includes(p.id));
    if (!activeTabPartId || !selectedPartIds.includes(activeTabPartId)) {
      activeTabPartId = selectedPartIds[0] || null;
    }

    return `
      <div class="practice-paper-container animate-fade-in" style="display: flex; flex-direction: column; gap: 1.5rem;">
        <!-- Top Navigation Bar -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-bottom: 2px solid var(--border-color); padding-bottom: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <button class="btn btn-secondary btn-sm" onclick="window.exitPartPractice()" title="Rời khỏi bài luyện tập">
              <i data-lucide="arrow-left"></i> Rời Phòng Luyện
            </button>
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span class="badge badge-primary" style="font-weight: 700;">Luyện Từng Phần</span>
                <span class="badge badge-secondary">${selectedPartIds.length} Phần Đang Luyện</span>
              </div>
              <h3 style="margin: 0.2rem 0 0 0; font-size: 1.25rem; color: var(--text-primary);">${exam.name}</h3>
            </div>
          </div>

          <button class="btn btn-success" style="font-weight: 700; padding: 0.65rem 1.5rem; border-radius: var(--radius-full);" onclick="window.submitPartPractice()">
            <i data-lucide="check-circle"></i>
            <span>Nộp Bài & Chấm Điểm</span>
          </button>
        </div>

        <!-- Floating Timer & Submit Badge (Ghim góc phải màn hình) -->
        <div style="position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 10000; background: #0f172a; border: 2px solid #38bdf8; border-radius: var(--radius-full); padding: 0.65rem 1.25rem; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; align-items: center; gap: 0.75rem; color: #fff;">
          <i data-lucide="clock" style="width: 20px; height: 20px; color: #38bdf8;" class="animate-pulse"></i>
          <div style="font-size: 0.75rem; color: #94a3b8; font-weight: 700;">THỜI GIAN:</div>
          <div id="practice-floating-timer" style="font-size: 1.35rem; font-family: var(--font-mono); font-weight: 900; color: #38bdf8; letter-spacing: 1px;">
            ${timeStr}
          </div>
          <button class="btn btn-success btn-sm" style="padding: 0.35rem 0.85rem; font-weight: 700; border-radius: var(--radius-full);" onclick="window.submitPartPractice()">
            Nộp Bài
          </button>
        </div>

        <!-- Navigation Tabs of Selected Parts -->
        <div class="tabs-header" style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.5rem;">
          ${activeParts.map(part => {
            const isActive = part.id === activeTabPartId;
            return `
              <button class="btn ${isActive ? 'btn-primary' : 'btn-secondary'}" 
                      style="font-size: 0.85rem; font-weight: 700; white-space: nowrap; display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 1rem;"
                      onclick="window.switchPracticeTab('${part.id}')">
                <i data-lucide="${part.icon || 'file-text'}" style="width: 15px; height: 15px;"></i>
                <span>${part.code}: ${part.name}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Render Current Active Part -->
        <div class="active-part-body">
          ${this.renderSpecificPartContent(exam, activeTabPartId)}
        </div>
      </div>
    `;
  }

  /**
   * Render nội dung chi tiết của Part đang được chọn làm
   */
  static renderSpecificPartContent(exam, partId) {
    if (!partId) return '<div class="card" style="padding: 2rem; text-align: center;">Vui lòng chọn một phần để làm bài.</div>';

    // 1. Listening Part 1
    if (partId === 'listening_part1') {
      const p1 = exam.listening?.part1;
      if (!p1) return '<div class="card">Không có dữ liệu Part 1</div>';
      return `
        <div class="card" style="padding: 2rem;">
          <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
              <div>
                <span class="badge badge-primary">LISTENING PART 1</span>
                <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${p1.title}</h3>
                <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">${p1.instructions}</p>
              </div>
              <span class="badge badge-secondary">8 Câu Hỏi (1 - 8)</span>
            </div>
            <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
              ${renderAudioPlayerComponent('p-part1-master-tape', VstepAudioDirector.buildPart1FullAudioScript(p1), 'Phát Toàn Bộ Băng Part 1 (Có Lời Dẫn Giám Khảo & Chime)')}
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 2rem;">
            ${(p1.questions || []).map((q, idx) => this.renderPracticeQuestionCard(q, `p-lp1-${q.id}`, VstepAudioDirector.buildQuestionAudioScript(q, idx + 1), idx + 1)).join('')}
          </div>
        </div>
      `;
    }

    // 2. Listening Part 2
    if (partId === 'listening_part2') {
      const p2 = exam.listening?.part2;
      if (!p2) return '<div class="card">Không có dữ liệu Part 2</div>';
      let qIdx = 8;
      return `
        <div class="card" style="padding: 2rem;">
          <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
              <div>
                <span class="badge badge-secondary">LISTENING PART 2</span>
                <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${p2.title}</h3>
                <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">${p2.instructions}</p>
              </div>
              <span class="badge badge-secondary">12 Câu Hỏi (9 - 20)</span>
            </div>
            <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
              ${renderAudioPlayerComponent('p-part2-master-tape', VstepAudioDirector.buildPart2FullAudioScript(p2), 'Phát Toàn Bộ Băng Part 2 (Có Lời Dẫn Giám Khảo & 3 Hội Thoại)')}
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 2.5rem;">
            ${(p2.conversations || []).map(conv => {
              const startQ = qIdx + 1;
              const endQ = qIdx + (conv.questions?.length || 4);
              const script = VstepAudioDirector.buildConversationAudioScript(conv, startQ, endQ);
              return `
                <div style="background: var(--bg-muted); padding: 1.5rem; border-radius: var(--radius-lg);">
                  <h4 style="color: var(--primary); margin: 0 0 1rem 0;">${conv.title} (Câu ${startQ} - ${endQ})</h4>
                  ${renderAudioPlayerComponent(`p-lconv-${conv.id}`, script, `Audio ${conv.title} (Có Lời Dẫn Chuẩn VSTEP)`)}
                  <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem;">
                    ${(conv.questions || []).map(q => {
                      qIdx++;
                      return this.renderPracticeQuestionCard(q, `p-lconv-${conv.id}-${q.id}`, null, qIdx);
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // 3. Listening Part 3
    if (partId === 'listening_part3') {
      const p3 = exam.listening?.part3;
      if (!p3) return '<div class="card">Không có dữ liệu Part 3</div>';
      let qIdx = 20;
      return `
        <div class="card" style="padding: 2rem;">
          <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
              <div>
                <span class="badge badge-primary">LISTENING PART 3</span>
                <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${p3.title}</h3>
                <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">${p3.instructions}</p>
              </div>
              <span class="badge badge-secondary">15 Câu Hỏi (21 - 35)</span>
            </div>
            <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
              ${renderAudioPlayerComponent('p-part3-master-tape', VstepAudioDirector.buildPart3FullAudioScript(p3), 'Phát Toàn Bộ Băng Part 3 (Có Lời Dẫn Giám Khảo & 3 Bài Giảng)')}
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 2.5rem;">
            ${(p3.talks || []).map(talk => {
              const startQ = qIdx + 1;
              const endQ = qIdx + (talk.questions?.length || 5);
              const script = VstepAudioDirector.buildTalkAudioScript(talk, startQ, endQ);
              return `
                <div style="background: var(--bg-muted); padding: 1.5rem; border-radius: var(--radius-lg);">
                  <h4 style="color: var(--primary); margin: 0 0 1rem 0;">${talk.title} (Câu ${startQ} - ${endQ})</h4>
                  ${renderAudioPlayerComponent(`p-ltalk-${talk.id}`, script, `Audio ${talk.title} (Có Lời Dẫn Chuẩn VSTEP)`)}
                  <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem;">
                    ${(talk.questions || []).map(q => {
                      qIdx++;
                      return this.renderPracticeQuestionCard(q, `p-ltalk-${talk.id}-${q.id}`, null, qIdx);
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // 4. Reading Passages (1, 2, 3, 4)
    if (partId.startsWith('reading_p')) {
      const pNum = parseInt(partId.replace('reading_p', ''), 10) - 1;
      const passage = exam.reading?.passages && exam.reading.passages[pNum];
      if (!passage) return '<div class="card">Không có dữ liệu bài đọc này</div>';

      const baseQIdx = pNum * 10;
      return `
        <div class="card" style="padding: 2rem;">
          <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
            <span class="badge badge-primary">READING PASSAGE ${pNum + 1}</span>
            <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${passage.title}</h3>
          </div>

          <div class="grid-2" style="gap: 2rem; align-items: start;">
            <!-- Left: Passage Content -->
            <div style="background: var(--bg-muted); padding: 1.5rem; border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.8; color: var(--text-primary); max-height: 75vh; overflow-y: auto; position: sticky; top: 1rem; border: 1px solid var(--border-color);">
              <h4 style="margin: 0 0 1rem 0; color: var(--primary); font-size: 1.15rem;">Văn Bản Bài Đọc:</h4>
              <div style="white-space: pre-line;">${passage.passageText}</div>
            </div>

            <!-- Right: Questions List -->
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              ${(passage.questions || []).map((q, idx) => this.renderPracticeQuestionCard(q, `p-read-${q.id}`, null, baseQIdx + idx + 1)).join('')}
            </div>
          </div>
        </div>
      `;
    }

    // 5. Writing Task 1
    if (partId === 'writing_task1') {
      const t1 = exam.writing?.task1;
      if (!t1) return '<div class="card">Không có dữ liệu Writing Task 1</div>';
      const userText = essayInputs.task1 || '';
      const words = userText.split(/\s+/).filter(w => w.trim()).length;
      const aiEval = aiWritingEvaluations.task1;

      return `
        <div class="card" style="padding: 2rem;">
          <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
            <span class="badge badge-primary">WRITING TASK 1 (TỐI THIỂU 120 TỪ)</span>
            <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${t1.title}</h3>
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
            <strong style="color: var(--primary);">Đề bài Task 1:</strong>
            <p style="margin: 0.35rem 0 0 0; color: var(--text-primary); white-space: pre-line;">${t1.prompt}</p>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <strong style="color: var(--text-primary);">Bài Viết Của Bạn:</strong>
              <span id="practice-word-count-task1" class="badge badge-secondary" style="font-size: 0.85rem; font-family: var(--font-mono);">${words} từ</span>
            </div>
            <textarea class="form-control" rows="12" 
                      placeholder="Dear Sir/Madam, I am writing to..." 
                      style="width: 100%; padding: 1rem; border-radius: var(--radius-md); border: 2px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary); font-family: inherit; font-size: 1rem; line-height: 1.6;"
                      oninput="window.handlePracticeEssayInput('task1', this.value)">${userText}</textarea>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <button class="btn btn-primary" onclick="window.evalPracticeWritingAI('task1', 120)">
              <i data-lucide="sparkles"></i> Chấm Điểm Thư Với Gemini AI
            </button>
            <span style="font-size: 0.85rem; color: var(--text-secondary);">Chuẩn 4 tiêu chí chấm VSTEP Task 1</span>
          </div>

          <!-- AI Result Box -->
          ${aiEval ? `
            <div style="margin-top: 1.5rem; background: var(--bg-surface); border: 2px solid var(--primary); border-radius: var(--radius-md); padding: 1.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span class="badge badge-primary" style="font-size: 0.85rem;">Kết Quả Đánh Giá Task 1</span>
                <strong style="font-size: 1.35rem; color: var(--primary);">${aiEval.overall}/10.0 (${aiEval.result?.vstepLevel || 'B1'})</strong>
              </div>
              <p style="margin: 0 0 0.5rem 0; color: var(--text-primary);"><strong>Nhận xét:</strong> ${aiEval.result?.strengths?.join('; ') || 'Bài viết tốt.'}</p>
              <p style="margin: 0; color: var(--text-secondary);"><strong>Gợi ý:</strong> ${aiEval.result?.suggestions?.join('; ') || 'Tiếp tục phát huy.'}</p>
            </div>
          ` : ''}
        </div>
      `;
    }

    // 6. Writing Task 2
    if (partId === 'writing_task2') {
      const t2 = exam.writing?.task2;
      if (!t2) return '<div class="card">Không có dữ liệu Writing Task 2</div>';
      const userText = essayInputs.task2 || '';
      const words = userText.split(/\s+/).filter(w => w.trim()).length;
      const aiEval = aiWritingEvaluations.task2;

      return `
        <div class="card" style="padding: 2rem;">
          <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
            <span class="badge badge-primary">WRITING TASK 2 (TỐI THIỂU 250 TỪ)</span>
            <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${t2.title}</h3>
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
            <strong style="color: var(--primary);">Đề bài luận Task 2:</strong>
            <p style="margin: 0.35rem 0 0 0; color: var(--text-primary); white-space: pre-line;">${t2.prompt}</p>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <strong style="color: var(--text-primary);">Bài Luận Của Bạn:</strong>
              <span id="practice-word-count-task2" class="badge badge-secondary" style="font-size: 0.85rem; font-family: var(--font-mono);">${words} từ</span>
            </div>
            <textarea class="form-control" rows="16" 
                      placeholder="In recent years, the issue of..." 
                      style="width: 100%; padding: 1rem; border-radius: var(--radius-md); border: 2px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary); font-family: inherit; font-size: 1rem; line-height: 1.6;"
                      oninput="window.handlePracticeEssayInput('task2', this.value)">${userText}</textarea>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <button class="btn btn-primary" onclick="window.evalPracticeWritingAI('task2', 250)">
              <i data-lucide="sparkles"></i> Chấm Điểm Luận Với Gemini AI
            </button>
            <span style="font-size: 0.85rem; color: var(--text-secondary);">Chuẩn cấu trúc P.E.E.L & 4 tiêu chí VSTEP</span>
          </div>

          ${aiEval ? `
            <div style="margin-top: 1.5rem; background: var(--bg-surface); border: 2px solid var(--primary); border-radius: var(--radius-md); padding: 1.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span class="badge badge-primary" style="font-size: 0.85rem;">Kết Quả Đánh Giá Task 2</span>
                <strong style="font-size: 1.35rem; color: var(--primary);">${aiEval.overall}/10.0 (${aiEval.result?.vstepLevel || 'B1'})</strong>
              </div>
              <p style="margin: 0 0 0.5rem 0; color: var(--text-primary);"><strong>Nhận xét:</strong> ${aiEval.result?.strengths?.join('; ') || 'Bài luận chặt chẽ.'}</p>
              <p style="margin: 0; color: var(--text-secondary);"><strong>Gợi ý:</strong> ${aiEval.result?.suggestions?.join('; ') || 'Tiếp tục rèn luyện vốn từ.'}</p>
            </div>
          ` : ''}
        </div>
      `;
    }

    // 7. Speaking Part 1
    if (partId === 'speaking_part1') {
      const sp1 = exam.speaking?.part1;
      if (!sp1) return '<div class="card">Không có dữ liệu Speaking Part 1</div>';

      return `
        <div class="card" style="padding: 2rem;">
          <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
            <span class="badge badge-primary">SPEAKING PART 1 (3 PHÚT)</span>
            <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${sp1.title}</h3>
          </div>

          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <!-- Topic 1 -->
            <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md);">
              <h4 style="color: var(--primary); margin: 0 0 0.75rem 0;">${sp1.topic1 || 'Chủ đề 1'}</h4>
              ${(sp1.topic1Questions || []).map((q, idx) => this.renderSpeakingItemCard(`p-spk1-t1-${idx}`, q.q, q.sample)).join('')}
            </div>

            <!-- Topic 2 -->
            <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md);">
              <h4 style="color: var(--secondary); margin: 0 0 0.75rem 0;">${sp1.topic2 || 'Chủ đề 2'}</h4>
              ${(sp1.topic2Questions || []).map((q, idx) => this.renderSpeakingItemCard(`p-spk1-t2-${idx}`, q.q, q.sample)).join('')}
            </div>
          </div>
        </div>
      `;
    }

    // 8. Speaking Part 2
    if (partId === 'speaking_part2') {
      const sp2 = exam.speaking?.part2;
      if (!sp2) return '<div class="card">Không có dữ liệu Speaking Part 2</div>';

      return `
        <div class="card" style="padding: 2rem;">
          <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
            <span class="badge badge-secondary">SPEAKING PART 2 (4 PHÚT)</span>
            <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${sp2.title}</h3>
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
            <strong style="color: var(--primary);">Tình huống thảo luận:</strong>
            <p style="margin: 0.35rem 0 0 0; color: var(--text-primary); white-space: pre-line;">${sp2.situation}</p>
          </div>

          ${renderAudioPlayerComponent('p-spk-p2', sp2.sampleSpeech, 'Audio Bài Nói Mẫu Part 2')}

          <div style="margin-top: 1.5rem;">
            ${this.renderSpeakingItemCard('p-spk-p2-item', 'Hãy trình bày giải pháp lựa chọn của bạn và phản biện các phương án khác:', sp2.sampleSpeech)}
          </div>
        </div>
      `;
    }

    // 9. Speaking Part 3
    if (partId === 'speaking_part3') {
      const sp3 = exam.speaking?.part3;
      if (!sp3) return '<div class="card">Không có dữ liệu Speaking Part 3</div>';

      return `
        <div class="card" style="padding: 2rem;">
          <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
            <span class="badge badge-primary">SPEAKING PART 3 (5 PHÚT)</span>
            <h3 style="margin: 0.35rem 0; color: var(--text-primary);">${sp3.title}</h3>
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
            <strong style="color: var(--primary);">Chủ đề trung tâm & Mindmap:</strong>
            <h4 style="margin: 0.35rem 0; color: var(--text-primary);">${sp3.topic}</h4>
            <div style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary); white-space: pre-line;">${sp3.mindMap}</div>
          </div>

          ${renderAudioPlayerComponent('p-spk-p3', sp3.sampleSpeech, 'Audio Bài Nói Mẫu Part 3')}

          <div style="margin-top: 1.5rem;">
            ${this.renderSpeakingItemCard('p-spk-p3-item', 'Hãy phát biểu bài nói hoàn chỉnh theo mindmap trên:', sp3.sampleSpeech)}
          </div>
        </div>
      `;
    }

    return '<div class="card" style="padding: 2rem;">Phần này đang được chuẩn bị.</div>';
  }

  static renderPracticeQuestionCard(q, audioId, audioText, qNumber) {
    const chosen = userAnswers[q.id];
    const isCorrect = isSubmitted && chosen === q.correctAnswer;
    const labelText = qNumber ? `Câu ${qNumber}` : `Câu ${q.id}`;

    return `
      <div id="practice-box-${q.id}" class="exam-question-card" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
        ${audioText ? renderAudioPlayerComponent(audioId, audioText, `Audio ${labelText}`) : ''}

        <div style="font-weight: 700; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.85rem;">
          ${labelText}: ${q.question}
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.75rem;">
          ${(q.options || []).map(opt => {
            let optClass = `exam-option opt-${q.id}-${opt.key}`;
            if (chosen === opt.key) optClass += ' selected';
            if (isSubmitted) {
              if (opt.key === q.correctAnswer) optClass += ' correct';
              else if (chosen === opt.key && opt.key !== q.correctAnswer) optClass += ' incorrect';
            }
            return `
              <div class="${optClass}" onclick="window.selectPracticeAnswer('${q.id}', '${opt.key}')" 
                   style="cursor: pointer; padding: 0.65rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;">
                <strong style="color: var(--primary); font-family: var(--font-mono);">${opt.key}.</strong>
                <span>${opt.text}</span>
              </div>
            `;
          }).join('')}
        </div>

        ${isSubmitted ? `
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

  static renderSpeakingItemCard(spId, promptText, sampleText) {
    const aiEval = aiSpeechEvaluations[spId];
    return `
      <div style="margin-bottom: 1.5rem; background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">${promptText}</div>
        ${sampleText ? renderAudioPlayerComponent(`audio-${spId}`, sampleText, 'Audio Câu Trả Lời Mẫu') : ''}

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <button class="btn btn-primary btn-sm" onclick="window.evalPracticeSpeakingAI('${spId}', '${(sampleText || '').replace(/'/g, "\\'")}', '${promptText.replace(/'/g, "\\'")}')">
            <i data-lucide="mic"></i> Thu Âm & Chấm Điểm IPA AI
          </button>
        </div>

        <div id="practice-speech-box-${spId}" style="margin-top: 0.75rem;">
          ${aiEval ? `
            <div style="background: var(--bg-accent); border-left: 4px solid var(--success); padding: 0.85rem 1rem; border-radius: var(--radius-sm); font-size: 0.875rem;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                <strong style="color: var(--success-text);">Kết quả IPA AI: ${aiEval.score}</strong>
                <span style="color: var(--primary); font-weight: 600;">Độ chính xác: ${aiEval.accuracy}</span>
              </div>
              <div style="color: var(--text-secondary);">${aiEval.ipaFeedback || aiEval.feedback || ''}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  /**
   * 3. Báo Cáo Điểm Sau Khi Hoàn Thành Các Part
   */
  static renderScoreReport(exam) {
    const activeParts = ALL_PARTS_FLAT.filter(p => selectedPartIds.includes(p.id));

    // Stats calculations
    let totalQuestionsPracticed = 0;
    let totalCorrectAnswers = 0;

    const partResults = activeParts.map(part => {
      let qList = [];
      if (part.id === 'listening_part1') qList = exam.listening?.part1?.questions || [];
      else if (part.id === 'listening_part2') qList = exam.listening?.part2?.conversations?.flatMap(c => c.questions) || [];
      else if (part.id === 'listening_part3') qList = exam.listening?.part3?.talks?.flatMap(t => t.questions) || [];
      else if (part.id.startsWith('reading_p')) {
        const pNum = parseInt(part.id.replace('reading_p', ''), 10) - 1;
        qList = exam.reading?.passages?.[pNum]?.questions || [];
      }

      let correctCount = 0;
      qList.forEach(q => {
        if (userAnswers[q.id] === q.correctAnswer) correctCount++;
      });

      if (qList.length > 0) {
        totalQuestionsPracticed += qList.length;
        totalCorrectAnswers += correctCount;
      }

      return {
        part,
        totalQ: qList.length,
        correctCount,
        percent: qList.length > 0 ? Math.round((correctCount / qList.length) * 100) : 0
      };
    });

    const overallRate = totalQuestionsPracticed > 0 ? Math.round((totalCorrectAnswers / totalQuestionsPracticed) * 100) : 100;

    return `
      <div class="score-report-card animate-fade-in" style="background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); padding: 2.5rem; margin-bottom: 2rem; box-shadow: var(--shadow-lg);">
        <!-- Report Header -->
        <div style="text-align: center; max-width: 650px; margin: 0 auto 2.5rem auto;">
          <span class="badge badge-success" style="font-size: 0.85rem; margin-bottom: 0.75rem; font-weight: 800;">
            KẾT QUẢ LUYỆN TẬP TỪNG PHẦN
          </span>
          <h2 style="font-size: 1.85rem; color: var(--text-primary); margin: 0 0 0.5rem 0;">
            Báo Cáo Điểm & Nhận Xét Chuyên Sâu
          </h2>
          <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">
            Đề: <strong>${exam.name}</strong> • Đã hoàn thành <strong>${activeParts.length} phần</strong> bạn đã chọn.
          </p>
        </div>

        <!-- Metric Badges Grid -->
        <div class="grid-3" style="gap: 1.25rem; margin-bottom: 2.5rem;">
          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); border-top: 4px solid var(--primary); text-align: center;">
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem;">Số Câu Đúng (Trắc Nghiệm)</div>
            <div style="font-size: 1.8rem; font-weight: 900; color: var(--primary);">${totalCorrectAnswers} / ${totalQuestionsPracticed}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">Tỷ lệ chính xác: ${overallRate}%</div>
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); border-top: 4px solid var(--secondary); text-align: center;">
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem;">Bài Viết (Writing)</div>
            <div style="font-size: 1.8rem; font-weight: 900; color: var(--secondary);">
              ${aiWritingEvaluations.task1 ? aiWritingEvaluations.task1.overall : (aiWritingEvaluations.task2 ? aiWritingEvaluations.task2.overall : 'Hoàn Tất')}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">Gemini AI Rubric B1-B2</div>
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); border-top: 4px solid var(--success); text-align: center;">
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem;">Bài Nói (Speaking)</div>
            <div style="font-size: 1.8rem; font-weight: 900; color: var(--success);">
              ${Object.keys(aiSpeechEvaluations).length > 0 ? 'Đã Chấm AI' : 'Hoàn Tất'}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">Nhận diện âm vị chuẩn IPA</div>
          </div>
        </div>

        <!-- Breakdown per selected part -->
        <div style="margin-bottom: 2rem;">
          <h4 style="color: var(--primary); margin: 0 0 1rem 0; font-size: 1.2rem;">Chi Tiết Từng Phần Bạn Đã Luyện:</h4>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${partResults.map(res => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1rem 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <span class="badge" style="background: ${res.part.color}20; color: ${res.part.color}; font-weight: 800;">
                    ${res.part.code}
                  </span>
                  <div>
                    <strong style="color: var(--text-primary); font-size: 0.95rem;">${res.part.name}</strong>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">${res.part.skillLabel}</div>
                  </div>
                </div>

                <div>
                  ${res.totalQ > 0 ? `
                    <div style="text-align: right;">
                      <strong style="font-size: 1.1rem; color: ${res.percent >= 70 ? 'var(--success)' : 'var(--warning)'}; font-family: var(--font-mono);">
                        ${res.correctCount} / ${res.totalQ} câu (${res.percent}%)
                      </strong>
                    </div>
                  ` : `
                    <span class="badge badge-success">Đã hoàn thành luyện tập</span>
                  `}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Review Detailed Questions & Explanations -->
        <div style="margin-top: 2rem; border-top: 2px solid var(--border-color); padding-top: 1.5rem;">
          <h4 style="color: var(--text-primary); margin: 0 0 1rem 0;">Xem Lại Chi Tiết Đáp Án & Giải Thích Từng Câu:</h4>
          
          <div class="tabs-header" style="display: flex; gap: 0.5rem; overflow-x: auto; margin-bottom: 1.5rem;">
            ${activeParts.map(part => `
              <button class="btn ${part.id === activeTabPartId ? 'btn-primary' : 'btn-secondary'} btn-sm"
                      onclick="window.switchPracticeTab('${part.id}')">
                <span>${part.code}: ${part.name}</span>
              </button>
            `).join('')}
          </div>

          <div class="active-review-part">
            ${this.renderSpecificPartContent(exam, activeTabPartId)}
          </div>
        </div>

        <!-- Actions -->
        <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2.5rem; flex-wrap: wrap;">
          <button class="btn btn-secondary" onclick="window.retryCurrentParts()" style="padding: 0.75rem 1.75rem; font-weight: 700;">
            <i data-lucide="rotate-ccw"></i> Làm Lại Các Phần Này
          </button>
          <button class="btn btn-primary" onclick="window.exitPartPractice()" style="padding: 0.75rem 1.75rem; font-weight: 700;">
            <i data-lucide="grid"></i> Chọn Phần Khác / Đề Khác Để Luyện
          </button>
        </div>
      </div>
    `;
  }
}
