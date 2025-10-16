import React from "react";
import { motion } from "framer-motion";

export default function Challenges() {
  const challenges = [
    {
      id: "01",
      title: "Limited Growth",
      text: "In traditional CA Ppractice growth is limited due to dependencies and technoloies.",
    },
    {
      id: "02",
      title: "Highh Competition",
      text: "CA practices face high competition due to large number of firms serving same local clients.",
    },
    {
      id: "03",
      title: "Limited Technology",
      text: "Reliance on manual metods slows work and hinders scalability.",
    },
    {
      id: "04",
      title: "Confusion",
      text: "Many CA's and accountants are unsure about how to start outsourcing, what processes to follow.",
    },
  ];

  return (
    <section className="bg-blue-100 py-18 px-10 md:px-12 lg:px-20 flex flex-col items-center">
      {/* === HEADING === */}
      <div className="text-center mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight">
          Challenges Faced by Indian Accountants and CAs
        </h2>
      </div>

      {/* === MAIN CONTENT === */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-7xl">
        {/* LEFT SIDE IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-none">
          <img
            src="/images/sjm.jpg"
            alt="Challenges Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* RIGHT SIDE TIMELINE */}
        <div className="w-full md:w-1/2 relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-5 top-0 bottom-0 w-[3px] bg-blue-800 rounded-full"></div>

          <div className="flex flex-col gap-8">
            {challenges.map((ch, i) => (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start md:items-center gap-4 sm:gap-6"
              >
                {/* Step Circle */}
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-900 text-white font-bold text-sm sm:text-base z-10 relative">
                  {ch.id}
                </div>

                {/* Challenge Box */}
                <div className="bg-blue-90 border border-blue-200 rounded-2xl shadow-md p-4 sm:p-5 w-full">
                  <h3 className="text-blue-700 font-semibold text-base sm:text-lg mb-1">
                    {ch.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {ch.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
