import { renderDashboard } from '../src/js/views/dashboardView.js';
import { renderGrammarView } from '../src/js/views/grammarView.js';
import { renderVocabularyView } from '../src/js/views/vocabularyView.js';
import { renderPronunciationView } from '../src/js/views/pronunciationView.js';
import { renderListeningView } from '../src/js/views/listeningView.js';
import { renderReadingView } from '../src/js/views/readingView.js';
import { renderWritingView } from '../src/js/views/writingView.js';
import { renderSpeakingView } from '../src/js/views/speakingView.js';
import { renderTestsView } from '../src/js/views/testsView.js';
import { renderVocabReviewView } from '../src/js/views/vocabReviewView.js';
import { grammarTopics } from '../src/data/grammar/index.js';

// Setup mock window & document
global.window = {
  location: { hash: '#dashboard' },
  addEventListener: () => {},
  scrollTo: () => {},
  speechSynthesis: { speak: () => {} },
  SpeechSynthesisUtterance: function() {},
  lucide: { createIcons: () => {} }
};
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {}
};
global.document = {
  documentElement: { setAttribute: () => {} },
  getElementById: () => ({ innerHTML: '', addEventListener: () => {}, querySelectorAll: () => [], style: {}, classList: { add: () => {}, remove: () => {} } }),
  querySelector: () => ({ addEventListener: () => {}, innerHTML: '', style: {} }),
  querySelectorAll: () => [],
  createElement: () => ({ innerHTML: '', style: {}, addEventListener: () => {}, classList: { add: () => {}, remove: () => {} } }),
  body: { appendChild: () => {} },
  addEventListener: () => {}
};

console.log("Testing all views for rendering errors...");

try {
  console.log("Testing renderDashboard()...");
  const d = renderDashboard();
  console.log(" - Dashboard rendered, length:", d.length);

  console.log("Testing renderGrammarView() across all topics...");
  grammarTopics.forEach(t => {
    const g = renderGrammarView(t.id);
    console.log(` - Grammar [${t.id}] rendered, length:`, g.length);
  });

  console.log("Testing renderVocabularyView()...");
  const v = renderVocabularyView();
  console.log(" - Vocabulary rendered, length:", v.length);

  console.log("Testing renderVocabReviewView()...");
  const vr = renderVocabReviewView();
  console.log(" - VocabReview rendered, length:", vr.length);

  console.log("Testing renderPronunciationView()...");
  const p = renderPronunciationView();
  console.log(" - Pronunciation rendered, length:", p.length);

  console.log("Testing renderListeningView()...");
  const l = renderListeningView();
  console.log(" - Listening rendered, length:", l.length);

  console.log("Testing renderReadingView()...");
  const r = renderReadingView();
  console.log(" - Reading rendered, length:", r.length);

  console.log("Testing renderWritingView()...");
  const w = renderWritingView();
  console.log(" - Writing rendered, length:", w.length);

  console.log("Testing renderSpeakingView()...");
  const s = renderSpeakingView();
  console.log(" - Speaking rendered, length:", s.length);

  console.log("Testing renderTestsView()...");
  const t = renderTestsView();
  console.log(" - Tests rendered, length:", t.length);

  console.log("\nALL 10 VIEWS RENDERED WITH ZERO RUNTIME EXCEPTIONS!");
} catch (err) {
  console.error("Rendering ERROR:", err);
  process.exit(1);
}
