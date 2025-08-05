import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
