import React, { useState } from 'react';
import axios from 'axios';
import { useWeatherContext } from '../context/WeatherContext';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace before deploying

const CitySearch = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const { updateWeather } = useWeatherContext();

  const fetchWeather = async (cityName) => {
    try {
      setError('');
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      updateWeather(res.data, cityName);
      setCity('');
    } catch (err) {
      setError('City not found or API error');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city.trim());
  };

  return (
    <div className="city-search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          placeholder="Enter city..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CitySearch;
