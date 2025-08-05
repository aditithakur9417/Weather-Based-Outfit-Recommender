import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';

const WeatherCard = () => {
  const { currentWeather } = useWeatherContext();

  if (!currentWeather) return null;

  const { main, weather, wind, city } = currentWeather;

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p><strong>Temperature:</strong> {main.temp} °C</p>
      <p><strong>Condition:</strong> {weather[0].main}</p>
      <p><strong>Humidity:</strong> {main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
