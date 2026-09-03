import { grammarTopics } from '../../data/grammar/index.js';
import { GRAMMAR_QUIZZES } from '../../data/grammar/grammarQuizzes.js';
import { AnalyticsStore } from '../modules/analytics/analyticsStore.js';

// State lưu trữ kết quả trắc nghiệm và trạng thái cửa sổ làm bài
let grammarQuizState = {}; // { [questionId]: { selectedIndex, isCorrect } }
let activeQuizTopicId = null;
let activeQuizQuestionIndex = 0;
let isQuizModalOpen = false;
let isQuizModalMinimized = false;

export function renderGrammarView(selectedTopicId = null) {
  const currentTopic = selectedTopicId 
    ? grammarTopics.find(t => t.id === selectedTopicId) || grammarTopics[0]
    : grammarTopics[0];

  window.openGrammarQuizModal = (topicId) => {
    activeQuizTopicId = topicId || currentTopic.id;
    isQuizModalOpen = true;
    isQuizModalMinimized = false;
    activeQuizQuestionIndex = 0;
    renderOrUpdateQuizModalDOM();
  };

  window.minimizeGrammarQuizModal = () => {
    isQuizModalMinimized = true;
    renderOrUpdateQuizModalDOM();
    if (window.showToast) {
      window.showToast('Đã thu nhỏ bài test xuống nền. Bạn có thể tra cứu lý thuyết và mở lại bất cứ lúc nào!', 'info');
    }
  };

  window.restoreGrammarQuizModal = () => {
    isQuizModalMinimized = false;
    renderOrUpdateQuizModalDOM();
  };

  window.closeGrammarQuizModal = () => {
    isQuizModalOpen = false;
    isQuizModalMinimized = false;
    const modal = document.getElementById('grammar-floating-quiz-modal');
    if (modal) modal.style.display = 'none';
    const dock = document.getElementById('grammar-quiz-dock-pill');
    if (dock) dock.style.display = 'none';
  };

  window.navigateQuizQuestion = (index) => {
    activeQuizQuestionIndex = index;
    renderOrUpdateQuizModalDOM();
  };

  window.handleGrammarQuizAnswer = (topicId, questionId, optionIndex) => {
    const questions = GRAMMAR_QUIZZES[topicId] || [];
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const isCorrect = optionIndex === question.correct;
    grammarQuizState[questionId] = {
      selectedIndex: optionIndex,
      isCorrect: isCorrect
    };

    const answeredList = questions.filter(q => grammarQuizState[q.id] !== undefined);
    if (answeredList.length === questions.length) {
      const correctCount = questions.filter(q => grammarQuizState[q.id]?.isCorrect).length;
      const percent = Math.round((correctCount / questions.length) * 100);
      AnalyticsStore.recordSession('grammar', percent, { source: 'grammar_quiz', topicId, correctCount, total: questions.length });
      if (window.showToast) {
        window.showToast(`🎉 Hoàn thành trắc nghiệm: ${correctCount}/${questions.length} (${percent}%)!`, 'success');
      }
    } else {
      if (window.showToast) {
        window.showToast(isCorrect ? '🎉 Chính xác!' : '⚠️ Chưa chính xác. Xem giải thích bên dưới.', isCorrect ? 'success' : 'warning');
      }
    }

    // In-place update without reloading or resetting scroll position!
    renderOrUpdateQuizModalDOM();
  };

  window.resetGrammarQuiz = (topicId) => {
    const questions = GRAMMAR_QUIZZES[topicId] || [];
    questions.forEach(q => {
      delete grammarQuizState[q.id];
    });
    activeQuizQuestionIndex = 0;
    if (window.showToast) {
      window.showToast('Đã làm mới lại bài kiểm tra!', 'info');
    }
    renderOrUpdateQuizModalDOM();
  };

  return `
    <div class="grammar-page animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2>Ngữ Pháp</h2>
        </div>
      </div>

      <!-- Module Selector Pills -->
      <div class="tabs-header" style="overflow-x: auto; padding-bottom: 0.5rem; margin-bottom: 1.75rem;">
        ${grammarTopics.map((topic, idx) => `
          <button class="tab-btn ${topic.id === currentTopic.id ? 'active' : ''}" 
                  style="white-space: nowrap;"
                  onclick="window.router.navigate('grammar', '${topic.id}')">
            ${idx + 1}. ${topic.title.split('(')[0].trim()}
          </button>
        `).join('')}
      </div>

      <!-- Main Educational Content Area -->
      <div class="grammar-body-content">
        ${renderSpecificGrammarModule(currentTopic)}
      </div>

      <!-- Floating Action Button for Test Launch -->
      <button id="btn-floating-grammar-test" class="btn btn-primary" 
              style="position: fixed; bottom: 25px; right: 25px; z-index: 9998; box-shadow: 0 10px 25px rgba(37,99,235,0.4); border-radius: var(--radius-full); padding: 0.75rem 1.4rem; font-weight: 700; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem;"
              onclick="window.openGrammarQuizModal('${currentTopic.id}')">
        <i data-lucide="edit-3"></i>
        <span>Test</span>
      </button>
    </div>
  `;
}

function renderSpecificGrammarModule(topic) {
  let html = '';

  // 1. Module Sentence Structures
  if (topic.id === 'sentence-structures' && topic.subtopics) {
    topic.subtopics.forEach(sub => {
      html += `
        <div class="card" style="margin-bottom: 2rem;">
          <h3 style="color: var(--primary); margin-bottom: 1.25rem; font-size: 1.35rem;">${sub.title}</h3>
          
          ${sub.items ? `
            <div class="grid-2" style="gap: 1.5rem;">
              ${sub.items.map(item => `
                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                    <h4 style="margin: 0; color: var(--primary);">${item.name || item.pattern || item.type}</h4>
                  </div>
                  
                  ${item.role ? `<p style="font-size: 0.925rem; margin-bottom: 0.5rem;"><strong>Bản chất & Vai trò:</strong> ${item.role}</p>` : ''}
                  ${item.meaning ? `<p style="font-size: 0.925rem; margin-bottom: 0.5rem;"><strong>Ý nghĩa:</strong> ${item.meaning}</p>` : ''}
                  ${item.definition ? `<p style="font-size: 0.925rem; margin-bottom: 0.5rem;"><strong>Định nghĩa:</strong> ${item.definition}</p>` : ''}
                  
                  ${item.position ? `<p style="font-size: 0.925rem; margin-bottom: 0.5rem;"><strong>Vị trí trong câu:</strong> ${item.position}</p>` : ''}
                  ${item.verbs ? `<p style="font-size: 0.925rem; margin-bottom: 0.5rem;"><strong>Nhóm động từ tiêu biểu:</strong> ${item.verbs}</p>` : ''}
                  ${item.connectors ? `<p style="font-size: 0.925rem; margin-bottom: 0.5rem;"><strong>Từ nối:</strong> ${item.connectors}</p>` : ''}
                  ${item.subordinators ? `<p style="font-size: 0.925rem; margin-bottom: 0.5rem;"><strong>Liên từ phụ thuộc:</strong> ${item.subordinators}</p>` : ''}
                  
                  ${item.formula || item.structure ? `
                    <div style="background: var(--bg-muted); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.875rem; font-family: var(--font-mono); font-weight: 700; color: var(--primary); margin-bottom: 0.75rem; white-space: pre-line;">
                      ${item.formula || item.structure}
                    </div>
                  ` : ''}

                  ${item.recognition ? `
                    <div style="background: var(--bg-muted); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.875rem; margin-bottom: 0.75rem;">
                      <strong>Dấu hiệu nhận diện:</strong> ${item.recognition}
                    </div>
                  ` : ''}
                  
                  ${item.examples ? `
                    <div style="margin-bottom: 0.75rem;">
                      <strong style="font-size: 0.875rem; color: var(--text-primary);">Ví dụ phân tích:</strong>
                      ${item.examples.map(ex => `
                        <div style="font-size: 0.875rem; margin-top: 0.25rem; padding-left: 0.5rem; border-left: 2px solid var(--primary);">
                          <div style="font-weight: 600; color: var(--text-primary);">${ex.en}</div>
                          <div style="color: var(--text-secondary); font-style: italic;">${ex.vn}</div>
                          ${ex.note ? `<div style="color: var(--secondary); font-size: 0.8rem;">➔ ${ex.note}</div>` : ''}
                          ${ex.analysis ? `<div style="color: var(--primary); font-size: 0.8rem;">➔ ${ex.analysis}</div>` : ''}
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}

                  ${item.commonMistakes ? `
                    <div style="background: var(--danger-light); color: var(--danger-text); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.825rem;">
                      <strong>Lỗi sai phổ biến:</strong>
                      <ul style="padding-left: 1rem; margin: 0.25rem 0 0 0;">
                        ${(Array.isArray(item.commonMistakes) ? item.commonMistakes : [item.commonMistakes]).map(m => `<li>${m}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${sub.steps ? `
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${sub.steps.map(step => `
                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--primary); border-radius: var(--radius-md); padding: 1.25rem;">
                  <h4 style="margin: 0 0 0.5rem 0; color: var(--primary);">${step.step}</h4>
                  <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-sm); font-size: 0.95rem; margin-bottom: 0.5rem;">
                    <strong>Ví dụ câu:</strong> <em>"${step.example}"</em>
                  </div>
                  <div style="color: var(--secondary); font-size: 0.875rem;">
                    <strong>Phân tích nhận xét:</strong> ${step.critique}
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    });
  }

  // 2. Module 12 Tenses
  else if (topic.id === 'tenses' && topic.groups) {
    topic.groups.forEach(grp => {
      html += `
        <div class="card" style="margin-bottom: 2rem;">
          <h3 style="color: var(--primary); margin-bottom: 1.25rem; font-size: 1.35rem;">${grp.groupName}</h3>
          
          <div style="display: flex; flex-direction: column; gap: 1.75rem;">
            ${grp.items.map(t => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                  <h4 style="font-size: 1.25rem; color: var(--text-primary); margin: 0;">${t.name}</h4>
                  <span class="badge badge-primary">Thì Trọng Tâm</span>
                </div>
                
                <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem;">
                  <strong>Bản chất:</strong> ${t.concept}
                </p>

                <!-- Formulas Matrix -->
                <div class="grid-3" style="gap: 1rem; margin-bottom: 1rem;">
                  <div style="background: var(--bg-muted); padding: 0.85rem; border-radius: var(--radius-md);">
                    <span style="font-size: 0.75rem; font-weight: 700; color: var(--success-text); text-transform: uppercase;">(+) Khẳng định</span>
                    <div style="font-family: var(--font-mono); font-size: 0.875rem; font-weight: 600; color: var(--text-primary); margin-top: 0.25rem;">${t.formula.affirmative}</div>
                  </div>
                  <div style="background: var(--bg-muted); padding: 0.85rem; border-radius: var(--radius-md);">
                    <span style="font-size: 0.75rem; font-weight: 700; color: var(--danger-text); text-transform: uppercase;">(-) Phủ định</span>
                    <div style="font-family: var(--font-mono); font-size: 0.875rem; font-weight: 600; color: var(--text-primary); margin-top: 0.25rem;">${t.formula.negative}</div>
                  </div>
                  <div style="background: var(--bg-muted); padding: 0.85rem; border-radius: var(--radius-md);">
                    <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">(?) Nghi vấn</span>
                    <div style="font-family: var(--font-mono); font-size: 0.875rem; font-weight: 600; color: var(--text-primary); margin-top: 0.25rem;">${t.formula.interrogative}</div>
                  </div>
                </div>

                <!-- Usages and Signals -->
                <div class="grid-2" style="margin-bottom: 1rem;">
                  <div style="background: var(--bg-accent); padding: 1rem; border-radius: var(--radius-md);">
                    <h5 style="margin-bottom: 0.5rem; color: var(--primary);">Các trường hợp sử dụng chính:</h5>
                    <ul style="padding-left: 1.25rem; font-size: 0.875rem; color: var(--text-primary);">
                      ${t.usages.map(u => `<li><strong>${u.title}:</strong> <em>${u.example}</em></li>`).join('')}
                    </ul>
                  </div>
                  <div style="background: var(--bg-muted); padding: 1rem; border-radius: var(--radius-md);">
                    <h5 style="margin-bottom: 0.5rem; color: var(--secondary);">Dấu hiệu nhận biết (Signals):</h5>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
                      ${(Array.isArray(t.signals) ? t.signals : [t.signals]).map(sig => `<span class="badge badge-secondary">${sig}</span>`).join('')}
                    </div>
                  </div>
                </div>

                <!-- Examples & Pitfalls -->
                <div style="margin-top: 1rem;">
                  <h5 style="margin-bottom: 0.5rem;">Ví dụ chuẩn trong bài thi VSTEP B1:</h5>
                  ${t.examples.map(ex => `
                    <div style="font-size: 0.9rem; padding: 0.5rem 0.75rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); margin-bottom: 0.35rem;">
                      <div style="font-weight: 600; color: var(--text-primary);">${ex.en}</div>
                      <div style="color: var(--text-secondary); font-style: italic;">${ex.vn}</div>
                    </div>
                  `).join('')}
                </div>

                ${t.commonMistakes ? `
                  <div style="margin-top: 0.75rem; background: var(--warning-light); color: var(--warning-text); padding: 0.75rem 1rem; border-radius: var(--radius-md); font-size: 0.85rem;">
                    <strong>Bẫy đề thi & Lỗi sai kinh điển:</strong>
                    <ul style="padding-left: 1.25rem; margin-top: 0.25rem;">
                      ${(Array.isArray(t.commonMistakes) ? t.commonMistakes : [t.commonMistakes]).map(m => `<li>${m}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });
  }

  // 3. Module Parts of Speech
  else if (topic.id === 'parts-of-speech' && topic.categories) {
    topic.categories.forEach(cat => {
      html += `
        <div class="card" style="margin-bottom: 2rem;">
          <h3 style="color: var(--primary); margin-bottom: 1.25rem; font-size: 1.35rem;">${cat.name}</h3>
          
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${cat.subsections ? cat.subsections.map(sub => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
                <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">${sub.title}</h4>
                ${sub.explanation ? `<p style="font-size: 0.9rem; margin-bottom: 0.75rem;">${sub.explanation}</p>` : ''}
                ${sub.formula ? `<div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-sm); font-size: 0.9rem; font-weight: 700; color: var(--primary); margin-bottom: 0.75rem;"><code>${sub.formula}</code></div>` : ''}
                
                ${sub.table ? `
                  <div style="overflow-x: auto; margin-bottom: 0.75rem;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;">
                      <thead>
                        <tr style="background: var(--bg-muted); border-bottom: 2px solid var(--border-color); text-align: left;">
                          ${Object.keys(sub.table[0]).map(k => `<th style="padding: 0.6rem 0.8rem; text-transform: capitalize;">${k}</th>`).join('')}
                        </tr>
                      </thead>
                      <tbody>
                        ${sub.table.map(row => `
                          <tr style="border-bottom: 1px solid var(--border-color);">
                            ${Object.values(row).map(v => `<td style="padding: 0.6rem 0.8rem;">${v}</td>`).join('')}
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                ` : ''}

                ${sub.rules ? `<div style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">${Array.isArray(sub.rules) ? `<ul style="padding-left: 1.25rem;">${sub.rules.map(r => `<li>${r}</li>`).join('')}</ul>` : sub.rules}</div>` : ''}

                ${sub.examples ? `
                  <div style="margin-top: 0.75rem;">
                    ${sub.examples.map(ex => `
                      <div style="font-size: 0.875rem; padding: 0.4rem 0.6rem; background: var(--bg-accent); border-radius: var(--radius-sm); margin-bottom: 0.25rem;">
                        <strong>${ex.en}</strong> ➔ <em>${ex.vn}</em>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}

                ${sub.list ? `
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.5rem;">
                    ${Array.isArray(sub.list) ? sub.list.map(item => `<span class="badge badge-muted">${item}</span>`).join('') : `<p style="font-size: 0.875rem;">${sub.list}</p>`}
                  </div>
                ` : ''}
              </div>
            `).join('') : ''}
          </div>
        </div>
      `;
    });
  }

  // 4. Module Verb Patterns
  else if (topic.id === 'verb-patterns' && topic.patterns) {
    topic.patterns.forEach(pat => {
      html += `
        <div class="card" style="margin-bottom: 2rem;">
          <h3 style="color: var(--primary); margin-bottom: 0.5rem; font-size: 1.3rem;">${pat.patternName}</h3>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.25rem;">${pat.explanation}</p>

          ${pat.verbList ? `
            <div class="grid-2" style="gap: 1rem;">
              ${pat.verbList.map(v => `
                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                    <strong style="color: var(--primary); font-size: 1.05rem;">${v.verb}</strong>
                    <span style="font-size: 0.85rem; color: var(--text-muted);">${v.meaning}</span>
                  </div>
                  <div style="font-size: 0.85rem; color: var(--text-secondary); font-style: italic; background: var(--bg-muted); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm);">
                    Ex: ${v.example}
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${pat.specialPhrases ? `
            <div class="grid-2" style="gap: 1rem;">
              ${pat.specialPhrases.map(sp => `
                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
                  <div style="font-weight: 700; color: var(--secondary); margin-bottom: 0.25rem;">${sp.phrase}</div>
                  <div style="font-size: 0.875rem; color: var(--text-primary); margin-bottom: 0.35rem;">Nghĩa: ${sp.meaning}</div>
                  <div style="font-size: 0.85rem; color: var(--text-secondary); font-style: italic;">Ex: ${sp.example}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${pat.pairs ? `
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              ${pat.pairs.map(p => `
                <div style="background: var(--bg-surface); border: 2px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
                  <h4 style="color: var(--primary); font-size: 1.15rem; margin-bottom: 0.75rem;">Động từ: ${p.verb}</h4>
                  <div class="grid-2">
                    <div style="background: var(--bg-muted); padding: 1rem; border-radius: var(--radius-md); border-top: 3px solid var(--primary);">
                      <div style="font-weight: 700; color: var(--primary); margin-bottom: 0.25rem;">${p.toV.form}</div>
                      <p style="font-size: 0.875rem; margin-bottom: 0.5rem;">${p.toV.meaning}</p>
                      <div style="font-size: 0.85rem; font-style: italic;">Ex: ${p.toV.example}</div>
                    </div>
                    <div style="background: var(--bg-muted); padding: 1rem; border-radius: var(--radius-md); border-top: 3px solid var(--secondary);">
                      <div style="font-weight: 700; color: var(--secondary); margin-bottom: 0.25rem;">${p.vIng.form}</div>
                      <p style="font-size: 0.875rem; margin-bottom: 0.5rem;">${p.vIng.meaning}</p>
                      <div style="font-size: 0.85rem; font-style: italic;">Ex: ${p.vIng.example}</div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    });
  }

  // 5. Module Modals & Passive Voice
  else if (topic.id === 'modals') {
    html += `
      <div class="card">
        <h3 style="color: var(--primary); margin-bottom: 1.25rem;">Phân Tích 11 Động Từ Khiếm Khuyết Trọng Tâm</h3>
        <div class="grid-2" style="gap: 1.5rem;">
          ${topic.modals.map(m => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
              <h4 style="color: var(--primary); margin-bottom: 0.75rem;">${m.name}</h4>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                ${m.functions.map(f => `
                  <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-sm); font-size: 0.875rem;">
                    <strong>Chức năng:</strong> ${f.use}<br>
                    <strong style="color: var(--secondary);">Ví dụ:</strong> <em>${f.example}</em>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  else if (topic.id === 'passive-voice') {
    html += `
      <div class="card" style="margin-bottom: 2rem;">
        <h3 style="color: var(--primary); margin-bottom: 1rem;">Quy Tắc Chuyển Đổi Bị Động Cốt Lõi</h3>
        <div style="background: var(--bg-muted); padding: 1rem 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
          <ol style="padding-left: 1.25rem; font-size: 0.925rem; line-height: 1.8;">
            ${topic.rules.map(r => `<li>${r}</li>`).join('')}
          </ol>
        </div>

        <h4 style="color: var(--secondary); margin-bottom: 1rem;">Chuyển Đổi Bị Động Theo Các Thì</h4>
        <div style="overflow-x: auto; margin-bottom: 1.5rem;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;">
            <thead>
              <tr style="background: var(--bg-muted); border-bottom: 2px solid var(--border-color); text-align: left;">
                <th style="padding: 0.85rem;">Thì (Tense)</th>
                <th style="padding: 0.85rem;">Chủ động (Active)</th>
                <th style="padding: 0.85rem;">Bị động (Passive)</th>
                <th style="padding: 0.85rem;">Ví dụ chuyển đổi (Example)</th>
              </tr>
            </thead>
            <tbody>
              ${topic.tenseMatrix.map(tm => `
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.85rem; font-weight: 700; color: var(--primary);">${tm.tense}</td>
                  <td style="padding: 0.85rem;"><code>${tm.active}</code></td>
                  <td style="padding: 0.85rem; font-weight: 600; color: var(--success-text);"><code>${tm.passive}</code></td>
                  <td style="padding: 0.85rem; font-size: 0.825rem; color: var(--text-secondary);">${tm.example}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <h4 style="color: var(--primary); margin-bottom: 1rem;">Các Cấu Trúc Bị Động Đặc Biệt</h4>
        <div class="grid-2">
          ${topic.specialStructures.map(ss => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
              <h5 style="font-size: 1rem; color: var(--primary); margin-bottom: 0.5rem;">${ss.name}</h5>
              <p style="font-size: 0.875rem; margin-bottom: 0.5rem;">${ss.explanation}</p>
              ${ss.pattern1 ? `<div style="background: var(--bg-muted); padding: 0.5rem; font-size: 0.825rem; margin-bottom: 0.25rem;"><code>${ss.pattern1}</code></div>` : ''}
              ${ss.pattern2 ? `<div style="background: var(--bg-muted); padding: 0.5rem; font-size: 0.825rem; margin-bottom: 0.5rem;"><code>${ss.pattern2}</code></div>` : ''}
              ${ss.formula ? `<div style="background: var(--bg-muted); padding: 0.5rem; font-size: 0.825rem; margin-bottom: 0.5rem; white-space: pre-line;"><code>${ss.formula}</code></div>` : ''}
              <div style="font-size: 0.85rem; color: var(--secondary); font-style: italic; white-space: pre-line;">
                ${ss.examples[0].vn || ss.examples[0].en}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 6. Module Reported Speech
  else if (topic.id === 'reported-speech') {
    html += `
      <div class="card" style="margin-bottom: 2rem;">
        <h3 style="color: var(--primary); margin-bottom: 1rem;">1. Bảng Quy Tắc Lùi Thì (Tense Backshift Table)</h3>
        <div style="overflow-x: auto; margin-bottom: 1.5rem;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
            <thead>
              <tr style="background: var(--bg-muted); border-bottom: 2px solid var(--border-color); text-align: left;">
                <th style="padding: 0.75rem 1rem;">Câu Trực Tiếp (Direct Speech)</th>
                <th style="padding: 0.75rem 1rem;">Câu Gián Tiếp (Reported Speech - Lùi thì)</th>
              </tr>
            </thead>
            <tbody>
              ${topic.tenseBackshiftTable.map(tb => `
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; font-weight: 600;">${tb.direct}</td>
                  <td style="padding: 0.75rem 1rem; font-weight: 600; color: var(--primary);">${tb.reported}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <h3 style="color: var(--secondary); margin-bottom: 1rem;">2. Bảng Đổi Trạng Từ Chỉ Thời Gian & Nơi Chốn</h3>
        <div class="grid-3" style="margin-bottom: 1.5rem; gap: 0.75rem;">
          ${topic.timePlaceConversions.map(tpc => `
            <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-sm); font-size: 0.875rem;">
              <strong>${tpc.direct}</strong> ➔ <span style="color: var(--primary); font-weight: 700;">${tpc.reported}</span>
            </div>
          `).join('')}
        </div>

        <h3 style="color: var(--primary); margin-bottom: 1rem;">3. 4 Dạng Câu Tường Thuật Phổ Biến Trong VSTEP</h3>
        <div class="grid-2" style="gap: 1.25rem;">
          ${topic.speechTypes.map(st => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
              <h4 style="color: var(--primary); margin-bottom: 0.5rem;">${st.type}</h4>
              <div style="background: var(--bg-muted); padding: 0.65rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-family: var(--font-mono); margin-bottom: 0.75rem;">
                <code>${st.formula}</code>
              </div>
              <div style="font-size: 0.875rem;">
                <div style="color: var(--text-muted);"><strong>Trực tiếp:</strong> ${st.example.direct}</div>
                <div style="color: var(--success-text); font-weight: 600; margin-top: 0.25rem;"><strong>Gián tiếp:</strong> ${st.example.reported}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 7. Module Conditionals & Wish
  else if (topic.id === 'conditionals') {
    html += `
      <div class="card" style="margin-bottom: 2rem;">
        <h3 style="color: var(--primary); margin-bottom: 1.25rem;">1. Các Loại Câu Điều Kiện Chuẩn (Conditionals 0, 1, 2, 3, Mixed)</h3>
        <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2rem;">
          ${(topic.types || []).map(c => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--primary); border-radius: var(--radius-md); padding: 1.25rem;">
              <h4 style="color: var(--primary); margin-bottom: 0.5rem;">${c.name}</h4>
              <div style="background: var(--bg-muted); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.875rem; font-family: var(--font-mono); color: var(--primary); font-weight: 700; margin-bottom: 0.5rem;">
                ${c.formula}
              </div>
              <div style="font-size: 0.875rem; color: var(--text-secondary);">
                <strong>Ví dụ:</strong> <em>${c.example}</em>
              </div>
            </div>
          `).join('')}
        </div>

        <h3 style="color: var(--secondary); margin-bottom: 1.25rem;">2. Cấu Trúc Mở Rộng & Đảo Ngữ Câu Điều Kiện</h3>
        <div class="grid-2" style="gap: 1.25rem;">
          ${(topic.advancedVariations || []).map(v => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
              <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">${v.name}</h4>
              ${v.example ? `<div style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;"><strong>Ví dụ:</strong> <em>${v.example}</em></div>` : ''}
              ${v.items ? `
                <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
                  ${v.items.map(it => `
                    <div style="background: var(--bg-muted); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.85rem;">
                      <strong style="color: var(--primary);">${it.type}:</strong> <code>${it.formula}</code>
                      <div style="color: var(--text-muted); font-size: 0.8rem; margin-top: 2px;">➔ <em>${it.example}</em></div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 8. Module Relative Clauses
  else if (topic.id === 'relative-clauses') {
    html += `
      <div class="card" style="margin-bottom: 2rem;">
        <h3 style="color: var(--primary); margin-bottom: 1rem;">1. Bảng Đại Từ & Trạng Từ Quan Hệ (Relative Pronouns & Adverbs)</h3>
        <div style="overflow-x: auto; margin-bottom: 2rem;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;">
            <thead>
              <tr style="background: var(--bg-muted); border-bottom: 2px solid var(--border-color); text-align: left;">
                <th style="padding: 0.75rem 1rem;">Từ Quan Hệ</th>
                <th style="padding: 0.75rem 1rem;">Chức Năng & Vị Trí</th>
                <th style="padding: 0.75rem 1rem;">Ví Dụ Minh Họa</th>
              </tr>
            </thead>
            <tbody>
              ${(topic.pronouns || []).map(p => `
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; font-weight: 700; color: var(--primary); font-size: 0.95rem;">${p.pronoun}</td>
                  <td style="padding: 0.75rem 1rem;">${p.function}</td>
                  <td style="padding: 0.75rem 1rem; font-style: italic; color: var(--text-secondary);">${p.example}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <h3 style="color: var(--secondary); margin-bottom: 1rem;">2. Phân Biệt Mệnh Đề Xác Định & Không Xác Định</h3>
        <div class="grid-2" style="gap: 1.25rem; margin-bottom: 2rem;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-top: 4px solid var(--primary); border-radius: var(--radius-md); padding: 1.25rem;">
            <h4 style="color: var(--primary); margin-bottom: 0.5rem;">${topic.definingVsNonDefining?.defining?.name || 'Mệnh đề xác định'}</h4>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${topic.definingVsNonDefining?.defining?.description}</p>
            <div style="background: var(--bg-muted); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-style: italic;">
              <strong>VD:</strong> ${topic.definingVsNonDefining?.defining?.example}
            </div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-top: 4px solid var(--warning); border-radius: var(--radius-md); padding: 1.25rem;">
            <h4 style="color: var(--warning-text); margin-bottom: 0.5rem;">${topic.definingVsNonDefining?.nonDefining?.name || 'Mệnh đề không xác định'}</h4>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${topic.definingVsNonDefining?.nonDefining?.description}</p>
            <div style="background: var(--bg-muted); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-style: italic;">
              <strong>VD:</strong> ${topic.definingVsNonDefining?.nonDefining?.example}
            </div>
          </div>
        </div>

        <h3 style="color: var(--primary); margin-bottom: 1rem;">3. 3 Quy Tắc Rút Gọn Mệnh Đề Quan Hệ (Reduced Relative Clauses)</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${(topic.reducedClauses || []).map(r => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--success); border-radius: var(--radius-md); padding: 1.25rem;">
              <h4 style="color: var(--success-text); margin-bottom: 0.35rem;">${r.type}</h4>
              <p style="font-size: 0.875rem; margin-bottom: 0.5rem;"><strong>Quy tắc:</strong> ${r.rule}</p>
              <div style="background: var(--bg-muted); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.875rem; color: var(--text-primary);">
                ${r.example}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 9. Module Comparisons
  else if (topic.id === 'comparisons') {
    html += `
      <div class="card" style="margin-bottom: 2rem;">
        <h3 style="color: var(--primary); margin-bottom: 1.25rem;">Hệ Thống Các Cấp So Sánh Trong Tiếng Anh</h3>
        <div class="grid-2" style="gap: 1.25rem;">
          ${(topic.structures || []).map(st => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
              <h4 style="color: var(--primary); margin-bottom: 0.5rem;">${st.name}</h4>
              <div style="background: var(--bg-muted); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-family: var(--font-mono); font-weight: 700; color: var(--primary); margin-bottom: 0.5rem; white-space: pre-line;">
                ${st.formula}
              </div>
              <div style="font-size: 0.875rem; color: var(--text-secondary);">
                <strong>Ví dụ:</strong> <em>${st.example}</em>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 10. Module Questions & Tag Questions
  else if (topic.id === 'questions') {
    html += `
      <div class="card" style="margin-bottom: 2rem;">
        ${(topic.sections || []).map(sec => `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--primary); margin-bottom: 1rem;">${sec.title}</h3>
            ${sec.explanation ? `<p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${sec.explanation}</p>` : ''}
            ${sec.formula ? `<div style="background: var(--bg-muted); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.875rem; font-family: var(--font-mono); font-weight: 700; color: var(--primary); margin-bottom: 0.75rem;"><code>${sec.formula}</code></div>` : ''}
            
            ${sec.rules ? `
              <ul style="padding-left: 1.25rem; font-size: 0.875rem; line-height: 1.8; color: var(--text-primary);">
                ${sec.rules.map(r => `<li>${r}</li>`).join('')}
              </ul>
            ` : ''}

            ${sec.examples ? `
              <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.75rem;">
                ${sec.examples.map(ex => `
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 3px solid var(--secondary); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-size: 0.875rem;">
                    <div><strong>Trực tiếp:</strong> <span style="color: var(--text-muted);">${ex.direct}</span></div>
                    <div style="margin-top: 0.25rem;"><strong>Gián tiếp:</strong> <span style="color: var(--primary); font-weight: 600;">${ex.indirect}</span></div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  // 11. Module Linking Words
  else if (topic.id === 'linking-words') {
    html += `
      <div class="card" style="margin-bottom: 2rem;">
        <h3 style="color: var(--primary); margin-bottom: 1.25rem;">10 Nhóm Liên Từ & Từ Nối Học Thuật Cho Writing & Speaking</h3>
        <div class="grid-2" style="gap: 1.25rem;">
          ${(topic.categories || []).map(cat => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
              <h4 style="color: var(--primary); margin-bottom: 0.5rem;">${cat.function}</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.75rem;">
                ${(cat.words || []).map(w => `<span class="badge badge-secondary" style="font-size: 0.775rem;">${w}</span>`).join('')}
              </div>
              <div style="font-size: 0.85rem; font-style: italic; background: var(--bg-muted); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); color: var(--text-primary);">
                <strong>Ví dụ:</strong> "${cat.example}"
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 12. Module Subject-Verb Agreement
  else if (topic.id === 'subject-verb-agreement') {
    html += `
      <div class="card" style="margin-bottom: 2rem;">
        <h3 style="color: var(--primary); margin-bottom: 1.25rem;">Bộ Quy Tắc Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement)</h3>
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          ${(topic.rules || []).map(grp => `
            <div>
              <h4 style="color: var(--secondary); margin-bottom: 1rem; font-size: 1.15rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.4rem;">
                ${grp.group}
              </h4>
              <div class="grid-2" style="gap: 1.25rem;">
                ${(grp.items || []).map(item => `
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
                    <div style="font-weight: 700; color: var(--primary); margin-bottom: 0.5rem; font-size: 0.95rem;">${item.rule}</div>
                    <div style="background: var(--bg-muted); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-family: var(--font-mono); font-weight: 700; color: var(--primary); margin-bottom: 0.5rem; white-space: pre-line;">
                      ${item.formula}
                    </div>
                    <div style="font-size: 0.85rem; color: var(--text-secondary); font-style: italic;">
                      <strong>Ví dụ:</strong> ${item.example}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 13. Module Inversion & Cleft Sentences
  else if (topic.id === 'inversion-cleft') {
    html += `
      <div class="card" style="margin-bottom: 2rem;">
        <h3 style="color: var(--primary); margin-bottom: 1.25rem;">Cấu Trúc Nhấn Mạnh, Đảo Ngữ & Thể Giả Định (B1-B2 Mastery)</h3>
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          ${(topic.sections || []).map(sec => `
            <div>
              <h4 style="color: var(--secondary); margin-bottom: 0.5rem; font-size: 1.15rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.4rem;">
                ${sec.title}
              </h4>
              ${sec.explanation ? `<p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem;">${sec.explanation}</p>` : ''}
              
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${(sec.structures || []).map(st => `
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--primary); border-radius: var(--radius-md); padding: 1.25rem;">
                    <div style="font-weight: 700; color: var(--primary); margin-bottom: 0.4rem;">${st.type}</div>
                    <div style="background: var(--bg-muted); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-family: var(--font-mono); font-weight: 700; color: var(--primary); margin-bottom: 0.5rem; white-space: pre-line;">
                      ${st.formula}
                    </div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary); font-style: italic;">
                      <strong>Ví dụ:</strong> "${st.example}"
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  return html;
}

function renderOrUpdateQuizModalDOM() {
  if (typeof document === 'undefined') return;

  // 1. Modal Container
  let modal = document.getElementById('grammar-floating-quiz-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'grammar-floating-quiz-modal';
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

  // 2. Dock Pill
  let dock = document.getElementById('grammar-quiz-dock-pill');
  if (!dock) {
    dock = document.createElement('div');
    dock.id = 'grammar-quiz-dock-pill';
    dock.style.position = 'fixed';
    dock.style.bottom = '25px';
    dock.style.right = '25px';
    dock.style.zIndex = '99999';
    dock.style.display = 'none';
    document.body.appendChild(dock);
  }

  if (!isQuizModalOpen) {
    modal.style.display = 'none';
    dock.style.display = 'none';
    return;
  }

  const topicId = activeQuizTopicId || 'sentence-structures';
  const topic = grammarTopics.find(t => t.id === topicId) || grammarTopics[0];
  const questions = GRAMMAR_QUIZZES[topicId] || [];
  const total = questions.length;
  const answeredCount = questions.filter(q => grammarQuizState[q.id] !== undefined).length;
  const correctCount = questions.filter(q => grammarQuizState[q.id]?.isCorrect).length;

  if (isQuizModalMinimized) {
    modal.style.display = 'none';
    dock.style.display = 'block';
    dock.innerHTML = `
      <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; padding: 0.75rem 1.4rem; border-radius: var(--radius-full); box-shadow: 0 10px 25px rgba(37,99,235,0.4); cursor: pointer; display: flex; align-items: center; gap: 0.6rem; font-weight: 700; font-size: 0.95rem;"
           onclick="window.restoreGrammarQuizModal()">
        <i data-lucide="edit-3"></i>
        <span>Test: ${answeredCount}/${total} (${correctCount} đúng) • Mở lại ➔</span>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Active modal view
  dock.style.display = 'none';
  modal.style.display = 'flex';

  const currentQ = questions[activeQuizQuestionIndex] || questions[0];
  const qState = currentQ ? grammarQuizState[currentQ.id] : null;
  const isAnswered = qState !== undefined;

  modal.innerHTML = `
    <div class="card" style="width: 100%; max-width: 780px; max-height: 90vh; display: flex; flex-direction: column; overflow: hidden; background: var(--bg-card); border-radius: var(--radius-lg); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); border: 1px solid var(--border-color); padding: 0;">
      <!-- Modal Header -->
      <div style="padding: 1.25rem 1.5rem; background: var(--bg-muted); border-bottom: 2px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <span class="badge badge-primary" style="font-size: 0.75rem;">Phòng Thi Trắc Nghiệm Ngữ Pháp VSTEP B1</span>
          <h3 style="margin: 0.2rem 0 0 0; font-size: 1.25rem; color: var(--text-primary);">${topic.title}</h3>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button class="btn btn-secondary btn-sm" title="Ẩn xuống nền để tra cứu lý thuyết" onclick="window.minimizeGrammarQuizModal()" style="display: flex; align-items: center; gap: 0.35rem; font-size: 0.825rem;">
            <i data-lucide="minimize-2"></i>
            <span>Ẩn Xuống Nền</span>
          </button>
          <button class="btn btn-secondary btn-sm btn-icon" title="Đóng bài test" onclick="window.closeGrammarQuizModal()">
            <i data-lucide="x"></i>
          </button>
        </div>
      </div>

      <!-- Question Index Navigator Bar -->
      <div style="padding: 0.75rem 1.5rem; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); overflow-x: auto; display: flex; gap: 0.4rem; align-items: center;">
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-right: 0.25rem; white-space: nowrap;">Câu hỏi:</span>
        ${questions.map((q, idx) => {
          const st = grammarQuizState[q.id];
          let pillBg = 'var(--bg-muted)';
          let pillColor = 'var(--text-primary)';
          let border = '1px solid var(--border-color)';

          if (st !== undefined) {
            if (st.isCorrect) {
              pillBg = 'var(--success)';
              pillColor = '#fff';
              border = '1px solid var(--success)';
            } else {
              pillBg = 'var(--danger)';
              pillColor = '#fff';
              border = '1px solid var(--danger)';
            }
          }

          const isActive = idx === activeQuizQuestionIndex;
          if (isActive) {
            border = '2px solid var(--primary)';
            if (st === undefined) {
              pillBg = 'rgba(37,99,235,0.15)';
              pillColor = 'var(--primary)';
            }
          }

          return `
            <button style="min-width: 28px; height: 28px; border-radius: 4px; font-size: 0.8rem; font-weight: 700; cursor: pointer; background: ${pillBg}; color: ${pillColor}; border: ${border}; display: flex; align-items: center; justify-content: center;"
                    onclick="window.navigateQuizQuestion(${idx})">
              ${idx + 1}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Question Content Body -->
      <div style="padding: 1.5rem; overflow-y: auto; flex: 1;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--primary);">
            Câu hỏi ${activeQuizQuestionIndex + 1} / ${total}
          </span>
          <span style="font-size: 0.85rem; color: var(--text-muted);">
            Tiến độ: <strong style="color: var(--success);">${correctCount} đúng</strong> / ${answeredCount} đã làm
          </span>
        </div>

        <div style="font-size: 1.1rem; font-weight: 600; color: var(--text-primary); line-height: 1.6; margin-bottom: 1.25rem;">
          ${currentQ.question}
        </div>

        <!-- 4 Options -->
        <div class="grid-2" style="gap: 0.75rem; margin-bottom: 1.25rem;">
          ${currentQ.options.map((opt, optIdx) => {
            let btnStyle = 'background: var(--bg-muted); border: 1.5px solid var(--border-color); color: var(--text-primary);';
            let statusIcon = '';

            if (isAnswered) {
              if (optIdx === currentQ.correct) {
                btnStyle = 'background: rgba(16, 185, 129, 0.15); border: 2px solid var(--success); color: var(--success-text); font-weight: 700;';
                statusIcon = '✅ ';
              } else if (optIdx === qState.selectedIndex && !qState.isCorrect) {
                btnStyle = 'background: rgba(239, 68, 68, 0.15); border: 2px solid var(--danger); color: var(--danger-text); font-weight: 700;';
                statusIcon = '❌ ';
              } else {
                btnStyle = 'opacity: 0.55; background: var(--bg-muted); border: 1px solid var(--border-color);';
              }
            }

            return `
              <button class="btn" 
                      style="text-align: left; justify-content: flex-start; padding: 0.85rem 1rem; font-size: 0.925rem; border-radius: var(--radius-md); transition: all 0.2s ease; ${btnStyle}"
                      ${isAnswered ? 'disabled' : ''}
                      onclick="window.handleGrammarQuizAnswer('${topicId}', '${currentQ.id}', ${optIdx})">
                ${statusIcon}${opt}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Detailed Explanation Box -->
        ${isAnswered ? `
          <div class="card" style="background: var(--bg-muted); border-left: 4px solid ${qState.isCorrect ? 'var(--success)' : 'var(--danger)'}; padding: 1.25rem; font-size: 0.9rem; line-height: 1.6;">
            <div style="font-weight: 700; font-size: 1rem; color: ${qState.isCorrect ? 'var(--success-text)' : 'var(--danger-text)'}; margin-bottom: 0.5rem;">
              ${qState.isCorrect ? '🎉 Bạn đã trả lời chính xác!' : `⚠️ Đáp án chính xác: ${currentQ.options[currentQ.correct]}`}
            </div>
            <div style="color: var(--text-primary); margin-bottom: 0.5rem;">
              <strong>Phân tích ngữ pháp:</strong> ${currentQ.explanation}
            </div>
            <div style="color: var(--text-secondary); font-style: italic;">
              <strong>Bản dịch tiếng Việt:</strong> "${currentQ.translation}"
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Modal Footer Navigation -->
      <div style="padding: 1rem 1.5rem; background: var(--bg-surface); border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <button class="btn btn-secondary btn-sm" 
                ${activeQuizQuestionIndex === 0 ? 'disabled' : ''}
                onclick="window.navigateQuizQuestion(${activeQuizQuestionIndex - 1})">
          <i data-lucide="chevron-left"></i> Câu Trước
        </button>

        <button class="btn btn-secondary btn-sm" onclick="window.resetGrammarQuiz('${topicId}')">
          <i data-lucide="rotate-ccw"></i> Làm Lại Tất Cả
        </button>

        <button class="btn btn-primary btn-sm" 
                ${activeQuizQuestionIndex === total - 1 ? 'disabled' : ''}
                onclick="window.navigateQuizQuestion(${activeQuizQuestionIndex + 1})">
          <span>Câu Tiếp Theo</span> <i data-lucide="chevron-right"></i>
        </button>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}
