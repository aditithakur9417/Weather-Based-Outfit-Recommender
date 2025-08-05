import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { useWeatherContext } from '../../context/WeatherContext';
import { cities } from '../../utils/cityList';
import useDebounce from '../../hooks/useDebounce';
import styles from './CitySearch.module.css';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const CitySearch = () => {
  // Local state to hold user input, API errors, and suggestion toggle
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { updateWeather } = useWeatherContext();
  const debouncedCity = useDebounce(city); // Debounced input for better performance

  // Fetch weather data for a selected city
  const fetchWeather = async (cityName) => {
    try {
      setError('');
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(cityName)}`
      );
      updateWeather(res.data, cityName); // Update global state with new weather info
      setCity(''); // Clear input after successful fetch
      setShowSuggestions(false); // Hide suggestions dropdown
    } catch (err) {
      setError('City not found or API error'); // Show user-friendly error message
    }
  };

  // Handle form submission (when user presses "Enter" or clicks button)
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = city.trim();
    if (trimmed) fetchWeather(trimmed);
  };

  // Handle when a user selects a suggestion from the dropdown
  const handleSelectSuggestion = (selected) => {
    setCity(selected);
    setShowSuggestions(false);
    fetchWeather(selected);
  };

  // Filter the city suggestions list based on debounced input
  const filteredSuggestions = useMemo(() => {
    if (!debouncedCity.trim()) return [];
    return cities
      .filter(c => c.toLowerCase().startsWith(debouncedCity.toLowerCase()))
      .slice(0, 5); // Limit to top 5 matches
  }, [debouncedCity]);

  return (
    <div className={styles.citySearchContainer}>
      {/* Search form */}
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.citySearchForm}>
        <input
          type="text"
          value={city}
          placeholder="Enter city..."
          className={styles.cityInput}
          onChange={(e) => {
            const value = e.target.value;
            setCity(value);
            setShowSuggestions(value.trim().length > 0); // Show suggestions only if there's input
          }}
          aria-label="City name"
          aria-autocomplete="list"
          aria-controls="suggestions-list"
        />
        <button type="submit" className={styles.searchButton}>Get Weather</button>
      </form>

      {/* Suggestions dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul
          id="suggestions-list"
          className={styles.suggestionsDropdown}
          role="listbox"
        >
          {filteredSuggestions.map((c, idx) => (
            <li
              key={idx}
              role="option"
              tabIndex={0}
              onClick={() => handleSelectSuggestion(c)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelectSuggestion(c); // Allow keyboard accessibility
                }
              }}
              className={styles.suggestionItem}
            >
              {c}
            </li>
          ))}
        </ul>
      )}

      {/* Display error if fetch fails */}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default CitySearch;
