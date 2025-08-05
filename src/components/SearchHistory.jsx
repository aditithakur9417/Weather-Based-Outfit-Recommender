import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';
import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace before deployment

const SearchHistory = () => {
    const { history, updateWeather } = useWeatherContext();

    const handleCityClick = async (city) => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            updateWeather(res.data, city);
        } catch (err) {
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
