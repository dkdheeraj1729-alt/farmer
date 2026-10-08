/**
 * Farmer Connect Portal - Dedicated Weather Page Component
 * Location switcher (Guntur, Vijayawada, Amaravati, etc.), weather alerts, hourly timeline, 7-day forecast, UV, soil metrics.
 */

import { weatherService } from '../services/weatherService.js';

export function renderWeatherPage() {
  const districtId = weatherService.getCurrentDistrictId();
  const weather = weatherService.getWeatherForDistrict(districtId);
  const districts = weatherService.getDistricts();

  return `
    <div class="fc-weather-page">
      <!-- Header Bar & Location Switcher -->
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 24px;">
        <div>
          <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">
            🌦️ Weather Dashboard
          </h1>
          <p style="color: #64748b; font-size: 14px;">
            Hyper-local agricultural weather advisory and rainfall predictions.
          </p>
        </div>

        <!-- District Switcher Pill -->
        <div style="background: white; border: 1px solid #cbd5e1; padding: 8px 16px; border-radius: 14px; display: flex; align-items: center; gap: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <span style="font-size: 18px;">📍</span>
          <div>
            <div style="font-size: 10px; font-weight: 700; color: #64748b; text-transform: uppercase;">Select District</div>
            <select 
              onchange="window.fcChangeDistrict(this.value)"
              style="background: transparent; border: none; font-weight: 800; font-size: 15px; color: #0284c7; outline: none; cursor: pointer;"
            >
              ${districts.map(d => `
                <option value="${d.id}" ${d.id === districtId ? 'selected' : ''}>${d.name}, ${d.state}</option>
              `).join('')}
            </select>
          </div>
        </div>
      </div>

      <!-- Alert Banner -->
      ${weather.alert ? `
        <div class="fc-alert fc-alert-${weather.alert.type}" style="margin-bottom: 24px; padding: 20px; border-radius: 16px;">
          <span style="font-size: 28px;">⚠️</span>
          <div>
            <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 4px;">${weather.alert.title}</h3>
            <p style="font-size: 14px; line-height: 1.5;">${weather.alert.message}</p>
          </div>
        </div>
      ` : ''}

      <!-- Current Weather Hero Card -->
      <div style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: white; border-radius: 24px; padding: 32px; margin-bottom: 28px; box-shadow: 0 15px 30px -10px rgba(2, 132, 199, 0.4);">
        <div class="fc-grid-weather-hero">
          <div>
            <div style="font-size: 14px; font-weight: 700; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; display: inline-block; margin-bottom: 12px;">
              📍 ${weather.district}, ${weather.state}
            </div>
            <div style="font-size: 56px; font-weight: 800; line-height: 1;">
              ${weather.temp}°C
            </div>
            <div style="font-size: 22px; font-weight: 700; color: #e0f2fe; margin: 8px 0 12px;">
              ${weather.condition}
            </div>
            <p style="font-size: 14px; color: rgba(255,255,255,0.9);">
              Rain probability today: <strong>${weather.rainProbability}%</strong> • Humidity: <strong>${weather.humidity}%</strong>
            </p>
          </div>

          <div style="background: rgba(255,255,255,0.15); backdrop-filter: blur(8px); border-radius: 18px; padding: 20px; border: 1px solid rgba(255,255,255,0.2); display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div>
              <div style="font-size: 11px; opacity: 0.8; font-weight: 700;">WIND SPEED</div>
              <div style="font-size: 18px; font-weight: 800;">💨 ${weather.windSpeed} km/h</div>
            </div>
            <div>
              <div style="font-size: 11px; opacity: 0.8; font-weight: 700;">UV INDEX</div>
              <div style="font-size: 18px; font-weight: 800;">☀️ ${weather.uvIndex} (Moderate)</div>
            </div>
            <div>
              <div style="font-size: 11px; opacity: 0.8; font-weight: 700;">SOIL MOISTURE</div>
              <div style="font-size: 18px; font-weight: 800;">🌱 ${weather.soilMoisture}</div>
            </div>
            <div>
              <div style="font-size: 11px; opacity: 0.8; font-weight: 700;">SUNRISE / SUNSET</div>
              <div style="font-size: 14px; font-weight: 800;">🌅 ${weather.sunrise} / ${weather.sunset}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hourly Timeline Grid -->
      <div class="fc-card" style="margin-bottom: 28px;">
        <div class="fc-card-title" style="margin-bottom: 16px;">
          <span>⏰</span> Today's Hourly Forecast
        </div>
        <div style="display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px;">
          ${weather.hourly.map(h => `
            <div style="min-width: 100px; text-align: center; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 12px 8px;">
              <div style="font-size: 12px; font-weight: 700; color: #64748b;">${h.time}</div>
              <div style="font-size: 24px; margin: 6px 0;">
                ${h.icon === 'rain' ? '🌧️' : h.icon === 'cloud' ? '☁️' : h.icon === 'sun-cloud' ? '⛅' : '☀️'}
              </div>
              <div style="font-size: 16px; font-weight: 800; color: #0f172a;">${h.temp}°C</div>
              <div style="font-size: 11px; font-weight: 700; color: #0284c7; margin-top: 2px;">💧 ${h.rain}%</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 7-Day Forecast Grid -->
      <div class="fc-card">
        <div class="fc-card-title" style="margin-bottom: 16px;">
          <span>📅</span> 7-Day Agricultural Forecast
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${weather.forecast.map(f => `
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; align-items: center; gap: 12px; padding: 12px 16px; background: #f8fafc; border-radius: 12px; border: 1px solid #f1f5f9;">
              <div style="font-weight: 700; color: #0f172a; font-size: 15px;">${f.day}</div>
              <div style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: #475569;">
                <span style="font-size: 20px;">
                  ${f.icon === 'rain' ? '🌧️' : f.icon === 'thunderstorm' ? '🌩️' : f.icon === 'sun-cloud' ? '⛅' : '☀️'}
                </span>
                <span>${f.condition}</span>
              </div>
              <div style="font-weight: 700; color: #0284c7; font-size: 13px;">
                💧 Rain: ${f.rain}%
              </div>
              <div style="text-align: right; font-weight: 800; font-size: 15px; color: #14532d;">
                ${f.tempHigh}° / <span style="color: #64748b; font-weight: 600;">${f.tempLow}°C</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
