// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#F9E8E8]/80 backdrop-blur-md border-b border-[#B23A48]/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-4">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-[#1A1A1A]">
          <span className="text-[#B23A48]">Janhavi</span> Singh
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer text-[#1A1A1A] hover:text-[#B23A48] transition font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#1A1A1A] hover:text-[#B23A48] transition"
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F9E8E8] border-t border-[#B23A48]/20">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer text-[#1A1A1A] hover:text-[#B23A48] font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
