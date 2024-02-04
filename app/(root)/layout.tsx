"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <div className="w-full px-8 sm:px-0">
              <h1 className="font-sans text-[32px] md:text-[44px] font-extrabold tracking-wider text-gradient">
                Movie Corner
              </h1>

              <div className="py-12 max-w-[400px]">
                <h3 className="leading-8 text-lg font-sans italic capitalize tracking-wide">
                  Cinematic Delights Across Eras,
                </h3>
                <h3 className="leading-8 text-lg font-sans italic capitalize tracking-wide text-end">
                  Entertainment for All Tastes
                </h3>
              </div>
            </div>
            {children}
          </div>
        </>
      )}
    </main>
  );
}
