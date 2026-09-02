/**
 * src/js/modules/speaking/speakingRecorder.js
 * Đồng hồ đếm ngược chuẩn phòng thi + Ghi âm trực tiếp qua Micro bằng MediaRecorder API
 */
export class SpeakingExamSimulator {
  /**
   * @param {string|HTMLElement} timerDisplayId 
   * @param {string|HTMLElement} audioPlaybackId 
   */
  constructor(timerDisplayId, audioPlaybackId) {
    this.timerDisplay = typeof timerDisplayId === 'string' ? document.getElementById(timerDisplayId) : timerDisplayId;
    this.audioPlayback = typeof audioPlaybackId === 'string' ? document.getElementById(audioPlaybackId) : audioPlaybackId;
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.timerInterval = null;
    this.isRecording = false;
  }

  /**
   * Bắt đầu đếm ngược thời gian (Giây)
   * @param {number} seconds - 60s (Chuẩn bị) hoặc 120s (Nói)
   * @param {Function} onComplete - Callback khi hết giờ
   * @param {Function} onTick - Callback mỗi giây
   */
  startTimer(seconds, onComplete, onTick) {
    clearInterval(this.timerInterval);
    let remaining = seconds;
    this.updateTimerDisplay(remaining);

    this.timerInterval = setInterval(() => {
      remaining--;
      this.updateTimerDisplay(remaining);
      if (onTick) onTick(remaining);

      if (remaining <= 0) {
        clearInterval(this.timerInterval);
        if (onComplete) onComplete();
      }
    }, 1000);
  }

  updateTimerDisplay(secs) {
    if (!this.timerDisplay) return;
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    this.timerDisplay.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  /**
   * Khởi động ghi âm qua Micro
   * @param {Function} onStart 
   * @param {Function} onError 
   */
  async startRecording(onStart, onError) {
    this.audioChunks = [];
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Trình duyệt không hỗ trợ MediaRecorder API.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);
      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          this.audioChunks.push(e.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        this.isRecording = false;
        // Stop all tracks in stream to release microphone
        stream.getTracks().forEach((track) => track.stop());

        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm;codecs=opus' });
        const audioUrl = URL.createObjectURL(audioBlob);

        if (this.audioPlayback) {
          this.audioPlayback.src = audioUrl;
          this.audioPlayback.style.display = 'block';
        }
      };

      this.mediaRecorder.start(100);
      this.isRecording = true;
      if (onStart) onStart();
    } catch (err) {
      console.warn('Microphone error:', err);
      this.isRecording = false;
      if (onError) onError(err);
      else if (window.showAlertModal) {
        window.showAlertModal('Vui lòng cấp quyền Micro trên trình duyệt để ghi âm bài nói.', 'Không Thể Truy Cập Micro');
      } else {
        alert('Vui lòng cấp quyền Micro trên trình duyệt để ghi âm bài nói.');
      }
    }
  }

  /**
   * Dừng ghi âm và hủy đếm giờ
   */
  stopRecording() {
    clearInterval(this.timerInterval);
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
    this.isRecording = false;
  }
}
