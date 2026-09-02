import { vstepFramework } from '../../data/vstepFramework.js';
import { RadarChart } from '../modules/analytics/radarChart.js';
import { AnalyticsStore } from '../modules/analytics/analyticsStore.js';

function updateDashboardRadarDOM() {
  const chartContainer = document.getElementById('competency-radar-chart');
  const barsContainer = document.getElementById('competency-bars-list');
  if (!chartContainer) return;

  const scores = AnalyticsStore.getScores();

  // 1. Draw SVG Radar Chart
  const radar = new RadarChart('competency-radar-chart', { size: 340 });
  radar.render(scores);

  // 2. Draw Competency Progress Bars & Dynamic Assessment Advice
  if (barsContainer) {
    const items = [
      { key: 'reading', label: 'Reading', color: '#3b82f6', icon: 'book-open' },
      { key: 'listening', label: 'Listening', color: '#06b6d4', icon: 'headphones' },
      { key: 'writing', label: 'Writing', color: '#8b5cf6', icon: 'pen-tool' },
      { key: 'speaking', label: 'Speaking', color: '#ec4899', icon: 'mic' },
      { key: 'grammar', label: 'Grammar', color: '#10b981', icon: 'book-marked' },
      { key: 'vocabulary', label: 'Vocabulary', color: '#f59e0b', icon: 'sparkles' }
    ];

    let totalScore = 0;
    barsContainer.innerHTML = items.map(item => {
      const score = Math.round(scores[item.key] ?? 0);
      totalScore += score;
      return `
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.825rem; font-weight: 600; margin-bottom: 0.25rem;">
            <span style="display: flex; align-items: center; gap: 0.35rem; color: var(--text-primary);">
              <i data-lucide="${item.icon}" style="width: 14px; height: 14px; color: ${item.color};"></i>
              ${item.label}
            </span>
            <span style="font-family: var(--font-mono); font-weight: 700; color: ${score > 0 ? item.color : 'var(--text-muted)'};">${score}%</span>
          </div>
          <div style="height: 6px; background: var(--bg-muted); border-radius: var(--radius-full); overflow: hidden;">
            <div style="height: 100%; width: ${score}%; background: ${item.color}; transition: width 0.5s ease;"></div>
          </div>
        </div>
      `;
    }).join('');

    // Dynamic Assessment Advice
    const assessmentEl = document.getElementById('competency-assessment-text');
    if (assessmentEl) {
      if (totalScore === 0) {
        assessmentEl.innerHTML = `
          <strong>Trạng thái ban đầu:</strong> Bạn chưa bắt đầu làm bài luyện tập nào. Hãy bắt đầu học ngữ pháp, từ vựng hoặc làm bài tập Nghe, Nói, Đọc, Viết để hệ thống tự động ghi nhận và vẽ biểu đồ tiến bộ!
        `;
      } else {
        const sorted = [...items].sort((a, b) => (scores[b.key] || 0) - (scores[a.key] || 0));
        const highest = sorted[0];
        const lowest = sorted[sorted.length - 1];
        assessmentEl.innerHTML = `
          <strong>Đánh giá thực tế:</strong> Bạn đang làm tốt nhất ở phần <strong>${highest.label} (${scores[highest.key]}%)</strong>. Hãy tiếp tục củng cố thêm <strong>${lowest.label} (${scores[lowest.key]}%)</strong> để nâng đều cả 4 kỹ năng VSTEP B1!
        `;
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }
}

// Global CustomEvent listener
if (typeof window !== 'undefined' && !window._vstepScoreListenerAttached) {
  window._vstepScoreListenerAttached = true;
  window.addEventListener('vstep:score-updated', (e) => {
    updateDashboardRadarDOM();
  });
}

export function renderDashboard() {
  setTimeout(() => {
    updateDashboardRadarDOM();
  }, 20);

  return `
    <div class="dashboard-page animate-fade-in">
      <!-- Hero Section -->
      <div class="hero-card">
        <div style="max-width: 750px;">
          <span class="badge badge-warning" style="margin-bottom: 1rem;">Hệ Thống Giáo Trình Điện Tử VSTEP B1</span>
          <h1 style="font-size: 2.3rem; margin-bottom: 1rem; font-weight: 800;">Luyện Thi & Nắm Vững Toàn Diện Tiếng Anh VSTEP B1</h1>
          <p style="font-size: 1.1rem; opacity: 0.95; margin-bottom: 1.75rem;">
            Chương trình đào tạo toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết cùng Ngữ pháp, Phát âm IPA và 2.940+ từ vựng trọng tâm theo chuẩn Khung năng lực 6 bậc Việt Nam.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#vocabulary" class="btn btn-primary" style="background: #ffffff; color: var(--primary);">
              <i data-lucide="book-open"></i> Học 2.940+ Từ Vựng
            </a>
            <a href="#tests" class="btn btn-secondary" style="background: rgba(255,255,255,0.15); color: #ffffff; border-color: rgba(255,255,255,0.3);">
              <i data-lucide="award"></i> Thi Thử Mock Test
            </a>
          </div>
        </div>
      </div>

      <!-- Realtime Competency Radar Chart & Analytics Section -->
      <div class="grid-2" style="margin-bottom: 2rem; align-items: stretch;">
        <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <div>
              <h3 style="font-size: 1.25rem; margin: 0 0 0.25rem 0; color: var(--text-primary);">Bản Đồ Năng Lực VSTEP B1 Realtime</h3>
              <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">Biểu đồ mạng nhện 6 trục tự động đồng bộ theo tiến độ luyện tập</p>
            </div>
            <span class="badge badge-primary" style="font-size: 0.75rem; font-weight: 700;">6 Trụ Cột</span>
          </div>

          <div id="competency-radar-chart" style="display: flex; justify-content: center; align-items: center; min-height: 320px; padding: 0.5rem 0;">
            <!-- Radar SVG will be rendered here dynamically -->
          </div>
        </div>

        <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.5rem;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
              <h3 style="font-size: 1.25rem; margin: 0; color: var(--text-primary);">Chi Tiết Chỉ Số 6 Kỹ Năng</h3>
              <a href="#vocab-review" class="btn btn-primary btn-sm" style="font-size: 0.775rem;">
                <i data-lucide="brain-circuit"></i> Luyện Tập Ngay
              </a>
            </div>

            <div id="competency-bars-list" style="display: flex; flex-direction: column; gap: 0.85rem;">
              <!-- Dynamic Competency progress bars will be rendered here -->
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Metrics -->
      <div class="grid-4" style="margin-bottom: 2rem;">
        <div class="card" style="display: flex; align-items: center; gap: 1.25rem;">
          <div style="width: 50px; height: 50px; border-radius: var(--radius-md); background: #dbeafe; color: #2563eb; display: flex; align-items: center; justify-content: center;">
            <i data-lucide="book-marked" style="width: 26px; height: 26px;"></i>
          </div>
          <div>
            <div style="font-size: 1.3rem; font-weight: 800; font-family: var(--font-heading);">Bản Đồ Ngữ Pháp</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">14 Chuyên Đề Cốt Lõi B1</div>
          </div>
        </div>

        <div class="card" style="display: flex; align-items: center; gap: 1.25rem;">
          <div style="width: 50px; height: 50px; border-radius: var(--radius-md); background: #d1fae5; color: #059669; display: flex; align-items: center; justify-content: center;">
            <i data-lucide="sparkles" style="width: 26px; height: 26px;"></i>
          </div>
          <div>
            <div style="font-size: 1.3rem; font-weight: 800; font-family: var(--font-heading);">Bách Khoa Từ Vựng</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">2.940+ Từ • 42 Chủ Điểm</div>
          </div>
        </div>

        <div class="card" style="display: flex; align-items: center; gap: 1.25rem;">
          <div style="width: 50px; height: 50px; border-radius: var(--radius-md); background: #fef3c7; color: #d97706; display: flex; align-items: center; justify-content: center;">
            <i data-lucide="volume-2" style="width: 26px; height: 26px;"></i>
          </div>
          <div>
            <div style="font-size: 1.3rem; font-weight: 800; font-family: var(--font-heading);">Ngữ Âm Chuẩn Hóa</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">44 Âm IPA & Ngữ Điệu</div>
          </div>
        </div>

        <div class="card" style="display: flex; align-items: center; gap: 1.25rem;">
          <div style="width: 50px; height: 50px; border-radius: var(--radius-md); background: #ede9fe; color: #7c3aed; display: flex; align-items: center; justify-content: center;">
            <i data-lucide="award" style="width: 26px; height: 26px;"></i>
          </div>
          <div>
            <div style="font-size: 1.3rem; font-weight: 800; font-family: var(--font-heading);">Phòng Thi VSTEP</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">4 Kỹ Năng Chuẩn Bộ GD&ĐT</div>
          </div>
        </div>
      </div>

      <!-- 4 Skills Specification Section -->
      <div class="card" style="margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <div>
            <h2 style="font-size: 1.5rem;">Cấu Trúc & Thang Điểm Đề Thi VSTEP B1 (Bậc 3/6)</h2>
            <p style="margin: 0;">Quy chuẩn theo Bộ Giáo dục và Đào tạo - Khung Năng lực Ngoại ngữ 6 bậc Việt Nam</p>
          </div>
          <span class="badge badge-success">Điểm B1: 4.0 - 5.5 / 10.0</span>
        </div>

        <div class="grid-2">
          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <i data-lucide="headphones" style="color: var(--primary);"></i>
              <h3 style="font-size: 1.15rem; margin: 0;">1. Listening</h3>
            </div>
            <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>Thời gian:</strong> 40-45 phút | <strong>Số câu:</strong> 35 câu trắc nghiệm</p>
            <ul style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-secondary);">
              <li><strong>Part 1 (8 câu):</strong> Thông báo, hướng dẫn ngắn thường nhật.</li>
              <li><strong>Part 2 (12 câu):</strong> 3 đoạn hội thoại đời sống, học đường.</li>
              <li><strong>Part 3 (15 câu):</strong> 3 bài giảng, bài nói chuyên đề học thuật.</li>
            </ul>
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <i data-lucide="book-open" style="color: var(--primary);"></i>
              <h3 style="font-size: 1.15rem; margin: 0;">2. Reading</h3>
            </div>
            <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>Thời gian:</strong> 60 phút | <strong>Số câu:</strong> 40 câu trắc nghiệm</p>
            <ul style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-secondary);">
              <li><strong>Passage 1 & 2:</strong> Bài đọc về chủ đề đời sống, xã hội (A2-B1).</li>
              <li><strong>Passage 3 & 4:</strong> Bài đọc học thuật, khoa học, phân tích (B1-B2).</li>
              <li><strong>Dạng bài:</strong> Main idea, Detail, Negative detail, Vocab in context, Inference.</li>
            </ul>
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <i data-lucide="pen-tool" style="color: var(--primary);"></i>
              <h3 style="font-size: 1.15rem; margin: 0;">3. Writing</h3>
            </div>
            <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>Thời gian:</strong> 60 phút | <strong>Số bài:</strong> 2 phần viết</p>
            <ul style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-secondary);">
              <li><strong>Task 1 (1/3 điểm):</strong> Viết thư/email (tối thiểu 120 từ) theo tình huống.</li>
              <li><strong>Task 2 (2/3 điểm):</strong> Viết bài luận học thuật (tối thiểu 250 từ) nêu quan điểm/giải pháp.</li>
            </ul>
          </div>

          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <i data-lucide="mic" style="color: var(--primary);"></i>
              <h3 style="font-size: 1.15rem; margin: 0;">4. Speaking</h3>
            </div>
            <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>Thời gian:</strong> 12 phút | <strong>Số phần:</strong> 3 phần thi</p>
            <ul style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-secondary);">
              <li><strong>Part 1 (3 phút):</strong> Tương tác xã hội (2 chủ đề quen thuộc).</li>
              <li><strong>Part 2 (4 phút):</strong> Thảo luận giải pháp (Chọn 1 trong 3 phương án & phản biện).</li>
              <li><strong>Part 3 (5 phút):</strong> Phát triển chủ đề qua sơ đồ tư duy (Mind map).</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Roadmap Pathways -->
      <div class="card">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Lộ Trình Ôn Luyện Đề Xuất (3 Giai Đoạn)</h2>
        <div class="grid-3">
          <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; border-top: 4px solid var(--primary);">
            <span class="badge badge-primary" style="margin-bottom: 0.5rem;">Giai đoạn 1 (Tuần 1-3)</span>
            <h4 style="margin-bottom: 0.5rem;">Chuẩn Hóa Nền Tảng</h4>
            <p style="font-size: 0.875rem;">Học chuẩn 44 âm IPA, 13 chủ đề ngữ pháp then chốt và 1.000 từ vựng căn bản A2-B1.</p>
          </div>

          <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; border-top: 4px solid var(--secondary);">
            <span class="badge badge-secondary" style="margin-bottom: 0.5rem;">Giai đoạn 2 (Tuần 4-7)</span>
            <h4 style="margin-bottom: 0.5rem;">Chinh Phục Kỹ Năng</h4>
            <p style="font-size: 0.875rem;">Luyện 12 kỹ năng Nghe, 9 chiến thuật Đọc, bài mẫu Writing Task 1-2 và Speaking A.R.E.A.</p>
          </div>

          <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; border-top: 4px solid var(--success);">
            <span class="badge badge-success" style="margin-bottom: 0.5rem;">Giai đoạn 3 (Tuần 8-10)</span>
            <h4 style="margin-bottom: 0.5rem;">Thực Chiến Đề Thi Thật</h4>
            <p style="font-size: 0.875rem;">Làm đề thi thử trọn vẹn 4 kỹ năng có bấm giờ, phân tích bẫy đề và kiểm soát thời gian.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
