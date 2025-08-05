import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { useWeatherContext } from '../context/WeatherContext';
import { cities } from '../utils/cityList';
import useDebounce from '../hooks/useDebounce';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const CitySearch = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { updateWeather } = useWeatherContext();
  const debouncedCity = useDebounce(city);

  const fetchWeather = async (cityName) => {
    try {
      setError('');
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(cityName)}`
      );
      const data = res.data;
      updateWeather(data, cityName);
      setCity('');
      setShowSuggestions(false);
    } catch (err) {
      setError('City not found or API error');
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city.trim());
  };

  const handleSelectSuggestion = (selected) => {
    setCity(selected);
    fetchWeather(selected);
  };

  const filteredSuggestions = useMemo(() => {
    if (!debouncedCity.trim()) return [];
    return cities.filter(c =>
      c.toLowerCase().startsWith(debouncedCity.toLowerCase())
    ).slice(0, 5);
  }, [debouncedCity]);

  return (
    <div className="city-search">
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          value={city}
          placeholder="Enter city..."
          onChange={(e) => {
            setCity(e.target.value);
            setShowSuggestions(true);
          }}
        />
        <button type="submit">Get Weather</button>
      </form>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((c, idx) => (
            <li key={idx} onClick={() => handleSelectSuggestion(c)}>
              {c}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CitySearch;
