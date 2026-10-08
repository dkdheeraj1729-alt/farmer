/**
 * Farmer Connect Portal - Database Service
 * Supports Local Storage and is ready for Firebase Firestore Cloud Database integration.
 */

import { MOCK_MARKETPLACE_LISTINGS, MOCK_NOTIFICATIONS } from '../data/mockData.js';

// --- REAL CLOUD DATABASE CONFIG (Firebase Firestore) ---
// To activate real cloud syncing, add your Firebase Config here:
/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
*/
// ----------------------------------------------------

const STORAGE_KEY_LISTINGS = 'fc_dynamodb_marketplace_listings';
const STORAGE_KEY_NOTIFS = 'fc_dynamodb_notifications';
const STORAGE_KEY_SAVED_CALCS = 'fc_dynamodb_saved_calculations';

class DbService {
  constructor() {
    this.listings = this.loadListings();
    this.notifications = this.loadNotifications();
    this.savedCalculations = this.loadCalculations();
  }

  loadListings() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_LISTINGS);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('Error reading listings from localStorage:', e);
    }
    return [...MOCK_MARKETPLACE_LISTINGS];
  }

  saveListings() {
    try {
      localStorage.setItem(STORAGE_KEY_LISTINGS, JSON.stringify(this.listings));
    } catch (e) {
      console.error('Error saving listings:', e);
    }
  }

  loadNotifications() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_NOTIFS);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('Error reading notifications:', e);
    }
    return [...MOCK_NOTIFICATIONS];
  }

  saveNotifications() {
    try {
      localStorage.setItem(STORAGE_KEY_NOTIFS, JSON.stringify(this.notifications));
    } catch (e) {
      console.error('Error saving notifications:', e);
    }
  }

  loadCalculations() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_SAVED_CALCS);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('Error reading saved calculations:', e);
    }
    return [];
  }

  // --- Marketplace API (Simulates AWS DynamoDB PutItem / Scan) ---
  getListings(filters = {}) {
    let result = [...this.listings];

    if (filters.crop && filters.crop !== 'All') {
      const q = filters.crop.toLowerCase();
      result = result.filter(l => l.crop.toLowerCase().includes(q));
    }
    if (filters.district && filters.district !== 'All') {
      const q = filters.district.toLowerCase();
      result = result.filter(l => l.location.toLowerCase().includes(q));
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(l => 
        l.crop.toLowerCase().includes(q) ||
        l.farmerName.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.location.toLowerCase().includes(q)
      );
    }

    return result;
  }

  createListing(listingData) {
    const newListing = {
      listingId: `lst-${Date.now().toString(36)}`,
      farmerId: listingData.farmerId || 'usr-cognito-789012',
      farmerName: listingData.farmerName || 'Ramesh Babu',
      farmerPhone: listingData.farmerPhone || '+91 98480 12345',
      farmerVillage: listingData.farmerVillage || 'Tenali, Guntur',
      crop: listingData.crop || 'Paddy',
      quantity: listingData.quantity || '1,000 kg',
      price: parseFloat(listingData.price) || 25,
      totalPriceFormatted: listingData.totalPriceFormatted || `₹${(parseFloat(listingData.price || 25) * 1000).toLocaleString('en-IN')}`,
      location: listingData.location || 'Guntur, Andhra Pradesh',
      harvestDate: listingData.harvestDate || 'Ready Now',
      description: listingData.description || 'Farm-fresh quality produce.',
      imageUrl: listingData.imageUrl || 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
      verifiedFarmer: true,
      createdAt: 'Just now'
    };

    this.listings.unshift(newListing);
    this.saveListings();
    return { success: true, listing: newListing, awsTable: 'DynamoDB -> Table: MarketplaceListings' };
  }

  // --- Notifications API (Simulates AWS SNS -> DynamoDB) ---
  getNotifications() {
    return this.notifications;
  }

  markNotificationAsRead(id) {
    const item = this.notifications.find(n => n.id === id);
    if (item) {
      item.unread = false;
      this.saveNotifications();
    }
  }

  markAllNotificationsAsRead() {
    this.notifications.forEach(n => n.unread = false);
    this.saveNotifications();
  }

  getUnreadNotificationCount() {
    return this.notifications.filter(n => n.unread).length;
  }

  // --- Saved Calculations ---
  saveCalculation(calc) {
    const item = {
      id: `calc-${Date.now()}`,
      date: new Date().toLocaleDateString('en-IN'),
      ...calc
    };
    this.savedCalculations.unshift(item);
    try {
      localStorage.setItem(STORAGE_KEY_SAVED_CALCS, JSON.stringify(this.savedCalculations));
    } catch (e) {
      console.error('Error saving calculation:', e);
    }
    return item;
  }

  getSavedCalculations() {
    return this.savedCalculations;
  }
}

export const dbService = new DbService();
