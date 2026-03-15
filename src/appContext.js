import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isExpanded, setExpanded] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  const closeExpanded = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 250);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isExpanded,
        toggleExpanded,
        closeExpanded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};