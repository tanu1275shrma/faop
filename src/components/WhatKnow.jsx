import React from "react";
import { motion } from "framer-motion";

const WhatKnow = () => {
  const points = [
    {
      title: "Basic Accounting Knowledge",
      text: "A solid foundation in accounting is essential to understand global bookkeeping processes.",
    },
    {
      title: "Basic English Communication Skills",
      text: "You should be able to communicate confidently through emails and calls.",
    },
    {
      title: "Laptop & Internet Connection",
      text: "Investing time wisely, delivering results constantly with dedication.",
    },
    {
      title: "Dedication and Time",
      text: "Review client onboarding, communication, and compliance processes.",
    },
    {
      title: "Openness to Learn",
      text: "Curiosity that drives continuous improvement and learning is the key .",
    },
    {
      title: "Commitment to Excellence",
      text: "Stay consistent and focused to achieve high-quality results for clients.",
    },
  ];

  return (
    <section className="bg-[#F9C744] text-gray-900 py-16 sm:py-20 px-6 sm:px-10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2D68] mb-3">
          What You Should Know Before Enrolling
        </h2>
        <p className="text-blue-950 font-bold mb-12 text-sm sm:text-base">
          Get familiar with key points before you join our program.
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
