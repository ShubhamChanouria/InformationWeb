"use client";
import React from "react";
import Image from "next/image";

const Powered = () => {
  return (
    <section className="bg-[#0b0c2a] text-white ">
      <div className=" mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="relative w-full h-[300px] md:h-[700px]">
          <Image
            src="/power.webp" // <- Replace with your actual image file name
            alt="Charitable support visual"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right - Text Content */}
        <div className="sm:w-[70%] w-[90%] m-auto">
          <p className="text-purple-400 font-medium text-sm uppercase mb-2">Charitable funding</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powered by you</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We rely on the generosity of our donors to provide accessible cybersecurity education
            to individuals looking to advance their careers. As a registered 501(c)(3) nonprofit
            corporation, your donations are tax-deductible and enable us to offer programs and
            resources free of charge. Your support helps us empower individuals and secure our
            future in the digital age. Join our mission by contributing to Cyber Info today!
          </p>

          <a
            href="#"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Donate on Open Collective
          </a>
        </div>
      </div>
    </section>
  );
};

export default Powered;
