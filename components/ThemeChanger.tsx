import { IoMoonSharp } from "react-icons/io5";

interface ThemeChangerProps {
  onToggleTheme: () => void;
  currentTheme: string;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({
  onToggleTheme,
  currentTheme,
}) => {
  return (
    <div className="navbar_icons flex items-center justify-center">
      <button
        onClick={onToggleTheme}
        className="flex items-center justify-center text-sm w-full h-full"
      >
        <IoMoonSharp />
        {/* {currentTheme === "dark" ? "Dark" : "Light"} */}
      </button>
    </div>
  );
};

export default ThemeChanger;
