/**
 * Farmer Connect Portal - Crop Market Price Page Component
 * Filterable Mandi table, interactive 7-Day SVG trend chart, indicative price disclaimer.
 */

import { marketPriceService } from '../services/marketPriceService.js';
import { CROPS_CATALOG } from '../data/mockData.js';

export function renderPricesPage(activeCropId = 'paddy', selectedState = 'All', selectedDistrict = 'All') {
  const states = marketPriceService.getStates();
  const districts = marketPriceService.getDistricts();
  const prices = marketPriceService.getPrices({
    state: selectedState,
    district: selectedDistrict
  });

  const activeCropPrice = marketPriceService.getPriceById(activeCropId);

  // SVG Chart calculation for 7-day price history
  const history = activeCropPrice.history7Days || [2200, 2210, 2240, 2230, 2250, 2280, 2300];
  const minVal = Math.min(...history) * 0.98;
  const maxVal = Math.max(...history) * 1.02;
  const range = maxVal - minVal || 1;

  const points = history.map((val, idx) => {
    const x = (idx / (history.length - 1)) * 400 + 20;
    const y = 140 - ((val - minVal) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  return `
    <div class="fc-prices-page">
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">
          💰 Regional Crop Market Prices
        </h1>
        <p style="color: #64748b; font-size: 14px;">
          Live APMC Mandi rates across Andhra Pradesh, Telangana, and South Indian agricultural markets.
        </p>
      </div>

      <!-- Filters Bar -->
      <div class="fc-card" style="margin-bottom: 24px; padding: 20px;">
        <div style="font-size: 14px; font-weight: 700; color: #14532d; margin-bottom: 12px;">🔍 Filter Market Prices</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px;">
          
          <div>
            <label class="fc-label">State</label>
            <select class="fc-select" onchange="window.fcFilterPrices('state', this.value)">
              ${states.map(s => `<option value="${s}" ${s === selectedState ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>

          <div>
            <label class="fc-label">District</label>
            <select class="fc-select" onchange="window.fcFilterPrices('district', this.value)">
              ${districts.map(d => `<option value="${d}" ${d === selectedDistrict ? 'selected' : ''}>${d}</option>`).join('')}
            </select>
          </div>

          <div>
            <label class="fc-label">Crop</label>
            <select class="fc-select" onchange="window.fcSelectCropTrend(this.value)">
              ${CROPS_CATALOG.map(c => `<option value="${c.id}" ${c.id === activeCropId ? 'selected' : ''}>${c.icon} ${c.name}</option>`).join('')}
            </select>
          </div>

        </div>
      </div>

      <!-- 7-DAY PRICE TREND SVG CHART CARD -->
      <div class="fc-card" style="margin-bottom: 28px; border-top: 4px solid #16a34a;">
        <div class="fc-card-header">
          <div>
            <div class="fc-card-title">
              <span>📈</span> 7-Day Price Trend — ${activeCropPrice.cropName}
            </div>
            <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
              Market: <strong>${activeCropPrice.market} (${activeCropPrice.district})</strong>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 24px; font-weight: 800; color: #14532d;">
              ₹${activeCropPrice.currentPrice.toLocaleString('en-IN')}<span style="font-size: 12px; color: #64748b; font-weight: 500;">/${activeCropPrice.unit}</span>
            </div>
            <div class="fc-trend fc-trend-${activeCropPrice.trend}">
              ${activeCropPrice.trend === 'up' ? '📈 +' : activeCropPrice.trend === 'down' ? '📉 ' : '→ '}${activeCropPrice.changePercentage}% vs prev session
            </div>
          </div>
        </div>

        <!-- SVG Interactive Chart -->
        <div style="background: #f8fafc; border-radius: 16px; padding: 20px; text-align: center; border: 1px solid #e2e8f0; overflow-x: auto;">
          <svg viewBox="0 0 440 160" style="width: 100%; max-width: 600px; height: 160px; overflow: visible;">
            <!-- Grid Lines -->
            <line x1="20" y1="30" x2="420" y2="30" stroke="#e2e8f0" stroke-dasharray="4" />
            <line x1="20" y1="80" x2="420" y2="80" stroke="#e2e8f0" stroke-dasharray="4" />
            <line x1="20" y1="130" x2="420" y2="130" stroke="#e2e8f0" stroke-dasharray="4" />

            <!-- Trend Polyline -->
            <polyline 
              fill="none" 
              stroke="${activeCropPrice.trend === 'down' ? '#dc2626' : '#16a34a'}" 
              stroke-width="3.5" 
              points="${points}" 
            />

            <!-- Data Points -->
            ${history.map((val, idx) => {
              const x = (idx / (history.length - 1)) * 400 + 20;
              const y = 140 - ((val - minVal) / range) * 100;
              return `
                <circle cx="${x}" cy="${y}" r="5" fill="${activeCropPrice.trend === 'down' ? '#dc2626' : '#16a34a'}" stroke="#ffffff" stroke-width="2" />
                <text x="${x}" y="${y - 10}" font-size="10" font-weight="700" fill="#334155" text-anchor="middle">₹${val}</text>
                <text x="${x}" y="155" font-size="10" fill="#94a3b8" text-anchor="middle">Day ${idx + 1}</text>
              `;
            }).join('')}
          </svg>
        </div>
      </div>

      <!-- PRICE DATA TABLE -->
      <div class="fc-card" style="margin-bottom: 24px;">
        <div class="fc-card-header">
          <div class="fc-card-title">
            <span>📊</span> Today's Mandi Price Register
          </div>
          <div style="font-size: 12px; color: #64748b;">
            Last Updated: <strong>Today, 10:30 AM</strong>
          </div>
        </div>

        <div class="fc-table-container">
          <table class="fc-table">
            <thead>
              <tr>
                <th>Crop Name</th>
                <th>Market Yard (Mandi)</th>
                <th>District / State</th>
                <th>Current Price</th>
                <th>Previous Price</th>
                <th>24h Change</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${prices.map(p => `
                <tr style="cursor: pointer;" onclick="window.fcSelectCropTrend('${p.cropId}')">
                  <td style="font-weight: 700; color: #0f172a;">${p.cropName}</td>
                  <td>${p.market}</td>
                  <td>${p.district}, ${p.state}</td>
                  <td style="font-weight: 800; color: #14532d; font-size: 15px;">
                    ₹${p.currentPrice.toLocaleString('en-IN')}/${p.unit}
                  </td>
                  <td style="color: #64748b;">₹${p.previousPrice.toLocaleString('en-IN')}</td>
                  <td>
                    <span class="fc-trend fc-trend-${p.trend}">
                      ${p.trend === 'up' ? '📈 +' : p.trend === 'down' ? '📉 ' : '→ '}${p.changePercentage}%
                    </span>
                  </td>
                  <td>
                    <button class="fc-btn fc-btn-secondary fc-btn-sm" style="font-size: 11px; padding: 4px 10px;" onclick="event.stopPropagation(); window.fcSelectCropTrend('${p.cropId}')">
                      View Chart
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Disclaimer -->
        <div style="margin-top: 16px; padding: 12px; background: #fff7ed; border-radius: 10px; font-size: 12px; color: #c2410c; display: flex; align-items: center; gap: 8px;">
          <span>ℹ️</span> 
          <span><strong>Indicative Price Disclaimer:</strong> Market prices are indicative benchmarking rates sourced from APMC mandis and may vary by grade, moisture content, and time of day.</span>
        </div>
      </div>
    </div>
  `;
}
