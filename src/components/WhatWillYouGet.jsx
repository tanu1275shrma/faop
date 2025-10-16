import React from "react";
import { FaBriefcase, FaBookOpen, FaDatabase } from "react-icons/fa";

const features = [
  {
    icon: (
      <FaBriefcase
        size={70}
        className="text-cyan-400 drop-shadow-[0_0_15px_#00ffff]"
      />
    ),
    title: "20+ Hours Record Training",
    desc: "Learn QuickBooks & Xero software with real-life accounting and bookkeeping case studies.",
  },
  {
    icon: (
      <FaBookOpen
        size={70}
        className="text-purple-400 drop-shadow-[0_0_15px_#a855f7]"
      />
    ),
    title: "15 Client Acquisition E-books",
    desc: "Master strategies to find international clients via LinkedIn, Upwork, CPA databases, cold calls, and more.",
  },
  {
    icon: (
      <FaDatabase
        size={70}
        className="text-blue-400 drop-shadow-[0_0_15px_#3b82f6]"
      />
    ),
    title: "3 Lakh+ CPA Contacts (India & Abroad)",
    desc: "Get verified email IDs & WhatsApp numbers of CPA firms across US, UK, Canada, Australia, Singapore, UAE & more.",
  },
];

const WhatWillYouGet = () => {
  return (
    <section className="relative bg-[#03091e] text-white py-28 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081229] via-[#050c25] to-[#03091e] opacity-90"></div>

      {/* Section Heading */}
      <div className="relative text-center z-10 mb-20 md:mb-24">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
          What You Will Get in FAOP
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Unlock global career opportunities with real outsourcing experience
          and hands-on accounting skills.
        </p>
      </div>

      {/* Hexagon Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-10 md:gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group w-[310px] h-[340px] sm:w-[300px] sm:h-[380px] flex items-center justify-center"
          >
            {/* Outer glowing hexagon */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-70 group-hover:opacity-100 blur-md transition-all duration-500 clip-hex"></div>

            {/* Main hexagon */}
            <div
              className="absolute inset-[3px] bg-[#0b132e] clip-hex border border-cyan-400/40 shadow-[0_0_35px_#00ffff30] flex flex-col items-center justify-center text-center px-8
          
             py-7 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_60px_#00ffff60]"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 tracking-wide leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 text-center mt-24 md:mt-28">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default WhatWillYouGet;
