import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';
import { motion, AnimatePresence } from 'framer-motion';

const WeatherCard = () => {
  const { currentWeather } = useWeatherContext();

  if (!currentWeather) return null;

  const { main, weather, wind, city } = currentWeather;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={city}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="weather-card"
      >
        <h2>{city}</h2>
        <p><strong>Temperature:</strong> {main.temp} °C</p>
        <p><strong>Condition:</strong> {weather[0].main}</p>
        <p><strong>Humidity:</strong> {main.humidity}%</p>
        <p><strong>Wind Speed:</strong> {wind.speed} m/s</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default WeatherCard;
