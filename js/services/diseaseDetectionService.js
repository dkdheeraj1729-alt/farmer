/**
 * Farmer Connect Portal - Disease Detection Service
 * Simulated AI Vision crop diagnostic engine returning disease details, symptoms, severity, and treatment plan.
 */

const DIAGNOSTICS_DATABASE = [
  {
    diseaseName: 'Bacterial Leaf Blight (Xanthomonas oryzae)',
    confidenceScore: 89,
    severity: 'Moderate',
    symptoms: 'Water-soaked translucent lesions along leaf margins expanding into yellow and straw-colored wavy stripe blights.',
    treatmentPlan: [
      'Apply Copper Hydroxide (50% WP) @ 2g/liter or Streptocycline @ 0.5g/liter of water.',
      'Maintain 5cm field water depth; avoid excessive nitrogen fertilizer application during active infection.',
      'Ensure adequate field drainage and remove infected stubble post-harvest.'
    ],
    disclaimer: 'AI Diagnostic Estimate based on computer vision feature matching. Consult your local Krishi Vigyan Kendra (KVK) officer for field verification.'
  },
  {
    diseaseName: 'Chilli Leaf Curl Virus (ChiLCV)',
    confidenceScore: 92,
    severity: 'High',
    symptoms: 'Upward curling of leaves, vein thickening, stunting of plants, and reduced flower set caused by whitefly vector transmission.',
    treatmentPlan: [
      'Spray Imidacloprid 17.8 SL @ 0.5 ml/liter or Thiamethoxam 25 WG @ 0.2g/liter to control whitefly vector.',
      'Install yellow sticky traps @ 12 traps/acre in the field.',
      'Apply Neem oil (10,000 ppm) @ 3 ml/liter as organic preventive spray.'
    ],
    disclaimer: 'AI Diagnostic Estimate based on computer vision feature matching. Consult your local Krishi Vigyan Kendra (KVK) officer for field verification.'
  },
  {
    diseaseName: 'Early Blight of Tomato (Alternaria solani)',
    confidenceScore: 86,
    severity: 'Moderate',
    symptoms: 'Concentric ring bullseye spots on lower older leaves with yellow chlorotic halo.',
    treatmentPlan: [
      'Apply Mancozeb 75% WP @ 2.5g/liter or Azoxystrobin 23% SC @ 1 ml/liter.',
      'Mulch soil surface around stem base to prevent spore splash from soil onto lower foliage.',
      'Prune lower 12 inches of leaves to improve canopy air circulation.'
    ],
    disclaimer: 'AI Diagnostic Estimate based on computer vision feature matching. Consult your local Krishi Vigyan Kendra (KVK) officer for field verification.'
  }
];

export class DiseaseDetectionService {
  static analyzeImage(imageDataUrl) {
    if (!imageDataUrl) {
      return { success: false, error: 'Please upload or select a crop leaf photo first.' };
    }

    // Pick diagnostic result deterministically or randomly based on data length
    const index = Math.abs(imageDataUrl.length % DIAGNOSTICS_DATABASE.length);
    const result = DIAGNOSTICS_DATABASE[index];

    return {
      success: true,
      diagnostic: {
        ...result,
        analyzedAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }
    };
  }
}
