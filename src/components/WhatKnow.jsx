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
      text: "You should be able to communicate confidently through emails and client calls.",
    },
    {
      title: " Laptop & Internet Connection",
      text: "Investing time wisely , delivering results constantly with dedication.",
    },
    {
      title: "Dedication and Time",
      text: "Review client onboarding, communication, and compliance processes.",
    },
    {
      title: "Openness to learn",
      text: "Curiosity that drives continous improvement and learning is the key to grow.",
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-20 px-6 sm:px-10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent_70%)]"></div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-5xl sm:text-4xl font-bold text-[#061d4d] mb-2">
          What You Should Know Before Enrolling
        </h2>
        <p className="text-blue-600 mb-16 text-sm sm:text-base">
          Get familiar with key points before you join our program.
        </p>

        {/* Cards Section */}
        <div className="flex flex-col items-center gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-6 bg-[#0a2a7a] 
              rounded-full px-6 sm:px-10 py-3 w-full sm:w-[520px] shadow-[0_6px_20px_rgba(10,42,122,0.2)] 
              hover:shadow-[0_8px_28px_rgba(10,42,122,0.4)] transition-all duration-300"
            >
              {/* Circular Number */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#0a2a7a] font-bold text-xl shadow-md flex-shrink-0">
                {index + 1}
              </div>

              {/* Text Content */}
              <div className="text-center sm:text-left text-white">
                <h3 className="text-lg sm:text-xl text-yellow-400 font-semibold mb-1">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base opacity-90 leading-relaxed">
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
