/**
 * Farmer Connect Portal - Single Page Application Router & State Manager
 */

import { renderHeader } from './components/Header.js';
import { renderMobileNav } from './components/MobileNav.js';
import { renderNotificationDrawer } from './components/NotificationDrawer.js';
import { renderAiAssistantDrawer } from './components/AiAssistantDrawer.js';
import { renderAwsModal } from './components/AwsModal.js';

import { renderLandingPage } from './pages/LandingPage.js';
import { renderAuthPage } from './pages/AuthPage.js';
import { renderDashboardPage } from './pages/DashboardPage.js';
import { renderWeatherPage } from './pages/WeatherPage.js';
import { renderPricesPage } from './pages/PricesPage.js';
import { renderCropRecommendationPage } from './pages/CropRecommendationPage.js';
import { renderCalculatorPage } from './pages/CalculatorPage.js';
import { renderMarketplacePage } from './pages/MarketplacePage.js';
import { renderServicesPage } from './pages/ServicesPage.js';
import { renderProfilePage } from './pages/ProfilePage.js';

import { authService } from './services/authService.js';
import { weatherService } from './services/weatherService.js';
import { marketPriceService } from './services/marketPriceService.js';
import { dbService } from './services/dbService.js';
import { aiAssistantService } from './services/aiAssistantService.js';
import { marketplaceService } from './services/marketplaceService.js';

class App {
  constructor() {
    this.activePage = 'dashboard';
    this.authTab = 'login';
    this.authRole = 'farmer';

    // Drawers & Modals
    this.isNotificationOpen = false;
    this.isAiAssistantOpen = false;
    this.isAwsModalOpen = false;

    // AI Messages
    this.aiMessages = [
      { sender: 'assistant', text: 'Hello Farmer 👋! I am your AI Agronomist Assistant. Ask me about weather, pest remedies, crop fertilizer schedules, or market rates!', category: 'Welcome' }
    ];
    this.isAiThinking = false;

    // Prices State
    this.selectedPriceCropId = 'paddy';
    this.priceStateFilter = 'All';
    this.priceDistrictFilter = 'All';

    // Recommendation State
    this.recommendationForm = { season: 'kharif', soil: 'black', water: 'medium', district: 'Guntur', farmSize: 3.5 };

    // Calculator State
    this.calcInputs = {
      farmSize: 4.0,
      seedCost: 4500,
      fertCost: 8500,
      pestCost: 4200,
      labourCost: 12000,
      irrigCost: 3500,
      equipCost: 6000,
      otherCost: 2500,
      expectedYieldPerAcre: 22,
      expectedSellingPrice: 2300
    };

    // Marketplace State
    this.marketplaceActiveTab = 'buy'; // 'buy', 'sell', 'mylistings', 'offers'
    this.marketplaceFilters = { crop: 'All', category: 'All', district: 'All', search: '' };
    this.marketplaceUiState = {
      selectedListingModal: null,
      editListingModal: null,
      offerModal: null,
      isPreviewOpen: false,
      uploadedImagePreview: null,
      customCropSelected: false
    };

    // Services State
    this.activeServiceCategory = 'All';

    this.init();
  }

  init() {
    this.attachGlobalHandlers();
    authService.subscribe(() => this.render());
    weatherService.subscribe(() => this.render());
    this.render();
  }

  attachGlobalHandlers() {
    window.fcNavigate = (pageId) => {
      this.activePage = pageId;
      window.scrollTo(0, 0);
      this.render();
    };

    window.fcChangeDistrict = (districtId) => {
      weatherService.setDistrict(districtId);
      this.render();
    };

    // Notification Handlers
    window.fcOpenNotificationDrawer = () => {
      this.isNotificationOpen = true;
      this.render();
    };
    window.fcCloseNotificationDrawer = () => {
      this.isNotificationOpen = false;
      this.render();
    };
    window.fcMarkNotificationRead = (id) => {
      dbService.markNotificationAsRead(id);
      this.render();
    };
    window.fcMarkAllNotificationsRead = () => {
      dbService.markAllNotificationsAsRead();
      this.render();
    };

    // AI Assistant Handlers
    window.fcOpenAiAssistant = (initialPrompt = null) => {
      this.isAiAssistantOpen = true;
      this.render();
      if (initialPrompt) {
        window.fcSendAiPrompt(initialPrompt);
      }
    };
    window.fcCloseAiAssistant = () => {
      this.isAiAssistantOpen = false;
      this.render();
    };
    window.fcSendAiPrompt = async (promptText) => {
      this.aiMessages.push({ sender: 'user', text: promptText });
      this.isAiThinking = true;
      this.render();

      const response = await aiAssistantService.askQuestion(promptText, { district: weatherService.getCurrentDistrictId() });
      this.aiMessages.push({ sender: 'assistant', text: response.text, category: response.category });
      this.isAiThinking = false;
      this.render();
    };
    window.fcSubmitAiChat = () => {
      const input = document.getElementById('ai-chat-input');
      if (input && input.value.trim()) {
        const val = input.value.trim();
        input.value = '';
        window.fcSendAiPrompt(val);
      }
    };

    window.fcHandleAiImageUpload = (input) => {
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          this.aiMessages.push({ sender: 'user', text: '📷 [Uploaded Crop Image for Diagnosis]' });
          this.isAiThinking = true;
          this.render();

          const response = await aiAssistantService.analyzeImage(e.target.result);
          this.aiMessages.push({ sender: 'assistant', text: response.text, category: 'Crop Diagnostics' });
          this.isAiThinking = false;
          this.render();
        };
        reader.readAsDataURL(input.files[0]);
      }
    };

    // AWS Modal Handlers
    window.fcOpenAwsModal = () => {
      this.isAwsModalOpen = true;
      this.render();
    };
    window.fcCloseAwsModal = () => {
      this.isAwsModalOpen = false;
      this.render();
    };

    // Auth Handlers
    window.fcSetAuthTab = (tab) => {
      this.authTab = tab;
      this.render();
    };
    window.fcSetAuthRole = (role) => {
      this.authRole = role;
      this.render();
    };
    window.fcSubmitLogin = () => {
      const identifier = document.getElementById('auth-identifier')?.value || 'ramesh@farmerconnect.in';
      const password = document.getElementById('auth-password')?.value || 'pass';
      authService.login({ identifier, password, role: this.authRole });
      this.activePage = 'dashboard';
      this.render();
    };
    window.fcSubmitSignup = () => {
      const name = document.getElementById('signup-name')?.value || 'Farmer';
      const phone = document.getElementById('signup-phone')?.value || '';
      const email = document.getElementById('signup-email')?.value || '';
      const state = document.getElementById('signup-state')?.value || 'Andhra Pradesh';
      const district = document.getElementById('signup-district')?.value || 'Guntur';
      const village = document.getElementById('signup-village')?.value || 'Village';
      const farmSize = document.getElementById('signup-farm')?.value || '4.0';
      const mainCrops = document.getElementById('signup-crops')?.value || 'Paddy';

      authService.signup({ name, phone, email, state, district, village, farmSize, mainCrops, role: this.authRole });
      this.activePage = 'dashboard';
      this.render();
    };
    window.fcLogout = () => {
      authService.logout();
      this.activePage = 'landing';
      this.render();
    };

    // Price Page Handlers
    window.fcFilterPrices = (filterType, value) => {
      if (filterType === 'state') this.priceStateFilter = value;
      if (filterType === 'district') this.priceDistrictFilter = value;
      this.render();
    };
    window.fcSelectCropTrend = (cropId) => {
      this.selectedPriceCropId = cropId;
      this.render();
    };

    // Recommendation Handlers
    window.fcSubmitCropRecommendation = () => {
      this.recommendationForm = {
        district: document.getElementById('rec-district')?.value || 'Guntur',
        season: document.getElementById('rec-season')?.value || 'kharif',
        soil: document.getElementById('rec-soil')?.value || 'black',
        water: document.getElementById('rec-water')?.value || 'medium',
        farmSize: document.getElementById('rec-farmsize')?.value || 3.5
      };
      this.render();
    };
    window.fcNavigateToCalcWithCrop = (cropName) => {
      this.activePage = 'calculator';
      this.render();
    };

    // Calculator Handlers
    window.fcRecalculateFarmProfit = () => {
      this.calcInputs = {
        farmSize: parseFloat(document.getElementById('calc-farmsize')?.value || 4.0),
        expectedYieldPerAcre: parseFloat(document.getElementById('calc-yield')?.value || 22),
        expectedSellingPrice: parseFloat(document.getElementById('calc-price')?.value || 2300),
        seedCost: parseFloat(document.getElementById('calc-seed')?.value || 4500),
        fertCost: parseFloat(document.getElementById('calc-fert')?.value || 8500),
        pestCost: parseFloat(document.getElementById('calc-pest')?.value || 4200),
        labourCost: parseFloat(document.getElementById('calc-labour')?.value || 12000),
        irrigCost: parseFloat(document.getElementById('calc-irrig')?.value || 3500),
        equipCost: parseFloat(document.getElementById('calc-equip')?.value || 6000),
        otherCost: parseFloat(document.getElementById('calc-other')?.value || 2500)
      };
      this.render();
    };

    // Marketplace Handlers
    window.fcSelectMarketTab = (tabId) => {
      this.marketplaceActiveTab = tabId;
      this.render();
    };
    window.fcFilterMarketplace = (type, value) => {
      this.marketplaceFilters[type] = value;
      this.render();
    };
    window.fcOpenListingDetailsModal = (id) => {
      this.marketplaceUiState.selectedListingModal = marketplaceService.getListingById(id);
      this.render();
    };
    window.fcOpenOfferModal = (id) => {
      this.marketplaceUiState.offerModal = marketplaceService.getListingById(id);
      this.render();
    };
    window.fcCloseMarketplaceModal = () => {
      this.marketplaceUiState.selectedListingModal = null;
      this.marketplaceUiState.offerModal = null;
      this.render();
    };
    window.fcSubmitCropListingForm = () => {
      const cropId = document.getElementById('sell-crop-id')?.value || 'paddy';
      const cropSelect = document.getElementById('sell-crop-id');
      const cropName = cropSelect ? cropSelect.options[cropSelect.selectedIndex].text : 'Paddy';
      
      const listingData = {
        cropId: cropId,
        cropName: cropName,
        category: document.getElementById('sell-category')?.value || '🌾 Grains',
        quantity: document.getElementById('sell-quantity')?.value || 10,
        unit: document.getElementById('sell-unit')?.value || 'Quintal',
        expectedPrice: document.getElementById('sell-expected-price')?.value || 2400,
        minPrice: document.getElementById('sell-min-price')?.value || 2300,
        qualityGrade: document.getElementById('sell-quality-grade')?.value || 'Grade A',
        harvestDate: document.getElementById('sell-harvest-date')?.value || 'Ready Now',
        state: document.getElementById('sell-state')?.value || 'Andhra Pradesh',
        district: document.getElementById('sell-district')?.value || 'Guntur',
        village: document.getElementById('sell-village')?.value || 'Tenali',
        description: document.getElementById('sell-description')?.value || '',
        contactPreference: document.getElementById('sell-contact-pref')?.value || 'Phone',
        imageUrl: this.marketplaceUiState.uploadedImagePreview || 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80'
      };

      marketplaceService.createListing(listingData, authService.getCurrentUser());
      alert('🌾 Crop listed successfully!');
      this.marketplaceActiveTab = 'mylistings';
      this.render();
    };
    window.fcOnSellCropChange = (value) => {
      if (value === 'other') {
        this.marketplaceUiState.customCropSelected = true;
      } else {
        this.marketplaceUiState.customCropSelected = false;
        // Optionally update the category field based on selected crop
      }
      this.render();
    };
    window.fcCalculateTotalValue = () => {
      const qty = Number(document.getElementById('sell-quantity')?.value || 0);
      const price = Number(document.getElementById('sell-expected-price')?.value || 0);
      const displayEl = document.getElementById('sell-total-value-display');
      const qtySummaryEl = document.getElementById('sell-qty-summary-display');
      const unit = document.getElementById('sell-unit')?.value || 'Quintal';
      
      if (displayEl) displayEl.innerText = `₹${(qty * price).toLocaleString('en-IN')}`;
      if (qtySummaryEl) qtySummaryEl.innerText = `Available Quantity: ${qty} ${unit}s`;
    };
    window.fcHandleCropImageUpload = (input) => {
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.marketplaceUiState.uploadedImagePreview = e.target.result;
          this.render();
        };
        reader.readAsDataURL(input.files[0]);
      }
    };
    window.fcRemoveUploadedImage = () => {
      this.marketplaceUiState.uploadedImagePreview = null;
      this.render();
    };
    window.fcPreviewCropListing = () => {
      alert("Preview functionality simulated.");
    };
    window.fcMarkListingSoldAction = (id) => {
      marketplaceService.markAsSold(id);
      this.render();
    };
    window.fcDeleteListingAction = (id) => {
      if (confirm('Delete this listing?')) {
        marketplaceService.deleteListing(id);
        this.render();
      }
    };
    window.fcSubmitOfferForm = (listingId) => {
      const price = document.getElementById('offer-price-input')?.value || 2000;
      const qty = document.getElementById('offer-qty-input')?.value || 10;
      const msg = document.getElementById('offer-msg-input')?.value || '';
      
      const listing = marketplaceService.getListingById(listingId);
      marketplaceService.createOffer({
        listingId,
        cropName: listing ? listing.cropName : 'Crop Produce',
        offerPrice: price,
        quantityWanted: qty,
        unit: listing ? listing.unit : 'Quintal',
        message: msg
      }, authService.getCurrentUser());

      alert('💬 Purchase offer submitted!');
      this.marketplaceUiState.offerModal = null;
      this.marketplaceActiveTab = 'offers';
      this.render();
    };
    window.fcRespondOfferAction = (offerId, status) => {
      marketplaceService.updateOfferStatus(offerId, status);
      this.render();
    };

    // Services Handlers
    window.fcFilterServices = (category) => {
      this.activeServiceCategory = category;
      this.render();
    };

    // Profile Handlers
    window.fcSubmitProfileUpdate = () => {
      const name = document.getElementById('prof-name')?.value;
      const phone = document.getElementById('prof-phone')?.value;
      const email = document.getElementById('prof-email')?.value;
      const farmSize = parseFloat(document.getElementById('prof-farm')?.value);
      const state = document.getElementById('prof-state')?.value;
      const district = document.getElementById('prof-district')?.value;
      const village = document.getElementById('prof-village')?.value;
      const cropsInput = document.getElementById('prof-crops')?.value;
      const mainCrops = cropsInput ? cropsInput.split(',').map(c => c.trim()) : ['Paddy'];

      authService.updateProfile({ name, phone, email, farmSize, state, district, village, mainCrops });
      alert('Profile updated successfully! Synthetic session synced with AWS DynamoDB.');
      this.render();
    };
  }

  renderPageContent() {
    switch (this.activePage) {
      case 'landing':
        return renderLandingPage();
      case 'auth':
        return renderAuthPage(this.authTab, this.authRole);
      case 'dashboard':
        return renderDashboardPage();
      case 'weather':
        return renderWeatherPage();
      case 'prices':
        return renderPricesPage(this.selectedPriceCropId, this.priceStateFilter, this.priceDistrictFilter);
      case 'recommendation':
        return renderCropRecommendationPage(this.recommendationForm);
      case 'calculator':
        return renderCalculatorPage(this.calcInputs);
      case 'marketplace':
        return renderMarketplacePage(this.marketplaceActiveTab, this.marketplaceFilters, this.marketplaceUiState);
      case 'services':
        return renderServicesPage(this.activeServiceCategory);
      case 'profile':
        return renderProfilePage();
      default:
        return renderDashboardPage();
    }
  }

  render() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    appEl.innerHTML = `
      ${renderHeader(this.activePage)}
      <main class="fc-main">
        ${this.renderPageContent()}
      </main>
      ${renderMobileNav(this.activePage)}
      ${renderNotificationDrawer(this.isNotificationOpen)}
      ${renderAiAssistantDrawer(this.isAiAssistantOpen, this.aiMessages, this.isAiThinking)}
      ${renderAwsModal(this.isAwsModalOpen)}
      
      <!-- Footer -->
      <footer class="fc-footer">
        <div class="fc-footer-inner">
          <div>
            <div style="font-size: 20px; font-weight: 800; color: white; margin-bottom: 8px;">🌱 FARMER CONNECT</div>
            <div style="font-size: 13px; color: #94a3b8; margin-bottom: 14px;">Better Information. Better Farming.</div>
            <p style="font-size: 12px; color: #64748b; line-height: 1.5;">
              A simple, low-cost digital platform helping Indian farmers get live weather, crop prices, farming advice, and marketplace connections in one place.
            </p>
          </div>

          <div>
            <div style="font-weight: 700; color: white; margin-bottom: 12px;">Quick Links</div>
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px;">
              <a href="#" onclick="window.fcNavigate('dashboard'); return false;" style="color: #cbd5e1;">Farmer Dashboard</a>
              <a href="#" onclick="window.fcNavigate('weather'); return false;" style="color: #cbd5e1;">Live Weather Radar</a>
              <a href="#" onclick="window.fcNavigate('prices'); return false;" style="color: #cbd5e1;">Regional Mandi Rates</a>
              <a href="#" onclick="window.fcNavigate('calculator'); return false;" style="color: #cbd5e1;">Farm Profit Calculator</a>
            </div>
          </div>

          <div>
            <div style="font-weight: 700; color: white; margin-bottom: 12px;">AWS Cloud Deployment</div>
            <div style="font-size: 12px; color: #94a3b8; line-height: 1.5;">
              Built for Amazon S3 + CloudFront, AWS Cognito, API Gateway + Lambda microservices, DynamoDB, and Amazon SNS notifications.
            </div>
            <button class="fc-btn fc-btn-secondary fc-btn-sm" style="margin-top: 12px; font-size: 11px;" onclick="window.fcOpenAwsModal()">
              View AWS Architecture Map ☁️
            </button>
          </div>
        </div>

        <div style="max-width: 1280px; margin: 30px auto 0; padding-top: 20px; border-top: 1px solid #1e293b; text-align: center; font-size: 12px; color: #64748b;">
          © 2026 Farmer Connect Portal. Designed for Indian Agriculture & AWS Cloud Computing.
        </div>
      </footer>
    `;
  }
}

// Instantiate on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
