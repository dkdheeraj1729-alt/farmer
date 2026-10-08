/**
 * Farmer Connect Portal - AWS Cognito Compatible Auth Service
 * Simulates user sessions, Cognito User Pool tokens, role-based profiles (Farmer / Buyer)
 */

const STORAGE_KEY_USER = 'fc_current_user';

const DEFAULT_FARMER_USER = {
  userId: 'usr-cognito-789012',
  name: 'Ramesh Babu',
  email: 'ramesh.farmer@example.in',
  phone: '+91 98480 12345',
  role: 'farmer', // 'farmer' | 'buyer'
  state: 'Andhra Pradesh',
  district: 'Guntur',
  village: 'Tenali',
  farmSize: 4.5, // acres
  mainCrops: ['Paddy', 'Chilli', 'Cotton'],
  cognitoIdToken: 'eyJraWQiOiJjb2duaXRvLW1vY2stdG9rZW4tc2FtcGxlIn0...',
  isLoggedIn: true,
  createdAt: '2026-01-15T08:30:00Z'
};

class AuthService {
  constructor() {
    this.currentUser = this.loadUser();
    this.listeners = [];
  }

  loadUser() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_USER);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Error loading user from localStorage:', e);
    }
    return DEFAULT_FARMER_USER;
  }

  saveUser(user) {
    this.currentUser = user;
    try {
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
    } catch (e) {
      console.error('Error saving user:', e);
    }
    this.notifyListeners();
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isLoggedIn() {
    return this.currentUser && this.currentUser.isLoggedIn;
  }

  login({ identifier, password, role = 'farmer' }) {
    // Simulates AWS Cognito InitiateAuth API
    const user = {
      ...DEFAULT_FARMER_USER,
      email: identifier.includes('@') ? identifier : `${identifier}@farmerconnect.in`,
      phone: identifier.includes('@') ? '+91 98480 12345' : identifier,
      role: role,
      isLoggedIn: true,
      cognitoIdToken: `cognito-token-${Date.now()}`
    };
    this.saveUser(user);
    return { success: true, user, message: 'Successfully authenticated via AWS Cognito' };
  }

  signup(formData) {
    // Simulates AWS Cognito SignUp API
    const newUser = {
      userId: `usr-cognito-${Date.now().toString(36)}`,
      name: formData.name || 'New Farmer',
      email: formData.email || '',
      phone: formData.phone || '',
      role: formData.role || 'farmer',
      state: formData.state || 'Andhra Pradesh',
      district: formData.district || 'Guntur',
      village: formData.village || 'Village',
      farmSize: parseFloat(formData.farmSize) || 3.0,
      mainCrops: formData.mainCrops ? formData.mainCrops.split(',').map(c => c.trim()) : ['Paddy'],
      cognitoIdToken: `cognito-token-${Date.now()}`,
      isLoggedIn: true,
      createdAt: new Date().toISOString()
    };
    this.saveUser(newUser);
    return { success: true, user: newUser, message: 'Account created successfully in AWS Cognito User Pool!' };
  }

  logout() {
    const loggedOutUser = { ...this.currentUser, isLoggedIn: false };
    this.saveUser(loggedOutUser);
    return { success: true };
  }

  updateProfile(updates) {
    const updatedUser = {
      ...this.currentUser,
      ...updates
    };
    this.saveUser(updatedUser);
    return { success: true, user: updatedUser };
  }

  switchRole(role) {
    if (this.currentUser) {
      this.updateProfile({ role });
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach(l => l(this.currentUser));
  }
}

export const authService = new AuthService();
