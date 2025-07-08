"use client";
import React from "react";
import { FaDiscord, FaYoutube, FaTwitter, FaLinkedin, FaMoon } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c2a] text-gray-300 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top Grid */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rotate-45 flex justify-center items-center">
                <div className="w-3 h-3 bg-black -rotate-45"></div>
              </div>
              <span className="text-2xl font-semibold text-white">
                Cyber<span className="text-purple-400">Info</span>
              </span>
            </div>
          </div>

          {/* Columns */}
          <div>
            <h4 className="font-semibold text-white mb-2">Contribute</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Donate</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Financials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Community</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Discord</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Trust and Safety</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Trust Center</a></li>
              <li><a href="#">Report Abuse</a></li>
              <li><a href="#">Vulnerability Disclosure</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-10">
          <h5 className="text-white font-semibold mb-2">Subscribe to our newsletter</h5>
          <p className="text-sm mb-6">The latest news, articles, and resources; straight to your inbox!</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#141630] text-white px-4 py-3 rounded-md w-full outline-none"
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>
            Cyber Info is a 501(c)(3) nonprofit organization, EIN <a href="#" className="text-purple-400 underline">92-1729433</a>.
            Donations are tax-deductible. © 2025 Cyber Info. All rights reserved.
          </p>
          <p>
            <a href="#" className="text-purple-400 underline mt-2 md:mt-0 block md:inline">Trademark Disclaimer</a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center space-x-6 text-xl text-gray-400">
          <a href="#" className="hover:text-purple-400"><FaDiscord /></a>
          <a href="#" className="hover:text-purple-400"><FaYoutube /></a>
          <a href="#" className="hover:text-purple-400"><FaTwitter /></a>
          <a href="#" className="hover:text-purple-400"><FaLinkedin /></a>
          <a href="#" className="hover:text-purple-400"><FaMoon /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
