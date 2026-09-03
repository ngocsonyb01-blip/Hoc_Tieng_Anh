/**
 * src/js/modules/analytics/analyticsStore.js
 * Quản lý điểm số Bản đồ Năng lực (Competency Radar) VSTEP B1
 * 
 * NGUYÊN TẮC TÍNH TOÁN:
 * - KHÔNG tính theo số lượng cộng dồn (+2, +5 điểm tích lũy).
 * - TÍNH QUÂN BÌNH (Weighted/Rolling Average) dựa trên kết quả cao hay thấp của từng phiên:
 *   + Mỗi phiên làm bài (luyện tập, kiểm tra, thi thử full hay từng part) đều có điểm số / tỷ lệ chính xác (0 - 100%).
 *   + Điểm hiển thị của mỗi kỹ năng là điểm trung bình cộng của tất cả các lần làm bài kỹ năng đó.
 *   + Hiển thị rõ số lần đã làm bài để người học nắm được cơ sở tính điểm.
 */
import { PracticeHistoryService } from '../tests/practiceHistoryService.js';

const STORAGE_KEY = 'vstep_competency_analytics_v2';

export class AnalyticsStore {
  /**
   * Khởi tạo cấu trúc dữ liệu mặc định
   */
  static _getDefaultData() {
    return {
      sessions: [],
      skills: {
        grammar: { average: 0, count: 0, totalScore: 0 },
        vocabulary: { average: 0, count: 0, totalScore: 0 },
        reading: { average: 0, count: 0, totalScore: 0 },
        listening: { average: 0, count: 0, totalScore: 0 },
        writing: { average: 0, count: 0, totalScore: 0 },
        speaking: { average: 0, count: 0, totalScore: 0 }
      }
    };
  }

  /**
   * Đọc dữ liệu từ localStorage, tự động đồng bộ từ Lịch sử làm bài nếu mới
   */
  static _loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        if (data && data.skills && Array.isArray(data.sessions)) {
          return data;
        }
      }
    } catch (e) {
      console.warn('Failed to parse competency analytics v2:', e);
    }

    const data = this._getDefaultData();
    // Đồng bộ từ lịch sử luyện tập & thi thử đã có sẵn
    this._syncFromPracticeHistory(data);
    this._saveData(data);
    return data;
  }

  /**
   * Lưu dữ liệu vào localStorage
   */
  static _saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save competency analytics v2:', e);
    }
  }

  /**
   * Tự động đồng bộ các phiên thi thử & luyện part từ PracticeHistoryService
   */
  static _syncFromPracticeHistory(data) {
    const history = PracticeHistoryService.getHistory();
    if (!history || history.length === 0) return;

    // Duyệt từ cũ đến mới (reverse)
    const reversed = [...history].reverse();
    reversed.forEach(sess => {
      if (sess.type === 'full_exam') {
        const lPercent = Math.min(100, Math.max(0, Math.round(((sess.listeningCorrect || 0) / 35) * 100)));
        const rPercent = Math.min(100, Math.max(0, Math.round(((sess.readingCorrect || 0) / 40) * 100)));
        
        data.sessions.push({
          id: 'sync_' + sess.id + '_l',
          skill: 'listening',
          scorePercent: lPercent,
          source: 'full_exam',
          timestamp: sess.timestamp || Date.now()
        });
        data.sessions.push({
          id: 'sync_' + sess.id + '_r',
          skill: 'reading',
          scorePercent: rPercent,
          source: 'full_exam',
          timestamp: sess.timestamp || Date.now()
        });

        if (sess.writingScore && sess.writingScore !== '-') {
          const wPercent = Math.min(100, Math.max(0, Math.round(parseFloat(sess.writingScore) * 10)));
          data.sessions.push({
            id: 'sync_' + sess.id + '_w',
            skill: 'writing',
            scorePercent: wPercent,
            source: 'full_exam',
            timestamp: sess.timestamp || Date.now()
          });
        }
        if (sess.speakingScore && sess.speakingScore !== '-') {
          const sPercent = Math.min(100, Math.max(0, Math.round(parseFloat(sess.speakingScore) * 10)));
          data.sessions.push({
            id: 'sync_' + sess.id + '_s',
            skill: 'speaking',
            scorePercent: sPercent,
            source: 'full_exam',
            timestamp: sess.timestamp || Date.now()
          });
        }
      } else if (sess.type === 'part_practice') {
        const percent = Math.min(100, Math.max(0, Math.round(sess.accuracyPercent || 0)));
        const partIds = sess.partIds || [];
        const hasL = partIds.some(id => id.startsWith('listening'));
        const hasR = partIds.some(id => id.startsWith('reading'));
        const hasW = partIds.some(id => id.startsWith('writing'));
        const hasS = partIds.some(id => id.startsWith('speaking'));

        if (hasL) {
          data.sessions.push({
            id: 'sync_' + sess.id + '_l',
            skill: 'listening',
            scorePercent: percent,
            source: 'part_practice',
            timestamp: sess.timestamp || Date.now()
          });
        }
        if (hasR) {
          data.sessions.push({
            id: 'sync_' + sess.id + '_r',
            skill: 'reading',
            scorePercent: percent,
            source: 'part_practice',
            timestamp: sess.timestamp || Date.now()
          });
        }
        if (hasW) {
          data.sessions.push({
            id: 'sync_' + sess.id + '_w',
            skill: 'writing',
            scorePercent: percent,
            source: 'part_practice',
            timestamp: sess.timestamp || Date.now()
          });
        }
        if (hasS) {
          data.sessions.push({
            id: 'sync_' + sess.id + '_s',
            skill: 'speaking',
            scorePercent: percent,
            source: 'part_practice',
            timestamp: sess.timestamp || Date.now()
          });
        }
      }
    });

    this._recomputeAllAverages(data);
  }

  /**
   * Tính toán lại điểm quân bình cho toàn bộ 6 kỹ năng
   */
  static _recomputeAllAverages(data) {
    const validSkills = ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking'];
    validSkills.forEach(skill => {
      const list = data.sessions.filter(s => s.skill === skill);
      const count = list.length;
      const sum = list.reduce((acc, s) => acc + (s.scorePercent || 0), 0);
      const average = count > 0 ? Math.round(sum / count) : 0;
      data.skills[skill] = {
        average,
        count,
        totalScore: sum
      };
    });
  }

  /**
   * Lấy điểm quân bình hiện tại (0 - 100%) của cả 6 kỹ năng
   */
  static getScores() {
    const data = this._loadData();
    return {
      grammar: data.skills.grammar?.average || 0,
      vocabulary: data.skills.vocabulary?.average || 0,
      reading: data.skills.reading?.average || 0,
      listening: data.skills.listening?.average || 0,
      writing: data.skills.writing?.average || 0,
      speaking: data.skills.speaking?.average || 0
    };
  }

  /**
   * Lấy thông tin chi tiết một kỹ năng: Điểm quân bình, số lần đã làm, các kết quả gần nhất
   */
  static getSkillDetail(skill) {
    const data = this._loadData();
    const skillData = data.skills[skill] || { average: 0, count: 0, totalScore: 0 };
    const recent = data.sessions.filter(s => s.skill === skill).slice(-5).reverse();
    return {
      average: skillData.average,
      count: skillData.count,
      recentScores: recent.map(r => r.scorePercent)
    };
  }

  /**
   * Ghi nhận một phiên làm bài mới với điểm số thực tế (0 - 100%)
   * Hệ thống sẽ tự động tính quân bình lại kỹ năng đó!
   * @param {'grammar'|'vocabulary'|'reading'|'listening'|'writing'|'speaking'} skill
   * @param {number} scorePercent Điểm số thực tế của lần làm bài đó (0 - 100%)
   * @param {Object} meta Thông tin phụ trợ (source, details, v.v.)
   */
  static recordSession(skill, scorePercent, meta = {}) {
    const validSkills = ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking'];
    if (!validSkills.includes(skill)) return;

    const clampedPercent = Math.min(100, Math.max(0, Math.round(scorePercent || 0)));
    const data = this._loadData();

    const session = {
      id: 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      skill,
      scorePercent: clampedPercent,
      source: meta.source || 'practice',
      timestamp: Date.now(),
      meta
    };

    data.sessions.push(session);
    // Giới hạn 200 phiên gần nhất
    if (data.sessions.length > 200) {
      data.sessions.shift();
    }

    // Tính lại quân bình cho kỹ năng vừa làm
    const list = data.sessions.filter(s => s.skill === skill);
    const count = list.length;
    const sum = list.reduce((acc, s) => acc + (s.scorePercent || 0), 0);
    const average = count > 0 ? Math.round(sum / count) : 0;
    data.skills[skill] = {
      average,
      count,
      totalScore: sum
    };

    this._saveData(data);

    // Phát tín hiệu cập nhật realtime cho Radar Chart và các thành phần giao diện
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('vstep:score-updated', { 
        detail: this.getScores() 
      }));
    }

    return data.skills[skill];
  }

  /**
   * Phương thức tương thích ngược
   */
  static updateSkillScore(skill, delta) {
    // Không dùng delta mù quáng nữa, chuyển hướng thành recordSession nếu có
    const current = this.getScores()[skill] || 0;
    const simulatedPercent = Math.min(100, Math.max(0, current + delta));
    return this.recordSession(skill, simulatedPercent, { source: 'legacy_update' });
  }

  /**
   * Đặt lại toàn bộ dữ liệu điểm số về 0
   */
  static resetScores() {
    const defaultData = this._getDefaultData();
    this._saveData(defaultData);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('vstep:score-updated', { detail: this.getScores() }));
    }
    return this.getScores();
  }
}
