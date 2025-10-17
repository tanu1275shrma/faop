// components/RapidlyGrowing.jsx
import React from "react";
import { Rocket, DollarSign, Users, ArrowUp } from "lucide-react";

const RapidlyGrowing = () => {
  return (
    <section className="relative py-20 bg-[#0A2D68] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          The Future of <span className="text-yellow-400">Outsourcing</span>
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Discover why Accounting Outsourcing is the Fastest-Growing Global
          Practice Area
        </p>

        {/* Main Info Container */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-3xl p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center shadow-2xl backdrop-blur-sm">
          {/* Left Stats Section */}
          <div className="space-y-8">
            {/* 1 */}
            <div className="flex items-start space-x-4 text-left">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full">
                <Rocket className="text-blue-400" size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Skilled Manpower
                </h3>
                <p className="text-gray-300 text-sm">
                  CA's familiar with IFRS, GAAP, and Digital Tools like
                  QuickBooks Online, Xero, Dext.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-start space-x-4 text-left">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full">
                <DollarSign className="text-green-400" size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">3X</h3>
                <p className="text-gray-300 text-sm">
                  Higher Profit Margins — firms achieve up to 3X higher margins.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-start space-x-4 text-left">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full">
                <Users className="text-purple-400" size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">80%</h3>
                <p className="text-gray-300 text-sm">
                  Global Demand increased 80% for Skilled and Specialized
                  Accounting.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Graphic */}
          <div className="flex flex-col items-center justify-center relative">
            {/* Chart Box */}
            <div className="relative w-full max-w-sm aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl shadow-lg border border-gray-700 flex flex-col justify-center items-center overflow-hidden">
              {/* Upward Arrow */}
              <div className="absolute -top-4 sm:-top-6 right-6">
                <ArrowUp className="text-orange-400 text-3xl animate-bounce" />
              </div>

              {/* Bars */}
              <div className="relative w-5/6 h-40 flex items-end justify-between space-x-2 sm:space-x-3">
                <div className="w-5 sm:w-6 bg-blue-500 rounded-t-lg h-16 sm:h-20"></div>
                <div className="w-5 sm:w-6 bg-blue-500/80 rounded-t-lg h-24 sm:h-28"></div>
                <div className="w-5 sm:w-6 bg-blue-400 rounded-t-lg h-28 sm:h-32"></div>
                <div className="w-5 sm:w-6 bg-orange-400 rounded-t-lg h-36 sm:h-40"></div>
                <div className="w-5 sm:w-6 bg-orange-500 rounded-t-lg h-40 sm:h-44"></div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-orange-400 to-orange-500 rounded-full"></div>
              </div>

              {/* Label */}
              <p className="mt-4 text-lg sm:text-base text-gray-100">
                2020 → 2025 Growth Trend
              </p>
            </div>

            {/* Caption */}
            <p className="mt-6 text-yellow-400 font-semibold text-base sm:text-lg md:text-xl">
              Your Career Growth will Boom ↑ with FAOP
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="bg-[#F9C744] text-blue-950 font-extrabold text-base md:text-lg px-8 py-3 rounded-full transition-all shadow-md hover:shadow-orange-400/40">
            Start Your Outsourcing Practice
          </button>
        </div>
      </div>
    </section>
  );
};

export default RapidlyGrowing;
