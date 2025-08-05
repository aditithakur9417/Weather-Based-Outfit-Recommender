import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';
import { motion } from 'framer-motion';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const SearchHistory = () => {
    const { history, updateWeather } = useWeatherContext();

    const handleCityClick = async (city) => {
        try {
            const res = await axios.get(
                `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
            );

            updateWeather(res.data);
        } catch (err) {
            console.error(err);
            alert("Failed to fetch weather for this city.");
        }
    };

    if (history.length === 0) return null;

    return (
        <div className="search-history">
            <h4>Recent Searches</h4>
            <ul>
                {history.map((city, idx) => (
                    <li key={idx}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCityClick(city)}
                        >
                            {city}
                        </motion.button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchHistory;
