import React from "react";

const About = () => {
  return (
    <section className="relative bg-[#F9C744] text-gray-800 overflow-hidden">
      {/* About content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Left text */}
        <div className="flex-1">
          <h2
            className="text-3xl md:text-5xl font-extrabold text-center text-blue-950
           mb-6"
          >
            Introducing our FAOP Course
          </h2>

          <p className="text-blue-950 text-semibold leading-relaxed">
            Foreign Accounting Outsourcing Practice is a business model where
            Indian Chartered Accountants or accounting firms handle the
            accounting work of international clients on a contractual or
            recurring basis — remotely, through online tools and software.
            <p className="text-blue-950 text-semibold leading-relaxed">
              Foreign Accounting Outsourcing Practice (FAOP) means providing
              accounting, bookkeeping, and related financial services from India
              (or another low-cost country) to clients located abroad, typically
              in countries like the **USA, UK, Canada, Australia, UAE, etc.
            </p>
          </p>
        </div>

        {/* Right video/image */}
        <div className="flex-1 relative group">
          <img
            src="/images/about1.jpeg"
            alt="Team discussion"
            className="w-full rounded-3xl shadow-lg"
          />
          <button className="absolute inset-0 flex justify-center items-center bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition"></button>
          <p className="absolute bottom-6 right-2 w-full text-right text-white font-bold text-sm">
            - by CA Sidharth Jain
          </p>
        </div>
        <button className="absolute bottom-3 left-1/2 -translate-x-1/2 px-10 py-4 bg-[#0A2D68] text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default About;
