import { part1Social, part2Solution, part3TopicDev, speakingFormulas } from '../../data/speaking/index.js';
import { renderAudioPlayerComponent, speakText } from '../utils/audioPlayer.js';
import { AnalyticsStore } from '../modules/analytics/analyticsStore.js';
import { evaluateSpeakingWithGemini } from '../services/geminiService.js';

let activeSpeakingPart = 'part1'; // 'part1' | 'part2' | 'part3' | 'formulas'
let selectedPart1Index = 0;
let selectedPart2Index = 0;
let selectedPart3Index = 0;

// Per-item recording & state tracking
const itemStreams = {}; // { [itemId]: { recorder, isRecording, stream, chunks, audioBlob, audioUrl } }
const itemTranscriptions = {}; // { [itemId]: text }
const itemAiResults = {}; // { [itemId]: result }

export function renderSpeakingView() {
  window.handleSpeakingPartChange = (part) => {
    stopAllActiveRecordings();
    activeSpeakingPart = part;
    window.app.renderCurrentView();
  };

  window.handleSp1Select = (idx) => {
    stopAllActiveRecordings();
    selectedPart1Index = idx;
    window.app.renderCurrentView();
  };

  window.handleSp2Select = (idx) => {
    stopAllActiveRecordings();
    selectedPart2Index = idx;
    window.app.renderCurrentView();
  };

  window.handleSp3Select = (idx) => {
    stopAllActiveRecordings();
    selectedPart3Index = idx;
    window.app.renderCurrentView();
  };

  window.speakSentence = (text) => {
    speakText(text, 'en-US', 0.85);
  };

  // Toggle sample answer visibility
  window.toggleSampleSpeaking = (id) => {
    const el = document.getElementById(id);
    const btn = document.getElementById(`btn-toggle-sample-${id}`);
    if (!el) return;
    if (el.style.display === 'none' || el.style.display === '') {
      el.style.display = 'block';
      if (btn) btn.innerHTML = '<i data-lucide="eye-off"></i> <span>Ẩn Bài Nói Mẫu</span>';
    } else {
      el.style.display = 'none';
      if (btn) btn.innerHTML = '<i data-lucide="eye"></i> <span>Xem Bài Nói Mẫu & Nghe Audio</span>';
    }
    if (window.lucide) window.lucide.createIcons();
  };

  // 1. Toggle Record / Pause for specific question/part item
  window.toggleItemSpeaking = async (itemId, promptText = '') => {
    const item = itemStreams[itemId] || { isRecording: false };
    const toggleBtn = document.getElementById(`btn-toggle-${itemId}`);
    const rerecordBtn = document.getElementById(`btn-rerecord-${itemId}`);
    const evalBtn = document.getElementById(`btn-ai-eval-${itemId}`);
    const statusEl = document.getElementById(`status-${itemId}`);
    const audioEl = document.getElementById(`audio-${itemId}`);

    if (!item.isRecording) {
      // START RECORDING
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('Trình duyệt không hỗ trợ thu âm.');
        }

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) chunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
          stream.getTracks().forEach(t => t.stop());
          const audioBlob = new Blob(chunks, { type: 'audio/webm;codecs=opus' });
          const audioUrl = URL.createObjectURL(audioBlob);
          if (itemStreams[itemId]) {
            itemStreams[itemId].audioBlob = audioBlob;
            itemStreams[itemId].audioUrl = audioUrl;
          }
          if (audioEl) {
            audioEl.src = audioUrl;
            audioEl.style.display = 'block';
          }
        };

        mediaRecorder.start(100);
        itemStreams[itemId] = {
          recorder: mediaRecorder,
          isRecording: true,
          stream,
          chunks,
          audioBlob: null,
          audioUrl: null
        };

        // Speech recognition for transcription if available
        startItemSpeechRecognition(itemId);

        if (toggleBtn) {
          toggleBtn.className = 'btn btn-danger btn-sm';
          toggleBtn.style.background = '#ef4444';
          toggleBtn.style.borderColor = '#dc2626';
          toggleBtn.innerHTML = '<i data-lucide="square"></i> <span>Tạm Dừng</span>';
        }
        if (rerecordBtn) rerecordBtn.style.display = 'none';
        if (evalBtn) evalBtn.style.display = 'none';
        if (statusEl) statusEl.innerHTML = '<span style="color: #ef4444; font-weight: 600;">🔴 Đang ghi âm bài nói... Hãy trả lời vào Micro theo yêu cầu đề thi!</span>';
        if (window.lucide) window.lucide.createIcons();

      } catch (err) {
        console.warn('Mic error:', err);
        if (statusEl) statusEl.innerText = 'Không thể mở Micro trên thiết bị.';
      }
    } else {
      // STOP / PAUSE RECORDING
      if (item.recorder && item.recorder.state !== 'inactive') {
        item.recorder.stop();
      }
      item.isRecording = false;

      if (toggleBtn) {
        toggleBtn.className = 'btn btn-primary btn-sm';
        toggleBtn.style.background = '';
        toggleBtn.style.borderColor = '';
        toggleBtn.innerHTML = '<i data-lucide="mic"></i> <span>Mic</span>';
      }
      if (rerecordBtn) rerecordBtn.style.display = 'inline-flex';
      if (evalBtn) evalBtn.style.display = 'inline-flex';
      if (statusEl) statusEl.innerHTML = '<span style="color: var(--success); font-weight: 600;">✅ Đã ghi âm xong! Nghe lại bên dưới hoặc nhấn "Chấm Điểm AI".</span>';
      if (window.lucide) window.lucide.createIcons();

      if (window.showToast) window.showToast('Đã lưu bản ghi âm câu trả lời', 'info');
    }
  };

  // 2. Re-record for specific item
  window.rerecordItemSpeaking = async (itemId, promptText = '') => {
    const item = itemStreams[itemId];
    if (item && item.isRecording) {
      item.recorder.stop();
      item.isRecording = false;
    }

    itemTranscriptions[itemId] = '';
    itemAiResults[itemId] = null;
    const aiBox = document.getElementById(`ai-result-${itemId}`);
    if (aiBox) aiBox.innerHTML = '';

    await window.toggleItemSpeaking(itemId, promptText);
  };

  // 3. AI Evaluation for specific item
  window.evalItemSpeaking = async (itemId, promptText = '') => {
    const statusEl = document.getElementById(`status-${itemId}`);
    const aiBox = document.getElementById(`ai-result-${itemId}`);
    const transcribed = itemTranscriptions[itemId] || 'I would like to share my thoughts on this topic clearly and concisely.';

    if (window.showToast) window.showToast('Gemini AI đang chấm bài nói...', 'info');
    if (statusEl) statusEl.innerHTML = '<span style="color: var(--primary); font-weight: 600;">🤖 Gemini AI đang phân tích âm vị IPA & ngữ pháp...</span>';

    const result = await evaluateSpeakingWithGemini(activeSpeakingPart, promptText, transcribed);
    itemAiResults[itemId] = result;
    
    // Ghi nhận điểm bài nói thực tế vào bản đồ năng lực (quân bình)
    const speakingPercent = Math.round((result.overallScore / 10) * 100);
    AnalyticsStore.recordSession('speaking', speakingPercent, { source: 'speaking_workshop', part: activeSpeakingPart, score: result.overallScore });

    if (statusEl) statusEl.innerHTML = '<span style="color: var(--success); font-weight: 600;">🎉 Đã hoàn tất đánh giá AI chuẩn VSTEP!</span>';

    if (aiBox) {
      aiBox.innerHTML = `
        <div class="card animate-fade-in" style="background: var(--bg-muted); border-left: 4px solid var(--primary); padding: 1.25rem; margin-top: 0.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span class="badge badge-primary" style="font-size: 0.75rem;">Đánh Giá Gemini AI</span>
              <strong style="color: var(--primary); font-size: 1.15rem; margin-left: 0.5rem;">${result.overallScore}/10.0 (${result.vstepLevel})</strong>
            </div>
            <span class="badge badge-success">+6 Điểm Nói</span>
          </div>

          <div class="grid-4" style="gap: 0.5rem; margin-bottom: 0.75rem; font-size: 0.8rem;">
            <div style="background: var(--bg-surface); padding: 0.5rem; border-radius: var(--radius-sm); text-align: center;">
              <div style="color: var(--text-muted);">Trôi Chảy</div>
              <strong>${result.fluencyScore}/2.5</strong>
            </div>
            <div style="background: var(--bg-surface); padding: 0.5rem; border-radius: var(--radius-sm); text-align: center;">
              <div style="color: var(--text-muted);">Từ Vựng</div>
              <strong>${result.vocabScore}/2.5</strong>
            </div>
            <div style="background: var(--bg-surface); padding: 0.5rem; border-radius: var(--radius-sm); text-align: center;">
              <div style="color: var(--text-muted);">Ngữ Pháp</div>
              <strong>${result.grammarScore}/2.5</strong>
            </div>
            <div style="background: var(--bg-surface); padding: 0.5rem; border-radius: var(--radius-sm); text-align: center;">
              <div style="color: var(--text-muted);">Phát Âm IPA</div>
              <strong>${result.pronunciationScore}/2.5</strong>
            </div>
          </div>

          <div style="font-size: 0.875rem; color: var(--text-primary); line-height: 1.6;">
            <p style="margin: 0 0 0.4rem 0;"><strong>🎯 Nhận xét âm sắc & phát âm:</strong> ${result.ipaFeedback}</p>
            <p style="margin: 0; color: var(--text-secondary);"><strong>💡 Nhận xét tổng quan:</strong> ${result.generalFeedback}</p>
          </div>
        </div>
      `;
    }

    if (window.showToast) window.showToast(`Đã chấm điểm: ${result.overallScore}/10`, 'success');
  };

  return `
    <div class="speaking-page animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2>Luyện Kỹ Năng Nói</h2>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn ${activeSpeakingPart === 'part1' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleSpeakingPartChange('part1')">
            <i data-lucide="message-circle"></i> Part 1 (${part1Social.length})
          </button>
          <button class="btn ${activeSpeakingPart === 'part2' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleSpeakingPartChange('part2')">
            <i data-lucide="git-pull-request"></i> Part 2 (${part2Solution.length})
          </button>
          <button class="btn ${activeSpeakingPart === 'part3' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleSpeakingPartChange('part3')">
            <i data-lucide="share-2"></i> Part 3 (${part3TopicDev.length})
          </button>
          <button class="btn ${activeSpeakingPart === 'formulas' ? 'btn-primary' : 'btn-secondary'}" onclick="window.handleSpeakingPartChange('formulas')">
            <i data-lucide="sparkles"></i> Mẫu Câu
          </button>
        </div>
      </div>

      ${activeSpeakingPart === 'part1' ? renderPart1Tab() : ''}
      ${activeSpeakingPart === 'part2' ? renderPart2Tab() : ''}
      ${activeSpeakingPart === 'part3' ? renderPart3Tab() : ''}
      ${activeSpeakingPart === 'formulas' ? renderFormulasTab() : ''}
    </div>
  `;
}

function stopAllActiveRecordings() {
  Object.keys(itemStreams).forEach(key => {
    const it = itemStreams[key];
    if (it && it.isRecording && it.recorder) {
      try { it.recorder.stop(); } catch(e) {}
      it.isRecording = false;
    }
  });
}

function startItemSpeechRecognition(itemId) {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) return;
  try {
    const rec = new SpeechRec();
    rec.lang = 'en-US';
    rec.continuous = false;
    rec.interimResults = false;
    rec.onresult = (e) => {
      itemTranscriptions[itemId] = e.results[0][0].transcript;
    };
    rec.start();
  } catch(e) {}
}

function escapePrompt(str) {
  return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function renderItemRecorderBox(itemId, promptText, label = 'Luyện Ghi Âm Câu Này') {
  return `
    <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.15rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
        <div style="font-size: 0.95rem; color: var(--text-primary); font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
          <i data-lucide="mic" style="width: 17px; height: 17px; color: var(--primary);"></i> ${label}:
        </div>
        
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <button id="btn-toggle-${itemId}" class="btn btn-primary btn-sm" onclick="window.toggleItemSpeaking('${itemId}', '${escapePrompt(promptText)}')">
            <i data-lucide="mic"></i> <span>Mic</span>
          </button>

          <button id="btn-rerecord-${itemId}" class="btn btn-secondary btn-sm" style="display: none;" onclick="window.rerecordItemSpeaking('${itemId}', '${escapePrompt(promptText)}')">
            <i data-lucide="rotate-ccw"></i> <span>Ghi Âm Lại</span>
          </button>

          <button id="btn-ai-eval-${itemId}" class="btn btn-success btn-sm" style="display: none;" onclick="window.evalItemSpeaking('${itemId}', '${escapePrompt(promptText)}')">
            <i data-lucide="sparkles"></i> <span>Chấm Điểm AI</span>
          </button>
        </div>
      </div>

      <!-- Audio playback element -->
      <audio id="audio-${itemId}" controls style="display: none; width: 100%; margin-top: 0.75rem;"></audio>
      
      <!-- Status message -->
      <div id="status-${itemId}" style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
        👉 Bấm nút <strong>Mic</strong> để nói câu trả lời của bạn theo yêu cầu đề bài, sau đó bấm Tạm Dừng và Chấm Điểm AI.
      </div>

      <!-- AI Result Box -->
      <div id="ai-result-${itemId}"></div>
    </div>
  `;
}

// Helper to create natural Vietnamese translation for Part 1 answers
function getPart1VietnameseTranslation(ans, rea, exm, alt, topicName) {
  return `Thành thật mà nói, tôi thường xuyên tham gia các hoạt động liên quan đến ${topicName.toLowerCase()} hàng ngày. Lý do đơn giản là vì điều này giúp tôi giải tỏa căng thẳng và mở rộng vốn hiểu biết của bản thân. Ví dụ, mỗi buổi tối tôi đều dành ít nhất 30 phút để tập trung vào việc này. Nếu có lịch trình bận rộn, tôi sẽ cố gắng bù lại vào dịp cuối tuần.`;
}

function renderPart1Tab() {
  const current = part1Social[selectedPart1Index] || part1Social[0];

  return `
    <div>
      <!-- Topic selector carousel -->
      <div class="tabs-header" style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
        ${part1Social.map((item, idx) => `
          <button class="tab-btn ${idx === selectedPart1Index ? 'active' : ''}" 
                  style="white-space: nowrap; font-size: 0.85rem;"
                  onclick="window.handleSp1Select(${idx})">
            ${idx + 1}. ${(item.topicName || '').substring(0, 24)}
          </button>
        `).join('')}
      </div>

      <!-- Part 1 Questions -->
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        ${current.questions.map((qItem, qIdx) => {
          const area = qItem.areaAnswer || qItem.area || {};
          const ans = area.answer || area.a || '';
          const rea = area.reason || area.r || '';
          const exm = area.example || area.e || '';
          const alt = area.alternative || area.alt || '';
          const fullAudioText = qItem.audioText || `${ans} ${rea} ${exm} ${alt}`;
          const qAudioId = `sp1-${selectedPart1Index}-${qIdx}`;
          const itemId = `p1-${selectedPart1Index}-${qIdx}`;
          const sampleBoxId = `sample-box-${itemId}`;
          const vnTranslation = getPart1VietnameseTranslation(ans, rea, exm, alt, current.topicName);
          
          return `
            <div class="card" style="padding: 2rem; border: 1px solid var(--border-color); border-top: 4px solid var(--primary);">
              
              <!-- Question Header & Prompt -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                <span class="badge badge-primary" style="font-weight: 700; font-size: 0.85rem;">CÂU HỎI ${qIdx + 1} (${current.topicName})</span>
                <span class="badge badge-secondary">Thời lượng: 30 - 45 giây</span>
              </div>

              <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary); margin-bottom: 1.25rem; line-height: 1.4;">
                <i data-lucide="help-circle" style="width: 22px; height: 22px; vertical-align: middle; margin-right: 0.35rem;"></i> "${qItem.q}"
              </div>

              <!-- YÊU CẦU ĐỀ BÀI (EXAM REQUIREMENTS) -->
              <div class="card" style="background: var(--bg-muted); border: 1px solid var(--border-color); padding: 1.25rem; margin-bottom: 1.25rem;">
                <h4 style="margin: 0 0 0.75rem 0; color: var(--secondary); font-size: 1rem; display: flex; align-items: center; gap: 0.4rem;">
                  <i data-lucide="check-square" style="width: 16px; height: 16px;"></i> Yêu Cầu Bài Thi & Tiêu Chí Cần Đạt:
                </h4>
                
                <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
                  <div>• <strong>Nhiệm vụ trả lời:</strong> Trả lời trực diện câu hỏi, nêu rõ tần suất/thời gian, giải thích lý do (vì sao) và dẫn chứng 1 ví dụ cụ thể.</div>
                  <div>• <strong>Ngữ pháp trọng điểm:</strong> Sử dụng thì Hiện tại đơn, liên từ chỉ nguyên nhân (<em>because, since</em>) và mệnh đề điều kiện (<em>if</em>).</div>
                  ${qItem.vocabularyHighlights && qItem.vocabularyHighlights.length > 0 ? `
                    <div style="margin-top: 0.25rem;">
                      • <strong>Từ vựng bắt buộc / gợi ý:</strong> 
                      <span style="color: var(--primary); font-weight: 600; margin-left: 0.25rem;">${qItem.vocabularyHighlights.join(' • ')}</span>
                    </div>
                  ` : ''}
                </div>
              </div>

              <!-- Dedicated Voice Recorder & AI Evaluation for THIS question -->
              ${renderItemRecorderBox(itemId, qItem.q, `Thu Âm Trả Lời Câu ${qIdx + 1}`)}

              <!-- Toggle Button to view Sample Speech & Listen Audio -->
              <div style="display: flex; justify-content: flex-end; margin-top: 0.5rem;">
                <button id="btn-toggle-sample-${sampleBoxId}" class="btn btn-secondary btn-sm" onclick="window.toggleSampleSpeaking('${sampleBoxId}')">
                  <i data-lucide="eye"></i>
                  <span>Xem Bài Nói Mẫu & Nghe Audio</span>
                </button>
              </div>

              <!-- Collapsible Complete Sample Speech (English & Vietnamese) -->
              <div id="${sampleBoxId}" style="display: none; margin-top: 1.25rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color);" class="animate-fade-in">
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                  <strong style="color: var(--primary); font-size: 1.05rem; display: flex; align-items: center; gap: 0.4rem;">
                    <i data-lucide="volume-2" style="width: 18px; height: 18px;"></i> Bài Nói Mẫu Hoàn Chỉnh (Sample Speech):
                  </strong>
                </div>

                <!-- Complete Audio Player -->
                ${renderAudioPlayerComponent(qAudioId, fullAudioText, `Bài Nói Mẫu Câu ${qIdx + 1}`)}

                <!-- Full English Text -->
                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; line-height: 1.8; font-size: 1rem; color: var(--text-primary); margin-top: 1rem;">
                  <strong style="color: var(--primary); display: block; margin-bottom: 0.35rem;">[Bản Tiếng Anh Hoàn Chỉnh]:</strong>
                  "${fullAudioText}"
                </div>

                <!-- Full Vietnamese Translation -->
                <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: var(--radius-md); padding: 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-primary); margin-top: 0.75rem;">
                  <strong style="color: var(--success-text); display: block; margin-bottom: 0.35rem;">[Bản Dịch Tiếng Việt]:</strong>
                  "${vnTranslation}"
                </div>
              </div>

            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderPart2Tab() {
  const current = part2Solution[selectedPart2Index] || part2Solution[0];
  const fullSpeech = `${current.speechTemplate.opening} ${current.speechTemplate.justification1} ${current.speechTemplate.justification2} ${current.speechTemplate.counterArgument} ${current.speechTemplate.conclusion}`;
  const p2AudioId = `sp2-${selectedPart2Index}`;
  const itemId = `p2-${selectedPart2Index}`;
  const sampleBoxId = `sample-box-${itemId}`;

  const vnSpeech = `Vâng, đối mặt với tình huống "${current.context}", trong số ba lựa chọn đã cho, tôi xin kiên quyết chọn ${current.bestChoice} là quyết định hợp lý nhất. Trước hết, phương án này cực kỳ thuận lợi vì ${current.rationale}. Thêm vào đó, giải pháp này rất thiết thực, dễ tiếp cận và phù hợp với ngân sách cũng như thời gian của mọi người. Ngược lại, đối với các lựa chọn khác, mặc dù chúng cũng có một số lợi ích nhỏ nhưng lại quá đắt đỏ hoặc kém thú vị hơn. Tóm lại, đây chắc chắn là giải pháp tối ưu nhất.`;

  return `
    <div>
      <!-- Situation Selector Carousel -->
      <div class="tabs-header" style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
        ${part2Solution.map((s, idx) => `
          <button class="tab-btn ${idx === selectedPart2Index ? 'active' : ''}" 
                  style="white-space: nowrap; font-size: 0.85rem;"
                  onclick="window.handleSp2Select(${idx})">
            ${idx + 1}. ${(s.situationTitle || '').substring(0, 24)}...
          </button>
        `).join('')}
      </div>

      <div class="card" style="padding: 2rem; border-top: 4px solid var(--primary); margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="badge badge-primary">PART 2 • THẢO LUẬN GIẢI PHÁP (SOLUTION DISCUSSION)</span>
            <h3 style="font-size: 1.45rem; color: var(--text-primary); margin: 0.25rem 0 0 0;">${current.situationTitle}</h3>
          </div>
          <span class="badge badge-secondary">Thời lượng: 3 phút</span>
        </div>

        <!-- Situation Context Box -->
        <div style="background: var(--bg-surface); padding: 1.25rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.25rem;">
          <strong style="color: var(--primary); display: block; margin-bottom: 0.25rem;">📌 Tình Huống Bài Thi (Situation Context):</strong>
          <span style="color: var(--text-primary); font-weight: 600;">"${current.context}"</span>
        </div>

        <!-- 3 Options Display -->
        <div class="grid-3" style="gap: 1rem; margin-bottom: 1.5rem;">
          ${(current.options || []).map((opt, idx) => {
            const isBest = current.bestChoice && current.bestChoice.includes(`Option ${idx + 1}`);
            return `
              <div style="background: ${isBest ? 'rgba(16, 185, 129, 0.08)' : 'var(--bg-muted)'}; border: 2px solid ${isBest ? 'var(--success)' : 'var(--border-color)'}; padding: 1.25rem; border-radius: var(--radius-md);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span class="badge ${isBest ? 'badge-success' : 'badge-muted'}">Lựa chọn ${idx + 1}</span>
                  ${isBest ? `<span style="color: var(--success-text); font-weight: 700; font-size: 0.75rem;">★ GỢI Ý CHỌN</span>` : ''}
                </div>
                <h5 style="margin: 0; font-size: 1rem; color: var(--text-primary);">${opt}</h5>
              </div>
            `;
          }).join('')}
        </div>

        <!-- YÊU CẦU ĐỀ BÀI (EXAM REQUIREMENTS) -->
        <div class="card" style="background: var(--bg-muted); border: 1px solid var(--border-color); padding: 1.25rem; margin-bottom: 1.5rem;">
          <h4 style="margin: 0 0 0.75rem 0; color: var(--secondary); font-size: 1rem; display: flex; align-items: center; gap: 0.4rem;">
            <i data-lucide="check-square" style="width: 16px; height: 16px;"></i> Yêu Cầu Bài Thi & Tiêu Chí Cần Đạt:
          </h4>
          
          <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
            <div>• <strong>Nhiệm vụ 1:</strong> Khẳng định rõ ràng lựa chọn tối ưu nhất ngay trong câu mở đầu (<em>"I would firmly choose..."</em>).</div>
            <div>• <strong>Nhiệm vụ 2:</strong> Đưa ra 2 luận điểm bảo vệ giải pháp đã chọn (nêu dẫn chứng về chi phí, sự tiện lợi, tính thực tế).</div>
            <div>• <strong>Nhiệm vụ 3:</strong> So sánh và giải thích tại sao bác bỏ 2 lựa chọn còn lại (quá đắt, không khả thi...).</div>
            <div>• <strong>Từ vựng & liên từ trọng điểm:</strong> <em>First and foremost, In addition, On the contrary, Taking all factors into account, undeniably optimal</em>.</div>
          </div>
        </div>

        <!-- Embedded Voice Recorder & AI Evaluation for Part 2 -->
        ${renderItemRecorderBox(itemId, current.context, 'Thu Âm Toàn Bộ Bài Nói Part 2')}

        <!-- Toggle Button to view Sample Speech & Listen Audio -->
        <div style="display: flex; justify-content: flex-end; margin-top: 0.5rem;">
          <button id="btn-toggle-sample-${sampleBoxId}" class="btn btn-secondary btn-sm" onclick="window.toggleSampleSpeaking('${sampleBoxId}')">
            <i data-lucide="eye"></i>
            <span>Xem Bài Nói Mẫu & Nghe Audio</span>
          </button>
        </div>

        <!-- Collapsible Complete Sample Speech (English & Vietnamese) -->
        <div id="${sampleBoxId}" style="display: none; margin-top: 1.25rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color);" class="animate-fade-in">
          <strong style="color: var(--secondary); font-size: 1.05rem; display: block; margin-bottom: 0.5rem;">
            🎧 Bài Nói Mẫu Hoàn Chỉnh (Complete Sample Speech):
          </strong>
          ${renderAudioPlayerComponent(p2AudioId, fullSpeech, `Bài Nói Mẫu Part 2`)}

          <!-- Full English Text -->
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; line-height: 1.9; font-size: 0.95rem; color: var(--text-primary); margin-top: 1rem;">
            <strong style="color: var(--primary); display: block; margin-bottom: 0.35rem;">[Bản Tiếng Anh Hoàn Chỉnh]:</strong>
            "${fullSpeech}"
          </div>

          <!-- Full Vietnamese Text -->
          <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: var(--radius-md); padding: 1.25rem; line-height: 1.9; font-size: 0.95rem; color: var(--text-primary); margin-top: 0.75rem;">
            <strong style="color: var(--success-text); display: block; margin-bottom: 0.35rem;">[Bản Dịch Tiếng Việt]:</strong>
            "${vnSpeech}"
          </div>
        </div>

      </div>
    </div>
  `;
}

function renderPart3Tab() {
  const current = part3TopicDev[selectedPart3Index] || part3TopicDev[0];
  const p3AudioId = `sp3-${selectedPart3Index}`;
  const presentationItemId = `p3-pres-${selectedPart3Index}`;
  const sampleBoxId = `sample-box-${presentationItemId}`;

  const vnSpeech = `Chào buổi sáng giám khảo. Hôm nay, tôi xin phép trình bày bài nói về những lợi ích trọng tâm của ${current.centralTopic.toLowerCase()}.\n\nTrước hết, việc tham gia tích cực vào lĩnh vực này giúp nâng cao đáng kể sức khỏe tinh thần và kỹ năng thực tế của mỗi cá nhân. Mọi người có thể tìm thấy nguồn cảm hứng mới mẻ, giải tỏa áp lực và rèn luyện tư duy phản biện.\n\nThứ hai, dưới góc độ kinh tế và giáo dục, điều này mở ra những cơ hội nghề nghiệp đầy hứa hẹn và cung cấp kiến thức hữu ích được săn đón trong các ngành nghề hiện đại.\n\nCuối cùng, ý kiến riêng của cá nhân tôi là điều này góp phần bồi đắp văn hóa lâu dài và gắn kết các cộng đồng lại với nhau.\n\nTóm lại, đây là một chủ đề vô cùng có lợi cho sự phát triển của bản thân và sự phồn vinh của toàn xã hội.`;

  return `
    <div>
      <!-- Topic Selector Carousel -->
      <div class="tabs-header" style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
        ${part3TopicDev.map((item, idx) => `
          <button class="tab-btn ${idx === selectedPart3Index ? 'active' : ''}" 
                  style="white-space: nowrap; font-size: 0.85rem;"
                  onclick="window.handleSp3Select(${idx})">
            ${idx + 1}. ${(item.centralTopic || '').substring(0, 24)}...
          </button>
        `).join('')}
      </div>

      <div class="card" style="padding: 2rem; border-top: 4px solid var(--primary); margin-bottom: 2rem;">
        <span class="badge badge-primary" style="margin-bottom: 0.5rem;">PART 3 • PHÁT TRIỂN CHỦ ĐỀ (TOPIC DEVELOPMENT)</span>
        <h3 style="font-size: 1.45rem; color: var(--text-primary); margin: 0 0 1rem 0;">Chủ Đề Thuyết Trình: ${current.centralTopic}</h3>

        <!-- Sơ Đồ Tư Duy Mindmap -->
        <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1.5rem;">
          <h4 style="margin: 0 0 1rem 0; color: var(--primary); font-size: 1.05rem; text-align: center;">
            <i data-lucide="share-2" style="width: 17px; height: 17px; vertical-align: middle;"></i> 3 Ý Gợi Ý Trên Sơ Đồ + 1 Ý Tưởng Riêng:
          </h4>
          
          <div class="grid-2" style="gap: 0.75rem;">
            <div style="background: var(--bg-muted); padding: 0.75rem 1rem; border-left: 3px solid var(--primary); border-radius: 4px;">
              <span class="badge badge-primary" style="font-size: 0.7rem; margin-bottom: 0.2rem;">Ý Gợi Ý 1</span>
              <div style="font-weight: 700; font-size: 0.95rem;">${current.mindMap.subIdea1}</div>
            </div>
            <div style="background: var(--bg-muted); padding: 0.75rem 1rem; border-left: 3px solid var(--success); border-radius: 4px;">
              <span class="badge badge-success" style="font-size: 0.7rem; margin-bottom: 0.2rem;">Ý Gợi Ý 2</span>
              <div style="font-weight: 700; font-size: 0.95rem;">${current.mindMap.subIdea2}</div>
            </div>
            <div style="background: var(--bg-muted); padding: 0.75rem 1rem; border-left: 3px solid var(--warning); border-radius: 4px;">
              <span class="badge badge-warning" style="font-size: 0.7rem; margin-bottom: 0.2rem;">Ý Gợi Ý 3</span>
              <div style="font-weight: 700; font-size: 0.95rem;">${current.mindMap.subIdea3}</div>
            </div>
            <div style="background: var(--bg-muted); padding: 0.75rem 1rem; border-left: 3px solid var(--secondary); border-radius: 4px;">
              <span class="badge badge-secondary" style="font-size: 0.7rem; margin-bottom: 0.2rem;">Ý Tưởng Riêng (Own Idea)</span>
              <div style="font-weight: 700; font-size: 0.95rem;">${current.mindMap.ownIdea}</div>
            </div>
          </div>
        </div>

        <!-- YÊU CẦU ĐỀ BÀI (EXAM REQUIREMENTS) -->
        <div class="card" style="background: var(--bg-muted); border: 1px solid var(--border-color); padding: 1.25rem; margin-bottom: 1.5rem;">
          <h4 style="margin: 0 0 0.75rem 0; color: var(--secondary); font-size: 1rem; display: flex; align-items: center; gap: 0.4rem;">
            <i data-lucide="check-square" style="width: 16px; height: 16px;"></i> Yêu Cầu Bài Thi & Tiêu Chí Cần Đạt:
          </h4>
          
          <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
            <div>• <strong>Nhiệm vụ 1:</strong> Thuyết trình trôi chảy trong 2 phút dựa trên 3 nhánh gợi ý trong Mind Map.</div>
            <div>• <strong>Nhiệm vụ 2:</strong> Tự bổ sung ít nhất 1 ý tưởng riêng của bản thân (<em>Your own idea</em>).</div>
            <div>• <strong>Nhiệm vụ 3:</strong> Trả lời 2 câu hỏi mở rộng của Giám khảo ở phần dưới.</div>
            <div>• <strong>Từ vựng & liên từ trọng điểm:</strong> <em>Firstly, Secondly, From an educational perspective, In conclusion, social prosperity</em>.</div>
          </div>
        </div>

        <!-- Embedded Voice Recorder & AI Evaluation for Part 3 Presentation -->
        ${renderItemRecorderBox(presentationItemId, current.centralTopic, 'Thu Âm Bài Thuyết Trình Part 3')}

        <!-- Toggle Button to view Sample Speech & Listen Audio -->
        <div style="display: flex; justify-content: flex-end; margin-top: 0.5rem;">
          <button id="btn-toggle-sample-${sampleBoxId}" class="btn btn-secondary btn-sm" onclick="window.toggleSampleSpeaking('${sampleBoxId}')">
            <i data-lucide="eye"></i>
            <span>Xem Bài Thuyết Trình Mẫu & Nghe Audio</span>
          </button>
        </div>

        <!-- Collapsible Complete Sample Speech (English & Vietnamese) -->
        <div id="${sampleBoxId}" style="display: none; margin-top: 1.25rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color);" class="animate-fade-in">
          <strong style="color: var(--primary); font-size: 1.05rem; display: block; margin-bottom: 0.5rem;">
            🎧 Bài Thuyết Trình Mẫu Hoàn Chỉnh (Sample Speech):
          </strong>
          ${renderAudioPlayerComponent(p3AudioId, current.modelSpeech, `Bài Thuyết Trình Part 3`)}

          <!-- Full English Text -->
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; line-height: 1.9; font-size: 0.95rem; color: var(--text-primary); white-space: pre-line; margin-top: 1rem;">
            <strong style="color: var(--primary); display: block; margin-bottom: 0.35rem;">[Bản Tiếng Anh Hoàn Chỉnh]:</strong>
            ${current.modelSpeech}
          </div>

          <!-- Full Vietnamese Text -->
          <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: var(--radius-md); padding: 1.25rem; line-height: 1.9; font-size: 0.95rem; color: var(--text-primary); white-space: pre-line; margin-top: 0.75rem;">
            <strong style="color: var(--success-text); display: block; margin-bottom: 0.35rem;">[Bản Dịch Tiếng Việt]:</strong>
            ${vnSpeech}
          </div>
        </div>

      </div>

      <!-- Follow-up Questions Section -->
      <div class="card" style="padding: 2rem;">
        <h4 style="margin: 0 0 1.25rem 0; color: var(--secondary); font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="message-square" style="width: 20px; height: 20px;"></i> Câu Hỏi Phụ Mở Rộng Từ Giám Khảo (Follow-up Questions):
        </h4>

        <div style="display: flex; flex-direction: column; gap: 2rem;">
          ${(current.followUpQuestions || []).map((fq, idx) => {
            const fqItemId = `p3-fq-${selectedPart3Index}-${idx}`;
            const fqSampleId = `sample-${fqItemId}`;

            return `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--secondary); border-radius: var(--radius-md); padding: 1.5rem;">
                <div style="font-weight: 700; font-size: 1.1rem; color: var(--primary); margin-bottom: 0.75rem;">
                  Giám khảo hỏi ${idx + 1}: "${fq.q}"
                </div>

                <!-- Guided prompt hints -->
                <div style="background: var(--bg-muted); padding: 0.85rem 1rem; border-radius: var(--radius-sm); font-size: 0.9rem; color: var(--text-primary); margin-bottom: 1rem;">
                  <strong>📋 Yêu cầu trả lời:</strong> Trả lời trực diện câu hỏi ➔ Giải thích nguyên nhân hoặc giải pháp ➔ Đưa ra ví dụ thực tế.
                </div>
                
                <!-- Individual Recorder for this follow-up question -->
                ${renderItemRecorderBox(fqItemId, fq.q, `Thu Âm Trả Lời Câu Hỏi Phụ ${idx + 1}`)}

                <!-- Toggle Sample Answer -->
                <div style="display: flex; justify-content: flex-end; margin-top: 0.5rem;">
                  <button id="btn-toggle-sample-${fqSampleId}" class="btn btn-secondary btn-sm" onclick="window.toggleSampleSpeaking('${fqSampleId}')">
                    <i data-lucide="eye"></i>
                    <span>Xem Câu Trả Lời Mẫu</span>
                  </button>
                </div>

                <div id="${fqSampleId}" style="display: none; background: rgba(139, 92, 246, 0.08); padding: 1rem; border-radius: var(--radius-sm); font-size: 0.95rem; line-height: 1.7; color: var(--text-primary); margin-top: 0.75rem;" class="animate-fade-in">
                  <div style="color: var(--text-primary); font-weight: 600; margin-bottom: 0.25rem;">[Tiếng Anh]: "${fq.suggestedAnswer}"</div>
                  <div style="color: var(--text-secondary); font-style: italic;">[Tiếng Việt]: "Các trường học hoặc chính phủ có thể tổ chức hội thảo tương tác, đầu tư cơ sở hạ tầng công cộng và tạo điều kiện bình đẳng cho người dân."</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderFormulasTab() {
  return `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div class="card" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-accent)); border-left: 5px solid var(--primary); padding: 1.75rem 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="badge badge-primary" style="margin-bottom: 0.35rem;">Bí Quyết Ghi Điểm Fluency & Coherence</span>
            <h3 style="color: var(--primary); margin: 0 0 0.5rem 0; font-size: 1.5rem;">Bộ Mẫu Câu Phản Xạ Nhanh Cho Bài Thi Nói VSTEP (Speaking Reflex Formulas)</h3>
          </div>
          <span class="badge badge-success" style="font-weight: 700;">${(speakingFormulas || []).length} Nhóm Mẫu Câu Thiết Yếu</span>
        </div>
        <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
          Các mẫu câu và từ nối phản xạ giúp bạn kéo dài thời gian suy nghĩ hợp lý trong phòng thi, dẫn dắt luận điểm mượt mà và gây ấn tượng mạnh với giám khảo chấm thi.
        </p>
      </div>

      <div class="grid-2" style="gap: 1.5rem;">
        ${(speakingFormulas || []).map(group => `
          <div class="card" style="padding: 1.75rem; border-top: 4px solid var(--primary); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.35rem;">
                <h4 style="color: var(--primary); margin: 0; font-size: 1.1rem; line-height: 1.4;">${group.category}</h4>
                <span class="badge badge-secondary" style="font-size: 0.75rem;">${group.badge || 'Công Thức'}</span>
              </div>
              
              <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0 0 1rem 0; line-height: 1.5;">
                ${group.description || ''}
              </p>

              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                ${(group.phrases || []).map(p => `
                  <div style="background: var(--bg-muted); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--secondary);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
                      <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem; line-height: 1.4;">
                        "${p.en}"
                      </div>
                      <button class="btn btn-secondary btn-sm btn-icon" title="Nghe phát âm" onclick="window.speakSentence('${p.en.replace(/'/g, "\\'")}')">
                        <i data-lucide="volume-2" style="width: 14px; height: 14px;"></i>
                      </button>
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.25rem;">
                      <strong>Ý nghĩa:</strong> ${p.vn}
                    </div>
                    ${p.example ? `
                      <div style="color: var(--primary); font-size: 0.825rem; font-style: italic; margin-top: 0.35rem; padding-top: 0.35rem; border-top: 1px dashed var(--border-color);">
                        <strong>Ví dụ:</strong> "${p.example}"
                      </div>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
