"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.webp')" }}
    >
      {/* Overlay */}
      <div className="" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl">
          Empower your <br /> cybersecurity career
        </h1>

        <a
          href="#"
          className="mt-6 bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Join our Community
        </a>


        {/* Down Arrow */}
        <div className="absolute bottom-10 animate-bounce">
          <FaArrowDown size={24} className="text-purple-300" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
