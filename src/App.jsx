import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import CitySearch from './components/CitySearch';

const App = () => {
  return (
    <WeatherProvider>
      <main className="app-container">
        <h1>Weather-Based Outfit Recommender</h1>
        <CitySearch />
        {/* WeatherCard + OutfitSuggestion will come next */}
      </main>
    </WeatherProvider>
  );
};

export default App;
