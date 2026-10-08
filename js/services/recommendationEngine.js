/**
 * Farmer Connect Portal - Agronomical Crop Recommendation Engine
 * Rule-based expert system, structured so an ML recommendation model (e.g. AWS SageMaker) can be plugged in.
 */

export const SOIL_TYPES = [
  { id: 'black', name: 'Black Cotton Soil (Regur)', desc: 'High clay content, rich in calcium & potash, retains moisture well.' },
  { id: 'red', name: 'Red & Loamy Soil', desc: 'Well-drained, porous, rich in iron, responsive to organic manure.' },
  { id: 'alluvial', name: 'Alluvial River Bed Soil', desc: 'Highly fertile, silt-rich, ideal for paddy, sugarcane and cereals.' },
  { id: 'sandy', name: 'Sandy / Light Soil', desc: 'Fast draining, warm soil, suited for groundnut, pulses and millets.' }
];

export const SEASONS = [
  { id: 'kharif', name: 'Kharif (Monsoon: Jun - Oct)', months: 'June to October' },
  { id: 'rabi', name: 'Rabi (Winter: Nov - Mar)', months: 'November to March' },
  { id: 'zaid', name: 'Zaid (Summer: Apr - May)', months: 'April to May' }
];

export const WATER_AVAILABILITY = [
  { id: 'high', name: 'High (Canal / Abundant Borewell)', desc: 'Assured continuous irrigation water available.' },
  { id: 'medium', name: 'Medium (Borewell / Drip System)', desc: 'Controlled water supply suitable for micro-irrigation.' },
  { id: 'low', name: 'Low (Rainfed / Dryland)', desc: 'Dependent mainly on seasonal rainfall.' }
];

const CROP_DATABASE = [
  {
    id: 'paddy',
    name: 'Paddy (Rice - Sona Masoori / BPT 5204)',
    category: 'Cereals',
    stars: 5,
    matchScore: 95,
    seasons: ['kharif', 'rabi'],
    soils: ['alluvial', 'black', 'red'],
    waterReq: 'high',
    durationDays: '135 - 150 days',
    waterReqText: 'High (1200 - 1400 mm)',
    suitableSoilText: 'Clayey alluvial or moisture-retentive black soil',
    estimatedValuePerAcre: '₹50,600 - ₹58,000',
    farmingTips: 'Maintain 2-5 cm standing water during tillering. Apply Neem-coated Urea in 3 split doses.',
    marketDemand: 'Very High (Steady APMC Mandi demand & export demand)'
  },
  {
    id: 'chilli',
    name: 'Teja Red Chilli',
    category: 'Spices',
    stars: 5,
    matchScore: 92,
    seasons: ['kharif', 'rabi'],
    soils: ['black', 'red'],
    waterReq: 'medium',
    durationDays: '160 - 180 days',
    waterReqText: 'Medium (600 - 800 mm, Drip recommended)',
    suitableSoilText: 'Well-drained deep black cotton soil or red loams',
    estimatedValuePerAcre: '₹1,40,000 - ₹2,10,000',
    farmingTips: 'Use raise bed nursery seedlings. Drip irrigation prevents fruit rot and collar rot diseases.',
    marketDemand: 'Extremely High (Guntur Mirchi Yard premium market)'
  },
  {
    id: 'cotton',
    name: 'Bt Cotton (Hybrid)',
    category: 'Commercial',
    stars: 4,
    matchScore: 88,
    seasons: ['kharif'],
    soils: ['black', 'red'],
    waterReq: 'medium',
    durationDays: '150 - 170 days',
    waterReqText: 'Medium (700 - 900 mm)',
    suitableSoilText: 'Deep black soils with good water holding capacity',
    estimatedValuePerAcre: '₹85,000 - ₹1,05,000',
    farmingTips: 'Maintain proper 90cm x 60cm spacing. Spray yellow sticky traps for pink bollworm management.',
    marketDemand: 'High (Textile mills & Cotton Corporation of India procurement)'
  },
  {
    id: 'maize',
    name: 'Hybrid Yellow Maize',
    category: 'Cereals',
    stars: 4,
    matchScore: 85,
    seasons: ['kharif', 'rabi', 'zaid'],
    soils: ['alluvial', 'red', 'sandy', 'black'],
    waterReq: 'medium',
    durationDays: '100 - 110 days',
    waterReqText: 'Moderate (500 - 600 mm)',
    suitableSoilText: 'Well-drained loamy or sandy loam soils',
    estimatedValuePerAcre: '₹48,000 - ₹58,000',
    farmingTips: 'Requires 2-3 weedings in early stage. Excellent crop rotation after paddy or chilli.',
    marketDemand: 'High (Poultry feed & starch industries)'
  },
  {
    id: 'turmeric',
    name: 'Curcumin-rich Turmeric',
    category: 'Spices',
    stars: 4,
    matchScore: 84,
    seasons: ['kharif'],
    soils: ['red', 'alluvial', 'black'],
    waterReq: 'medium',
    durationDays: '210 - 240 days',
    waterReqText: 'Medium to High (800 - 1000 mm)',
    suitableSoilText: 'Friable sandy loam or clay loam rich in organic matter',
    estimatedValuePerAcre: '₹1,20,000 - ₹1,60,000',
    farmingTips: 'Mulch heavily with green leaves right after planting to preserve moisture and suppress weeds.',
    marketDemand: 'High (Duggirala & Nizamabad specialty spice yards)'
  },
  {
    id: 'groundnut',
    name: 'Groundnut (Spanish Bunch)',
    category: 'Oilseeds',
    stars: 4,
    matchScore: 82,
    seasons: ['kharif', 'rabi', 'zaid'],
    soils: ['sandy', 'red'],
    waterReq: 'low',
    durationDays: '105 - 115 days',
    waterReqText: 'Low to Moderate (400 - 500 mm)',
    suitableSoilText: 'Light sandy loams or well-drained red soils',
    estimatedValuePerAcre: '₹55,000 - ₹72,000',
    farmingTips: 'Apply Gypsum @ 200 kg/acre during peg formation stage for superior pod development and oil content.',
    marketDemand: 'High (Oil extraction mills & snack processing units)'
  }
];

export class RecommendationEngine {
  static getRecommendations(params) {
    const { season = 'kharif', soil = 'black', water = 'medium', farmSize = 3 } = params;

    const scoredCrops = CROP_DATABASE.map(crop => {
      let score = 70; // baseline

      if (crop.seasons.includes(season)) score += 15;
      if (crop.soils.includes(soil)) score += 10;
      if (crop.waterReq === water) score += 10;
      else if (water === 'high' && crop.waterReq === 'medium') score += 5;
      else if (water === 'low' && crop.waterReq === 'high') score -= 25;

      // Adjust match score percentage capped between 50 and 98
      const finalScore = Math.min(98, Math.max(50, score));
      let stars = 3;
      if (finalScore >= 90) stars = 5;
      else if (finalScore >= 80) stars = 4;

      return {
        ...crop,
        matchScore: finalScore,
        stars
      };
    });

    // Sort by highest match score
    scoredCrops.sort((a, b) => b.matchScore - a.matchScore);
    return scoredCrops;
  }
}
