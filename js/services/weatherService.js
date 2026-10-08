/**
 * Farmer Connect Portal - Weather Service
 * Uses Open-Meteo API and navigator.geolocation for real weather
 */

import { MOCK_WEATHER_DATA, INDIAN_DISTRICTS } from '../data/mockData.js';

class WeatherService {
  constructor() {
    this.currentDistrictId = 'guntur';
    this.listeners = [];
    this.realWeatherData = null;
    this.isFetching = false;
    this.initLocationWeather();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(l => l());
  }

  async initLocationWeather() {
    if (!navigator.geolocation) return;
    this.isFetching = true;
    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const apiKey = '8879921c2d584bb4ad2122110260810';
        
        // Fetch WeatherAPI Data (includes reverse geocoding)
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=7`;
        const res = await fetch(url);
        const data = await res.json();
        
        if (data.error) {
          throw new Error(data.error.message);
        }

        const cityName = data.location.name || 'Your Location';
        const stateName = data.location.region || 'Local';
        const currentCondition = data.current.condition.text || 'Cloudy';
        
        // Map WeatherAPI condition strings to our UI icons loosely
        const lowerCond = currentCondition.toLowerCase();
        let cIcon = 'cloud';
        if (lowerCond.includes('sun') || lowerCond.includes('clear')) cIcon = 'sun';
        else if (lowerCond.includes('rain') || lowerCond.includes('drizzle')) cIcon = 'rain';
        else if (lowerCond.includes('thunder')) cIcon = 'thunderstorm';
        else if (lowerCond.includes('partly')) cIcon = 'sun-cloud';

        this.realWeatherData = {
          district: cityName,
          state: stateName,
          temp: Math.round(data.current.temp_c),
          condition: currentCondition,
          conditionIcon: cIcon,
          humidity: data.current.humidity,
          rainProbability: data.forecast.forecastday[0].day.daily_chance_of_rain || 0,
          windSpeed: Math.round(data.current.wind_kph),
          uvIndex: data.current.uv || 7,
          soilMoisture: 'Adequate',
          sunrise: data.forecast.forecastday[0].astro.sunrise || '06:00 AM',
          sunset: data.forecast.forecastday[0].astro.sunset || '06:00 PM',
          alert: data.forecast.forecastday[0].day.daily_chance_of_rain > 50 ? { 
            type: 'warning', 
            title: 'Rain Alert 🌧️', 
            message: `Rain expected today in ${cityName}. Plan farming activities accordingly.` 
          } : null,
          forecast: data.forecast.forecastday.map((f, i) => {
            const fLowCond = f.day.condition.text.toLowerCase();
            let fIcon = 'cloud';
            if (fLowCond.includes('sun') || fLowCond.includes('clear')) fIcon = 'sun';
            else if (fLowCond.includes('rain') || fLowCond.includes('drizzle')) fIcon = 'rain';
            else if (fLowCond.includes('thunder')) fIcon = 'thunderstorm';
            else if (fLowCond.includes('partly')) fIcon = 'sun-cloud';

            return {
              day: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : new Date(f.date).toLocaleDateString('en-US', {weekday:'short'}),
              tempHigh: Math.round(f.day.maxtemp_c),
              tempLow: Math.round(f.day.mintemp_c),
              condition: f.day.condition.text,
              rain: f.day.daily_chance_of_rain,
              icon: fIcon
            };
          })
        };
        
        // Default location in selector to "current" if GPS succeeds
        if (this.currentDistrictId === 'guntur') {
          this.currentDistrictId = 'current_gps';
        }
        
        this.isFetching = false;
        this.notify();
      } catch (e) {
        console.error('Failed to fetch real weather', e);
        this.isFetching = false;
      }
    }, () => {
      this.isFetching = false;
      console.warn('Geolocation denied or failed');
    });
  }

  getDistricts() {
    if (this.realWeatherData) {
      return [{ id: 'current_gps', name: '📍 ' + this.realWeatherData.district, state: this.realWeatherData.state }, ...INDIAN_DISTRICTS];
    }
    return INDIAN_DISTRICTS;
  }

  setDistrict(districtId) {
    this.currentDistrictId = districtId;
    this.notify();
  }

  getCurrentDistrictId() {
    return this.currentDistrictId;
  }

  getWeatherForDistrict(districtId = this.currentDistrictId) {
    if (this.realWeatherData && districtId === this.currentDistrictId) {
       return this.realWeatherData;
    }
    
    const key = districtId.toLowerCase();
    if (MOCK_WEATHER_DATA[key]) {
      return MOCK_WEATHER_DATA[key];
    }
    const distInfo = INDIAN_DISTRICTS.find(d => d.id === key) || INDIAN_DISTRICTS[0];
    return {
      district: distInfo.name,
      state: distInfo.state,
      temp: 31,
      condition: 'Partly Cloudy',
      conditionIcon: 'partly-cloudy',
      humidity: 68,
      rainProbability: 50,
      windSpeed: 13,
      uvIndex: 7,
      soilMoisture: 'Good (70%)',
      sunrise: '06:05 AM',
      sunset: '06:22 PM',
      alert: null,
      forecast: [
        { day: 'Today', tempHigh: 33, tempLow: 25, condition: 'Partly Cloudy', rain: 50, icon: 'partly-cloudy' },
        { day: 'Tomorrow', tempHigh: 30, tempLow: 24, condition: 'Light Rain', rain: 60, icon: 'rain' },
        { day: 'Day 3', tempHigh: 31, tempLow: 25, condition: 'Sunny', rain: 15, icon: 'sun' }
      ]
    };
  }
}

export const weatherService = new WeatherService();
