"use client";

import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionBold } from "react-icons/pi";
import { IoGrid } from "react-icons/io5";
import { MdBookmarks, MdMovie } from "react-icons/md";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import ThemeChanger from "./ThemeChanger";
import { useState } from "react";
import { FaArrowDownShortWide } from "react-icons/fa6";

interface NavbarProps {
  onToggleTheme: () => void;
  currentTheme: string;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, currentTheme }) => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="md:fixed top-0 left-0 md:h-full h-auto sm:px-6 sm:py-8 px-0 py-0 absolute md:w-auto w-full">
      <nav
        className={`md:navbar mobile_navbar transition-all duration-300 shadow-slide ${
          currentTheme === "dark" ? "dark_elements" : "light_elements"
        }
`}
      >
        <div className="flex gap-7">
          <MdMovie className="w-9 h-9 text-icons-200" />

          <div
            className={` ${
              mobileNav === false ? "-rotate-90" : "rotate-90"
            } sm:hidden flex hover:text-icons-100 transition-all duration-300`}
          >
            <button onClick={() => setMobileNav(!mobileNav)}>
              <FaArrowDownShortWide className="w-4 h-4 hover:text-icons-100 cursor-pointer transition-all duration-100" />
            </button>
          </div>
        </div>

        <div className="sm:flex md:flex-col sm:gap-10 gap-6 flex-row md:mb-36 mb-0 hidden">
          <Link href="/" scroll={true}>
            <IoGrid className="navbar_icons" />
          </Link>

          <Link href="../anime">
            <RiFilmFill className="navbar_icons" />
          </Link>

          <Link href="../series">
            <PiTelevisionBold className="navbar_icons" />
          </Link>

          <Link href="../bookmarks">
            <MdBookmarks className="navbar_icons" />
          </Link>
        </div>

        <div
          className={`absolute top-[100px] shadow-slide sm:hidden flex p-6 gap-5 justify-center items-center transition-all duration-500 ease-in-out
          ${currentTheme === "dark" ? "dark_elements" : "light_elements"} ${
            mobileNav === false ? "left-[-220px]" : "flex left-[0px]"
          }`}
        >
          <Link href="/" scroll={true}>
            <IoGrid className="navbar_icons" />
          </Link>

          <Link href="../anime">
            <RiFilmFill className="navbar_icons" />
          </Link>

          <Link href="../series">
            <PiTelevisionBold className="navbar_icons" />
          </Link>

          <Link href="../bookmarks">
            <MdBookmarks className="navbar_icons" />
          </Link>
        </div>

        <div className="flex items-center flex-row md:flex-col">
          <div className="md:mb-8 mb-0 md:mr-0 mr-8">
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
          </div>

          <ThemeChanger
            onToggleTheme={onToggleTheme}
            currentTheme={currentTheme}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
