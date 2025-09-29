import React, { useState } from "react";

import {
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineFolder,
  HiOutlineHome,
  HiOutlineMail,
  HiOutlineUser,
  HiMenu,
  HiX,
  HiCode,
} from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className=" text-white #2c5364 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4 relative">
          {/* Logo */}
          <div className="flex items-center gap-2 z-10">
            <div>
              <h3 className="text-sm">Fells Dev.</h3>
              <p className="text-sm text-gray-400">Front-End Developer</p>
            </div>
          </div>

          {/* Desktop Nav - diposisikan center absolute */}
          <nav className="hidden md:flex space-x-2 bg-gray-600/30 rounded-full px-3 py-2 outline-1 outline-gray-700 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#about"
              className="flex items-center gap-1 hover:bg-gray-700 hover:text-blue-400 px-4 py-2 rounded-full transition"
            >
              About
            </a>
            <a
              href="#experience"
              className="flex items-center gap-1 hover:bg-gray-700 hover:text-blue-400 px-4 py-2 rounded-full transition"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="flex items-center gap-1 hover:bg-gray-700 hover:text-blue-400 px-4 py-2 rounded-full transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="flex items-center gap-1 hover:bg-gray-700 hover:text-blue-400 px-4 py-2 rounded-full transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="flex items-center gap-1 hover:bg-gray-700 hover:text-blue-400 px-4 py-2 rounded-full transition"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="bg-gray-600/30 outline-1 outline-gray-700 rounded-full md:hidden flex items-center justify-center w-10 h-10 z-10"
          >
            {open ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 pb-4">
          <nav className="flex flex-col space-y-2">
            <a
              href="#about"
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
            >
              <HiOutlineUser /> About
            </a>
            <a
              href="#experience"
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
            >
              <HiOutlineBriefcase /> Experience
            </a>
            <a
              href="#skills"
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
            >
              <HiOutlineCode /> Skills
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
            >
              <HiOutlineFolder /> Projects
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
            >
              <HiOutlineMail /> Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
