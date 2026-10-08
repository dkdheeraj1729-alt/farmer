/**
 * Farmer Connect Portal - Farmer Dashboard Component
 * Core command center for farmers: Greeting, Location, Weather Card, Price Summary, Quick Actions, Farming Insight
 */

import { authService } from '../services/authService.js';
import { weatherService } from '../services/weatherService.js';
import { marketPriceService } from '../services/marketPriceService.js';

export function renderDashboardPage() {
  const user = authService.getCurrentUser();
  const districtId = weatherService.getCurrentDistrictId();
  const weather = weatherService.getWeatherForDistrict(districtId);
  const prices = marketPriceService.getPrices().slice(0, 4);

  const quickActions = [
    { id: 'weather', emoji: '🌦️', label: 'Weather' },
    { id: 'prices', emoji: '💰', label: 'Market Prices' },
    { id: 'recommendation', emoji: '🌱', label: 'Crop Advisor' },
    { id: 'calculator', emoji: '🧮', label: 'Calculator' },
    { id: 'marketplace', emoji: '🛒', label: 'Marketplace' },
    { id: 'services', emoji: '📍', label: 'Nearby Services' }
  ];

  return `
    <div class="fc-dashboard">
      <!-- Greeting & Location Banner -->
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 24px; background: white; border-radius: 20px; padding: 20px 24px; border: 1px solid #e2e8f0; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
        <div>
          <h1 style="font-size: 26px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 8px;">
            Good morning, ${user.name.split(' ')[0]} 👋
          </h1>
          <p style="color: #64748b; font-size: 14px; margin-top: 2px;">
            Here is your daily agricultural brief for today.
          </p>
        </div>

        <div style="display: flex; align-items: center; gap: 12px;">
          <!-- District Selector -->
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 8px 14px; border-radius: 12px; display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 18px;">📍</span>
            <div>
              <div style="font-size: 10px; font-weight: 700; color: #16a34a; text-transform: uppercase;">Your Location</div>
              <select 
                onchange="window.fcChangeDistrict(this.value)"
                style="background: transparent; border: none; font-weight: 700; font-size: 14px; color: #14532d; outline: none; cursor: pointer;"
              >
                ${weatherService.getDistricts().map(d => `
                  <option value="${d.id}" ${d.id === districtId ? 'selected' : ''}>${d.name}, ${d.state}</option>
                `).join('')}
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid Layout: Weather & Prices side-by-side -->
      <div class="fc-grid-2col" style="margin-bottom: 28px;">
        
        <!-- WEATHER CARD -->
        <div class="fc-card" style="border-top: 4px solid #0284c7;">
          <div class="fc-card-header">
            <div class="fc-card-title">
              <span>🌦️</span> Live Weather
            </div>
            <button class="fc-btn fc-btn-secondary fc-btn-sm" onclick="window.fcNavigate('weather')">
              Full Weather →
            </button>
          </div>

          <!-- Alert Notification Banner -->
          ${weather.alert ? `
            <div class="fc-alert fc-alert-${weather.alert.type}">
              <span style="font-size: 20px;">⚠️</span>
              <div>
                <strong style="display: block; font-size: 14px;">${weather.alert.title}</strong>
                <span style="font-size: 13px;">${weather.alert.message}</span>
              </div>
            </div>
          ` : ''}

          <!-- Weather Specs Grid -->
          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 16px; align-items: center; margin-bottom: 20px; background: #f8fafc; padding: 16px; border-radius: 14px;">
            <div>
              <div style="font-size: 42px; font-weight: 800; color: #0f172a; line-height: 1;">
                ${weather.temp}°C
              </div>
              <div style="font-size: 16px; font-weight: 700; color: #0284c7; margin-top: 4px;">
                ${weather.condition}
              </div>
              <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                📍 ${weather.district}, ${weather.state}
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: #475569;">
              <div>💧 Humidity: <strong>${weather.humidity}%</strong></div>
              <div>🌧️ Rain Prob: <strong>${weather.rainProbability}%</strong></div>
              <div>💨 Wind: <strong>${weather.windSpeed} km/h</strong></div>
              <div>🌱 Soil: <strong>${weather.soilMoisture}</strong></div>
            </div>
          </div>

          <!-- 5-Day Micro Forecast Strip -->
          <div style="display: flex; justify-content: space-between; gap: 6px;">
            ${weather.forecast.slice(0, 5).map(f => `
              <div style="flex: 1; text-align: center; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 8px 4px;">
                <div style="font-size: 11px; font-weight: 700; color: #64748b;">${f.day}</div>
                <div style="font-size: 16px; margin: 2px 0;">
                  ${f.icon === 'rain' ? '🌧️' : f.icon === 'thunderstorm' ? '🌩️' : f.icon === 'sun-cloud' ? '⛅' : '☀️'}
                </div>
                <div style="font-size: 12px; font-weight: 700; color: #0f172a;">${f.tempHigh}°</div>
                <div style="font-size: 10px; color: #0284c7; font-weight: 600;">${f.rain}%</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- CROP PRICE CARD -->
        <div class="fc-card" style="border-top: 4px solid #16a34a;">
          <div class="fc-card-header">
            <div class="fc-card-title">
              <span>💰</span> Today's Market Prices
            </div>
            <button class="fc-btn fc-btn-secondary fc-btn-sm" onclick="window.fcNavigate('prices')">
              View All Prices →
            </button>
          </div>

          <div style="font-size: 12px; color: #64748b; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center;">
            <span>📍 Regional Mandi Benchmarks</span>
            <span>Last Updated: <strong>Today, 10:30 AM</strong></span>
          </div>

          <!-- Prices list -->
          <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px;">
            ${prices.map(p => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: #f8fafc; border-radius: 12px; border: 1px solid #f1f5f9;">
                <div>
                  <div style="font-size: 15px; font-weight: 700; color: #0f172a;">${p.cropName}</div>
                  <div style="font-size: 11px; color: #64748b;">${p.market}</div>
                </div>
                <div style="text-align: right;">
                  <div style="font-size: 16px; font-weight: 800; color: #14532d;">
                    ₹${p.currentPrice.toLocaleString('en-IN')}<span style="font-size: 11px; color: #64748b; font-weight: 500;">/${p.unit}</span>
                  </div>
                  <div class="fc-trend fc-trend-${p.trend}">
                    ${p.trend === 'up' ? '📈 +' : p.trend === 'down' ? '📉 ' : '→ '}${p.changePercentage}%
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <button class="fc-btn fc-btn-primary fc-btn-sm" style="width: 100%;" onclick="window.fcNavigate('prices')">
            Browse All Crop Market Rates & Charts
          </button>
        </div>

      </div>

      <!-- QUICK ACTIONS GRID -->
      <div style="margin-bottom: 28px;">
        <h3 style="font-size: 18px; font-weight: 800; color: #14532d; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
          ⚡ Quick Actions
        </h3>
        <div class="fc-quick-actions">
          ${quickActions.map(qa => `
            <div class="fc-quick-btn" onclick="window.fcNavigate('${qa.id}')">
              <span class="emoji">${qa.emoji}</span>
              <span>${qa.label}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- FARMING INSIGHT & TIP -->
      <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #bbf7d0; border-radius: 20px; padding: 24px; display: flex; align-items: flex-start; gap: 16px; box-shadow: 0 4px 15px rgba(22, 163, 74, 0.08);">
        <div style="width: 48px; height: 48px; background: #16a34a; color: white; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;">
          💡
        </div>
        <div style="flex: 1;">
          <div style="font-size: 12px; font-weight: 800; color: #166534; text-transform: uppercase; letter-spacing: 0.5px;">Today's Farming Tip</div>
          <h4 style="font-size: 17px; font-weight: 700; color: #14532d; margin: 4px 0 6px;">
            Rain is expected in your region tomorrow.
          </h4>
          <p style="font-size: 14px; color: #166534; line-height: 1.5;">
            Avoid unnecessary irrigation today to preserve soil nutrients. Check field drainage channels around standing crops to prevent root rot.
          </p>
        </div>
        <button class="fc-btn fc-btn-secondary fc-btn-sm" style="flex-shrink: 0; background: white;" onclick="window.fcOpenAiAssistant()">
          Ask AI Assistant 🤖
        </button>
      </div>
    </div>
  `;
}
