import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const location = useLocation();

  const navLinkClass =
    "block md:inline-block hover:text-white transition duration-300";

  const authButton =
    location.pathname === "/login" ? (
      <NavLink to="/register">
        <button className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-6 py-2 rounded-full font-semibold transition">
          Register
        </button>
      </NavLink>
    ) : location.pathname === "/register" ? (
      <NavLink to="/login">
        <button className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-6 py-2 rounded-full font-semibold transition">
          Login
        </button>
      </NavLink>
    ) : (
      <NavLink to="/login">
        <button className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-6 py-2 rounded-full font-semibold transition">
          Login
        </button>
      </NavLink>
    );

  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-md font-sans">
      <div className="flex items-center justify-between px-6 md:px-10 h-[78px]">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white tracking-wide">
          <Link to="/">TasteNest</Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-white font-medium text-lg">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkClass}>
              Service
            </NavLink>
          </li>
        </ul>

        {/* Theme Toggle + Auth Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-white hover:text-yellow-300 transition"
            title="Toggle Theme"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          {authButton}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-purple-700 text-white px-6 py-4">
          <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>
            Contact
          </NavLink>
          <NavLink to="/services" className={navLinkClass} onClick={toggleMenu}>
            Service
          </NavLink>

          {/* Mobile Theme Toggle */}
          <button
            onClick={() => {
              toggleTheme();
              toggleMenu();
            }}
            className="text-white flex items-center gap-2 hover:text-yellow-300 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Mobile Auth Button */}
          <div onClick={toggleMenu}>{authButton}</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
