/**
 * src/js/modules/writing/writingAssistant.js
 * Đếm số từ theo chuẩn VSTEP Task 1/2 + Tự động nhận diện và làm nổi bật liên từ học thuật B1
 */
export class WritingAssistant {
  /**
   * @param {string|HTMLElement} textareaId 
   * @param {string|HTMLElement} counterId 
   * @param {'task1'|'task2'} taskType 
   */
  constructor(textareaId, counterId, taskType = 'task2') {
    this.textarea = typeof textareaId === 'string' ? document.getElementById(textareaId) : textareaId;
    this.counterEl = typeof counterId === 'string' ? document.getElementById(counterId) : counterId;
    this.targetWords = taskType === 'task1' ? 120 : 250; // Chuẩn VSTEP B1
    this.b1Connectors = [
      'however', 'therefore', 'moreover', 'furthermore', 'in addition', 
      'on the other hand', 'consequently', 'as a result', 'in conclusion', 
      'firstly', 'secondly', 'finally', 'for example', 'for instance', 
      'in contrast', 'although', 'even though', 'despite', 'in order to',
      'nevertheless', 'similarly', 'to sum up', 'in summary', 'besides'
    ];
    this.bindEvents();
    this.analyzeText();
  }

  bindEvents() {
    if (!this.textarea) return;
    this.textarea.addEventListener('input', () => this.analyzeText());
  }

  analyzeText() {
    if (!this.textarea || typeof this.textarea.value !== 'string') return;
    const text = this.textarea.value.trim();
    const words = text ? text.split(/\s+/).filter(Boolean) : [];
    const wordCount = words.length;

    // Phát hiện các từ nối B1 đã sử dụng
    const foundConnectors = this.b1Connectors.filter((conn) => 
      new RegExp(`\\b${conn}\\b`, 'i').test(text)
    );

    const progressPercent = Math.min(100, Math.round((wordCount / this.targetWords) * 100));
    const isTargetMet = wordCount >= this.targetWords;

    if (this.counterEl) {
      this.counterEl.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            Số từ: <strong style="color: ${isTargetMet ? 'var(--success, #10b981)' : 'var(--primary, #3b82f6)'}; font-size: 0.95rem;">${wordCount} / ${this.targetWords}</strong> 
            <span style="color: var(--text-muted); font-size: 0.775rem;">(${progressPercent}%)</span>
          </div>
          <div>
            Liên từ B1: <strong style="color: var(--secondary, #3b82f6);">${foundConnectors.length} từ</strong>
            ${foundConnectors.length > 0 ? `<span style="font-size: 0.75rem; color: var(--text-muted);">(${foundConnectors.slice(0, 3).join(', ')}${foundConnectors.length > 3 ? '...' : ''})</span>` : ''}
          </div>
        </div>
        <div style="height: 6px; background: var(--bg-muted, rgba(0,0,0,0.1)); border-radius: var(--radius-full, 9999px); overflow: hidden;">
          <div style="height: 100%; width: ${progressPercent}%; background: ${isTargetMet ? 'var(--success, #10b981)' : 'linear-gradient(90deg, var(--primary, #3b82f6), var(--secondary, #06b6d4))'}; transition: width 0.3s ease;"></div>
        </div>
      `;
    }
  }
}
