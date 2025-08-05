// src/api/weatherApi.js
export const fetchWeatherData = async (city) => {
    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
  
      if (!response.ok) {
        throw new Error("City not found");
      }
  
      const data = await response.json();
      return {
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        wind_kph: data.current.wind_kph,
        humidity: data.current.humidity,
        icon: data.current.condition.icon,
      };
    } catch (error) {
      console.error("Weather fetch failed:", error);
      throw error;
    }
  };
  