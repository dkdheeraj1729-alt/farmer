/**
 * Farmer Connect Portal - Crop Recommendation Page Component
 * Rule-based recommendation engine wizard (Season, Soil, Water, Farm Size)
 */

import { RecommendationEngine, SOIL_TYPES, SEASONS, WATER_AVAILABILITY } from '../services/recommendationEngine.js';
import { INDIAN_DISTRICTS } from '../data/mockData.js';

export function renderCropRecommendationPage(formData = {}, recommendations = null) {
  const selectedSeason = formData.season || 'kharif';
  const selectedSoil = formData.soil || 'black';
  const selectedWater = formData.water || 'medium';
  const selectedDistrict = formData.district || 'Guntur';
  const farmSize = formData.farmSize || 3.5;

  const results = recommendations || RecommendationEngine.getRecommendations({
    season: selectedSeason,
    soil: selectedSoil,
    water: selectedWater,
    farmSize: parseFloat(farmSize)
  });

  return `
    <div class="fc-recommendation-page">
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">
          🌱 Crop Advisor & Recommendation System
        </h1>
        <p style="color: #64748b; font-size: 14px;">
          Get tailored crop suggestions based on your local soil parameters, water supply, and seasonal climate.
        </p>
      </div>

      <div class="fc-grid-2col fc-grid-rec" style="margin-bottom: 28px;">
        
        <!-- STEP WIZARD FORM CARD -->
        <div class="fc-card" style="border-top: 4px solid #16a34a;">
          <div class="fc-card-title" style="margin-bottom: 16px;">
            <span>⚙️</span> Farm Conditions Questionnaire
          </div>

          <form onsubmit="event.preventDefault(); window.fcSubmitCropRecommendation();">
            <!-- Location -->
            <div class="fc-form-group">
              <label class="fc-label">📍 Target District</label>
              <select id="rec-district" class="fc-select">
                ${INDIAN_DISTRICTS.map(d => `<option value="${d.name}" ${d.name === selectedDistrict ? 'selected' : ''}>${d.name}, ${d.state}</option>`).join('')}
              </select>
            </div>

            <!-- Season -->
            <div class="fc-form-group">
              <label class="fc-label">📅 Sowing Season</label>
              <select id="rec-season" class="fc-select">
                ${SEASONS.map(s => `<option value="${s.id}" ${s.id === selectedSeason ? 'selected' : ''}>${s.name}</option>`).join('')}
              </select>
            </div>

            <!-- Soil Type -->
            <div class="fc-form-group">
              <label class="fc-label">🪴 Field Soil Type</label>
              <select id="rec-soil" class="fc-select">
                ${SOIL_TYPES.map(s => `<option value="${s.id}" ${s.id === selectedSoil ? 'selected' : ''}>${s.name}</option>`).join('')}
              </select>
            </div>

            <!-- Water Availability -->
            <div class="fc-form-group">
              <label class="fc-label">💧 Irrigation Water Supply</label>
              <select id="rec-water" class="fc-select">
                ${WATER_AVAILABILITY.map(w => `<option value="${w.id}" ${w.id === selectedWater ? 'selected' : ''}>${w.name}</option>`).join('')}
              </select>
            </div>

            <!-- Farm Size -->
            <div class="fc-form-group">
              <label class="fc-label">📐 Land Area (Acres)</label>
              <input type="number" step="0.5" id="rec-farmsize" class="fc-input" value="${farmSize}" required />
            </div>

            <button type="submit" class="fc-btn fc-btn-primary" style="width: 100%; margin-top: 8px;">
              Get Smart Recommendations 🚀
            </button>
          </form>
        </div>

        <!-- RECOMMENDATIONS RESULTS CARD -->
        <div>
          <div style="background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 24px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
              <div>
                <h3 style="font-size: 20px; font-weight: 800; color: #14532d;">Top Recommended Crops</h3>
                <div style="font-size: 12px; color: #64748b;">
                  Based on ${selectedDistrict} • ${selectedSeason.toUpperCase()} • ${selectedSoil.toUpperCase()} soil
                </div>
              </div>
              <span style="font-size: 12px; background: #f0fdf4; color: #16a34a; font-weight: 700; padding: 6px 12px; border-radius: 20px;">
                ${results.length} Matches Found
              </span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px;">
              ${results.map((crop, idx) => `
                <div style="border: 1px solid ${idx === 0 ? '#86efac' : '#e2e8f0'}; background: ${idx === 0 ? '#f0fdf4' : '#ffffff'}; border-radius: 16px; padding: 20px; transition: all 0.2s;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div>
                      <span style="font-size: 11px; font-weight: 800; color: #15803d; background: rgba(22, 163, 74, 0.15); padding: 2px 8px; border-radius: 6px;">
                        RANK #${idx + 1}
                      </span>
                      <h4 style="font-size: 18px; font-weight: 800; color: #0f172a; margin-top: 4px;">
                        ${crop.name}
                      </h4>
                    </div>
                    <div style="text-align: right;">
                      <div style="color: #f59e0b; font-size: 18px;">
                        ${'⭐'.repeat(crop.stars)}
                      </div>
                      <div style="font-size: 12px; font-weight: 700; color: #16a34a;">
                        ${crop.matchScore}% Suitability
                      </div>
                    </div>
                  </div>

                  <!-- Details Grid -->
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; margin: 12px 0; background: white; padding: 12px; border-radius: 10px; border: 1px solid #f1f5f9; font-size: 12px;">
                    <div>⏱️ <strong>Growing Period:</strong> ${crop.durationDays}</div>
                    <div>💧 <strong>Water Need:</strong> ${crop.waterReqText}</div>
                    <div>🪴 <strong>Best Soil:</strong> ${crop.suitableSoilText}</div>
                    <div>💰 <strong>Est. Value/Acre:</strong> ${crop.estimatedValuePerAcre}</div>
                  </div>

                  <p style="font-size: 13px; color: #475569; line-height: 1.45; margin-bottom: 12px;">
                    💡 <strong>Farming Advisory:</strong> ${crop.farmingTips}
                  </p>

                  <div style="display: flex; gap: 8px; justify-content: flex-end;">
                    <button class="fc-btn fc-btn-secondary fc-btn-sm" style="font-size: 11px;" onclick="window.fcNavigateToCalcWithCrop('${crop.name}')">
                      Calculate Profit 🧮
                    </button>
                    <button class="fc-btn fc-btn-primary fc-btn-sm" style="font-size: 11px;" onclick="window.fcOpenAiAssistant('Tell me how to cultivate ${crop.name} in ${selectedDistrict}')">
                      Ask AI Assistant 🤖
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}
