/**
 * Farmer Connect Portal - Farmer Profile & Settings Component
 * Profile editor, AWS Cognito User Pool identity metadata, local storage sync.
 */

import { authService } from '../services/authService.js';
import { INDIAN_DISTRICTS } from '../data/mockData.js';

export function renderProfilePage() {
  const user = authService.getCurrentUser();

  return `
    <div class="fc-profile-page" style="max-width: 800px; margin: 0 auto;">
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 28px; font-weight: 800; color: #14532d; display: flex; align-items: center; gap: 10px;">
          👨‍🌾 Farmer Profile & Settings
        </h1>
        <p style="color: #64748b; font-size: 14px;">
          Manage your personal details, location preferences, and AWS Cognito identity status.
        </p>
      </div>

      <!-- User Header Banner Card -->
      <div style="background: linear-gradient(135deg, #15803d, #14532d); color: white; border-radius: 20px; padding: 28px; margin-bottom: 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; box-shadow: 0 10px 25px -5px rgba(20,83,45,0.3);">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div style="width: 64px; height: 64px; background: rgba(255,255,255,0.2); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 800; border: 2px solid rgba(255,255,255,0.4);">
            ${user.name.charAt(0)}
          </div>
          <div>
            <h2 style="font-size: 24px; font-weight: 800; color: white;">${user.name}</h2>
            <div style="font-size: 14px; color: #bbf7d0; margin-top: 2px;">
              📍 ${user.village}, ${user.district}, ${user.state}
            </div>
            <div style="font-size: 11px; background: rgba(255,255,255,0.15); padding: 2px 10px; border-radius: 12px; display: inline-block; margin-top: 6px;">
              Role: <strong>${user.role === 'farmer' ? '👨‍🌾 Registered Farmer' : '🛒 Produce Buyer'}</strong>
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 10px;">
          <button class="fc-btn fc-btn-secondary fc-btn-sm" style="background: white;" onclick="window.fcLogout()">
            Logout 🚪
          </button>
        </div>
      </div>

      <!-- EDIT PROFILE FORM CARD -->
      <div class="fc-card" style="margin-bottom: 28px;">
        <div class="fc-card-title" style="margin-bottom: 18px;">
          <span>📝</span> Edit Personal & Agricultural Info
        </div>

        <form onsubmit="event.preventDefault(); window.fcSubmitProfileUpdate();">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div class="fc-form-group">
              <label class="fc-label">Full Name</label>
              <input type="text" id="prof-name" class="fc-input" value="${user.name}" required />
            </div>
            <div class="fc-form-group">
              <label class="fc-label">Phone Number</label>
              <input type="tel" id="prof-phone" class="fc-input" value="${user.phone}" required />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div class="fc-form-group">
              <label class="fc-label">Email Address</label>
              <input type="email" id="prof-email" class="fc-input" value="${user.email}" />
            </div>
            <div class="fc-form-group">
              <label class="fc-label">Farm Size (Acres)</label>
              <input type="number" step="0.1" id="prof-farm" class="fc-input" value="${user.farmSize}" required />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div class="fc-form-group">
              <label class="fc-label">State</label>
              <select id="prof-state" class="fc-select">
                <option value="Andhra Pradesh" ${user.state === 'Andhra Pradesh' ? 'selected' : ''}>Andhra Pradesh</option>
                <option value="Telangana" ${user.state === 'Telangana' ? 'selected' : ''}>Telangana</option>
                <option value="Tamil Nadu" ${user.state === 'Tamil Nadu' ? 'selected' : ''}>Tamil Nadu</option>
              </select>
            </div>
            <div class="fc-form-group">
              <label class="fc-label">District</label>
              <select id="prof-district" class="fc-select">
                ${INDIAN_DISTRICTS.map(d => `<option value="${d.name}" ${d.name === user.district ? 'selected' : ''}>${d.name}</option>`).join('')}
              </select>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div class="fc-form-group">
              <label class="fc-label">Village / Mandal</label>
              <input type="text" id="prof-village" class="fc-input" value="${user.village}" required />
            </div>
            <div class="fc-form-group">
              <label class="fc-label">Main Crops Grown</label>
              <input type="text" id="prof-crops" class="fc-input" value="${Array.isArray(user.mainCrops) ? user.mainCrops.join(', ') : user.mainCrops}" required />
            </div>
          </div>

          <button type="submit" class="fc-btn fc-btn-primary" style="margin-top: 8px;">
            Update Profile Information 💾
          </button>
        </form>
      </div>

      <!-- AWS COGNITO IDENTITY DETAILS -->
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 16px; padding: 20px;">
        <div style="font-size: 14px; font-weight: 800; color: #0284c7; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
          <span>☁️</span> AWS Cognito Identity Token Details
        </div>
        <div style="font-size: 12px; color: #64748b; font-family: monospace; word-break: break-all; background: white; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 10px;">
          Sub ID: ${user.userId}<br/>
          Token: ${user.cognitoIdToken || 'cognito-id-token-valid'}<br/>
          Pool ID: ap-south-1_FarmerUserPool<br/>
          Session Status: Active AWS Cognito Authenticated Session
        </div>
        <div style="font-size: 11px; color: #94a3b8;">
          All user metadata updates are synchronized with Amazon DynamoDB via AWS API Gateway.
        </div>
      </div>
    </div>
  `;
}
