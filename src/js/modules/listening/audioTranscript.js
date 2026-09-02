/**
 * src/js/modules/listening/audioTranscript.js
 * Đồng bộ âm thanh với transcript chữ + chế độ Dictation (chép chính tả)
 */
export class InteractiveTranscriptPlayer {
  /**
   * @param {HTMLAudioElement|Object} audioElement 
   * @param {HTMLElement|string} transcriptContainer 
   * @param {Array<{start: number, end: number, text: string}>} cues 
   */
  constructor(audioElement, transcriptContainer, cues = []) {
    this.audio = typeof audioElement === 'string' ? document.getElementById(audioElement) : audioElement;
    this.container = typeof transcriptContainer === 'string' ? document.getElementById(transcriptContainer) : transcriptContainer;
    this.cues = cues;
    this.dictationMode = false;
    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
    this.bindEvents();
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = this.cues.map((cue, index) => `
      <p class="transcript-line" data-start="${cue.start}" data-end="${cue.end}" id="cue-${index}" 
         style="cursor: pointer; padding: 8px 12px; border-radius: var(--radius-sm, 6px); margin-bottom: 6px; transition: all 0.2s ease; border-left: 3px solid transparent;">
        <span style="font-size: 0.775rem; color: var(--text-muted); margin-right: 8px; font-family: var(--font-mono, monospace);">[${this.formatTime(cue.start)}]</span>
        <span class="cue-text">${cue.text}</span>
      </p>
    `).join('');
  }

  bindEvents() {
    if (!this.container || !this.audio) return;

    // 1. Bấm vào câu để audio nhảy tới mốc thời gian đó
    this.container.addEventListener('click', (e) => {
      const line = e.target.closest('.transcript-line');
      if (line) {
        const start = parseFloat(line.dataset.start);
        if (!isNaN(start)) {
          this.audio.currentTime = start;
          if (this.audio.paused) {
            this.audio.play().catch(() => {});
          }
        }
      }
    });

    // 2. Tự động highlight câu đang phát
    this.audio.addEventListener('timeupdate', () => {
      const current = this.audio.currentTime;
      this.cues.forEach((cue, index) => {
        const el = document.getElementById(`cue-${index}`);
        if (el) {
          if (current >= cue.start && current <= cue.end) {
            el.style.backgroundColor = 'rgba(59, 130, 246, 0.12)';
            el.style.borderLeftColor = 'var(--primary, #2563eb)';
            el.style.color = 'var(--primary, #2563eb)';
            el.style.fontWeight = '600';
          } else {
            el.style.backgroundColor = 'transparent';
            el.style.borderLeftColor = 'transparent';
            el.style.color = 'inherit';
            el.style.fontWeight = 'normal';
          }
        }
      });
    });
  }

  /**
   * Bật/tắt chế độ Dictation (làm mờ hoặc ẩn từ để người học tự điền)
   * @param {boolean} enable 
   */
  setDictationMode(enable = true) {
    this.dictationMode = enable;
    if (!this.container) return;
    const lines = this.container.querySelectorAll('.cue-text');
    lines.forEach((line) => {
      if (enable) {
        line.classList.add('dictation-masked');
      } else {
        line.classList.remove('dictation-masked');
      }
    });
  }

  formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }
}
