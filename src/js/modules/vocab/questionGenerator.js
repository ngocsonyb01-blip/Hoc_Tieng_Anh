/**
 * src/js/modules/vocab/questionGenerator.js
 * Bộ sinh 6 dạng câu hỏi thích ứng theo từng cấp độ từ vựng (Level 1 - 5)
 */

export class QuestionGenerator {
  /**
   * @param {Array<Object>} allVocabList - Toàn bộ kho từ để lấy đáp án gây nhiễu (distractors)
   */
  constructor(allVocabList = []) {
    this.allVocabList = allVocabList;
  }

  /**
   * Cập nhật danh sách từ vựng nền
   * @param {Array<Object>} newList
   */
  setVocabList(newList) {
    this.allVocabList = newList;
  }

  /**
   * Sinh câu hỏi phù hợp nhất cho từ vựng dựa vào Level và lịch sử đã làm
   * @param {Object} targetWord - Từ vựng mục tiêu
   * @returns {Object} Dữ liệu câu hỏi chuẩn hóa
   */
  generateQuestion(targetWord) {
    const level = targetWord.level || 1;
    const format = this.selectFormatForLevel(level, targetWord.formatsPracticed || []);

    switch (format) {
      case 'meaning_to_word':
        return this.createMeaningToWord(targetWord);
      case 'word_to_meaning':
        return this.createWordToMeaning(targetWord);
      case 'cloze_sentence':
        return this.createClozeSentence(targetWord);
      case 'collocation':
        return this.createCollocation(targetWord);
      case 'spelling':
        return this.createSpelling(targetWord);
      case 'advanced_context':
        return this.createAdvancedContext(targetWord);
      default:
        return this.createWordToMeaning(targetWord);
    }
  }

  /**
   * Chọn dạng câu hỏi ưu tiên theo Level (1 - 5)
   * @param {number} level
   * @param {Array<string>} practicedFormats
   * @returns {string} Mã dạng câu hỏi
   */
  selectFormatForLevel(level, practicedFormats = []) {
    let candidateFormats = [];

    if (level === 1) {
      candidateFormats = ['meaning_to_word', 'word_to_meaning'];
    } else if (level === 2) {
      candidateFormats = ['word_to_meaning', 'meaning_to_word', 'cloze_sentence'];
    } else if (level === 3) {
      candidateFormats = ['cloze_sentence', 'collocation', 'meaning_to_word'];
    } else if (level === 4) {
      candidateFormats = ['spelling', 'cloze_sentence', 'collocation'];
    } else {
      // Level 5: Bền vững
      candidateFormats = ['spelling', 'advanced_context', 'collocation'];
    }

    // Ưu tiên các dạng bài chưa từng thực hành
    const unpracticed = candidateFormats.filter((fmt) => !practicedFormats.includes(fmt));
    const pool = unpracticed.length > 0 ? unpracticed : candidateFormats;

    return pool[Math.floor(Math.random() * pool.length)];
  }

  // ==========================================
  // DẠNG 1: NGHĨA TIẾNG VIỆT -> CHỌN TỪ TIẾNG ANH
  // ==========================================
  createMeaningToWord(target) {
    const distractors = this.getRandomDistractors(target, 'word', 3);
    const options = this.shuffleArray([target.word, ...distractors]);

    return {
      type: 'multiple_choice',
      format: 'meaning_to_word',
      wordId: target.id,
      prompt: 'Chọn từ tiếng Anh phù hợp với nghĩa dưới đây:',
      highlight: target.meaning,
      subText: target.partOfSpeech ? `(${target.partOfSpeech})` : '',
      options,
      correctAnswer: target.word,
      explanation: `${target.word} ${target.phonetic ? `/${target.phonetic}/` : ''}: ${target.meaning}`,
    };
  }

  // ==========================================
  // DẠNG 2: TỪ TIẾNG ANH -> CHỌN NGHĨA TIẾNG VIỆT
  // ==========================================
  createWordToMeaning(target) {
    const distractors = this.getRandomDistractors(target, 'meaning', 3);
    const options = this.shuffleArray([target.meaning, ...distractors]);

    return {
      type: 'multiple_choice',
      format: 'word_to_meaning',
      wordId: target.id,
      prompt: 'Chọn nghĩa tiếng Việt đúng của từ:',
      highlight: target.word,
      subText: target.phonetic ? `/${target.phonetic}/` : '',
      options,
      correctAnswer: target.meaning,
      explanation: `${target.word}: ${target.meaning}`,
    };
  }

  // ==========================================
  // DẠNG 3: ĐIỀN TỪ VÀO CÂU VÍ DỤ (CLOZE TEST)
  // ==========================================
  createClozeSentence(target) {
    if (!target.exampleSentence) {
      return this.createWordToMeaning(target);
    }

    const maskedSentence = this.maskWordInText(target.exampleSentence, target.word);

    const distractors = this.getRandomDistractors(target, 'word', 3);
    const options = this.shuffleArray([target.word, ...distractors]);

    return {
      type: 'multiple_choice',
      format: 'cloze_sentence',
      wordId: target.id,
      prompt: 'Chọn từ thích hợp nhất để điền vào chỗ trống:',
      highlight: maskedSentence,
      subText: `Gợi ý nghĩa: ${target.meaning}`,
      options,
      correctAnswer: target.word,
      explanation: `Câu hoàn chỉnh: "${target.exampleSentence}"`,
    };
  }

  // ==========================================
  // DẠNG 4: COLLOCATION / CỤM TỪ CỐ ĐỊNH
  // ==========================================
  createCollocation(target) {
    if (!target.collocation) {
      return this.createClozeSentence(target);
    }

    const maskedCollocation = this.maskWordInText(target.collocation, target.word);

    const distractors = this.getRandomDistractors(target, 'word', 3);
    const options = this.shuffleArray([target.word, ...distractors]);

    return {
      type: 'multiple_choice',
      format: 'collocation',
      wordId: target.id,
      prompt: 'Hoàn thành cụm từ (Collocation) sau:',
      highlight: maskedCollocation,
      subText: `Nghĩa của từ cần điền: ${target.meaning}`,
      options,
      correctAnswer: target.word,
      explanation: `Cụm từ đúng: "${target.collocation}"`,
    };
  }

  /**
   * Ẩn từ vựng trong văn bản với khả năng nhận diện biến thể ngữ pháp (s, es, ed, ing)
   */
  maskWordInText(text, targetWord) {
    if (!text || !targetWord) return text || '';
    const clean = targetWord.trim().toLowerCase();

    // 1. Khớp chính xác từ gốc
    let regex = new RegExp(`\\b${clean}\\b`, 'gi');
    if (regex.test(text)) {
      return text.replace(regex, '_______');
    }

    // 2. Khớp các biến thể chia thì/số nhiều (inflections)
    const stem = clean.replace(/(e|ing|ed|es|s)$/i, '');
    if (stem.length >= 3) {
      regex = new RegExp(`\\b${stem}(e|es|s|ed|d|ing|ly)?\\b`, 'gi');
      if (regex.test(text)) {
        return text.replace(regex, '_______');
      }
    }

    // 3. Khớp chuỗi phụ
    regex = new RegExp(clean, 'gi');
    if (regex.test(text)) {
      return text.replace(regex, '_______');
    }

    return text;
  }

  // ==========================================
  // DẠNG 5: KIỂM TRA CHÍNH TẢ (DICTATION / SPELLING)
  // ==========================================
  createSpelling(target) {
    const wordLen = target.word.length;
    const hintMask =
      wordLen > 3
        ? `${target.word[0]}${'_'.repeat(wordLen - 2)}${target.word[wordLen - 1]}`
        : `${target.word[0]}${'_'.repeat(wordLen - 1)}`;

    return {
      type: 'text_input',
      format: 'spelling',
      wordId: target.id,
      prompt: 'Gõ chính xác từ tiếng Anh theo nghĩa gợi ý:',
      highlight: target.meaning,
      subText: target.phonetic ? `Phiên âm: /${target.phonetic}/ • Gợi ý: ${hintMask} (${wordLen} ký tự)` : `Gợi ý: ${hintMask} (${wordLen} ký tự)`,
      correctAnswer: target.word.trim().toLowerCase(),
      explanation: `Từ chính xác: **${target.word}** ${target.phonetic ? `/${target.phonetic}/` : ''} (${target.meaning})`,
    };
  }

  // ==========================================
  // DẠNG 6: PHÂN TÍCH NGỮ CẢNH NÂNG CAO (B1 CONTEXT)
  // ==========================================
  createAdvancedContext(target) {
    if (!target.exampleSentence) {
      return this.createSpelling(target);
    }

    const regex = new RegExp(`\\b${target.word}\\b`, 'gi');
    const maskedSentence = target.exampleSentence.replace(regex, '_______');

    const distractors = this.getRandomDistractors(target, 'word', 3);
    const options = this.shuffleArray([target.word, ...distractors]);

    return {
      type: 'multiple_choice',
      format: 'advanced_context',
      wordId: target.id,
      prompt: 'Chọn từ phù hợp nhất với sắc thái ngữ cảnh câu sau:',
      highlight: maskedSentence,
      subText: 'Đọc kỹ câu để chọn từ đúng văn cảnh.',
      options,
      correctAnswer: target.word,
      explanation: `Ngữ cảnh: "${target.exampleSentence}" → Mang nghĩa: "${target.meaning}".`,
    };
  }

  // ==========================================
  // HÀM BỔ TRỢ (UTILITIES)
  // ==========================================

  /**
   * Lấy danh sách đáp án gây nhiễu ngẫu nhiên từ kho từ
   * @param {Object} targetWord
   * @param {'word'|'meaning'} key
   * @param {number} count
   * @returns {Array<string>}
   */
  getRandomDistractors(targetWord, key, count = 3) {
    if (key === 'word' && targetWord.distractors && targetWord.distractors.length >= count) {
      return targetWord.distractors.slice(0, count);
    }

    const availablePool = this.allVocabList.filter(
      (item) => item.id !== targetWord.id && item[key] && item[key].trim() !== ''
    );

    const shuffled = this.shuffleArray(availablePool);
    const distractors = [];

    for (const item of shuffled) {
      if (distractors.length >= count) break;
      if (!distractors.includes(item[key]) && item[key] !== targetWord[key]) {
        distractors.push(item[key]);
      }
    }

    while (distractors.length < count) {
      distractors.push(key === 'word' ? `option_${distractors.length + 1}` : `Ý nghĩa khác ${distractors.length + 1}`);
    }

    return distractors;
  }

  /**
   * Trộn ngẫu nhiên mảng phần tử (Fisher-Yates Shuffle)
   * @param {Array} array
   * @returns {Array}
   */
  shuffleArray(array) {
    const clone = [...array];
    for (let i = clone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
  }
}
