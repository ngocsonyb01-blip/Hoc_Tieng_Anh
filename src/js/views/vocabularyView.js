import { topics, allVocabulary, phrasalVerbs, collocations, wordFamilies, irregularVerbs } from '../../data/vocabulary/index.js';
import { speakText } from '../utils/audioPlayer.js';
import { FlashcardTestComponent } from '../modules/vocab/flashcardTestComponent.js';

let activeTab = 'topics'; // 'topics' | 'irregular' | 'phrasal' | 'collocations' | 'families'
let selectedTopicId = topics[0]?.slug || 'personal-info';
let searchQuery = '';
let irregularSearchQuery = '';

// Vocab Flashcard Test Modal State
let isVocabModalOpen = false;
let isVocabModalMinimized = false;

export function renderVocabularyView() {
  // Bind Flashcard Test Component callbacks
  FlashcardTestComponent.initWindowBindings(() => {
    if (isVocabModalOpen) {
      renderOrUpdateVocabModalDOM();
    }
  });

  window.openVocabTestModal = () => {
    isVocabModalOpen = true;
    renderOrUpdateVocabModalDOM();
  };

  window.closeVocabTestModal = () => {
    isVocabModalOpen = false;
    const modal = document.getElementById('vocab-floating-test-modal');
    if (modal) modal.style.display = 'none';
    const dock = document.getElementById('vocab-test-dock-pill');
    if (dock) dock.remove();
  };

  window.submitVocabModalChoice = (selectedAnswer, btnIndex) => {
    if (isVocabAnswered || !currentVocabQuestion) return;
    handleVocabModalSubmission(selectedAnswer, btnIndex);
  };

  window.submitVocabModalTextInput = () => {
    if (isVocabAnswered || !currentVocabQuestion) return;
    const inputEl = document.getElementById('vocab-modal-spelling-input');
    if (!inputEl) return;
    const answer = inputEl.value.trim().toLowerCase();
    if (!answer) {
      inputEl.focus();
      return;
    }
    handleVocabModalSubmission(answer, null);
  };

  window.nextVocabModalQuestion = () => {
    loadNextVocabQuestion();
  };

  window.handleVocabTabChange = (tab) => {
    activeTab = tab;
    window.app.renderCurrentView();
  };

  window.handleTopicSelect = (topicSlug) => {
    selectedTopicId = topicSlug;
    const carousel = document.getElementById('vocab-topic-carousel');
    const prevScroll = carousel ? carousel.scrollLeft : 0;

    window.app.renderCurrentView();

    setTimeout(() => {
      const activeBtn = document.getElementById(`topic-btn-${selectedTopicId}`);
      const newCarousel = document.getElementById('vocab-topic-carousel');
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else if (newCarousel) {
        newCarousel.scrollLeft = prevScroll;
      }
    }, 20);
  };

  window.handleVocabSearch = (e) => {
    searchQuery = e.target.value.toLowerCase();
    const container = document.getElementById('vocab-items-grid');
    if (container) {
      container.innerHTML = renderVocabCards();
    }
  };

  window.handleIrregularSearch = (e) => {
    irregularSearchQuery = e.target.value.toLowerCase();
    const tbody = document.getElementById('irregular-verbs-tbody');
    if (tbody) {
      tbody.innerHTML = renderIrregularRows();
    }
  };

  window.speakVocab = (word) => {
    speakText(word, 'en-US');
  };

  const currentTopicData = topics.find(t => t.slug === selectedTopicId || t.id === selectedTopicId) || topics[0];

  return `
    <div class="vocabulary-page animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2>Bách Khoa Toàn Thư Từ Vựng VSTEP B1 (3.700+ Mục Từ)</h2>
          <p>42 Chủ Điểm 2.940 từ, 400 Động từ Bất quy tắc, 150 Phrasal Verbs, 180 Collocations & 130 Word Families</p>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
          <button class="btn ${activeTab === 'topics' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleVocabTabChange('topics')">
            <i data-lucide="grid"></i> 42 Chủ Điểm (${allVocabulary.length})
          </button>
          <button class="btn ${activeTab === 'irregular' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleVocabTabChange('irregular')">
            <i data-lucide="zap"></i> Động Từ Bất Quy Tắc (${irregularVerbs.length})
          </button>
          <button class="btn ${activeTab === 'phrasal' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleVocabTabChange('phrasal')">
            Phrasal Verbs (${phrasalVerbs.length})
          </button>
          <button class="btn ${activeTab === 'collocations' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleVocabTabChange('collocations')">
            Collocations (${collocations.length})
          </button>
          <button class="btn ${activeTab === 'families' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleVocabTabChange('families')">
            Word Families (${wordFamilies.length})
          </button>
        </div>
      </div>

      ${activeTab === 'topics' ? renderTopicsTab(currentTopicData) : ''}
      ${activeTab === 'irregular' ? renderIrregularTab() : ''}
      ${activeTab === 'phrasal' ? renderPhrasalTab() : ''}
      ${activeTab === 'collocations' ? renderCollocationsTab() : ''}
      ${activeTab === 'families' ? renderFamiliesTab() : ''}

      <!-- Floating Action Button for Vocab AI Test -->
      <button id="btn-floating-vocab-test" class="btn btn-primary" 
              style="position: fixed; bottom: 25px; right: 25px; z-index: 9998; box-shadow: 0 10px 25px rgba(37,99,235,0.4); border-radius: var(--radius-full); padding: 0.75rem 1.4rem; font-weight: 700; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem;"
              onclick="window.openVocabTestModal()">
        <i data-lucide="brain-circuit"></i>
        <span>Test</span>
      </button>
    </div>
  `;
}

function renderOrUpdateVocabModalDOM() {
  if (typeof document === 'undefined') return;

  // 1. Modal Container
  let modal = document.getElementById('vocab-floating-test-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'vocab-floating-test-modal';
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

  // Clean up any old dock pill if present
  const oldDock = document.getElementById('vocab-test-dock-pill');
  if (oldDock) oldDock.remove();

  if (!isVocabModalOpen) {
    modal.style.display = 'none';
    return;
  }

  modal.style.display = 'flex';

  modal.innerHTML = `
    <div class="card" style="width: 100%; max-width: 960px; max-height: 92vh; display: flex; flex-direction: column; overflow: hidden; background: var(--bg-card); border-radius: var(--radius-lg); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); border: 1px solid var(--border-color); border-top: 5px solid var(--primary); padding: 0;">
      <!-- Modal Header -->
      <div style="padding: 1rem 1.5rem; background: var(--bg-muted); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="badge badge-primary" style="font-weight: 700;">Học & Kiểm Tra Từ Vựng</span>
          <span style="font-size: 0.95rem; font-weight: 800; color: var(--primary);">Hệ Thống Gói Flashcard VSTEP B1</span>
        </div>

        <button class="btn btn-secondary btn-sm btn-icon" title="Đóng cửa sổ" onclick="window.closeVocabTestModal()">
          <i data-lucide="x"></i>
        </button>
      </div>

      <!-- Modal Content Body -->
      <div style="padding: 1.5rem 1.75rem; overflow-y: auto; flex: 1;">
        ${FlashcardTestComponent.render()}
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

function renderTopicsTab(currentTopic) {
  const currentTopicWords = allVocabulary.filter(w => w.topicId === (currentTopic.slug || selectedTopicId));

  return `
    <div style="margin-bottom: 1.5rem;">
      <!-- Topic Selector Carousel -->
      <div id="vocab-topic-carousel" class="tabs-header" style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.75rem; margin-bottom: 1.5rem; scroll-behavior: smooth;">
        ${topics.map((t, idx) => `
          <button id="topic-btn-${t.slug || t.id}"
                  class="tab-btn ${(t.slug === selectedTopicId || t.id === selectedTopicId) ? 'active' : ''}" 
                  style="white-space: nowrap; font-size: 0.85rem;"
                  onclick="window.handleTopicSelect('${t.slug || t.id}')">
            ${idx + 1}. ${t.vn || t.name}
          </button>
        `).join('')}
      </div>

      <!-- Current Topic Header -->
      <div class="card" style="margin-bottom: 1.5rem; background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 4px solid var(--primary);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="badge badge-primary">Chủ điểm ${currentTopic.id}: ${currentTopic.name}</span>
            <h3 style="font-size: 1.4rem; margin-top: 0.25rem;">${currentTopic.vn || currentTopic.name} (${currentTopicWords.length} Từ Vựng Đầy Đủ)</h3>
            <p style="margin: 0; color: var(--text-secondary);">${currentTopic.desc || ''}</p>
          </div>
          <div style="width: 320px;">
            <div class="search-container">
              <i data-lucide="search" class="search-icon"></i>
              <input type="text" class="search-input" placeholder="Tìm từ vựng trong chủ đề..." oninput="window.handleVocabSearch(event)">
            </div>
          </div>
        </div>
      </div>

      <!-- Vocab Items Grid -->
      <div id="vocab-items-grid" class="grid-auto">
        ${renderVocabCards()}
      </div>
    </div>
  `;
}

function renderVocabCards() {
  let filtered = allVocabulary.filter(w => w.topicId === selectedTopicId);
  if (searchQuery) {
    filtered = filtered.filter(w => 
      w.word.toLowerCase().includes(searchQuery) ||
      w.meaningVn.toLowerCase().includes(searchQuery) ||
      w.definition.toLowerCase().includes(searchQuery)
    );
  }

  if (filtered.length === 0) {
    return `<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">Không tìm thấy từ vựng phù hợp.</div>`;
  }

  return filtered.map(w => `
    <div class="card" style="padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <h4 style="font-size: 1.15rem; color: var(--primary); margin: 0;">${w.word}</h4>
              <span class="badge badge-muted" style="font-size: 0.7rem;">${w.pos}</span>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.825rem; color: var(--text-muted);">${w.phonetic}</div>
          </div>
          <button class="btn-audio" onclick="window.speakVocab('${w.word}')" title="Nghe phát âm">
            <i data-lucide="volume-2" style="width: 18px; height: 18px;"></i>
          </button>
        </div>

        <div style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">
          ${w.meaningVn}
        </div>
        
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
          ${w.definition}
        </p>
      </div>

      <div style="background: var(--bg-muted); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.8rem;">
        <div style="color: var(--text-primary); margin-bottom: 0.2rem;">
          <strong>Ex:</strong> ${w.example}
        </div>
        <div style="color: var(--text-muted); font-style: italic;">
          ${w.exampleVn}
        </div>
        ${w.collocations ? `<div style="margin-top: 0.35rem; color: var(--secondary); font-weight: 500;"><strong>Colloc:</strong> ${w.collocations}</div>` : ''}
      </div>
    </div>
  `).join('');
}

function renderPhrasalTab() {
  return `
    <div>
      <div class="card" style="margin-bottom: 1.5rem;">
        <h3>175 Cụm Động Từ (Phrasal Verbs) Xuất Hiện Trong VSTEP B1</h3>
        <p>Tổng hợp các cụm động từ quan trọng nhất cho kỹ năng Listening, Reading và Writing</p>
      </div>
      <div class="grid-auto">
        ${phrasalVerbs.map(pv => `
          <div class="card" style="padding: 1.25rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <h4 style="color: var(--primary); margin: 0;">${pv.verb}</h4>
              <button class="btn-audio" onclick="window.speakVocab('${pv.verb}')">
                <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i>
              </button>
            </div>
            <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">${pv.meaningVn}</div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem;"><strong>Cấu trúc:</strong> <code>${pv.pattern}</code></p>
            <div style="background: var(--bg-muted); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.825rem;">
              <strong>Ex:</strong> ${pv.example}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderCollocationsTab() {
  return `
    <div>
      <div class="card" style="margin-bottom: 1.5rem;">
        <h3>280 Cụm Từ Cố Định (Collocations) Chuẩn B1</h3>
        <p>Giúp câu văn tự nhiên, chính xác và đạt điểm tối đa trong Writing & Speaking</p>
      </div>
      <div class="grid-auto">
        ${collocations.map(col => `
          <div class="card" style="padding: 1.25rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <h4 style="color: var(--secondary); margin: 0;">${col.collocation}</h4>
              <button class="btn-audio" onclick="window.speakVocab('${col.collocation}')">
                <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i>
              </button>
            </div>
            <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">${col.meaningVn}</div>
            <div style="background: var(--bg-muted); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.825rem;">
              <strong>Ex:</strong> ${col.example}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderFamiliesTab() {
  return `
    <div>
      <div class="card" style="margin-bottom: 1.5rem;">
        <h3>130 Gia Đình Từ (Word Families) VSTEP B1</h3>
        <p>Bảng biến đổi từ Noun - Verb - Adjective - Adverb để làm tốt phần điền từ và đọc hiểu</p>
      </div>
      <div class="card" style="overflow-x: auto; padding: 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--bg-muted); border-bottom: 2px solid var(--border-color); text-align: left;">
              <th style="padding: 1rem;">Gốc Từ (Root)</th>
              <th style="padding: 1rem;">Danh Từ (Noun)</th>
              <th style="padding: 1rem;">Động Từ (Verb)</th>
              <th style="padding: 1rem;">Tính Từ (Adj)</th>
              <th style="padding: 1rem;">Trạng Từ (Adv)</th>
              <th style="padding: 1rem;">Nghĩa Tiếng Việt</th>
            </tr>
          </thead>
          <tbody>
            ${wordFamilies.map(wf => `
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.85rem 1rem; font-weight: 700; color: var(--primary);">${wf.root}</td>
                <td style="padding: 0.85rem 1rem;">${wf.noun}</td>
                <td style="padding: 0.85rem 1rem;">${wf.verb}</td>
                <td style="padding: 0.85rem 1rem;">${wf.adjective}</td>
                <td style="padding: 0.85rem 1rem;">${wf.adverb}</td>
                <td style="padding: 0.85rem 1rem; color: var(--text-secondary);">${wf.meaningVn}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderIrregularRows() {
  const filtered = (irregularVerbs || []).filter(v => {
    if (!irregularSearchQuery) return true;
    return v.v1.toLowerCase().includes(irregularSearchQuery) ||
           v.v2.toLowerCase().includes(irregularSearchQuery) ||
           v.v3.toLowerCase().includes(irregularSearchQuery) ||
           v.meaning.toLowerCase().includes(irregularSearchQuery);
  });

  if (filtered.length === 0) {
    return `
      <tr>
        <td colspan="5" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
          Không tìm thấy động từ nào phù hợp với từ khóa "${irregularSearchQuery}".
        </td>
      </tr>
    `;
  }

  return filtered.map(v => `
    <tr style="border-bottom: 1px solid var(--border-color); transition: background var(--transition-fast);">
      <td style="padding: 1rem; font-weight: 800; color: var(--primary);">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button class="btn btn-secondary btn-icon" style="padding: 0.25rem; border-radius: var(--radius-full);" onclick="window.speakVocab('${v.v1}')" title="Nghe phát âm V1">
            <i data-lucide="volume-2" style="width: 15px; height: 15px;"></i>
          </button>
          <div>
            <div style="font-size: 1rem;">${v.v1}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${v.v1_ipa}</div>
          </div>
        </div>
      </td>
      <td style="padding: 1rem; font-weight: 700; color: var(--secondary);">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button class="btn btn-secondary btn-icon" style="padding: 0.25rem; border-radius: var(--radius-full);" onclick="window.speakVocab('${v.v2.split('/')[0].trim()}')" title="Nghe phát âm V2">
            <i data-lucide="volume-2" style="width: 15px; height: 15px;"></i>
          </button>
          <div>
            <div style="font-size: 0.95rem;">${v.v2}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${v.v2_ipa}</div>
          </div>
        </div>
      </td>
      <td style="padding: 1rem; font-weight: 700; color: var(--success-text, #059669);">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button class="btn btn-secondary btn-icon" style="padding: 0.25rem; border-radius: var(--radius-full);" onclick="window.speakVocab('${v.v3.split('/')[0].trim()}')" title="Nghe phát âm V3">
            <i data-lucide="volume-2" style="width: 15px; height: 15px;"></i>
          </button>
          <div>
            <div style="font-size: 0.95rem;">${v.v3}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${v.v3_ipa}</div>
          </div>
        </div>
      </td>
      <td style="padding: 1rem; font-weight: 600; color: var(--text-primary);">
        ${v.meaning}
      </td>
      <td style="padding: 1rem; font-size: 0.85rem; color: var(--text-secondary); font-style: italic; max-width: 320px;">
        "${v.example}"
      </td>
    </tr>
  `).join('');
}

function renderIrregularTab() {
  return `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <!-- Hero Card with Instant Live Search -->
      <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--primary); padding: 1.5rem 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h3 style="color: var(--primary); margin: 0 0 0.25rem 0; font-size: 1.35rem;">
              Bảng 400 Động Từ Bất Quy Tắc Tiếng Anh Toàn Diện (V1 - V2 - V3)
            </h3>
            <p style="margin: 0; color: var(--text-secondary); font-size: 0.925rem;">
              Tra cứu nhanh chóng, có phiên âm IPA quốc tế, phát âm audio từng thì & ví dụ câu ngữ cảnh VSTEP B1-B2.
            </p>
          </div>

          <div style="position: relative; width: 100%; max-width: 340px;">
            <input type="text" placeholder="Tìm theo V1, V2, V3 hoặc nghĩa..." 
                   value="${irregularSearchQuery}"
                   oninput="window.handleIrregularSearch(event)"
                   style="width: 100%; padding: 0.7rem 1rem 0.7rem 2.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary); font-size: 0.9rem;" />
            <i data-lucide="search" style="position: absolute; left: 0.85rem; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; color: var(--text-muted);"></i>
          </div>
        </div>
      </div>

      <!-- Irregular Verbs Data Table -->
      <div class="card" style="overflow-x: auto; padding: 0; box-shadow: var(--shadow-md);">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--bg-muted); border-bottom: 2px solid var(--border-color); text-align: left;">
              <th style="padding: 1rem 1.25rem; width: 22%;">V1 (Nguyên Mẫu)</th>
              <th style="padding: 1rem 1.25rem; width: 20%;">V2 (Quá Khứ Đơn)</th>
              <th style="padding: 1rem 1.25rem; width: 20%;">V3 (Quá Khứ Phân Từ)</th>
              <th style="padding: 1rem 1.25rem; width: 20%;">Nghĩa Tiếng Việt</th>
              <th style="padding: 1rem 1.25rem; width: 28%;">Ví Dụ Minh Họa</th>
            </tr>
          </thead>
          <tbody id="irregular-verbs-tbody">
            ${renderIrregularRows()}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
