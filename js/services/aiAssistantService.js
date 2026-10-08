/**
 * Farmer Connect Portal - AI Agronomical Assistant Service
 * Powered by Google Gemini API for Chat & Vision Crop Detection
 */

class AiAssistantService {
  getApiKey() {
    // Use a placeholder or load from local storage if set
    return localStorage.getItem('GEMINI_API_KEY');
  }

  formatMd(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*/g, '•').replace(/\n/g, '<br/>');
  }

  async askQuestion(userPrompt, context = {}) {
    const apiKey = this.getApiKey();
    if (!apiKey) return { text: 'To use the real AI, please set your API key: `localStorage.setItem("GEMINI_API_KEY", "your_key")` in the console.', category: 'System' };

    try {
      const payload = { contents: [{ parts: [{ text: `You are an expert Agronomist in India. Answer the following question from a farmer located in ${context.district || 'their region'}: ${userPrompt}` }] }] };
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || 'API Error');
      
      return {
        text: this.formatMd(data.candidates[0].content.parts[0].text),
        category: 'AI Advisory'
      };
    } catch(e) {
      return { text: `AI Error: ${e.message}`, category: 'Error' };
    }
  }

  async analyzeImage(imageDataUrl) {
    const apiKey = this.getApiKey();
    if (!apiKey) return { text: 'API Key missing. Please run `localStorage.setItem("GEMINI_API_KEY", "your_key")` in console.' };

    try {
      const base64Data = imageDataUrl.split(',')[1];
      const mimeType = imageDataUrl.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,/)[1];

      const payload = {
        contents: [{
          parts: [
            { text: "Analyze this crop image. Identify any disease or pest. Provide a short, precise diagnosis, severity, and a bulleted treatment plan." },
            { inlineData: { mimeType: mimeType, data: base64Data } }
          ]
        }]
      };
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || 'API Error');
      
      return { text: this.formatMd(data.candidates[0].content.parts[0].text) };
    } catch(e) {
      return { text: `AI Vision Error: ${e.message}` };
    }
  }
}

export const aiAssistantService = new AiAssistantService();
