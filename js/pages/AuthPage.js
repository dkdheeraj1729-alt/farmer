/**
 * Farmer Connect Portal - AWS Cognito Compatible Auth Component
 * Handles Login & Signup for Farmers and Buyers
 */

import { authService } from '../services/authService.js';
import { INDIAN_DISTRICTS } from '../data/mockData.js';

export function renderAuthPage(activeTab = 'login', role = 'farmer') {
  const currentUser = authService.getCurrentUser();

  return `
    <div style="max-width: 520px; margin: 20px auto;">
      <div class="fc-card" style="padding: 32px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="width: 56px; height: 56px; background: #f0fdf4; color: #16a34a; border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 12px;">
            🔑
          </div>
          <h2 style="font-size: 24px; font-weight: 800; color: #14532d;">
            ${activeTab === 'login' ? 'Welcome Back to Farmer Connect' : 'Create Your Farmer Account'}
          </h2>
          <p style="font-size: 13px; color: #64748b; margin-top: 4px;">
            ⚡ AWS Cognito User Pool Secured Authentication
          </p>
        </div>

        <!-- Role Selector Switcher -->
        <div style="background: #f1f5f9; padding: 4px; border-radius: 12px; display: flex; gap: 4px; margin-bottom: 24px;">
          <button 
            type="button"
            class="fc-btn"
            style="flex: 1; padding: 8px; font-size: 13px; border-radius: 8px; background: ${role === 'farmer' ? 'white' : 'transparent'}; color: ${role === 'farmer' ? '#15803d' : '#64748b'}; box-shadow: ${role === 'farmer' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'};"
            onclick="window.fcSetAuthRole('farmer')"
          >
            👨‍🌾 Farmer
          </button>
          <button 
            type="button"
            class="fc-btn"
            style="flex: 1; padding: 8px; font-size: 13px; border-radius: 8px; background: ${role === 'buyer' ? 'white' : 'transparent'}; color: ${role === 'buyer' ? '#15803d' : '#64748b'}; box-shadow: ${role === 'buyer' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'};"
            onclick="window.fcSetAuthRole('buyer')"
          >
            🛒 Buyer / Trader
          </button>
        </div>

        <!-- Tab Selector: Login vs Signup -->
        <div style="display: flex; border-bottom: 2px solid #e2e8f0; margin-bottom: 24px;">
          <div 
            style="flex: 1; text-align: center; padding: 10px; font-weight: 700; cursor: pointer; color: ${activeTab === 'login' ? '#16a34a' : '#64748b'}; border-bottom: 3px solid ${activeTab === 'login' ? '#16a34a' : 'transparent'}; font-size: 15px;"
            onclick="window.fcSetAuthTab('login')"
          >
            Login
          </div>
          <div 
            style="flex: 1; text-align: center; padding: 10px; font-weight: 700; cursor: pointer; color: ${activeTab === 'signup' ? '#16a34a' : '#64748b'}; border-bottom: 3px solid ${activeTab === 'signup' ? '#16a34a' : 'transparent'}; font-size: 15px;"
            onclick="window.fcSetAuthTab('signup')"
          >
            Sign Up
          </div>
        </div>

        ${activeTab === 'login' ? `
          <!-- Login Form -->
          <form onsubmit="event.preventDefault(); window.fcSubmitLogin();">
            <div class="fc-form-group">
              <label class="fc-label">Phone Number or Email</label>
              <input type="text" id="auth-identifier" class="fc-input" placeholder="e.g. +91 98480 12345 or farmer@domain.com" required value="+91 98480 12345" />
            </div>

            <div class="fc-form-group">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <label class="fc-label">Password</label>
                <a href="#" onclick="alert('Password reset link sent to your registered mobile via SMS (AWS SNS)'); return false;" style="font-size: 12px; color: #16a34a; font-weight: 600;">Forgot Password?</a>
              </div>
              <input type="password" id="auth-password" class="fc-input" placeholder="••••••••" required value="password123" />
            </div>

            <button type="submit" class="fc-btn fc-btn-primary" style="width: 100%; margin-top: 8px;">
              Login as ${role === 'farmer' ? 'Farmer' : 'Buyer'} ➔
            </button>
          </form>
        ` : `
          <!-- Signup Form -->
          <form onsubmit="event.preventDefault(); window.fcSubmitSignup();">
            <div class="fc-form-group">
              <label class="fc-label">Full Name</label>
              <input type="text" id="signup-name" class="fc-input" placeholder="e.g. Ramesh Babu" required value="Srinivas K." />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div class="fc-form-group">
                <label class="fc-label">Phone Number</label>
                <input type="tel" id="signup-phone" class="fc-input" placeholder="+91 98480 00000" required value="+91 98480 99887" />
              </div>
              <div class="fc-form-group">
                <label class="fc-label">Email Address</label>
                <input type="email" id="signup-email" class="fc-input" placeholder="farmer@example.com" value="srinivas@example.in" />
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div class="fc-form-group">
                <label class="fc-label">State</label>
                <select id="signup-state" class="fc-select">
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Karnataka">Karnataka</option>
                </select>
              </div>
              <div class="fc-form-group">
                <label class="fc-label">District</label>
                <select id="signup-district" class="fc-select">
                  ${INDIAN_DISTRICTS.map(d => `<option value="${d.name}" ${d.name === 'Guntur' ? 'selected' : ''}>${d.name}</option>`).join('')}
                </select>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div class="fc-form-group">
                <label class="fc-label">Village / Mandal</label>
                <input type="text" id="signup-village" class="fc-input" placeholder="e.g. Tenali" value="Tenali" />
              </div>
              <div class="fc-form-group">
                <label class="fc-label">${role === 'farmer' ? 'Farm Size (Acres)' : 'Business Name'}</label>
                <input type="text" id="signup-farm" class="fc-input" placeholder="${role === 'farmer' ? '4.5' : 'Sri Lakshmi Traders'}" value="${role === 'farmer' ? '4.5' : 'AP Ag Traders'}" />
              </div>
            </div>

            <div class="fc-form-group">
              <label class="fc-label">Main Crops Grown / Purchased</label>
              <input type="text" id="signup-crops" class="fc-input" placeholder="Paddy, Red Chilli, Cotton" value="Paddy, Chilli" />
            </div>

            <div class="fc-form-group">
              <label class="fc-label">Create Password</label>
              <input type="password" id="signup-password" class="fc-input" placeholder="••••••••" required value="SecurePass123!" />
            </div>

            <button type="submit" class="fc-btn fc-btn-primary" style="width: 100%; margin-top: 8px;">
              Create ${role === 'farmer' ? 'Farmer' : 'Buyer'} Account ➔
            </button>
          </form>
        `}

        <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #64748b;">
          🛡️ Identity managed by AWS Cognito User Pools with MFA support.
        </div>
      </div>
    </div>
  `;
}
