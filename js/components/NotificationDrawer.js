/**
 * Farmer Connect Portal - AWS SNS Notification Drawer Component
 */

import { dbService } from '../services/dbService.js';

export function renderNotificationDrawer(isOpen, onClose) {
  if (!isOpen) return '';

  const notifications = dbService.getNotifications();
  const unreadCount = dbService.getUnreadNotificationCount();

  return `
    <div class="fc-modal-overlay" onclick="if(event.target === this) window.fcCloseNotificationDrawer()">
      <div class="fc-modal-content" style="max-width: 480px; margin-left: auto; margin-right: 0; height: 100vh; max-height: 100vh; border-radius: 20px 0 0 20px; padding: 24px;">
        <button class="fc-modal-close" onclick="window.fcCloseNotificationDrawer()">✕</button>
        
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; padding-right: 30px;">
          <div>
            <h3 style="font-size: 20px; font-weight: 800; color: #166534; display: flex; align-items: center; gap: 8px;">
              🔔 Notifications
            </h3>
            <div style="font-size: 11px; color: #f97316; font-weight: 700; margin-top: 2px;">
              ⚡ Powered by AWS SNS (Simple Notification Service)
            </div>
          </div>
          ${unreadCount > 0 ? `
            <button 
              class="fc-btn fc-btn-secondary fc-btn-sm" 
              onclick="window.fcMarkAllNotificationsRead()"
              style="font-size: 12px; padding: 4px 10px;"
            >
              Mark all read
            </button>
          ` : ''}
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px; max-height: calc(100vh - 120px); overflow-y: auto;">
          ${notifications.length === 0 ? `
            <div style="text-align: center; color: #64748b; padding: 40px 20px;">
              No notifications at this time.
            </div>
          ` : notifications.map(notif => `
            <div 
              style="
                background: ${notif.unread ? '#f0fdf4' : '#ffffff'};
                border: 1px solid ${notif.unread ? '#86efac' : '#e2e8f0'};
                border-left: 4px solid ${notif.type === 'weather' ? '#0284c7' : notif.type === 'price' ? '#16a34a' : '#f59e0b'};
                border-radius: 12px;
                padding: 14px;
                position: relative;
              "
              onclick="window.fcMarkNotificationRead('${notif.id}')"
            >
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
                <div style="font-size: 14px; font-weight: 700; color: #0f172a;">
                  ${notif.title}
                </div>
                <span style="font-size: 11px; color: #94a3b8;">${notif.time}</span>
              </div>
              <p style="font-size: 13px; color: #475569; margin-bottom: 8px;">
                ${notif.message}
              </p>
              <div style="font-size: 10px; font-weight: 600; color: #64748b; background: rgba(0,0,0,0.04); padding: 4px 8px; border-radius: 6px; display: inline-block;">
                ${notif.awsSource}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
