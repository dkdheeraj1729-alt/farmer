/**
 * Farmer Connect Portal - Regional Crop Market Price Service
 * Structured for AWS API Gateway + Agmarknet API integration
 */

import { MOCK_CROP_PRICES, CROPS_CATALOG, INDIAN_DISTRICTS } from '../data/mockData.js';

class MarketPriceService {
  constructor() {
    this.prices = [...MOCK_CROP_PRICES];
  }

  getPrices(filters = {}) {
    let result = [...this.prices];

    if (filters.state && filters.state !== 'All') {
      result = result.filter(p => p.state.toLowerCase() === filters.state.toLowerCase());
    }
    if (filters.district && filters.district !== 'All') {
      result = result.filter(p => p.district.toLowerCase() === filters.district.toLowerCase());
    }
    if (filters.cropId && filters.cropId !== 'All') {
      result = result.filter(p => p.cropId === filters.cropId);
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(p => 
        p.cropName.toLowerCase().includes(q) || 
        p.market.toLowerCase().includes(q) || 
        p.district.toLowerCase().includes(q)
      );
    }

    return result;
  }

  getCropSummaryList() {
    return CROPS_CATALOG;
  }

  getStates() {
    const states = new Set(this.prices.map(p => p.state));
    return ['All', ...Array.from(states)];
  }

  getDistricts() {
    return ['All', ...INDIAN_DISTRICTS.map(d => d.name)];
  }

  getPriceById(cropId) {
    return this.prices.find(p => p.cropId === cropId) || this.prices[0];
  }
}

export const marketPriceService = new MarketPriceService();
