import React, { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

// eslint-disable-next-line react/prop-types
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true",
  );

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("isDarkMode", newDarkMode.toString());
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode") === "true";
    if (storedDarkMode !== isDarkMode) {
      setIsDarkMode(storedDarkMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Apply dark-mode class to root element for CSS variable switching
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => useContext(DarkModeContext);
