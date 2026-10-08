/**
 * Farmer Connect Portal - Marketplace Service
 * Data management for Crop Listings and Buyer Offers with LocalStorage persistence.
 * Structured cleanly for future migration to AWS DynamoDB / S3 / Lambda APIs.
 */

const STORAGE_LISTINGS_KEY = 'fc_marketplace_listings';
const STORAGE_OFFERS_KEY = 'fc_marketplace_offers';

const SEED_LISTINGS = [
  {
    id: 'lst-101',
    userId: 'usr-farmer-demo',
    farmerName: 'Ramesh Babu',
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
    qualityNote: 'High quality, recently harvested, moisture content < 12%',
    harvestDate: '10 Sep 2026',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    village: 'Tenali',
    locationText: 'Tenali, Guntur, Andhra Pradesh',
    description: 'Freshly harvested high-quality paddy. Stored in dry warehouse. Ready for immediate mill dispatch.',
    contactPreference: 'Phone',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    status: 'active', // 'active', 'reserved', 'sold', 'expired'
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
    qualityNote: 'Deep red color, high pungency, sun-dried',
    harvestDate: '05 Sep 2026',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    village: 'Pattabhipuram',
    locationText: 'Pattabhipuram, Guntur, Andhra Pradesh',
    description: 'Export grade Teja red chilli. Properly stem-cut and cold-storage dried.',
    contactPreference: 'WhatsApp',
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80',
    status: 'active',
    createdAt: '10 Sep 2026, 02:15 PM'
  },
  {
    id: 'lst-103',
    userId: 'usr-farmer-3',
    farmerName: 'K. Subba Rao',
    farmerPhone: '+91 97012 33445',
    farmerRole: 'farmer',
    cropId: 'cotton',
    cropName: 'Cotton (Long Staple)',
    category: '🌿 Commercial Crops',
    quantity: 150,
    unit: 'Quintal',
    expectedPrice: 7200,
    minPrice: 7000,
    qualityGrade: 'Grade A',
    qualityNote: 'Clean lint, high staple length',
    harvestDate: '08 Sep 2026',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    village: 'Adoni',
    locationText: 'Adoni, Kurnool, Andhra Pradesh',
    description: 'First picking long staple cotton. Free from trash and leaf particles.',
    contactPreference: 'Phone',
    imageUrl: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&q=80',
    status: 'active',
    createdAt: '09 Sep 2026, 11:00 AM'
  },
  {
    id: 'lst-104',
    userId: 'usr-farmer-4',
    farmerName: 'M. Siva Kumar',
    farmerPhone: '+91 99890 11223',
    farmerRole: 'farmer',
    cropId: 'tomato',
    cropName: 'Tomato (Hybrid Red)',
    category: '🥬 Vegetables',
    quantity: 300,
    unit: 'Bags',
    expectedPrice: 1900,
    minPrice: 1800,
    qualityGrade: 'Standard',
    qualityNote: 'Firm fruit, bright red color',
    harvestDate: '11 Sep 2026',
    state: 'Andhra Pradesh',
    district: 'Annamayya',
    village: 'Madanapalle',
    locationText: 'Madanapalle, Annamayya, Andhra Pradesh',
    description: 'Fresh field harvested tomatoes packed in standard 25kg crates/bags.',
    contactPreference: 'Marketplace Chat',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    status: 'active',
    createdAt: '11 Sep 2026, 08:00 AM'
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
    message: 'We are interested in buying 200 quintals for immediate dispatch to our mill in Tenali.',
    status: 'pending', // 'pending', 'accepted', 'rejected'
    createdAt: '11 Sep 2026, 11:30 AM'
  }
];

export class MarketplaceService {
  constructor() {
    this.initStorage();
  }

  initStorage() {
    try {
      if (!localStorage.getItem(STORAGE_LISTINGS_KEY)) {
        localStorage.setItem(STORAGE_LISTINGS_KEY, JSON.stringify(SEED_LISTINGS));
      }
      if (!localStorage.getItem(STORAGE_OFFERS_KEY)) {
        localStorage.setItem(STORAGE_OFFERS_KEY, JSON.stringify(SEED_OFFERS));
      }
    } catch (e) {
      console.warn('LocalStorage unavailable in MarketplaceService:', e);
    }
  }

  getListings(filters = {}) {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_LISTINGS_KEY) || '[]');
      let result = data.filter(item => item.status !== 'deleted');

      // Status filter
      if (filters.status) {
        result = result.filter(item => item.status === filters.status);
      } else if (!filters.showAllStatus) {
        // By default show only active listings to buyers
        result = result.filter(item => item.status === 'active');
      }

      // User specific filter
      if (filters.userId) {
        result = result.filter(item => item.userId === filters.userId);
      }

      // Crop filter
      if (filters.crop && filters.crop !== 'All') {
        result = result.filter(item => 
          item.cropName.toLowerCase().includes(filters.crop.toLowerCase()) || 
          (item.cropId && item.cropId.toLowerCase() === filters.crop.toLowerCase())
        );
      }

      // Category filter
      if (filters.category && filters.category !== 'All') {
        result = result.filter(item => item.category === filters.category);
      }

      // District filter
      if (filters.district && filters.district !== 'All') {
        result = result.filter(item => item.district === filters.district || item.locationText.includes(filters.district));
      }

      // Search query filter
      if (filters.search) {
        const q = filters.search.toLowerCase().trim();
        result = result.filter(item => 
          item.cropName.toLowerCase().includes(q) ||
          item.farmerName.toLowerCase().includes(q) ||
          item.district.toLowerCase().includes(q) ||
          item.village.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
        );
      }

      return result;
    } catch (e) {
      return SEED_LISTINGS;
    }
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
        farmerName: user ? user.name : 'Ramesh Babu',
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
        village: listingData.village || (user ? user.village : 'Tenali'),
        locationText: `${listingData.village || 'Tenali'}, ${listingData.district || 'Guntur'}, ${listingData.state || 'Andhra Pradesh'}`,
        description: listingData.description || 'Quality agricultural produce.',
        contactPreference: listingData.contactPreference || 'Phone',
        imageUrl: listingData.imageUrl || 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
        status: 'active',
        createdAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };

      listings.unshift(newListing);
      localStorage.setItem(STORAGE_LISTINGS_KEY, JSON.stringify(listings));
      return { success: true, listing: newListing };
    } catch (e) {
      console.error('Error creating listing:', e);
      return { success: false, error: e.message };
    }
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
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  deleteListing(id) {
    return this.updateListing(id, { status: 'deleted' });
  }

  markAsSold(id) {
    return this.updateListing(id, { status: 'sold' });
  }

  // --- OFFERS ---
  getOffersForFarmer(farmerUserId) {
    try {
      const offers = JSON.parse(localStorage.getItem(STORAGE_OFFERS_KEY) || '[]');
      const userListings = this.getListings({ userId: farmerUserId, showAllStatus: true });
      const listingIds = userListings.map(l => l.id);
      return offers.filter(o => listingIds.includes(o.listingId));
    } catch (e) {
      return SEED_OFFERS;
    }
  }

  getOffersByBuyer(buyerUserId) {
    try {
      const offers = JSON.parse(localStorage.getItem(STORAGE_OFFERS_KEY) || '[]');
      return offers.filter(o => o.buyerUserId === buyerUserId);
    } catch (e) {
      return [];
    }
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
        message: offerData.message || 'I would like to negotiate procurement terms.',
        status: 'pending',
        createdAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };

      offers.unshift(newOffer);
      localStorage.setItem(STORAGE_OFFERS_KEY, JSON.stringify(offers));
      return { success: true, offer: newOffer };
    } catch (e) {
      return { success: false, error: e.message };
    }
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
    } catch (e) {
      return { success: false, error: e.message };
    }
  }
}

export const marketplaceService = new MarketplaceService();
