/**
 * Farmer Connect Portal - Landing Page Component
 */

export function renderLandingPage() {
  const features = [
    { id: 'weather', icon: '🌦️', title: 'Live Weather', desc: 'Hyper-local weather forecasts and rainfall alerts tailored for your agricultural region.' },
    { id: 'prices', icon: '💰', title: 'Crop Prices', desc: 'Real-time regional mandi market prices with 7-day trend indicators and price surge alerts.' },
    { id: 'recommendation', icon: '🌱', title: 'Crop Recommendations', desc: 'Smart agronomical advice based on soil type, water availability, and seasonal demand.' },
    { id: 'calculator', icon: '🧮', title: 'Farm Calculator', iconColor: '#9333ea', desc: 'Calculate total investment, expected yield revenue, and net profit before sowing.' },
    { id: 'marketplace', icon: '🛒', title: 'Farmer Marketplace', desc: 'Direct farmer-to-buyer marketplace to sell produce without middleman commission.' },
    { id: 'services', icon: '📍', title: 'Nearby Services', desc: 'Locate seed suppliers, fertilizer shops, tractor rentals, cold storage, and government offices.' }
  ];

  const whyPoints = [
    { title: 'Simple', desc: 'Large readable text, clear icons, and intuitive design built specifically for Indian farmers.', icon: '✨' },
    { title: 'Affordable', desc: 'Free digital access to critical agricultural data to eliminate unnecessary farming costs.', icon: '🏷️' },
    { title: 'Location-Based', desc: 'Personalized advisories based on your specific district, village, and local soil conditions.', icon: '📍' },
    { title: 'Real-Time Info', desc: 'Instant updates on weather alerts and APMC mandi price fluctuations.', icon: '⚡' },
    { title: 'Farmer-Focused', desc: 'Designed to put control back into the hands of small and marginal farmers.', icon: '👨‍🌾' }
  ];

  return `
    <div class="fc-landing">
      <!-- Hero Section -->
      <section class="fc-hero">
        <div class="fc-hero-grid">
          <div>
            <div class="fc-hero-badge">
              <span>🌾</span> Welcome to Farmer Connect Portal
            </div>
            <h1>Farmer Connect Portal</h1>
            <p style="font-size: 24px; font-weight: 700; color: #86efac; margin-bottom: 12px;">
              “Smart information for smarter farming.”
            </p>
            <p>
              Get live weather updates, regional crop prices, farming insights and useful agricultural services — all in one place.
            </p>
            <div class="fc-hero-actions">
              <button class="fc-btn fc-btn-accent fc-btn-lg" onclick="window.fcNavigate('dashboard')">
                Get Started 🚀
              </button>
              <button class="fc-btn fc-btn-secondary fc-btn-lg" onclick="window.fcNavigate('auth')">
                Login / Sign Up 👨‍🌾
              </button>
            </div>
          </div>
          <div>
            <div class="fc-hero-img-card">
              <img 
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80" 
                alt="Modern Digital Farming Concept"
                class="fc-hero-img" 
              />
              <div style="font-size: 13px; color: rgba(255,255,255,0.9); margin-top: 10px; font-weight: 600;">
                Empowering Indian Farmers with Smart Agricultural Intelligence
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section style="margin-bottom: 48px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h2 style="font-size: 30px; font-weight: 800; color: #14532d; margin-bottom: 8px;">
            Comprehensive Agricultural Services
          </h2>
          <p style="color: #64748b; font-size: 16px; max-width: 600px; margin: 0 auto;">
            Everything a modern farmer needs for better yield, higher profit, and informed decisions.
          </p>
        </div>

        <div class="fc-feature-grid">
          ${features.map(f => `
            <div class="fc-feature-card" onclick="window.fcNavigate('${f.id}')">
              <div class="fc-feature-icon">${f.icon}</div>
              <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px; color: #0f172a;">${f.title}</h3>
              <p style="color: #64748b; font-size: 14px; line-height: 1.5;">${f.desc}</p>
              <div style="margin-top: 16px; font-weight: 700; font-size: 14px; color: #16a34a; display: flex; align-items: center; gap: 4px;">
                Explore ${f.title} →
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Why Farmer Connect Section -->
      <section style="background: white; border-radius: 24px; padding: 40px 32px; border: 1px solid #e2e8f0; margin-bottom: 48px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.03);">
        <div style="max-width: 800px; margin: 0 auto; text-align: center; margin-bottom: 36px;">
          <span style="background: #f0fdf4; color: #16a34a; font-weight: 800; font-size: 13px; padding: 6px 14px; border-radius: 20px; text-transform: uppercase;">
            Why Choose Us
          </span>
          <h2 style="font-size: 32px; font-weight: 800; color: #14532d; margin-top: 12px; margin-bottom: 10px;">
            Why Farmer Connect?
          </h2>
          <p style="color: #64748b; font-size: 16px;">
            Designed specifically for the ground realities of Indian agriculture.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px;">
          ${whyPoints.map(wp => `
            <div style="background: #f8fafc; border-radius: 16px; padding: 24px; border: 1px solid #f1f5f9;">
              <div style="font-size: 32px; margin-bottom: 12px;">${wp.icon}</div>
              <h4 style="font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">${wp.title}</h4>
              <p style="font-size: 14px; color: #64748b; line-height: 1.5;">${wp.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Final Call to Action -->
      <section style="background: linear-gradient(135deg, #15803d, #166534); border-radius: 24px; padding: 48px 32px; text-align: center; color: white; box-shadow: 0 20px 40px -15px rgba(21, 128, 61, 0.4);">
        <h2 style="font-size: 32px; font-weight: 800; color: white; margin-bottom: 12px;">
          Make better farming decisions with better information.
        </h2>
        <p style="font-size: 18px; color: #dcfce7; max-width: 650px; margin: 0 auto 28px;">
          Join thousands of farmers across Andhra Pradesh, Telangana, and Southern India using Farmer Connect Portal daily.
        </p>
        <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
          <button class="fc-btn fc-btn-accent fc-btn-lg" onclick="window.fcNavigate('dashboard')">
            Open Farmer Dashboard 👨‍🌾
          </button>
          <button class="fc-btn fc-btn-secondary fc-btn-lg" onclick="window.fcNavigate('auth')">
            Create Account
          </button>
        </div>
      </section>
    </div>
  `;
}
