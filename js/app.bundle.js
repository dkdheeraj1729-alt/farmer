/**
 * Farmer Connect Portal - Single Bundle Production Application Engine
 * Tagline: Better Information. Better Farming.
 */

// ============================================================================
// 1. DATASETS & COMPREHENSIVE INDIAN CROP DATABASE
// ============================================================================

const INDIAN_DISTRICTS = [
  { id: 'guntur', name: 'Guntur', state: 'Andhra Pradesh', lat: 16.3067, lng: 80.4365 },
  { id: 'vijayawada', name: 'Vijayawada', state: 'Andhra Pradesh', lat: 16.5062, lng: 80.6480 },
  { id: 'amaravati', name: 'Amaravati', state: 'Andhra Pradesh', lat: 16.5730, lng: 80.3575 },
  { id: 'kurnool', name: 'Kurnool', state: 'Andhra Pradesh', lat: 15.8281, lng: 78.0373 },
  { id: 'visakhapatnam', name: 'Visakhapatnam', state: 'Andhra Pradesh', lat: 17.6868, lng: 83.2185 },
  { id: 'warangal', name: 'Warangal', state: 'Telangana', lat: 17.9689, lng: 79.5941 },
  { id: 'nizamabad', name: 'Nizamabad', state: 'Telangana', lat: 18.6725, lng: 78.0941 },
  { id: 'coimbatore', name: 'Coimbatore', state: 'Tamil Nadu', lat: 11.0168, lng: 76.9558 },
  { id: 'nashik', name: 'Nashik', state: 'Maharashtra', lat: 19.9975, lng: 73.7898 },
  { id: 'ludhiana', name: 'Ludhiana', state: 'Punjab', lat: 30.9010, lng: 75.8573 }
];

const ALL_AGRICULTURAL_CROPS = [
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
  { id: 'chilli', name: 'Red Chilli (Teja Variety)', category: '🌶️ Spices', icon: '🌶️' },
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

const INDIAN_CROPS_DATABASE = [
  {
    id: 'paddy',
    name: 'Paddy (Common)',
    category: 'Grains',
    icon: '🌾',
    unit: 'quintal',
    currentPrice: 2300,
    previousPrice: 2250,
    minPrice: 2150,
    maxPrice: 2450,
    avgPrice: 2300,
    changePercentage: 2.22,
    trend: 'up',
    updatedAt: '11 Sep 2026, 10:30 AM',
    history7Days: [2210, 2225, 2240, 2260, 2275, 2250, 2300],
    history30Days: [2100, 2120, 2150, 2180, 2200, 2220, 2250, 2300],
    marketsComparison: [
      { market: 'Guntur Ag Market Yard', district: 'Guntur', price: 2300, isBest: false },
      { market: 'Tenali Mandi Yard', district: 'Guntur', price: 2320, isBest: true },
      { market: 'Vijayawada Market Yard', district: 'Krishna', price: 2275, isBest: false },
      { market: 'Narasaraopet APMC', district: 'Palnadu', price: 2285, isBest: false }
    ],
    trendExplanation: 'Price has increased for 4 consecutive available trading sessions due to strong rice mill procurement.'
  },
  {
    id: 'chilli',
    name: 'Red Chilli (Teja Variety)',
    category: 'Spices',
    icon: '🌶️',
    unit: 'quintal',
    currentPrice: 18500,
    previousPrice: 19100,
    minPrice: 17800,
    maxPrice: 19800,
    avgPrice: 18600,
    changePercentage: -3.14,
    trend: 'down',
    updatedAt: '11 Sep 2026, 10:15 AM',
    history7Days: [19500, 19400, 19200, 19300, 19100, 18800, 18500],
    history30Days: [20500, 20200, 19800, 19500, 19100, 18800, 18500],
    marketsComparison: [
      { market: 'Guntur Mirchi Yard', district: 'Guntur', price: 18500, isBest: false },
      { market: 'Khammam Yard', district: 'Khammam', price: 18750, isBest: true },
      { market: 'Warangal APMC', district: 'Warangal', price: 18400, isBest: false }
    ],
    trendExplanation: 'Red chilli prices slipped 3.1% due to increased arrivals from cold storage units.'
  },
  {
    id: 'cotton',
    name: 'Cotton (Long Staple)',
    category: 'Commercial Crops',
    icon: '☁️',
    unit: 'quintal',
    currentPrice: 7100,
    previousPrice: 6950,
    minPrice: 6800,
    maxPrice: 7350,
    avgPrice: 7020,
    changePercentage: 2.16,
    trend: 'up',
    updatedAt: '11 Sep 2026, 09:45 AM',
    history7Days: [6850, 6900, 6920, 6950, 7000, 7050, 7100],
    history30Days: [6600, 6700, 6800, 6900, 6950, 7000, 7100],
    marketsComparison: [
      { market: 'Kurnool Agricultural Yard', district: 'Kurnool', price: 7100, isBest: false },
      { market: 'Guntur APMC', district: 'Guntur', price: 7150, isBest: true },
      { market: 'Warangal Cotton Market', district: 'Warangal', price: 7080, isBest: false }
    ],
    trendExplanation: 'Cotton prices advanced 2.16% as textile spinning mills boosted procurement.'
  },
  {
    id: 'maize',
    name: 'Yellow Maize (Corn)',
    category: 'Grains',
    icon: '🌽',
    unit: 'quintal',
    currentPrice: 2150,
    previousPrice: 2150,
    minPrice: 2050,
    maxPrice: 2220,
    avgPrice: 2140,
    changePercentage: 0.00,
    trend: 'stable',
    updatedAt: '11 Sep 2026, 10:00 AM',
    history7Days: [2140, 2145, 2150, 2150, 2150, 2150, 2150],
    history30Days: [2100, 2120, 2130, 2140, 2150, 2150, 2150],
    marketsComparison: [
      { market: 'Nizamabad APMC', district: 'Nizamabad', price: 2150, isBest: false },
      { market: 'Guntur Yard', district: 'Guntur', price: 2180, isBest: true }
    ],
    trendExplanation: 'Prices remain flat with balanced feed industrial demand.'
  },
  {
    id: 'turmeric',
    name: 'Turmeric (Finger)',
    category: 'Spices',
    icon: '🟡',
    unit: 'quintal',
    currentPrice: 13200,
    previousPrice: 12800,
    minPrice: 12200,
    maxPrice: 13800,
    avgPrice: 12950,
    changePercentage: 3.12,
    trend: 'up',
    updatedAt: '11 Sep 2026, 10:45 AM',
    history7Days: [12500, 12600, 12700, 12800, 12950, 13050, 13200],
    history30Days: [11800, 12000, 12300, 12500, 12800, 13000, 13200],
    marketsComparison: [
      { market: 'Duggirala Market', district: 'Guntur', price: 13250, isBest: true },
      { market: 'Nizamabad APMC', district: 'Nizamabad', price: 13200, isBest: false }
    ],
    trendExplanation: 'Strong export orders pushed prices up 3.1%.'
  }
];

const CROP_QUICK_SEARCH_CHIPS = [
  { id: 'paddy', name: 'Paddy', icon: '🌾' },
  { id: 'chilli', name: 'Red Chilli', icon: '🌶️' },
  { id: 'cotton', name: 'Cotton', icon: '☁️' },
  { id: 'maize', name: 'Maize', icon: '🌽' },
  { id: 'turmeric', name: 'Turmeric', icon: '🟡' },
  { id: 'groundnut', name: 'Groundnut', icon: '🥜' }
];

const MOCK_SERVICES = [
  {
    id: 'srv-1',
    name: 'Guntur Bio-Agro Seeds Store',
    category: 'Seed Suppliers',
    categoryIcon: '🌱',
    rating: 4.8,
    distanceKm: 2.4,
    phone: '+91 98481 11223',
    address: 'APMC Market Road, Guntur',
    openStatus: 'Open Now (08:00 AM - 08:00 PM)',
    services: ['BPT 5204 Seed', 'Hybrid Cotton', 'Teja Chilli Seed']
  },
  {
    id: 'srv-2',
    name: 'Krishna Fertilizer & Agro Agency',
    category: 'Fertilizer Shops',
    categoryIcon: '🧪',
    rating: 4.7,
    distanceKm: 3.1,
    phone: '+91 94402 33445',
    address: 'Rythu Bazar Compound, Tenali',
    openStatus: 'Open Now',
    services: ['Neem Coated Urea', 'DAP', 'Potash', 'Organic Compost']
  },
  {
    id: 'srv-3',
    name: 'Jai Kisan Tractor & Harvester Rental',
    category: 'Tractor Rental',
    categoryIcon: '🚜',
    rating: 4.9,
    distanceKm: 4.5,
    phone: '+91 97015 66778',
    address: 'Main Road, Chebrole, Guntur',
    openStatus: 'Available 24x7',
    services: ['Mahindra 575 DI', 'Paddy Combine Harvester', 'Rotavator']
  },
  {
    id: 'srv-4',
    name: 'Sri Lakshmi Cold Storage',
    category: 'Cold Storage',
    categoryIcon: '❄️',
    rating: 4.6,
    distanceKm: 6.8,
    phone: '+91 99891 44556',
    address: 'Mirchi Yard Road, Guntur',
    openStatus: 'Open Now',
    services: ['Red Chilli Storage', 'Controlled Humidity', 'Bank Loan Support']
  }
];

const GOVT_SCHEMES_LIST = [
  {
    id: 'pm-kisan',
    title: 'PM-KISAN Samman Nidhi',
    benefitAmount: '₹6,000 / year',
    category: 'Direct Income Support',
    description: 'Financial benefit of ₹6,000 per year transferred in three equal installments of ₹2,000 directly into bank accounts of land-holding farmer families.',
    eligibility: 'All landholding farmer families with cultivable landholding in their names.',
    documentsRequired: ['Aadhaar Card', 'Land Ownership Records (Pahani / 1B)', 'Bank Account Passbook', 'Mobile Number'],
    officialPortalUrl: 'https://pmkisan.gov.in'
  },
  {
    id: 'ysr-rythu-bharosa',
    title: 'AP YSR Rythu Bharosa - PM KISAN',
    benefitAmount: '₹13,500 / year',
    category: 'State Financial Assistance',
    description: 'State government financial assistance to farmer families including tenant farmers to meet input expenses before sowing seasons.',
    eligibility: 'Farmer families in Andhra Pradesh owning agricultural land, plus eligible tenant farmers.',
    documentsRequired: ['Aadhaar Card', 'Ration Card / Rice Card', 'Land Title Deed / CCRC Tenant Card'],
    officialPortalUrl: 'https://rythubharosa.ap.gov.in'
  },
  {
    id: 'pmfby',
    title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    benefitAmount: 'Comprehensive Crop Insurance',
    category: 'Crop Risk Insurance',
    description: 'Comprehensive risk insurance coverage against yield loss caused by non-preventable natural risks (drought, flood, pest outbreak).',
    eligibility: 'All farmers growing notified crops in notified areas.',
    documentsRequired: ['Land Sowing Certificate', 'Aadhaar Card', 'Bank Passbook'],
    officialPortalUrl: 'https://pmfby.gov.in'
  },
  {
    id: 'soil-health-card',
    title: 'National Soil Health Card Scheme',
    benefitAmount: 'Free Soil Testing & NPK Advisory',
    category: 'Soil Management Advisory',
    description: 'Provides soil health cards to farmers every 2 years reporting 12 essential soil nutrients with crop-specific fertilizer recommendations.',
    eligibility: 'All farmers possessing agricultural land in India.',
    documentsRequired: ['Soil Sample from Field', 'Aadhaar Card', 'Land Khata Number'],
    officialPortalUrl: 'https://soilhealth.dac.gov.in'
  }
];

// ============================================================================
// 2. SERVICES LAYER
// ============================================================================

class PricePredictionService {
  static predict7DayPrice(cropData) {
    if (!cropData) return null;
    const currentPrice = cropData.currentPrice || 2300;
    const history = cropData.history7Days || [2210, 2225, 2240, 2260, 2275, 2250, 2300];
    const firstPrice = history[0];
    const lastPrice = history[history.length - 1];
    const momentumPct = ((lastPrice - firstPrice) / firstPrice) * 100;

    let projectedMidpoint = currentPrice;
    let trendBadge = '➡️ Relatively Stable';
    let insightText = '';

    if (momentumPct > 1.5) {
      projectedMidpoint = Math.round(currentPrice * 1.035);
      trendBadge = '📈 Moderately Increasing';
      insightText = `Based on recent +${momentumPct.toFixed(1)}% market momentum over the past week in mandi, prices are estimated to stay strong over the next 7 days.`;
    } else if (momentumPct < -1.5) {
      projectedMidpoint = Math.round(currentPrice * 0.965);
      trendBadge = '📉 Moderately Decreasing';
      insightText = `Based on recent ${momentumPct.toFixed(1)}% price drop due to fresh arrivals, prices are estimated to remain soft over the next 7 days.`;
    } else {
      projectedMidpoint = Math.round(currentPrice * 1.008);
      trendBadge = '➡️ Relatively Stable';
      insightText = `Prices have shown balanced supply-demand equilibrium (+${momentumPct.toFixed(1)}% variation).`;
    }

    const projectedMin = Math.round(projectedMidpoint * 0.97);
    const projectedMax = Math.round(projectedMidpoint * 1.03);

    const forecastDaily = [];
    let runningVal = currentPrice;
    const dailyStep = (projectedMidpoint - currentPrice) / 7;
    for (let i = 1; i <= 7; i++) {
      runningVal += dailyStep + (Math.random() * 6 - 3);
      forecastDaily.push(Math.round(runningVal));
    }

    return {
      currentPrice,
      projectedMin,
      projectedMax,
      projectedMidpoint,
      trendBadge,
      insightText,
      forecastDaily,
      disclaimer: 'AI prediction is an estimate based on available historical/demo data and is not a guaranteed future price.'
    };
  }
}

const DEMO_FARMER_USER = {
  userId: 'usr-farmer-demo',
  name: 'M.Dheeraj',
  email: 'farmer@farmerconnect.demo',
  phone: '+91 98480 12345',
  role: 'farmer',
  state: 'Andhra Pradesh',
  district: 'Guntur',
  village: 'amalapuram',
  farmSize: 4.5,
  mainCrop: 'Paddy (BPT 5204)',
  isLoggedIn: true
};

class AuthService {
  constructor() { this.currentUser = this.loadSession(); this.listeners = []; }
  loadSession() {
    try { const s = localStorage.getItem('fc_authenticated_user'); if (s) return JSON.parse(s); } catch(e){}
    return DEMO_FARMER_USER;
  }
  saveSession(u) {
    this.currentUser = u;
    try { if (u) localStorage.setItem('fc_authenticated_user', JSON.stringify(u)); else localStorage.removeItem('fc_authenticated_user'); } catch(e){}
    this.notify();
  }
  getCurrentUser() { return this.currentUser; }
  isAuthenticated() { return !!(this.currentUser && this.currentUser.isLoggedIn); }
  login({ identifier, role = 'farmer' }) {
    let name = 'M.Dheeraj';
    if (identifier.includes('buyer') || role === 'buyer') {
      name = 'Sri Lakshmi Rice Mill (Buyer)';
    }
    const user = { ...DEMO_FARMER_USER, name, email: identifier, role, isLoggedIn: true };
    this.saveSession(user);
    return { success: true, user };
  }
  logout() { this.saveSession(null); }
  subscribe(l) { this.listeners.push(l); }
  notify() { this.listeners.forEach(l => l(this.currentUser)); }
}
const authService = new AuthService();

class WeatherService {
  constructor() { this.currentDistrictId = 'guntur'; }
  getDistricts() { return INDIAN_DISTRICTS; }
  getCurrentDistrictId() { return this.currentDistrictId; }
  setDistrict(id) { this.currentDistrictId = id; }
  getWeatherForDistrict(districtId = this.currentDistrictId) {
    const dist = INDIAN_DISTRICTS.find(d => d.id === districtId) || INDIAN_DISTRICTS[0];
    return {
      district: dist.name,
      state: dist.state,
      temp: dist.id === 'ludhiana' ? 28 : dist.id === 'nashik' ? 26 : 31,
      condition: 'Partly Cloudy',
      humidity: 68,
      rainProbability: 70,
      windSpeed: 14,
      uvIndex: 6,
      soilMoisture: '62% (Sufficient)',
      sunrise: '06:08 AM',
      sunset: '06:22 PM',
      lastUpdated: 'Today, 03:30 PM (Simulated Data)',
      alert: { type: 'warning', title: 'Rain Expected Tomorrow 🌧️', message: `${dist.name} Agromet Advisory: Moderate rain expected. DO NOT IRRIGATE TODAY to avoid nutrient runoff.` },
      hourly: [
        { time: '06 AM', temp: 24, icon: 'sun-cloud', rain: 10 },
        { time: '09 AM', temp: 27, icon: 'sun-cloud', rain: 20 },
        { time: '12 PM', temp: 31, icon: 'sun-cloud', rain: 40 },
        { time: '03 PM', temp: 30, icon: 'rain', rain: 70 },
        { time: '06 PM', temp: 28, icon: 'rain', rain: 65 },
        { time: '09 PM', temp: 25, icon: 'cloud', rain: 30 }
      ],
      forecast: [
        { day: 'Today', tempHigh: 31, tempLow: 24, icon: 'sun-cloud', rain: 70, condition: 'Partly Cloudy' },
        { day: 'Tomorrow', tempHigh: 29, tempLow: 23, icon: 'rain', rain: 85, condition: 'Moderate Rain' },
        { day: 'Sunday', tempHigh: 30, tempLow: 23, icon: 'thunderstorm', rain: 60, condition: 'Thunderstorms' },
        { day: 'Monday', tempHigh: 32, tempLow: 25, icon: 'sun-cloud', rain: 20, condition: 'Mostly Sunny' },
        { day: 'Tuesday', tempHigh: 33, tempLow: 25, icon: 'sun', rain: 10, condition: 'Clear Sky' },
        { day: 'Wednesday', tempHigh: 33, tempLow: 24, icon: 'sun', rain: 10, condition: 'Clear Sky' },
        { day: 'Thursday', tempHigh: 31, tempLow: 24, icon: 'sun-cloud', rain: 30, condition: 'Passing Clouds' }
      ]
    };
  }
}
const weatherService = new WeatherService();

class MarketPriceService {
  getPrices() { return INDIAN_CROPS_DATABASE; }
  getCropById(id) { return INDIAN_CROPS_DATABASE.find(c => c.id === id) || INDIAN_CROPS_DATABASE[0]; }
  searchCrops(query) {
    if (!query) return INDIAN_CROPS_DATABASE;
    const q = query.toLowerCase().trim();
    return INDIAN_CROPS_DATABASE.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.id.toLowerCase().includes(q) || 
      c.category.toLowerCase().includes(q)
    );
  }
}
const marketPriceService = new MarketPriceService();

class RecommendationEngine {
  static getRecommendations({ season = 'kharif', soil = 'black', water = 'medium', farmSize = 3.5 }) {
    const list = [
      {
        name: 'Paddy (BPT 5204 Samba Mahsuri)',
        stars: 5,
        matchScore: 96,
        durationDays: '135–140 Days',
        waterReqText: 'Medium–High Irrigation',
        suitableSoilText: 'Black Cotton / Alluvial Soil',
        estimatedValuePerAcre: '₹55,000 – ₹68,000',
        farmingTips: 'BPT 5204 has premium grain quality. Maintain 2-5cm water depth during tillering phase.'
      },
      {
        name: 'Red Chilli (Teja Variety)',
        stars: 5,
        matchScore: 94,
        durationDays: '150–160 Days',
        waterReqText: 'Drip Fertigation Recommended',
        suitableSoilText: 'Deep Black Well-drained Soil',
        estimatedValuePerAcre: '₹1,20,000 – ₹1,80,000',
        farmingTips: 'Teja chilli commands high export prices in Guntur Mirchi Yard. Install yellow sticky traps for whitefly.'
      },
      {
        name: 'Cotton (Bt Hybrid)',
        stars: 4,
        matchScore: 88,
        durationDays: '160–180 Days',
        waterReqText: 'Rainfed + Light Irrigation',
        suitableSoilText: 'Deep Black Soil',
        estimatedValuePerAcre: '₹48,000 – ₹62,000',
        farmingTips: 'Ensure proper 90x60 cm plant spacing to avoid boll rot during late monsoon showers.'
      }
    ];
    return list;
  }
}

// MARKETPLACE SERVICE LOCAL STORAGE CRUD
const STORAGE_LISTINGS_KEY = 'fc_marketplace_listings';
const STORAGE_OFFERS_KEY = 'fc_marketplace_offers';

const SEED_LISTINGS = [
  {
    id: 'lst-101',
    userId: 'usr-farmer-demo',
    farmerName: 'M.Dheeraj',
    farmerPhone: '+91 98480 12345',
    farmerRole: 'farmer',
    cropId: 'paddy',
    cropName: 'Paddy (Common)',
    category: '🌾 Grains',
    quantity: 500,
    unit: 'Quintal',
    expectedPrice: 2400,
    minPrice: 2300,
    qualityGrade: 'Grade A',
    qualityNote: 'High quality, recently harvested',
    harvestDate: '10 Sep 2026',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    village: 'amalapuram',
    locationText: 'amalapuram, Guntur, Andhra Pradesh',
    description: 'Freshly harvested high-quality paddy. Stored in dry warehouse. Ready for delivery.',
    contactPreference: 'Phone',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    status: 'active',
    createdAt: '11 Sep 2026, 09:30 AM'
  },
  {
    id: 'lst-102',
    userId: 'usr-farmer-2',
    farmerName: 'Venkateswarlu K.',
    farmerPhone: '+91 94401 88776',
    farmerRole: 'farmer',
    cropId: 'chilli',
    cropName: 'Red Chilli (Teja Variety)',
    category: '🌶️ Spices',
    quantity: 80,
    unit: 'Quintal',
    expectedPrice: 19000,
    minPrice: 18500,
    qualityGrade: 'Premium',
    qualityNote: 'Deep red color, high pungency',
    harvestDate: '05 Sep 2026',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    village: 'Pattabhipuram',
    locationText: 'Pattabhipuram, Guntur, Andhra Pradesh',
    description: 'Export grade Teja red chilli.',
    contactPreference: 'WhatsApp',
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80',
    status: 'active',
    createdAt: '10 Sep 2026, 02:15 PM'
  }
];

const SEED_OFFERS = [
  {
    id: 'ofr-501',
    listingId: 'lst-101',
    cropName: 'Paddy (Common)',
    buyerUserId: 'usr-buyer-demo',
    buyerName: 'Sri Lakshmi Rice Mill',
    buyerPhone: '+91 98490 55667',
    offerPrice: 2350,
    quantityWanted: 200,
    totalOfferValue: 470000,
    unit: 'Quintal',
    message: 'We are interested in buying 200 quintals at ₹2,350/quintal for immediate dispatch to our mill.',
    status: 'pending',
    createdAt: '11 Sep 2026, 11:30 AM'
  }
];

class MarketplaceService {
  constructor() { this.initStorage(); }
  initStorage() {
    try {
      if (!localStorage.getItem(STORAGE_LISTINGS_KEY)) {
        localStorage.setItem(STORAGE_LISTINGS_KEY, JSON.stringify(SEED_LISTINGS));
      }
      if (!localStorage.getItem(STORAGE_OFFERS_KEY)) {
        localStorage.setItem(STORAGE_OFFERS_KEY, JSON.stringify(SEED_OFFERS));
      }
    } catch(e){}
  }
  getListings(filters = {}) {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_LISTINGS_KEY) || '[]');
      let result = data.filter(item => item.status !== 'deleted');

      if (filters.status) {
        result = result.filter(item => item.status === filters.status);
      } else if (!filters.showAllStatus) {
        result = result.filter(item => item.status === 'active');
      }

      if (filters.userId) {
        result = result.filter(item => item.userId === filters.userId);
      }

      if (filters.crop && filters.crop !== 'All') {
        result = result.filter(item => item.cropName.toLowerCase().includes(filters.crop.toLowerCase()));
      }

      if (filters.category && filters.category !== 'All') {
        result = result.filter(item => item.category === filters.category);
      }

      if (filters.district && filters.district !== 'All') {
        result = result.filter(item => item.district === filters.district || item.locationText.includes(filters.district));
      }

      if (filters.search) {
        const q = filters.search.toLowerCase().trim();
        result = result.filter(item => 
          item.cropName.toLowerCase().includes(q) ||
          item.farmerName.toLowerCase().includes(q) ||
          item.district.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
        );
      }

      return result;
    } catch(e) { return SEED_LISTINGS; }
  }

  getListingById(id) {
    const listings = this.getListings({ showAllStatus: true });
    return listings.find(l => l.id === id) || null;
  }

  createListing(listingData, user) {
    try {
      const listings = JSON.parse(localStorage.getItem(STORAGE_LISTINGS_KEY) || '[]');
      const newListing = {
        id: 'lst-' + Date.now(),
        userId: user ? user.userId : 'usr-farmer-demo',
        farmerName: user ? user.name : 'M.Dheeraj',
        farmerPhone: user ? (user.phone || '+91 98480 12345') : '+91 98480 12345',
        farmerRole: user ? user.role : 'farmer',
        cropId: listingData.cropId || 'paddy',
        cropName: listingData.cropName || 'Paddy (Common)',
        category: listingData.category || '🌾 Grains',
        quantity: Number(listingData.quantity) || 10,
        unit: listingData.unit || 'Quintal',
        expectedPrice: Number(listingData.expectedPrice) || 2000,
        minPrice: Number(listingData.minPrice) || Number(listingData.expectedPrice) || 2000,
        qualityGrade: listingData.qualityGrade || 'Grade A',
        qualityNote: listingData.qualityNote || '',
        harvestDate: listingData.harvestDate || 'Ready Now',
        state: listingData.state || (user ? user.state : 'Andhra Pradesh'),
        district: listingData.district || (user ? user.district : 'Guntur'),
        village: listingData.village || (user ? user.village : 'amalapuram'),
        locationText: `${listingData.village || 'amalapuram'}, ${listingData.district || 'Guntur'}, ${listingData.state || 'Andhra Pradesh'}`,
        description: listingData.description || 'Quality agricultural produce.',
        contactPreference: listingData.contactPreference || 'Phone',
        imageUrl: listingData.imageUrl || 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
        status: 'active',
        createdAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };

      listings.unshift(newListing);
      localStorage.setItem(STORAGE_LISTINGS_KEY, JSON.stringify(listings));
      return { success: true, listing: newListing };
    } catch(e) { return { success: false, error: e.message }; }
  }

  updateListing(id, updatedFields) {
    try {
      const listings = JSON.parse(localStorage.getItem(STORAGE_LISTINGS_KEY) || '[]');
      const index = listings.findIndex(l => l.id === id);
      if (index !== -1) {
        listings[index] = { ...listings[index], ...updatedFields };
        localStorage.setItem(STORAGE_LISTINGS_KEY, JSON.stringify(listings));
        return { success: true, listing: listings[index] };
      }
      return { success: false, error: 'Listing not found' };
    } catch(e) { return { success: false, error: e.message }; }
  }

  deleteListing(id) { return this.updateListing(id, { status: 'deleted' }); }
  markAsSold(id) { return this.updateListing(id, { status: 'sold' }); }

  getOffersForFarmer(farmerUserId) {
    try {
      const offers = JSON.parse(localStorage.getItem(STORAGE_OFFERS_KEY) || '[]');
      const userListings = this.getListings({ userId: farmerUserId, showAllStatus: true });
      const listingIds = userListings.map(l => l.id);
      return offers.filter(o => listingIds.includes(o.listingId));
    } catch(e) { return SEED_OFFERS; }
  }

  getOffersByBuyer(buyerUserId) {
    try {
      const offers = JSON.parse(localStorage.getItem(STORAGE_OFFERS_KEY) || '[]');
      return offers.filter(o => o.buyerUserId === buyerUserId);
    } catch(e) { return []; }
  }

  createOffer(offerData, buyerUser) {
    try {
      const offers = JSON.parse(localStorage.getItem(STORAGE_OFFERS_KEY) || '[]');
      const newOffer = {
        id: 'ofr-' + Date.now(),
        listingId: offerData.listingId,
        cropName: offerData.cropName,
        buyerUserId: buyerUser ? buyerUser.userId : 'usr-buyer-demo',
        buyerName: buyerUser ? buyerUser.name : 'Wholesale Buyer',
        buyerPhone: buyerUser ? (buyerUser.phone || '+91 98490 99887') : '+91 98490 99887',
        offerPrice: Number(offerData.offerPrice),
        quantityWanted: Number(offerData.quantityWanted),
        totalOfferValue: Number(offerData.offerPrice) * Number(offerData.quantityWanted),
        unit: offerData.unit || 'Quintal',
        message: offerData.message || 'Interested in buying.',
        status: 'pending',
        createdAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      offers.unshift(newOffer);
      localStorage.setItem(STORAGE_OFFERS_KEY, JSON.stringify(offers));
      return { success: true, offer: newOffer };
    } catch(e) { return { success: false, error: e.message }; }
  }

  updateOfferStatus(offerId, status) {
    try {
      const offers = JSON.parse(localStorage.getItem(STORAGE_OFFERS_KEY) || '[]');
      const index = offers.findIndex(o => o.id === offerId);
      if (index !== -1) {
        offers[index].status = status;
        localStorage.setItem(STORAGE_OFFERS_KEY, JSON.stringify(offers));
        return { success: true, offer: offers[index] };
      }
      return { success: false, error: 'Offer not found' };
    } catch(e) { return { success: false, error: e.message }; }
  }
}
const marketplaceService = new MarketplaceService();

// DISEASE DETECTION SERVICE
class DiseaseDetectionService {
  static analyzeImage(imageDataUrl) {
    if (!imageDataUrl) return { success: false, error: 'Please upload a leaf image first.' };
    return {
      success: true,
      diagnostic: {
        diseaseName: 'Bacterial Leaf Blight (Xanthomonas oryzae)',
        confidenceScore: 89,
        severity: 'Moderate',
        symptoms: 'Water-soaked translucent lesions along leaf margins expanding into yellow wavy stripe blights.',
        treatmentPlan: [
          'Apply Copper Hydroxide (50% WP) @ 2g/liter or Streptocycline @ 0.5g/liter.',
          'Maintain shallow field water depth; postpone heavy nitrogen fertilizer application.',
          'Ensure good field drainage.'
        ],
        disclaimer: 'AI Diagnostic Estimate based on image matching. Consult your local Krishi Vigyan Kendra (KVK) officer for field verification.'
      }
    };
  }
}

// FARMING PLAN SERVICE
class FarmingPlanService {
  static getPlanForCrop(cropId = 'paddy') {
    const key = 'fc_farm_plan_' + cropId;
    try {
      const saved = localStorage.getItem(key);
      if (saved) return JSON.parse(saved);
    } catch(e){}
    return [
      { id: 't1', stage: '1. Land Preparation & Puddling', days: 'Day 1–10', desc: 'Plough field 2–3 times, apply FYM 5 tons/acre, puddle soil.', status: 'completed' },
      { id: 't2', stage: '2. Nursery & Seed Treatment', days: 'Day 10–25', desc: 'Treat seeds with Carbendazim 2g/kg. Raise mat nursery for 15 days.', status: 'completed' },
      { id: 't3', stage: '3. Transplanting', days: 'Day 25–30', desc: 'Transplant 15-day-old seedlings @ 2–3 seedlings/hill with 20x15 cm spacing.', status: 'pending' },
      { id: 't4', stage: '4. Irrigation & Weed Control', days: 'Day 30–50', desc: 'Maintain 2–5cm shallow water layer. Apply Pretilachlor 50% EC weedicide @ 500ml/acre.', status: 'pending' },
      { id: 't5', stage: '5. Nutrient Management', days: 'Day 50–75', desc: 'Top dress Urea 35kg/acre at active tillering stage.', status: 'pending' },
      { id: 't6', stage: '6. Pest & Disease Monitoring', days: 'Day 75–105', desc: 'Monitor for Stem Borer. Spray Chlorantraniliprole 18.5 SC @ 60ml/acre if threshold crossed.', status: 'pending' },
      { id: 't7', stage: '7. Harvesting', days: 'Day 105–125', desc: 'Drain field water 10 days before harvest. Harvest when 80% grains turn golden yellow.', status: 'pending' }
    ];
  }
  static toggleTask(cropId, taskId) {
    const list = this.getPlanForCrop(cropId);
    const updated = list.map(t => t.id === taskId ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t);
    try { localStorage.setItem('fc_farm_plan_' + cropId, JSON.stringify(updated)); } catch(e){}
    return updated;
  }
}

// NOTIFICATION SERVICE
class NotificationService {
  getNotifications() {
    try {
      const s = localStorage.getItem('fc_notifications');
      if (s) return JSON.parse(s);
    } catch(e){}
    return [
      { id: 'n1', title: 'Rain Expected Tomorrow 🌧️', message: 'Guntur Agromet Advisory: Moderate rain expected. DO NOT IRRIGATE TODAY to preserve soil nitrogen.', time: '30m ago', read: false },
      { id: 'n2', title: 'Paddy Mandi Rate Up +2.2% 📈', message: 'Guntur APMC Yard: Paddy rate increased to ₹2,300/quintal.', time: '2h ago', read: false }
    ];
  }
  getUnreadCount() { return this.getNotifications().filter(n => !n.read).length; }
  markRead(id) {
    const updated = this.getNotifications().map(n => n.id === id ? { ...n, read: true } : n);
    try { localStorage.setItem('fc_notifications', JSON.stringify(updated)); } catch(e){}
    return updated;
  }
  clearAll() {
    try { localStorage.setItem('fc_notifications', JSON.stringify([])); } catch(e){}
    return [];
  }
}
const notificationService = new NotificationService();

// ============================================================================
// 3. UI COMPONENTS (HEADER, MOBILE NAV, DRAWERS, MODALS)
// ============================================================================

function renderHeader(activePage) {
  const user = authService.getCurrentUser();
  const unreadCount = notificationService.getUnreadCount();
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'weather', label: 'Weather', icon: '🌦️' },
    { id: 'prices', label: 'Prices', icon: '💰' },
    { id: 'recommendation', label: 'Advisor', icon: '🌱' },
    { id: 'calculator', label: 'Calculator', icon: '🧮' },
    { id: 'marketplace', label: 'Market', icon: '🛒' },
    { id: 'doctor', label: 'Crop Doctor', icon: '🩺' },
    { id: 'farmplan', label: 'Farm Plan', icon: '📑' },
    { id: 'schemes', label: 'Schemes', icon: '🏛️' },
    { id: 'services', label: 'Services', icon: '📍' }
  ];

  return `
    <header class="fc-header">
      <div class="fc-header-inner">
        <div class="fc-brand" onclick="window.fcNavigate('dashboard')">
          <div class="fc-brand-icon">🌱</div>
          <div>
            <div class="fc-brand-title">FARMER CONNECT</div>
            <div class="fc-brand-tagline">BETTER INFORMATION. BETTER FARMING.</div>
          </div>
        </div>

        <nav class="fc-nav-links">
          ${navItems.map(item => `
            <div class="fc-nav-item ${activePage === item.id ? 'active' : ''}" onclick="window.fcNavigate('${item.id}')">
              <span>${item.icon}</span> ${item.label}
            </div>
          `).join('')}
        </nav>

        <div class="fc-header-actions">
          <button class="fc-btn fc-btn-secondary fc-btn-sm" onclick="window.fcOpenAwsModal()" style="border-color: #f97316; color: #c2410c; background: #fff7ed;">
            <span>☁️</span> <span>AWS</span>
          </button>
          <button class="fc-badge-button" onclick="window.fcToggleAiAssistantDrawer()" style="background: #f0fdf4; border-color: #86efac; color: #16a34a;">🤖</button>
          <button class="fc-badge-button" onclick="window.fcToggleNotificationDrawer()">
            🔔 ${unreadCount > 0 ? `<span class="fc-notification-badge">${unreadCount}</span>` : ''}
          </button>
          ${user ? `
            <div class="fc-user-pill" onclick="window.fcNavigate('profile')">
              <div class="fc-avatar">${user.name.charAt(0)}</div>
              <div class="fc-hide-mobile-block" style="text-align: left;">
                <div style="font-size: 12px; font-weight: 700; color: #15803d; line-height: 1;">${user.name}</div>
                <div style="font-size: 10px; color: #64748b;">${user.role === 'buyer' ? '🛒 Buyer' : '👨‍🌾 Farmer'}</div>
              </div>
            </div>
          ` : `
            <button class="fc-btn fc-btn-primary fc-btn-sm" onclick="window.fcNavigate('auth')">Login</button>
          `}
        </div>
      </div>
    </header>
  `;
}

// ============================================================================
// 4. PAGE RENDERERS (ALL 11 PAGES)
// ============================================================================

// 1. DASHBOARD PAGE (RESTORED EXACT PREVIOUS DESIGN)
function renderDashboardPage() {
  const user = authService.getCurrentUser() || DEMO_FARMER_USER;
  const weather = weatherService.getWeatherForDistrict();
  const prices = marketPriceService.getPrices().slice(0, 2);

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
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 24px; background: white; border-radius: 20px; padding: 20px 24px; border: 1px solid #e2e8f0;">
        <div>
          <h1 style="font-size: 26px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 8px;">
            Good morning, ${user.name} 👋
          </h1>
          <p style="color: #64748b; font-size: 14px; margin-top: 2px;">
            📍 Location: <strong>${user.village || 'amalapuram'}, ${user.state || 'Andhra Pradesh'}</strong> • Farm: <strong>${user.farmSize || 4.5} Acres</strong> • Main Crop: <strong>${user.mainCrop || 'Paddy (BPT 5204)'}</strong>
          </p>
        </div>
        <button class="fc-btn fc-btn-secondary fc-btn-sm" onclick="window.fcNavigate('profile')">Edit Farm Profile ⚙️</button>
      </div>

      <!-- TODAY'S FARMING BRIEF -->
      <div style="background: linear-gradient(135deg, #14532d, #166534); color: white; border-radius: 20px; padding: 22px 24px; margin-bottom: 24px;">
        <div style="font-size: 12px; font-weight: 800; color: #86efac; text-transform: uppercase; margin-bottom: 12px;">
          🟢 TODAY'S FARMING BRIEF (${(user.village || 'AMALAPURAM').toUpperCase()})
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px;">
          <div style="background: rgba(255,255,255,0.1); padding: 14px; border-radius: 14px;">
            <div style="font-size: 12px; color: #bbf7d0; font-weight: 700;">🌧️ Weather Forecast</div>
            <div style="font-size: 16px; font-weight: 800; margin-top: 4px;">Rain Expected Tomorrow</div>
            <div style="font-size: 11px; color: #dcfce7;">Rain Prob: 70% • Temp: 31°C</div>
          </div>
          <div style="background: rgba(255,255,255,0.1); padding: 14px; border-radius: 14px;">
            <div style="font-size: 12px; color: #bbf7d0; font-weight: 700;">💧 Smart Irrigation</div>
            <div style="font-size: 16px; font-weight: 800; margin-top: 4px;">Delay Irrigation Today</div>
            <div style="font-size: 11px; color: #dcfce7;">Soil Moisture: 62% (Demo Sensor)</div>
          </div>
          <div style="background: rgba(255,255,255,0.1); padding: 14px; border-radius: 14px;">
            <div style="font-size: 12px; color: #bbf7d0; font-weight: 700;">💰 Mandi Price Benchmark</div>
            <div style="font-size: 16px; font-weight: 800; margin-top: 4px;">Paddy: ₹2300/qtl (+2.2%)</div>
            <div style="font-size: 11px; color: #dcfce7;">Market: Guntur Ag Market Yard</div>
          </div>
          <div style="background: rgba(255,255,255,0.1); padding: 14px; border-radius: 14px;">
            <div style="font-size: 12px; color: #bbf7d0; font-weight: 700;">🌱 Crop Advisory</div>
            <div style="font-size: 16px; font-weight: 800; margin-top: 4px;">Monitor Leaf Tip Health</div>
            <div style="font-size: 11px; color: #dcfce7;">Stage 4 (Day 35): Tillering Period</div>
          </div>
        </div>
      </div>

      <!-- SMART IRRIGATION RECOMMENDATION CARD -->
      <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 16px; padding: 18px 22px; margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 14px;">
          <div style="display: flex; gap: 14px; align-items: flex-start;">
            <div style="font-size: 32px; color: #0284c7;">💧</div>
            <div>
              <div style="font-size: 13px; font-weight: 800; color: #c2410c; text-transform: uppercase;">SMART IRRIGATION RECOMMENDATION</div>
              <h3 style="font-size: 18px; font-weight: 800; color: #b91c1c; margin: 4px 0 6px;">🚫 DO NOT IRRIGATE TODAY</h3>
              <p style="font-size: 13px; color: #9a3412; line-height: 1.5;">
                Reason: Soil moisture level is sufficient (62%) and rain is expected within the next 24 hours (70% probability). Postpone watering to prevent nitrogen leaching.
              </p>
            </div>
          </div>
          <span style="background: #ffedd5; color: #c2410c; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 12px;">Demo sensor value</span>
        </div>
      </div>

      <!-- SIDE BY SIDE GRID -->
      <div class="fc-grid-2col" style="margin-bottom: 28px;">
        <div class="fc-card" style="border-top: 4px solid #0284c7;">
          <div class="fc-card-header">
            <div class="fc-card-title"><span>🌦️</span> Weather Radar</div>
            <button class="fc-btn fc-btn-secondary fc-btn-sm" onclick="window.fcNavigate('weather')">Full Radar →</button>
          </div>
          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 16px; align-items: center; background: #f8fafc; padding: 16px; border-radius: 14px;">
            <div>
              <div style="font-size: 42px; font-weight: 800; color: #0f172a; line-height: 1;">31°C</div>
              <div style="font-size: 16px; font-weight: 700; color: #0284c7; margin-top: 4px;">Partly Cloudy</div>
            </div>
            <div style="font-size: 13px; color: #475569; display: flex; flex-direction: column; gap: 6px;">
              <div>💧 Humidity: <strong>68%</strong></div>
              <div>🌧️ Rain Prob: <strong>70%</strong></div>
              <div>💨 Wind: <strong>14 km/h</strong></div>
            </div>
          </div>
        </div>

        <div class="fc-card" style="border-top: 4px solid #16a34a;">
          <div class="fc-card-header">
            <div class="fc-card-title"><span>💰</span> Today's Mandi Benchmark</div>
            <button class="fc-btn fc-btn-secondary fc-btn-sm" onclick="window.fcNavigate('prices')">View Prices →</button>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 14px; background: #f8fafc; border-radius: 12px;">
              <div><strong style="color: #0f172a;">Paddy (BPT 5204)</strong><div style="font-size: 11px; color: #64748b;">Guntur APMC Yard</div></div>
              <div style="text-align: right;"><strong style="color: #14532d; font-size: 17px;">₹2,300/qtl</strong><div class="fc-trend fc-trend-up" style="font-size: 11px;">📈 +2.2%</div></div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 14px; background: #f8fafc; border-radius: 12px;">
              <div><strong style="color: #0f172a;">Teja Red Chilli</strong><div style="font-size: 11px; color: #64748b;">Guntur Mirchi Yard</div></div>
              <div style="text-align: right;"><strong style="color: #14532d; font-size: 17px;">₹18,500/qtl</strong><div class="fc-trend fc-trend-down" style="font-size: 11px;">📉 -3.1%</div></div>
            </div>
          </div>
        </div>
      </div>

      <!-- QUICK ACTIONS -->
      <div style="margin-bottom: 28px;">
        <h3 style="font-size: 18px; font-weight: 800; color: #14532d; margin-bottom: 14px;">⚡ Quick Actions</h3>
        <div class="fc-quick-actions">
          ${quickActions.map(qa => `
            <div class="fc-quick-btn" onclick="window.fcNavigate('${qa.id}')">
              <span class="emoji">${qa.emoji}</span><span>${qa.label}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- FARMING TIP -->
      <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #bbf7d0; border-radius: 20px; padding: 24px; display: flex; align-items: flex-start; gap: 16px;">
        <div style="width: 48px; height: 48px; background: #16a34a; color: white; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;">💡</div>
        <div style="flex: 1;">
          <div style="font-size: 12px; font-weight: 800; color: #166534; text-transform: uppercase;">Today's Farming Tip</div>
          <h4 style="font-size: 17px; font-weight: 700; color: #14532d; margin: 4px 0 6px;">Rain is expected in your region tomorrow.</h4>
          <p style="font-size: 14px; color: #166534; line-height: 1.5;">Avoid unnecessary irrigation today to preserve soil nutrients. Check field drainage channels around standing crops.</p>
        </div>
        <button class="fc-btn fc-btn-secondary fc-btn-sm" style="background: white;" onclick="window.fcToggleAiAssistantDrawer()">Ask AI Assistant 🤖</button>
      </div>
    </div>
  `;
}

// 2. WEATHER PAGE
function renderWeatherPage() {
  const districtId = weatherService.getCurrentDistrictId();
  const weather = weatherService.getWeatherForDistrict(districtId);
  const districts = weatherService.getDistricts();

  return `
    <div class="fc-weather-page">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 24px;">
        <div>
          <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">🌦️ Weather Dashboard</h1>
          <p style="color: #64748b; font-size: 14px;">Hyper-local agricultural weather advisory and rainfall predictions.</p>
        </div>
        <div style="background: white; border: 1px solid #cbd5e1; padding: 8px 16px; border-radius: 14px; display: flex; align-items: center; gap: 10px;">
          <span>📍</span>
          <div>
            <div style="font-size: 10px; font-weight: 700; color: #64748b;">SELECT DISTRICT</div>
            <select onchange="window.fcChangeDistrict(this.value)" style="background: transparent; border: none; font-weight: 800; font-size: 15px; color: #0284c7; outline: none; cursor: pointer;">
              ${districts.map(d => `<option value="${d.id}" ${d.id === districtId ? 'selected' : ''}>${d.name}, ${d.state}</option>`).join('')}
            </select>
          </div>
        </div>
      </div>

      <div style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: white; border-radius: 24px; padding: 32px; margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
          <div>
            <div style="font-size: 14px; font-weight: 700; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; display: inline-block;">📍 ${weather.district}, ${weather.state}</div>
            <div style="font-size: 56px; font-weight: 800; margin-top: 10px;">${weather.temp}°C</div>
            <div style="font-size: 22px; font-weight: 700; color: #e0f2fe;">${weather.condition}</div>
            <p style="font-size: 14px; margin-top: 8px;">Rain Probability: <strong>${weather.rainProbability}%</strong> • Humidity: <strong>${weather.humidity}%</strong></p>
          </div>
          <div style="background: rgba(255,255,255,0.15); padding: 20px; border-radius: 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div><div style="font-size: 11px; opacity: 0.8;">WIND SPEED</div><div style="font-size: 18px; font-weight: 800;">💨 ${weather.windSpeed} km/h</div></div>
            <div><div style="font-size: 11px; opacity: 0.8;">UV INDEX</div><div style="font-size: 18px; font-weight: 800;">☀️ ${weather.uvIndex}</div></div>
            <div><div style="font-size: 11px; opacity: 0.8;">SOIL MOISTURE</div><div style="font-size: 18px; font-weight: 800;">🌱 ${weather.soilMoisture}</div></div>
            <div><div style="font-size: 11px; opacity: 0.8;">SUNRISE/SUNSET</div><div style="font-size: 14px; font-weight: 800;">🌅 ${weather.sunrise} / ${weather.sunset}</div></div>
          </div>
        </div>
      </div>

      <!-- HOURLY FORECAST -->
      <div class="fc-card" style="margin-bottom: 28px;">
        <h3 style="font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 14px;">⏰ Today's Hourly Forecast</h3>
        <div style="display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px;">
          ${weather.hourly.map(h => `
            <div style="min-width: 100px; text-align: center; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 12px 8px;">
              <div style="font-size: 12px; font-weight: 700; color: #64748b;">${h.time}</div>
              <div style="font-size: 24px; margin: 4px 0;">${h.icon === 'rain' ? '🌧️' : '⛅'}</div>
              <div style="font-size: 16px; font-weight: 800; color: #0f172a;">${h.temp}°C</div>
              <div style="font-size: 11px; color: #0284c7; font-weight: 700;">💧 ${h.rain}%</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 7-DAY FORECAST -->
      <div class="fc-card">
        <h3 style="font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 14px;">📅 7-Day Agricultural Forecast</h3>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${weather.forecast.map(f => `
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; align-items: center; gap: 12px; padding: 12px 16px; background: #f8fafc; border-radius: 12px;">
              <strong style="color: #0f172a;">${f.day}</strong>
              <div style="font-size: 14px; color: #475569;">${f.condition}</div>
              <div style="font-size: 13px; color: #0284c7; font-weight: 700;">💧 Rain: ${f.rain}%</div>
              <div style="text-align: right; font-weight: 800; color: #14532d;">${f.tempHigh}° / ${f.tempLow}°C</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// 3. MARKET PRICES PAGE
let pricesSelectedCropId = 'paddy';
let pricesSearchQuery = '';
let pricesShowSuggestions = false;

function renderPricesPage() {
  const crop = marketPriceService.getCropById(pricesSelectedCropId);
  const prediction = PricePredictionService.predict7DayPrice(crop);
  const searchResults = pricesSearchQuery ? marketPriceService.searchCrops(pricesSearchQuery) : [];

  const history = crop.history7Days || [2210, 2225, 2240, 2260, 2275, 2250, 2300];
  const forecast = prediction ? prediction.forecastDaily : [2310, 2330, 2350, 2370, 2390, 2400, 2410];
  const allValues = [...history, ...forecast];
  const minVal = Math.min(...allValues) * 0.97;
  const maxVal = Math.max(...allValues) * 1.03;
  const range = maxVal - minVal || 1;

  const historyPoints = history.map((val, idx) => {
    const x = (idx / 6) * 220 + 20;
    const y = 140 - ((val - minVal) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  const forecastPoints = forecast.map((val, idx) => {
    const x = (idx / 6) * 200 + 240;
    const y = 140 - ((val - minVal) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  const lastHistX = 240;
  const lastHistY = 140 - ((history[history.length - 1] - minVal) / range) * 100;
  const combinedForecastPoints = `${lastHistX},${lastHistY} ${forecastPoints}`;

  return `
    <div class="fc-prices-page">
      <div style="margin-bottom: 20px;">
        <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">
          💰 Regional Crop Market Intelligence
        </h1>
        <p style="color: #64748b; font-size: 14px;">
          Live APMC Mandi benchmarks, 7-day historical trends, multi-market comparison, and AI price forecasts.
        </p>
      </div>

      <!-- SEARCH BAR -->
      <div class="fc-card" style="margin-bottom: 24px; padding: 20px; position: relative; border-top: 4px solid #16a34a;">
        <label class="fc-label" style="font-size: 14px; margin-bottom: 8px;">🔍 Search Agricultural Produce</label>
        <div style="position: relative; display: flex; align-items: center;">
          <span style="position: absolute; left: 16px; font-size: 18px; color: #64748b;">🔍</span>
          <input 
            type="text" 
            class="fc-input" 
            placeholder="Search for a crop... e.g. Paddy, Chilli, Cotton, Maize, Turmeric" 
            value="${pricesSearchQuery}"
            oninput="window.fcHandlePricesSearch(this.value)"
            style="padding-left: 48px; padding-right: 40px; font-size: 16px; font-weight: 600; height: 50px; border-radius: 12px;"
            autocomplete="off"
          />
          ${pricesSearchQuery ? `
            <button onclick="window.fcClearPricesSearch()" style="position: absolute; right: 14px; background: #e2e8f0; border: none; width: 24px; height: 24px; border-radius: 50%; cursor: pointer; font-weight: 700;">✕</button>
          ` : ''}
        </div>

        ${(pricesShowSuggestions && searchResults.length > 0) ? `
          <div style="position: absolute; top: 85px; left: 20px; right: 20px; background: white; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 15px 30px rgba(0,0,0,0.15); z-index: 80; max-height: 280px; overflow-y: auto;">
            ${searchResults.map(c => `
              <div style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; cursor: pointer;" onclick="window.fcSelectCropFromSearch('${c.id}')">
                <div><span style="font-size: 16px; margin-right: 8px;">${c.icon}</span><strong style="color: #0f172a;">${c.name}</strong></div>
                <div><strong style="color: #15803d;">₹${c.currentPrice.toLocaleString('en-IN')}/${c.unit}</strong></div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div style="margin-top: 14px; display: flex; gap: 8px; overflow-x: auto;">
          <span style="font-size: 12px; font-weight: 700; color: #64748b; align-self: center;">Quick Select:</span>
          ${CROP_QUICK_SEARCH_CHIPS.map(chip => `
            <button class="fc-btn fc-btn-secondary fc-btn-sm" style="white-space: nowrap; font-size: 12px; border-radius: 20px; background: ${crop.id === chip.id ? '#f0fdf4' : 'white'}; border-color: ${crop.id === chip.id ? '#86efac' : '#cbd5e1'}; color: ${crop.id === chip.id ? '#15803d' : '#334155'}; font-weight: 700;" onclick="window.fcSelectCropFromSearch('${chip.id}')">
              <span>${chip.icon}</span> ${chip.name}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- CROP HEADER -->
      <div id="crop-analysis-target" class="fc-card" style="margin-bottom: 24px; background: linear-gradient(135deg, #14532d, #166534); color: white; border-radius: 20px;">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div>
            <div style="font-size: 13px; font-weight: 800; color: #86efac; text-transform: uppercase;">${crop.category} • Mandi Intelligence</div>
            <h1 style="font-size: 32px; font-weight: 800; color: white; margin: 4px 0;">${crop.icon} ${crop.name}</h1>
            <div style="font-size: 13px; color: #dcfce7;">📍 Guntur Agriculture Market Yard (Guntur, AP)</div>
          </div>
          <div style="text-align: right; background: rgba(255,255,255,0.12); padding: 16px 24px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.2);">
            <div style="font-size: 11px; text-transform: uppercase; color: #bbf7d0; font-weight: 700;">Current Market Price</div>
            <div style="font-size: 36px; font-weight: 800; color: white;">₹${crop.currentPrice.toLocaleString('en-IN')} <span style="font-size: 14px;">/ ${crop.unit}</span></div>
          </div>
        </div>
      </div>

      <!-- COMBINED HISTORICAL & FORECAST SVG CHART -->
      <div class="fc-card" style="margin-bottom: 24px; border-top: 4px solid #16a34a;">
        <div class="fc-card-header">
          <h3 style="font-size: 18px; font-weight: 800; color: #0f172a;">📈 7-Day Price History + AI 7-Day Forecast Chart</h3>
          <div style="display: flex; gap: 16px; font-size: 12px; font-weight: 700;">
            <span style="color: #16a34a;">● Historical Price</span>
            <span style="color: #ea580c;">○ 7-Day AI Forecast</span>
          </div>
        </div>
        <div style="background: #f8fafc; border-radius: 16px; padding: 20px; text-align: center;">
          <svg viewBox="0 0 460 170" style="width: 100%; max-width: 680px; height: 170px;">
            <polyline fill="none" stroke="#16a34a" stroke-width="3" points="${historyPoints}" />
            <polyline fill="none" stroke="#ea580c" stroke-width="3" stroke-dasharray="5 4" points="${combinedForecastPoints}" />
            ${history.map((val, idx) => {
              const x = (idx / 6) * 220 + 20;
              const y = 140 - ((val - minVal) / range) * 100;
              return `<circle cx="${x}" cy="${y}" r="4" fill="#16a34a" /><text x="${x}" y="${y - 8}" font-size="9" fill="#334155" text-anchor="middle">₹${val}</text>`;
            }).join('')}
            ${forecast.map((val, idx) => {
              const x = (idx / 6) * 200 + 240;
              const y = 140 - ((val - minVal) / range) * 100;
              return `<circle cx="${x}" cy="${y}" r="4" fill="#ffffff" stroke="#ea580c" stroke-width="2" /><text x="${x}" y="${y - 8}" font-size="9" fill="#c2410c" text-anchor="middle">₹${val}</text>`;
            }).join('')}
          </svg>
        </div>
      </div>
    </div>
  `;
}

// 4. CROP ADVISOR PAGE
function renderCropRecommendationPage() {
  const recommendations = RecommendationEngine.getRecommendations({});

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

      <div class="fc-grid-2col" style="margin-bottom: 28px;">
        <div class="fc-card" style="border-top: 4px solid #16a34a;">
          <h3 style="font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">⚙️ Farm Questionnaire</h3>
          <form onsubmit="event.preventDefault(); window.fcSubmitCropRecommendation();">
            <div class="fc-form-group">
              <label class="fc-label">📍 Target District</label>
              <select id="rec-district" class="fc-select">
                ${INDIAN_DISTRICTS.map(d => `<option value="${d.name}">${d.name}, ${d.state}</option>`).join('')}
              </select>
            </div>
            <div class="fc-form-group">
              <label class="fc-label">📅 Sowing Season</label>
              <select id="rec-season" class="fc-select">
                <option value="kharif">Kharif (Monsoon Season)</option>
                <option value="rabi">Rabi (Winter Season)</option>
                <option value="zaid">Zaid (Summer Season)</option>
              </select>
            </div>
            <div class="fc-form-group">
              <label class="fc-label">🪴 Soil Type</label>
              <select id="rec-soil" class="fc-select">
                <option value="black">Black Cotton Soil</option>
                <option value="red">Red Soil</option>
                <option value="alluvial">Alluvial Soil</option>
              </select>
            </div>
            <div class="fc-form-group">
              <label class="fc-label">📐 Land Area (Acres)</label>
              <input type="number" step="0.5" id="rec-farmsize" class="fc-input" value="4.5" required />
            </div>
            <button type="submit" class="fc-btn fc-btn-primary" style="width: 100%;">Get Smart Recommendations 🚀</button>
          </form>
        </div>

        <div>
          <div style="background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 24px;">
            <h3 style="font-size: 20px; font-weight: 800; color: #14532d; margin-bottom: 14px;">Top Recommended Crops</h3>
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${recommendations.map((c, i) => `
                <div style="border: 1px solid #e2e8f0; background: ${i === 0 ? '#f0fdf4' : 'white'}; border-radius: 14px; padding: 16px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                      <span style="font-size: 11px; font-weight: 800; color: #15803d; background: rgba(22,163,74,0.15); padding: 2px 8px; border-radius: 6px;">RANK #${i+1}</span>
                      <h4 style="font-size: 18px; font-weight: 800; color: #0f172a; margin-top: 4px;">${c.name}</h4>
                    </div>
                    <strong style="color: #16a34a; font-size: 14px;">${c.matchScore}% Suitability</strong>
                  </div>
                  <p style="font-size: 13px; color: #475569; margin: 8px 0;">💡 ${c.farmingTips}</p>
                  <button class="fc-btn fc-btn-secondary fc-btn-sm" onclick="window.fcNavigate('calculator')">Calculate Profit 🧮</button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 5. CALCULATOR PAGE
function renderCalculatorPage() {
  const farmSize = 4.5;
  const yieldPerAcre = 22;
  const pricePerQtl = 2300;
  const costPerAcre = 4500 + 8500 + 4200 + 12000 + 3500 + 6000 + 2500; // ₹41,200

  const totalInvestment = costPerAcre * farmSize; // ₹1,85,400
  const expectedRevenue = yieldPerAcre * pricePerQtl * farmSize; // ₹2,27,700
  const estimatedProfit = expectedRevenue - totalInvestment; // ₹42,300
  const roiPct = ((estimatedProfit / totalInvestment) * 100).toFixed(1);

  return `
    <div class="fc-calculator-page">
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">
          🧮 Farm Cost & Profit Calculator
        </h1>
        <p style="color: #64748b; font-size: 14px;">Plan your farm economics, estimate input expenses, and calculate total net profit.</p>
      </div>

      <div class="fc-grid-2col" style="margin-bottom: 28px;">
        <div class="fc-card" style="border-top: 4px solid #9333ea;">
          <h3 style="font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">📝 Input Expenses (per Acre)</h3>
          <form onsubmit="event.preventDefault(); window.fcRecalculateFarmProfit();">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div class="fc-form-group"><label class="fc-label">Land Area (Acres)</label><input type="number" id="calc-farmsize" class="fc-input" value="${farmSize}" oninput="window.fcRecalculateFarmProfit()" /></div>
              <div class="fc-form-group"><label class="fc-label">Yield (Qtl/Acre)</label><input type="number" id="calc-yield" class="fc-input" value="${yieldPerAcre}" oninput="window.fcRecalculateFarmProfit()" /></div>
            </div>
            <div class="fc-form-group"><label class="fc-label">Selling Price (₹/Qtl)</label><input type="number" id="calc-price" class="fc-input" value="${pricePerQtl}" oninput="window.fcRecalculateFarmProfit()" /></div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
              <div class="fc-form-group"><label class="fc-label">Seed Cost</label><input type="number" id="calc-seed" class="fc-input" value="4500" oninput="window.fcRecalculateFarmProfit()" /></div>
              <div class="fc-form-group"><label class="fc-label">Fertilizer Cost</label><input type="number" id="calc-fert" class="fc-input" value="8500" oninput="window.fcRecalculateFarmProfit()" /></div>
              <div class="fc-form-group"><label class="fc-label">Labour Cost</label><input type="number" id="calc-labour" class="fc-input" value="12000" oninput="window.fcRecalculateFarmProfit()" /></div>
              <div class="fc-form-group"><label class="fc-label">Pesticide Cost</label><input type="number" id="calc-pest" class="fc-input" value="4200" oninput="window.fcRecalculateFarmProfit()" /></div>
            </div>
          </form>
        </div>

        <div style="background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 24px;">
          <h3 style="font-size: 20px; font-weight: 800; color: #14532d; margin-bottom: 16px;">Financial Return Summary</h3>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div style="background: #f8fafc; padding: 16px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
              <div><div style="font-size: 11px; font-weight: 700; color: #64748b;">TOTAL INVESTMENT</div></div>
              <div id="calc-res-invest" style="font-size: 20px; font-weight: 800; color: #dc2626;">₹${totalInvestment.toLocaleString('en-IN')}</div>
            </div>
            <div style="background: #f8fafc; padding: 16px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
              <div><div style="font-size: 11px; font-weight: 700; color: #64748b;">EXPECTED REVENUE</div></div>
              <div id="calc-res-revenue" style="font-size: 20px; font-weight: 800; color: #0284c7;">₹${expectedRevenue.toLocaleString('en-IN')}</div>
            </div>
            <div style="background: #f0fdf4; border: 2px solid #86efac; padding: 20px; border-radius: 16px; display: flex; justify-content: space-between; align-items: center;">
              <div><div style="font-size: 12px; font-weight: 800; color: #166534;">ESTIMATED NET PROFIT</div><div id="calc-res-roi" style="font-size: 12px; color: #15803d;">ROI: +${roiPct}% Return</div></div>
              <div id="calc-res-profit" style="font-size: 26px; font-weight: 800; color: #15803d;">₹${estimatedProfit.toLocaleString('en-IN')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 6. MARKETPLACE PAGE
let currentMarketTab = 'buy';
let marketFilters = {};
let marketplaceUiState = { selectedListingModal: null, offerModal: null };

function renderMarketplacePage() {
  const user = authService.getCurrentUser() || DEMO_FARMER_USER;
  const isFarmer = user.role !== 'buyer';

  const buyListings = marketplaceService.getListings(marketFilters);
  const myListings = marketplaceService.getListings({ userId: user.userId, showAllStatus: true });
  const offers = isFarmer ? marketplaceService.getOffersForFarmer(user.userId) : marketplaceService.getOffersByBuyer(user.userId);

  return `
    <div class="fc-marketplace-page">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 24px; background: white; border-radius: 20px; padding: 20px 24px; border: 1px solid #e2e8f0;">
        <div>
          <h1 style="font-size: 28px; font-weight: 800; color: #14532d;">🌾 Farmer Produce Marketplace</h1>
          <p style="color: #64748b; font-size: 14px;">Sell directly to verified wholesale buyers, millers, and exporters.</p>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="fc-btn ${currentMarketTab === 'sell' ? 'fc-btn-primary' : 'fc-btn-secondary'}" onclick="window.fcSelectMarketTab('sell')">🌾 Sell My Crops</button>
          <button class="fc-btn ${currentMarketTab === 'buy' ? 'fc-btn-primary' : 'fc-btn-secondary'}" onclick="window.fcSelectMarketTab('buy')">🛒 Buy Crops</button>
        </div>
      </div>

      <div style="display: flex; gap: 8px; border-bottom: 2px solid #e2e8f0; margin-bottom: 24px;">
        <button class="fc-tab-btn ${currentMarketTab === 'buy' ? 'active' : ''}" onclick="window.fcSelectMarketTab('buy')" style="padding: 10px 18px; border: none; background: transparent; font-size: 15px; font-weight: 700; color: ${currentMarketTab === 'buy' ? '#16a34a' : '#64748b'}; border-bottom: 3px solid ${currentMarketTab === 'buy' ? '#16a34a' : 'transparent'}; cursor: pointer;">🛒 Browse Listings (${buyListings.length})</button>
        <button class="fc-tab-btn ${currentMarketTab === 'sell' ? 'active' : ''}" onclick="window.fcSelectMarketTab('sell')" style="padding: 10px 18px; border: none; background: transparent; font-size: 15px; font-weight: 700; color: ${currentMarketTab === 'sell' ? '#16a34a' : '#64748b'}; border-bottom: 3px solid ${currentMarketTab === 'sell' ? '#16a34a' : 'transparent'}; cursor: pointer;">➕ Sell My Crop</button>
        <button class="fc-tab-btn ${currentMarketTab === 'mylistings' ? 'active' : ''}" onclick="window.fcSelectMarketTab('mylistings')" style="padding: 10px 18px; border: none; background: transparent; font-size: 15px; font-weight: 700; color: ${currentMarketTab === 'mylistings' ? '#16a34a' : '#64748b'}; border-bottom: 3px solid ${currentMarketTab === 'mylistings' ? '#16a34a' : 'transparent'}; cursor: pointer;">📋 My Listings (${myListings.length})</button>
        <button class="fc-tab-btn ${currentMarketTab === 'offers' ? 'active' : ''}" onclick="window.fcSelectMarketTab('offers')" style="padding: 10px 18px; border: none; background: transparent; font-size: 15px; font-weight: 700; color: ${currentMarketTab === 'offers' ? '#16a34a' : '#64748b'}; border-bottom: 3px solid ${currentMarketTab === 'offers' ? '#16a34a' : 'transparent'}; cursor: pointer;">💬 ${isFarmer ? 'Incoming Offers' : 'My Offers'} (${offers.length})</button>
      </div>

      ${currentMarketTab === 'buy' ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); gap: 24px;">
          ${buyListings.map(l => `
            <div class="fc-card" style="padding: 0; overflow: hidden; border-top: 4px solid #16a34a;">
              <img src="${l.imageUrl}" alt="${l.cropName}" style="width: 100%; height: 160px; object-fit: cover;" />
              <div style="padding: 18px;">
                <h3 style="font-size: 18px; font-weight: 800; color: #0f172a;">${l.cropName}</h3>
                <div style="font-size: 18px; font-weight: 800; color: #16a34a; margin-top: 4px;">₹${l.expectedPrice.toLocaleString('en-IN')}<span style="font-size: 11px; color: #64748b;">/${l.unit}</span></div>
                <div style="background: #f8fafc; padding: 10px; border-radius: 10px; margin: 10px 0; font-size: 13px;">
                  <div>Quantity: <strong>${l.quantity} ${l.unit}s</strong></div>
                  <div>Estimated Total: <strong style="color: #14532d;">₹${(l.quantity * l.expectedPrice).toLocaleString('en-IN')}</strong></div>
                </div>
                <div style="display: flex; gap: 8px;">
                  <button class="fc-btn fc-btn-secondary fc-btn-sm" style="flex: 1;" onclick="window.fcOpenListingDetailsModal('${l.id}')">View Details ➔</button>
                  <button class="fc-btn fc-btn-primary fc-btn-sm" style="flex: 1;" onclick="window.fcOpenOfferModal('${l.id}')">Make Offer 💬</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${currentMarketTab === 'sell' ? `
        <div class="fc-card" style="max-width: 800px; margin: 0 auto 32px; padding: 28px; border-top: 6px solid #16a34a;">
          <h2 style="font-size: 24px; font-weight: 800; color: #14532d; margin-bottom: 16px;">🌾 Create Crop Listing</h2>
          <form onsubmit="event.preventDefault(); window.fcSubmitCropListingForm();">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
              <div class="fc-form-group">
                <label class="fc-label">Crop / Product</label>
                <select id="sell-crop-id" class="fc-select">
                  ${ALL_AGRICULTURAL_CROPS.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('')}
                </select>
              </div>
              <div class="fc-form-group">
                <label class="fc-label">Quantity</label>
                <input type="number" id="sell-quantity" class="fc-input" value="10" required oninput="window.fcCalculateTotalValue()" />
              </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
              <div class="fc-form-group">
                <label class="fc-label">Expected Price (₹/Unit)</label>
                <input type="number" id="sell-expected-price" class="fc-input" value="2400" required oninput="window.fcCalculateTotalValue()" />
              </div>
              <div class="fc-form-group">
                <label class="fc-label">Unit</label>
                <select id="sell-unit" class="fc-select" onchange="window.fcCalculateTotalValue()">
                  <option value="Quintal" selected>Quintal</option>
                  <option value="Kg">Kg</option>
                  <option value="Ton">Ton</option>
                </select>
              </div>
            </div>
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
              <div style="font-size: 11px; font-weight: 800; color: #166534;">ESTIMATED TOTAL VALUE</div>
              <div id="sell-total-value-display" style="font-size: 24px; font-weight: 800; color: #14532d;">₹24,000</div>
            </div>
            <button type="submit" class="fc-btn fc-btn-primary" style="width: 100%;">🚀 Publish Listing Now</button>
          </form>
        </div>
      ` : ''}

      ${currentMarketTab === 'mylistings' ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
          ${myListings.map(l => `
            <div class="fc-card">
              <h3 style="font-size: 18px; font-weight: 800; color: #0f172a;">${l.cropName}</h3>
              <div style="font-size: 13px; color: #64748b; margin: 8px 0;">Quantity: <strong>${l.quantity} ${l.unit}s</strong> • Price: <strong>₹${l.expectedPrice}/${l.unit}</strong></div>
              <div style="display: flex; gap: 8px; margin-top: 10px;">
                ${l.status === 'active' ? `<button class="fc-btn fc-btn-primary fc-btn-sm" style="flex: 1; background: #dc2626;" onclick="window.fcMarkListingSoldAction('${l.id}')">Mark Sold 🔴</button>` : ''}
                <button class="fc-btn fc-btn-secondary fc-btn-sm" style="color: #dc2626;" onclick="window.fcDeleteListingAction('${l.id}')">Delete 🗑️</button>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${currentMarketTab === 'offers' ? `
        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${offers.map(o => `
            <div class="fc-card" style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <h3 style="font-size: 17px; font-weight: 800; color: #0f172a;">${o.cropName}</h3>
                <div style="font-size: 13px; color: #475569;">Buyer: <strong>${o.buyerName}</strong> (${o.buyerPhone})</div>
                <div style="font-size: 13px; color: #15803d; font-weight: 700;">Offer: ₹${o.offerPrice}/${o.unit}</div>
              </div>
              ${isFarmer && o.status === 'pending' ? `
                <div style="display: flex; gap: 8px;">
                  <button class="fc-btn fc-btn-primary fc-btn-sm" onclick="window.fcRespondOfferAction('${o.id}', 'accepted')">✓ Accept</button>
                  <button class="fc-btn fc-btn-secondary fc-btn-sm" style="color: #dc2626;" onclick="window.fcRespondOfferAction('${o.id}', 'rejected')">✕ Reject</button>
                </div>
              ` : `<span style="font-size: 12px; font-weight: 800; color: #15803d;">${o.status.toUpperCase()}</span>`}
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

// 7. CROP DOCTOR PAGE
function renderCropDoctorPage(selectedImage = null, diagnosticResult = null) {
  return `
    <div class="fc-doctor-page" style="max-width: 780px; margin: 0 auto;">
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">🩺 AI Crop Doctor</h1>
        <p style="color: #64748b; font-size: 14px;">Upload crop leaf photo for instant computer-vision diagnostic and treatment advice.</p>
      </div>

      <div class="fc-card" style="padding: 28px; margin-bottom: 24px; text-align: center;">
        <div style="border: 2px dashed #cbd5e1; border-radius: 16px; padding: 28px; background: #f8fafc;">
          <div style="font-size: 40px; margin-bottom: 10px;">📷</div>
          <h3 style="font-size: 17px; font-weight: 800; color: #0f172a;">Upload Crop Leaf Photo</h3>
          <p style="font-size: 13px; color: #64748b; margin-top: 4px;">Select a clear photo of infected crop leaf or stem</p>
          <input type="file" id="doctor-file-input" accept="image/*" class="fc-input" style="max-width: 320px; margin: 16px auto 0; padding: 8px;" onchange="window.fcHandleDoctorImageUpload(this)" />
        </div>

        <div id="doctor-preview-container" style="display: ${selectedImage ? 'block' : 'none'}; margin-top: 20px;">
          <img id="doctor-preview-img" src="${selectedImage || ''}" style="max-height: 200px; border-radius: 12px; object-fit: cover;" />
        </div>

        <button class="fc-btn fc-btn-primary" style="margin-top: 20px; font-size: 16px; padding: 12px 28px;" onclick="window.fcAnalyzeCropDisease()">
          Analyze Crop Health 🔍
        </button>
      </div>

      <div id="doctor-result-container" style="display: ${diagnosticResult ? 'block' : 'none'};">
        ${diagnosticResult ? `
          <div class="fc-card" style="border-top: 6px solid #dc2626;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h2 style="font-size: 20px; font-weight: 800; color: #b91c1c;">${diagnosticResult.diseaseName}</h2>
              <span style="background: #fef2f2; color: #b91c1c; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 12px;">${diagnosticResult.confidenceScore}% Confidence</span>
            </div>
            <p style="font-size: 13px; color: #475569; margin-bottom: 14px;"><strong>Observed Symptoms:</strong> ${diagnosticResult.symptoms}</p>
            <div style="background: #f0fdf4; border: 1px solid #86efac; padding: 16px; border-radius: 12px;">
              <h4 style="font-size: 15px; font-weight: 800; color: #14532d; margin-bottom: 8px;">Actionable Treatment Plan:</h4>
              <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #166534;">
                ${diagnosticResult.treatmentPlan.map(t => `<li style="margin-bottom: 6px;">${t}</li>`).join('')}
              </ul>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// 8. FARM PLAN PAGE
function renderFarmPlanPage() {
  const plan = FarmingPlanService.getPlanForCrop('paddy');

  return `
    <div class="fc-farmplan-page" style="max-width: 800px; margin: 0 auto;">
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">📑 My Farm Calendar & Stage Plan</h1>
        <p style="color: #64748b; font-size: 14px;">Interactive stage-by-stage crop cultivation schedule and task checklist.</p>
      </div>

      <div class="fc-card" style="margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div><h3 style="font-size: 18px; font-weight: 800; color: #0f172a;">Crop: Paddy (BPT 5204)</h3><div style="font-size: 12px; color: #64748b;">Season: Kharif 2026 • Duration: 135 Days</div></div>
          <span style="font-size: 12px; font-weight: 800; background: #f0fdf4; color: #16a34a; padding: 6px 14px; border-radius: 20px;">Stage 3 Active</span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        ${plan.map(t => `
          <div class="fc-card" style="display: flex; align-items: flex-start; gap: 16px; border-left: 6px solid ${t.status === 'completed' ? '#16a34a' : '#cbd5e1'};">
            <button class="fc-btn fc-btn-secondary fc-btn-sm" style="font-size: 18px; padding: 4px 10px; border-color: ${t.status === 'completed' ? '#86efac' : '#cbd5e1'};" onclick="window.fcToggleFarmTask('${t.id}')">
              ${t.status === 'completed' ? '✓' : '○'}
            </button>
            <div style="flex: 1;">
              <div style="display: flex; justify-content: space-between;">
                <h3 style="font-size: 16px; font-weight: 800; color: #0f172a; ${t.status === 'completed' ? 'text-decoration: line-through; opacity: 0.7;' : ''}">${t.stage}</h3>
                <span style="font-size: 11px; font-weight: 700; color: #0284c7;">${t.days}</span>
              </div>
              <p style="font-size: 13px; color: #475569; margin-top: 4px; ${t.status === 'completed' ? 'opacity: 0.7;' : ''}">${t.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 9. SCHEMES PAGE
function renderSchemesPage() {
  return `
    <div class="fc-schemes-page">
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">🏛️ Government Agriculture Schemes</h1>
        <p style="color: #64748b; font-size: 14px;">Official central and state financial assistance, subsidies, and crop insurance guides.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;">
        ${GOVT_SCHEMES_LIST.map(s => `
          <div class="fc-card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid #16a34a;">
            <div>
              <span style="font-size: 11px; font-weight: 800; color: #16a34a; background: #f0fdf4; padding: 2px 8px; border-radius: 6px;">${s.category}</span>
              <h3 style="font-size: 18px; font-weight: 800; color: #0f172a; margin: 8px 0 4px;">${s.title}</h3>
              <div style="font-size: 15px; font-weight: 800; color: #15803d; margin-bottom: 10px;">Benefit: ${s.benefitAmount}</div>
              <p style="font-size: 13px; color: #475569; line-height: 1.45;">${s.description}</p>
            </div>
            <div style="margin-top: 16px; border-top: 1px solid #f1f5f9; padding-top: 12px; display: flex; gap: 8px;">
              <button class="fc-btn fc-btn-secondary fc-btn-sm" style="flex: 1;" onclick="window.fcOpenSchemeModal('${s.id}')">Learn More 📄</button>
              <a href="${s.officialPortalUrl}" target="_blank" class="fc-btn fc-btn-primary fc-btn-sm" style="flex: 1; text-align: center; text-decoration: none;">Official Portal 🌐</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 10. SERVICES PAGE
function renderServicesPage() {
  return `
    <div class="fc-services-page">
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">📍 Nearby Agricultural Services</h1>
        <p style="color: #64748b; font-size: 14px;">Locate trusted local agro-service providers, equipment rentals, and government centers.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;">
        ${MOCK_SERVICES.map(s => `
          <div class="fc-card">
            <h3 style="font-size: 17px; font-weight: 800; color: #0f172a;">${s.categoryIcon} ${s.name}</h3>
            <div style="font-size: 12px; font-weight: 700; color: #16a34a; margin-top: 2px;">${s.category} • ⭐ ${s.rating} • ${s.distanceKm} km away</div>
            <div style="font-size: 13px; color: #475569; margin: 8px 0;">📍 ${s.address}</div>
            <div style="display: flex; gap: 8px; margin-top: 12px;">
              <a href="tel:${s.phone}" class="fc-btn fc-btn-secondary fc-btn-sm" style="flex: 1; text-align: center; text-decoration: none;">📞 Call (${s.phone})</a>
              <button class="fc-btn fc-btn-primary fc-btn-sm" style="flex: 1;" onclick="alert('Opening Google Maps Directions to ${s.name}...');">🗺️ Directions</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 11. PROFILE PAGE
function renderProfilePage() {
  const user = authService.getCurrentUser() || DEMO_FARMER_USER;

  return `
    <div class="fc-profile-page" style="max-width: 780px; margin: 0 auto;">
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">👨‍🌾 Profile & Settings</h1>
        <p style="color: #64748b; font-size: 14px;">Manage your personal details, location preferences, and account status.</p>
      </div>

      <div style="background: linear-gradient(135deg, #15803d, #14532d); color: white; border-radius: 20px; padding: 24px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div style="width: 56px; height: 56px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 26px; font-weight: 800;">${user.name.charAt(0)}</div>
          <div>
            <h2 style="font-size: 22px; font-weight: 800; color: white;">${user.name}</h2>
            <div style="font-size: 13px; color: #bbf7d0;">📍 ${user.village}, ${user.district}, ${user.state}</div>
          </div>
        </div>
        <button class="fc-btn fc-btn-secondary fc-btn-sm" style="background: white;" onclick="window.fcLogout()">Logout 🚪</button>
      </div>

      <div class="fc-card">
        <h3 style="font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">📝 Edit Profile Details</h3>
        <form onsubmit="event.preventDefault(); window.fcSubmitProfileUpdate();">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
            <div class="fc-form-group"><label class="fc-label">Full Name</label><input type="text" id="prof-name" class="fc-input" value="${user.name}" required /></div>
            <div class="fc-form-group"><label class="fc-label">Phone Number</label><input type="tel" id="prof-phone" class="fc-input" value="${user.phone}" required /></div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
            <div class="fc-form-group"><label class="fc-label">Village / Mandal</label><input type="text" id="prof-village" class="fc-input" value="${user.village}" required /></div>
            <div class="fc-form-group"><label class="fc-label">Farm Size (Acres)</label><input type="number" step="0.5" id="prof-farm" class="fc-input" value="${user.farmSize}" required /></div>
          </div>
          <button type="submit" class="fc-btn fc-btn-primary">Update Profile Information 💾</button>
        </form>
      </div>
    </div>
  `;
}

// 12. AUTH PAGE
function renderAuthPage() {
  return `
    <div style="max-width: 480px; margin: 20px auto;">
      <div class="fc-card" style="padding: 28px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2 style="font-size: 24px; font-weight: 800; color: #14532d;">Login to Farmer Connect</h2>
          <p style="font-size: 13px; color: #64748b; margin-top: 4px;">Select role and enter your credentials</p>
        </div>

        <form onsubmit="event.preventDefault(); window.fcSubmitLogin();">
          <div class="fc-form-group" style="margin-bottom: 14px;">
            <label class="fc-label">Select Account Role</label>
            <select id="auth-role" class="fc-select">
              <option value="farmer" selected>👨‍🌾 Farmer</option>
              <option value="buyer">🛒 Wholesale Buyer / Trader</option>
            </select>
          </div>
          <div class="fc-form-group" style="margin-bottom: 14px;">
            <label class="fc-label">Email or Phone</label>
            <input type="text" id="auth-identifier" class="fc-input" value="farmer@farmerconnect.demo" required />
          </div>
          <div class="fc-form-group" style="margin-bottom: 16px;">
            <label class="fc-label">Password</label>
            <input type="password" id="auth-password" class="fc-input" value="Farmer@123" required />
          </div>
          <button type="submit" class="fc-btn fc-btn-primary" style="width: 100%;">Login ➔</button>
        </form>
      </div>
    </div>
  `;
}

// ============================================================================
// 5. GLOBAL INTERACTIVE DRAWERS & MODALS
// ============================================================================

let isAiDrawerOpen = false;
let isNotifDrawerOpen = false;
let isAwsModalOpen = false;
let selectedSchemeModal = null;
let doctorSelectedImage = null;
let doctorDiagnostic = null;

let aiChatMessages = [
  { sender: 'bot', text: 'Hello! I am your AI Farmer Assistant. Ask me anything about crop prices, irrigation advice, soil health, or pest control.' }
];

function renderAiAssistantDrawer() {
  if (!isAiDrawerOpen) return '';
  return `
    <div class="fc-drawer-overlay" onclick="if(event.target === this) window.fcToggleAiAssistantDrawer()">
      <div class="fc-drawer-content" style="position: fixed; right: 0; top: 0; bottom: 0; width: 380px; max-width: 90vw; background: white; z-index: 100; box-shadow: -10px 0 30px rgba(0,0,0,0.15); display: flex; flex-direction: column; padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 14px;">
          <h3 style="font-size: 18px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 8px;">🤖 AI Farmer Assistant</h3>
          <button style="background: none; border: none; font-size: 20px; cursor: pointer; color: #64748b;" onclick="window.fcToggleAiAssistantDrawer()">✕</button>
        </div>

        <div style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px;">
          ${aiChatMessages.map(msg => `
            <div style="align-self: ${msg.sender === 'user' ? 'flex-end' : 'flex-start'}; background: ${msg.sender === 'user' ? '#16a34a' : '#f8fafc'}; color: ${msg.sender === 'user' ? 'white' : '#0f172a'}; border: 1px solid ${msg.sender === 'user' ? '#16a34a' : '#e2e8f0'}; border-radius: 14px; padding: 10px 14px; max-width: 85%; font-size: 13px; line-height: 1.45;">
              ${msg.text}
            </div>
          `).join('')}
        </div>

        <form onsubmit="event.preventDefault(); window.fcSendAiMessage();">
          <div style="display: flex; gap: 8px;">
            <input type="text" id="ai-chat-input" class="fc-input" placeholder="Ask farming question..." style="font-size: 13px;" required />
            <button type="submit" class="fc-btn fc-btn-primary fc-btn-sm">Send 🚀</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function renderNotificationDrawer() {
  if (!isNotifDrawerOpen) return '';
  const notifications = notificationService.getNotifications();
  return `
    <div class="fc-drawer-overlay" onclick="if(event.target === this) window.fcToggleNotificationDrawer()">
      <div class="fc-drawer-content" style="position: fixed; right: 0; top: 0; bottom: 0; width: 360px; max-width: 90vw; background: white; z-index: 100; box-shadow: -10px 0 30px rgba(0,0,0,0.15); display: flex; flex-direction: column; padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 14px;">
          <h3 style="font-size: 18px; font-weight: 800; color: #14532d;">🔔 Agromet Notifications</h3>
          <button style="background: none; border: none; font-size: 20px; cursor: pointer;" onclick="window.fcToggleNotificationDrawer()">✕</button>
        </div>

        <div style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px;">
          ${notifications.length === 0 ? `<p style="font-size: 13px; color: #64748b;">No new notifications</p>` : notifications.map(n => `
            <div style="background: ${n.read ? '#f8fafc' : '#f0fdf4'}; border: 1px solid ${n.read ? '#e2e8f0' : '#86efac'}; border-radius: 12px; padding: 12px;">
              <strong style="font-size: 14px; color: #0f172a; display: block;">${n.title}</strong>
              <p style="font-size: 12px; color: #475569; margin: 4px 0 6px;">${n.message}</p>
              <div style="font-size: 10px; color: #64748b;">${n.time}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderAwsModal() {
  if (!isAwsModalOpen) return '';
  return `
    <div class="fc-modal-overlay" onclick="if(event.target === this) window.fcCloseAwsModal()">
      <div class="fc-modal-content" style="max-width: 520px; padding: 24px;">
        <button class="fc-modal-close" onclick="window.fcCloseAwsModal()">✕</button>
        <h3 style="font-size: 20px; font-weight: 800; color: #c2410c; margin-bottom: 6px;">☁️ AWS Serverless Architecture</h3>
        <p style="font-size: 13px; color: #64748b; margin-bottom: 16px;">Cloud-ready architecture design schema</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; font-size: 12px; color: #334155;">
          <div><strong>1. Identity:</strong> AWS Cognito User Pools</div>
          <div><strong>2. API Layer:</strong> AWS API Gateway</div>
          <div><strong>3. Compute:</strong> AWS Lambda Functions (Node.js)</div>
          <div><strong>4. Database:</strong> Amazon DynamoDB (Single Table Design)</div>
          <div><strong>5. Object Storage:</strong> Amazon S3</div>
        </div>
      </div>
    </div>
  `;
}

function renderSchemeModal() {
  if (!selectedSchemeModal) return '';
  const s = schemeService.getSchemeById(selectedSchemeModal);
  return `
    <div class="fc-modal-overlay" onclick="if(event.target === this) window.fcCloseSchemeModal()">
      <div class="fc-modal-content" style="max-width: 540px; padding: 24px;">
        <button class="fc-modal-close" onclick="window.fcCloseSchemeModal()">✕</button>
        <span style="font-size: 12px; font-weight: 800; color: #16a34a; background: #f0fdf4; padding: 2px 8px; border-radius: 6px;">${s.category}</span>
        <h2 style="font-size: 22px; font-weight: 800; color: #0f172a; margin: 8px 0 4px;">${s.title}</h2>
        <div style="font-size: 16px; font-weight: 800; color: #15803d; margin-bottom: 12px;">Benefit: ${s.benefitAmount}</div>
        <p style="font-size: 13px; color: #475569; margin-bottom: 12px;"><strong>Eligibility:</strong> ${s.eligibility}</p>
        <div style="background: #f8fafc; padding: 12px; border-radius: 10px; margin-bottom: 16px; font-size: 12px;">
          <strong>Required Documents:</strong>
          <ul style="margin: 4px 0 0; padding-left: 18px;">${s.documentsRequired.map(doc => `<li>${doc}</li>`).join('')}</ul>
        </div>
        <a href="${s.officialPortalUrl}" target="_blank" class="fc-btn fc-btn-primary" style="width: 100%; text-decoration: none; text-align: center;">Open Official Portal 🌐</a>
      </div>
    </div>
  `;
}

// ============================================================================
// 6. GLOBAL ROUTER & WINDOW ACTION HANDLERS
// ============================================================================

let currentPage = 'dashboard';

window.fcNavigate = function(pageId) {
  currentPage = pageId;
  window.fcRenderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.fcChangeDistrict = function(distId) {
  weatherService.setDistrict(distId);
  window.fcRenderApp();
};

window.fcSelectCropFromSearch = function(cropId) {
  pricesSelectedCropId = cropId;
  pricesShowSuggestions = false;
  window.fcRenderApp();
};

window.fcHandlePricesSearch = function(val) {
  pricesSearchQuery = val;
  pricesShowSuggestions = val.trim().length > 0;
  window.fcRenderApp();
};

window.fcClearPricesSearch = function() {
  pricesSearchQuery = '';
  pricesShowSuggestions = false;
  window.fcRenderApp();
};

window.fcSubmitCropRecommendation = function() {
  window.fcRenderApp();
};

window.fcRecalculateFarmProfit = function() {
  const farmSize = parseFloat(document.getElementById('calc-farmsize')?.value || 4.5);
  const yieldQtl = parseFloat(document.getElementById('calc-yield')?.value || 22);
  const priceQtl = parseFloat(document.getElementById('calc-price')?.value || 2300);

  const seed = parseFloat(document.getElementById('calc-seed')?.value || 4500);
  const fert = parseFloat(document.getElementById('calc-fert')?.value || 8500);
  const pest = parseFloat(document.getElementById('calc-pest')?.value || 4200);
  const labour = parseFloat(document.getElementById('calc-labour')?.value || 12000);

  const costPerAcre = seed + fert + pest + labour + 3500 + 6000 + 2500;
  const invest = costPerAcre * farmSize;
  const revenue = yieldQtl * priceQtl * farmSize;
  const profit = revenue - invest;
  const roi = invest > 0 ? ((profit / invest) * 100).toFixed(1) : 0;

  const invEl = document.getElementById('calc-res-invest');
  const revEl = document.getElementById('calc-res-revenue');
  const profEl = document.getElementById('calc-res-profit');
  const roiEl = document.getElementById('calc-res-roi');

  if (invEl) invEl.innerText = `₹${invest.toLocaleString('en-IN')}`;
  if (revEl) revEl.innerText = `₹${revenue.toLocaleString('en-IN')}`;
  if (profEl) profEl.innerText = `₹${profit.toLocaleString('en-IN')}`;
  if (roiEl) roiEl.innerText = `ROI: +${roi}% Return`;
};

window.fcSelectMarketTab = function(tabId) {
  currentMarketTab = tabId;
  window.fcRenderApp();
};

window.fcCalculateTotalValue = function() {
  const qty = Number(document.getElementById('sell-quantity')?.value || 0);
  const price = Number(document.getElementById('sell-expected-price')?.value || 0);
  const displayEl = document.getElementById('sell-total-value-display');
  if (displayEl) displayEl.innerText = `₹${(qty * price).toLocaleString('en-IN')}`;
};

window.fcSubmitCropListingForm = function() {
  const cropId = document.getElementById('sell-crop-id')?.value || 'paddy';
  const cropObj = ALL_AGRICULTURAL_CROPS.find(c => c.id === cropId) || ALL_AGRICULTURAL_CROPS[0];

  const listingData = {
    cropId: cropObj.id,
    cropName: cropObj.name,
    category: cropObj.category,
    quantity: document.getElementById('sell-quantity')?.value || 10,
    unit: document.getElementById('sell-unit')?.value || 'Quintal',
    expectedPrice: document.getElementById('sell-expected-price')?.value || 2400
  };

  marketplaceService.createListing(listingData, authService.getCurrentUser());
  alert('🌾 Crop listed successfully!');
  currentMarketTab = 'mylistings';
  window.fcRenderApp();
};

window.fcOpenListingDetailsModal = function(id) {
  marketplaceUiState.selectedListingModal = marketplaceService.getListingById(id);
  window.fcRenderApp();
};

window.fcOpenOfferModal = function(id) {
  marketplaceUiState.offerModal = marketplaceService.getListingById(id);
  window.fcRenderApp();
};

window.fcCloseMarketplaceModal = function() {
  marketplaceUiState.selectedListingModal = null;
  marketplaceUiState.offerModal = null;
  window.fcRenderApp();
};

window.fcSubmitOfferForm = function(listingId) {
  const price = document.getElementById('offer-price-input')?.value || 2000;
  const qty = document.getElementById('offer-qty-input')?.value || 10;
  const listing = marketplaceService.getListingById(listingId);

  marketplaceService.createOffer({
    listingId,
    cropName: listing ? listing.cropName : 'Crop Produce',
    offerPrice: price,
    quantityWanted: qty,
    unit: listing ? listing.unit : 'Quintal'
  }, authService.getCurrentUser());

  alert('💬 Purchase offer submitted!');
  window.fcCloseMarketplaceModal();
  currentMarketTab = 'offers';
  window.fcRenderApp();
};

window.fcMarkListingSoldAction = function(id) {
  marketplaceService.markAsSold(id);
  window.fcRenderApp();
};

window.fcDeleteListingAction = function(id) {
  if (confirm('Delete this listing?')) {
    marketplaceService.deleteListing(id);
    window.fcRenderApp();
  }
};

window.fcRespondOfferAction = function(offerId, status) {
  marketplaceService.updateOfferStatus(offerId, status);
  window.fcRenderApp();
};

window.fcHandleDoctorImageUpload = function(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      doctorSelectedImage = e.target.result;
      window.fcRenderApp();
    };
    reader.readAsDataURL(input.files[0]);
  }
};

window.fcAnalyzeCropDisease = function() {
  if (!doctorSelectedImage) {
    alert('Please select a leaf photo first!');
    return;
  }
  const res = DiseaseDetectionService.analyzeImage(doctorSelectedImage);
  if (res.success) {
    doctorDiagnostic = res.diagnostic;
    window.fcRenderApp();
  }
};

window.fcToggleFarmTask = function(taskId) {
  FarmingPlanService.toggleTask('paddy', taskId);
  window.fcRenderApp();
};

window.fcSubmitProfileUpdate = function() {
  const name = document.getElementById('prof-name')?.value;
  const phone = document.getElementById('prof-phone')?.value;
  const village = document.getElementById('prof-village')?.value;
  const farmSize = parseFloat(document.getElementById('prof-farm')?.value || 4.5);

  const currentUser = authService.getCurrentUser();
  const updated = { ...currentUser, name, phone, village, farmSize };
  authService.saveSession(updated);
  alert('👨‍🌾 Profile information updated successfully!');
  window.fcRenderApp();
};

window.fcSubmitLogin = function() {
  const identifier = document.getElementById('auth-identifier')?.value || 'farmer@farmerconnect.demo';
  const role = document.getElementById('auth-role')?.value || 'farmer';
  authService.login({ identifier, role });
  alert('🔑 Login successful!');
  window.fcNavigate('dashboard');
};

window.fcLogout = function() {
  authService.logout();
  window.fcNavigate('auth');
};

window.fcToggleAiAssistantDrawer = function() { isAiDrawerOpen = !isAiDrawerOpen; window.fcRenderApp(); };
window.fcToggleNotificationDrawer = function() { isNotifDrawerOpen = !isNotifDrawerOpen; window.fcRenderApp(); };
window.fcOpenAwsModal = function() { isAwsModalOpen = true; window.fcRenderApp(); };
window.fcCloseAwsModal = function() { isAwsModalOpen = false; window.fcRenderApp(); };
window.fcOpenSchemeModal = function(id) { selectedSchemeModal = id; window.fcRenderApp(); };
window.fcCloseSchemeModal = function() { selectedSchemeModal = null; window.fcRenderApp(); };

window.fcSendAiMessage = function() {
  const input = document.getElementById('ai-chat-input');
  if (!input || !input.value.trim()) return;
  const text = input.value.trim();
  aiChatMessages.push({ sender: 'user', text });

  let reply = 'Advisory: Check soil moisture and mandi price benchmarks before harvesting.';
  if (text.toLowerCase().includes('irrigate')) {
    reply = 'Smart Irrigation Advisory: Soil moisture is sufficient (62%) and rain is expected tomorrow. Delay irrigation today.';
  } else if (text.toLowerCase().includes('paddy') || text.toLowerCase().includes('price')) {
    reply = 'Mandi Benchmark: Paddy (Common) is trading at ₹2,300/quintal (+2.2%) in Guntur APMC Yard.';
  }

  aiChatMessages.push({ sender: 'bot', text: reply });
  window.fcRenderApp();
};

// MAIN APPLICATION ENGINE RENDER LOOP
window.fcRenderApp = function() {
  const root = document.getElementById('app');
  if (!root) return;

  let pageContent = '';
  switch (currentPage) {
    case 'dashboard': pageContent = renderDashboardPage(); break;
    case 'weather': pageContent = renderWeatherPage(); break;
    case 'prices': pageContent = renderPricesPage(); break;
    case 'recommendation': pageContent = renderCropRecommendationPage(); break;
    case 'calculator': pageContent = renderCalculatorPage(); break;
    case 'marketplace': pageContent = renderMarketplacePage(); break;
    case 'doctor': pageContent = renderCropDoctorPage(doctorSelectedImage, doctorDiagnostic); break;
    case 'farmplan': pageContent = renderFarmPlanPage(); break;
    case 'schemes': pageContent = renderSchemesPage(); break;
    case 'services': pageContent = renderServicesPage(); break;
    case 'profile': pageContent = renderProfilePage(); break;
    case 'auth': pageContent = renderAuthPage(); break;
    default: pageContent = renderDashboardPage(); break;
  }

  root.innerHTML = `
    ${renderHeader(currentPage)}
    <main class="fc-main-container">
      ${pageContent}
    </main>
    ${renderAiAssistantDrawer()}
    ${renderNotificationDrawer()}
    ${renderAwsModal()}
    ${renderSchemeModal()}
  `;
};

// INITIALIZE APP UPON DOM READY
document.addEventListener('DOMContentLoaded', () => {
  window.fcRenderApp();
});
