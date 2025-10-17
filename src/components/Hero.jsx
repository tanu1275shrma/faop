import React from "react";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center min-h-[90vh] sm:min-h-screen 
             text-white px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 bg-[#0A2D68]
       "
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6 tracking-tight px-2">
          Start Your <span className="text-yellow-400">Foreign Accounting</span>{" "}
          Outsourcing Practice (FAOP)
        </h1>

        <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed px-2">
          From India to the world: Convert your CA skills into international
          bookkeeping, payroll & tax services. Step-by-step training + client
          acquisition blueprint.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <button className="bg-yellow-500 text-blue-950 font-extrabold text-sm sm:text-base px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-orange-400/30 transition-all duration-300">
            Earn in USD | GBP | AUD
          </button>
          <button className="bg-yellow-500  text-blue-950 font-extrabold text-sm sm:text-base px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-orange-400/30 transition-all duration-300">
            Work Remotely
          </button>
          <button className="bg-yellow-500  text-blue-950 font-extrabold text-sm sm:text-base px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-orange-400/30 transition-all duration-300">
            Scale Globally
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
