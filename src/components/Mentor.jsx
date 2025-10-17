import React from "react";

const Mentor = () => {
  return (
    <section className="relative bg-[#0A2D68] w-full overflow-hidden">
      {/* Right dark blue background */}
      <div className="absolute top-4 bottom-4 right-0 w-[45%] bg-[#F9C744] rounded-l-[2rem] hidden md:block"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
        {/* Left content */}
        <div className="md:w-1/2 w-full z-10 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-yellow-500">
            Meet Mentor <br />
            <span className="text-white">CA Sidharth Jain</span>
          </h1>
          <p className="text-gray-100 text-base md:text-lg">
            He is a highly experienced mentor helping students and professionals
            achieve excellence in finance and accounting.
          </p>

          {/* Decorative small shapes */}
          <div className="flex items-center gap-2 mt-8">
            <div className="w-8 h-[2px] bg-gray-400"></div>
            <div className="w-8 h-[2px] bg-gray-400"></div>
            <div className="w-3 h-3 border border-gray-500 rounded-full"></div>
          </div>
        </div>

        {/* Right gray box with image */}
        <div className="relative md:w-1/2 w-full flex justify-center mt-12 md:mt-0">
          {/* Gray box */}
          <div
            className="relative bg-[#F3F4F6] w-[340px] h-[320px] md:w-[460px] md:h-[380px] rounded-[1.5rem] 
                          md:-ml-16 shadow-md flex items-center justify-center overflow-hidden"
          >
            <img
              src="https://via.placeholder.com/400x400"
              alt="Mentor"
              className="w-full h-full object-cover rounded-[1.5rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
