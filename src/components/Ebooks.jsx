import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/images/e-book1.png",
    text: "LinkedIn Lead Magnet Mastering Client Acquisition via LinkedIn.",
  },
  {
    id: 2,
    image: "/images/e-book2.png",
    text: "Social Media Growth, Getting Foreign Clients from Instagram, Facebook & Twitter.",
  },
  {
    id: 3,
    image: "/images/e-book3.png",
    text: "CPA Network Profits How to Connect with CPAs .",
  },
  {
    id: 4,
    image: "/images/e-book4.png",
    text: "Cold Email Playbook How to Reach Foreign Clients via Cold Emails.",
  },
  {
    id: 5,
    image: "/images/e-book5.png",
    text: "Cold Calling Blueprint Scripts and Strategies to Win Foreign Clients.",
  },
  {
    id: 6,
    image: "/images/e-book6.png",
    text: "Website & SEO Tactics to Attract International Clients.",
  },
  {
    id: 7,
    image: "/images/e-book7.png",
    text: "Upwork & Freelancer Mastery .",
  },
  {
    id: 8,
    image: "/images/e-book8.png",
    text: "Referrals & Affiliates Building a Global Referral Network.",
  },
  {
    id: 9,
    image: "/images/e-book9.png",
    text: "Paid Ads for Accountants Facebook & Google Ads.",
  },
  {
    id: 10,
    image: "/images/e-book10.png",
    text: "Paid Ads for Accountants Facebook & Google Ads for Foreign Client .",
  },
];

const Ebooks = () => {
  return (
    <section className="bg-[#F9C744] py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Centered Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1446] text-center leading-tight">
          Client Acquisition EBooks you will get
        </h2>

        {/* Carousel */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-5 md:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 30,
            }}
          >
            {[...cards, ...cards].map((card) => (
              <motion.div
                key={card.id + Math.random()}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative h-48 sm:h-56 md:h-60 lg:h-64 xl:h-72 min-w-[220px] sm:min-w-[250px] md:min-w-[280px] rounded-2xl bg-black overflow-hidden shadow-xl group cursor-pointer flex items-center justify-center"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500"></div>

                {/* Text */}
                <div className="relative z-10 text-center text-white p-3 sm:p-4 flex flex-col items-center justify-center">
                  <p className="text-xs sm:text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ebooks;
