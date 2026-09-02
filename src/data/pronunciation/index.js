/**
 * Master Pronunciation Module Export
 */
import { IPA_CHART_DATA } from './ipaChart.js';
import { STRESS_AND_INTONATION_DATA } from './stressAndIntonation.js';
import { CONNECTED_SPEECH_DATA } from './connectedSpeech.js';
import { VIETNAMESE_COMMON_MISTAKES_DATA } from './vietnameseCommonMistakes.js';

export const monophthongs = IPA_CHART_DATA.vowels.monophthongs;
export const diphthongs = IPA_CHART_DATA.vowels.diphthongs;
export const consonants = [
  ...IPA_CHART_DATA.consonants.voiceless,
  ...IPA_CHART_DATA.consonants.voiced
];

export const wordStressRules = STRESS_AND_INTONATION_DATA.wordStress?.rules || [];
export const sentenceStressRules = STRESS_AND_INTONATION_DATA.sentenceStress?.rules || [];
export const intonationRules = STRESS_AND_INTONATION_DATA.intonation?.patterns || [];

export const connectedSpeechRules = CONNECTED_SPEECH_DATA.sections || [];
export const vietnameseCommonMistakes = VIETNAMESE_COMMON_MISTAKES_DATA.mistakes || [];

export {
  IPA_CHART_DATA,
  STRESS_AND_INTONATION_DATA,
  CONNECTED_SPEECH_DATA,
  VIETNAMESE_COMMON_MISTAKES_DATA
};
