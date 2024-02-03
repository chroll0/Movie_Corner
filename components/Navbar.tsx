import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionBold } from "react-icons/pi";
import { IoGrid } from "react-icons/io5";
import { MdBookmarks, MdMovie } from "react-icons/md";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import ThemeChanger from "./ThemeChanger";

interface NavbarProps {
  onToggleTheme: () => void;
  currentTheme: string;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, currentTheme }) => {
  return (
    <div className="md:fixed top-0 left-0 md:h-full h-auto sm:px-6 sm:py-8 px-0 py-0 absolute md:w-auto w-full">
      <nav
        className={`md:navbar mobile_navbar transition-all duration-300 shadow-slide ${
          currentTheme === "dark" ? "dark_elements" : "light_elements"
        }
`}
      >
        <MdMovie className="w-9 h-9 text-icons-200" />

        <div className="flex md:flex-col sm:gap-10 gap-6 flex-row md:mb-36 mb-0">
          <Link href="/" scroll={true}>
            <IoGrid className="navbar_icons" />
          </Link>

          <Link href="../films">
            <RiFilmFill className="navbar_icons" />
          </Link>

          <Link href="../series">
            <PiTelevisionBold className="navbar_icons" />
          </Link>

          <Link href="../bookmarks">
            <MdBookmarks className="navbar_icons" />
          </Link>
        </div>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <SignedOut>
          <Link href="/sign-in">
            <button
              className="w-full text-light-50 py-2 px-4 rounded-md tracking-wider max-w-[80px] text-sm 
            transition-all duration-300 bg-icons-200 hover:bg-icons-100"
            >
              Login
            </button>
          </Link>
        </SignedOut>

        <ThemeChanger
          onToggleTheme={onToggleTheme}
          currentTheme={currentTheme}
        />
      </nav>
    </div>
  );
};

export default Navbar;
