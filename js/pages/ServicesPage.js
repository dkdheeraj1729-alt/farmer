/**
 * Farmer Connect Portal - Nearby Agricultural Services Page Component
 * Seed Suppliers, Fertilizer Shops, Tractor Rental, Transport, Cold Storage, Ag Markets, Govt Offices.
 */

import { MOCK_SERVICES } from '../data/mockData.js';
import { weatherService } from '../services/weatherService.js';

export function renderServicesPage(activeCategory = 'All') {
  const districtId = weatherService.getCurrentDistrictId();

  const categories = [
    { id: 'All', label: 'All Services', icon: '📍' },
    { id: 'Seed Suppliers', label: 'Seed Suppliers', icon: '🌱' },
    { id: 'Fertilizer Shops', label: 'Fertilizer Shops', icon: '🧪' },
    { id: 'Tractor Rental', label: 'Tractor Rental', icon: '🚜' },
    { id: 'Transport', label: 'Transport', icon: '🚚' },
    { id: 'Cold Storage', label: 'Cold Storage', icon: '❄️' },
    { id: 'Government Agriculture Offices', label: 'Govt Offices', icon: '🏢' }
  ];

  const filteredServices = activeCategory === 'All' 
    ? MOCK_SERVICES 
    : MOCK_SERVICES.filter(s => s.category === activeCategory);

  return `
    <div class="fc-services-page">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 24px;">
        <div>
          <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">
            📍 Nearby Agricultural Services
          </h1>
          <p style="color: #64748b; font-size: 14px;">
            Locate trusted local agro-service providers, equipment rentals, and government centers near Guntur.
          </p>
        </div>

        <div style="background: white; border: 1px solid #cbd5e1; padding: 6px 14px; border-radius: 12px; font-size: 13px; font-weight: 700; color: #16a34a;">
          📍 GPS Radius: 10 km (Guntur, AP)
        </div>
      </div>

      <!-- Category Filter Tabs -->
      <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 24px;">
        ${categories.map(c => `
          <button 
            class="fc-btn"
            style="white-space: nowrap; font-size: 13px; padding: 8px 16px; border-radius: 20px; background: ${activeCategory === c.id ? '#16a34a' : 'white'}; color: ${activeCategory === c.id ? 'white' : '#475569'}; border: 1px solid ${activeCategory === c.id ? '#16a34a' : '#cbd5e1'};"
            onclick="window.fcFilterServices('${c.id}')"
          >
            <span>${c.icon}</span> ${c.label}
          </button>
        `).join('')}
      </div>

      <div class="fc-grid-2col fc-grid-services" style="margin-bottom: 28px;">
        
        <!-- SERVICES CARDS LIST -->
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${filteredServices.map(s => `
            <div class="fc-card" style="padding: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                <div style="display: flex; gap: 12px;">
                  <div style="width: 44px; height: 44px; background: #f0fdf4; color: #16a34a; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0;">
                    ${s.categoryIcon}
                  </div>
                  <div>
                    <h3 style="font-size: 17px; font-weight: 800; color: #0f172a;">${s.name}</h3>
                    <div style="font-size: 12px; font-weight: 700; color: #16a34a; margin-top: 2px;">
                      ${s.category} • ⭐ ${s.rating}
                    </div>
                  </div>
                </div>
                <div style="text-align: right;">
                  <span style="font-size: 14px; font-weight: 800; color: #0284c7; background: #e0f2fe; padding: 4px 10px; border-radius: 12px; display: inline-block;">
                    ${s.distanceKm} km away
                  </span>
                </div>
              </div>

              <div style="font-size: 13px; color: #475569; margin: 10px 0;">
                📍 ${s.address}
              </div>

              <!-- Available Inventory / Services Chips -->
              <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;">
                ${s.services.map(srv => `
                  <span style="font-size: 11px; background: #f8fafc; border: 1px solid #e2e8f0; color: #334155; padding: 3px 8px; border-radius: 6px;">
                    ${srv}
                  </span>
                `).join('')}
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; pt: 12px; padding-top: 12px;">
                <div style="font-size: 12px; font-weight: 700; color: #15803d;">
                  🟢 ${s.openStatus}
                </div>
                <div style="display: flex; gap: 8px;">
                  <a href="tel:${s.phone}" class="fc-btn fc-btn-secondary fc-btn-sm" style="font-size: 12px;">
                    📞 Call (${s.phone})
                  </a>
                  <button class="fc-btn fc-btn-primary fc-btn-sm" style="font-size: 12px;" onclick="alert('Opening Google Maps Directions to ${s.name}...');">
                    🗺️ Directions
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- INTERACTIVE MAP PLACEHOLDER -->
        <div>
          <div style="background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 24px; position: sticky; top: 90px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.03);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
              <h3 style="font-size: 18px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 8px;">
                🗺️ GIS Ag-Service Map
              </h3>
              <span style="font-size: 11px; color: #64748b;">OpenStreetMap Ready</span>
            </div>

            <!-- Map Graphic Canvas Simulation -->
            <div style="height: 340px; background: #e0f2fe; border-radius: 16px; border: 2px solid #bae6fd; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              
              <!-- Grid background pattern -->
              <div style="position: absolute; inset: 0; opacity: 0.15; background-image: radial-gradient(#0284c7 1px, transparent 1px); background-size: 16px 16px;"></div>

              <!-- Center Farmer Marker -->
              <div style="position: absolute; top: 48%; left: 48%; transform: translate(-50%,-50%); z-index: 10; text-align: center;">
                <div style="width: 38px; height: 38px; background: #16a34a; color: white; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-size: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
                  👨‍🌾
                </div>
                <div style="background: rgba(0,0,0,0.75); color: white; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; margin-top: 2px; backdrop-filter: blur(4px);">
                  You (Tenali, Guntur)
                </div>
              </div>

              <!-- Service Pins -->
              <div style="position: absolute; top: 25%; left: 30%; font-size: 22px; cursor: pointer;" title="Guntur Seed Store" onclick="alert('Guntur Seed Store - 2.4 km away')">📍</div>
              <div style="position: absolute; top: 65%; left: 70%; font-size: 22px; cursor: pointer;" title="Krishna Fertilizers" onclick="alert('Krishna Fertilizers - 3.1 km away')">🧪</div>
              <div style="position: absolute; top: 30%; left: 75%; font-size: 22px; cursor: pointer;" title="Jai Kisan Tractor Rental" onclick="alert('Jai Kisan Tractor Rental - 4.5 km away')">🚜</div>
              <div style="position: absolute; top: 75%; left: 25%; font-size: 22px; cursor: pointer;" title="Ag Cold Storage" onclick="alert('AP Ag Cold Storage - 6.8 km away')">❄️</div>

              <div style="position: absolute; bottom: 12px; left: 12px; right: 12px; background: rgba(255,255,255,0.9); backdrop-filter: blur(8px); padding: 10px 14px; border-radius: 12px; font-size: 11px; color: #0369a1; font-weight: 600; text-align: center;">
                Click any pin to inspect service contact and live distance calculation.
              </div>
            </div>

            <div style="margin-top: 14px; font-size: 12px; color: #64748b; text-align: center;">
              Need emergency tractor or harvester rental? Call <strong>1800-180-1551 (Kisan Call Center)</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}
