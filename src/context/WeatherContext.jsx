import React, { createContext, useState, useContext } from 'react';

const WeatherContext = createContext();

// Provider component to wrap around parts of the app that need weather data
export const WeatherProvider = ({ children }) => {
  // State to store the current weather data object
  const [currentWeather, setCurrentWeather] = useState(null);

  const [history, setHistory] = useState([]);

  // Updates the current weather and search history
  const updateWeather = (data, city) => {
  
    // Update current weather
    setCurrentWeather({ ...data, city });
  
    if (!city || city.trim().length === 0) return;
    setHistory(prev => {
      const updated = [city, ...prev.filter(c => c !== city)];
      return updated.slice(0, 5);
    });
  };
  
  // Provide weather data and utilities to children via context
  return (
    <WeatherContext.Provider value={{ currentWeather, updateWeather, history }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook for accessing the WeatherContext more easily
export const useWeatherContext = () => useContext(WeatherContext);
