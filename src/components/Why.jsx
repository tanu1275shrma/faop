import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/images/why1.png",
    text: "US, UK, Canada, Australia, and UAE businesses are outsourcing accounting/bookkeeping to India.",
  },
  {
    id: 2,
    image: "/images/why2.png",
    text: "A single client can give recurring revenue of ₹1–2 lakh per month.",
  },
  {
    id: 3,
    image: "/images/why3.png",
    text: "Many CAs/Accountants don’t know how to acquire foreign clients or work on their systems (QuickBooks, Xero, etc).",
  },
  {
    id: 4,
    image: "/images/why4.png",
    text: "Traditional CA curriculum focuses on Indian accounting; foreign accounting software & outsourcing model isn’t taught.",
  },
  {
    id: 5,
    image: "/images/why5.png",
    text: "Professionals need a structured course with practical training, real-life examples, and client acquisition strategies.",
  },
  {
    id: 6,
    image: "/images/why6.png",
    text: "Our mission is to make 1,000+ CA firms in India capable of running successful outsourcing practices.",
  },
];

const Why = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12">
      {/* === BACKGROUND LAYER === */}
      <div className="absolute inset-0 bg-[#1a1446] -z-10"></div>

      {/* === LIGHT GRAY OVERLAY ON TOP === */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#f5f7fa]/95 -z-0"></div>

      {/* === CONTENT === */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 z-10">
        {/* LEFT SIDE (Text Area) */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1446] leading-tight">
            Why Choose FAOP <br /> for Accounting <br /> Outsourcing
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            As a market leader in outsourcing, we understand and align with your
            firm’s goals and help achieve strategic growth through bespoke
            talent and technology support.
          </p>
        </div>

        {/* RIGHT SIDE (3x2 Grid) */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative h-48 sm:h-56 md:h-60 lg:h-64 xl:h-72 rounded-2xl bg-black overflow-hidden shadow-xl group cursor-pointer flex items-center justify-center"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500"></div>

              {/* Text */}
              <div className="relative z-10 text-center text-white p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center">
                <p className="text-xs sm:text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
