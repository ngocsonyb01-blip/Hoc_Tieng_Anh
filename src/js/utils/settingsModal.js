import { getSelectedGlobalVoice, getGlobalPitch, getGlobalRate, setUnifiedVoiceSettings } from './audioPlayer.js';
import { showToast, showConfirmModal } from './modal.js';

let activeSettingsTab = 'voice'; // 'voice' | 'interface' | 'exam' | 'data'

export function openSettingsModal(defaultTab = 'voice') {
  activeSettingsTab = defaultTab;
  renderSettingsModalContent();
}

export function closeSettingsModal() {
  const container = document.getElementById('custom-modal-container');
  if (container) container.style.display = 'none';
}

function renderSettingsModalContent() {
  const container = document.getElementById('custom-modal-container');
  if (!container) return;

  const voices = (typeof window !== 'undefined' && 'speechSynthesis' in window) 
    ? window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en')) 
    : [];

  const currentVoice = getSelectedGlobalVoice();
  const currentPitch = getGlobalPitch();
  const currentRate = getGlobalRate();

  const currentTheme = localStorage.getItem('vstep_theme') || 'light';
  const currentFontSize = localStorage.getItem('vstep_font_size') || 'normal';
  const autoAudio = localStorage.getItem('vstep_auto_audio') === 'true';
  const showFloatingTimer = localStorage.getItem('vstep_floating_timer') !== 'false';

  container.innerHTML = `
    <div class="custom-modal-overlay animate-fade-in" style="width: 100%; display: flex; justify-content: center; align-items: center;">
      <div class="card animate-scale-in" style="max-width: 650px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 2rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: var(--shadow-xl); position: relative; text-align: left;">
        
        <!-- Modal Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.25rem;">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--bg-muted); display: flex; align-items: center; justify-content: center; color: var(--primary);">
              <i data-lucide="settings" style="width: 22px; height: 22px;"></i>
            </div>
            <div>
              <h3 style="margin: 0; font-size: 1.35rem; color: var(--text-primary);">Trung Tâm Cài Đặt Hệ Thống</h3>
              <p style="margin: 0.15rem 0 0 0; font-size: 0.85rem; color: var(--text-secondary);">Tùy chỉnh giọng đọc thống nhất, giao diện, chế độ thi thử & dữ liệu</p>
            </div>
          </div>
          <button class="btn btn-secondary btn-icon btn-sm" onclick="window.closeSettingsModal()" style="border-radius: var(--radius-full);" title="Đóng">
            <i data-lucide="x"></i>
          </button>
        </div>

        <!-- Navigation Tabs -->
        <div class="tabs-header" style="display: flex; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 1.5rem; overflow-x: auto;">
          <button class="tab-btn ${activeSettingsTab === 'voice' ? 'active' : ''}" onclick="window.switchSettingsTab('voice')" style="font-size: 0.875rem; font-weight: 700; white-space: nowrap; display: flex; align-items: center; gap: 0.35rem;">
            <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i> Giọng Đọc Đồng Bộ
          </button>
          <button class="tab-btn ${activeSettingsTab === 'interface' ? 'active' : ''}" onclick="window.switchSettingsTab('interface')" style="font-size: 0.875rem; font-weight: 700; white-space: nowrap; display: flex; align-items: center; gap: 0.35rem;">
            <i data-lucide="palette" style="width: 16px; height: 16px;"></i> Giao Diện & Hiển Thị
          </button>
          <button class="tab-btn ${activeSettingsTab === 'exam' ? 'active' : ''}" onclick="window.switchSettingsTab('exam')" style="font-size: 0.875rem; font-weight: 700; white-space: nowrap; display: flex; align-items: center; gap: 0.35rem;">
            <i data-lucide="clock" style="width: 16px; height: 16px;"></i> Chế Độ Thi Thử
          </button>
          <button class="tab-btn ${activeSettingsTab === 'data' ? 'active' : ''}" onclick="window.switchSettingsTab('data')" style="font-size: 0.875rem; font-weight: 700; white-space: nowrap; display: flex; align-items: center; gap: 0.35rem;">
            <i data-lucide="database" style="width: 16px; height: 16px;"></i> Tiến Độ & Dữ Liệu
          </button>
        </div>

        <!-- Tab 1: Voice Settings -->
        ${activeSettingsTab === 'voice' ? `
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            <div style="background: var(--bg-muted); padding: 1rem 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--primary); font-size: 0.875rem; color: var(--text-primary); line-height: 1.6;">
              <strong>Giọng đọc thống nhất:</strong> Giọng đọc bạn chọn sẽ áp dụng đồng bộ 100% cho Từ vựng, 400 Động từ bất quy tắc, Luyện nghe Part 1-2-3, Phát âm IPA và Thi thử trực tuyến.
            </div>

            <div>
              <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.4rem; color: var(--text-primary);">
                Chọn Giọng Đọc Tiếng Anh:
              </label>
              <select id="settings-voice-select" class="search-input" style="width: 100%; padding: 0.65rem 0.85rem; font-size: 0.9rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary);">
                ${voices.map(v => `
                  <option value="${v.name}" ${(currentVoice && currentVoice.name === v.name) ? 'selected' : ''}>
                    ${v.name} (${v.lang})
                  </option>
                `).join('')}
              </select>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                <label style="font-weight: 700; font-size: 0.9rem; color: var(--text-primary);">Tốc Độ Đọc (Speed Rate):</label>
                <span id="settings-rate-display" style="font-family: var(--font-mono); font-weight: 700; color: var(--primary);">${currentRate}x</span>
              </div>
              <input type="range" id="settings-rate-input" min="0.7" max="1.3" step="0.05" value="${currentRate}" 
                     style="width: 100%; cursor: pointer;" 
                     oninput="document.getElementById('settings-rate-display').innerText = this.value + 'x'" />
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                <label style="font-weight: 700; font-size: 0.9rem; color: var(--text-primary);">Độ Trầm / Bổng (Pitch):</label>
                <span id="settings-pitch-display" style="font-family: var(--font-mono); font-weight: 700; color: var(--secondary);">${currentPitch}</span>
              </div>
              <input type="range" id="settings-pitch-input" min="0.6" max="1.4" step="0.05" value="${currentPitch}" 
                     style="width: 100%; cursor: pointer;" 
                     oninput="document.getElementById('settings-pitch-display').innerText = this.value" />
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.75rem; border-top: 1px solid var(--border-color); flex-wrap: wrap; gap: 0.75rem;">
              <button class="btn btn-secondary" onclick="window.testListenSettingsVoice()" style="display: flex; align-items: center; gap: 0.4rem;">
                <i data-lucide="volume-2"></i> Nghe Thử Giọng Này
              </button>
              <button class="btn btn-primary" onclick="window.saveVoiceSettingsTab()" style="font-weight: 700;">
                <i data-lucide="check"></i> Lưu Cài Đặt Giọng
              </button>
            </div>
          </div>
        ` : ''}

        <!-- Tab 2: Interface Settings -->
        ${activeSettingsTab === 'interface' ? `
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div>
              <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.6rem; color: var(--text-primary);">
                Chế Độ Giao Diện (Theme):
              </label>
              <div style="display: flex; gap: 1rem;">
                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.9rem;">
                  <input type="radio" name="settings-theme" value="light" ${currentTheme === 'light' ? 'checked' : ''} onchange="window.updateAppTheme('light')"> Giao Diện Sáng (Light)
                </label>
                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.9rem;">
                  <input type="radio" name="settings-theme" value="dark" ${currentTheme === 'dark' ? 'checked' : ''} onchange="window.updateAppTheme('dark')"> Giao Diện Tối (Dark Mode)
                </label>
              </div>
            </div>

            <div>
              <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.6rem; color: var(--text-primary);">
                Cỡ Chữ Bài Đọc & Nội Dung:
              </label>
              <select id="settings-font-size" class="search-input" style="width: 100%; padding: 0.65rem 0.85rem;" onchange="window.updateFontSize(this.value)">
                <option value="small" ${currentFontSize === 'small' ? 'selected' : ''}>Nhỏ (90%)</option>
                <option value="normal" ${currentFontSize === 'normal' ? 'selected' : ''}>Tiêu chuẩn (100%)</option>
                <option value="large" ${currentFontSize === 'large' ? 'selected' : ''}>Lớn (115% - Dễ Đọc)</option>
              </select>
            </div>

            <div style="padding-top: 1rem; border-top: 1px solid var(--border-color); text-align: right;">
              <button class="btn btn-primary" onclick="window.saveInterfaceSettingsTab()">
                <i data-lucide="check"></i> Đã Áp Dụng
              </button>
            </div>
          </div>
        ` : ''}

        <!-- Tab 3: Exam Settings -->
        ${activeSettingsTab === 'exam' ? `
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid var(--border-color);">
              <div>
                <strong style="color: var(--text-primary); font-size: 0.95rem;">Huy hiệu đồng hồ nổi khi thi thử</strong>
                <p style="margin: 0.2rem 0 0 0; font-size: 0.825rem; color: var(--text-secondary);">Ghim thanh thời gian đếm ngược ở góc dưới bên phải màn hình</p>
              </div>
              <input type="checkbox" id="settings-floating-timer" ${showFloatingTimer ? 'checked' : ''} style="width: 20px; height: 20px; cursor: pointer;" />
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid var(--border-color);">
              <div>
                <strong style="color: var(--text-primary); font-size: 0.95rem;">Tự động phát âm khi tra từ vựng</strong>
                <p style="margin: 0.2rem 0 0 0; font-size: 0.825rem; color: var(--text-secondary);">Phát giọng đọc tiếng Anh chuẩn khi chọn từ vựng</p>
              </div>
              <input type="checkbox" id="settings-auto-audio" ${autoAudio ? 'checked' : ''} style="width: 20px; height: 20px; cursor: pointer;" />
            </div>

            <div style="padding-top: 1rem; text-align: right;">
              <button class="btn btn-primary" onclick="window.saveExamSettingsTab()">
                <i data-lucide="check"></i> Lưu Cài Đặt Thi Thử
              </button>
            </div>
          </div>
        ` : ''}

        <!-- Tab 4: Data Management -->
        ${activeSettingsTab === 'data' ? `
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); border-left: 4px solid var(--danger); padding: 1.25rem; border-radius: var(--radius-md);">
              <h4 style="margin: 0 0 0.35rem 0; color: var(--danger-text);">Đặt Lại Toàn Bộ Tiến Độ & Kết Quả Thi</h4>
              <p style="margin: 0 0 1rem 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
                Hành động này sẽ xóa toàn bộ câu trả lời thi thử, kết quả chấm điểm AI và trả ứng dụng về trạng thái mới ban đầu.
              </p>
              <button class="btn btn-danger btn-sm" onclick="window.confirmResetAllData()" style="font-weight: 700;">
                <i data-lucide="trash-2"></i> Xóa Kết Quả & Đặt Lại Từ Đầu
              </button>
            </div>
          </div>
        ` : ''}

      </div>
    </div>
  `;

  container.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

// Global Handlers for Settings Modal
if (typeof window !== 'undefined') {
  window.openSettingsModal = openSettingsModal;
  window.closeSettingsModal = closeSettingsModal;
  window.openVoiceSettingsModal = () => openSettingsModal('voice');

  window.switchSettingsTab = (tab) => {
    activeSettingsTab = tab;
    renderSettingsModalContent();
  };

  window.testListenSettingsVoice = () => {
    const voiceSelect = document.getElementById('settings-voice-select');
    const rateInput = document.getElementById('settings-rate-input');
    const pitchInput = document.getElementById('settings-pitch-input');

    const selectedName = voiceSelect ? voiceSelect.value : null;
    const rate = rateInput ? parseFloat(rateInput.value) : 0.95;
    const pitch = pitchInput ? parseFloat(pitchInput.value) : 0.90;

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance("Welcome to VSTEP B1 English Mastery. This unified voice will guide your English journey.");
      utterance.lang = 'en-US';
      utterance.rate = rate;
      utterance.pitch = pitch;
      const voices = window.speechSynthesis.getVoices();
      const match = voices.find(v => v.name === selectedName);
      if (match) utterance.voice = match;
      window.speechSynthesis.speak(utterance);
    }
  };

  window.saveVoiceSettingsTab = () => {
    const voiceSelect = document.getElementById('settings-voice-select');
    const rateInput = document.getElementById('settings-rate-input');
    const pitchInput = document.getElementById('settings-pitch-input');

    const selectedName = voiceSelect ? voiceSelect.value : null;
    const rate = rateInput ? parseFloat(rateInput.value) : 0.95;
    const pitch = pitchInput ? parseFloat(pitchInput.value) : 0.90;

    setUnifiedVoiceSettings(selectedName, pitch, rate);
    showToast('Đã lưu và đồng bộ giọng đọc thống nhất cho toàn bộ hệ thống!', 'success');
  };

  window.updateAppTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vstep_theme', theme);
    if (window.app) window.app.theme = theme;
  };

  window.updateFontSize = (size) => {
    localStorage.setItem('vstep_font_size', size);
    if (size === 'small') document.documentElement.style.fontSize = '14px';
    else if (size === 'large') document.documentElement.style.fontSize = '17.5px';
    else document.documentElement.style.fontSize = '16px';
  };

  window.saveInterfaceSettingsTab = () => {
    showToast('Đã lưu cài đặt giao diện hiển thị!', 'success');
  };

  window.saveExamSettingsTab = () => {
    const floating = document.getElementById('settings-floating-timer');
    const autoAud = document.getElementById('settings-auto-audio');
    if (floating) localStorage.setItem('vstep_floating_timer', floating.checked ? 'true' : 'false');
    if (autoAud) localStorage.setItem('vstep_auto_audio', autoAud.checked ? 'true' : 'false');
    showToast('Đã lưu tùy chọn chế độ thi thử!', 'success');
  };

  window.confirmResetAllData = () => {
    showConfirmModal({
      title: 'Đặt Lại Toàn Bộ Tiến Độ?',
      message: 'Bạn có chắc chắn muốn xóa toàn bộ kết quả thi thử và bài tập đã làm không? Hành động này không thể hoàn tác.',
      icon: 'alert-triangle',
      iconColor: 'var(--danger)',
      confirmText: 'Đồng Ý Xóa',
      confirmClass: 'btn-danger',
      onConfirm: () => {
        localStorage.clear();
        showToast('Đã đặt lại toàn bộ hệ thống thành công!', 'success');
        setTimeout(() => window.location.reload(), 1000);
      }
    });
  };
}
