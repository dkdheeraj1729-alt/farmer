/**
 * Farmer Connect Portal - Farming Plan Service
 * Generates 7-stage interactive crop calendars with task completion tracking in LocalStorage.
 */

const PLAN_STORAGE_KEY = 'fc_farm_plan_tasks';

const CROP_TIMELINES = {
  paddy: [
    { id: 'p1', stage: '1. Land Preparation & Puddling', days: 'Day 1–10', desc: 'Plough field 2–3 times, apply FYM 5 tons/acre, construct field bunds and puddle soil.', status: 'completed' },
    { id: 'p2', stage: '2. Nursery & Seed Treatment', days: 'Day 10–25', desc: 'Treat seeds with Carbendazim 2g/kg. Raise mat nursery for 15 days.', status: 'completed' },
    { id: 'p3', stage: '3. Transplanting / Direct Seeding', days: 'Day 25–30', desc: 'Transplant 15-day-old seedlings @ 2–3 seedlings/hill with 20x15 cm spacing.', status: 'pending' },
    { id: 'p4', stage: '4. Irrigation & Weed Control', days: 'Day 30–50', desc: 'Maintain 2–5cm shallow water layer. Apply Pretilachlor 50% EC weedicide @ 500ml/acre.', status: 'pending' },
    { id: 'p5', stage: '5. Nutrient Management', days: 'Day 50–75', desc: 'Top dress Urea 35kg/acre at active tillering and panicle initiation stage.', status: 'pending' },
    { id: 'p6', stage: '6. Pest & Disease Control', days: 'Day 75–105', desc: 'Monitor for Stem Borer & Leaf Folder. Spray Chlorantraniliprole 18.5 SC @ 60ml/acre if threshold crossed.', status: 'pending' },
    { id: 'p7', stage: '7. Harvesting & Threshing', days: 'Day 105–125', desc: 'Drain water 10 days before harvest. Harvest when 80% grains turn golden yellow.', status: 'pending' }
  ],
  chilli: [
    { id: 'c1', stage: '1. Nursery & Seedling Production', days: 'Day 1–35', desc: 'Sow seeds in pro-trays with coco-peat under shade net.', status: 'completed' },
    { id: 'c2', stage: '2. Main Field Preparation', days: 'Day 30–45', desc: 'Form raised beds 1m wide, lay drip line and 25-micron silver-black mulch sheet.', status: 'completed' },
    { id: 'c3', stage: '3. Transplanting', days: 'Day 45', desc: 'Transplant 35-day-old seedlings @ 45x45 cm spacing during evening hours.', status: 'pending' },
    { id: 'c4', stage: '4. Fertigation & Plant Support', days: 'Day 50–90', desc: 'Drip fertigation with 19-19-19 water soluble fertilizer 3kg/acre weekly.', status: 'pending' },
    { id: 'c5', stage: '5. Pest Management (Whitefly/Thrips)', days: 'Day 90–130', desc: 'Install yellow & blue sticky traps. Spray Spinetoram 11.7 SC @ 180ml/acre.', status: 'pending' },
    { id: 'c6', stage: '6. Harvesting (Green / Red)', days: 'Day 130–180', desc: 'Pick green chillies every 7 days or allow pods to fully ripen red for drying.', status: 'pending' }
  ]
};

export class FarmingPlanService {
  static getPlanForCrop(cropId = 'paddy') {
    try {
      const saved = localStorage.getItem(PLAN_STORAGE_KEY + '_' + cropId);
      if (saved) return JSON.parse(saved);
    } catch(e){}
    return CROP_TIMELINES[cropId] || CROP_TIMELINES.paddy;
  }

  static toggleTaskStatus(cropId, taskId) {
    const plan = this.getPlanForCrop(cropId);
    const updated = plan.map(t => {
      if (t.id === taskId) {
        return { ...t, status: t.status === 'completed' ? 'pending' : 'completed' };
      }
      return t;
    });
    try {
      localStorage.setItem(PLAN_STORAGE_KEY + '_' + cropId, JSON.stringify(updated));
    } catch(e){}
    return updated;
  }
}
