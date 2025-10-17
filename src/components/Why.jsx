import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    front: "Huge Global Demand",
    back: "US, UK, Canada, Australia, and UAE businesses are outsourcing accounting/bookkeeping to India.",
  },
  {
    id: 2,
    front: "High Earnings Potential",
    back: "A single client can give recurring revenue of ₹1–2 lakh per month.",
  },
  {
    id: 3,
    front: "Lack of Awareness",
    back: "Many CAs/Accountants don’t know how to acquire foreign clients or work on systems like QuickBooks or Xero.",
  },
  {
    id: 4,
    front: "Skill Gap",
    back: "Traditional CA curriculum focuses on Indian accounting; foreign accounting software & outsourcing model aren’t taught.",
  },
  {
    id: 5,
    front: "Step-by-Step Guidance",
    back: "Professionals need structured courses with practical training, examples, and client acquisition strategies.",
  },
  {
    id: 6,
    front: "Empowering CA Firms",
    back: "Our mission is to make 1,000+ CA firms in India capable of running successful outsourcing practices.",
  },
];

const Why = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-[#F9C744]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
        {/* === HEADING === */}
        <div className="max-w-3xl">
          <h2 className="text-2xl flex items-center justify-center text-center sm:text-3xl md:text-4xl font-extrabold text-[#0A2D68] mb-3">
            Why Choose FAOP for Accounting Outsourcing
          </h2>
        </div>

        {/* === COMPACT 3×2 GRID === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group h-40 sm:h-44 md:h-48 [perspective:1000px]"
            >
              {/* Flip Container */}
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-xl shadow-lg">
                {/* Front Side */}
                <div className="absolute inset-0 bg-[#0A2D68] text-white flex items-center justify-center text-center text-sm sm:text-base font-extrabold px-3 rounded-xl [backface-visibility:hidden]">
                  {card.front}
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-white text-[#1a1446] font-bold flex items-center justify-center text-center text-xs sm:text-sm md:text-base px-4 py-3 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  {card.back}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
