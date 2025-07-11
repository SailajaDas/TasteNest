import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-700 via-indigo-800 to-pink-700 text-white py-3 px-4 md:px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 mt-5">


        {/* Brand Name */}
        <div className="text-2xl font-extrabold tracking-wide mb-4 md:mb-0">
          TasteNest
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-base font-medium mb-4 md:mb-0 ">
          <li>
            <a href="/" className="hover:text-indigo-300 transition duration-200">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-indigo-300 transition duration-200">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-indigo-300 transition duration-200">Contact</a>
          </li>
          <li>
            <a href="/services" className="hover:text-indigo-300 transition duration-200">Services</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-5 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-indigo-300">
            <FaFacebookSquare />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-indigo-300">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-indigo-300">
            <BsTwitterX />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} TasteNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
