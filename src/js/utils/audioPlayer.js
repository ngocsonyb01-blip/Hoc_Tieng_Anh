// Unified Global Voice Preference Keys
const STORAGE_KEY_VOICE = 'vstep_unified_voice';
const STORAGE_KEY_PITCH = 'vstep_unified_pitch';
const STORAGE_KEY_RATE = 'vstep_unified_rate';

/**
 * Returns the currently selected or best default unified voice
 */
export function getSelectedGlobalVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const savedVoiceName = localStorage.getItem(STORAGE_KEY_VOICE);
  if (savedVoiceName) {
    const matched = voices.find(v => v.name === savedVoiceName);
    if (matched) return matched;
  }

  // Authoritative default ranking list
  const priorityList = [
    'Microsoft Guy Online (Natural)',
    'Microsoft Christopher Online (Natural)',
    'Microsoft Eric Online (Natural)',
    'Microsoft Brian Online (Natural)',
    'Microsoft Ryan Online (Natural)',
    'Microsoft Oliver Online (Natural)',
    'Google UK English Male',
    'Google US English Male',
    'Microsoft David',
    'Microsoft George',
    'Microsoft Mark',
    'Daniel',
    'Alex',
    'Oliver',
    'Arthur',
    'en-US-GuyNeural',
    'en-GB-RyanNeural',
    'Male'
  ];

  for (const kw of priorityList) {
    const match = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes(kw.toLowerCase()));
    if (match) return match;
  }

  // Fallback: any English male or natural voice
  const fallback = voices.find(v => 
    v.lang.startsWith('en') && 
    !v.name.toLowerCase().includes('female') && 
    !v.name.toLowerCase().includes('zira') && 
    !v.name.toLowerCase().includes('samantha')
  );

  return fallback || voices.find(v => v.lang.startsWith('en')) || voices[0];
}

export function getGlobalPitch() {
  return parseFloat(localStorage.getItem(STORAGE_KEY_PITCH) || '0.90');
}

export function getGlobalRate() {
  return parseFloat(localStorage.getItem(STORAGE_KEY_RATE) || '0.95');
}

export function setUnifiedVoiceSettings(voiceName, pitch = 0.90, rate = 0.95) {
  if (voiceName) localStorage.setItem(STORAGE_KEY_VOICE, voiceName);
  localStorage.setItem(STORAGE_KEY_PITCH, pitch.toString());
  localStorage.setItem(STORAGE_KEY_RATE, rate.toString());
}

export function getAuthoritativeMaleVoice() {
  return getSelectedGlobalVoice();
}

class AudioController {
  constructor() {
    this.currentText = '';
    this.currentAudioUrl = null;
    this.currentId = null;
    this.htmlAudio = null;
    this.utterance = null;
    this.isPlaying = false;
    this.isPaused = false;
    this.rate = 1.0;
    this.lang = 'en-US';
    this.durationEstimate = 0;
    this.elapsedSeconds = 0;
    this.charIndex = 0;
    this.timerInterval = null;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        getAuthoritativeMaleVoice();
      };
    }
  }

  play(id, text, rate = null, audioUrl = null) {
    if (rate) this.rate = rate;

    const realAudioUrl = audioUrl || (text && (text.endsWith('.mp3') || text.includes('./audio/')) ? text : null);

    // Xử lý phát file âm thanh MP3 thật (Authentic Audio MP3)
    if (realAudioUrl) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();

      if (this.currentId === id && this.htmlAudio && this.isPaused) {
        this.resume();
        return;
      }

      this.stopInternal();

      this.currentId = id;
      this.currentText = text;
      this.currentAudioUrl = realAudioUrl;
      this.isPlaying = true;
      this.isPaused = false;

      this.htmlAudio = new Audio(realAudioUrl);
      this.htmlAudio.playbackRate = this.rate || 1.0;

      this.htmlAudio.onloadedmetadata = () => {
        if (this.htmlAudio && this.htmlAudio.duration && !isNaN(this.htmlAudio.duration)) {
          this.durationEstimate = Math.round(this.htmlAudio.duration);
          this.updateProgressBar();
        }
      };

      this.htmlAudio.ontimeupdate = () => {
        if (!this.htmlAudio) return;
        this.elapsedSeconds = Math.round(this.htmlAudio.currentTime);
        if (this.htmlAudio.duration && !isNaN(this.htmlAudio.duration)) {
          this.durationEstimate = Math.round(this.htmlAudio.duration);
        }
        this.updateProgressBar();
      };

      this.htmlAudio.onended = () => {
        this.finishPlayback();
      };

      this.htmlAudio.onerror = (e) => {
        console.warn('HTML Audio playback notice:', e);
        this.finishPlayback();
      };

      this.htmlAudio.play().catch(err => {
        console.warn('Audio play request notice:', err);
      });

      this.updateUI();
      return;
    }

    // Fallback: Web Speech API TTS
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn không hỗ trợ Web Speech API.');
      return;
    }

    // If currently paused on the same ID, resume instantly
    if (this.currentId === id && this.isPaused) {
      this.resume();
      return;
    }

    this.stopInternal();

    this.currentId = id;
    this.currentText = text;
    this.currentAudioUrl = null;
    this.isPlaying = true;
    this.isPaused = false;
    this.elapsedSeconds = 0;
    this.charIndex = 0;

    const wordCount = text.split(/\s+/).filter(w => w.trim()).length;
    this.durationEstimate = Math.max(3, Math.round((wordCount / (130 * this.rate)) * 60));

    this.utterance = new SpeechSynthesisUtterance(text);
    this.utterance.lang = this.lang;
    this.utterance.rate = (this.rate || 1.0) * getGlobalRate();
    this.utterance.pitch = getGlobalPitch();

    const unifiedVoice = getSelectedGlobalVoice();
    if (unifiedVoice) {
      this.utterance.voice = unifiedVoice;
    }

    this.utterance.onboundary = (event) => {
      if (event.name === 'word' || typeof event.charIndex === 'number') {
        this.charIndex = event.charIndex;
      }
    };

    this.utterance.onend = () => {
      this.finishPlayback();
    };

    this.utterance.onerror = (e) => {
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        console.warn('Speech synthesis notice:', e);
      }
      this.finishPlayback();
    };

    window.speechSynthesis.speak(this.utterance);
    this.startTimer();
    this.updateUI();
  }

  pause() {
    if (!this.isPlaying || this.isPaused) return;
    if (this.htmlAudio) {
      this.htmlAudio.pause();
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isPaused = true;
    this.isPlaying = false;
    this.clearTimer();
    this.updateUI();
  }

  resume() {
    if (!this.isPaused) return;
    if (this.htmlAudio) {
      this.htmlAudio.play().catch(() => {});
      this.isPlaying = true;
      this.isPaused = false;
      this.updateUI();
      return;
    }
    const remainingText = this.currentText.slice(this.charIndex || 0).trim();
    if (!remainingText) {
      this.finishPlayback();
      return;
    }

    this.utterance = new SpeechSynthesisUtterance(remainingText);
    this.utterance.lang = this.lang;
    this.utterance.rate = (this.rate || 1.0) * getGlobalRate();
    this.utterance.pitch = getGlobalPitch();

    const unifiedVoice = getSelectedGlobalVoice();
    if (unifiedVoice) {
      this.utterance.voice = unifiedVoice;
    }

    const baseOffset = this.charIndex || 0;
    this.utterance.onboundary = (event) => {
      if (event.name === 'word' || typeof event.charIndex === 'number') {
        this.charIndex = baseOffset + event.charIndex;
      }
    };

    this.utterance.onend = () => {
      this.finishPlayback();
    };

    this.utterance.onerror = (e) => {
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        console.warn('Speech synthesis notice:', e);
      }
      this.finishPlayback();
    };

    this.isPlaying = true;
    this.isPaused = false;
    window.speechSynthesis.speak(this.utterance);
    this.startTimer();
    this.updateUI();
  }

  replay(id, text, audioUrl = null) {
    if (this.currentId === id && this.htmlAudio) {
      this.htmlAudio.currentTime = 0;
      this.htmlAudio.play().catch(() => {});
      this.isPlaying = true;
      this.isPaused = false;
      this.updateUI();
      return;
    }
    this.stopInternal();
    this.play(id, text, this.rate, audioUrl);
  }

  seek(id, percent) {
    if (this.currentId === id && this.htmlAudio && this.htmlAudio.duration) {
      this.htmlAudio.currentTime = Math.max(0, Math.min(this.htmlAudio.duration, percent * this.htmlAudio.duration));
      this.elapsedSeconds = Math.round(this.htmlAudio.currentTime);
      this.updateProgressBar();
    }
  }

  stop() {
    this.stopInternal();
    this.finishPlayback();
  }

  stopInternal() {
    if (this.htmlAudio) {
      this.htmlAudio.pause();
      this.htmlAudio.currentTime = 0;
      this.htmlAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.clearTimer();
    this.isPlaying = false;
    this.isPaused = false;
  }

  finishPlayback() {
    this.clearTimer();
    this.isPlaying = false;
    this.isPaused = false;
    this.elapsedSeconds = 0;
    this.charIndex = 0;
    this.updateUI();
    this.currentId = null;
  }

  startTimer() {
    this.clearTimer();
    this.timerInterval = setInterval(() => {
      if (this.isPlaying && !this.isPaused) {
        this.elapsedSeconds++;
        if (this.elapsedSeconds > this.durationEstimate) {
          this.durationEstimate = this.elapsedSeconds;
        }
        this.updateProgressBar();
      }
    }, 1000);
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  updateProgressBar() {
    if (!this.currentId) return;
    const barEl = document.getElementById(`audio-progress-${this.currentId}`);
    const timeEl = document.getElementById(`audio-time-${this.currentId}`);
    if (barEl) {
      const pct = Math.min(100, (this.elapsedSeconds / this.durationEstimate) * 100);
      barEl.style.width = `${pct}%`;
    }
    if (timeEl) {
      timeEl.innerText = `${this.formatTime(this.elapsedSeconds)} / ${this.formatTime(this.durationEstimate)}`;
    }
  }

  updateUI() {
    if (!this.currentId) return;
    const btnEl = document.getElementById(`audio-btn-${this.currentId}`);
    const waveEl = document.getElementById(`audio-wave-${this.currentId}`);

    if (btnEl) {
      if (this.isPlaying) {
        btnEl.innerHTML = '<i data-lucide="pause"></i> Tạm Dừng';
        btnEl.classList.remove('btn-primary');
        btnEl.classList.add('btn-warning');
      } else if (this.isPaused) {
        btnEl.innerHTML = '<i data-lucide="play"></i> Tiếp Tục';
        btnEl.classList.remove('btn-warning');
        btnEl.classList.add('btn-primary');
      } else {
        btnEl.innerHTML = '<i data-lucide="play"></i> Phát Audio';
        btnEl.classList.remove('btn-warning');
        btnEl.classList.add('btn-primary');
      }
    }

    if (waveEl) {
      waveEl.style.opacity = this.isPlaying ? '1' : '0.2';
    }

    this.updateProgressBar();

    if (window.lucide) window.lucide.createIcons();
  }
}

export const globalAudio = new AudioController();

/**
 * Unified Global Speech Function for all words, vocabulary, and phonetic prompts
 */
export function speakText(text, lang = 'en-US', rate = null) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate !== null ? rate : getGlobalRate();
  utterance.pitch = getGlobalPitch();

  const unifiedVoice = getSelectedGlobalVoice();
  if (unifiedVoice) {
    utterance.voice = unifiedVoice;
  }

  window.speechSynthesis.speak(utterance);
}

/**
 * Interactive Voice Settings Modal
 */
export function openVoiceSettingsModal() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (window.showAlertModal) {
      window.showAlertModal({
        title: 'Trình Duyệt Không Hỗ Trợ',
        message: 'Trình duyệt hiện tại không hỗ trợ Web Speech Synthesis API.',
        icon: 'alert-circle'
      });
    }
    return;
  }

  const voices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
  const currentVoice = getSelectedGlobalVoice();
  const currentPitch = getGlobalPitch();
  const currentRate = getGlobalRate();

  const container = document.getElementById('custom-modal-container');
  if (!container) return;

  container.innerHTML = `
    <div class="custom-modal-overlay animate-fade-in">
      <div class="custom-modal-dialog" style="max-width: 540px; text-align: left; padding: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="settings-2" style="width: 22px; height: 22px; color: var(--primary);"></i>
            <h3 style="margin: 0; font-size: 1.25rem; color: var(--text-primary);">Cài Đặt Giọng Đọc Thống Nhất</h3>
          </div>
          <button class="btn btn-secondary btn-icon btn-sm" onclick="window.closeCustomModal()" style="border-radius: var(--radius-full);">
            <i data-lucide="x"></i>
          </button>
        </div>

        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.6;">
          Giọng đọc được chọn dưới đây sẽ được áp dụng <strong>đồng bộ 100%</strong> cho toàn bộ ứng dụng: Từ vựng, Bảng bất quy tắc, Nghe Part 1-2-3, Phát âm IPA và Thi thử.
        </p>

        <!-- Voice Selection Dropdown -->
        <div style="margin-bottom: 1.25rem;">
          <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.4rem; color: var(--text-primary);">
            Chọn Giọng Đọc Tiếng Anh:
          </label>
          <select id="voice-select-input" class="search-input" style="width: 100%; padding: 0.65rem 0.85rem; font-size: 0.9rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary);">
            ${voices.map(v => `
              <option value="${v.name}" ${(currentVoice && currentVoice.name === v.name) ? 'selected' : ''}>
                ${v.name} (${v.lang})
              </option>
            `).join('')}
          </select>
        </div>

        <!-- Speed Slider -->
        <div style="margin-bottom: 1.25rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
            <label style="font-weight: 700; font-size: 0.9rem; color: var(--text-primary);">Tốc Độ Đọc (Speed Rate):</label>
            <span id="rate-value-display" style="font-family: var(--font-mono); font-weight: 700; color: var(--primary);">${currentRate}x</span>
          </div>
          <input type="range" id="rate-range-input" min="0.7" max="1.3" step="0.05" value="${currentRate}" 
                 style="width: 100%; cursor: pointer;" 
                 oninput="document.getElementById('rate-value-display').innerText = this.value + 'x'" />
        </div>

        <!-- Pitch Slider -->
        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
            <label style="font-weight: 700; font-size: 0.9rem; color: var(--text-primary);">Độ Trầm / Bổng (Pitch):</label>
            <span id="pitch-value-display" style="font-family: var(--font-mono); font-weight: 700; color: var(--secondary);">${currentPitch}</span>
          </div>
          <input type="range" id="pitch-range-input" min="0.6" max="1.4" step="0.05" value="${currentPitch}" 
                 style="width: 100%; cursor: pointer;" 
                 oninput="document.getElementById('pitch-value-display').innerText = this.value" />
        </div>

        <!-- Action Buttons -->
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
          <button class="btn btn-secondary" onclick="window.testListenCurrentVoice()" style="display: flex; align-items: center; gap: 0.4rem;">
            <i data-lucide="volume-2"></i> Nghe Thử Mẫu
          </button>

          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary" onclick="window.closeCustomModal()">
              Hủy
            </button>
            <button class="btn btn-primary" onclick="window.saveGlobalVoiceSettings()" style="font-weight: 700;">
              <i data-lucide="check"></i> Lưu Cài Đặt
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  if (typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
}

if (typeof window !== 'undefined') {
  window.testListenCurrentVoice = () => {
    const voiceSelect = document.getElementById('voice-select-input');
    const rateInput = document.getElementById('rate-range-input');
    const pitchInput = document.getElementById('pitch-range-input');

    const selectedName = voiceSelect ? voiceSelect.value : null;
    const rate = rateInput ? parseFloat(rateInput.value) : 0.95;
    const pitch = pitchInput ? parseFloat(pitchInput.value) : 0.90;

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance("Welcome to VSTEP B1 English Mastery. This unified voice will be used across all practice modules.");
      utterance.lang = 'en-US';
      utterance.rate = rate;
      utterance.pitch = pitch;
      const voices = window.speechSynthesis.getVoices();
      const match = voices.find(v => v.name === selectedName);
      if (match) utterance.voice = match;
      window.speechSynthesis.speak(utterance);
    }
  };

  window.saveGlobalVoiceSettings = () => {
    const voiceSelect = document.getElementById('voice-select-input');
    const rateInput = document.getElementById('rate-range-input');
    const pitchInput = document.getElementById('pitch-range-input');

    const selectedName = voiceSelect ? voiceSelect.value : null;
    const rate = rateInput ? parseFloat(rateInput.value) : 0.95;
    const pitch = pitchInput ? parseFloat(pitchInput.value) : 0.90;

    setUnifiedVoiceSettings(selectedName, pitch, rate);
    if (window.closeCustomModal) window.closeCustomModal();
    if (window.showToast) {
      window.showToast('Đã lưu và đồng bộ giọng đọc thống nhất cho toàn bộ hệ thống!', 'success');
    }
  };
}

/**
 * Generates an interactive Audio Player Bar (without redundant stop button)
 */
export function renderAudioPlayerComponent(id, text, label = 'Bản Thu Âm Mẫu', audioUrl = null) {
  const cleanText = (text || '').replace(/'/g, "\\'").replace(/\n/g, ' ');
  const wordCount = (text || '').split(/\s+/).filter(w => w.trim()).length;
  const isRealMp3 = !!(audioUrl || (text && (text.endsWith('.mp3') || text.includes('./audio/'))));
  const realUrl = audioUrl || (isRealMp3 ? text : '');
  const estSeconds = isRealMp3 ? (35 * 60) : Math.max(3, Math.round((wordCount / 130) * 60));
  const estFormatted = `${Math.floor(estSeconds / 60) < 10 ? '0' : ''}${Math.floor(estSeconds / 60)}:${estSeconds % 60 < 10 ? '0' : ''}${estSeconds % 60}`;

  return `
    <div class="audio-player-box" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1rem 1.25rem; margin-bottom: 1.25rem; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="badge ${isRealMp3 ? 'badge-success' : 'badge-primary'}">
            <i data-lucide="${isRealMp3 ? 'disc' : 'volume-2'}" style="width: 13px; height: 13px;"></i> 
            ${label}
          </span>
          <span id="audio-time-${id}" style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">
            00:00 / ${estFormatted}
          </span>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Tốc độ:</span>
          <button class="btn btn-secondary btn-sm" style="padding: 0.2rem 0.55rem; font-size: 0.75rem;" onclick="window.setAudioRate('${id}', '${cleanText}', 0.8, '${realUrl}')">0.8x</button>
          <button class="btn btn-secondary btn-sm" style="padding: 0.2rem 0.55rem; font-size: 0.75rem;" onclick="window.setAudioRate('${id}', '${cleanText}', 1.0, '${realUrl}')">1.0x</button>
          <button class="btn btn-secondary btn-sm" style="padding: 0.2rem 0.55rem; font-size: 0.75rem;" onclick="window.setAudioRate('${id}', '${cleanText}', 1.2, '${realUrl}')">1.2x</button>
        </div>
      </div>

      <!-- Timeline Progress Bar with Interactive Seeking -->
      <div style="background: var(--bg-muted); height: 8px; border-radius: var(--radius-full); overflow: hidden; margin-bottom: 0.85rem; position: relative; cursor: pointer;" 
           onclick="window.seekAudio(event, '${id}')" title="Nhấp vào thanh để tua đến đoạn cần nghe">
        <div id="audio-progress-${id}" style="background: linear-gradient(90deg, var(--primary), var(--secondary)); height: 100%; width: 0%; border-radius: var(--radius-full); transition: width 0.1s linear;"></div>
      </div>

      <!-- Controller Action Buttons -->
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button id="audio-btn-${id}" class="btn btn-primary btn-sm" onclick="window.toggleAudioPlay('${id}', '${cleanText}', '${realUrl}')">
            <i data-lucide="play"></i> Phát Audio
          </button>
          <button class="btn btn-secondary btn-sm" onclick="window.replayAudio('${id}', '${cleanText}', '${realUrl}')" title="Nghe lại từ đầu">
            <i data-lucide="rotate-ccw"></i> Nghe Lại Từ Đầu
          </button>
          ${!isRealMp3 ? `
            <button class="btn btn-secondary btn-sm" onclick="window.toggleTranscript('${id}')">
              <i data-lucide="file-text"></i> Lời Thoại (Transcript)
            </button>
          ` : ''}
        </div>

        <div id="audio-wave-${id}" class="audio-wave" style="display: flex; gap: 3px; align-items: center; height: 16px; opacity: 0.2; transition: opacity 0.3s;">
          <span style="width: 3px; height: 100%; background: var(--primary); border-radius: 2px; animation: bounce 0.8s infinite alternate;"></span>
          <span style="width: 3px; height: 60%; background: var(--primary); border-radius: 2px; animation: bounce 0.8s infinite alternate 0.2s;"></span>
          <span style="width: 3px; height: 90%; background: var(--primary); border-radius: 2px; animation: bounce 0.8s infinite alternate 0.4s;"></span>
          <span style="width: 3px; height: 40%; background: var(--primary); border-radius: 2px; animation: bounce 0.8s infinite alternate 0.1s;"></span>
          <span style="width: 3px; height: 75%; background: var(--primary); border-radius: 2px; animation: bounce 0.8s infinite alternate 0.3s;"></span>
        </div>
      </div>
    </div>
  `;
}
