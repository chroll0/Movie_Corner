import HomePage from "./homepage/page";

const Home: React.FC<{ currentTheme: string }> = ({ currentTheme }) => {
  return (
    <>
      <HomePage currentTheme={currentTheme} />
    </>
  );
};

export default Home;
