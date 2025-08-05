import React from 'react';
import { useWeatherContext } from '../../context/WeatherContext'; 
import { getOutfitSuggestion } from '../../utils/getOutfitSuggestion';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './OutfitSuggestion.module.css';

const OutfitSuggestion = () => {
  const { currentWeather } = useWeatherContext();

  if (!currentWeather) return null;

  const suggestion = getOutfitSuggestion(currentWeather);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={suggestion}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.4 }}
        className={styles.outfitSuggestion}
      >
        <h3>👕 Outfit Suggestion</h3>
        <p>{suggestion}</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default OutfitSuggestion;
