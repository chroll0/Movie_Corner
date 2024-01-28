"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

// Import components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App: React.FC = () => {
  // State to manage the theme (light/dark)
  const [theme, setTheme] = useState<string>("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <main
      className={`min-h-[100svh] transition-all duration-300 relative ${
        theme === "dark" ? "dark_background" : "light_background"
      }`}
    >
      <Navbar onToggleTheme={toggleTheme} currentTheme={theme} />

      <div className="flex flex-col items-center paddings">
        <Home currentTheme={theme} />
      </div>
    </main>
  );
};

export default App;
