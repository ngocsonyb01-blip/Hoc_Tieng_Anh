import { task1Letters, task2Essays } from '../../data/writing/index.js';
import { WritingAssistant } from '../modules/writing/writingAssistant.js';
import { AnalyticsStore } from '../modules/analytics/analyticsStore.js';
import { evaluateWritingWithGemini } from '../services/geminiService.js';
import { WritingStructureGuide } from '../modules/writing/writingStructureGuide.js';

let activeWritingTab = 'task1'; // 'task1' | 'task2' | 'criteria'
let selectedTask1Id = task1Letters[0]?.id || 'letter-01';
let selectedTask2Id = task2Essays[0]?.id || 'essay-01';
let activeTask1SubTab = 'model'; // 'model' | 'guide' | 'analysis'
let activeTask2SubTab = 'model'; // 'model' | 'guide' | 'analysis'

// Writing Modal State
let isWritingModalOpen = false;
let isWritingModalMinimized = false;
let activeModalTaskType = 'task1'; // 'task1' | 'task2'
let activeModalTaskId = task1Letters[0]?.id || 'letter-01';
let writingModalDrafts = {}; // { [taskKey]: draftText }
let modalEvaluationResult = null;

const B1_CONNECTORS_LIST = [
  'however', 'therefore', 'moreover', 'furthermore', 'in addition', 
  'on the other hand', 'consequently', 'as a result', 'in conclusion', 
  'firstly', 'secondly', 'finally', 'for example', 'for instance', 
  'in contrast', 'although', 'even though', 'despite', 'in order to',
  'nevertheless', 'similarly', 'to sum up', 'in summary', 'besides',
  'specifically', 'further', 'meanwhile', 'subsequently'
];

export function renderWritingView() {
  window.handleWritingTabChange = (tab) => {
    activeWritingTab = tab;
    window.app.renderCurrentView();
  };

  window.handleTask1Select = (id) => {
    selectedTask1Id = id;
    window.app.renderCurrentView();
  };

  window.handleTask2Select = (id) => {
    selectedTask2Id = id;
    window.app.renderCurrentView();
  };

  window.handleTask1SubTabChange = (sub) => {
    activeTask1SubTab = sub;
    window.app.renderCurrentView();
  };

  window.handleTask2SubTabChange = (sub) => {
    activeTask2SubTab = sub;
    window.app.renderCurrentView();
  };

  // Modal Handlers
  window.openWritingTestModal = (taskType = null, taskId = null) => {
    if (taskType) activeModalTaskType = taskType;
    else if (activeWritingTab === 'task2') activeModalTaskType = 'task2';
    else activeModalTaskType = 'task1';

    if (taskId) {
      activeModalTaskId = taskId;
    } else {
      activeModalTaskId = activeModalTaskType === 'task1' ? selectedTask1Id : selectedTask2Id;
    }

    isWritingModalOpen = true;
    isWritingModalMinimized = false;
    renderOrUpdateWritingModalDOM();
  };

  window.minimizeWritingTestModal = () => {
    isWritingModalMinimized = true;
    renderOrUpdateWritingModalDOM();
    if (window.showToast) {
      window.showToast('Đã thu nhỏ phòng thi viết xuống nền. Bạn có thể tra cứu bài mẫu và mở lại bất cứ lúc nào!', 'info');
    }
  };

  window.restoreWritingTestModal = () => {
    isWritingModalMinimized = false;
    renderOrUpdateWritingModalDOM();
  };

  window.closeWritingTestModal = () => {
    isWritingModalOpen = false;
    isWritingModalMinimized = false;
    const modal = document.getElementById('writing-floating-test-modal');
    if (modal) modal.style.display = 'none';
    const dock = document.getElementById('writing-test-dock-pill');
    if (dock) dock.style.display = 'none';
  };

  window.switchWritingModalTaskType = (type) => {
    activeModalTaskType = type;
    activeModalTaskId = type === 'task1' ? task1Letters[0]?.id : task2Essays[0]?.id;
    modalEvaluationResult = null;
    renderOrUpdateWritingModalDOM();
  };

  window.switchWritingModalTaskId = (id) => {
    activeModalTaskId = id;
    modalEvaluationResult = null;
    renderOrUpdateWritingModalDOM();
  };

  window.onWritingModalInput = () => {
    const textarea = document.getElementById('writing-modal-editor');
    if (!textarea) return;
    const draft = textarea.value;
    const draftKey = `${activeModalTaskType}_${activeModalTaskId}`;
    writingModalDrafts[draftKey] = draft;
    updateWritingModalCounters(draft);
  };

  window.clearWritingDraftModal = () => {
    const draftKey = `${activeModalTaskType}_${activeModalTaskId}`;
    writingModalDrafts[draftKey] = '';
    modalEvaluationResult = null;
    const textarea = document.getElementById('writing-modal-editor');
    if (textarea) {
      textarea.value = '';
      textarea.focus();
    }
    updateWritingModalCounters('');
    renderOrUpdateWritingModalDOM();
  };

  window.submitWritingDraftModal = async () => {
    const draftKey = `${activeModalTaskType}_${activeModalTaskId}`;
    const text = (writingModalDrafts[draftKey] || '').trim();
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
    const minWords = activeModalTaskType === 'task1' ? 120 : 250;

    if (words < 20) {
      if (window.showToast) window.showToast('Vui lòng viết tối thiểu 20 từ trước khi nộp bài để AI chấm điểm!', 'warning');
      return;
    }

    const currentTaskData = activeModalTaskType === 'task1'
      ? (task1Letters.find(l => l.id === activeModalTaskId) || task1Letters[0])
      : (task2Essays.find(e => e.id === activeModalTaskId) || task2Essays[0]);
    const taskPrompt = currentTaskData?.prompt || '';

    if (window.showToast) window.showToast('Gemini AI đang chấm bài...', 'info');

    // Perform Comprehensive AI Evaluation with Gemini
    // Ghi nhận điểm bài viết thực tế vào bản đồ năng lực (quân bình)
    const writingPercent = Math.round((modalEvaluationResult.overallScore / 10) * 100);
    AnalyticsStore.recordSession('writing', writingPercent, { source: 'writing_workshop', taskType: activeModalTaskType, score: modalEvaluationResult.overallScore });

    if (window.showToast) {
      window.showToast(`Đã chấm điểm: ${modalEvaluationResult.overallScore}/10 (${writingPercent}%)`, 'success');
    }

    renderOrUpdateWritingModalDOM();
  };

  const currentLetter = task1Letters.find(l => l.id === selectedTask1Id) || task1Letters[0];
  const currentEssay = task2Essays.find(e => e.id === selectedTask2Id) || task2Essays[0];

  return `
    <div class="writing-page animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2>Luyện Kỹ Năng Viết</h2>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn ${activeWritingTab === 'task1' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleWritingTabChange('task1')">
            <i data-lucide="mail"></i> Task 1: Thư (${task1Letters.length})
          </button>
          <button class="btn ${activeWritingTab === 'task2' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleWritingTabChange('task2')">
            <i data-lucide="file-text"></i> Task 2: Bài Luận (${task2Essays.length})
          </button>
          <button class="btn ${activeWritingTab === 'criteria' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleWritingTabChange('criteria')">
            <i data-lucide="award"></i> Tiêu Chí Chấm
          </button>
        </div>
      </div>

      ${activeWritingTab === 'task1' ? renderTask1Section(currentLetter) : ''}
      ${activeWritingTab === 'task2' ? renderTask2Section(currentEssay) : ''}
      ${activeWritingTab === 'criteria' ? renderCriteriaSection() : ''}

      <!-- Floating Action Button for Writing Test -->
      <button id="btn-floating-writing-test" class="btn btn-primary" 
              style="position: fixed; bottom: 25px; right: 25px; z-index: 9998; box-shadow: 0 10px 25px rgba(37,99,235,0.4); border-radius: var(--radius-full); padding: 0.75rem 1.4rem; font-weight: 700; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem;"
              onclick="window.openWritingTestModal()">
        <i data-lucide="edit-3"></i>
        <span>Test</span>
      </button>
    </div>
  `;
}

function renderLetterStructureGuideSection(letter) {
  const guide = WritingStructureGuide.getLetterGuide(letter);

  return `
    <div class="card animate-fade-in" style="margin-bottom: 1.5rem; padding: 1.5rem 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
      
      <!-- Tone and Style Rules Box -->
      <div style="background: var(--bg-muted); padding: 1rem 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; border-left: 3px solid var(--primary);">
        <strong style="color: var(--primary); font-size: 0.95rem; display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.5rem;">
          <i data-lucide="info" style="width: 15px; height: 15px;"></i> Quy tắc văn phong: ${guide.toneRule.badge}
        </strong>
        <div class="grid-2" style="gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">
          ${guide.toneRule.rules.map(r => `<div>• ${r}</div>`).join('')}
        </div>
      </div>

      <!-- 4-Stage Structural Guide with Plug-and-play Sentences -->
      <h5 style="color: var(--text-primary); font-size: 1rem; margin: 0 0 1rem 0; font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="layers" style="width: 16px; height: 16px; color: var(--secondary);"></i>
        <span>Mẫu câu ăn điểm cho từng đoạn (Plug-and-play expressions):</span>
      </h5>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
        ${guide.sections.map((sec) => `
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem; flex-wrap: wrap; gap: 0.5rem;">
              <strong style="color: var(--primary); font-size: 0.95rem;">
                ${sec.step}: ${sec.title}
              </strong>
              <span class="badge badge-secondary" style="font-size: 0.75rem;">${sec.tip}</span>
            </div>
            
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin: 0 0 0.65rem 0; line-height: 1.5;">
              ${sec.description}
            </p>

            <div style="background: var(--bg-muted); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
              <div style="display: flex; flex-direction: column; gap: 0.45rem;">
                ${sec.sentences.map(st => `
                  <div style="font-size: 0.875rem;">
                    <span style="font-weight: 600; color: var(--text-primary); white-space: pre-line;">"${st.en}"</span>
                    <div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">➔ ${st.vn}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Scoring Checklist -->
      <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid var(--success); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
        <strong style="color: var(--success-text); font-size: 0.9rem; display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">
          <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i> Checklist 4 Tiêu Chí Chấm Điểm Task 1:
        </strong>
        <div class="grid-2" style="gap: 0.4rem; font-size: 0.85rem; color: var(--text-primary);">
          ${guide.scoringFormula.map(sf => `<div>✔ ${sf}</div>`).join('')}
        </div>
      </div>

    </div>
  `;
}

function renderEssayStructureGuideSection(essay) {
  const guide = WritingStructureGuide.getEssayGuide(essay);

  return `
    <div class="card animate-fade-in" style="margin-bottom: 1.5rem; padding: 1.5rem 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
      
      <!-- 4-Stage Structural Guide with Plug-and-play Sentences -->
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
        ${guide.structureSteps.map((step) => `
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem; flex-wrap: wrap; gap: 0.5rem;">
              <strong style="color: var(--primary); font-size: 0.95rem;">
                ${step.part}
              </strong>
              <span class="badge badge-secondary" style="font-size: 0.75rem; font-weight: 600;">
                Khuyến nghị: ${step.targetLines}
              </span>
            </div>

            <p style="font-size: 0.875rem; color: var(--text-secondary); margin: 0 0 0.65rem 0; line-height: 1.5;">
              <strong>Mục tiêu:</strong> ${step.purpose}
            </p>

            <!-- Formulas & Frames -->
            <div style="background: var(--bg-muted); padding: 0.75rem 1rem; border-radius: var(--radius-sm); margin-bottom: 0.6rem;">
              <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary); margin-bottom: 0.4rem; text-transform: uppercase;">
                ✍ Công thức mẫu câu ăn điểm:
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                ${step.formulas.map(f => `
                  <div>
                    <span style="font-weight: 700; color: var(--text-primary); font-size: 0.825rem;">${f.name}</span>
                    <div style="font-weight: 600; color: var(--primary); font-size: 0.9rem; margin: 0.1rem 0;">
                      "${f.frame}"
                    </div>
                    <div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
                      ➔ ${f.vn}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.35rem;">
              <i data-lucide="sparkles" style="width: 13px; height: 13px; color: var(--warning);"></i>
              <span><strong>Mẹo giám khảo:</strong> ${step.scoringTip}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Scoring Checklist for Task 2 -->
      <div style="background: rgba(37, 99, 235, 0.06); border: 1px solid var(--primary); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
        <strong style="color: var(--primary); font-size: 0.9rem; display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">
          <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i> Checklist 4 Tiêu Chí Chấm Bài Luận VSTEP (250+ từ):
        </strong>
        <div class="grid-2" style="gap: 0.4rem; font-size: 0.85rem; color: var(--text-primary);">
          ${guide.scoringChecklist.map(sc => `<div>✔ ${sc}</div>`).join('')}
        </div>
      </div>

    </div>
  `;
}

function renderTask1Section(letter) {
  const structure = letter.structure || {};
  const guide = WritingStructureGuide.getLetterGuide(letter);

  return `
    <div>
      <div class="tabs-header" style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
        ${task1Letters.map((l, idx) => `
          <button class="tab-btn ${l.id === selectedTask1Id ? 'active' : ''}" 
                  style="white-space: nowrap; font-size: 0.85rem;"
                  onclick="window.handleTask1Select('${l.id}')">
            ${idx + 1}. ${(l.title || '').substring(0, 26)}...
          </button>
        `).join('')}
      </div>

      <!-- Letter Header & Prompt Card (Gọn gàng, rõ ràng, không trùng lặp) -->
      <div class="card" style="margin-bottom: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--primary); padding: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <span class="badge badge-primary" style="font-weight: 700;">Task 1 • ${(letter.type || 'Letter').split(' - ')[0]}</span>
            <span class="badge badge-secondary" style="font-weight: 600;">~${letter.wordCount || 140} từ</span>
            <span class="badge" style="background: var(--bg-muted); color: var(--text-secondary); font-weight: 600;">${guide.toneRule.badge}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="window.openWritingTestModal('task1', '${letter.id}')" style="font-weight: 700; display: flex; align-items: center; gap: 0.35rem;">
            <i data-lucide="edit-3" style="width: 14px; height: 14px;"></i> Tập Viết Bài Này
          </button>
        </div>

        <div style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.6rem;">
          ${letter.title}
        </div>

        <div style="background: var(--bg-muted); padding: 1rem 1.25rem; border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
          <strong style="color: var(--primary); display: block; margin-bottom: 0.25rem;"><i data-lucide="mail" style="width: 14px; height: 14px; vertical-align: middle;"></i> Đề bài:</strong>
          <span>${letter.prompt}</span>
        </div>
      </div>

      <!-- Sub-Tab Navigation Bar -->
      <div class="tabs-header" style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; overflow-x: auto;">
        <button class="tab-btn ${activeTask1SubTab === 'model' ? 'active' : ''}" onclick="window.handleTask1SubTabChange('model')" style="font-weight: 700; font-size: 0.9rem; display: flex; align-items: center; gap: 0.4rem; white-space: nowrap;">
          <i data-lucide="file-text" style="width: 15px; height: 15px;"></i> Bài Mẫu & Dàn Ý
        </button>
        <button class="tab-btn ${activeTask1SubTab === 'guide' ? 'active' : ''}" onclick="window.handleTask1SubTabChange('guide')" style="font-weight: 700; font-size: 0.9rem; display: flex; align-items: center; gap: 0.4rem; white-space: nowrap;">
          <i data-lucide="compass" style="width: 15px; height: 15px;"></i> Mẫu Câu & Văn Phong
        </button>
        <button class="tab-btn ${activeTask1SubTab === 'analysis' ? 'active' : ''}" onclick="window.handleTask1SubTabChange('analysis')" style="font-weight: 700; font-size: 0.9rem; display: flex; align-items: center; gap: 0.4rem; white-space: nowrap;">
          <i data-lucide="sparkles" style="width: 15px; height: 15px;"></i> Phân Tích Từng Câu (${(letter.lineByLineAnalysis || []).length})
        </button>
      </div>

      <!-- Sub-Tab Content -->
      ${activeTask1SubTab === 'model' ? `
        <!-- 2-Column: Authentic Letter Paper + 4-Stage Blueprint -->
        <div class="grid-2" style="gap: 1.5rem; align-items: flex-start;">
          
          <!-- Left: Formatted Letter Paper -->
          <div class="card" style="padding: 1.75rem; background: var(--bg-surface); border: 1px solid var(--border-color);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.25rem;">
              <h4 style="margin: 0; color: var(--primary); font-size: 1.1rem; display: flex; align-items: center; gap: 0.4rem;">
                <i data-lucide="mail-open" style="width: 16px; height: 16px;"></i> Bài Viết Thư Mẫu:
              </h4>
              <span style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">~${letter.wordCount || 140} từ</span>
            </div>

            <div class="letter-paper" style="line-height: 1.9; font-size: 0.98rem; color: var(--text-primary);">
              <p style="font-weight: 700; color: var(--primary); margin-bottom: 0.75rem;">${structure.greeting || ''}</p>
              <p style="margin-bottom: 1rem; text-indent: 1.25rem; background: rgba(59, 130, 246, 0.04); padding: 0.5rem 0.75rem; border-left: 3px solid var(--primary); border-radius: 4px;">
                ${structure.opening || ''}
              </p>
              <p style="margin-bottom: 1rem; text-indent: 1.25rem; background: rgba(16, 185, 129, 0.04); padding: 0.5rem 0.75rem; border-left: 3px solid var(--success); border-radius: 4px;">
                ${structure.bodyParagraph1 || ''}
              </p>
              <p style="margin-bottom: 1rem; text-indent: 1.25rem; background: rgba(245, 158, 11, 0.04); padding: 0.5rem 0.75rem; border-left: 3px solid var(--warning); border-radius: 4px;">
                ${structure.bodyParagraph2 || ''}
              </p>
              <p style="margin-bottom: 1rem; text-indent: 1.25rem; background: rgba(139, 92, 246, 0.04); padding: 0.5rem 0.75rem; border-left: 3px solid var(--secondary); border-radius: 4px;">
                ${structure.closing || ''}
              </p>
              <p style="font-weight: 700; color: var(--text-primary); margin-top: 1.25rem; white-space: pre-line;">${structure.signOff || ''}</p>
            </div>
          </div>

          <!-- Right: 4-Stage Letter Blueprint -->
          <div class="card" style="padding: 1.75rem;">
            <h4 style="margin: 0 0 1rem 0; color: var(--secondary); font-size: 1.1rem; display: flex; align-items: center; gap: 0.4rem;">
              <i data-lucide="layers" style="width: 16px; height: 16px;"></i> Dàn Ý 4 Phần Chuẩn B1:
            </h4>
            
            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              <div style="background: var(--bg-muted); padding: 0.9rem 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--primary);">
                <strong style="color: var(--primary); font-size: 0.9rem;">1. Chào & Mở Đầu (Salutation & Opening):</strong>
                <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0; color: var(--text-secondary); line-height: 1.5;">
                  Xác lập mối quan hệ và nêu rõ mục đích viết thư trong 1-2 câu đầu.
                </p>
              </div>

              <div style="background: var(--bg-muted); padding: 0.9rem 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--success);">
                <strong style="color: var(--success-text); font-size: 0.9rem;">2. Thân Bài 1 (Body Paragraph 1):</strong>
                <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0; color: var(--text-secondary); line-height: 1.5;">
                  Giải quyết yêu cầu thứ nhất của đề: cung cấp bối cảnh, chi tiết, thời gian.
                </p>
              </div>

              <div style="background: var(--bg-muted); padding: 0.9rem 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--warning-text);">
                <strong style="color: var(--warning-text); font-size: 0.9rem;">3. Thân Bài 2 (Body Paragraph 2):</strong>
                <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0; color: var(--text-secondary); line-height: 1.5;">
                  Đưa ra đề xuất, lời khuyên hoặc hướng dẫn chuẩn bị cho đối phương.
                </p>
              </div>

              <div style="background: var(--bg-muted); padding: 0.9rem 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--secondary);">
                <strong style="color: var(--secondary); font-size: 0.9rem;">4. Kết Luận & Ký Tên (Closing & Sign-off):</strong>
                <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0; color: var(--text-secondary); line-height: 1.5;">
                  Lời nhắn mong đợi phản hồi và lời chào kết hợp văn phong (Best wishes / Yours sincerely).
                </p>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      ${activeTask1SubTab === 'guide' ? renderLetterStructureGuideSection(letter) : ''}

      ${activeTask1SubTab === 'analysis' ? `
        <!-- Line-by-Line Grammatical Breakdown Table -->
        <div class="card animate-fade-in" style="padding: 1.75rem;">
          <h4 style="color: var(--primary); margin: 0 0 1.25rem 0; font-size: 1.15rem; display: flex; align-items: center; gap: 0.4rem;">
            <i data-lucide="check-circle" style="width: 18px; height: 18px;"></i> Phân Tích Cú Pháp & Điểm Ngữ Pháp Từng Câu:
          </h4>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${(letter.lineByLineAnalysis || []).map((item, idx) => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 3px solid var(--primary); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
                <div style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem; line-height: 1.5;">
                  <span style="font-family: var(--font-mono); color: var(--primary); font-size: 0.9rem;">[${idx + 1}]</span> "${item.sentence}"
                </div>
                <div style="background: var(--bg-muted); padding: 0.6rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--secondary); margin-bottom: 0.4rem;">
                  <strong>Điểm ngữ pháp:</strong> ${item.grammar}
                </div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); font-style: italic;">
                  <strong>Dịch nghĩa:</strong> ${item.vietnamese}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderTask2Section(essay) {
  const outline = essay.outline || {};

  return `
    <div>
      <div class="tabs-header" style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
        ${task2Essays.map((e, idx) => `
          <button class="tab-btn ${e.id === selectedTask2Id ? 'active' : ''}" 
                  style="white-space: nowrap; font-size: 0.85rem;"
                  onclick="window.handleTask2Select('${e.id}')">
            ${idx + 1}. ${(e.topicName || '').substring(0, 24)}...
          </button>
        `).join('')}
      </div>

      <!-- Essay Prompt Card -->
      <div class="card" style="margin-bottom: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--primary); padding: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <span class="badge badge-primary" style="font-weight: 700;">Task 2 • ${essay.essayType || 'Academic Essay'}</span>
            <span class="badge badge-secondary" style="font-weight: 600;">~${essay.wordCount || 260} từ</span>
            <span class="badge badge-success" style="font-weight: 600;">${essay.targetScore || 'Mục tiêu: B1/B2'}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="window.openWritingTestModal('task2', '${essay.id}')" style="font-weight: 700; display: flex; align-items: center; gap: 0.35rem;">
            <i data-lucide="edit-3" style="width: 14px; height: 14px;"></i> Tập Viết Luận
          </button>
        </div>

        <div style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.6rem;">
          Chủ đề: ${essay.topicName}
        </div>

        <div style="background: var(--bg-muted); padding: 1rem 1.25rem; border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
          <strong style="color: var(--primary); display: block; margin-bottom: 0.25rem;"><i data-lucide="file-text" style="width: 14px; height: 14px; vertical-align: middle;"></i> Đề bài:</strong>
          <span>${essay.prompt}</span>
        </div>
      </div>

      <!-- Sub-Tab Navigation Bar -->
      <div class="tabs-header" style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; overflow-x: auto;">
        <button class="tab-btn ${activeTask2SubTab === 'model' ? 'active' : ''}" onclick="window.handleTask2SubTabChange('model')" style="font-weight: 700; font-size: 0.9rem; display: flex; align-items: center; gap: 0.4rem; white-space: nowrap;">
          <i data-lucide="file-text" style="width: 15px; height: 15px;"></i> Bài Luận Mẫu & Dàn Ý
        </button>
        <button class="tab-btn ${activeTask2SubTab === 'guide' ? 'active' : ''}" onclick="window.handleTask2SubTabChange('guide')" style="font-weight: 700; font-size: 0.9rem; display: flex; align-items: center; gap: 0.4rem; white-space: nowrap;">
          <i data-lucide="compass" style="width: 15px; height: 15px;"></i> Cấu Trúc P.E.E.L & Mẫu Câu
        </button>
        <button class="tab-btn ${activeTask2SubTab === 'analysis' ? 'active' : ''}" onclick="window.handleTask2SubTabChange('analysis')" style="font-weight: 700; font-size: 0.9rem; display: flex; align-items: center; gap: 0.4rem; white-space: nowrap;">
          <i data-lucide="sparkles" style="width: 15px; height: 15px;"></i> Phân Tích Từng Câu (${(essay.lineByLineAnnotations || []).length})
        </button>
      </div>

      <!-- Sub-Tab Content -->
      ${activeTask2SubTab === 'model' ? `
        <div class="grid-2" style="gap: 1.5rem; align-items: flex-start; margin-bottom: 2rem;">
          <!-- Left: Full Essay Paper -->
          <div class="card" style="padding: 1.75rem; background: var(--bg-surface); border: 1px solid var(--border-color);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.25rem;">
              <h4 style="margin: 0; color: var(--primary); font-size: 1.1rem; display: flex; align-items: center; gap: 0.4rem;">
                <i data-lucide="file-text" style="width: 16px; height: 16px;"></i> Bài Luận Mẫu Chuẩn:
              </h4>
              <span style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">~${essay.wordCount || 260} từ</span>
            </div>

            <div class="essay-paper" style="font-size: 1rem; line-height: 2; color: var(--text-primary); white-space: pre-line; text-align: justify;">
              ${essay.fullEssay}
            </div>
          </div>

          <!-- Right: 4-Stage Outline Mind Flow -->
          <div class="card" style="padding: 1.75rem;">
            <h4 style="margin: 0 0 1rem 0; color: var(--secondary); font-size: 1.1rem; display: flex; align-items: center; gap: 0.4rem;">
              <i data-lucide="git-merge" style="width: 16px; height: 16px;"></i> Dàn Ý 4 Đoạn Học Thuật:
            </h4>

            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              <div style="background: var(--bg-muted); border-left: 3px solid var(--primary); border-radius: var(--radius-md); padding: 1rem;">
                <div style="font-weight: 700; color: var(--primary); font-size: 0.9rem; margin-bottom: 0.25rem;">1. Mở Bài (Introduction):</div>
                <div style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.5;">${outline.introduction || ''}</div>
              </div>
              <div style="background: var(--bg-muted); border-left: 3px solid var(--success); border-radius: var(--radius-md); padding: 1rem;">
                <div style="font-weight: 700; color: var(--success-text); font-size: 0.9rem; margin-bottom: 0.25rem;">2. Thân Bài 1 (Body 1):</div>
                <div style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.5;">${outline.bodyParagraph1 || ''}</div>
              </div>
              <div style="background: var(--bg-muted); border-left: 3px solid var(--warning-text); border-radius: var(--radius-md); padding: 1rem;">
                <div style="font-weight: 700; color: var(--warning-text); font-size: 0.9rem; margin-bottom: 0.25rem;">3. Thân Bài 2 (Body 2):</div>
                <div style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.5;">${outline.bodyParagraph2 || ''}</div>
              </div>
              <div style="background: var(--bg-muted); border-left: 3px solid var(--secondary); border-radius: var(--radius-md); padding: 1rem;">
                <div style="font-weight: 700; color: var(--secondary); font-size: 0.9rem; margin-bottom: 0.25rem;">4. Kết Bài (Conclusion):</div>
                <div style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.5;">${outline.conclusion || ''}</div>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      ${activeTask2SubTab === 'guide' ? renderEssayStructureGuideSection(essay) : ''}

      ${activeTask2SubTab === 'analysis' ? `
        <!-- Line-by-Line Syntactic Breakdown -->
        <div class="card animate-fade-in" style="padding: 1.75rem;">
          <h4 style="color: var(--secondary); margin: 0 0 1.25rem 0; font-size: 1.15rem; display: flex; align-items: center; gap: 0.4rem;">
            <i data-lucide="sparkles" style="width: 18px; height: 18px;"></i> Phân Tích Cú Pháp Câu & Kỹ Thuật Viết Luận Điểm:
          </h4>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${(essay.lineByLineAnnotations || []).map((item, idx) => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 3px solid var(--secondary); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
                <div style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem; line-height: 1.5;">
                  <span style="font-family: var(--font-mono); color: var(--secondary); font-size: 0.9rem;">[${idx + 1}]</span> "${item.sentence}"
                </div>
                <div style="background: var(--bg-muted); padding: 0.6rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--primary); margin-bottom: 0.4rem;">
                  <strong>Cấu trúc ngữ pháp & liên kết:</strong> ${item.grammarBreakdown}
                </div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); font-style: italic;">
                  <strong>Bản dịch tiếng Việt:</strong> ${item.vietnameseTranslation}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderCriteriaSection() {
  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--primary);">
        <h3 style="color: var(--primary); margin: 0 0 0.5rem 0;">4 Tiêu Chí Chấm Điểm Bài Thi Viết VSTEP B1</h3>
        <p style="margin: 0; color: var(--text-secondary);">Mỗi tiêu chí chiếm 25% tổng số điểm bài thi Viết (Task 1 chiếm 1/3, Task 2 chiếm 2/3 tổng điểm).</p>
      </div>

      <div class="grid-2" style="gap: 1.5rem;">
        <div class="card" style="border-top: 4px solid var(--primary);">
          <h4 style="color: var(--primary); margin-bottom: 0.75rem;">1. Task Fulfillment / Task Response (25%)</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7;">
            - Trả lời đầy đủ tất cả các yêu cầu và câu hỏi phụ trong đề bài.<br>
            - Đạt đủ số lượng từ quy định (Task 1 tối thiểu 120 từ, Task 2 tối thiểu 250 từ).<br>
            - Luận điểm rõ ràng, có dẫn chứng và phân tích thuyết phục.
          </p>
        </div>

        <div class="card" style="border-top: 4px solid var(--success);">
          <h4 style="color: var(--success-text); margin-bottom: 0.75rem;">2. Coherence & Cohesion (25%)</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7;">
            - Bố cục bài viết mạch lạc: Đủ Mở bài, Thân bài và Kết luận.<br>
            - Sử dụng từ nối (Linking words) chính xác, linh hoạt (Moreover, However, Therefore).<br>
            - Sử dụng đại từ thay thế (this, these, they, such) tránh lặp từ.
          </p>
        </div>

        <div class="card" style="border-top: 4px solid var(--warning-text);">
          <h4 style="color: var(--warning-text); margin-bottom: 0.75rem;">3. Lexical Resource (25%)</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7;">
            - Vốn từ vựng phong phú, đúng ngữ cảnh chủ đề VSTEP.<br>
            - Sử dụng các cụm từ cố định (Collocations) và cụm danh từ học thuật.<br>
            - Viết đúng chính tả và dạng từ (Word Form).
          </p>
        </div>

        <div class="card" style="border-top: 4px solid var(--secondary);">
          <h4 style="color: var(--secondary); margin-bottom: 0.75rem;">4. Grammatical Range & Accuracy (25%)</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7;">
            - Kết hợp đa dạng các mẫu câu: Câu đơn, câu ghép, câu phức, câu điều kiện.<br>
            - Sử dụng đúng thì động từ, hòa hợp chủ-vị và thể bị động.<br>
            - Hạn chế tối đa các lỗi sai ngữ pháp cơ bản.
          </p>
        </div>
      </div>
    </div>
  `;
}

// =========================================================================
// AI EVALUATOR ENGINE FOR WRITING
// =========================================================================
function evaluateWritingSubmission(text, taskType) {
  const words = text ? text.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;
  const targetWords = taskType === 'task1' ? 120 : 250;

  // 1. Task Response
  const lengthRatio = wordCount / targetWords;
  let taskResponseScore = 2.5;
  if (lengthRatio < 0.5) taskResponseScore = 1.0;
  else if (lengthRatio < 0.8) taskResponseScore = 1.75;
  else if (lengthRatio < 1.0) taskResponseScore = 2.25;
  else taskResponseScore = 2.5;

  // 2. Coherence & Cohesion
  const foundConnectors = B1_CONNECTORS_LIST.filter(c => new RegExp(`\\b${c}\\b`, 'i').test(text));
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
  let coherenceScore = 2.0;
  if (foundConnectors.length >= 4 && paragraphs.length >= (taskType === 'task1' ? 3 : 4)) {
    coherenceScore = 2.5;
  } else if (foundConnectors.length >= 2 && paragraphs.length >= 2) {
    coherenceScore = 2.0;
  } else {
    coherenceScore = 1.5;
  }

  // 3. Lexical Resource
  const uniqueWords = new Set(words.map(w => w.toLowerCase()));
  const lexicalDiversity = words.length > 0 ? (uniqueWords.size / words.length) : 0;
  let lexicalScore = 2.0;
  if (lexicalDiversity >= 0.55 && wordCount >= targetWords * 0.8) {
    lexicalScore = 2.5;
  } else if (lexicalDiversity >= 0.4) {
    lexicalScore = 2.0;
  } else {
    lexicalScore = 1.5;
  }

  // 4. Grammatical Range & Accuracy
  const complexMarkers = ['because', 'although', 'if', 'which', 'that', 'while', 'whereas', 'so that', 'in order to'];
  const foundComplex = complexMarkers.filter(m => new RegExp(`\\b${m}\\b`, 'i').test(text));
  let grammarScore = 2.0;
  if (foundComplex.length >= 3) {
    grammarScore = 2.5;
  } else if (foundComplex.length >= 1) {
    grammarScore = 2.0;
  } else {
    grammarScore = 1.5;
  }

  const rawTotal = taskResponseScore + coherenceScore + lexicalScore + grammarScore;
  const overallScore = Math.min(10.0, Math.round(rawTotal * 10) / 10);

  const strengths = [];
  const suggestions = [];

  if (wordCount >= targetWords) {
    strengths.push(`Độ dài đạt chuẩn xuất sắc (${wordCount}/${targetWords} từ).`);
  } else {
    suggestions.push(`Cần mở rộng thêm ý để đạt đủ dung lượng chuẩn (${wordCount}/${targetWords} từ).`);
  }

  if (foundConnectors.length >= 3) {
    strengths.push(`Sử dụng tốt các liên từ học thuật B1: ${foundConnectors.slice(0, 4).join(', ')}.`);
  } else {
    suggestions.push(`Nên bổ sung thêm các liên từ chỉ sự tương phản (However, Although) hoặc kết quả (Therefore, Consequently).`);
  }

  if (paragraphs.length >= (taskType === 'task1' ? 3 : 4)) {
    strengths.push(`Phân đoạn bài viết rõ ràng, mạch lạc (${paragraphs.length} đoạn).`);
  } else {
    suggestions.push(`Nên chia bài viết thành đủ các phần: Mở bài, các Thân bài luận điểm và Kết bài.`);
  }

  return {
    overallScore,
    wordCount,
    targetWords,
    paragraphsCount: paragraphs.length,
    foundConnectors,
    taskResponseScore,
    coherenceScore,
    lexicalScore,
    grammarScore,
    strengths,
    suggestions
  };
}

// =========================================================================
// FLOATING MODAL DOM RENDERER
// =========================================================================
function updateWritingModalCounters(text) {
  const words = text ? text.split(/\s+/).filter(Boolean) : [];
  const count = words.length;
  const target = activeModalTaskType === 'task1' ? 120 : 250;
  const percent = Math.min(100, Math.round((count / target) * 100));

  const countEl = document.getElementById('writing-modal-word-count');
  const barEl = document.getElementById('writing-modal-progress-bar');
  const connEl = document.getElementById('writing-modal-connectors-count');

  if (countEl) countEl.innerText = `${count} / ${target} từ (${percent}%)`;
  if (barEl) {
    barEl.style.width = `${percent}%`;
    barEl.style.background = count >= target ? 'var(--success, #10b981)' : 'linear-gradient(90deg, var(--primary), var(--secondary))';
  }

  const found = B1_CONNECTORS_LIST.filter(c => new RegExp(`\\b${c}\\b`, 'i').test(text));
  if (connEl) connEl.innerText = `${found.length} liên từ B1`;
}

function renderOrUpdateWritingModalDOM() {
  if (typeof document === 'undefined') return;

  // 1. Modal Overlay Container
  let modal = document.getElementById('writing-floating-test-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'writing-floating-test-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(15, 23, 42, 0.75)';
    modal.style.backdropFilter = 'blur(6px)';
    modal.style.zIndex = '99999';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.padding = '1rem';
    document.body.appendChild(modal);
  }

  // 2. Dock Pill Container
  let dock = document.getElementById('writing-test-dock-pill');
  if (!dock) {
    dock = document.createElement('div');
    dock.id = 'writing-test-dock-pill';
    dock.style.position = 'fixed';
    dock.style.bottom = '25px';
    dock.style.right = '25px';
    dock.style.zIndex = '99999';
    dock.style.display = 'none';
    document.body.appendChild(dock);
  }

  if (!isWritingModalOpen) {
    modal.style.display = 'none';
    dock.style.display = 'none';
    return;
  }

  const draftKey = `${activeModalTaskType}_${activeModalTaskId}`;
  const currentText = writingModalDrafts[draftKey] || '';
  const currentWords = currentText ? currentText.split(/\s+/).filter(Boolean).length : 0;
  const targetWords = activeModalTaskType === 'task1' ? 120 : 250;

  if (isWritingModalMinimized) {
    modal.style.display = 'none';
    dock.style.display = 'block';
    dock.innerHTML = `
      <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; padding: 0.75rem 1.4rem; border-radius: var(--radius-full); box-shadow: 0 10px 25px rgba(37,99,235,0.4); cursor: pointer; display: flex; align-items: center; gap: 0.6rem; font-weight: 700; font-size: 0.95rem;"
           onclick="window.restoreWritingTestModal()">
        <i data-lucide="edit-3"></i>
        <span>Test Viết: ${activeModalTaskType === 'task1' ? 'Task 1' : 'Task 2'} (${currentWords}/${targetWords} từ) • Mở lại ➔</span>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Active modal view
  dock.style.display = 'none';
  modal.style.display = 'flex';

  const currentTaskData = activeModalTaskType === 'task1'
    ? (task1Letters.find(l => l.id === activeModalTaskId) || task1Letters[0])
    : (task2Essays.find(e => e.id === activeModalTaskId) || task2Essays[0]);

  const taskTitle = activeModalTaskType === 'task1' ? currentTaskData.title : currentTaskData.topicName;
  const taskPrompt = currentTaskData.prompt || '';

  modal.innerHTML = `
    <div class="card" style="width: 100%; max-width: 860px; max-height: 92vh; display: flex; flex-direction: column; overflow: hidden; background: var(--bg-card); border-radius: var(--radius-lg); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); border: 1px solid var(--border-color); border-top: 5px solid var(--primary); padding: 0;">
      
      <!-- Modal Header -->
      <div style="padding: 1.1rem 1.5rem; background: var(--bg-muted); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div style="display: flex; gap: 0.35rem; background: var(--bg-surface); padding: 0.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <button class="btn btn-sm ${activeModalTaskType === 'task1' ? 'btn-primary' : 'btn-secondary'}" 
                    style="padding: 0.35rem 0.85rem; font-size: 0.8rem;" 
                    onclick="window.switchWritingModalTaskType('task1')">
              Task 1 (Thư)
            </button>
            <button class="btn btn-sm ${activeModalTaskType === 'task2' ? 'btn-primary' : 'btn-secondary'}" 
                    style="padding: 0.35rem 0.85rem; font-size: 0.8rem;" 
                    onclick="window.switchWritingModalTaskType('task2')">
              Task 2 (Luận)
            </button>
          </div>

          <select class="input" style="padding: 0.4rem 0.75rem; font-size: 0.85rem; max-width: 240px;" onchange="window.switchWritingModalTaskId(this.value)">
            ${(activeModalTaskType === 'task1' ? task1Letters : task2Essays).map((item, idx) => `
              <option value="${item.id}" ${item.id === activeModalTaskId ? 'selected' : ''}>
                ${idx + 1}. ${(item.title || item.topicName || '').substring(0, 30)}...
              </option>
            `).join('')}
          </select>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button class="btn btn-secondary btn-sm" title="Ẩn xuống nền để tra cứu bài mẫu" onclick="window.minimizeWritingTestModal()" style="display: flex; align-items: center; gap: 0.35rem; font-size: 0.825rem;">
            <i data-lucide="minimize-2"></i>
            <span>Ẩn Xuống Nền</span>
          </button>
          <button class="btn btn-secondary btn-sm btn-icon" title="Đóng bài test" onclick="window.closeWritingTestModal()">
            <i data-lucide="x"></i>
          </button>
        </div>
      </div>

      <!-- Scrollable Body -->
      <div style="padding: 1.5rem; overflow-y: auto; flex: 1;">
        
        <!-- Prompt Box -->
        <div class="card" style="background: var(--bg-surface); border-left: 4px solid var(--primary); padding: 1rem 1.25rem; margin-bottom: 1.25rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
            <strong style="color: var(--primary); font-size: 0.95rem;">
              <i data-lucide="file-text" style="width: 15px; height: 15px; vertical-align: middle;"></i> Đề Bài (${activeModalTaskType === 'task1' ? 'Task 1: 120 từ' : 'Task 2: 250 từ'}):
            </strong>
            <span class="badge badge-secondary" style="font-size: 0.75rem;">${taskTitle}</span>
          </div>
          <div style="font-size: 0.9rem; color: var(--text-primary); line-height: 1.6;">
            ${taskPrompt}
          </div>
        </div>

        <!-- Realtime Word Counter Progress Bar -->
        <div style="margin-bottom: 0.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem; font-size: 0.85rem; color: var(--text-secondary);">
            <div>
              Dung lượng: <strong id="writing-modal-word-count" style="color: ${currentWords >= targetWords ? 'var(--success)' : 'var(--primary)'}; font-size: 0.95rem;">${currentWords} / ${targetWords} từ</strong>
            </div>
            <div id="writing-modal-connectors-count" style="color: var(--secondary); font-weight: 600;">
              0 liên từ B1
            </div>
          </div>
          <div style="height: 6px; background: var(--bg-muted); border-radius: var(--radius-full); overflow: hidden;">
            <div id="writing-modal-progress-bar" style="height: 100%; width: ${Math.min(100, Math.round((currentWords / targetWords) * 100))}%; background: ${currentWords >= targetWords ? 'var(--success)' : 'linear-gradient(90deg, var(--primary), var(--secondary))'}; transition: width 0.3s ease;"></div>
          </div>
        </div>

        <!-- Editor Textarea -->
        <textarea id="writing-modal-editor" class="search-input" rows="9" 
                  placeholder="${activeModalTaskType === 'task1' ? 'Bắt đầu viết thư của bạn tại đây (ví dụ: Dear Sir/Madam, I am writing to...)...' : 'Bắt đầu viết bài luận của bạn tại đây (ví dụ: In recent years, it is widely acknowledged that...)...'}"
                  oninput="window.onWritingModalInput()"
                  style="width: 100%; padding: 1rem; font-family: inherit; font-size: 0.95rem; line-height: 1.65; border-radius: var(--radius-md); resize: vertical; margin-bottom: 1rem;">${currentText}</textarea>

        <!-- AI Evaluation Result Box -->
        ${modalEvaluationResult ? `
          <div class="card animate-fade-in" style="background: var(--bg-surface); border: 2px solid var(--primary); border-radius: var(--radius-md); padding: 1.5rem; margin-top: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
              <div>
                <span class="badge badge-primary" style="font-size: 0.75rem;">Kết Quả Đánh Giá AI Chuyên Sâu</span>
                <h4 style="margin: 0.25rem 0 0 0; font-size: 1.35rem; color: var(--text-primary);">
                  Điểm Dự Kiến: <span style="color: var(--primary); font-weight: 800;">${modalEvaluationResult.overallScore}/10.0</span> 
                  <span style="font-size: 0.9rem; font-weight: 500; color: var(--text-muted);">(${modalEvaluationResult.overallScore >= 7.0 ? 'Đạt Chuẩn B1/B2 VSTEP' : 'Cần Cải Thiện Thêm'})</span>
                </h4>
              </div>
              <span class="badge badge-success" style="font-weight: 700; font-size: 0.85rem;">+8 Điểm Viết</span>
            </div>

            <!-- 4 Criteria Breakdown Grid -->
            <div class="grid-4" style="gap: 0.75rem; margin-bottom: 1.25rem;">
              <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-sm); text-align: center;">
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">1. Task Response</div>
                <div style="font-weight: 700; color: var(--primary); font-size: 1.1rem;">${modalEvaluationResult.taskResponseScore}/2.5</div>
              </div>
              <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-sm); text-align: center;">
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">2. Cohesion</div>
                <div style="font-weight: 700; color: var(--secondary); font-size: 1.1rem;">${modalEvaluationResult.coherenceScore}/2.5</div>
              </div>
              <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-sm); text-align: center;">
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">3. Lexical</div>
                <div style="font-weight: 700; color: var(--warning-text); font-size: 1.1rem;">${modalEvaluationResult.lexicalScore}/2.5</div>
              </div>
              <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-sm); text-align: center;">
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">4. Grammar</div>
                <div style="font-weight: 700; color: var(--success); font-size: 1.1rem;">${modalEvaluationResult.grammarScore}/2.5</div>
              </div>
            </div>

            <!-- Strengths & Suggestions -->
            <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.9rem;">
              <div style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid var(--success); padding: 0.85rem 1rem; border-radius: var(--radius-sm);">
                <strong style="color: var(--success-text); display: block; margin-bottom: 0.25rem;">✅ Điểm Mạnh Đã Đạt Được:</strong>
                <ul style="margin: 0; padding-left: 1.25rem; color: var(--text-primary); line-height: 1.6;">
                  ${modalEvaluationResult.strengths.map(s => `<li>${s}</li>`).join('')}
                </ul>
              </div>

              ${modalEvaluationResult.suggestions.length > 0 ? `
                <div style="background: rgba(239, 68, 68, 0.08); border-left: 4px solid var(--danger); padding: 0.85rem 1rem; border-radius: var(--radius-sm);">
                  <strong style="color: var(--danger-text); display: block; margin-bottom: 0.25rem;">⚠️ Gợi Ý Nâng Cao Điểm Số:</strong>
                  <ul style="margin: 0; padding-left: 1.25rem; color: var(--text-primary); line-height: 1.6;">
                    ${modalEvaluationResult.suggestions.map(s => `<li>${s}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Modal Footer -->
      <div style="padding: 1rem 1.5rem; background: var(--bg-surface); border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <button class="btn btn-secondary btn-sm" onclick="window.clearWritingDraftModal()">
          <i data-lucide="rotate-ccw"></i> Làm Lại
        </button>

        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-secondary btn-sm" onclick="window.minimizeWritingTestModal()">
            Ẩn Xuống Nền
          </button>
          <button class="btn btn-primary" onclick="window.submitWritingDraftModal()" style="font-weight: 700; padding: 0.65rem 1.5rem; display: flex; align-items: center; gap: 0.4rem; box-shadow: var(--shadow-md);">
            <i data-lucide="send"></i>
            <span>Chấm Điểm & Đánh Giá AI</span>
          </button>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
  updateWritingModalCounters(currentText);
}
