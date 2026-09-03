import { FlashcardTestComponent } from '../modules/vocab/flashcardTestComponent.js';

export function renderVocabReviewView() {
  // Bind handlers and re-render on state changes
  FlashcardTestComponent.initWindowBindings(() => {
    const outlet = document.getElementById('main-content');
    if (outlet && (window.location.hash === '#vocab-review' || window.location.hash === '#/vocab-review')) {
      outlet.innerHTML = renderVocabReviewView();
      if (window.lucide) window.lucide.createIcons();
    }
  });

  return `
    <div class="vocab-review-page animate-fade-in" style="max-width: 1000px; margin: 0 auto; padding-bottom: 3rem;">
      ${FlashcardTestComponent.render()}
    </div>
  `;
}
