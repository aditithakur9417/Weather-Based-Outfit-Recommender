import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import { ThemeProvider } from './context/ThemeContext';
import CitySearch from './components/CitySearch';
import WeatherCard from './components/WeatherCard';
import OutfitSuggestion from './components/OutfitSuggestion';
import SearchHistory from './components/SearchHistory';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <main className="app-container">
          <h1>Weather-Based Outfit Recommender</h1>
          <ThemeToggle />
          <CitySearch />
          <SearchHistory />
          <WeatherCard />
          <OutfitSuggestion />
        </main>
      </WeatherProvider>
    </ThemeProvider>
  );
};

export default App;
