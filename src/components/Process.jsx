import React, { useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Setting Business Goals",
    description: "Define your outsourcing objectives and growth targets.",
  },
  {
    step: 2,
    title: "Market Research",
    description: "Identify target industries and clients to focus on.",
  },
  {
    step: 3,
    title: "Building Your Team",
    description: "Hire or upskill professionals for international standards.",
  },
  {
    step: 4,
    title: "Creating Systems",
    description: "Set up workflows, CRMs, and SOPs for smooth operations.",
  },
  {
    step: 5,
    title: "Client Acquisition",
    description: "Use proven strategies to onboard your first global clients.",
  },
  {
    step: 6,
    title: "Delivering Excellence",
    description: "Focus on quality, consistency, and client retention.",
  },
  {
    step: 7,
    title: "Scaling Globally",
    description: "Expand your outsourcing practice to new regions.",
  },
  {
    step: 8,
    title: "Scaling Globally",
    description: "Expand your outsourcing practice to new regions.",
  },
  {
    step: 9,
    title: "Scaling Globally",
    description: "Expand your outsourcing practice to new regions.",
  },
  {
    step: 10,
    title: "Scaling Globally",
    description: "Expand your outsourcing practice to new regions.",
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
          Process to Start Your{" "}
          <span className="text-blue-600">Outsourcing Practice Today</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-16">
          Follow these structured steps to establish and grow your outsourcing
          practice with FAOP efficiently.
        </p>

        {/* Progress Line */}
        <div className="relative flex justify-between items-center max-w-5xl mx-auto mb-12">
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-blue-950 transform -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-0 h-[3px] bg-blue-950 transform -translate-y-1/2 z-0 transition-all duration-500"
            style={{
              width: `${((activeStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
          {steps.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveStep(item.step)}
              className="relative z-10 flex flex-col items-center cursor-pointer"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  item.step <= activeStep
                    ? "bg-blue-950 text-white border-blue-950"
                    : "bg-white border-gray-300 text-gray-400"
                } transition-all duration-300`}
              >
                {item.step < activeStep ? (
                  <CheckCircle size={20} />
                ) : (
                  <Circle size={20} />
                )}
              </div>
              <span
                className={`mt-2 text-sm font-medium ${
                  item.step <= activeStep ? "text-blue-950" : "text-gray-500"
                }`}
              >
                {item.step}
              </span>
            </div>
          ))}
        </div>

        {/* Step Cards (1–8) */}
        <div className="grid gap-8 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {steps.slice(0, 8).map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveStep(item.step)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-500 w-full max-w-[280px]
                ${
                  item.step === activeStep
                    ? "bg-blue-950 text-white border-blue-700 shadow-xl scale-105"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
            >
              <p className="text-sm font-semibold uppercase mb-2">
                Step {item.step}
              </p>
              <h3
                className={`text-lg font-bold mb-1 ${
                  item.step === activeStep ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm ${
                  item.step === activeStep ? "text-purple-100" : "text-gray-500"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Centered Last Row (Steps 9 & 10) */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {steps.slice(8).map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveStep(item.step)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-500 w-full sm:w-[250px] md:w-[280px]
                ${
                  item.step === activeStep
                    ? "bg-blue-950 text-white border-blue-700 shadow-xl scale-105"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
            >
              <p className="text-sm font-semibold uppercase mb-2">
                Step {item.step}
              </p>
              <h3
                className={`text-lg font-bold mb-1 ${
                  item.step === activeStep ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm ${
                  item.step === activeStep ? "text-purple-100" : "text-gray-500"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
