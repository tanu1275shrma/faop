// components/Careers.jsx
import React from "react";
import {
  Briefcase,
  Globe,
  MessageCircle,
  DollarSign,
  Building,
  GraduationCap,
} from "lucide-react";

const careers = [
  {
    icon: <Briefcase size={36} className="text-blue-900" />,
    title: "Foriegn Jobs",
    subtitle: "Get placed with reputated firms ",
  },
  {
    icon: <Globe size={36} className="text-blue-900" />,
    title: "Remote Jobs",
    subtitle: "US/UK/AUS Work From Home",
  },
  {
    icon: <DollarSign size={36} className="text-blue-900" />,
    title: "Freelancing",
    subtitle: "Start taking international Projects on Upwork and Fiver",
  },
  {
    icon: <Building size={36} className="text-blue-900" />,
    title: "Start your own Firm",
    subtitle: "Build your own team and serve global clients",
  },
  {
    icon: <GraduationCap size={36} className="text-blue-900" />,
    title: "Pursue ACCA/CPA",
    subtitle: "Add international qualifications to your profile",
  },
];

const Careers = () => {
  return (
    <section className="bg-[#0A2D68] py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F9C744] mb-3">
          Career Opportunities
        </h2>
        <p className="text-gray-100 text-sm sm:text-base md:text-lg mb-10">
          Explore diverse pathways to advance your career
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 place-items-center">
          {careers.map((item, index) => (
            <div
              key={index}
              className="bg-[#F9C744] transition-all duration-300 rounded-2xl shadow-sm hover:shadow-md p-6 sm:p-7 flex flex-col items-center text-center w-full h-[190px] sm:h-[210px] md:h-[220px] justify-center"
            >
              <div className="mb-4 bg-white p-4 rounded-2xl shadow-sm flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-blue-950 font-extrabold text-base sm:text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-blue-950 text-xs font-semibold sm:text-sm">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
