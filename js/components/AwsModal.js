/**
 * Farmer Connect Portal - AWS Cloud Architecture Modal Component
 * Interactive visual breakdown demonstrating AWS Cloud Readiness for deployment evaluation.
 */

export function renderAwsModal(isOpen, onClose) {
  if (!isOpen) return '';

  return `
    <div class="fc-modal-overlay" onclick="if(event.target === this) window.fcCloseAwsModal()">
      <div class="fc-modal-content" style="max-width: 780px; padding: 32px;">
        <button class="fc-modal-close" onclick="window.fcCloseAwsModal()">✕</button>

        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px;">
          <div style="width: 50px; height: 50px; background: #fff7ed; border: 1px solid #ffedd5; color: #ea580c; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px;">
            ☁️
          </div>
          <div>
            <h2 style="font-size: 22px; font-weight: 800; color: #9a3412;">AWS Cloud Computing Architecture</h2>
            <div style="font-size: 13px; color: #ea580c; font-weight: 600;">Farmer Connect Portal — Production Target Infrastructure</div>
          </div>
        </div>

        <p style="font-size: 14px; color: #475569; margin-bottom: 24px; line-height: 1.6;">
          This application is designed following AWS Serverless & Cloud Best Practices. Each application tier maps directly to managed AWS Cloud Services:
        </p>

        <!-- Interactive AWS Architecture Map -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px;">
          <!-- Frontend Tier -->
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 14px; padding: 16px;">
            <div style="font-size: 12px; font-weight: 800; color: #0284c7; text-transform: uppercase; margin-bottom: 8px;">1. Frontend Delivery</div>
            <div style="font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Amazon S3 + CloudFront</div>
            <div style="font-size: 12px; color: #64748b; line-height: 1.4;">
              Static SPA hosting on S3 backed by CloudFront CDN edge locations across India for ultra-fast latency.
            </div>
          </div>

          <!-- Auth Tier -->
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 14px; padding: 16px;">
            <div style="font-size: 12px; font-weight: 800; color: #16a34a; text-transform: uppercase; margin-bottom: 8px;">2. Authentication</div>
            <div style="font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Amazon Cognito</div>
            <div style="font-size: 12px; color: #64748b; line-height: 1.4;">
              User Pools & Identity Pools for secure OAuth2 / JWT authentication, role management (Farmer vs Buyer).
            </div>
          </div>

          <!-- API Tier -->
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 14px; padding: 16px;">
            <div style="font-size: 12px; font-weight: 800; color: #d97706; text-transform: uppercase; margin-bottom: 8px;">3. Backend Logic</div>
            <div style="font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">API Gateway + AWS Lambda</div>
            <div style="font-size: 12px; color: #64748b; line-height: 1.4;">
              Serverless Node.js REST microservices handling weather proxy, price aggregation, and recommendations.
            </div>
          </div>

          <!-- Database Tier -->
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 14px; padding: 16px;">
            <div style="font-size: 12px; font-weight: 800; color: #9333ea; text-transform: uppercase; margin-bottom: 8px;">4. Cloud Database</div>
            <div style="font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Amazon DynamoDB</div>
            <div style="font-size: 12px; color: #64748b; line-height: 1.4;">
              NoSQL tables: <code>Users</code>, <code>CropPrices</code>, <code>MarketplaceListings</code>, and <code>WeatherData</code>.
            </div>
          </div>

          <!-- Notification Tier -->
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 14px; padding: 16px;">
            <div style="font-size: 12px; font-weight: 800; color: #dc2626; text-transform: uppercase; margin-bottom: 8px;">5. Push Notifications</div>
            <div style="font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Amazon SNS</div>
            <div style="font-size: 12px; color: #64748b; line-height: 1.4;">
              Topic-based broadcast for rain alerts, high temperature warnings, and sudden market price spikes.
            </div>
          </div>

          <!-- Event Scheduling -->
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 14px; padding: 16px;">
            <div style="font-size: 12px; font-weight: 800; color: #059669; text-transform: uppercase; margin-bottom: 8px;">6. Scheduled Sync</div>
            <div style="font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Amazon EventBridge</div>
            <div style="font-size: 12px; color: #64748b; line-height: 1.4;">
              Cron rules triggering Lambda functions hourly to ingest fresh Agmarknet prices & weather feeds.
            </div>
          </div>
        </div>

        <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 12px; padding: 14px 18px; font-size: 13px; color: #9a3412; display: flex; align-items: center; justify-content: space-between;">
          <span>🔒 <strong>Security & Compliance:</strong> Environment-driven API endpoints without hardcoded credentials.</span>
          <button class="fc-btn fc-btn-primary fc-btn-sm" onclick="window.fcCloseAwsModal()">Got It</button>
        </div>
      </div>
    </div>
  `;
}
