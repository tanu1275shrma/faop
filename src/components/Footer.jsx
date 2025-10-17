import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-blue-950 border-t border-blue-950">
      {/* Top CTA Section */}
      <div className="w-full flex justify-center -mt-10">
        <div className="bg-gray-300 text-blue-950 rounded-2xl shadow-lg w-11/12 max-w-6xl py-10 px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl text-blue-950 font-semibold mb-2">
                Enroll Today and Grow your Carrer
              </h2>
              <p className="text-blue-950 text-sm md:text-base">
                ⚡ Free access • Quick Doubt Session • Practical Experiences
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <button className="bg-blue-950 text-white font-semibold rounded-full px-6 py-2 hover:bg-blue-800 transition flex items-center gap-2">
                Join Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto  py-10 px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"></div>

      {/* Bottom Line */}
      <div className="border-t border-3xl border-blue-900">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-blue-950 font-extrabold py-4 px-6">
          <p>© 2025 SJ Mentorship Group — All Rights Reserved</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-blue-600 transition">
              Terms
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
