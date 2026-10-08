/**
 * Farmer Connect Portal - Comprehensive Indian Crop Database
 * Mandi Benchmark Price Data across Cereals, Pulses, Oilseeds, Commercial, Spices, Vegetables, Fruits
 */

export const INDIAN_CROPS_DATABASE = [
  // CEREALS & GRAINS
  {
    id: 'paddy',
    name: 'Paddy (Common)',
    category: 'Cereals & Grains',
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
    id: 'basmati',
    name: 'Basmati Rice (Pusa 1121)',
    category: 'Cereals & Grains',
    icon: '🌾',
    unit: 'quintal',
    currentPrice: 4250,
    previousPrice: 4180,
    minPrice: 4000,
    maxPrice: 4400,
    avgPrice: 4200,
    changePercentage: 1.67,
    trend: 'up',
    updatedAt: '11 Sep 2026, 10:45 AM',
    history7Days: [4100, 4120, 4150, 4180, 4180, 4200, 4250],
    history30Days: [3900, 3950, 4000, 4050, 4100, 4180, 4250],
    marketsComparison: [
      { market: 'Karnal Mandi', district: 'Karnal', price: 4250, isBest: false },
      { market: 'Ludhiana APMC', district: 'Ludhiana', price: 4280, isBest: true },
      { market: 'Amritsar Yard', district: 'Amritsar', price: 4220, isBest: false }
    ],
    trendExplanation: 'Price is rising steadily backed by Gulf export contracts and low terminal arrivals.'
  },
  {
    id: 'wheat',
    name: 'Wheat (Sharbati)',
    category: 'Cereals & Grains',
    icon: '🌾',
    unit: 'quintal',
    currentPrice: 2450,
    previousPrice: 2460,
    minPrice: 2350,
    maxPrice: 2550,
    avgPrice: 2450,
    changePercentage: -0.41,
    trend: 'stable',
    updatedAt: '11 Sep 2026, 10:15 AM',
    history7Days: [2440, 2450, 2460, 2455, 2460, 2460, 2450],
    history30Days: [2400, 2420, 2430, 2450, 2460, 2460, 2450],
    marketsComparison: [
      { market: 'Indore APMC', district: 'Indore', price: 2470, isBest: true },
      { market: 'Kota Mandi', district: 'Kota', price: 2440, isBest: false },
      { market: 'Ujjain Yard', district: 'Ujjain', price: 2450, isBest: false }
    ],
    trendExplanation: 'Wheat prices have remained relatively stable this week with adequate FCI stocks.'
  },
  {
    id: 'maize',
    name: 'Yellow Maize (Corn)',
    category: 'Cereals & Grains',
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
      { market: 'Guntur Yard', district: 'Guntur', price: 2180, isBest: true },
      { market: 'Davangere Mandi', district: 'Davangere', price: 2140, isBest: false }
    ],
    trendExplanation: 'Prices remain flat with balanced feed industrial demand.'
  },
  {
    id: 'jowar',
    name: 'Sorghum (Jowar)',
    category: 'Cereals & Grains',
    icon: '🌾',
    unit: 'quintal',
    currentPrice: 3100,
    previousPrice: 3050,
    minPrice: 2900,
    maxPrice: 3250,
    avgPrice: 3080,
    changePercentage: 1.64,
    trend: 'up',
    updatedAt: '11 Sep 2026, 09:45 AM',
    history7Days: [3000, 3020, 3040, 3050, 3050, 3080, 3100],
    history30Days: [2900, 2950, 2980, 3000, 3050, 3080, 3100],
    marketsComparison: [
      { market: 'Solapur Yard', district: 'Solapur', price: 3120, isBest: true },
      { market: 'Kurnool APMC', district: 'Kurnool', price: 3080, isBest: false }
    ],
    trendExplanation: 'Increasing millet health food demand has boosted Jowar prices.'
  },
  {
    id: 'bajra',
    name: 'Pearl Millet (Bajra)',
    category: 'Cereals & Grains',
    icon: '🌾',
    unit: 'quintal',
    currentPrice: 2250,
    previousPrice: 2280,
    minPrice: 2100,
    maxPrice: 2350,
    avgPrice: 2240,
    changePercentage: -1.32,
    trend: 'down',
    updatedAt: '11 Sep 2026, 09:30 AM',
    history7Days: [2300, 2290, 2285, 2280, 2270, 2260, 2250],
    history30Days: [2200, 2230, 2250, 2280, 2280, 2260, 2250],
    marketsComparison: [
      { market: 'Jaipur Mandi', district: 'Jaipur', price: 2260, isBest: true },
      { market: 'Agra Yard', district: 'Agra', price: 2240, isBest: false }
    ],
    trendExplanation: 'Slight decline due to fresh Kharif harvest arrivals in Rajasthan.'
  },
  {
    id: 'ragi',
    name: 'Finger Millet (Ragi)',
    category: 'Cereals & Grains',
    icon: '🌾',
    unit: 'quintal',
    currentPrice: 3500,
    previousPrice: 3450,
    minPrice: 3300,
    maxPrice: 3650,
    avgPrice: 3480,
    changePercentage: 1.45,
    trend: 'up',
    updatedAt: '11 Sep 2026, 10:15 AM',
    history7Days: [3400, 3420, 3430, 3450, 3450, 3480, 3500],
    history30Days: [3300, 3350, 3400, 3420, 3450, 3480, 3500],
    marketsComparison: [
      { market: 'Bengaluru APMC', district: 'Bengaluru', price: 3530, isBest: true },
      { market: 'Mysuru Yard', district: 'Mysuru', price: 3480, isBest: false }
    ],
    trendExplanation: 'Strong demand from urban health brand processors.'
  },

  // PULSES
  {
    id: 'turdal',
    name: 'Red Gram (Tur / Arhar Dal)',
    category: 'Pulses',
    icon: '🫘',
    unit: 'quintal',
    currentPrice: 8900,
    previousPrice: 8750,
    minPrice: 8500,
    maxPrice: 9300,
    avgPrice: 8850,
    changePercentage: 1.71,
    trend: 'up',
    updatedAt: '11 Sep 2026, 11:00 AM',
    history7Days: [8600, 8650, 8700, 8750, 8800, 8850, 8900],
    history30Days: [8200, 8350, 8500, 8650, 8750, 8850, 8900],
    marketsComparison: [
      { market: 'Gulbarga Mandi', district: 'Kalaburagi', price: 8950, isBest: true },
      { market: 'Latur Yard', district: 'Latur', price: 8880, isBest: false },
      { market: 'Guntur APMC', district: 'Guntur', price: 8900, isBest: false }
    ],
    trendExplanation: 'Prices gained for 5 consecutive sessions on tight domestic supply.'
  },
  {
    id: 'moong',
    name: 'Green Gram (Moong)',
    category: 'Pulses',
    icon: '🫘',
    unit: 'quintal',
    currentPrice: 7650,
    previousPrice: 7700,
    minPrice: 7400,
    maxPrice: 7900,
    avgPrice: 7660,
    changePercentage: -0.65,
    trend: 'stable',
    updatedAt: '11 Sep 2026, 10:30 AM',
    history7Days: [7720, 7700, 7700, 7680, 7700, 7680, 7650],
    history30Days: [7500, 7600, 7650, 7700, 7700, 7680, 7650],
    marketsComparison: [
      { market: 'Madurai APMC', district: 'Madurai', price: 7680, isBest: true },
      { market: 'Warangal Yard', district: 'Warangal', price: 7650, isBest: false }
    ],
    trendExplanation: 'Moong prices are holding near NAFED MSP procurement levels.'
  },
  {
    id: 'urad',
    name: 'Black Gram (Urad)',
    category: 'Pulses',
    icon: '🫘',
    unit: 'quintal',
    currentPrice: 7800,
    previousPrice: 7650,
    minPrice: 7500,
    maxPrice: 8100,
    avgPrice: 7750,
    changePercentage: 1.96,
    trend: 'up',
    updatedAt: '11 Sep 2026, 10:15 AM',
    history7Days: [7500, 7550, 7600, 7650, 7700, 7750, 7800],
    history30Days: [7200, 7350, 7500, 7600, 7650, 7750, 7800],
    marketsComparison: [
      { market: 'Guntur APMC', district: 'Guntur', price: 7820, isBest: true },
      { market: 'Tenali Mandi', district: 'Guntur', price: 7800, isBest: false }
    ],
    trendExplanation: 'Black Gram gained on robust pulse processing mill buying.'
  },
  {
    id: 'chana',
    name: 'Bengal Gram (Chana)',
    category: 'Pulses',
    icon: '🫘',
    unit: 'quintal',
    currentPrice: 5850,
    previousPrice: 5800,
    minPrice: 5600,
    maxPrice: 6100,
    avgPrice: 5820,
    changePercentage: 0.86,
    trend: 'stable',
    updatedAt: '11 Sep 2026, 09:50 AM',
    history7Days: [5750, 5780, 5800, 5800, 5820, 5820, 5850],
    history30Days: [5500, 5600, 5700, 5780, 5800, 5820, 5850],
    marketsComparison: [
      { market: 'Bikaner Mandi', district: 'Bikaner', price: 5880, isBest: true },
      { market: 'Latur Yard', district: 'Latur', price: 5840, isBest: false }
    ],
    trendExplanation: 'Chana prices firming ahead of festive season demand.'
  },

  // SPICES
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
      { market: 'Nizamabad APMC', district: 'Nizamabad', price: 13200, isBest: false },
      { market: 'Erode Yard', district: 'Erode', price: 13150, isBest: false }
    ],
    trendExplanation: 'Strong export orders from Bangladesh and Europe pushed prices up 3.1%.'
  },
  {
    id: 'coriander',
    name: 'Coriander (Dhania)',
    category: 'Spices',
    icon: '🌿',
    unit: 'quintal',
    currentPrice: 7400,
    previousPrice: 7350,
    minPrice: 7100,
    maxPrice: 7700,
    avgPrice: 7380,
    changePercentage: 0.68,
    trend: 'stable',
    updatedAt: '11 Sep 2026, 10:00 AM',
    history7Days: [7300, 7320, 7340, 7350, 7350, 7380, 7400],
    history30Days: [7100, 7200, 7250, 7300, 7350, 7380, 7400],
    marketsComparison: [
      { market: 'Ramganj Mandi', district: 'Kota', price: 7450, isBest: true },
      { market: 'Guntur Yard', district: 'Guntur', price: 7400, isBest: false }
    ],
    trendExplanation: 'Coriander trading steady with routine spice grinding mill inquiries.'
  },
  {
    id: 'cumin',
    name: 'Cumin (Jeera)',
    category: 'Spices',
    icon: '🟤',
    unit: 'quintal',
    currentPrice: 24500,
    previousPrice: 24200,
    minPrice: 23500,
    maxPrice: 25800,
    avgPrice: 24400,
    changePercentage: 1.24,
    trend: 'up',
    updatedAt: '11 Sep 2026, 11:15 AM',
    history7Days: [23800, 24000, 24100, 24200, 24300, 24400, 24500],
    history30Days: [22500, 23000, 23500, 24000, 24200, 24400, 24500],
    marketsComparison: [
      { market: 'Unjha Mandi', district: 'Mehsana', price: 24650, isBest: true },
      { market: 'Jodhpur Yard', district: 'Jodhpur', price: 24400, isBest: false }
    ],
    trendExplanation: 'Jeera prices gained over 1% due to stockist accumulation.'
  },

  // COMMERCIAL CROPS
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
    id: 'sugarcane',
    name: 'Sugarcane (Mill Grade)',
    category: 'Commercial Crops',
    icon: '🎋',
    unit: 'ton',
    currentPrice: 3150,
    previousPrice: 3150,
    minPrice: 3000,
    maxPrice: 3300,
    avgPrice: 3150,
    changePercentage: 0.00,
    trend: 'stable',
    updatedAt: '11 Sep 2026, 09:00 AM',
    history7Days: [3150, 3150, 3150, 3150, 3150, 3150, 3150],
    history30Days: [3100, 3120, 3150, 3150, 3150, 3150, 3150],
    marketsComparison: [
      { market: 'Mandya Mill Gate', district: 'Mandya', price: 3180, isBest: true },
      { market: 'Kolhapur Sugar Yard', district: 'Kolhapur', price: 3150, isBest: false }
    ],
    trendExplanation: 'Sugarcane prices strictly benchmarked to Govt FRP statutory rate.'
  },

  // OILSEEDS
  {
    id: 'groundnut',
    name: 'Groundnut (Pod)',
    category: 'Oilseeds',
    icon: '🥜',
    unit: 'quintal',
    currentPrice: 6450,
    previousPrice: 6550,
    minPrice: 6300,
    maxPrice: 6700,
    avgPrice: 6480,
    changePercentage: -1.53,
    trend: 'down',
    updatedAt: '11 Sep 2026, 09:30 AM',
    history7Days: [6650, 6600, 6580, 6550, 6520, 6480, 6450],
    history30Days: [6750, 6700, 6650, 6600, 6550, 6480, 6450],
    marketsComparison: [
      { market: 'Anantapur Market Yard', district: 'Anantapur', price: 6450, isBest: false },
      { market: 'Rajkot APMC', district: 'Rajkot', price: 6520, isBest: true },
      { market: 'Kurnool Yard', district: 'Kurnool', price: 6420, isBest: false }
    ],
    trendExplanation: 'Groundnut prices fell 1.5% under pressure of incoming kharif oilseed harvest.'
  },
  {
    id: 'soybean',
    name: 'Soybean (Yellow)',
    category: 'Oilseeds',
    icon: '🫘',
    unit: 'quintal',
    currentPrice: 4650,
    previousPrice: 4600,
    minPrice: 4450,
    maxPrice: 4800,
    avgPrice: 4620,
    changePercentage: 1.09,
    trend: 'up',
    updatedAt: '11 Sep 2026, 10:10 AM',
    history7Days: [4550, 4580, 4600, 4600, 4620, 4630, 4650],
    history30Days: [4400, 4450, 4500, 4550, 4600, 4630, 4650],
    marketsComparison: [
      { market: 'Indore APMC', district: 'Indore', price: 4680, isBest: true },
      { market: 'Latur Yard', district: 'Latur', price: 4650, isBest: false }
    ],
    trendExplanation: 'Soybean up 1% on higher crush margin demand from oil extractors.'
  },

  // VEGETABLES
  {
    id: 'tomato',
    name: 'Tomato (Hybrid Red)',
    category: 'Vegetables',
    icon: '🍅',
    unit: 'quintal',
    currentPrice: 1850,
    previousPrice: 1950,
    minPrice: 1600,
    maxPrice: 2100,
    avgPrice: 1820,
    changePercentage: -5.13,
    trend: 'down',
    updatedAt: '11 Sep 2026, 08:30 AM',
    history7Days: [2200, 2150, 2050, 1980, 1950, 1900, 1850],
    history30Days: [2500, 2400, 2200, 2050, 1950, 1900, 1850],
    marketsComparison: [
      { market: 'Madanapalle Market', district: 'Annamayya', price: 1850, isBest: false },
      { market: 'Kolar APMC', district: 'Kolar', price: 1920, isBest: true },
      { market: 'Guntur Veg Yard', district: 'Guntur', price: 1800, isBest: false }
    ],
    trendExplanation: 'Tomato prices down 5% as heavy daily arrivals from Madanapalle hit mandis.'
  },
  {
    id: 'onion',
    name: 'Onion (Red Nashik)',
    category: 'Vegetables',
    icon: '🧅',
    unit: 'quintal',
    currentPrice: 2600,
    previousPrice: 2480,
    minPrice: 2300,
    maxPrice: 2850,
    avgPrice: 2550,
    changePercentage: 4.84,
    trend: 'up',
    updatedAt: '11 Sep 2026, 08:45 AM',
    history7Days: [2350, 2380, 2400, 2420, 2480, 2520, 2600],
    history30Days: [2100, 2200, 2300, 2380, 2480, 2520, 2600],
    marketsComparison: [
      { market: 'Lasalgaon Mandi', district: 'Nashik', price: 2650, isBest: true },
      { market: 'Kurnool APMC', district: 'Kurnool', price: 2580, isBest: false },
      { market: 'Guntur Market', district: 'Guntur', price: 2600, isBest: false }
    ],
    trendExplanation: 'Onion surged nearly 5% on strong out-of-state trade demand.'
  },
  {
    id: 'potato',
    name: 'Potato (Jyoti)',
    category: 'Vegetables',
    icon: '🥔',
    unit: 'quintal',
    currentPrice: 1650,
    previousPrice: 1640,
    minPrice: 1500,
    maxPrice: 1800,
    avgPrice: 1640,
    changePercentage: 0.61,
    trend: 'stable',
    updatedAt: '11 Sep 2026, 08:15 AM',
    history7Days: [1620, 1630, 1635, 1640, 1640, 1645, 1650],
    history30Days: [1550, 1580, 1600, 1620, 1640, 1645, 1650],
    marketsComparison: [
      { market: 'Agra Mandi', district: 'Agra', price: 1680, isBest: true },
      { market: 'Hooghly Yard', district: 'Hooghly', price: 1640, isBest: false }
    ],
    trendExplanation: 'Potato prices steady with controlled releases from cold storage.'
  },

  // FRUITS
  {
    id: 'banana',
    name: 'Banana (Grand Naine)',
    category: 'Fruits',
    icon: '🍌',
    unit: 'quintal',
    currentPrice: 1800,
    previousPrice: 1750,
    minPrice: 1600,
    maxPrice: 2000,
    avgPrice: 1780,
    changePercentage: 2.86,
    trend: 'up',
    updatedAt: '11 Sep 2026, 09:15 AM',
    history7Days: [1680, 1700, 1720, 1750, 1750, 1780, 1800],
    history30Days: [1550, 1600, 1650, 1700, 1750, 1780, 1800],
    marketsComparison: [
      { market: 'Tiruchirappalli APMC', district: 'Tiruchirappalli', price: 1850, isBest: true },
      { market: 'Anantapur Yard', district: 'Anantapur', price: 1800, isBest: false }
    ],
    trendExplanation: 'Banana gained nearly 3% on festival demand in South India.'
  },
  {
    id: 'mango',
    name: 'Mango (Banganapalli)',
    category: 'Fruits',
    icon: '🥭',
    unit: 'quintal',
    currentPrice: 4800,
    previousPrice: 4950,
    minPrice: 4300,
    maxPrice: 5300,
    avgPrice: 4820,
    changePercentage: -3.03,
    trend: 'down',
    updatedAt: '11 Sep 2026, 09:00 AM',
    history7Days: [5200, 5100, 5050, 4950, 4900, 4850, 4800],
    history30Days: [5800, 5500, 5300, 5100, 4950, 4850, 4800],
    marketsComparison: [
      { market: 'Vijayawada Fruit Market', district: 'Krishna', price: 4850, isBest: true },
      { market: 'Chittoor Yard', district: 'Chittoor', price: 4800, isBest: false }
    ],
    trendExplanation: 'Mango season entering late phase with lower arrivals.'
  }
];

export const CROP_QUICK_SEARCH_CHIPS = [
  { id: 'paddy', name: 'Paddy', icon: '🌾' },
  { id: 'chilli', name: 'Red Chilli', icon: '🌶️' },
  { id: 'cotton', name: 'Cotton', icon: '☁️' },
  { id: 'maize', name: 'Maize', icon: '🌽' },
  { id: 'turmeric', name: 'Turmeric', icon: '🟡' },
  { id: 'groundnut', name: 'Groundnut', icon: '🥜' },
  { id: 'turdal', name: 'Tur Dal', icon: '🫘' },
  { id: 'tomato', name: 'Tomato', icon: '🍅' },
  { id: 'onion', name: 'Onion', icon: '🧅' }
];
