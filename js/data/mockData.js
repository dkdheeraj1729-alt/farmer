/**
 * Farmer Connect Portal - Realistic Mock Data
 * Structured for AWS DynamoDB / API Gateway integration
 */

export const INDIAN_DISTRICTS = [
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

export const CROPS_CATALOG = [
  { id: 'paddy', name: 'Paddy (Rice)', category: 'Cereals', icon: '🌾', unit: 'quintal', avgYieldPerAcre: 22, avgSellingPrice: 2300 },
  { id: 'chilli', name: 'Red Chilli', category: 'Spices', icon: '🌶️', unit: 'quintal', avgYieldPerAcre: 18, avgSellingPrice: 18500 },
  { id: 'cotton', name: 'Cotton', category: 'Commercial', icon: '☁️', unit: 'quintal', avgYieldPerAcre: 12, avgSellingPrice: 7100 },
  { id: 'maize', name: 'Maize (Corn)', category: 'Cereals', icon: '🌽', unit: 'quintal', avgYieldPerAcre: 25, avgSellingPrice: 2150 },
  { id: 'turmeric', name: 'Turmeric', category: 'Spices', icon: '🟡', unit: 'quintal', avgYieldPerAcre: 20, avgSellingPrice: 13200 },
  { id: 'groundnut', name: 'Groundnut', category: 'Oilseeds', icon: '🥜', unit: 'quintal', avgYieldPerAcre: 14, avgSellingPrice: 6450 },
  { id: 'sugarcane', name: 'Sugarcane', category: 'Commercial', icon: '🎋', unit: 'ton', avgYieldPerAcre: 35, avgSellingPrice: 3150 },
  { id: 'blackgram', name: 'Black Gram (Urad)', category: 'Pulses', icon: '🫘', unit: 'quintal', avgYieldPerAcre: 8, avgSellingPrice: 7800 }
];

export const MOCK_WEATHER_DATA = {
  guntur: {
    district: 'Guntur',
    state: 'Andhra Pradesh',
    temp: 31,
    condition: 'Partly Cloudy',
    conditionIcon: 'partly-cloudy',
    humidity: 68,
    rainProbability: 60,
    windSpeed: 14,
    uvIndex: 7,
    soilMoisture: 'Optimal (74%)',
    sunrise: '06:04 AM',
    sunset: '06:22 PM',
    alert: {
      type: 'warning',
      title: 'Rain Expected Tomorrow 🌧️',
      message: 'Moderate to heavy rain expected tomorrow afternoon. Consider delaying irrigation and check field drainage.'
    },
    hourly: [
      { time: '06:00 AM', temp: 26, rain: 10, icon: 'sun' },
      { time: '09:00 AM', temp: 29, rain: 20, icon: 'sun-cloud' },
      { time: '12:00 PM', temp: 33, rain: 35, icon: 'cloud' },
      { time: '03:00 PM', temp: 31, rain: 60, icon: 'rain' },
      { time: '06:00 PM', temp: 28, rain: 45, icon: 'rain' },
      { time: '09:00 PM', temp: 27, rain: 20, icon: 'cloud' }
    ],
    forecast: [
      { day: 'Today', tempHigh: 33, tempLow: 25, condition: 'Partly Cloudy', rain: 60, icon: 'partly-cloudy' },
      { day: 'Tomorrow', tempHigh: 29, tempLow: 24, condition: 'Moderate Rain', rain: 85, icon: 'rain' },
      { day: 'Day 3', tempHigh: 30, tempLow: 24, condition: 'Light Thunderstorms', rain: 70, icon: 'thunderstorm' },
      { day: 'Day 4', tempHigh: 32, tempLow: 25, condition: 'Sunny Spells', rain: 30, icon: 'sun-cloud' },
      { day: 'Day 5', tempHigh: 34, tempLow: 26, condition: 'Clear Sky', rain: 10, icon: 'sun' },
      { day: 'Day 6', tempHigh: 35, tempLow: 26, condition: 'Hot & Clear', rain: 5, icon: 'sun' },
      { day: 'Day 7', tempHigh: 33, tempLow: 25, condition: 'Partly Cloudy', rain: 25, icon: 'sun-cloud' }
    ]
  },
  vijayawada: {
    district: 'Vijayawada',
    state: 'Andhra Pradesh',
    temp: 32,
    condition: 'Thunderstorms',
    conditionIcon: 'thunderstorm',
    humidity: 72,
    rainProbability: 75,
    windSpeed: 18,
    uvIndex: 6,
    soilMoisture: 'High (82%)',
    sunrise: '06:03 AM',
    sunset: '06:21 PM',
    alert: {
      type: 'danger',
      title: 'Heavy Thunderstorm Warning ⚠️',
      message: 'Squally winds and lightning expected near Krishna River basin. Secure harvested crops in covered dry storage.'
    },
    hourly: [
      { time: '06:00 AM', temp: 27, rain: 30, icon: 'cloud' },
      { time: '09:00 AM', temp: 30, rain: 45, icon: 'rain' },
      { time: '12:00 PM', temp: 32, rain: 80, icon: 'thunderstorm' },
      { time: '03:00 PM', temp: 29, rain: 90, icon: 'thunderstorm' },
      { time: '06:00 PM', temp: 27, rain: 60, icon: 'rain' },
      { time: '09:00 PM', temp: 26, rain: 30, icon: 'cloud' }
    ],
    forecast: [
      { day: 'Today', tempHigh: 32, tempLow: 26, condition: 'Thunderstorms', rain: 75, icon: 'thunderstorm' },
      { day: 'Tomorrow', tempHigh: 30, tempLow: 25, condition: 'Heavy Rain', rain: 90, icon: 'rain' },
      { day: 'Day 3', tempHigh: 31, tempLow: 25, condition: 'Passing Showers', rain: 50, icon: 'sun-cloud' },
      { day: 'Day 4', tempHigh: 33, tempLow: 26, condition: 'Sunny', rain: 15, icon: 'sun' },
      { day: 'Day 5', tempHigh: 34, tempLow: 26, condition: 'Hot', rain: 10, icon: 'sun' },
      { day: 'Day 6', tempHigh: 34, tempLow: 25, condition: 'Clear', rain: 5, icon: 'sun' },
      { day: 'Day 7', tempHigh: 33, tempLow: 25, condition: 'Partly Cloudy', rain: 20, icon: 'sun-cloud' }
    ]
  },
  amaravati: {
    district: 'Amaravati',
    state: 'Andhra Pradesh',
    temp: 30,
    condition: 'Overcast',
    conditionIcon: 'cloud',
    humidity: 65,
    rainProbability: 40,
    windSpeed: 12,
    uvIndex: 8,
    soilMoisture: 'Moderate (68%)',
    sunrise: '06:05 AM',
    sunset: '06:23 PM',
    alert: {
      type: 'info',
      title: 'Favorable Sowing Conditions 🌱',
      message: 'Soil moisture levels are ideal for Kharif crop field preparation. Good rain expected later this week.'
    },
    hourly: [
      { time: '06:00 AM', temp: 25, rain: 10, icon: 'sun-cloud' },
      { time: '09:00 AM', temp: 28, rain: 20, icon: 'cloud' },
      { time: '12:00 PM', temp: 31, rain: 35, icon: 'cloud' },
      { time: '03:00 PM', temp: 30, rain: 40, icon: 'cloud' },
      { time: '06:00 PM', temp: 28, rain: 30, icon: 'sun-cloud' },
      { time: '09:00 PM', temp: 26, rain: 15, icon: 'cloud' }
    ],
    forecast: [
      { day: 'Today', tempHigh: 31, tempLow: 25, condition: 'Overcast', rain: 40, icon: 'cloud' },
      { day: 'Tomorrow', tempHigh: 31, tempLow: 24, condition: 'Light Rain', rain: 55, icon: 'rain' },
      { day: 'Day 3', tempHigh: 30, tempLow: 24, condition: 'Showers', rain: 65, icon: 'rain' },
      { day: 'Day 4', tempHigh: 32, tempLow: 25, condition: 'Partly Cloudy', rain: 25, icon: 'sun-cloud' },
      { day: 'Day 5', tempHigh: 33, tempLow: 26, condition: 'Clear', rain: 10, icon: 'sun' },
      { day: 'Day 6', tempHigh: 34, tempLow: 26, condition: 'Sunny', rain: 5, icon: 'sun' },
      { day: 'Day 7', tempHigh: 32, tempLow: 25, condition: 'Partly Cloudy', rain: 20, icon: 'sun-cloud' }
    ]
  }
};

export const MOCK_CROP_PRICES = [
  {
    cropId: 'paddy',
    cropName: 'Paddy (Common)',
    market: 'Guntur Agriculture Market Yard',
    district: 'Guntur',
    state: 'Andhra Pradesh',
    currentPrice: 2300,
    previousPrice: 2250,
    changePercentage: 2.22,
    trend: 'up',
    unit: 'quintal',
    updatedAt: 'Today, 10:30 AM',
    history7Days: [2200, 2210, 2240, 2230, 2250, 2280, 2300]
  },
  {
    cropId: 'chilli',
    cropName: 'Teja Red Chilli (Dry)',
    market: 'Guntur Mirchi Yard',
    district: 'Guntur',
    state: 'Andhra Pradesh',
    currentPrice: 18500,
    previousPrice: 19100,
    changePercentage: -3.14,
    trend: 'down',
    unit: 'quintal',
    updatedAt: 'Today, 10:15 AM',
    history7Days: [19500, 19400, 19200, 19300, 19100, 18800, 18500]
  },
  {
    cropId: 'cotton',
    cropName: 'Cotton (Long Staple)',
    market: 'Kurnool Agricultural Yard',
    district: 'Kurnool',
    state: 'Andhra Pradesh',
    currentPrice: 7100,
    previousPrice: 6950,
    changePercentage: 2.16,
    trend: 'up',
    unit: 'quintal',
    updatedAt: 'Today, 09:45 AM',
    history7Days: [6850, 6900, 6920, 6950, 7000, 7050, 7100]
  },
  {
    cropId: 'maize',
    cropName: 'Yellow Maize',
    market: 'Nizamabad APMC',
    district: 'Nizamabad',
    state: 'Telangana',
    currentPrice: 2150,
    previousPrice: 2150,
    changePercentage: 0.00,
    trend: 'stable',
    unit: 'quintal',
    updatedAt: 'Today, 10:00 AM',
    history7Days: [2140, 2145, 2150, 2150, 2150, 2150, 2150]
  },
  {
    cropId: 'turmeric',
    cropName: 'Finger Turmeric',
    market: 'Duggirala Market',
    district: 'Guntur',
    state: 'Andhra Pradesh',
    currentPrice: 13200,
    previousPrice: 12800,
    changePercentage: 3.12,
    trend: 'up',
    unit: 'quintal',
    updatedAt: 'Today, 10:45 AM',
    history7Days: [12500, 12600, 12700, 12800, 12950, 13050, 13200]
  },
  {
    cropId: 'groundnut',
    cropName: 'Groundnut (Pod)',
    market: 'Anantapur Market Yard',
    district: 'Anantapur',
    state: 'Andhra Pradesh',
    currentPrice: 6450,
    previousPrice: 6550,
    changePercentage: -1.53,
    trend: 'down',
    unit: 'quintal',
    updatedAt: 'Today, 09:30 AM',
    history7Days: [6650, 6600, 6580, 6550, 6520, 6480, 6450]
  }
];

export const MOCK_MARKETPLACE_LISTINGS = [
  {
    listingId: 'lst-101',
    farmerId: 'usr-201',
    farmerName: 'Ramesh Babu',
    farmerPhone: '+91 98480 12345',
    farmerVillage: 'Tenali, Guntur',
    crop: 'Paddy (BPT 5204 Sona Masoori)',
    quantity: '2,000 kg (20 Quintals)',
    price: 24, // per kg
    totalPriceFormatted: '₹48,000',
    location: 'Guntur, Andhra Pradesh',
    harvestDate: 'September 2026',
    description: 'High quality freshly harvested BPT 5204 Sona Masoori raw paddy. Cleaned, dried to 12% moisture content, ready for millers.',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    verifiedFarmer: true,
    createdAt: '2 hours ago'
  },
  {
    listingId: 'lst-102',
    farmerId: 'usr-202',
    farmerName: 'Srinivasa Rao',
    farmerPhone: '+91 94401 88765',
    farmerVillage: 'Prathipadu, Guntur',
    crop: 'Red Chilli (Teja Variety)',
    quantity: '1,500 kg (15 Quintals)',
    price: 190, // per kg
    totalPriceFormatted: '₹2,85,000',
    location: 'Guntur, Andhra Pradesh',
    harvestDate: 'August 2026',
    description: 'Deep red color, high pungency Teja variety dry red chillies. Sun-dried carefully without stems.',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
    verifiedFarmer: true,
    createdAt: '5 hours ago'
  },
  {
    listingId: 'lst-103',
    farmerId: 'usr-203',
    farmerName: 'Venkateswarlu M.',
    farmerPhone: '+91 98662 43210',
    farmerVillage: 'Mangalagiri, Guntur',
    crop: 'Hybrid Yellow Maize',
    quantity: '5,000 kg (50 Quintals)',
    price: 22, // per kg
    totalPriceFormatted: '₹1,10,000',
    location: 'Guntur, Andhra Pradesh',
    harvestDate: 'September 2026',
    description: 'Uniform grain size, low moisture maize ideal for starch mills and cattle feed manufacturers.',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80',
    verifiedFarmer: false,
    createdAt: '1 day ago'
  },
  {
    listingId: 'lst-104',
    farmerId: 'usr-204',
    farmerName: 'Koteswara Rao',
    farmerPhone: '+91 97012 99881',
    farmerVillage: 'Chebrole, Guntur',
    crop: 'Organic Turmeric (Raw Bulbs)',
    quantity: '800 kg (8 Quintals)',
    price: 135, // per kg
    totalPriceFormatted: '₹1,08,000',
    location: 'Guntur, Andhra Pradesh',
    harvestDate: 'August 2026',
    description: 'High curcumin content organic turmeric fingers. Zero chemical residue, direct from farm.',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    verifiedFarmer: true,
    createdAt: '2 days ago'
  }
];

export const MOCK_SERVICES = [
  {
    id: 'srv-1',
    name: 'Guntur Rythu Seva Kendra & Seed Store',
    category: 'Seed Suppliers',
    categoryIcon: '🌱',
    distanceKm: 2.4,
    address: 'Near Old Bus Stand Road, Guntur',
    phone: '+91 863 2234567',
    openStatus: 'Open Now • Closes 7:00 PM',
    isOpen: true,
    rating: 4.8,
    lat: 16.3100,
    lng: 80.4400,
    services: ['Certified Paddy Seeds', 'Cotton Hybrids', 'Bio-Stimulants', 'Government Subsidy Tokens']
  },
  {
    id: 'srv-2',
    name: 'Sri Krishna Fertilizers & Pesticides',
    category: 'Fertilizer Shops',
    categoryIcon: '🧪',
    distanceKm: 3.1,
    address: 'APMC Market Complex, Guntur',
    phone: '+91 98491 55432',
    openStatus: 'Open Now • Closes 8:00 PM',
    isOpen: true,
    rating: 4.6,
    lat: 16.3000,
    lng: 80.4300,
    services: ['Urea & DAP stock', 'Complex NPK Fertilisers', 'Soil Health Testing Kits', 'Organic Micronutrients']
  },
  {
    id: 'srv-3',
    name: 'Jai Kisan Tractor Rental & Harvesters',
    category: 'Tractor Rental',
    categoryIcon: '🚜',
    distanceKm: 4.5,
    address: 'Autonagar Main Road, Guntur',
    phone: '+91 99890 11223',
    openStatus: 'Open Now • 24 Hours Booking',
    isOpen: true,
    rating: 4.9,
    lat: 16.3200,
    lng: 80.4500,
    services: ['55HP Mahindra Tractors', 'Paddy Combine Harvesters', 'Rotavators & Cultivators', 'Laser Land Leveler']
  },
  {
    id: 'srv-4',
    name: 'AP State Ag Cold Storage Facility',
    category: 'Cold Storage',
    categoryIcon: '❄️',
    distanceKm: 6.8,
    address: 'Narakodur Highway, Guntur',
    phone: '+91 863 2554433',
    openStatus: 'Open Now • 24/7 Gate Entry',
    isOpen: true,
    rating: 4.7,
    lat: 16.2800,
    lng: 80.4100,
    services: ['Red Chilli Cold Storage', 'Temperature Controlled Rooms', 'Digital Warehouse Receipts', 'Bank Collateral Loans']
  },
  {
    id: 'srv-5',
    name: 'Guntur District Agriculture Office',
    category: 'Government Agriculture Offices',
    categoryIcon: '🏢',
    distanceKm: 3.8,
    address: 'Collectorate Compound, Guntur',
    phone: '+91 863 2221100',
    openStatus: 'Open Now • Closes 5:30 PM',
    isOpen: true,
    rating: 4.4,
    lat: 16.3150,
    lng: 80.4350,
    services: ['PM-KISAN Enrolment', 'Crop Insurance Scheme (YSR Free Crop Insurance)', 'Soil Testing Lab', 'Disaster Relief Compensation']
  },
  {
    id: 'srv-6',
    name: 'Amaravati Express Ag Transport Services',
    category: 'Transport',
    categoryIcon: '🚚',
    distanceKm: 5.2,
    address: 'NH-16 Bypass, Vijayawada Road, Guntur',
    phone: '+91 94405 66778',
    openStatus: 'Open Now • 24/7 Dispatch',
    isOpen: true,
    rating: 4.5,
    lat: 16.3300,
    lng: 80.4600,
    services: ['10-Ton LCV Trucks', 'Inter-state Grain Logistics', 'Farm Pickup Service', 'Transit Insurance']
  }
];

export const MOCK_NOTIFICATIONS = [
  {
    id: 'notif-1',
    title: 'Rain Warning Expected Tomorrow 🌧️',
    message: 'Guntur District Agromet Advisory: Moderate rainfall expected tomorrow afternoon. Delay irrigation and safeguard harvested crops.',
    time: '30 mins ago',
    type: 'weather',
    unread: true,
    awsSource: 'AWS SNS -> Topic: WeatherAlerts-Guntur'
  },
  {
    id: 'notif-2',
    title: 'Chilli Price Surge Alert 📈',
    message: 'Teja Red Chilli prices in Guntur Mirchi Yard opened at ₹18,500/qtl today with steady demand from exporters.',
    time: '2 hours ago',
    type: 'price',
    unread: true,
    awsSource: 'AWS SNS -> Topic: MarketRates-Spices'
  },
  {
    id: 'notif-3',
    title: 'PM-KISAN Installment Reminder 🏛️',
    message: '18th PM-KISAN installment credited for verified farmers. Check your linked bank account status.',
    time: '1 day ago',
    type: 'gov',
    unread: false,
    awsSource: 'AWS EventBridge -> Scheduled Dispatch'
  },
  {
    id: 'notif-4',
    title: 'Crop Fertilizer Advisory 🌱',
    message: 'For 30-day Paddy crops, top dressing with 25kg Urea per acre is recommended after current rain passes.',
    time: '2 days ago',
    type: 'farming',
    unread: false,
    awsSource: 'AWS Lambda -> AdvisoryEngine'
  }
];

export const MOCK_AI_RESPONSES = {
  "rain": "Rain is expected in Guntur tomorrow with a 60% probability. We advise postponing any planned chemical spraying or fertilizer top-dressing. Ensure field drainage channels are clear to prevent waterlogging around tender crop roots.",
  "fertilizer": "For Paddy during the tillering stage (25-35 days after transplanting), apply 25-30 kg Urea per acre. Ensure soil is moist but not flooded deeply when broadcasting fertilizer.",
  "pest": "If you notice yellowing leaves or stem borer attack in Paddy, check for egg masses near leaf tips. Spray Chlorantraniliprole 18.5% SC @ 60 ml/acre or Cartap Hydrochloride 50% SP @ 400 g/acre in 200L water.",
  "price": "Paddy prices are currently trending upward at ₹2,300/quintal in Guntur (+2.2%). Red Chilli prices are slightly down at ₹18,500/quintal due to fresh arrivals.",
  "scheme": "Under the PM-KISAN scheme, eligible farmers receive ₹6,000 per year in 3 equal installments. In Andhra Pradesh, Rythu Bharosa adds an extra ₹7,500, giving total financial assistance of ₹13,500/year.",
  "default": "Hello Farmer! I am your AI Crop Assistant. Ask me about weather precautions, pest management, fertilizer schedules, market price trends, or government crop subsidy schemes!"
};
