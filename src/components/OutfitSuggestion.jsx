import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';
import { getOutfitSuggestion } from '../utils/getOutfitSuggestion';

const OutfitSuggestion = () => {
  const { currentWeather } = useWeatherContext();

  if (!currentWeather) return null;

  const suggestion = getOutfitSuggestion(currentWeather);

  return (
    <div className="outfit-suggestion">
      <h3>👕 Outfit Suggestion</h3>
      <p>{suggestion}</p>
    </div>
  );
};

export default OutfitSuggestion;
