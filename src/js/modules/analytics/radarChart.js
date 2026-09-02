/**
 * src/js/modules/analytics/radarChart.js
 * Vẽ biểu đồ mạng nhện 6 trục bằng SVG thuần (Zero-dependency, Dark/Light responsive)
 */
export class RadarChart {
  /**
   * @param {string} containerId - ID của phần tử chứa biểu đồ
   * @param {Object} options - Tùy biến kích thước, màu sắc
   */
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.size = options.size || 340;
    this.center = this.size / 2;
    this.radius = (this.size / 2) - 45; // Khoảng cách chừa nhãn chữ
    this.levels = 5; // 5 vòng đồng tâm (20, 40, 60, 80, 100)
    this.axes = [
      { key: 'grammar', label: 'Grammar' },
      { key: 'vocabulary', label: 'Vocabulary' },
      { key: 'reading', label: 'Reading' },
      { key: 'listening', label: 'Listening' },
      { key: 'writing', label: 'Writing' },
      { key: 'speaking', label: 'Speaking' }
    ];
  }

  /**
   * Vẽ lại biểu đồ theo dữ liệu điểm số mới nhất (0 - 100)
   * @param {Object} dataScores - { grammar: 75, vocabulary: 80, ... }
   */
  render(dataScores = {}) {
    if (!this.container) {
      this.container = document.getElementById('competency-radar-chart');
    }
    if (!this.container) return;

    const totalAxes = this.axes.length;
    const angleSlice = (Math.PI * 2) / totalAxes;

    // 1. Tạo các vòng đa giác đồng tâm nền (Grid Web)
    let gridPolygonHtml = '';
    for (let level = 1; level <= this.levels; level++) {
      const r = (this.radius / this.levels) * level;
      const points = [];
      for (let i = 0; i < totalAxes; i++) {
        const angle = i * angleSlice - Math.PI / 2;
        const x = this.center + r * Math.cos(angle);
        const y = this.center + r * Math.sin(angle);
        points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      gridPolygonHtml += `
        <polygon points="${points.join(' ')}" 
                 fill="none" 
                 stroke="currentColor" 
                 stroke-opacity="0.12" 
                 stroke-dasharray="${level === this.levels ? 'none' : '3,3'}" />
      `;
    }

    // 2. Tạo các trục tia từ tâm và Nhãn (Labels)
    let axisLinesHtml = '';
    let labelsHtml = '';
    for (let i = 0; i < totalAxes; i++) {
      const angle = i * angleSlice - Math.PI / 2;
      const endX = this.center + this.radius * Math.cos(angle);
      const endY = this.center + this.radius * Math.sin(angle);

      // Trục
      axisLinesHtml += `
        <line x1="${this.center}" y1="${this.center}" x2="${endX.toFixed(1)}" y2="${endY.toFixed(1)}" 
              stroke="currentColor" stroke-opacity="0.2" />
      `;

      // Nhãn vị trí
      const labelRadius = this.radius + 24;
      const labelX = this.center + labelRadius * Math.cos(angle);
      const labelY = this.center + labelRadius * Math.sin(angle) + 4;
      const score = Math.round(dataScores[this.axes[i].key] ?? 0);

      labelsHtml += `
        <text x="${labelX.toFixed(1)}" y="${labelY.toFixed(1)}" 
              text-anchor="middle" 
              font-size="11.5" 
              font-weight="600" 
              fill="currentColor"
              class="radar-label">
          ${this.axes[i].label}
          <tspan x="${labelX.toFixed(1)}" dy="14" font-size="10.5" font-weight="800" fill="#3b82f6">${score}%</tspan>
        </text>
      `;
    }

    // 3. Tính tọa độ vùng dữ liệu người dùng (Data Polygon)
    const dataPoints = [];
    for (let i = 0; i < totalAxes; i++) {
      const score = Math.min(100, Math.max(0, dataScores[this.axes[i].key] ?? 0));
      const r = (this.radius / 100) * score;
      const angle = i * angleSlice - Math.PI / 2;
      const x = this.center + r * Math.cos(angle);
      const y = this.center + r * Math.sin(angle);
      dataPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }

    // 4. Lắp ráp SVG hoàn chỉnh
    this.container.innerHTML = `
      <svg viewBox="0 0 ${this.size} ${this.size + 20}" style="width: 100%; max-width: ${this.size}px; height: auto; overflow: visible; font-family: inherit;">
        <defs>
          <linearGradient id="radarAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.55" />
            <stop offset="100%" stop-color="#2563eb" stop-opacity="0.15" />
          </linearGradient>
        </defs>
        ${gridPolygonHtml}
        ${axisLinesHtml}
        <polygon points="${dataPoints.join(' ')}" 
                 fill="url(#radarAreaGradient)" 
                 stroke="#2563eb" 
                 stroke-width="2.5" 
                 stroke-linejoin="round"
                 style="transition: all 0.5s ease;" />
        ${dataPoints.map(p => {
          const [cx, cy] = p.split(',');
          return `<circle cx="${cx}" cy="${cy}" r="4.5" fill="#3b82f6" stroke="#fff" stroke-width="2" style="transition: all 0.5s ease;" />`;
        }).join('')}
        ${labelsHtml}
      </svg>
    `;
  }
}
