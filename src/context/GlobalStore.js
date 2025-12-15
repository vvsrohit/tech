"use client";
import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {

  const [theme, setTheme] = useState("light");
  

  const [fontSize, setFontSize] = useState("medium"); 

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme");
    const savedFont = localStorage.getItem("app-font");
    if (savedTheme) setTheme(savedTheme);
    if (savedFont) setFontSize(savedFont);
  }, []);

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("app-font", fontSize);
  }, [fontSize]);

  
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const updateFontSize = (size) => {
    setFontSize(size);
  };

  const value = {
    theme,
    toggleTheme,
    fontSize,
    updateFontSize,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}
export function useGlobalStore() {
  return useContext(GlobalContext);
}