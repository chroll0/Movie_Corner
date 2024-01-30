import React from "react";
import HomePage from "./homepage/page";

interface PageProps {
  currentTheme: string;
}

const Page: React.FC<PageProps> = ({ currentTheme }) => {
  return (
    <>
      <HomePage currentTheme={currentTheme} />
    </>
  );
};

export default Page;
