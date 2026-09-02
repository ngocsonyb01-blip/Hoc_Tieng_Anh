/**
 * src/js/modules/vocab/adaptiveEngine.js
 * Engine kiểm tra thích ứng (Adaptive Spaced Repetition Engine)
 */

export class AdaptiveVocabEngine {
  /**
   * @param {Array<Object>} vocabList - Danh sách toàn bộ từ vựng kèm trạng thái
   * @param {number} cooldownSize - Số lượng từ vừa xuất hiện cần chặn lặp (mặc định: 8)
   */
  constructor(vocabList = [], cooldownSize = 8) {
    this.vocabList = vocabList;
    this.cooldownQueue = []; // Lưu danh sách ID các từ gần nhất
    this.cooldownSize = cooldownSize;
  }

  /**
   * Cập nhật danh sách từ vựng của engine
   * @param {Array<Object>} newList
   */
  setVocabList(newList) {
    this.vocabList = newList;
  }

  /**
   * Tính trọng số xuất hiện của một từ vựng
   * @param {Object} item - Bản ghi từ vựng
   * @returns {number} Trọng số (càng lớn càng dễ được bốc)
   */
  calculateWeight(item) {
    const now = Date.now();
    const lastReviewed = item.lastReviewedAt || 0;
    
    // Tính khoảng cách ngày kể từ lần ôn cuối (chưa ôn tính mặc định 30 ngày)
    const daysSinceReview = lastReviewed > 0 
      ? (now - lastReviewed) / (1000 * 60 * 60 * 24) 
      : 30;

    const masteryScore = item.masteryScore ?? 0;

    // 1. Trọng số độ yếu: Điểm nhớ càng thấp -> Trọng số càng cao
    const weaknessWeight = (100 - masteryScore) * 1.5;

    // 2. Trọng số quên: Càng lâu chưa ôn -> Trọng số càng tăng (tối đa 50 điểm)
    const lapseWeight = Math.min(daysSinceReview * 5, 50);

    // 3. Trọng số cơ bản: Đảm bảo mọi từ đều có xác suất xuất hiện
    const baseWeight = 10;

    return Math.max(1, weaknessWeight + lapseWeight + baseWeight);
  }

  /**
   * Bốc ngẫu nhiên 1 từ theo giải thuật Weighted Random có áp dụng Cooldown
   * @returns {Object|null} Từ vựng được chọn
   */
  getNextWord() {
    if (!this.vocabList || this.vocabList.length === 0) {
      return null;
    }

    // Lọc pool từ hợp lệ (loại trừ các từ đang trong cooldown)
    let eligiblePool = this.vocabList.filter(
      (item) => !this.cooldownQueue.includes(item.id)
    );

    // Nếu toàn bộ từ đều nằm trong cooldown (kho từ nhỏ hơn cooldownSize), reset tạm thời
    if (eligiblePool.length === 0) {
      eligiblePool = this.vocabList;
    }

    // Tính mảng trọng số tương ứng
    const weights = eligiblePool.map((item) => this.calculateWeight(item));
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);

    // Bốc ngẫu nhiên theo trọng số
    let randomThreshold = Math.random() * totalWeight;
    let selectedWord = eligiblePool[eligiblePool.length - 1];

    for (let i = 0; i < eligiblePool.length; i++) {
      randomThreshold -= weights[i];
      if (randomThreshold <= 0) {
        selectedWord = eligiblePool[i];
        break;
      }
    }

    // Cập nhật hàng đợi Cooldown
    this.updateCooldown(selectedWord.id);
    return selectedWord;
  }

  /**
   * Quản lý hàng đợi chống lặp lại từ quá nhanh
   * @param {string|number} wordId
   */
  updateCooldown(wordId) {
    this.cooldownQueue.push(wordId);
    if (this.cooldownQueue.length > this.cooldownSize) {
      this.cooldownQueue.shift();
    }
  }

  /**
   * Xóa sạch hàng đợi Cooldown khi bắt đầu phiên mới
   */
  resetCooldown() {
    this.cooldownQueue = [];
  }

  /**
   * Cập nhật kết quả sau khi trả lời và tính toán lại điểm ghi nhớ
   * @param {string|number} wordId - ID của từ
   * @param {boolean} isCorrect - Trả lời đúng hay sai
   * @param {string} questionFormat - Dạng câu hỏi vừa làm
   * @returns {Object|null} Bản ghi từ sau khi đã cập nhật
   */
  recordResult(wordId, isCorrect, questionFormat = '') {
    const item = this.vocabList.find((w) => w.id === wordId);
    if (!item) return null;

    const now = Date.now();
    const lastReviewed = item.lastReviewedAt || 0;
    const daysSinceReview = lastReviewed > 0 
      ? (now - lastReviewed) / (1000 * 60 * 60 * 24) 
      : 1;

    // Cập nhật timestamp & danh sách dạng bài đã làm
    item.lastReviewedAt = now;
    if (!Array.isArray(item.formatsPracticed)) {
      item.formatsPracticed = [];
    }
    if (questionFormat && !item.formatsPracticed.includes(questionFormat)) {
      item.formatsPracticed.push(questionFormat);
    }

    // Khởi tạo các giá trị mặc định nếu chưa có
    item.totalCorrect = item.totalCorrect ?? 0;
    item.totalWrong = item.totalWrong ?? 0;
    item.consecutiveCorrect = item.consecutiveCorrect ?? 0;
    item.masteryScore = item.masteryScore ?? 0;

    const previousLevel = item.level || 1;

    if (isCorrect) {
      item.totalCorrect += 1;
      item.consecutiveCorrect += 1;
      
      // Thưởng khoảng cách: Đúng sau thời gian càng dài thì cộng càng nhiều điểm
      const intervalBonus = Math.min(Math.floor(daysSinceReview * 1.5), 10);
      item.masteryScore = Math.min(100, item.masteryScore + 8 + intervalBonus);
    } else {
      item.totalWrong += 1;
      item.consecutiveCorrect = 0;
      
      // Phạt điểm khi sai để tăng xác suất gặp lại
      item.masteryScore = Math.max(0, item.masteryScore - 15);
    }

    // Phân tầng 5 cấp độ nhớ
    item.level = this.calculateLevel(item.masteryScore);

    return {
      updatedItem: item,
      levelChanged: item.level !== previousLevel,
      previousLevel,
      currentLevel: item.level,
    };
  }

  /**
   * Tính level dựa theo thang điểm 0 - 100
   * @param {number} score
   * @returns {number} Level từ 1 đến 5
   */
  calculateLevel(score) {
    if (score <= 20) return 1; // 🔴 Chưa nắm
    if (score <= 45) return 2; // 🟠 Đang hình thành
    if (score <= 70) return 3; // 🟡 Đang củng cố
    if (score <= 89) return 4; // 🟢 Nhớ tốt
    return 5;                  // 🔵 Nhớ bền vững
  }
}
