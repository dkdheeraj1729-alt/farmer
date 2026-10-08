/**
 * Farmer Connect Portal - Mobile Bottom Navigation Component
 * Provides touch-optimized 5-tab navigation bar on mobile screens.
 */

export function renderMobileNav(activePage) {
  const items = [
    { id: 'dashboard', label: 'Home', icon: '🏠' },
    { id: 'weather', label: 'Weather', icon: '🌦️' },
    { id: 'prices', label: 'Prices', icon: '💰' },
    { id: 'marketplace', label: 'Market', icon: '🛒' },
    { id: 'profile', label: 'Profile', icon: '👤' }
  ];

  return `
    <div class="fc-mobile-nav">
      ${items.map(item => `
        <button 
          class="fc-mobile-nav-btn ${activePage === item.id ? 'active' : ''}"
          onclick="window.fcNavigate('${item.id}')"
        >
          <span class="icon">${item.icon}</span>
          <span>${item.label}</span>
        </button>
      `).join('')}
    </div>
  `;
}
