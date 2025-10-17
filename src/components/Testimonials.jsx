import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rick Wright",
    role: "Executive Engineer",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    text: "Working with this company was a great experience. The process was smooth, transparent, and results-driven. The team’s attention to detail is unmatched.",
  },
  {
    name: "Devon Miles",
    role: "Executive Engineer",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    text: "They are reliable, efficient, and innovative. Our collaboration was seamless, and I’m impressed with the results. I look forward to working together again.",
  },
  {
    name: "Sara Adams",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    text: "A wonderful experience from start to finish. They understood our vision and delivered above expectations. The communication was top-notch.",
  },
  {
    name: "Mike Torello",
    role: "Executive Engineer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "The team exceeded my expectations. Their professionalism and dedication truly set them apart. I highly recommend their services to anyone looking for excellence.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#F9C744] py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full  backdrop-blur-2xl shadow-2xl rounded-3xl p-10 text-center relative overflow-visible border border-blue-950 ">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2149] mt-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3 text-sm md:text-base"></p>
        </div>

        {/* Testimonials */}
        <div className="relative w-full flex justify-center items-center overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center"
            >
              {[0, 1, 2].map((offset) => {
                const i = (index + offset) % testimonials.length;
                const t = testimonials[i];
                return (
                  <div
                    key={t.name}
                    className="relative bg-white/80 border border-[#d0e3ff] rounded-2xl p-8 pt-16 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl max-w-sm w-full backdrop-blur-md"
                  >
                    {/* Avatar */}
                    <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-[5px] border-white shadow-lg overflow-hidden bg-white">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
                      {t.text}
                    </p>

                    {/* Info */}
                    <h3 className="mt-6 font-semibold text-[#0b2149] text-lg">
                      {t.name}
                    </h3>
                    <p className="text-xs text-[#3a6ff7]">{t.role}</p>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-5 mt-12">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-[#3a6ff7]/20 hover:bg-[#3a6ff7]/40 text-[#0b2149] flex items-center justify-center shadow-lg transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[#3a6ff7]/20 hover:bg-[#3a6ff7]/40 text-[#0b2149] flex items-center justify-center shadow-lg transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
