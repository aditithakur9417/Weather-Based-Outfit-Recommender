import React, { createContext, useState, useContext } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [history, setHistory] = useState([]);

  const updateWeather = (data, city) => {
    setCurrentWeather({ ...data, city });

    setHistory(prev => {
      const updated = [city, ...prev.filter(c => c !== city)];
      return updated.slice(0, 5);
    });
  };

  return (
    <WeatherContext.Provider value={{ currentWeather, updateWeather, history }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
