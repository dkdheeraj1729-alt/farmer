/**
 * Farmer Connect Portal - Main Header & Navigation Component
 */

import { authService } from '../services/authService.js';
import { dbService } from '../services/dbService.js';

export function renderHeader(activePage, navigateTo, openNotificationDrawer, openAiAssistant, openAwsModal) {
  const currentUser = authService.getCurrentUser();
  const unreadCount = dbService.getUnreadNotificationCount();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'weather', label: 'Weather', icon: '🌦️' },
    { id: 'prices', label: 'Market Prices', icon: '💰' },
    { id: 'recommendation', label: 'Crop Advisor', icon: '🌱' },
    { id: 'calculator', label: 'Farm Calculator', icon: '🧮' },
    { id: 'marketplace', label: 'Marketplace', icon: '🛒' },
    { id: 'services', label: 'Ag Services', icon: '📍' }
  ];

  return `
    <header class="fc-header">
      <div class="fc-header-inner">
        <div class="fc-brand" onclick="window.fcNavigate('landing')">
          <div class="fc-brand-icon">🌱</div>
          <div>
            <div class="fc-brand-title">FARMER CONNECT</div>
            <div class="fc-brand-tagline">Better Information. Better Farming.</div>
          </div>
        </div>

        <nav class="fc-nav-links">
          ${navItems.map(item => `
            <div 
              class="fc-nav-item ${activePage === item.id ? 'active' : ''}"
              onclick="window.fcNavigate('${item.id}')"
            >
              <span>${item.icon}</span> ${item.label}
            </div>
          `).join('')}
        </nav>

        <div class="fc-header-actions">
          <!-- AWS Cloud Architecture Button -->
          <button 
            class="fc-btn fc-btn-secondary fc-btn-sm" 
            onclick="window.fcOpenAwsModal()"
            title="AWS Cloud Architecture Overview"
            style="display: flex; align-items: center; gap: 6px; border-color: #f97316; color: #c2410c; background: #fff7ed;"
          >
            <span>☁️</span> <span class="fc-hide-mobile">AWS Architecture</span>
          </button>

          <!-- AI Farmer Assistant Trigger -->
          <button 
            class="fc-badge-button" 
            onclick="window.fcOpenAiAssistant()"
            title="AI Farmer Assistant"
            style="background: #f0fdf4; border-color: #86efac; color: #16a34a;"
          >
            🤖
          </button>

          <!-- Notification Bell -->
          <button 
            class="fc-badge-button" 
            onclick="window.fcOpenNotificationDrawer()"
            title="Notifications (AWS SNS)"
          >
            🔔
            ${unreadCount > 0 ? `<span class="fc-notification-badge">${unreadCount}</span>` : ''}
          </button>

          <!-- Profile / User Pill -->
          ${currentUser.isLoggedIn ? `
            <div class="fc-user-pill" onclick="window.fcNavigate('profile')">
              <div class="fc-avatar">${currentUser.name.charAt(0)}</div>
              <div class="fc-hide-mobile-block" style="text-align: left;">
                <div style="font-size: 13px; font-weight: 700; color: #15803d; line-height: 1;">${currentUser.name}</div>
                <div style="font-size: 10px; color: #64748b;">${currentUser.role === 'farmer' ? '👨‍🌾 Farmer' : '🛒 Buyer'} • ${currentUser.district}</div>
              </div>
            </div>
          ` : `
            <button class="fc-btn fc-btn-primary fc-btn-sm" onclick="window.fcNavigate('auth')">
              Login / Sign Up
            </button>
          `}
        </div>
      </div>
    </header>
  `;
}
