import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context to share theme data across the app
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme state based on sessionStorage value
  const [dark, setDark] = useState(() => {
    const savedTheme = sessionStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return true; // default to dark
  });
  

  // Toggle between dark and light theme
  const toggleTheme = () => {
    setDark(prev => !prev);
  };

  // Update HTML attribute and sessionStorage whenever theme changes
  useEffect(() => {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme); 
    sessionStorage.setItem('theme', theme); 
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
