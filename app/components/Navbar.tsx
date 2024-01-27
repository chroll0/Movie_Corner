import { ImBookmarks } from "react-icons/im";
import ThemeChanger from "./ThemeChanger";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionBold } from "react-icons/pi";
import { IoGrid } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import Link from "next/link";

interface NavbarProps {
  onToggleTheme: () => void;
  currentTheme: string;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, currentTheme }) => {
  return (
    <div className="md:fixed top-0 left-0 md:h-full h-auto sm:px-8 sm:py-10 px-0 py-0 absolute md:w-auto w-full">
      <nav
        className={`md:navbar mobile_navbar transition-all duration-300 ${
          currentTheme === "dark" ? "dark_elements" : "light_elements"
        }
`}
      >
        <MdMovie className="w-8 h-8 text-icons-200" />

        <div className="flex md:flex-col sm:gap-10 gap-6 flex-row md:mb-36 lg:mb-44 mb-0">
          <Link href="/">
            <IoGrid className="navbar_icons" />
          </Link>
          <RiFilmFill className="navbar_icons" />
          <PiTelevisionBold className="navbar_icons" />
          <ImBookmarks className="navbar_icons" />
        </div>
        <ThemeChanger
          onToggleTheme={onToggleTheme}
          currentTheme={currentTheme}
        />
      </nav>
    </div>
  );
};

export default Navbar;
