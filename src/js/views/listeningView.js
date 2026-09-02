import { microSkills, listeningPracticeTests } from '../../data/listening/index.js';
import { renderAudioPlayerComponent } from '../utils/audioPlayer.js';
import { AnalyticsStore } from '../modules/analytics/analyticsStore.js';

let activeListeningTab = 'practice'; // 'skills' | 'practice'
let selectedTestSetIndex = 0;
let selectedPart = 'part1'; // 'part1' | 'part2' | 'part3'
let showTranscripts = {};
let userAnswers = {};

export function renderListeningView() {
  window.handleListeningTabChange = (tab) => {
    activeListeningTab = tab;
    window.app.renderCurrentView();
  };

  window.handleListeningSetChange = (idx) => {
    selectedTestSetIndex = idx;
    userAnswers = {};
    window.app.renderCurrentView();
  };

  window.handleListeningPartChange = (part) => {
    selectedPart = part;
    window.app.renderCurrentView();
  };

  window.toggleTranscript = (id) => {
    showTranscripts[id] = !showTranscripts[id];
    const el = document.getElementById(`transcript-${id}`);
    if (el) {
      el.style.display = showTranscripts[id] ? 'block' : 'none';
    }
  };

  window.selectListeningAnswer = (qId, optionKey, correctKey) => {
    userAnswers[qId] = optionKey;
    const qCard = document.getElementById(`lq-${qId}`);
    if (qCard) {
      const options = qCard.querySelectorAll('.quiz-option');
      options.forEach(opt => {
        const key = opt.getAttribute('data-key');
        opt.className = 'quiz-option';
        if (key === correctKey) opt.classList.add('correct');
        if (key === optionKey && optionKey !== correctKey) opt.classList.add('incorrect');
      });
      const exp = qCard.querySelector('.quiz-explanation');
      if (exp) exp.style.display = 'block';

      // Update analytics score on correct answer
      if (optionKey === correctKey) {
        AnalyticsStore.updateSkillScore('listening', +2);
      }
    }
  };

  return `
    <div class="listening-page animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2>Luyện Kỹ Năng Nghe VSTEP B1 (Listening Arena)</h2>
          <p>Trình phát Audio có thanh thời gian & tạm dừng, 12 kỹ năng vi mô, bài luyện nghe thực tế Part 1, 2, 3 kèm Transcript song ngữ</p>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn ${activeListeningTab === 'practice' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleListeningTabChange('practice')">
            <i data-lucide="play-circle"></i> Luyện Đề Thực Chiến (${(listeningPracticeTests.testSets || []).length} Bộ Đề)
          </button>
          <button class="btn ${activeListeningTab === 'skills' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleListeningTabChange('skills')">
            <i data-lucide="compass"></i> 12 Kỹ Năng Vi Mô
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
  const part1 = testSet.part1 || { title: 'Part 1: 8 Thông Báo Ngắn', questions: [] };
  const part2 = testSet.part2 || { title: 'Part 2: 3 Đoạn Hội Thoại Dài', conversations: [] };
  const part3 = testSet.part3 || { title: 'Part 3: 3 Bài Thuyết Trình Học Thuật', talks: [] };

  return `
    <div>
      <!-- Test Set Selector Carousel -->
      <div class="tabs-header" style="display: flex; gap: 0.75rem; overflow-x: auto; padding-bottom: 0.75rem; margin-bottom: 1.25rem;">
        ${sets.map((s, idx) => `
          <button class="tab-btn ${selectedTestSetIndex === idx ? 'active' : ''}" onclick="window.handleListeningSetChange(${idx})" style="white-space: nowrap; font-weight: 700; font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="disc"></i>
            <span>${s.title}</span>
          </button>
        `).join('')}
      </div>

      <!-- Part Selector Carousel -->
      <div class="tabs-header" style="margin-bottom: 1.5rem; display: flex; gap: 0.5rem; overflow-x: auto;">
        <button class="tab-btn ${selectedPart === 'part1' ? 'active' : ''}" onclick="window.handleListeningPartChange('part1')" style="font-weight: 700; white-space: nowrap;">
          <i data-lucide="radio"></i> Part 1: 8 Thông Báo Ngắn
        </button>
        <button class="tab-btn ${selectedPart === 'part2' ? 'active' : ''}" onclick="window.handleListeningPartChange('part2')" style="font-weight: 700; white-space: nowrap;">
          <i data-lucide="messages-square"></i> Part 2: 3 Hội Thoại Dài (12 Câu)
        </button>
        <button class="tab-btn ${selectedPart === 'part3' ? 'active' : ''}" onclick="window.handleListeningPartChange('part3')" style="font-weight: 700; white-space: nowrap;">
          <i data-lucide="mic"></i> Part 3: 3 Bài Thuyết Trình (15 Câu)
        </button>
      </div>

      ${selectedPart === 'part1' ? renderPart1Section(part1) : ''}
      ${selectedPart === 'part2' ? renderPart2Section(part2) : ''}
      ${selectedPart === 'part3' ? renderPart3Section(part3) : ''}
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

function renderPart1Section(part1) {
  const questions = part1.questions || [];
  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--primary);">
        <h3 style="margin: 0 0 0.25rem 0; color: var(--primary);">${part1.title}</h3>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">${part1.description || 'Nghe 8 đoạn thông báo/hướng dẫn ngắn và chọn đáp án chính xác'}</p>
      </div>

      ${questions.map((q, idx) => {
        const audioId = `lp1-${q.id}`;
        return `
          <div class="card" id="lq-${q.id}" style="padding: 2rem; border: 1px solid var(--border-color);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
              <span class="badge badge-primary" style="font-weight: 700;">Câu ${idx + 1}</span>
              <span style="font-size: 0.85rem; color: var(--text-muted);">Dạng bài: Thông báo công cộng / Hội thoại 2 lượt</span>
            </div>

            <!-- Audio Player Controller Component -->
            ${renderAudioPlayerComponent(audioId, q.audioText, `Audio Câu ${idx + 1}`)}

            <div id="transcript-${audioId}" style="display: none; background: var(--bg-muted); padding: 1rem 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.95rem; line-height: 1.7;">
              <strong style="color: var(--primary);">Lời thoại (Audio Transcript):</strong>
              <p style="margin: 0.35rem 0 0 0; font-style: italic; color: var(--text-primary);">"${q.audioText}"</p>
            </div>

            <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 1.25rem; color: var(--text-primary);">
              ${q.question}
            </div>

            <!-- Multiple Choice Options -->
            <div style="display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.25rem;">
              ${(q.options || []).map(opt => `
                <div class="quiz-option" data-key="${opt.key}" onclick="window.selectListeningAnswer('${q.id}', '${opt.key}', '${q.correctAnswer}')" 
                     style="cursor: pointer; padding: 0.85rem 1.15rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); font-size: 0.95rem; display: flex; align-items: center; gap: 0.75rem; transition: all var(--transition-fast);">
                  <strong style="color: var(--primary); font-family: var(--font-mono);">${opt.key}.</strong>
                  <span>${opt.text}</span>
                </div>
              `).join('')}
            </div>

            <!-- Detailed Explanation Drawer -->
            <div class="quiz-explanation" style="display: none; background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--success); padding: 1.25rem; border-radius: var(--radius-md); font-size: 0.9rem; line-height: 1.7;">
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

function renderPart2Section(part2) {
  const conversations = part2.conversations || [];
  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--primary);">
        <h3 style="margin: 0 0 0.25rem 0; color: var(--primary);">${part2.title}</h3>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">${part2.description || 'Nghe 3 cuộc hội thoại thường nhật/học đường (mỗi bài 4 câu hỏi)'}</p>
      </div>

      ${conversations.map(conv => {
        const audioId = `lp2-${conv.id}`;
        return `
          <div class="card" style="padding: 2rem; border: 1px solid var(--border-color);">
            <div style="margin-bottom: 1rem;">
              <span class="badge badge-secondary" style="margin-bottom: 0.35rem;">Hội Thoại ${conv.id}</span>
              <h3 style="margin: 0; font-size: 1.3rem; color: var(--primary);">${conv.title}</h3>
            </div>

            <!-- Audio Player Controller -->
            ${renderAudioPlayerComponent(audioId, conv.audioTranscript, `Audio Hội Thoại ${conv.id}`)}

            <div id="transcript-${audioId}" style="display: none; background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.8; white-space: pre-line;">
              <strong style="color: var(--primary); font-size: 1rem;">Audio Transcript (Lời Thoại):</strong>\n${conv.audioTranscript}
            </div>

            <!-- Sub-questions -->
            <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem;">
              ${(conv.questions || []).map(q => `
                <div id="lq-${q.id}" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
                  <div style="font-weight: 700; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.85rem;">
                    Câu ${q.id}: ${q.question}
                  </div>
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.6rem; margin-bottom: 0.85rem;">
                    ${(q.options || []).map(opt => `
                      <div class="quiz-option" data-key="${opt.key}" onclick="window.selectListeningAnswer('${q.id}', '${opt.key}', '${q.correctAnswer}')" 
                           style="cursor: pointer; padding: 0.75rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;">
                        <strong style="color: var(--primary);">${opt.key}.</strong>
                        <span>${opt.text}</span>
                      </div>
                    `).join('')}
                  </div>
                  <div class="quiz-explanation" style="display: none; background: var(--bg-muted); padding: 0.85rem 1rem; border-radius: var(--radius-sm); font-size: 0.875rem; border-left: 3px solid var(--success);">
                    <strong style="color: var(--success-text);">Đáp án đúng: ${q.correctAnswer}</strong> ➔ ${q.explanation}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderPart3Section(part3) {
  const talks = part3.talks || [];
  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--primary);">
        <h3 style="margin: 0 0 0.25rem 0; color: var(--primary);">${part3.title}</h3>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">${part3.description || 'Nghe 3 bài thuyết trình học thuật chuyên sâu'}</p>
      </div>

      ${talks.map(talk => {
        const audioId = `lp3-${talk.id}`;
        return `
          <div class="card" style="padding: 2rem; border: 1px solid var(--border-color);">
            <div style="margin-bottom: 1rem;">
              <span class="badge badge-secondary" style="margin-bottom: 0.35rem;">Bài Giảng ${talk.id}</span>
              <h3 style="margin: 0; font-size: 1.3rem; color: var(--primary);">${talk.title}</h3>
            </div>

            <!-- Audio Player Controller -->
            ${renderAudioPlayerComponent(audioId, talk.audioTranscript, `Audio Bài Giảng ${talk.id}`)}

            <div id="transcript-${audioId}" style="display: none; background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.8; white-space: pre-line;">
              <strong style="color: var(--primary); font-size: 1rem;">Audio Transcript (Lời Thoại):</strong>\n${talk.audioTranscript}
            </div>

            <!-- Sub-questions -->
            <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem;">
              ${(talk.questions || []).map(q => `
                <div id="lq-${q.id}" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
                  <div style="font-weight: 700; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.85rem;">
                    Câu ${q.id}: ${q.question}
                  </div>
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.6rem; margin-bottom: 0.85rem;">
                    ${(q.options || []).map(opt => `
                      <div class="quiz-option" data-key="${opt.key}" onclick="window.selectListeningAnswer('${q.id}', '${opt.key}', '${q.correctAnswer}')" 
                           style="cursor: pointer; padding: 0.75rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;">
                        <strong style="color: var(--primary);">${opt.key}.</strong>
                        <span>${opt.text}</span>
                      </div>
                    `).join('')}
                  </div>
                  <div class="quiz-explanation" style="display: none; background: var(--bg-muted); padding: 0.85rem 1rem; border-radius: var(--radius-sm); font-size: 0.875rem; border-left: 3px solid var(--success);">
                    <strong style="color: var(--success-text);">Đáp án đúng: ${q.correctAnswer}</strong> ➔ ${q.explanation}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}
