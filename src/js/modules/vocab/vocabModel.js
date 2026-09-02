import { allVocabulary } from '../../../data/vocabulary/index.js';

const STORAGE_KEY_USER_VOCAB = 'vstep_user_vocab_db_v1';

/**
 * Interface UserVocabItem:
 * {
 *   id: string,
 *   word: string,
 *   meaning: string,
 *   partOfSpeech: string,
 *   phonetic: string,
 *   exampleSentence: string,
 *   collocation: string,
 *   distractors: string[],
 *   masteryScore: number,       // 0 - 100
 *   level: 1 | 2 | 3 | 4 | 5,
 *   totalCorrect: number,
 *   totalWrong: number,
 *   consecutiveCorrect: number,
 *   lastReviewedAt: number,
 *   formatsPracticed: string[]
 * }
 */

let memoryCache = null;

/**
 * Initializes and retrieves the user vocabulary progress list
 * @returns {Array<Object>}
 */
export function getUserVocabList() {
  if (memoryCache && memoryCache.length > 0) {
    return memoryCache;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER_VOCAB);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryCache = parsed;
        return memoryCache;
      }
    }
  } catch (e) {
    console.warn('Error reading user vocab from localStorage:', e);
  }

  // Initialize fresh database from allVocabulary
  memoryCache = (allVocabulary || []).map((item, idx) => ({
    id: item.id || `vocab_${idx + 1}`,
    word: item.word || '',
    meaning: item.meaningVn || item.meaning || '',
    partOfSpeech: item.pos || '',
    phonetic: (item.phonetic || '').replace(/^\/|\/$/g, ''),
    exampleSentence: item.example || '',
    collocation: item.collocations || '',
    distractors: [],
    masteryScore: 0,
    level: 1,
    totalCorrect: 0,
    totalWrong: 0,
    consecutiveCorrect: 0,
    lastReviewedAt: 0,
    formatsPracticed: []
  }));

  saveUserVocabList(memoryCache);
  return memoryCache;
}

/**
 * Persists the entire vocabulary state to localStorage
 * @param {Array<Object>} list
 */
export function saveUserVocabList(list) {
  memoryCache = list;
  try {
    localStorage.setItem(STORAGE_KEY_USER_VOCAB, JSON.stringify(list));
  } catch (e) {
    console.warn('Error saving user vocab to localStorage:', e);
  }
}

/**
 * Updates a single user vocab item
 * @param {Object} updatedItem
 */
export function updateUserVocabItem(updatedItem) {
  const list = getUserVocabList();
  const index = list.findIndex(item => item.id === updatedItem.id);
  if (index !== -1) {
    list[index] = { ...list[index], ...updatedItem };
    saveUserVocabList(list);
  }
}

/**
 * Resets user vocabulary learning state
 */
export function resetUserVocabData() {
  localStorage.removeItem(STORAGE_KEY_USER_VOCAB);
  memoryCache = null;
  return getUserVocabList();
}

/**
 * Returns overall statistics for the vocabulary collection
 */
export function getVocabStats() {
  const list = getUserVocabList();
  const total = list.length;
  const levelCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let totalMastery = 0;
  let reviewedCount = 0;

  for (const item of list) {
    const lvl = item.level || 1;
    levelCounts[lvl] = (levelCounts[lvl] || 0) + 1;
    totalMastery += (item.masteryScore || 0);
    if ((item.lastReviewedAt || 0) > 0) {
      reviewedCount++;
    }
  }

  const avgMastery = total > 0 ? Math.round(totalMastery / total) : 0;

  return {
    total,
    reviewedCount,
    avgMastery,
    levelCounts
  };
}
