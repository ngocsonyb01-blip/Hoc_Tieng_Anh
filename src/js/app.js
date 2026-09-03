import { renderDashboard } from './views/dashboardView.js';
import { renderGrammarView } from './views/grammarView.js';
import { renderVocabularyView } from './views/vocabularyView.js';
import { renderVocabReviewView } from './views/vocabReviewView.js';
import { renderPronunciationView } from './views/pronunciationView.js';
import { renderListeningView } from './views/listeningView.js';
import { renderReadingView } from './views/readingView.js';
import { renderWritingView } from './views/writingView.js';
import { renderSpeakingView } from './views/speakingView.js';
import { renderTestsView } from './views/testsView.js';
import { globalAudio } from './utils/audioPlayer.js';
import { initModalSystem, showConfirmModal, showAlertModal, showToast } from './utils/modal.js';
import { openSettingsModal, closeSettingsModal } from './utils/settingsModal.js';

// Expose Modal & Settings System Globally
window.showConfirmModal = showConfirmModal;
window.showAlertModal = showAlertModal;
window.showToast = showToast;
window.openSettingsModal = openSettingsModal;
window.closeSettingsModal = closeSettingsModal;
window.openVoiceSettingsModal = () => openSettingsModal('voice');

// Global Audio Handlers for Interactive Audio Player Component
window.toggleAudioPlay = (id, text) => {
  if (globalAudio.currentId === id && globalAudio.isPlaying) {
    globalAudio.pause();
  } else if (globalAudio.currentId === id && globalAudio.isPaused) {
    globalAudio.resume();
  } else {
    globalAudio.play(id, text);
  }
};

window.stopAudioPlay = () => {
  globalAudio.stop();
};

window.replayAudio = (id, text) => {
  globalAudio.replay(id, text);
};

window.setAudioRate = (id, text, rate) => {
  globalAudio.play(id, text, rate);
};

class App {
  constructor() {
    this.currentRoute = 'dashboard';
    this.routeParams = null;
    this.theme = localStorage.getItem('vstep_theme') || 'light';
    this.isSidebarCollapsed = localStorage.getItem('vstep_sidebar_collapsed') === 'true';
    this.init();
  }

  init() {
    initModalSystem();
    // Apply Theme
    document.documentElement.setAttribute('data-theme', this.theme);
    this.updateThemeToggleIcon();

    // Apply Saved Sidebar State (Desktop)
    if (this.isSidebarCollapsed && window.innerWidth > 1024) {
      document.body.classList.add('sidebar-collapsed');
    }

    // Event Listeners
    window.addEventListener('hashchange', () => this.handleHashChange());
    
    // Theme Toggle Button
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Sidebar Toggle Buttons
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    const closeBtn = document.getElementById('sidebar-close-btn');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggleSidebar());
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.toggleSidebar());
    }

    // Keyboard shortcut (Ctrl+B / Cmd+B) to toggle sidebar
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        this.toggleSidebar();
      }
    });

    // Expose Global App & Router
    window.app = this;
    window.router = {
      navigate: (route, params = null) => {
        this.routeParams = params;
        window.location.hash = params ? `${route}/${params}` : route;
      }
    };

    // Ensure all nav-items trigger hashchange if needed and close mobile sidebar
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const route = item.getAttribute('data-route');
        if (route) {
          window.location.hash = route;
        }
        if (window.innerWidth <= 1024) {
          this.closeMobileSidebar();
        }
      });
    });

    // Initial Route Render
    this.handleHashChange();
  }

  toggleSidebar() {
    const isMobile = window.innerWidth <= 1024;
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');

    if (isMobile) {
      if (sidebar) sidebar.classList.toggle('open');
      if (backdrop) backdrop.classList.toggle('active');
    } else {
      document.body.classList.toggle('sidebar-collapsed');
      this.isSidebarCollapsed = document.body.classList.contains('sidebar-collapsed');
      localStorage.setItem('vstep_sidebar_collapsed', this.isSidebarCollapsed ? 'true' : 'false');
    }

    if (window.lucide) window.lucide.createIcons();
  }

  closeMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('vstep_theme', this.theme);
    this.updateThemeToggleIcon();
  }

  updateThemeToggleIcon() {
    const iconContainer = document.getElementById('theme-toggle-icon');
    if (iconContainer) {
      iconContainer.innerHTML = this.theme === 'dark' 
        ? '<i data-lucide="sun"></i>' 
        : '<i data-lucide="moon"></i>';
      if (window.lucide) window.lucide.createIcons();
    }
  }

  handleHashChange() {
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    const [route, params] = hash.split('/');
    this.currentRoute = route || 'dashboard';
    this.routeParams = params || null;

    this.updateActiveNav();
    this.renderCurrentView();

    // Close mobile menu if open
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.classList.remove('open');
  }

  updateActiveNav() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      const targetRoute = item.getAttribute('data-route');
      if (targetRoute === this.currentRoute) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  renderCurrentView(preserveScroll = false) {
    const contentEl = document.getElementById('main-content');
    if (!contentEl) return;

    const prevScrollX = window.scrollX;
    const prevScrollY = window.scrollY;

    try {
      switch (this.currentRoute) {
        case 'dashboard':
          contentEl.innerHTML = renderDashboard();
          break;
        case 'grammar':
          contentEl.innerHTML = renderGrammarView(this.routeParams);
          break;
        case 'vocabulary':
          contentEl.innerHTML = renderVocabularyView();
          break;
        case 'vocab-review':
          contentEl.innerHTML = renderVocabReviewView();
          break;
        case 'pronunciation':
          contentEl.innerHTML = renderPronunciationView();
          break;
        case 'listening':
          contentEl.innerHTML = renderListeningView();
          break;
        case 'reading':
          contentEl.innerHTML = renderReadingView();
          break;
        case 'writing':
          contentEl.innerHTML = renderWritingView();
          break;
        case 'speaking':
          contentEl.innerHTML = renderSpeakingView();
          break;
        case 'tests':
          contentEl.innerHTML = renderTestsView();
          break;
        default:
          contentEl.innerHTML = renderDashboard();
      }
    } catch (err) {
      console.error("View rendering error:", err);
      contentEl.innerHTML = `
        <div class="card" style="padding: 2rem; text-align: center; border-left: 4px solid var(--danger);">
          <h3 style="color: var(--danger-text);">Đã xảy ra lỗi khi hiển thị mục này</h3>
          <p style="color: var(--text-secondary);">${err.message}</p>
          <button class="btn btn-primary" onclick="window.location.hash='dashboard'">Quay Về Trang Chủ</button>
        </div>
      `;
    }

    // Scroll to top only on new route navigation, preserve on state updates
    if (!preserveScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ left: prevScrollX, top: prevScrollY, behavior: 'instant' });
    }

    // Initialize Lucide Icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

// Start App when DOM is ready or already loaded
function bootApp() {
  if (!window.vstepApp) {
    window.vstepApp = new App();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}
