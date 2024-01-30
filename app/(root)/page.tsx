import React from "react";
import HomePage from "./homepage/page";

interface HomeProps {
  currentTheme: string;
}

const Home: React.FC<HomeProps> = ({ currentTheme }) => {
  return (
    <>
      <HomePage currentTheme={currentTheme} />
    </>
  );
};

export default Home;
