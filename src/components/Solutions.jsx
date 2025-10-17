import React, { useState } from "react";

const solutions = [
  {
    title: "Bookkeeping & Accounting",
    image: "/images/bookkeeping.jpg",
    backText:
      "Recording daily transactions in QuickBooks, Xero, Zoho Books, or Sage. Managing accounts payable & receivable.",
  },
  {
    title: "Payroll Processing",
    image: "/images/payroll.jpg",
    backText: "Managing employee payroll for US/UK/AUS companies.",
  },
  {
    title: "Tax Preparation Support",
    image: "/images/taxation.jpg",
    backText:
      "Preparing trial balances, reconciliations, and supporting schedules for CPAs (US tax season work).",
  },
  {
    title: "3 Lakh+ CPA & Business Owner Database",
    image: "/images/salestax.jpg",
    backText:
      "Email IDs & WhatsApp numbers to directly reach potential clients.",
  },
  {
    title: "Global Career Guidance",
    image: "/images/cfo.jpg",
    backText:
      "Know whether CPA, ACCA, or ICAEW suits your career growth and opportunities abroad.",
  },
  {
    title: "Mentorship Access",
    image: "/images/financial.jpg",
    backText:
      "Guidance from experienced mentors on how to expand your outsourcing practice.",
  },
  {
    title: "Exclusive WhatsApp Group",
    image: "/images/audit.jpg",
    backText: "Continuous guidance, strategies, and community learning.",
  },
  {
    title: "Doubt Clearing & Notes",
    image: "/images/others.jpg",
    backText:
      "Make your notes, ask your doubts, and get them resolved in a Live Doubt Session.",
  },
];

const Solutions = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#0A2D68]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Services offered by <span className="text-yellow-500">Us</span>
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-12">
          We have designed a comprehensive course for professionals who want to
          build and scale their Outsourcing Practice.
        </p>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-5 lg:gap-x-6 gap-y-8 place-items-center">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group [perspective:1000px] cursor-pointer w-full max-w-[250px]"
              onClick={() => handleFlip(index)}
            >
              <div
                className={`relative w-full h-48 sm:h-56 md:h-60 transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedIndex === index
                    ? "[transform:rotateY(180deg)]"
                    : "group-hover:[transform:rotateY(180deg)]"
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden] shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <h3 className="text-blue-950 text-sm sm:text-base md:text-lg font-semibold px-3">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 rounded-2xl bg-yellow-500 p-3 sm:p-4 flex items-center justify-center text-center text-blue-950 font-semibold text-xs sm:text-sm md:text-base [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-lg">
                  {item.backText}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
