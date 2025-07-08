"use client";
import React from "react";
import { FaDiscord, FaYoutube, FaTwitter, FaLinkedin, FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rotate-45 flex justify-center items-center">
            <div className="w-3 h-3 bg-black -rotate-45"></div>
          </div>
          <span className="text-xl font-semibold">
            Cyber<span className="text-purple-400">Info</span>
          </span>
        </div>

        {/* Center - Nav Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          <li><a href="#" className="hover:text-purple-400">Home</a></li>
          <li><a href="#" className="hover:text-purple-400">Team</a></li>
          <li><a href="#" className="hover:text-purple-400">Blog</a></li>
          <li><a href="#" className="hover:text-purple-400">Donate</a></li>
          <li><a href="#" className="hover:text-purple-400">Volunteer</a></li>
          <li><a href="#" className="hover:text-purple-400">Contact</a></li>
        </ul>

        {/* Right - Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="#" className="hover:text-purple-400"><FaDiscord /></a>
          <a href="#" className="hover:text-purple-400"><FaYoutube /></a>
          <a href="#" className="hover:text-purple-400"><FaTwitter /></a>
          <a href="#" className="hover:text-purple-400"><FaLinkedin /></a>
          <a href="#" className="hover:text-purple-400"><FaMoon /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
