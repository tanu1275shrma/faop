import React from "react";
import { FaBriefcase, FaBookOpen, FaDatabase } from "react-icons/fa";

const features = [
  {
    icon: (
      <FaBriefcase
        size={60}
        className="text-cyan-400 drop-shadow-[0_0_15px_#00ffff]"
      />
    ),
    title: "20+ Hours Record Training",
    desc: "Learn QuickBooks & Xero software with real-life accounting and bookkeeping case studies.",
  },
  {
    icon: (
      <FaBookOpen
        size={60}
        className="text-purple-400 drop-shadow-[0_0_15px_#a855f7]"
      />
    ),
    title: "15 Client Acquisition E-books",
    desc: "Master strategies to find international clients via LinkedIn, Upwork, CPA databases, cold calls, and more.",
  },
  {
    icon: (
      <FaDatabase
        size={60}
        className="text-blue-400 drop-shadow-[0_0_15px_#3b82f6]"
      />
    ),
    title: "3 Lakh+ CPA Contacts (India & Abroad)",
    desc: "Get verified email IDs & WhatsApp numbers of CPA firms across US, UK, Canada, Australia, Singapore, UAE & more.",
  },
];

const WhatWillYouGet = () => {
  return (
    <section className="relative bg-[#0A2D68] text-white py-24 px-6 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#0A2D68] opacity-95"></div>

      {/* Section Title */}
      <div className="relative text-center z-10 mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-yellow-500">
          What You Will Get in FAOP
        </h2>
      </div>

      {/* Simple Rounded Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#0b132e] border border-cyan-400/40 rounded-2xl p-8 w-[300px] sm:w-[320px] text-center shadow-[0_0_25px_#00ffff20] hover:shadow-[0_0_45px_#00ffff60] transition-all duration-500 hover:scale-105"
          >
            <div className="mb-6 flex justify-center">{feature.icon}</div>
            <h3 className="text-lg md:text-xl text-yellow-500 font-semibold mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-100 text-sm md:text-base leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative z-10 text-center mt-20">
        <button className="bg-yellow-500 text-[#0A2D68] font-extrabold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default WhatWillYouGet;
