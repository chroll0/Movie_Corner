"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/homePage";

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate data loading
  useEffect(() => {
    fetchData().then(() => {
      setIsLoading(false); // Update loading state when data is loaded
    });
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const fetchData = async () => {
    // Simulate fetch delay
    await new Promise((resolve) => setTimeout(resolve));
  };

  return (
    <main
      className={`min-h-[100svh] transition-all duration-300 relative ${
        theme === "dark" ? "dark_background" : "light_background"
      }`}
    >
      {isLoading ? (
        <div
          className="flex justify-center items-center h-screen tracking-wider font-medium
        font-worksans text-sm"
        >
          Loading...
        </div>
      ) : (
        <>
          <Navbar onToggleTheme={toggleTheme} currentTheme={theme} />

          <div className="flex flex-col items-center paddings">
            <Home currentTheme={theme} />
          </div>
        </>
      )}
    </main>
  );
};

export default App;
