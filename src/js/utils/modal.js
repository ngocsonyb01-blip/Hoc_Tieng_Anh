/**
 * Professional Floating Modal & Notification System (Replaces browser alert & confirm)
 * Eliminates ugly "localhost cho biết" dialogs with modern, animated glassmorphism modals
 */

export function initModalSystem() {
  if (document.getElementById('custom-modal-container')) return;

  const modalContainer = document.createElement('div');
  modalContainer.id = 'custom-modal-container';
  modalContainer.style.display = 'none';
  modalContainer.style.position = 'fixed';
  modalContainer.style.inset = '0';
  modalContainer.style.background = 'rgba(15, 23, 42, 0.65)';
  modalContainer.style.backdropFilter = 'blur(6px)';
  modalContainer.style.zIndex = '99999';
  modalContainer.style.alignItems = 'center';
  modalContainer.style.justifyContent = 'center';
  modalContainer.style.padding = '1.5rem';
  modalContainer.style.transition = 'all 0.25s ease';

  document.body.appendChild(modalContainer);

  // Toast Container
  const toastContainer = document.createElement('div');
  toastContainer.id = 'custom-toast-container';
  toastContainer.style.position = 'fixed';
  toastContainer.style.top = '1.5rem';
  toastContainer.style.right = '1.5rem';
  toastContainer.style.zIndex = '100000';
  toastContainer.style.display = 'flex';
  toastContainer.style.flexDirection = 'column';
  toastContainer.style.gap = '0.75rem';
  toastContainer.style.pointerEvents = 'none';

  document.body.appendChild(toastContainer);
}

/**
 * Shows an interactive floating confirmation modal
 */
export function showConfirmModal({
  title = 'Xác Nhận Hành Động',
  message = '',
  icon = 'help-circle',
  iconColor = 'var(--primary)',
  confirmText = 'Xác Nhận',
  confirmClass = 'btn-primary',
  cancelText = 'Hủy Bỏ',
  onConfirm = () => {},
  onCancel = () => {}
}) {
  const container = document.getElementById('custom-modal-container');
  if (!container) return;

  container.innerHTML = `
    <div class="card animate-scale-in" style="max-width: 480px; width: 100%; padding: 2rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: var(--shadow-xl); text-align: center; position: relative;">
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--bg-muted); color: ${iconColor}; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto;">
        <i data-lucide="${icon}" style="width: 30px; height: 30px;"></i>
      </div>

      <h3 style="margin: 0 0 0.5rem 0; font-size: 1.35rem; color: var(--text-primary); font-family: var(--font-heading);">${title}</h3>
      <p style="margin: 0 0 1.75rem 0; font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${message}</p>

      <div style="display: flex; gap: 0.75rem; justify-content: center;">
        <button id="modal-cancel-btn" class="btn btn-secondary" style="padding: 0.65rem 1.25rem; font-weight: 600;">
          ${cancelText}
        </button>
        <button id="modal-confirm-btn" class="btn ${confirmClass}" style="padding: 0.65rem 1.5rem; font-weight: 700;">
          ${confirmText}
        </button>
      </div>
    </div>
  `;

  container.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();

  const confirmBtn = document.getElementById('modal-confirm-btn');
  const cancelBtn = document.getElementById('modal-cancel-btn');

  const close = () => {
    container.style.display = 'none';
  };

  confirmBtn.onclick = () => {
    close();
    onConfirm();
  };

  cancelBtn.onclick = () => {
    close();
    onCancel();
  };
}

/**
 * Shows a floating alert modal (Replaces alert)
 */
export function showAlertModal({
  title = 'Thông Báo',
  message = '',
  icon = 'info',
  iconColor = 'var(--primary)',
  btnText = 'Đã Hiểu',
  onClose = () => {}
}) {
  const container = document.getElementById('custom-modal-container');
  if (!container) return;

  container.innerHTML = `
    <div class="card animate-scale-in" style="max-width: 460px; width: 100%; padding: 2rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: var(--shadow-xl); text-align: center; position: relative;">
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--bg-muted); color: ${iconColor}; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto;">
        <i data-lucide="${icon}" style="width: 30px; height: 30px;"></i>
      </div>

      <h3 style="margin: 0 0 0.5rem 0; font-size: 1.35rem; color: var(--text-primary); font-family: var(--font-heading);">${title}</h3>
      <p style="margin: 0 0 1.75rem 0; font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${message}</p>

      <button id="modal-alert-btn" class="btn btn-primary" style="padding: 0.65rem 2rem; font-weight: 700;">
        ${btnText}
      </button>
    </div>
  `;

  container.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();

  const alertBtn = document.getElementById('modal-alert-btn');
  alertBtn.onclick = () => {
    container.style.display = 'none';
    onClose();
  };
}

/**
 * Shows a lightweight floating Toast Notification
 */
export function showToast(message, type = 'success', duration = 3000) {
  const toastContainer = document.getElementById('custom-toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.style.pointerEvents = 'auto';
  toast.style.padding = '0.75rem 1.25rem';
  toast.style.borderRadius = 'var(--radius-md)';
  toast.style.fontSize = '0.9rem';
  toast.style.fontWeight = '600';
  toast.style.boxShadow = 'var(--shadow-lg)';
  toast.style.display = 'flex';
  toast.style.alignItems = 'center';
  toast.style.gap = '0.5rem';
  toast.style.animation = 'fadeInDown 0.3s ease forwards';
  toast.style.transition = 'all 0.3s ease';

  if (type === 'success') {
    toast.style.background = '#065f46';
    toast.style.color = '#fff';
    toast.innerHTML = `<i data-lucide="check-circle" style="width: 18px; height: 18px;"></i> ${message}`;
  } else if (type === 'error') {
    toast.style.background = '#991b1b';
    toast.style.color = '#fff';
    toast.innerHTML = `<i data-lucide="alert-circle" style="width: 18px; height: 18px;"></i> ${message}`;
  } else {
    toast.style.background = '#1e293b';
    toast.style.color = '#fff';
    toast.innerHTML = `<i data-lucide="info" style="width: 18px; height: 18px;"></i> ${message}`;
  }

  toastContainer.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, duration);
}
