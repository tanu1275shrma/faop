import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Globe2,
  ShoppingCart,
  Rocket,
} from "lucide-react";

const targets = [
  {
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    title: "CPA Firms (USA/UK/AUS)",
    description:
      "Accounting firms in major countries looking to increase profitability and capacity by efficiently outsourcing.",
  },
  {
    icon: <Building2 className="w-10 h-10 text-yellow-500" />,
    title: "SME & Medium Businesses Abroad",
    description:
      "Looking for cost-effective financial management to increase capacity by outsourcing.",
  },
  {
    icon: <Globe2 className="w-10 h-10 text-orange-500" />,
    title: "Small & Medium Abroad",
    description:
      "International needs include financial management, remote bookkeeping, and compliance.",
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-amber-600" />,
    title: "E-commerce Sellers (Amazon, Shopify, etc.)",
    description:
      "Online merchants requiring specialized inventory accounting, sales tax, and multi-platform integration.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-blue-400" />,
    title: "Startups Needing Virtual Accounting",
    description:
      "New ventures seeking flexible, scalable setups without the overhead of an in-house team.",
  },
];

const Targets = () => {
  return (
    <section className="py-20 bg-blue-200">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-2 uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Your Ideal Clients
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl font-semibold text-orange-500 mb-5 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Target Audience for Foreign Accounting Outsourcing
        </motion.p>

        {/* Vertical List */}
        <div className="flex flex-col gap-8 text-left">
          {targets.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-5 bg-gray-200 border border-blue-600 rounded-xl shadow-sm p-5 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300">
            LEARN HOW TO REACH THEM
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Targets;
