import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import CitySearch from './components/CitySearch';
import WeatherCard from './components/WeatherCard';
import OutfitSuggestion from './components/OutfitSuggestion';

const App = () => {
  return (
    <WeatherProvider>
      <main className="app-container">
        <h1>Weather-Based Outfit Recommender</h1>
        <CitySearch />
        <WeatherCard />
        <OutfitSuggestion />
      </main>
    </WeatherProvider>
  );
};

export default App;
