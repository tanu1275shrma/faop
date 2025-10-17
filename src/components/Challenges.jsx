import React from "react";
import { motion } from "framer-motion";

export default function Challenges() {
  const challenges = [
    {
      id: "01",
      title: "Limited Growth",
      text: "In traditional CA practice, growth is limited due to dependencies and lack of modern technology.",
    },
    {
      id: "02",
      title: "High Competition",
      text: "CA practices face high competition due to many firms serving the same local clients.",
    },
    {
      id: "03",
      title: "Limited Technology",
      text: "Reliance on manual methods slows work and hinders scalability.",
    },
    {
      id: "04",
      title: "Confusion",
      text: "Many accountants are unsure how to start outsourcing or streamline processes effectively.",
    },
    {
      id: "05",
      title: "Talent Retention",
      text: "Difficulty in retaining skilled staff due to workload and limited automation.",
    },
  ];

  return (
    <section className="bg-[#F9C744] py-10 md:py-14 px-6 md:px-16 flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* === HEADING === */}
      <div className="text-center mb-8 md:mb-10 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight">
          Challenges Faced by Indian Accountants and CAs
        </h2>
      </div>

      {/* === CONTENT === */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-7xl">
        {/* LEFT IMAGE */}
        <div className="w-full md:w-[38%] flex justify-center">
          <img
            src="/images/sjm.jpg"
            alt="Challenges Illustration"
            className="w-[80%] md:w-[85%] lg:w-[90%] max-w-[320px] md:max-w-[400px] rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* RIGHT SIDE CHALLENGES */}
        <div className="relative w-full md:w-[55%] flex flex-col gap-4">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-[18px] top-0 bottom-0 w-[2.5px] bg-blue-900 rounded-full"></div>

          {challenges.map((ch, i) => (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start md:items-center gap-3 md:gap-4"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-950 text-white font-bold text-xs md:text-sm z-10">
                {ch.id}
              </div>

              {/* Text Box */}
              <div className="bg-blue-950 text-white rounded-xl shadow-md p-3 md:p-4 w-full">
                <h3 className="text-yellow-400 font-semibold text-sm md:text-base mb-1">
                  {ch.title}
                </h3>
                <p className="text-gray-100 text-xs md:text-sm leading-snug">
                  {ch.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
