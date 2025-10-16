import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Will it be worth enrolling for this course?",
    answer: "Yes It’s designed to overcome all your doubts.",
  },
  {
    question: "Do I need prior outsourcing experience?",
    answer: "No, we start from the basics and guide you step by step.",
  },
  {
    question: "Does it has signing obligation like indian Practice?",
    answer:
      "No, it does not have signing Obligations, CPA will sign on your behalf.",
  },
  {
    question: "How soon can I get clients?",
    answer: "Students have onboarded clients within 30–60 days.",
  },
  {
    question: "Do I get lifetime access?",
    answer: "Yes, with free updates.",
  },
  {
    question: "Why you should invest the amount and enroll in the course?",
    answer:
      "This is a great opportunity you are getting with practical hands-on experience and proven strategies to grow your carrer.",
  },
  {
    question:
      "Will real documents and forms with practical examples of balancesheet will be shown?",
    answer:
      "Yes, you will get exposure to real documents and forms like w9 w2 .",
  },
  {
    question: "Are we going to learn Quickbooks and Xero and other Tools also?",
    answer: "Yes you will get complete training of these softwares.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0b1220] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#7ca8ff] mb-2">
          Got Questions?
        </h2>
        <p className="text-2xl sm:text-3xl font-semibold text-white mb-12">
          Frequently Asked Questions
        </p>

        <div className="grid md:grid-cols-2 gap-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#111827] border border-[#1e293b] rounded-xl transition-all duration-300 hover:border-[#1e40af66] ${
                activeIndex === index ? "border-[#1e40af66]" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center text-left px-5 py-4 text-[1.05rem] font-medium transition-all ${
                  activeIndex === index
                    ? "text-[#7ca8ff]"
                    : "text-gray-100 hover:text-[#7ca8ff]"
                }`}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="text-[#7ca8ff]" />
                ) : (
                  <ChevronDown className="text-[#7ca8ff]" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 pb-4 text-gray-100 text-[0.95rem]"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-3 rounded-full font-medium transition-all shadow-[0_0_15px_#2563eb66]">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
