/**
 * Farmer Connect Portal - Government Agriculture Schemes Service
 * Comprehensive guides for PM-KISAN, Rythu Bharosa, PMFBY, Soil Health Cards, and AIF.
 */

export const GOVT_AGRICULTURAL_SCHEMES = [
  {
    id: 'pm-kisan',
    title: 'PM-KISAN Samman Nidhi',
    benefitAmount: '₹6,000 / year',
    category: 'Direct Income Support',
    description: 'Financial benefit of ₹6,000 per year transferred in three equal installments of ₹2,000 directly into bank accounts of land-holding farmer families.',
    eligibility: 'All landholding farmer families with cultivable landholding in their names (Subject to exclusion criteria such as IT payers).',
    documentsRequired: ['Aadhaar Card', 'Land Ownership Records (Pahani / 1B)', 'Bank Account Passbook (Aadhaar linked)', 'Mobile Number'],
    howToApply: 'Self-registration via PM-KISAN Portal (pmkisan.gov.in) or through nearest Common Service Centre (CSC) / Meeseva.',
    officialPortalUrl: 'https://pmkisan.gov.in'
  },
  {
    id: 'ysr-rythu-bharosa',
    title: 'AP YSR Rythu Bharosa - PM KISAN',
    benefitAmount: '₹13,500 / year',
    category: 'State Financial Assistance',
    description: 'State government financial assistance to farmer families including tenant farmers (SC/ST/BC/Minority) to meet input expenses before sowing seasons.',
    eligibility: 'Farmer families in Andhra Pradesh owning agricultural land, plus eligible tenant farmers.',
    documentsRequired: ['Aadhaar Card', 'Ration Card / Rice Card', 'Land Title Deed / CCRC Tenant Card', 'Aadhaar Seeded Bank Account'],
    howToApply: 'Contact Village Agriculture Assistant (VAA) at Rythu Bharosa Kendra (RBK) in your village.',
    officialPortalUrl: 'https://rythubharosa.ap.gov.in'
  },
  {
    id: 'pmfby',
    title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    benefitAmount: 'Comprehensive Crop Insurance',
    category: 'Crop Risk Insurance',
    description: 'Comprehensive risk insurance coverage against yield loss caused by non-preventable natural risks (drought, dry spells, flood, pest & disease outbreak).',
    eligibility: 'All farmers growing notified crops in notified areas (Both loanee and non-loanee farmers). Premium: 2% Kharif, 1.5% Rabi.',
    documentsRequired: ['Land Sowing Certificate', 'Aadhaar Card', 'Bank Passbook', 'Land Revenue Receipt'],
    howToApply: 'Enroll through bank branch, CSC, insurance agent, or directly on National Crop Insurance Portal (pmfby.gov.in).',
    officialPortalUrl: 'https://pmfby.gov.in'
  },
  {
    id: 'soil-health-card',
    title: 'National Soil Health Card Scheme',
    benefitAmount: 'Free Soil Testing & NPK Advisory',
    category: 'Soil Management Advisory',
    description: 'Provides soil health cards to farmers every 2 years reporting 12 essential soil nutrients (N, P, K, S, Zn, Fe, Cu, Mn, Bo, pH, EC, OC) with crop-specific fertilizer recommendations.',
    eligibility: 'All farmers possessing agricultural land in India.',
    documentsRequired: ['Soil Sample from Field (Collected by Ag Officer)', 'Aadhaar Card', 'Land Khata Number'],
    howToApply: 'Contact Village Agriculture Officer or submit soil sample to local district Soil Testing Laboratory (STL).',
    officialPortalUrl: 'https://soilhealth.dac.gov.in'
  }
];

class SchemeService {
  getSchemes() { return GOVT_AGRICULTURAL_SCHEMES; }
  getSchemeById(id) { return GOVT_AGRICULTURAL_SCHEMES.find(s => s.id === id) || GOVT_AGRICULTURAL_SCHEMES[0]; }
}
export const schemeService = new SchemeService();
