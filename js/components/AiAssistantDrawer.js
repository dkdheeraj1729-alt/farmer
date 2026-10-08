/**
 * Farmer Connect Portal - AI Farmer Assistant Drawer Component
 */

import { aiAssistantService } from '../services/aiAssistantService.js';
import { authService } from '../services/authService.js';

export function renderAiAssistantDrawer(isOpen, messages, isThinking) {
  if (!isOpen) return '';

  const user = authService.getCurrentUser();

  return `
    <div class="fc-modal-overlay" onclick="if(event.target === this) window.fcCloseAiAssistant()">
      <div class="fc-modal-content" style="max-width: 480px; margin-left: auto; margin-right: 0; height: 100vh; max-height: 100vh; border-radius: 20px 0 0 20px; padding: 20px; display: flex; flex-direction: column;">
        <button class="fc-modal-close" onclick="window.fcCloseAiAssistant()">✕</button>

        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; padding-right: 30px;">
          <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #16a34a, #15803d); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
            🤖
          </div>
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: #14532d;">AI Agronomist Assistant</h3>
            <div style="font-size: 11px; color: #64748b;">Smart farming guidance for ${user.district || 'Guntur'}, ${user.state || 'AP'}</div>
          </div>
        </div>

        <!-- Chat messages container -->
        <div id="ai-chat-container" style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; padding-right: 4px; margin-bottom: 16px;">
          ${messages.map(msg => `
            <div style="display: flex; flex-direction: column; align-items: ${msg.sender === 'user' ? 'flex-end' : 'flex-start'};">
              <div style="
                max-width: 85%;
                padding: 12px 16px;
                border-radius: ${msg.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px'};
                background: ${msg.sender === 'user' ? '#16a34a' : '#f1f5f9'};
                color: ${msg.sender === 'user' ? '#ffffff' : '#0f172a'};
                font-size: 14px;
                line-height: 1.45;
                box-shadow: 0 2px 5px rgba(0,0,0,0.03);
              ">
                ${msg.text}
              </div>
              ${msg.category ? `<span style="font-size: 10px; color: #16a34a; font-weight: 700; margin-top: 4px;">📌 ${msg.category}</span>` : ''}
            </div>
          `).join('')}
          ${isThinking ? `
            <div style="display: flex; gap: 6px; padding: 12px 16px; background: #f1f5f9; border-radius: 16px; width: fit-content;">
              <span style="font-size: 12px; color: #64748b;">AI Agronomist is analyzing soil & weather data...</span>
            </div>
          ` : ''}
        </div>

        <!-- Quick suggestion chips -->
        <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 10px; margin-bottom: 8px;">
          <button class="fc-btn fc-btn-secondary fc-btn-sm" style="font-size: 11px; white-space: nowrap; padding: 4px 10px;" onclick="window.fcSendAiPrompt('Should I irrigate today?')">🌧️ Irrigate today?</button>
          <button class="fc-btn fc-btn-secondary fc-btn-sm" style="font-size: 11px; white-space: nowrap; padding: 4px 10px;" onclick="window.fcSendAiPrompt('Paddy stem borer remedy')">🐛 Stem borer fix</button>
          <button class="fc-btn fc-btn-secondary fc-btn-sm" style="font-size: 11px; white-space: nowrap; padding: 4px 10px;" onclick="window.fcSendAiPrompt('PM-KISAN scheme details')">🏛️ PM-KISAN info</button>
        </div>

        <!-- Chat input form -->
        <form onsubmit="event.preventDefault(); window.fcSubmitAiChat();" style="display: flex; gap: 8px;">
          <label class="fc-btn fc-btn-secondary fc-btn-sm" style="padding: 10px; cursor: pointer; border-radius: 10px;" title="Upload Crop Image for Disease Detection">
            📷
            <input type="file" accept="image/*" style="display: none;" onchange="window.fcHandleAiImageUpload(this)" />
          </label>
          <input 
            type="text" 
            id="ai-chat-input"
            class="fc-input" 
            placeholder="Ask AI assistant about crops, weather, pests..." 
            style="font-size: 14px; padding: 10px 14px;"
            autocomplete="off"
          />
          <button type="submit" class="fc-btn fc-btn-primary fc-btn-sm" style="padding: 10px 16px;">
            Send
          </button>
        </form>
      </div>
    </div>
  `;
}
