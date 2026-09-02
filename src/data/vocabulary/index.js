// Master Vocabulary Index
import { topics } from './topics.js';
import { vocabBank1 } from './vocabBank1.js';
import { vocabBank2 } from './vocabBank2.js';
import { vocabBank3 } from './vocabBank3.js';
import { vocabBank4 } from './vocabBank4.js';
import { phrasalVerbs } from './phrasalVerbs.js';
import { collocations } from './collocations.js';
import { wordFamilies } from './wordFamilies.js';
import { IRREGULAR_VERBS_DATA } from './irregularVerbs.js';

export const allVocabulary = [
  ...vocabBank1,
  ...vocabBank2,
  ...vocabBank3,
  ...vocabBank4
];

export const irregularVerbs = IRREGULAR_VERBS_DATA;

export {
  topics,
  vocabBank1,
  vocabBank2,
  vocabBank3,
  vocabBank4,
  phrasalVerbs,
  collocations,
  wordFamilies,
  IRREGULAR_VERBS_DATA
};
