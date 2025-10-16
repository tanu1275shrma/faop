import React from "react";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const Regret = () => {
  return (
    <section className="bg-gradient-to-br from-[#0a0f1f] to-[#091327] text-white py-16 px-6 sm:px-10 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl w-full bg-[#0f172a]/70 backdrop-blur-xl border border-[#3b82f6]/40 rounded-2xl shadow-[0_0_35px_#2563eb33] p-8 sm:p-12 relative overflow-hidden"
      >
        {/* Glow effect edges */}
        <div className="absolute inset-0 rounded-2xl border border-[#3b82f6]/20 blur-[1px]" />

        {/* Header */}
        <div className="relative text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#facc15] flex items-center justify-center gap-2">
            <AlertTriangle className="text-[#facc15]" size={32} />
            Don’t Let This Be Your Biggest Regret!
          </h2>
          <p className="italic text-gray-300 mt-2 text-lg">
            The Choice Is Yours.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="relative grid md:grid-cols-2 gap-8 text-[1.05rem]">
          {/* Left Column - If You Delay */}
          <div className="bg-[#1e293b]/60 rounded-xl border border-red-400/40 p-6 shadow-[inset_0_0_25px_#ef444422]">
            <h3 className="text-xl font-semibold text-red-400 mb-4">
              If You Delay...
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500" /> Missing out CA and
                time-oriented growth
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500" /> Limited practice with
                limited growth
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500" /> Clients who don’t pay
                timely
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500" /> Missing out on global
                market exposure
              </li>
            </ul>
          </div>

          {/* Right Column - When You Join Us */}
          <div className="bg-[#1e293b]/60 rounded-xl border border-green-400/40 p-6 shadow-[inset_0_0_25px_#22c55e22]">
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              When You Join Us!
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" />
                Clients Working with US/UK clients
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" /> Earning in dollars &
                pounds
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" /> Build a sustaining
                business
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" /> Living a stress-free,
                growth-focused life
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="relative text-center text-gray-100 text-sm sm:text-base mt-10 leading-relaxed">
          ⚡ Seats are closing soon. Don’t miss this — you’ll regret watching
          your peers capture the growth you desired. <br />
          <span className="text-white font-semibold">
            Enrollment time is <span className="text-[#3b82f6]">NOW</span>.
          </span>
        </div>

        {/* CTA Button */}
        <div className="relative flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#facc15] hover:bg-[#fbbf24] text-black font-semibold text-lg px-8 py-3 rounded-full shadow-[0_0_25px_#facc1566] transition-all"
          >
            Secure Your Future Now
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Regret;
