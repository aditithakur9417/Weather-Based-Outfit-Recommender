import React from "react";
import MainLayout from "./components/Layout/MainLayout";
import CitySearch from "./components/CitySearch";
import WeatherCard from "./components/WeatherCard";
import OutfitSuggestion from "./components/OutfitSuggestion";
import SearchHistory from "./components/SearchHistory";
import { WeatherProvider } from "./context/WeatherContext";
import { ThemeProvider } from "./context/ThemeContext";

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
