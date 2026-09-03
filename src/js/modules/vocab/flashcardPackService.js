import { allVocabulary } from '../../../data/vocabulary/index.js';
import { VOCAB_TOPICS } from '../../../data/vocabulary/topics.js';

const STORAGE_KEY = 'vstep_vocab_flashcard_packs_v1';

export class FlashcardPackService {
  /**
   * Lấy toàn bộ danh sách gói flashcard từ localStorage
   */
  static getPacks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.warn('Lỗi đọc danh sách gói flashcard:', e);
      return [];
    }
  }

  /**
   * Lưu toàn bộ danh sách gói vào localStorage
   */
  static savePacks(packs) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(packs));
    } catch (e) {
      console.error('Lỗi lưu gói flashcard:', e);
    }
  }

  /**
   * Lấy tập hợp các ID từ đã được sử dụng trong bất kỳ gói nào trước đó
   */
  static getUsedWordIds() {
    const packs = this.getPacks();
    const usedSet = new Set();
    packs.forEach(pack => {
      if (Array.isArray(pack.wordIds)) {
        pack.wordIds.forEach(id => usedSet.add(id));
      } else if (Array.isArray(pack.words)) {
        pack.words.forEach(w => usedSet.add(w.id || w.word));
      }
    });
    return usedSet;
  }

  /**
   * Lấy danh sách từ khả dụng (chưa từng nằm trong bất kỳ gói nào) theo các chủ đề được chọn
   */
  static getAvailableWordsForTopics(selectedTopicIds = []) {
    const usedWordIds = this.getUsedWordIds();
    const isSelectAll = !selectedTopicIds || selectedTopicIds.length === 0 || selectedTopicIds.includes('all');

    return allVocabulary.filter(item => {
      // 1. Kiểm tra chủ đề
      if (!isSelectAll && !selectedTopicIds.includes(item.topicId)) {
        return false;
      }
      // 2. Đảm bảo từ CHƯA TỪNG được dùng trong bất kỳ gói nào
      const wordIdentifier = item.id || item.word;
      if (usedWordIds.has(wordIdentifier)) {
        return false;
      }
      return true;
    });
  }

  /**
   * Đếm số từ khả dụng và tổng số từ theo từng chủ đề
   */
  static getTopicsStats() {
    const usedWordIds = this.getUsedWordIds();
    const topicStats = {};

    VOCAB_TOPICS.forEach(t => {
      topicStats[t.slug] = {
        total: 0,
        available: 0,
        name: t.name,
        vn: t.vn,
        icon: t.icon,
        slug: t.slug
      };
    });

    allVocabulary.forEach(w => {
      const slug = w.topicId;
      if (topicStats[slug]) {
        topicStats[slug].total += 1;
        const wId = w.id || w.word;
        if (!usedWordIds.has(wId)) {
          topicStats[slug].available += 1;
        }
      }
    });

    return topicStats;
  }

  /**
   * Tạo gói Flashcard mới theo yêu cầu người dùng
   * @param {Object} options
   * @param {string} options.name Tên gói
   * @param {number} options.requestedCount Số lượng từ người dùng muốn
   * @param {string[]} options.selectedTopicIds Danh sách slug chủ đề được tích chọn
   */
  static createPack({ name, requestedCount = 20, selectedTopicIds = [] }) {
    const packs = this.getPacks();
    const finalName = (name && name.trim()) ? name.trim() : `Gói Flashcard #${packs.length + 1}`;
    const count = Math.max(1, parseInt(requestedCount) || 20);

    // 1. Lấy danh sách từ chưa sử dụng thuộc các chủ đề được chọn
    const availablePool = this.getAvailableWordsForTopics(selectedTopicIds);

    if (availablePool.length === 0) {
      return {
        success: false,
        message: 'Tất cả từ vựng trong các chủ đề đã chọn đều đã được đưa vào các gói trước đó! Hãy tích chọn thêm chủ đề khác hoặc xóa bớt gói cũ.'
      };
    }

    // 2. Trộn ngẫu nhiên (Fisher-Yates Shuffle)
    const shuffled = [...availablePool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 3. Lấy đúng số lượng từ yêu cầu (hoặc tối đa số từ còn lại)
    const actualCount = Math.min(count, shuffled.length);
    const selectedWords = shuffled.slice(0, actualCount);

    // Tìm tên các chủ đề đã chọn
    let topicNames = [];
    if (!selectedTopicIds || selectedTopicIds.length === 0 || selectedTopicIds.includes('all')) {
      topicNames = ['Tất cả chủ đề'];
    } else {
      topicNames = selectedTopicIds.map(slug => {
        const found = VOCAB_TOPICS.find(t => t.slug === slug);
        return found ? found.vn : slug;
      });
    }

    const newPack = {
      id: `pack-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      name: finalName,
      createdAt: new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      topicIds: selectedTopicIds,
      topicNames: topicNames,
      wordCount: actualCount,
      wordIds: selectedWords.map(w => w.id || w.word),
      words: selectedWords.map(w => ({
        id: w.id || w.word,
        word: w.word,
        phonetic: w.phonetic || '',
        pos: w.pos || 'n',
        meaningVn: w.meaningVn || '',
        definition: w.definition || '',
        example: w.example || '',
        exampleVn: w.exampleVn || '',
        collocations: w.collocations || '',
        topicId: w.topicId,
        topicName: w.topicName || ''
      })),
      studyProgress: {
        cardsLearned: 0,
        masteredWordIds: [],
        lastTestedAt: null,
        lastScore: null,
        bestScore: null,
        testCount: 0
      }
    };

    // 4. Lưu gói vào danh sách
    packs.unshift(newPack);
    this.savePacks(packs);

    let notice = `Đã tạo thành công gói "${finalName}" với ${actualCount} từ vựng!`;
    if (actualCount < count) {
      notice = `Các chủ đề đã chọn chỉ còn ${actualCount} từ chưa dùng. Đã tạo gói với ${actualCount} từ!`;
    }

    return {
      success: true,
      pack: newPack,
      message: notice
    };
  }

  /**
   * Xóa một gói flashcard theo ID
   */
  static deletePack(packId) {
    const packs = this.getPacks();
    const filtered = packs.filter(p => p.id !== packId);
    this.savePacks(filtered);
    return filtered;
  }

  /**
   * Cập nhật trạng thái nhớ từ trong chế độ Lật Thẻ
   */
  static toggleWordMastery(packId, wordId, isMastered) {
    const packs = this.getPacks();
    const pack = packs.find(p => p.id === packId);
    if (!pack) return null;

    if (!pack.studyProgress) {
      pack.studyProgress = {
        cardsLearned: 0,
        masteredWordIds: [],
        lastTestedAt: null,
        lastScore: null,
        bestScore: null,
        testCount: 0
      };
    }

    const masteredSet = new Set(pack.studyProgress.masteredWordIds || []);
    if (isMastered) {
      masteredSet.add(wordId);
    } else {
      masteredSet.delete(wordId);
    }

    pack.studyProgress.masteredWordIds = Array.from(masteredSet);
    pack.studyProgress.cardsLearned = masteredSet.size;

    this.savePacks(packs);
    return pack;
  }

  /**
   * Lưu kết quả làm bài kiểm tra trắc nghiệm của gói
   */
  static recordTestResult(packId, correctCount, totalQuestions) {
    const packs = this.getPacks();
    const pack = packs.find(p => p.id === packId);
    if (!pack) return null;

    if (!pack.studyProgress) {
      pack.studyProgress = {
        cardsLearned: 0,
        masteredWordIds: [],
        lastTestedAt: null,
        lastScore: null,
        bestScore: null,
        testCount: 0
      };
    }

    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    pack.studyProgress.lastScore = scorePercent;
    pack.studyProgress.testCount = (pack.studyProgress.testCount || 0) + 1;
    pack.studyProgress.lastTestedAt = new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

    if (pack.studyProgress.bestScore === null || scorePercent > pack.studyProgress.bestScore) {
      pack.studyProgress.bestScore = scorePercent;
    }

    this.savePacks(packs);
    return pack;
  }
}
