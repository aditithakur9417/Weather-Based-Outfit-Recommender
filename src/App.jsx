import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import CitySearch from './components/CitySearch';
import WeatherCard from './components/WeatherCard';
import OutfitSuggestion from './components/OutfitSuggestion';
import SearchHistory from './components/SearchHistory';

const App = () => {
  return (
    <WeatherProvider>
      <main className="app-container">
        <h1>Weather-Based Outfit Recommender</h1>
        <CitySearch />
        <SearchHistory />
        <WeatherCard />
        <OutfitSuggestion />
      </main>
    </WeatherProvider>
  );
};

export default App;
