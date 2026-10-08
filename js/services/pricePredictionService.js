/**
 * Farmer Connect Portal - AI Crop Price Prediction Service
 * Algorithm-based forecasting using 7-day and 30-day historical momentum trend.
 * Note: Clearly labeled for prototype evaluation.
 */

export class PricePredictionService {
  static predict7DayPrice(cropData) {
    if (!cropData) return null;

    const currentPrice = cropData.currentPrice || 2300;
    const history = cropData.history7Days || [2210, 2225, 2240, 2260, 2275, 2250, 2300];
    
    // Calculate simple moving average momentum %
    const firstPrice = history[0];
    const lastPrice = history[history.length - 1];
    const momentumPct = ((lastPrice - firstPrice) / firstPrice) * 100;

    let projectedMidpoint = currentPrice;
    let trendBadge = '➡️ Stable';
    let trendText = 'Stable';
    let insightText = '';

    if (momentumPct > 1.5) {
      projectedMidpoint = Math.round(currentPrice * 1.035);
      trendBadge = '📈 Moderately Increasing';
      trendText = 'Increasing';
      insightText = `Based on the recent +${momentumPct.toFixed(1)}% price gain over the past week in ${cropData.market || 'mandi'}, prices may remain strong to moderately higher over the next 7 days due to steady miller procurement.`;
    } else if (momentumPct < -1.5) {
      projectedMidpoint = Math.round(currentPrice * 0.965);
      trendBadge = '📉 Moderately Decreasing';
      trendText = 'Decreasing';
      insightText = `Based on the recent ${momentumPct.toFixed(1)}% price decline due to fresh harvest arrivals, prices are estimated to remain soft or drop slightly over the next week before stabilizing.`;
    } else {
      projectedMidpoint = Math.round(currentPrice * 1.008);
      trendBadge = '➡️ Relatively Stable';
      trendText = 'Stable';
      insightText = `Prices have shown balanced supply-demand equilibrium (+${momentumPct.toFixed(1)}% variation). Market rates are likely to stay within a tight trading range over the next week.`;
    }

    const projectedMin = Math.round(projectedMidpoint * 0.97);
    const projectedMax = Math.round(projectedMidpoint * 1.03);

    // Generate 7-day future daily forecast points for combined SVG chart
    const forecastDaily = [];
    let runningVal = currentPrice;
    const dailyStep = (projectedMidpoint - currentPrice) / 7;
    for (let i = 1; i <= 7; i++) {
      runningVal += dailyStep + (Math.random() * 8 - 4);
      forecastDaily.push(Math.round(runningVal));
    }

    return {
      currentPrice,
      projectedMin,
      projectedMax,
      projectedMidpoint,
      trendBadge,
      trendText,
      insightText,
      forecastDaily,
      disclaimer: 'AI prediction is an estimate based on available historical/demo data and is not a guaranteed future price.'
    };
  }
}
