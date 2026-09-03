import { 
  monophthongs, 
  diphthongs, 
  consonants, 
  wordStressRules, 
  intonationRules, 
  connectedSpeechRules, 
  vietnameseCommonMistakes 
} from '../../data/pronunciation/index.js';
import { renderAudioPlayerComponent, speakText } from '../utils/audioPlayer.js';

let activePronTab = 'ipa'; // 'ipa' | 'stress' | 'connected' | 'mistakes'
let selectedSound = null;

export function renderPronunciationView() {
  window.handlePronTabChange = (tab) => {
    activePronTab = tab;
    window.app.renderCurrentView();
  };

  window.speakIpa = (word) => {
    if (!word) return;
    speakText(word, 'en-US', 0.85);
  };

  window.showSoundDetail = (symbol) => {
    const allSounds = [...monophthongs, ...diphthongs, ...consonants];
    selectedSound = allSounds.find(s => s.symbol === symbol) || null;
    const modalEl = document.getElementById('sound-detail-modal');
    if (modalEl) {
      modalEl.innerHTML = renderSoundModalContent(selectedSound);
      modalEl.style.display = 'flex';
      if (window.lucide) window.lucide.createIcons();
    }
  };

  window.closeSoundModal = () => {
    const modalEl = document.getElementById('sound-detail-modal');
    if (modalEl) {
      modalEl.style.display = 'none';
    }
  };

  return `
    <div class="pronunciation-page animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2>Ngữ Âm Chuẩn Hóa & Ngữ Điệu Quốc Tế (Phonetics & IPA)</h2>
          <p>Hệ thống 44 âm IPA chuẩn quốc tế, 10 quy tắc trọng âm từ bất biến, 5 hiện tượng nối âm thực chiến & khắc phục 10 lỗi phát âm kinh điển</p>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn ${activePronTab === 'ipa' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handlePronTabChange('ipa')">
            <i data-lucide="grid"></i> Bảng 44 Âm IPA
          </button>
          <button class="btn ${activePronTab === 'stress' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handlePronTabChange('stress')">
            <i data-lucide="zap"></i> 10 Quy Tắc Trọng Âm & Ngữ Điệu
          </button>
          <button class="btn ${activePronTab === 'connected' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handlePronTabChange('connected')">
            <i data-lucide="link"></i> 5 Hiện Tượng Nối Âm
          </button>
          <button class="btn ${activePronTab === 'mistakes' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handlePronTabChange('mistakes')">
            <i data-lucide="alert-triangle"></i> Sửa 10 Lỗi Người Việt
          </button>
        </div>
      </div>

      ${activePronTab === 'ipa' ? renderIpaTab() : ''}
      ${activePronTab === 'stress' ? renderStressTab() : ''}
      ${activePronTab === 'connected' ? renderConnectedTab() : ''}
      ${activePronTab === 'mistakes' ? renderMistakesTab() : ''}

      <!-- Sound Detail Interactive Modal -->
      <div id="sound-detail-modal" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 9999; align-items: center; justify-content: center; padding: 1.5rem; backdrop-filter: blur(4px);">
        <!-- Modal content loaded dynamically -->
      </div>
    </div>
  `;
}

function renderIpaTab() {
  return `
    <div>
      <!-- Monophthongs (Nguyên âm đơn) -->
      <div class="card" style="margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <div>
            <h3 style="margin: 0; color: var(--primary);">1. Nguyên Âm Đơn (Monophthongs - 12 Âm)</h3>
            <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: var(--text-secondary);">Gồm các nguyên âm đơn dài (ngân dài 1.5-2 giây) và nguyên âm đơn ngắn (dứt khoát)</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem;">
          ${monophthongs.map(s => {
            const firstEx = Array.isArray(s.examples) && s.examples[0] ? (typeof s.examples[0] === 'object' ? s.examples[0] : { word: s.examples[0], ipa: '', meaning: '' }) : { word: s.name, ipa: '', meaning: '' };
            return `
              <div class="ipa-card" style="cursor: pointer; position: relative; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; text-align: center; background: var(--bg-surface); transition: all var(--transition-fast);" 
                   onclick="window.showSoundDetail('${s.symbol}')">
                <div style="font-size: 2rem; font-weight: 800; color: var(--primary); font-family: var(--font-mono); margin-bottom: 0.25rem;">
                  /${s.symbol}/
                </div>
                <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.15rem;">
                  ${firstEx.word}
                </div>
                <div style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.25rem;">
                  ${firstEx.ipa || ''}
                </div>
                <div style="font-size: 0.775rem; color: var(--secondary);">
                  ${firstEx.meaning || s.type.split('(')[0]}
                </div>
                
                <button class="btn-audio" style="position: absolute; top: 0.6rem; right: 0.6rem;" 
                        onclick="event.stopPropagation(); window.speakIpa('${firstEx.word}')" title="Nghe từ mẫu">
                  <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i>
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Diphthongs (Nguyên âm đôi) -->
      <div class="card" style="margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <div>
            <h3 style="margin: 0; color: var(--secondary);">2. Nguyên Âm Đôi (Diphthongs - 8 Âm)</h3>
            <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: var(--text-secondary);">Sự chuyển đổi mượt mà từ âm này sang âm khác trong cùng một âm tiết</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem;">
          ${diphthongs.map(s => {
            const firstEx = Array.isArray(s.examples) && s.examples[0] ? (typeof s.examples[0] === 'object' ? s.examples[0] : { word: s.examples[0], ipa: '', meaning: '' }) : { word: s.name, ipa: '', meaning: '' };
            return `
              <div class="ipa-card" style="cursor: pointer; position: relative; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; text-align: center; background: var(--bg-surface); transition: all var(--transition-fast);" 
                   onclick="window.showSoundDetail('${s.symbol}')">
                <div style="font-size: 2rem; font-weight: 800; color: var(--secondary); font-family: var(--font-mono); margin-bottom: 0.25rem;">
                  /${s.symbol}/
                </div>
                <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.15rem;">
                  ${firstEx.word}
                </div>
                <div style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.25rem;">
                  ${firstEx.ipa || ''}
                </div>
                <div style="font-size: 0.775rem; color: var(--primary);">
                  ${firstEx.meaning || ''}
                </div>
                
                <button class="btn-audio" style="position: absolute; top: 0.6rem; right: 0.6rem;" 
                        onclick="event.stopPropagation(); window.speakIpa('${firstEx.word}')" title="Nghe từ mẫu">
                  <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i>
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Consonants (Phụ âm) -->
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <div>
            <h3 style="margin: 0; color: var(--success-text);">3. Phụ Âm (Consonants - 24 Âm)</h3>
            <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: var(--text-secondary);">Gồm các cặp phụ âm vô thanh (Voiceless - rung dây thanh) và hữu thanh (Voiced - chỉ bật luồng hơi)</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem;">
          ${consonants.map(s => {
            const firstEx = Array.isArray(s.examples) && s.examples[0] ? (typeof s.examples[0] === 'object' ? s.examples[0] : { word: s.examples[0], ipa: '', meaning: '' }) : { word: s.name, ipa: '', meaning: '' };
            return `
              <div class="ipa-card" style="cursor: pointer; position: relative; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; text-align: center; background: var(--bg-surface); transition: all var(--transition-fast);" 
                   onclick="window.showSoundDetail('${s.symbol}')">
                <div style="font-size: 2rem; font-weight: 800; color: var(--success-text); font-family: var(--font-mono); margin-bottom: 0.25rem;">
                  /${s.symbol}/
                </div>
                <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.15rem;">
                  ${firstEx.word}
                </div>
                <div style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.25rem;">
                  ${firstEx.ipa || ''}
                </div>
                <div style="font-size: 0.775rem; color: var(--text-secondary);">
                  ${firstEx.meaning || s.voicing || ''}
                </div>
                
                <button class="btn-audio" style="position: absolute; top: 0.6rem; right: 0.6rem;" 
                        onclick="event.stopPropagation(); window.speakIpa('${firstEx.word}')" title="Nghe từ mẫu">
                  <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i>
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderSoundModalContent(sound) {
  if (!sound) return '';

  const examples = Array.isArray(sound.examples) ? sound.examples.map(e => typeof e === 'object' ? e : { word: e, ipa: '', meaning: '' }) : [];

  return `
    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); max-width: 620px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 2rem; position: relative; box-shadow: var(--shadow-xl);">
      <button onclick="window.closeSoundModal()" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-muted);">
        ✕
      </button>

      <div style="display: flex; align-items: center; gap: 1.25rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1.25rem;">
        <div style="font-size: 2rem; font-weight: 900; color: var(--primary); font-family: var(--font-mono); background: var(--bg-muted); min-width: 80px; height: 72px; padding: 0 0.85rem; display: inline-flex; align-items: center; justify-content: center; border-radius: var(--radius-md); border: 2px solid var(--primary); white-space: nowrap; line-height: 1; flex-shrink: 0; box-sizing: border-box;">
          /${sound.symbol}/
        </div>
        <div>
          <h3 style="margin: 0 0 0.35rem 0; font-size: 1.45rem; font-weight: 800; color: var(--text-primary);">${sound.name || sound.type}</h3>
          <span class="badge badge-secondary" style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">${sound.type || sound.voicing || 'IPA Sound'}</span>
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Khẩu Hình Miệng & Kỹ Thuật Phát Âm:</h4>
        <p style="font-size: 0.95rem; line-height: 1.7; background: var(--bg-muted); padding: 1rem; border-radius: var(--radius-md); color: var(--text-primary);">
          ${sound.description || 'Đặt lưỡi và môi theo đúng hướng dẫn khẩu hình chuẩn quốc tế.'}
        </p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="color: var(--secondary); margin-bottom: 0.75rem;">Các Từ Ví Dụ Điển Hình:</h4>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          ${examples.map(ex => `
            <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-surface); border: 1px solid var(--border-color); padding: 0.75rem 1rem; border-radius: var(--radius-md);">
              <div>
                <strong style="font-size: 1.1rem; color: var(--text-primary);">${ex.word}</strong>
                <span style="font-family: var(--font-mono); color: var(--text-muted); margin-left: 0.5rem;">${ex.ipa}</span>
                <div style="font-size: 0.85rem; color: var(--text-secondary);">${ex.meaning}</div>
              </div>
              <button class="btn btn-primary btn-sm" onclick="window.speakIpa('${ex.word}')">
                <i data-lucide="volume-2"></i> Nghe
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      ${sound.minimalPairs ? `
        <div style="margin-bottom: 1.5rem;">
          <h4 style="color: var(--primary); margin-bottom: 0.75rem;">Cặp Âm Dễ Nhầm Lẫn (Minimal Pairs):</h4>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${sound.minimalPairs.map(mp => `
              <div style="background: var(--bg-accent); padding: 0.75rem 1rem; border-radius: var(--radius-md); font-size: 0.9rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                  <div>
                    <strong style="color: var(--primary);">/${mp.sound1}/ ${mp.word1}</strong>
                    <span style="margin: 0 0.5rem;">vs</span>
                    <strong style="color: var(--secondary);">/${mp.sound2}/ ${mp.word2}</strong>
                  </div>
                  <div style="display: flex; gap: 0.25rem;">
                    <button class="btn btn-secondary btn-sm" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;" onclick="window.speakIpa('${mp.word1}')">${mp.word1}</button>
                    <button class="btn btn-secondary btn-sm" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;" onclick="window.speakIpa('${mp.word2}')">${mp.word2}</button>
                  </div>
                </div>
                <div style="font-size: 0.8rem; color: var(--text-secondary); font-style: italic;">
                  ${mp.note}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${sound.spellingRules ? `
        <div>
          <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Dấu Hiệu Chính Tả (Spelling Rules):</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
            ${sound.spellingRules.map(r => `<span class="badge badge-muted">${r}</span>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderStressTab() {
  return `
    <div style="display: flex; flex-direction: column; gap: 2.5rem;">
      <!-- Section 1: Word Stress Rules -->
      <div class="card" style="padding: 2rem;">
        <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.5rem;">
          <span class="badge badge-primary">PHẦN 1: TRỌNG ÂM TỪ</span>
          <h3 style="margin: 0.35rem 0 0 0; color: var(--primary); font-size: 1.45rem;">10 Quy Tắc Đánh Trọng Âm Cốt Lõi VSTEP B1</h3>
          <p style="margin: 0.25rem 0 0 0; color: var(--text-secondary); font-size: 0.925rem;">Các quy tắc nhận diện vị trí trọng âm dựa theo số âm tiết, hậu tố và loại từ.</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          ${(wordStressRules || []).map(r => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 5px solid var(--primary); border-radius: var(--radius-md); padding: 1.5rem;">
              <h4 style="color: var(--text-primary); margin: 0 0 0.5rem 0; font-size: 1.15rem;">${r.ruleName}</h4>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.6;">${r.explanation}</p>
              
              <!-- Examples Grid with Audio buttons -->
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; margin-bottom: 1rem;">
                ${(r.examples || []).map(ex => `
                  <div style="background: var(--bg-muted); padding: 0.75rem 1rem; border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
                    <div>
                      <strong style="color: var(--primary); font-size: 1rem;">${ex.word}</strong>
                      <span style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem; margin-left: 0.25rem;">${ex.ipa}</span>
                      <div style="font-size: 0.8rem; color: var(--text-secondary);">${ex.meaning}</div>
                    </div>
                    <button class="btn btn-secondary btn-sm" style="padding: 0.25rem 0.5rem;" onclick="window.speakIpa('${ex.word}')" title="Nghe trọng âm">
                      <i data-lucide="volume-2" style="width: 14px; height: 14px;"></i>
                    </button>
                  </div>
                `).join('')}
              </div>

              ${r.exceptions && r.exceptions.length > 0 ? `
                <div style="background: var(--warning-light, rgba(245,158,11,0.1)); padding: 0.65rem 1rem; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--warning-text, #b45309);">
                  <strong>Trường hợp ngoại lệ cần nhớ:</strong> ${r.exceptions.join(' • ')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Section 2: Sentence Intonation Patterns -->
      <div class="card" style="padding: 2rem;">
        <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.5rem;">
          <span class="badge badge-secondary">PHẦN 2: NGỮ ĐIỆU CÂU</span>
          <h3 style="margin: 0.35rem 0 0 0; color: var(--secondary); font-size: 1.45rem;">4 Quy Tắc Ngữ Điệu Câu Chuẩn Bản Ngữ</h3>
          <p style="margin: 0.25rem 0 0 0; color: var(--text-secondary); font-size: 0.925rem;">Biến chuyển cao độ âm thanh giúp câu nói tự nhiên, truyền tải cảm xúc và thái độ chính xác.</p>
        </div>

        <div class="grid-2" style="gap: 1.5rem;">
          ${(intonationRules || []).map(p => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-top: 4px solid var(--secondary); border-radius: var(--radius-md); padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <h4 style="color: var(--text-primary); margin: 0 0 0.5rem 0; font-size: 1.15rem;">${p.name}</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem; line-height: 1.6;">${p.usage}</p>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.6;">${p.explanation}</p>
                
                <div style="background: var(--bg-accent); padding: 0.85rem 1rem; border-radius: var(--radius-sm); font-size: 0.95rem; margin-bottom: 1rem; line-height: 1.7;">
                  <strong style="color: var(--primary);">Mẫu câu minh họa:</strong>
                  <div style="margin-top: 0.25rem; font-weight: 600; color: var(--text-primary);">${p.example}</div>
                </div>
              </div>

              ${renderAudioPlayerComponent(`int-${p.id}`, p.audioSentence || p.example, `Audio Mẫu Ngữ Điệu`)}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderConnectedTab() {
  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--primary); padding: 1.5rem 2rem;">
        <h3 style="color: var(--primary); margin: 0 0 0.5rem 0; font-size: 1.45rem;">5 Hiện Tượng Nối Âm & Biến Âm Trong Giao Tiếp (Connected Speech)</h3>
        <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">Hiểu sâu và luyện tập nối âm giúp bạn nghe hiểu người bản xứ dễ dàng và nâng điểm Fluency & Pronunciation trong bài thi Nói VSTEP B1.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.75rem;">
        ${(connectedSpeechRules || []).map(sec => `
          <div class="card" style="padding: 2rem; border-left: 4px solid var(--primary);">
            <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.25rem;">
              <h3 style="color: var(--text-primary); margin: 0 0 0.35rem 0; font-size: 1.25rem;">${sec.title}</h3>
              <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${sec.description}</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              ${(sec.rules || []).map(r => `
                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                    <strong style="color: var(--secondary); font-size: 1rem;">${r.name}</strong>
                    ${r.audio ? `
                      <button class="btn btn-secondary btn-sm" onclick="window.speakIpa('${r.audio}')">
                        <i data-lucide="volume-2"></i> Nghe mẫu cả cụm
                      </button>
                    ` : ''}
                  </div>
                  
                  ${r.explanation ? `<p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0 0 0.75rem 0;">${r.explanation}</p>` : ''}

                  <div style="background: var(--bg-muted); padding: 0.85rem 1rem; border-radius: var(--radius-sm); font-size: 0.95rem; font-family: var(--font-mono); color: var(--primary);">
                    ${r.example}
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

function renderMistakesTab() {
  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--danger); padding: 1.5rem 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="badge badge-danger" style="margin-bottom: 0.35rem;">KHẮC PHỤC TRIỆT ĐỂ</span>
            <h3 style="color: var(--danger-text); margin: 0 0 0.25rem 0; font-size: 1.45rem;">10 Lỗi Phát Âm Kinh Điển Người Việt & Phương Pháp Khắc Phục</h3>
            <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">So sánh trực quan giữa thói quen đọc sai tiếng Việt và cách chuẩn hóa bản ngữ kèm âm thanh đối chiếu.</p>
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.75rem;">
        ${(vietnameseCommonMistakes || []).map((m, idx) => `
          <div class="card" style="padding: 2rem; border-left: 5px solid var(--danger);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
              <h3 style="margin: 0; color: var(--danger-text); font-size: 1.25rem;">${m.error}</h3>
              <span class="badge badge-danger">Lỗi ${idx + 1}</span>
            </div>

            <div style="margin-bottom: 1.25rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
              <div><strong>Nguyên nhân từ khẩu hình tiếng Việt:</strong> ${m.cause}</div>
              <div style="color: var(--text-muted); margin-top: 0.25rem;"><strong>Nguy cơ thi VSTEP:</strong> ${m.danger}</div>
            </div>

            <!-- Before & After Comparison Grid -->
            <div class="grid-2" style="gap: 1rem; margin-bottom: 1.25rem;">
              <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.3); padding: 1.25rem; border-radius: var(--radius-md);">
                <span class="badge badge-danger" style="margin-bottom: 0.5rem;">✗ Thói quen phát âm sai</span>
                <div style="font-size: 1.05rem; font-weight: 600; color: var(--danger-text); line-height: 1.5;">
                  ${m.wrongExample}
                </div>
              </div>

              <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); padding: 1.25rem; border-radius: var(--radius-md);">
                <span class="badge badge-success" style="margin-bottom: 0.5rem;">✓ Chuẩn hóa bản ngữ</span>
                <div style="font-size: 1.05rem; font-weight: 700; color: var(--success-text); line-height: 1.5;">
                  ${m.correctExample}
                </div>
              </div>
            </div>

            ${m.rulesSummary ? `
              <div style="background: var(--bg-muted); padding: 1rem 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.9rem; line-height: 1.7;">
                <strong style="color: var(--primary);">Quy tắc ghi nhớ nhanh:</strong>
                <ul style="margin: 0.35rem 0 0 0; padding-left: 1.25rem;">
                  ${m.rulesSummary.map(r => `<li>${r}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- Practice Words with Audio Controls -->
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem 1.25rem; border-radius: var(--radius-md);">
              <div>
                <strong style="color: var(--secondary); font-size: 0.9rem;">Từ luyện tập chuẩn:</strong>
                <span style="font-family: var(--font-mono); color: var(--text-primary); margin-left: 0.5rem;">${(m.practiceWords || []).join(' • ')}</span>
              </div>

              ${m.audio ? `
                <button class="btn btn-primary btn-sm" onclick="window.speakIpa('${m.audio}')">
                  <i data-lucide="volume-2"></i> Nghe các từ mẫu
                </button>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
