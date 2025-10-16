// components/Solutions.jsx
import React, { useState } from "react";

const solutions = [
  {
    title: "Practical Training 20+ Hours",
    image: "/images/bookkeeping.jpg",
    backText:
      "Hands-on training on QuickBooks & Xero with real-life balance sheets and examples.",
  },
  {
    title: "15 Client Acquisition E-Books",
    image: "/images/payroll.jpg",
    backText: "Proven strategies to acquire international clients.",
  },
  {
    title: "10 Country-Specific E-Books",
    image: "/images/taxation.jpg",
    backText:
      "Deep insights into outsourcing opportunities from top countries.",
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
    title: "Exclusive WhatsApp Group ",
    image: "/images/audit.jpg",
    backText: "Continuous guidance, strategies, and community learning.",
  },
  {
    title: "Doubt Clearing & Notes ",
    image: "/images/others.jpg",
    backText:
      "Make your notes, ask your doubts, and get them resolved in a Live Doubt Session.",
  },
];

const Solutions = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    // For mobile/tap flip
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          The solution is <span className="text-yellow-500">FAOP</span>
        </h2>
        <p className="text-white text-base md:text-lg max-w-2xl mx-auto mb-14">
          We have designed a comprehensive course for professionals who want to
          build and scale their Outsourcing Practice.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group [perspective:1000px] cursor-pointer"
              onClick={() => handleFlip(index)}
            >
              <div
                className={`relative w-full h-52 sm:h-60 md:h-72 transition-transform duration-700 [transform-style:preserve-3d] ${
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
                    <h3 className="text-blue-950 text-base sm:text-lg md:text-xl font-semibold px-3">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 rounded-2xl bg-yellow-500 p-4 sm:p-5 flex items-center justify-center text-center text-blue-950 font-semibold text-sm sm:text-base [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-lg">
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
