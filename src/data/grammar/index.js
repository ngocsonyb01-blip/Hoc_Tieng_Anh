/**
 * Grammar Module Aggregate & Index
 */

import { SENTENCE_STRUCTURES_DATA } from './sentenceStructures.js';
import { TENSES_DATA } from './tenses.js';
import { PARTS_OF_SPEECH_DATA } from './partsOfSpeech.js';
import { VERB_PATTERNS_DATA } from './verbPatterns.js';
import { MODALS_DATA, PASSIVE_VOICE_DATA } from './modalsAndPassive.js';
import { 
  REPORTED_SPEECH_DATA, 
  CONDITIONALS_DATA, 
  RELATIVE_CLAUSES_DATA, 
  COMPARISONS_DATA, 
  QUESTIONS_DATA, 
  LINKING_WORDS_DATA 
} from './advancedStructures.js';
import { 
  SUBJECT_VERB_AGREEMENT_DATA, 
  INVERSION_AND_CLEFT_DATA 
} from './advancedMastery.js';

export const ALL_GRAMMAR_MODULES = [
  SENTENCE_STRUCTURES_DATA,
  TENSES_DATA,
  PARTS_OF_SPEECH_DATA,
  VERB_PATTERNS_DATA,
  MODALS_DATA,
  PASSIVE_VOICE_DATA,
  REPORTED_SPEECH_DATA,
  CONDITIONALS_DATA,
  RELATIVE_CLAUSES_DATA,
  COMPARISONS_DATA,
  QUESTIONS_DATA,
  LINKING_WORDS_DATA,
  SUBJECT_VERB_AGREEMENT_DATA,
  INVERSION_AND_CLEFT_DATA
];

export const grammarTopics = ALL_GRAMMAR_MODULES;
