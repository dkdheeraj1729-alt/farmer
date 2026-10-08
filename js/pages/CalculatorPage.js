/**
 * Farmer Connect Portal - Farm Cost & Profit Calculator Component
 * Calculates Total Investment = Seed + Fertilizer + Pesticide + Labour + Irrigation + Equipment + Other
 * Revenue = Yield × Selling Price
 * Profit = Revenue - Total Investment
 */

import { dbService } from '../services/dbService.js';

export function renderCalculatorPage(inputs = {}) {
  const farmSize = parseFloat(inputs.farmSize || 4.0);
  const seedCost = parseFloat(inputs.seedCost || 4500);
  const fertCost = parseFloat(inputs.fertCost || 8500);
  const pestCost = parseFloat(inputs.pestCost || 4200);
  const labourCost = parseFloat(inputs.labourCost || 12000);
  const irrigCost = parseFloat(inputs.irrigCost || 3500);
  const equipCost = parseFloat(inputs.equipCost || 6000);
  const otherCost = parseFloat(inputs.otherCost || 2500);

  const expectedYieldPerAcre = parseFloat(inputs.expectedYieldPerAcre || 22); // quintals/acre
  const expectedSellingPrice = parseFloat(inputs.expectedSellingPrice || 2300); // ₹/quintal

  // Math Calculations per formulas requested:
  const costPerAcre = seedCost + fertCost + pestCost + labourCost + irrigCost + equipCost + otherCost;
  const totalInvestment = costPerAcre * farmSize;

  const totalYieldQuintals = expectedYieldPerAcre * farmSize;
  const expectedRevenue = totalYieldQuintals * expectedSellingPrice;
  const estimatedProfit = expectedRevenue - totalInvestment;
  const roiPercentage = totalInvestment > 0 ? ((estimatedProfit / totalInvestment) * 100).toFixed(1) : 0;

  return `
    <div class="fc-calculator-page">
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">
          🧮 Farm Cost & Profit Calculator
        </h1>
        <p style="color: #64748b; font-size: 14px;">
          Plan your farm economics, estimate input expenses, and calculate total net profit before season investment.
        </p>
      </div>

      <div class="fc-grid-2col" style="margin-bottom: 28px;">
        
        <!-- INPUT FORM CARD -->
        <div class="fc-card" style="border-top: 4px solid #9333ea;">
          <div class="fc-card-title" style="margin-bottom: 16px;">
            <span>📝</span> Farm Input Expenses (per Acre)
          </div>

          <form onsubmit="event.preventDefault(); window.fcRecalculateFarmProfit();">
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div class="fc-form-group">
                <label class="fc-label">📐 Land Area (Acres)</label>
                <input type="number" step="0.5" id="calc-farmsize" class="fc-input" value="${farmSize}" oninput="window.fcRecalculateFarmProfit()" required />
              </div>
              <div class="fc-form-group">
                <label class="fc-label">🌾 Expected Yield (Qtl/Acre)</label>
                <input type="number" id="calc-yield" class="fc-input" value="${expectedYieldPerAcre}" oninput="window.fcRecalculateFarmProfit()" required />
              </div>
            </div>

            <div class="fc-form-group">
              <label class="fc-label">💰 Expected Selling Price (₹ / Quintal)</label>
              <input type="number" id="calc-price" class="fc-input" value="${expectedSellingPrice}" oninput="window.fcRecalculateFarmProfit()" required />
            </div>

            <div style="font-size: 13px; font-weight: 700; color: #9333ea; margin: 16px 0 8px; text-transform: uppercase;">
              Cost Breakdown (₹ per Acre):
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div class="fc-form-group">
                <label class="fc-label">🌱 Seed Cost</label>
                <input type="number" id="calc-seed" class="fc-input" value="${seedCost}" oninput="window.fcRecalculateFarmProfit()" />
              </div>
              <div class="fc-form-group">
                <label class="fc-label">🧪 Fertilizer Cost</label>
                <input type="number" id="calc-fert" class="fc-input" value="${fertCost}" oninput="window.fcRecalculateFarmProfit()" />
              </div>
              <div class="fc-form-group">
                <label class="fc-label">🛡️ Pesticide Cost</label>
                <input type="number" id="calc-pest" class="fc-input" value="${pestCost}" oninput="window.fcRecalculateFarmProfit()" />
              </div>
              <div class="fc-form-group">
                <label class="fc-label">👨‍🌾 Labour Cost</label>
                <input type="number" id="calc-labour" class="fc-input" value="${labourCost}" oninput="window.fcRecalculateFarmProfit()" />
              </div>
              <div class="fc-form-group">
                <label class="fc-label">💧 Irrigation Cost</label>
                <input type="number" id="calc-irrig" class="fc-input" value="${irrigCost}" oninput="window.fcRecalculateFarmProfit()" />
              </div>
              <div class="fc-form-group">
                <label class="fc-label">🚜 Tractor/Equipment</label>
                <input type="number" id="calc-equip" class="fc-input" value="${equipCost}" oninput="window.fcRecalculateFarmProfit()" />
              </div>
            </div>

            <div class="fc-form-group">
              <label class="fc-label">📦 Other Misc Costs (Transport/Bagging)</label>
              <input type="number" id="calc-other" class="fc-input" value="${otherCost}" oninput="window.fcRecalculateFarmProfit()" />
            </div>

            <button type="submit" class="fc-btn fc-btn-primary" style="width: 100%; margin-top: 8px;">
              Save Calculation Estimate 💾
            </button>
          </form>
        </div>

        <!-- RESULTS DISPLAY CARD -->
        <div>
          <div style="background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 28px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.03);">
            <div style="text-align: center; margin-bottom: 24px;">
              <span style="font-size: 13px; font-weight: 800; color: #16a34a; background: #f0fdf4; padding: 4px 14px; border-radius: 20px; text-transform: uppercase;">
                Financial Summary (${farmSize} Acres)
              </span>
              <h2 style="font-size: 26px; font-weight: 800; color: #14532d; margin-top: 8px;">
                Estimated Return on Investment
              </h2>
            </div>

            <!-- Big Metrics Grid -->
            <div style="display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 24px;">
              
              <!-- Total Investment -->
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Total Investment</div>
                  <div style="font-size: 11px; color: #94a3b8;">Inputs + Labour + Machinery</div>
                </div>
                <div style="font-size: 22px; font-weight: 800; color: #dc2626;">
                  ₹${totalInvestment.toLocaleString('en-IN')}
                </div>
              </div>

              <!-- Expected Revenue -->
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Expected Revenue</div>
                  <div style="font-size: 11px; color: #94a3b8;">${totalYieldQuintals} Quintals × ₹${expectedSellingPrice}</div>
                </div>
                <div style="font-size: 22px; font-weight: 800; color: #0284c7;">
                  ₹${expectedRevenue.toLocaleString('en-IN')}
                </div>
              </div>

              <!-- Estimated Net Profit -->
              <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 2px solid #86efac; border-radius: 16px; padding: 22px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 15px rgba(22,163,74,0.15);">
                <div>
                  <div style="font-size: 13px; font-weight: 800; color: #166534; text-transform: uppercase;">Estimated Net Profit</div>
                  <div style="font-size: 12px; color: #15803d; font-weight: 600;">ROI: <strong>+${roiPercentage}% Return</strong></div>
                </div>
                <div style="font-size: 28px; font-weight: 800; color: #15803d;">
                  ₹${estimatedProfit.toLocaleString('en-IN')}
                </div>
              </div>

            </div>

            <!-- Cost Breakdown Visual Progress Bar -->
            <div style="margin-top: 20px;">
              <div style="font-size: 13px; font-weight: 700; color: #334155; margin-bottom: 8px;">Cost Distribution Breakdown:</div>
              <div style="height: 14px; border-radius: 10px; background: #e2e8f0; overflow: hidden; display: flex;">
                <div style="width: ${(seedCost / costPerAcre) * 100}%; background: #16a34a;" title="Seed: ₹${seedCost}"></div>
                <div style="width: ${(fertCost / costPerAcre) * 100}%; background: #0284c7;" title="Fertilizer: ₹${fertCost}"></div>
                <div style="width: ${(pestCost / costPerAcre) * 100}%; background: #eab308;" title="Pesticide: ₹${pestCost}"></div>
                <div style="width: ${(labourCost / costPerAcre) * 100}%; background: #ec4899;" title="Labour: ₹${labourCost}"></div>
                <div style="width: ${((irrigCost + equipCost + otherCost) / costPerAcre) * 100}%; background: #8b5cf6;" title="Machinery & Misc: ₹${irrigCost + equipCost + otherCost}"></div>
              </div>
              <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 10px; font-size: 11px; color: #64748b;">
                <span>🟢 Seed: ₹${seedCost}</span>
                <span>🔵 Fert: ₹${fertCost}</span>
                <span>🟡 Pest: ₹${pestCost}</span>
                <span>Pink Labour: ₹${labourCost}</span>
                <span>🟣 Misc: ₹${irrigCost + equipCost + otherCost}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  `;
}
