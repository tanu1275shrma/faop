import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.png",
  "/images/gallery6.png",
];

const Gallery = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="w-12 h-[2px] bg-[#c7a962]"></span>
            <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-wide">
              Gallery
            </h2>
            <span className="w-28 h-[2px] bg-[#c7a962]"></span>
          </div>
          <p className="text-gray-400 mt-3 text-sm md:text-base max-w-lg mx-auto md:mx-0">
            Explore our achievements and activities throughout the journey of
            CA.
          </p>
        </div>

        {/* Top carousel */}
        <div className="overflow-hidden mb-10">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 25,
            }}
          >
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg min-w-[300px] md:min-w-[400px] flex-shrink-0 group"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-medium text-lg tracking-wide">
                    View Image
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 25,
            }}
          >
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg min-w-[300px] md:min-w-[400px] flex-shrink-0 group"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-medium text-lg tracking-wide">
                    View Image
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
