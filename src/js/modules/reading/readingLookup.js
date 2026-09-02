import { updateUserVocabItem, getUserVocabList } from '../vocab/vocabModel.js';
import { speakText } from '../../utils/audioPlayer.js';
import { lookupWordDefinition } from './dictionaryEngine.js';

/**
 * src/js/modules/reading/readingLookup.js
 * Tra từ nhanh khi bôi đen đoạn văn trong bài đọc và thêm vào kho ôn tập Spaced Repetition
 */
export function initReadingInTextLookup(containerSelector = '.reading-passage-content', onSaveWordCallback) {
  if (typeof document === 'undefined' || !document.querySelector) return;
  const container = document.querySelector(containerSelector) || document.getElementById('reading-passage-text');
  if (!container) return;

  // Tạo Popup DOM nếu chưa tồn tại
  let popup = document.getElementById('reading-lookup-popup');
  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'reading-lookup-popup';
    popup.className = 'lookup-popup-card';
    popup.style.display = 'none';
    popup.style.position = 'absolute';
    popup.style.zIndex = '9999';
    document.body.appendChild(popup);
  }

  // Lắng nghe sự kiện bôi đen (mouseup)
  container.addEventListener('mouseup', (e) => {
    const selection = window.getSelection();
    const selectedText = selection ? selection.toString().trim() : '';

    if (selectedText.length > 1 && !selectedText.includes(' ') && /^[a-zA-Z-]+$/.test(selectedText)) {
      const cleanWord = selectedText.toLowerCase();
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      // Hiển thị khung popup
      popup.style.left = `${window.scrollX + rect.left}px`;
      popup.style.top = `${window.scrollY + rect.bottom + 8}px`;
      popup.style.display = 'block';

      // Tra cứu chuẩn xác từ điển
      const result = lookupWordDefinition(cleanWord);

      const phonetic = result ? result.phonetic : '';
      const meaning = result ? result.meaning : 'Đang tra nghĩa...';
      const pos = result ? result.pos : 'noun';
      const example = result ? (result.example || '') : '';

      popup.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.35rem;">
          <div>
            <span style="font-size: 1.05rem; font-weight: 800; color: var(--primary);">${cleanWord}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 4px;">(${pos}) ${phonetic ? `/${phonetic}/` : ''}</span>
          </div>
          <button id="lookup-audio-btn" class="btn btn-secondary btn-icon btn-sm" style="padding: 2px 6px; border-radius: 4px;" title="Phát âm">
            🔊
          </button>
        </div>
        <div style="font-size: 0.9rem; color: var(--text-primary); font-weight: 600; margin-bottom: 0.5rem; line-height: 1.4; border-left: 3px solid var(--primary); padding-left: 0.5rem; background: var(--bg-muted); border-radius: 4px; padding: 0.35rem 0.5rem;">
          ${meaning}
        </div>
        ${example ? `<div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic; margin-bottom: 0.6rem;">"${example}"</div>` : ''}
        <button id="btn-add-vocab-quick" class="btn btn-primary btn-sm" style="width: 100%; font-size: 0.775rem; font-weight: 700; padding: 0.35rem 0.6rem; display: flex; align-items: center; justify-content: center; gap: 0.3rem;">
          <span>+ Lưu vào kho ôn tập</span>
        </button>
      `;

      // Audio pronounce button
      document.getElementById('lookup-audio-btn')?.addEventListener('click', (ev) => {
        ev.stopPropagation();
        speakText(cleanWord, 'en-US');
      });

      // Save to Spaced Repetition review list
      document.getElementById('btn-add-vocab-quick')?.addEventListener('click', (ev) => {
        ev.stopPropagation();
        
        const newItem = {
          id: `lookup_${cleanWord}_${Date.now()}`,
          word: cleanWord,
          meaning: meaning,
          partOfSpeech: pos,
          phonetic: phonetic,
          exampleSentence: example || `Context in reading passage for "${cleanWord}".`,
          collocation: matched ? (matched.collocations || '') : '',
          distractors: [],
          masteryScore: 0,
          level: 1,
          totalCorrect: 0,
          totalWrong: 0,
          consecutiveCorrect: 0,
          lastReviewedAt: Date.now(),
          formatsPracticed: []
        };

        updateUserVocabItem(newItem);
        if (window.showToast) {
          window.showToast(`Đã lưu "${cleanWord}" vào kho ôn tập thích ứng!`, 'success');
        }
        if (onSaveWordCallback) {
          onSaveWordCallback(cleanWord, newItem);
        }
        popup.style.display = 'none';
      });

    } else {
      if (popup && !popup.contains(e.target)) {
        popup.style.display = 'none';
      }
    }
  });

  // Tự động đóng popup khi nhấp chuột ra ngoài
  document.addEventListener('mousedown', (e) => {
    if (popup && !popup.contains(e.target)) {
      popup.style.display = 'none';
    }
  });
}
