import React from "react";
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import CitySearch from "./components/CitySearch/CitySearch";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import OutfitSuggestion from "./components/OutfitSuggestion/OutfitSuggestion";
import SearchHistory from "./components/SearchHistory/SearchHistory";

import { WeatherProvider } from "./context/WeatherContext";
import { ThemeProvider } from "./context/ThemeContext";

import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <MainLayout>
          <CitySearch />
          <WeatherCard />
          <OutfitSuggestion />
          <SearchHistory />
        </MainLayout>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
