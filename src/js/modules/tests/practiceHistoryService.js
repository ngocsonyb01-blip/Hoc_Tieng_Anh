/**
 * src/js/modules/tests/practiceHistoryService.js
 * Quản lý lưu trữ và tra cứu lịch sử luyện tập & thi thử VSTEP
 * Lưu ngắn gọn: Số lần làm, kết quả từng phiên, điểm cao nhất.
 */

const STORAGE_KEY = 'vstep_practice_history_v1';

export class PracticeHistoryService {
  /**
   * Lấy toàn bộ danh sách phiên làm bài (Mới nhất xếp trước)
   */
  static getHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.warn('Failed to parse practice history', e);
      return [];
    }
  }

  /**
   * Lưu toàn bộ danh sách
   */
  static saveHistory(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn('Failed to save practice history', e);
    }
  }

  /**
   * Định dạng ngày giờ ngắn gọn (vd: 03/09 21:50)
   */
  static formatShortDateTime(timestamp = Date.now()) {
    const d = new Date(timestamp);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const mins = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month} ${hours}:${mins}`;
  }

  /**
   * Lưu 1 phiên thi thử toàn diện (Full Exam)
   */
  static recordFullExamSession({ examIndex, examName, overallScore, vstepLevel, listeningCorrect, readingCorrect, writingScore, speakingScore }) {
    const history = this.getHistory();
    const session = {
      id: 'full_' + Date.now(),
      type: 'full_exam',
      examIndex,
      examName: examName || `Đề Thi Số 0${examIndex + 1}`,
      timestamp: Date.now(),
      dateStr: this.formatShortDateTime(),
      overallScore: String(overallScore || '0.0'),
      vstepLevel: vstepLevel || 'B1',
      listeningCorrect: listeningCorrect || 0,
      readingCorrect: readingCorrect || 0,
      writingScore: writingScore || '-',
      speakingScore: speakingScore || '-'
    };

    history.unshift(session);
    // Giữ tối đa 100 phiên gần nhất
    if (history.length > 100) history.pop();
    this.saveHistory(history);
    return session;
  }

  /**
   * Lưu 1 phiên luyện từng part (Sectional Practice)
   */
  static recordPartPracticeSession({ examIndex, examName, partIds, partNames, totalQuestions, correctCount, accuracyPercent, partsBreakdown }) {
    const history = this.getHistory();
    const session = {
      id: 'part_' + Date.now(),
      type: 'part_practice',
      examIndex,
      examName: examName || `Đề Thi Số 0${examIndex + 1}`,
      timestamp: Date.now(),
      dateStr: this.formatShortDateTime(),
      partIds: partIds || [],
      partNames: partNames || [],
      totalQuestions: totalQuestions || 0,
      correctCount: correctCount || 0,
      accuracyPercent: accuracyPercent !== undefined ? accuracyPercent : 0,
      partsBreakdown: partsBreakdown || []
    };

    history.unshift(session);
    if (history.length > 100) history.pop();
    this.saveHistory(history);
    return session;
  }

  /**
   * Thống kê ngắn gọn cho một đề thi (Full Exam)
   * @returns {{ timesCount: number, bestScore: string, lastDate: string }}
   */
  static getExamStats(examIdx) {
    const history = this.getHistory();
    const examSessions = history.filter(h => h.type === 'full_exam' && h.examIndex === examIdx);

    if (examSessions.length === 0) {
      return { timesCount: 0, bestScore: null, lastDate: null };
    }

    let best = 0;
    examSessions.forEach(s => {
      const sc = parseFloat(s.overallScore) || 0;
      if (sc > best) best = sc;
    });

    return {
      timesCount: examSessions.length,
      bestScore: best.toFixed(1),
      lastDate: examSessions[0]?.dateStr || ''
    };
  }

  /**
   * Thống kê ngắn gọn cho một Part của đề
   * @returns {{ timesCount: number, bestAccuracy: number|null, lastResult: string|null }}
   */
  static getPartStats(examIdx, partId) {
    const history = this.getHistory();
    const partSessions = history.filter(h => {
      if (h.type !== 'part_practice') return false;
      if (h.examIndex !== examIdx) return false;
      return h.partIds && h.partIds.includes(partId);
    });

    if (partSessions.length === 0) {
      return { timesCount: 0, bestAccuracy: null, lastResult: null };
    }

    let bestAcc = 0;
    partSessions.forEach(s => {
      const found = (s.partsBreakdown || []).find(b => b.partId === partId);
      if (found) {
        const acc = found.total > 0 ? Math.round((found.correct / found.total) * 100) : 100;
        if (acc > bestAcc) bestAcc = acc;
      } else if (s.accuracyPercent > bestAcc) {
        bestAcc = s.accuracyPercent;
      }
    });

    const last = partSessions[0];
    const lastFound = (last.partsBreakdown || []).find(b => b.partId === partId);
    const lastResult = lastFound && lastFound.total > 0 
      ? `${lastFound.correct}/${lastFound.total}` 
      : `${last.correctCount}/${last.totalQuestions}`;

    return {
      timesCount: partSessions.length,
      bestAccuracy: bestAcc,
      lastResult
    };
  }

  /**
   * Xóa toàn bộ lịch sử
   */
  static clearHistory() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }
}
