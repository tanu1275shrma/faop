import React from "react";

const About = () => {
  return (
    <section className="relative bg-white text-gray-800 overflow-hidden">
      {/* Curved top to blend with Hero */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[140px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V90c150,40,350,40,600,0s450-40,600,0V0Z"
            fill="white" // same color as Hero bottom
          />
        </svg>
      </div>

      {/* About content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Left text */}
        <div className="flex-1">
          <h2
            className="text-3xl md:text-5xl font-extrabold text-blue-950
           mb-6"
          >
            Introducing our <span classname="text-orange-600">FAOP</span> Course
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Foreign Accounting Outsourcing Practice is your gateway to the
            global accounting world. It’s a fast-growing business model where
            Indian CAs and accountants offer bookkeeping, payroll, taxation, and
            reporting services to international clients — especially from the
            US, UK, Canada, and Australia. With rising global demand and
            advanced cloud tools, outsourcing has become the smartest way for
            firms abroad to save time and costs — and for Indian professionals
            to earn in foreign currencies, work remotely, and expand globally.
            In this course we will teach you step-by-step with proven strategies
            that exactly how to set up, manage, and scale your own foreign
            accounting outsourcing practice — from client acquisition to process
            setup, data security, and international compliance.
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
        <button className="absolute bottom-3 left-1/2 -translate-x-1/2 px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default About;
