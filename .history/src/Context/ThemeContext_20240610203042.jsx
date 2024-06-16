// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext({ theme: 'dark' });

export const useTheme = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <UserContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
};

