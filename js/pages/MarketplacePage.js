/**
 * Farmer Connect Portal - Marketplace & Produce Listing Component
 * Features: Sell My Crops Form, Dynamic Total Value Calculator, Market Reference Benchmark,
 * Listing Management (Edit, Delete, Mark Sold), Buyer Search & Filters, Negotiation & Offers.
 */

import { marketplaceService } from '../services/marketplaceService.js';
import { authService } from '../services/authService.js';
import { INDIAN_CROPS_DATABASE } from '../data/cropData.js';

export const ALL_AGRICULTURAL_CROPS = [
  // CEREALS & GRAINS
  { id: 'paddy', name: 'Paddy (Common)', category: '🌾 Grains', icon: '🌾' },
  { id: 'basmati', name: 'Basmati Rice (Pusa 1121)', category: '🌾 Grains', icon: '🌾' },
  { id: 'wheat', name: 'Wheat (Sharbati)', category: '🌾 Grains', icon: '🌾' },
  { id: 'maize', name: 'Yellow Maize (Corn)', category: '🌾 Grains', icon: '🌽' },
  { id: 'jowar', name: 'Sorghum / Jowar', category: '🌾 Grains', icon: '🌾' },
  { id: 'bajra', name: 'Pearl Millet / Bajra', category: '🌾 Grains', icon: '🌾' },
  { id: 'ragi', name: 'Finger Millet / Ragi', category: '🌾 Grains', icon: '🌾' },

  // PULSES
  { id: 'turdal', name: 'Red Gram / Tur Dal', category: '🌱 Pulses', icon: '🫘' },
  { id: 'moong', name: 'Green Gram / Moong', category: '🌱 Pulses', icon: '🫘' },
  { id: 'urad', name: 'Black Gram / Urad', category: '🌱 Pulses', icon: '🫘' },
  { id: 'chana', name: 'Bengal Gram / Chana', category: '🌱 Pulses', icon: '🫘' },
  { id: 'lentil', name: 'Lentils / Masoor', category: '🌱 Pulses', icon: '🫘' },
  { id: 'cowpea', name: 'Cowpea / Lobia', category: '🌱 Pulses', icon: '🫘' },

  // OILSEEDS
  { id: 'groundnut', name: 'Groundnut (Pod)', category: '🥜 Oilseeds', icon: '🥜' },
  { id: 'soybean', name: 'Soybean', category: '🥜 Oilseeds', icon: '🫘' },
  { id: 'sunflower', name: 'Sunflower Seed', category: '🥜 Oilseeds', icon: '🌻' },
  { id: 'sesame', name: 'Sesame / Til', category: '🥜 Oilseeds', icon: '🌱' },
  { id: 'mustard', name: 'Mustard Seed', category: '🥜 Oilseeds', icon: '🟡' },
  { id: 'castor', name: 'Castor Seed', category: '🥜 Oilseeds', icon: '🌱' },

  // COMMERCIAL
  { id: 'cotton', name: 'Cotton (Long Staple)', category: '🌿 Commercial Crops', icon: '☁️' },
  { id: 'sugarcane', name: 'Sugarcane', category: '🌿 Commercial Crops', icon: '🎋' },
  { id: 'tobacco', name: 'Tobacco Leaf', category: '🌿 Commercial Crops', icon: '🍃' },

  // SPICES
  { id: 'chilli', name: 'Red Chilli (Teja)', category: '🌶️ Spices', icon: '🌶️' },
  { id: 'greenchilli', name: 'Green Chilli', category: '🌶️ Spices', icon: '🌶️' },
  { id: 'turmeric', name: 'Turmeric (Finger)', category: '🌶️ Spices', icon: '🟡' },
  { id: 'coriander', name: 'Coriander Seed', category: '🌶️ Spices', icon: '🌿' },
  { id: 'cumin', name: 'Cumin / Jeera', category: '🌶️ Spices', icon: '🌱' },
  { id: 'pepper', name: 'Black Pepper', category: '🌶️ Spices', icon: '⚫' },
  { id: 'ginger', name: 'Fresh Ginger', category: '🌶️ Spices', icon: '🫚' },
  { id: 'garlic', name: 'Garlic Bulbs', category: '🌶️ Spices', icon: '🧄' },

  // VEGETABLES
  { id: 'tomato', name: 'Tomato (Hybrid Red)', category: '🥬 Vegetables', icon: '🍅' },
  { id: 'onion', name: 'Onion (Red Nashik)', category: '🥬 Vegetables', icon: '🧅' },
  { id: 'potato', name: 'Potato (Jyoti)', category: '🥬 Vegetables', icon: '🥔' },
  { id: 'brinjal', name: 'Brinjal / Eggplant', category: '🥬 Vegetables', icon: '🍆' },
  { id: 'okra', name: 'Okra / Lady Finger', category: '🥬 Vegetables', icon: '🫛' },
  { id: 'cabbage', name: 'Green Cabbage', category: '🥬 Vegetables', icon: '🥬' },
  { id: 'cauliflower', name: 'Cauliflower', category: '🥬 Vegetables', icon: '🥦' },
  { id: 'carrot', name: 'Carrot', category: '🥬 Vegetables', icon: '🥕' },
  { id: 'greenpeas', name: 'Green Peas', category: '🥬 Vegetables', icon: '🫛' },
  { id: 'bittergourd', name: 'Bitter Gourd', category: '🥬 Vegetables', icon: '🥒' },
  { id: 'bottlegourd', name: 'Bottle Gourd', category: '🥬 Vegetables', icon: '🥒' },
  { id: 'drumstick', name: 'Drumstick / Moringa', category: '🥬 Vegetables', icon: '🌿' },

  // FRUITS
  { id: 'banana', name: 'Banana (Grand Naine)', category: '🍌 Fruits', icon: '🍌' },
  { id: 'mango', name: 'Mango (Banganapalli)', category: '🍌 Fruits', icon: '🥭' },
  { id: 'papaya', name: 'Papaya (Red Lady)', category: '🍌 Fruits', icon: '🥭' },
  { id: 'guava', name: 'Guava (Taiwan Pink)', category: '🍌 Fruits', icon: '🍏' },
  { id: 'watermelon', name: 'Watermelon', category: '🍌 Fruits', icon: '🍉' },
  { id: 'muskmelon', name: 'Muskmelon', category: '🍌 Fruits', icon: '🍈' },
  { id: 'grapes', name: 'Grapes (Thomson)', category: '🍌 Fruits', icon: '🍇' },
  { id: 'orange', name: 'Orange / Nagpur Santra', category: '🍌 Fruits', icon: '🍊' },

  // PLANTATION
  { id: 'coconut', name: 'Coconut (Raw / Dry)', category: '🥥 Plantation Crops', icon: '🥥' },
  { id: 'arecanut', name: 'Arecanut / Betel Nut', category: '🥥 Plantation Crops', icon: '🌰' },
  { id: 'cashew', name: 'Raw Cashew Nut', category: '🥥 Plantation Crops', icon: '🥜' },

  { id: 'other', name: 'Other Agricultural Produce', category: '📦 Other', icon: '📦' }
];

export function renderMarketplacePage(
  activeTab = 'buy', // 'buy', 'sell', 'mylistings', 'offers'
  filters = {},
  uiState = {
    selectedListingModal: null,
    editListingModal: null,
    offerModal: null,
    isPreviewOpen: false,
    uploadedImagePreview: null,
    customCropSelected: false
  }
) {
  const user = authService.getCurrentUser() || { userId: 'usr-farmer-demo', name: 'Ramesh Babu', role: 'farmer', village: 'Tenali', district: 'Guntur', state: 'Andhra Pradesh' };
  const isFarmer = user.role !== 'buyer';

  // Retrieve listings
  const buyListings = marketplaceService.getListings(filters);
  const myListings = marketplaceService.getListings({ userId: user.userId, showAllStatus: true });
  const offers = isFarmer ? marketplaceService.getOffersForFarmer(user.userId) : marketplaceService.getOffersByBuyer(user.userId);

  return `
    <div class="fc-marketplace-page">
      <!-- Header Banner -->
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 24px; background: white; border-radius: 20px; padding: 20px 24px; border: 1px solid #e2e8f0;">
        <div>
          <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">
            🌾 Farmer Produce Marketplace
          </h1>
          <p style="color: #64748b; font-size: 14px; margin-top: 2px;">
            Sell directly to verified wholesale buyers, millers, and exporters. Zero middleman commission.
          </p>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button 
            class="fc-btn ${activeTab === 'sell' ? 'fc-btn-primary' : 'fc-btn-secondary'}" 
            onclick="window.fcSelectMarketTab('sell')"
            style="font-size: 14px; font-weight: 700;"
          >
            🌾 Sell My Crops
          </button>
          <button 
            class="fc-btn ${activeTab === 'buy' ? 'fc-btn-primary' : 'fc-btn-secondary'}" 
            onclick="window.fcSelectMarketTab('buy')"
            style="font-size: 14px; font-weight: 700;"
          >
            🛒 Buy Crops
          </button>
        </div>
      </div>

      <!-- MAIN NAVIGATION TABS -->
      <div style="display: flex; gap: 8px; border-bottom: 2px solid #e2e8f0; margin-bottom: 24px; overflow-x: auto; padding-bottom: 4px;">
        <button 
          class="fc-tab-btn ${activeTab === 'buy' ? 'active' : ''}" 
          onclick="window.fcSelectMarketTab('buy')"
          style="padding: 10px 18px; border: none; background: transparent; font-size: 15px; font-weight: 700; color: ${activeTab === 'buy' ? '#16a34a' : '#64748b'}; border-bottom: 3px solid ${activeTab === 'buy' ? '#16a34a' : 'transparent'}; cursor: pointer; white-space: nowrap;"
        >
          🛒 Browse Produce Listings (${buyListings.length})
        </button>

        <button 
          class="fc-tab-btn ${activeTab === 'sell' ? 'active' : ''}" 
          onclick="window.fcSelectMarketTab('sell')"
          style="padding: 10px 18px; border: none; background: transparent; font-size: 15px; font-weight: 700; color: ${activeTab === 'sell' ? '#16a34a' : '#64748b'}; border-bottom: 3px solid ${activeTab === 'sell' ? '#16a34a' : 'transparent'}; cursor: pointer; white-space: nowrap;"
        >
          ➕ Sell My Crop
        </button>

        <button 
          class="fc-tab-btn ${activeTab === 'mylistings' ? 'active' : ''}" 
          onclick="window.fcSelectMarketTab('mylistings')"
          style="padding: 10px 18px; border: none; background: transparent; font-size: 15px; font-weight: 700; color: ${activeTab === 'mylistings' ? '#16a34a' : '#64748b'}; border-bottom: 3px solid ${activeTab === 'mylistings' ? '#16a34a' : 'transparent'}; cursor: pointer; white-space: nowrap;"
        >
          📋 My Listings (${myListings.length})
        </button>

        <button 
          class="fc-tab-btn ${activeTab === 'offers' ? 'active' : ''}" 
          onclick="window.fcSelectMarketTab('offers')"
          style="padding: 10px 18px; border: none; background: transparent; font-size: 15px; font-weight: 700; color: ${activeTab === 'offers' ? '#16a34a' : '#64748b'}; border-bottom: 3px solid ${activeTab === 'offers' ? '#16a34a' : 'transparent'}; cursor: pointer; white-space: nowrap; position: relative;"
        >
          💬 ${isFarmer ? 'Incoming Offers' : 'My Offers'} (${offers.length})
          ${offers.filter(o => o.status === 'pending').length > 0 ? `<span style="background: #dc2626; color: white; border-radius: 10px; padding: 2px 6px; font-size: 10px; margin-left: 6px;">${offers.filter(o => o.status === 'pending').length}</span>` : ''}
        </button>
      </div>

      <!-- ========================================================================= -->
      <!-- TAB 1: BUY CROPS (BUYER MARKETPLACE) -->
      <!-- ========================================================================= -->
      ${activeTab === 'buy' ? `
        <!-- Search & Filter Bar -->
        <div class="fc-card" style="margin-bottom: 24px; padding: 18px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; align-items: center;">
            <div>
              <label class="fc-label">🔍 Search Crop / Farmer</label>
              <input 
                type="text" 
                class="fc-input" 
                placeholder="Search Paddy, Cotton, Chilli..." 
                value="${filters.search || ''}"
                oninput="window.fcFilterMarketplace('search', this.value)"
              />
            </div>
            <div>
              <label class="fc-label">Filter by Crop</label>
              <select class="fc-select" onchange="window.fcFilterMarketplace('crop', this.value)">
                <option value="All">All Crops</option>
                ${ALL_AGRICULTURAL_CROPS.map(c => `<option value="${c.name}" ${filters.crop === c.name ? 'selected' : ''}>${c.icon} ${c.name}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="fc-label">Category</label>
              <select class="fc-select" onchange="window.fcFilterMarketplace('category', this.value)">
                <option value="All">All Categories</option>
                <option value="🌾 Grains" ${filters.category === '🌾 Grains' ? 'selected' : ''}>🌾 Grains</option>
                <option value="🌱 Pulses" ${filters.category === '🌱 Pulses' ? 'selected' : ''}>🌱 Pulses</option>
                <option value="🥜 Oilseeds" ${filters.category === '🥜 Oilseeds' ? 'selected' : ''}>🥜 Oilseeds</option>
                <option value="🌶️ Spices" ${filters.category === '🌶️ Spices' ? 'selected' : ''}>🌶️ Spices</option>
                <option value="🥬 Vegetables" ${filters.category === '🥬 Vegetables' ? 'selected' : ''}>🥬 Vegetables</option>
                <option value="🍌 Fruits" ${filters.category === '🍌 Fruits' ? 'selected' : ''}>🍌 Fruits</option>
                <option value="🌿 Commercial Crops" ${filters.category === '🌿 Commercial Crops' ? 'selected' : ''}>🌿 Commercial Crops</option>
                <option value="🥥 Plantation Crops" ${filters.category === '🥥 Plantation Crops' ? 'selected' : ''}>🥥 Plantation Crops</option>
              </select>
            </div>
            <div>
              <label class="fc-label">District</label>
              <select class="fc-select" onchange="window.fcFilterMarketplace('district', this.value)">
                <option value="All">All Districts</option>
                <option value="Guntur" ${filters.district === 'Guntur' ? 'selected' : ''}>Guntur</option>
                <option value="Kurnool" ${filters.district === 'Kurnool' ? 'selected' : ''}>Kurnool</option>
                <option value="Annamayya" ${filters.district === 'Annamayya' ? 'selected' : ''}>Annamayya</option>
                <option value="Nashik" ${filters.district === 'Nashik' ? 'selected' : ''}>Nashik</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Listing Cards Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); gap: 24px; margin-bottom: 32px;">
          ${buyListings.length === 0 ? `
            <div style="grid-column: 1 / -1; text-align: center; background: white; border-radius: 20px; padding: 48px 20px; border: 1px dashed #cbd5e1;">
              <div style="font-size: 44px; margin-bottom: 10px;">🌾</div>
              <h3 style="font-size: 18px; color: #1e293b;">No Crop Listings Match Your Search</h3>
              <p style="color: #64748b; font-size: 14px; margin-top: 4px;">Try clearing your filters or create a new crop listing!</p>
              <button class="fc-btn fc-btn-primary fc-btn-sm" style="margin-top: 16px;" onclick="window.fcSelectMarketTab('sell')">
                + Create Crop Listing
              </button>
            </div>
          ` : buyListings.map(l => {
            const totalValue = l.quantity * l.expectedPrice;
            return `
              <div class="fc-card fc-card-interactive" style="display: flex; flex-direction: column; padding: 0; overflow: hidden; border-top: 4px solid #16a34a;">
                
                <!-- Crop Image Header -->
                <div style="position: relative; height: 180px; background: #f1f5f9;">
                  <img src="${l.imageUrl}" alt="${l.cropName}" style="width: 100%; height: 100%; object-fit: cover;" />
                  <div style="position: absolute; top: 12px; left: 12px; background: rgba(0,0,0,0.75); color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; backdrop-filter: blur(4px);">
                    📍 ${l.locationText}
                  </div>
                  <div style="position: absolute; top: 12px; right: 12px; background: #16a34a; color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700;">
                    ${l.qualityGrade}
                  </div>
                </div>

                <!-- Card Content -->
                <div style="padding: 20px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
                      <div>
                        <h3 style="font-size: 18px; font-weight: 800; color: #0f172a;">${l.cropName}</h3>
                        <div style="font-size: 11px; font-weight: 700; color: #64748b;">${l.category}</div>
                      </div>
                      <div style="text-align: right;">
                        <div style="font-size: 18px; font-weight: 800; color: #16a34a;">₹${l.expectedPrice.toLocaleString('en-IN')}<span style="font-size: 11px; color: #64748b; font-weight: 500;">/${l.unit}</span></div>
                        <div style="font-size: 10px; color: #64748b;">Min: ₹${l.minPrice}/${l.unit}</div>
                      </div>
                    </div>

                    <!-- Quantity & Value -->
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px 12px; border-radius: 10px; margin: 10px 0; display: flex; justify-content: space-between; font-size: 13px;">
                      <div>Available: <strong>${l.quantity} ${l.unit}s</strong></div>
                      <div>Total: <strong style="color: #14532d;">₹${totalValue.toLocaleString('en-IN')}</strong></div>
                    </div>

                    <p style="font-size: 13px; color: #64748b; line-height: 1.45; margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                      ${l.description}
                    </p>
                  </div>

                  <!-- Farmer Footer & Action Buttons -->
                  <div style="border-top: 1px solid #f1f5f9; padding-top: 12px; margin-top: 6px;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                      <div>
                        <div style="font-size: 13px; font-weight: 700; color: #15803d;">👨‍🌾 ${l.farmerName}</div>
                        <div style="font-size: 11px; color: #94a3b8;">Harvested: ${l.harvestDate}</div>
                      </div>
                    </div>

                    <div style="display: flex; gap: 8px;">
                      <button class="fc-btn fc-btn-secondary fc-btn-sm" style="flex: 1;" onclick="window.fcOpenListingDetailsModal('${l.id}')">
                        View Details ➔
                      </button>
                      <button class="fc-btn fc-btn-primary fc-btn-sm" style="flex: 1;" onclick="window.fcOpenOfferModal('${l.id}')">
                        Make Offer 💬
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}

      <!-- ========================================================================= -->
      <!-- TAB 2: SELL MY CROPS (CREATE CROP LISTING FORM) -->
      <!-- ========================================================================= -->
      ${activeTab === 'sell' ? `
        <div class="fc-card" style="max-width: 820px; margin: 0 auto 32px; padding: 28px; border-top: 6px solid #16a34a;">
          <div style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
            <h2 style="font-size: 24px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">
              🌾 Create Crop Listing
            </h2>
            <p style="font-size: 14px; color: #64748b; margin-top: 4px;">
              Post your harvested produce directly onto the farmer-to-buyer marketplace.
            </p>
          </div>

          <form id="sell-crop-form" onsubmit="event.preventDefault(); window.fcSubmitCropListingForm();">
            
            <!-- 1. CROP / PRODUCT SELECTION -->
            <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 16px; margin-bottom: 16px;">
              <div class="fc-form-group">
                <label class="fc-label">1. Crop / Produce *</label>
                <select id="sell-crop-id" class="fc-select" required onchange="window.fcOnSellCropChange(this.value)">
                  ${ALL_AGRICULTURAL_CROPS.map(c => `
                    <option value="${c.id}">${c.icon} ${c.name} (${c.category})</option>
                  `).join('')}
                </select>
              </div>

              <div class="fc-form-group">
                <label class="fc-label">2. Category (Auto-Selected)</label>
                <input type="text" id="sell-category" class="fc-input" value="🌾 Grains" readonly style="background: #f8fafc; font-weight: 700; color: #15803d;" />
              </div>
            </div>

            <!-- Custom Crop Name Input (Shown if 'other' is selected) -->
            <div id="sell-custom-crop-container" class="fc-form-group" style="display: none; margin-bottom: 16px;">
              <label class="fc-label">Specify Custom Crop / Product Name *</label>
              <input type="text" id="sell-custom-crop-name" class="fc-input" placeholder="e.g. Organic Moringa Leaves" />
            </div>

            <!-- 3. QUANTITY & UNIT -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
              <div class="fc-form-group">
                <label class="fc-label">3. Quantity Available *</label>
                <input 
                  type="number" 
                  id="sell-quantity" 
                  class="fc-input" 
                  placeholder="e.g. 500" 
                  required 
                  oninput="window.fcCalculateTotalValue()" 
                />
              </div>

              <div class="fc-form-group">
                <label class="fc-label">4. Unit *</label>
                <select id="sell-unit" class="fc-select" required onchange="window.fcCalculateTotalValue()">
                  <option value="Quintal" selected>Quintal (100 kg)</option>
                  <option value="Kg">Kg</option>
                  <option value="Ton">Ton (1000 kg)</option>
                  <option value="Bags">Bags / Crates</option>
                  <option value="Pieces">Pieces</option>
                </select>
              </div>
            </div>

            <!-- 5 & 6. EXPECTED PRICE & MIN PRICE -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
              <div class="fc-form-group">
                <label class="fc-label">5. Expected Price (₹ per unit) *</label>
                <input 
                  type="number" 
                  id="sell-expected-price" 
                  class="fc-input" 
                  placeholder="e.g. 2400" 
                  required 
                  oninput="window.fcCalculateTotalValue()" 
                />
              </div>

              <div class="fc-form-group">
                <label class="fc-label">6. Minimum Negotiable Price (₹ per unit)</label>
                <input 
                  type="number" 
                  id="sell-min-price" 
                  class="fc-input" 
                  placeholder="e.g. 2300" 
                />
              </div>
            </div>

            <!-- DYNAMIC CALCULATOR & MARKET BENCHMARK REFERENCE CARD -->
            <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #bbf7d0; border-radius: 14px; padding: 18px; margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                <div>
                  <div style="font-size: 11px; font-weight: 800; color: #166534; text-transform: uppercase;">💰 Estimated Total Listing Value</div>
                  <div id="sell-total-value-display" style="font-size: 28px; font-weight: 800; color: #14532d; margin-top: 2px;">
                    ₹0
                  </div>
                  <div style="font-size: 12px; color: #15803d;" id="sell-qty-summary-display">
                    Available Quantity: 0 Quintals
                  </div>
                </div>

                <div style="text-align: right; background: white; padding: 10px 16px; border-radius: 12px; border: 1px solid #86efac;" id="sell-market-reference-box">
                  <div style="font-size: 10px; font-weight: 700; color: #64748b; text-transform: uppercase;">Mandi Market Reference</div>
                  <div style="font-size: 15px; font-weight: 800; color: #0f172a;" id="sell-mandi-ref-price">₹2,300 / Quintal</div>
                  <div style="font-size: 11px; font-weight: 700; color: #16a34a;" id="sell-mandi-ref-diff">+₹100 above mandi reference</div>
                </div>
              </div>
            </div>

            <!-- 7 & 8. QUALITY / GRADE & HARVEST DATE -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
              <div class="fc-form-group">
                <label class="fc-label">7. Quality / Grade *</label>
                <select id="sell-quality-grade" class="fc-select" required>
                  <option value="Grade A" selected>Grade A (Superior / High Quality)</option>
                  <option value="Premium">Premium Export Quality</option>
                  <option value="Grade B">Grade B (Standard Market Quality)</option>
                  <option value="Standard">Standard FAQ</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div class="fc-form-group">
                <label class="fc-label">8. Harvest Date *</label>
                <input type="text" id="sell-harvest-date" class="fc-input" value="10 Sep 2026" placeholder="e.g. 10 Sep 2026 / Ready Now" required />
              </div>
            </div>

            <!-- 9. LOCATION -->
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
              <div class="fc-form-group">
                <label class="fc-label">State</label>
                <input type="text" id="sell-state" class="fc-input" value="${user.state || 'Andhra Pradesh'}" required />
              </div>
              <div class="fc-form-group">
                <label class="fc-label">District</label>
                <input type="text" id="sell-district" class="fc-input" value="${user.district || 'Guntur'}" required />
              </div>
              <div class="fc-form-group">
                <label class="fc-label">Village / Town</label>
                <input type="text" id="sell-village" class="fc-input" value="${user.village || 'Tenali'}" required />
              </div>
            </div>

            <!-- 10. DESCRIPTION & CONTACT PREFERENCE -->
            <div class="fc-form-group" style="margin-bottom: 16px;">
              <label class="fc-label">10. Crop Description & Produce Notes</label>
              <textarea 
                id="sell-description" 
                class="fc-textarea" 
                rows="3" 
                placeholder="Freshly harvested paddy. Good quality grain. Stored in dry warehouse. Ready for immediate delivery."
              ></textarea>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
              <div class="fc-form-group">
                <label class="fc-label">11. Preferred Contact Mode *</label>
                <select id="sell-contact-pref" class="fc-select">
                  <option value="Phone" selected>📞 Phone Call</option>
                  <option value="WhatsApp">💬 WhatsApp Message</option>
                  <option value="Marketplace Chat">💬 Marketplace Chat</option>
                </select>
              </div>

              <!-- 12. CROP IMAGE UPLOAD -->
              <div class="fc-form-group">
                <label class="fc-label">12. Upload Crop Image 📷</label>
                <input 
                  type="file" 
                  id="sell-image-file" 
                  accept="image/*" 
                  class="fc-input" 
                  style="padding: 8px;"
                  onchange="window.fcHandleCropImageUpload(this)"
                />
              </div>
            </div>

            <!-- Image Preview Box -->
            <div id="sell-image-preview-container" style="display: none; margin-bottom: 20px; text-align: center; background: #f8fafc; padding: 14px; border-radius: 12px; border: 1px dashed #cbd5e1;">
              <div style="font-size: 12px; font-weight: 700; color: #64748b; margin-bottom: 8px;">📷 Uploaded Image Preview</div>
              <img id="sell-image-preview-img" src="" alt="Crop Preview" style="max-height: 160px; border-radius: 10px; object-fit: cover;" />
              <div style="margin-top: 8px;">
                <button type="button" class="fc-btn fc-btn-secondary fc-btn-sm" onclick="window.fcRemoveUploadedImage()">Remove Image ✕</button>
              </div>
            </div>

            <!-- BUTTON ACTIONS: PREVIEW & PUBLISH -->
            <div style="display: flex; gap: 12px; margin-top: 24px;">
              <button 
                type="button" 
                class="fc-btn fc-btn-secondary" 
                style="flex: 1;" 
                onclick="window.fcPreviewCropListing()"
              >
                👁️ Preview Listing
              </button>

              <button 
                type="submit" 
                class="fc-btn fc-btn-primary" 
                style="flex: 2; font-size: 16px; padding: 12px;"
              >
                🚀 Publish Listing Now
              </button>
            </div>

          </form>
        </div>
      ` : ''}

      <!-- ========================================================================= -->
      <!-- TAB 3: MY LISTINGS (FARMER DASHBOARD LISTINGS) -->
      <!-- ========================================================================= -->
      ${activeTab === 'mylistings' ? `
        <div style="margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h2 style="font-size: 22px; font-weight: 800; color: #14532d;">
              📋 My Active Crop Listings (${myListings.length})
            </h2>
            <button class="fc-btn fc-btn-primary fc-btn-sm" onclick="window.fcSelectMarketTab('sell')">
              + Add New Listing
            </button>
          </div>

          ${myListings.length === 0 ? `
            <div style="text-align: center; background: white; border-radius: 20px; padding: 48px 20px; border: 1px dashed #cbd5e1;">
              <div style="font-size: 40px; margin-bottom: 10px;">🌾</div>
              <h3 style="font-size: 18px; color: #1e293b;">You Have No Listed Crops Yet</h3>
              <p style="color: #64748b; font-size: 14px; margin-top: 4px;">Click below to list your harvested crops and receive buyer offers.</p>
              <button class="fc-btn fc-btn-primary fc-btn-sm" style="margin-top: 16px;" onclick="window.fcSelectMarketTab('sell')">
                + Create Crop Listing
              </button>
            </div>
          ` : `
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;">
              ${myListings.map(l => {
                const totalVal = l.quantity * l.expectedPrice;
                const statusBadge = l.status === 'active' ? '🟢 Active' : l.status === 'sold' ? '🔴 SOLD' : '🟡 Reserved';
                return `
                  <div class="fc-card" style="display: flex; flex-direction: column; justify-content: space-between; border-left: 6px solid ${l.status === 'active' ? '#16a34a' : '#dc2626'};">
                    <div>
                      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                        <h3 style="font-size: 18px; font-weight: 800; color: #0f172a;">${l.cropName}</h3>
                        <span style="font-size: 12px; font-weight: 800; padding: 3px 10px; border-radius: 12px; background: ${l.status === 'active' ? '#f0fdf4' : '#fef2f2'}; color: ${l.status === 'active' ? '#15803d' : '#b91c1c'};">
                          ${statusBadge}
                        </span>
                      </div>

                      <div style="font-size: 13px; color: #64748b; margin-bottom: 10px;">
                        📍 ${l.locationText} • Listed: ${l.createdAt}
                      </div>

                      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px 14px; border-radius: 10px; margin-bottom: 12px; font-size: 13px;">
                        <div>Quantity: <strong>${l.quantity} ${l.unit}s</strong></div>
                        <div>Price: <strong>₹${l.expectedPrice.toLocaleString('en-IN')}/${l.unit}</strong></div>
                        <div>Estimated Total: <strong style="color: #15803d;">₹${totalVal.toLocaleString('en-IN')}</strong></div>
                      </div>
                    </div>

                    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
                      <button class="fc-btn fc-btn-secondary fc-btn-sm" style="flex: 1;" onclick="window.fcOpenEditListingModal('${l.id}')">
                        ✏️ Edit
                      </button>
                      ${l.status === 'active' ? `
                        <button class="fc-btn fc-btn-primary fc-btn-sm" style="flex: 1.2; background: #dc2626; border-color: #b91c1c;" onclick="window.fcMarkListingSoldAction('${l.id}')">
                          Mark as Sold 🔴
                        </button>
                      ` : ''}
                      <button class="fc-btn fc-btn-secondary fc-btn-sm" style="color: #dc2626; border-color: #fca5a5;" onclick="window.fcDeleteListingAction('${l.id}')">
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>
      ` : ''}

      <!-- ========================================================================= -->
      <!-- TAB 4: MY OFFERS (BUYER OFFERS & NEGOTIATION) -->
      <!-- ========================================================================= -->
      ${activeTab === 'offers' ? `
        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 22px; font-weight: 800; color: #14532d; margin-bottom: 16px;">
            💬 ${isFarmer ? 'Incoming Buyer Offers' : 'My Submitted Offers'} (${offers.length})
          </h2>

          ${offers.length === 0 ? `
            <div style="text-align: center; background: white; border-radius: 20px; padding: 48px 20px; border: 1px dashed #cbd5e1;">
              <div style="font-size: 40px; margin-bottom: 10px;">💬</div>
              <h3 style="font-size: 18px; color: #1e293b;">No Offers Recorded</h3>
              <p style="color: #64748b; font-size: 14px; margin-top: 4px;">Buyers can submit price offers for listings on the marketplace.</p>
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${offers.map(o => `
                <div class="fc-card" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px; border-left: 6px solid ${o.status === 'accepted' ? '#16a34a' : o.status === 'rejected' ? '#dc2626' : '#ea580c'};">
                  <div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <h3 style="font-size: 17px; font-weight: 800; color: #0f172a;">${o.cropName}</h3>
                      <span style="font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 10px; background: ${o.status === 'accepted' ? '#f0fdf4' : o.status === 'rejected' ? '#fef2f2' : '#fff7ed'}; color: ${o.status === 'accepted' ? '#15803d' : o.status === 'rejected' ? '#b91c1c' : '#c2410c'};">
                        ${o.status.toUpperCase()}
                      </span>
                    </div>

                    <div style="font-size: 13px; color: #475569; margin-top: 4px;">
                      👤 Buyer: <strong>${o.buyerName}</strong> (${o.buyerPhone}) • Date: ${o.createdAt}
                    </div>

                    <div style="font-size: 13px; color: #166534; font-weight: 700; margin-top: 4px;">
                      Offered: ₹${o.offerPrice}/${o.unit} for ${o.quantityWanted} ${o.unit}s (Total: ₹${o.totalOfferValue.toLocaleString('en-IN')})
                    </div>

                    <p style="font-size: 12px; color: #64748b; font-style: italic; margin-top: 4px;">
                      "${o.message}"
                    </p>
                  </div>

                  ${isFarmer && o.status === 'pending' ? `
                    <div style="display: flex; gap: 8px;">
                      <button class="fc-btn fc-btn-primary fc-btn-sm" onclick="window.fcRespondOfferAction('${o.id}', 'accepted')">
                        ✓ Accept Offer
                      </button>
                      <button class="fc-btn fc-btn-secondary fc-btn-sm" style="color: #dc2626; border-color: #fca5a5;" onclick="window.fcRespondOfferAction('${o.id}', 'rejected')">
                        ✕ Reject
                      </button>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          `}
        </div>
      ` : ''}

      <!-- ========================================================================= -->
      <!-- MODALS: DETAILS, EDIT, OFFER, PREVIEW -->
      <!-- ========================================================================= -->

      <!-- MODAL: LISTING DETAILS -->
      ${uiState.selectedListingModal ? `
        <div class="fc-modal-overlay" onclick="if(event.target === this) window.fcCloseMarketplaceModal()">
          <div class="fc-modal-content" style="max-width: 580px; padding: 28px;">
            <button class="fc-modal-close" onclick="window.fcCloseMarketplaceModal()">✕</button>

            <img src="${uiState.selectedListingModal.imageUrl}" alt="${uiState.selectedListingModal.cropName}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 14px; margin-bottom: 16px;" />

            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
              <div>
                <span style="font-size: 12px; font-weight: 800; color: #16a34a; text-transform: uppercase;">${uiState.selectedListingModal.category}</span>
                <h2 style="font-size: 24px; font-weight: 800; color: #0f172a;">${uiState.selectedListingModal.cropName}</h2>
                <div style="font-size: 13px; color: #64748b;">📍 ${uiState.selectedListingModal.locationText}</div>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 24px; font-weight: 800; color: #15803d;">₹${uiState.selectedListingModal.expectedPrice.toLocaleString('en-IN')}<span style="font-size: 13px; font-weight: 500; color: #64748b;">/${uiState.selectedListingModal.unit}</span></div>
                <div style="font-size: 11px; color: #64748b;">Min Negotiable: ₹${uiState.selectedListingModal.minPrice}</div>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; border-radius: 12px; margin-bottom: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px;">
              <div>📦 Quantity: <strong>${uiState.selectedListingModal.quantity} ${uiState.selectedListingModal.unit}s</strong></div>
              <div>💰 Total Value: <strong style="color: #15803d;">₹${(uiState.selectedListingModal.quantity * uiState.selectedListingModal.expectedPrice).toLocaleString('en-IN')}</strong></div>
              <div>⭐ Quality: <strong>${uiState.selectedListingModal.qualityGrade}</strong></div>
              <div>📅 Harvest: <strong>${uiState.selectedListingModal.harvestDate}</strong></div>
            </div>

            <p style="font-size: 14px; color: #475569; line-height: 1.5; margin-bottom: 20px;">
              ${uiState.selectedListingModal.description}
            </p>

            <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; margin-bottom: 16px; text-align: left;">
              <div style="font-size: 14px; font-weight: 800; color: #15803d;">👨‍🌾 Producer: ${uiState.selectedListingModal.farmerName}</div>
              <div style="font-size: 12px; color: #64748b;">Village: ${uiState.selectedListingModal.village}, ${uiState.selectedListingModal.district}</div>
            </div>

            <div style="display: flex; gap: 10px;">
              <a href="tel:${uiState.selectedListingModal.farmerPhone}" class="fc-btn fc-btn-primary" style="flex: 1; text-align: center; text-decoration: none;">
                📞 Call (${uiState.selectedListingModal.farmerPhone})
              </a>
              <button class="fc-btn fc-btn-secondary" style="flex: 1;" onclick="window.fcOpenOfferModal('${uiState.selectedListingModal.id}')">
                💬 Make an Offer
              </button>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- MODAL: MAKE AN OFFER -->
      ${uiState.offerModal ? `
        <div class="fc-modal-overlay" onclick="if(event.target === this) window.fcCloseMarketplaceModal()">
          <div class="fc-modal-content" style="max-width: 480px; padding: 28px;">
            <button class="fc-modal-close" onclick="window.fcCloseMarketplaceModal()">✕</button>

            <h3 style="font-size: 20px; font-weight: 800; color: #14532d; margin-bottom: 4px;">
              💬 Make an Offer — ${uiState.offerModal.cropName}
            </h3>
            <p style="font-size: 13px; color: #64748b; margin-bottom: 16px;">
              Submit your proposed purchase price and quantity directly to ${uiState.offerModal.farmerName}.
            </p>

            <form onsubmit="event.preventDefault(); window.fcSubmitOfferForm('${uiState.offerModal.id}');">
              <div class="fc-form-group">
                <label class="fc-label">Offer Price (₹ per ${uiState.offerModal.unit})</label>
                <input type="number" id="offer-price-input" class="fc-input" value="${uiState.offerModal.expectedPrice}" required />
              </div>

              <div class="fc-form-group">
                <label class="fc-label">Quantity Wanted (${uiState.offerModal.unit}s)</label>
                <input type="number" id="offer-qty-input" class="fc-input" value="${uiState.offerModal.quantity}" required />
              </div>

              <div class="fc-form-group">
                <label class="fc-label">Message / Procurement Note</label>
                <textarea id="offer-msg-input" class="fc-textarea" rows="3" placeholder="e.g. I am interested in buying this quantity for immediate transport to my mill..."></textarea>
              </div>

              <button type="submit" class="fc-btn fc-btn-primary" style="width: 100%;">
                Send Offer to Farmer 🚀
              </button>
            </form>
          </div>
        </div>
      ` : ''}

    </div>
  `;
}
