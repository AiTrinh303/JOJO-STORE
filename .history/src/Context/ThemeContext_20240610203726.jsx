// ThemeContext.js
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({ theme: 'dark' });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(Theme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

