import React from "react";
import { motion } from "framer-motion";

const WhatKnow = () => {
  const points = [
    {
      title: "Chatered Accountant(CA'S, CS)",
      text: "Want to expand your practice globally or get international accounting exposure through UK/US.",
    },
    {
      title: "Semi-Qualified CA",
      text: "Looking to earn in dollars while learning practical foriegn accounting tools and systems.",
    },
    {
      title: "Commerce Graduate and PostGraduate",
      text: "Aspiring to build a stable, well-paying carrer in international bookkeeping and taxation.",
    },
    {
      title: "Accountant in Indian Firm",
      text: "Ready to upskill and switch from local accounting to high paying global accounting.",
    },
    {
      title: "Working CA's",
      text: "Dreaming of flexible work-from-home roles with clients across the world .",
    },
    {
      title: "Freelancer or Virtual Assistant",
      text: "Wanting to add foreign accounting services to you portfolio and increase earning potential 3X-5X.",
    },
  ];

  return (
    <section className="bg-[#F9C744] text-gray-900 py-16 sm:py-20 px-6 sm:px-10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2D68] mb-3">
          What Should Join
        </h2>
        <p className="text-blue-950 font-bold mb-12 text-sm sm:text-base">
          Give your local accounting carrer a kick Start.
        </p>

        {/* === GRID 3x2 EQUAL CAPSULES === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-[#0a2a7a]
              rounded-full px-6 py-3 w-full max-w-[380px] h-[100px]
              shadow-[0_4px_16px_rgba(10,42,122,0.2)]
              hover:shadow-[0_6px_20px_rgba(10,42,122,0.35)]
              transition-all duration-300"
            >
              {/* Number Circle */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#0a2a7a] font-bold text-base shadow-md flex-shrink-0">
                {index + 1}
              </div>

              {/* Text */}
              <div className="text-left text-white">
                <h3 className="text-sm sm:text-base text-yellow-400 font-semibold mb-0.5">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm opacity-90 leading-snug">
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatKnow;
