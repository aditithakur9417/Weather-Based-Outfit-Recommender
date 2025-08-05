import React from 'react';
import styles from './SearchHistory.module.css';
import { useWeatherContext } from '../../context/WeatherContext';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const SearchHistory = () => {
  const { history, updateWeather } = useWeatherContext();

  const handleCityClick = async (city) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      updateWeather(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch weather for this city.");
    }
  };

  if (!history || history.filter(Boolean).length === 0) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Searches</h2>
      <ul className={styles.list}>
        <AnimatePresence>
          {history.filter(Boolean).map((city, idx) => (
            <motion.li
              key={city}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              layout // <--- enables layout animation on reorder
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => handleCityClick(city)}
                className={styles.button}
              >
                {city}
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default SearchHistory;
