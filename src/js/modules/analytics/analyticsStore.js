/**
 * src/js/modules/analytics/analyticsStore.js
 * Quản lý điểm số 6 kỹ năng và phát ra sự kiện realtime
 */
const STORAGE_KEY = 'vstep_competency_scores';

export class AnalyticsStore {
  static getScores() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Failed to parse competency scores from localStorage:', e);
    }
    return {
      grammar: 0,
      vocabulary: 0,
      reading: 0,
      listening: 0,
      writing: 0,
      speaking: 0
    };
  }

  /**
   * Cập nhật điểm một kỹ năng và phát tín hiệu update
   * @param {'grammar'|'vocabulary'|'reading'|'listening'|'writing'|'speaking'} skill
   * @param {number} delta - Số điểm cộng/trừ
   */
  static updateSkillScore(skill, delta) {
    const scores = this.getScores();
    scores[skill] = Math.min(100, Math.max(0, (scores[skill] || 0) + delta));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
    } catch (e) {
      console.warn('Failed to save competency scores:', e);
    }

    // Bắn Custom Event để Radar Chart tự vẽ lại realtime
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('vstep:score-updated', { detail: scores }));
    }
    return scores;
  }

  /**
   * Đặt lại toàn bộ điểm về mặc định (0)
   */
  static resetScores() {
    const defaultScores = {
      grammar: 0,
      vocabulary: 0,
      reading: 0,
      listening: 0,
      writing: 0,
      speaking: 0
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultScores));
    } catch (e) {}
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('vstep:score-updated', { detail: defaultScores }));
    }
    return defaultScores;
  }
}
