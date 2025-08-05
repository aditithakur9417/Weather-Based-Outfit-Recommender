import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';
import { motion, AnimatePresence } from 'framer-motion';

const WeatherCard = () => {
  const { currentWeather } = useWeatherContext();

  if (!currentWeather || !currentWeather.current || !currentWeather.location) return null;

  const { current, location } = currentWeather;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="weather-card"
      >
        <h2>{location.name}, {location.country}</h2>
        <p><strong>Temperature:</strong> {current.temp_c} °C</p>
        <p><strong>Condition:</strong> {current.condition?.text}</p>
        <p><strong>Humidity:</strong> {current.humidity}%</p>
        <p><strong>Wind Speed:</strong> {current.wind_kph} km/h</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default WeatherCard;
