import React, { useState } from "react";

function VisionSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      {/* Left half */}
      <div className="md:w-1/2 p-8 flex justify-center items-center">
        <p className="text-lg text-gray-800">
          At Zidane Soccer School, our vision is to inspire a generation of
          footballers who not only excel on the pitch but also embody values of
          teamwork, determination, and sportsmanship. We aim to create a dynamic
          learning environment where every player is empowered to reach their
          full potential, fostering a lifelong love for the beautiful game.
          Through our dedication to excellence and innovation in coaching, we
          strive to shape not just skilled athletes, but well-rounded
          individuals who will make a positive impact both on and off the field.
        </p>
      </div>
      {/* Right half */}
      <div className="md:w-1/2 h-auto group text-white bg-blue-300 p-8 flex justify-center items-center hover:text-[#040000] hover:bg-blue-900 transition duration-300">
        <div className="w-36 h-36 md:w-52 md:h-52 bg-icon-bg-blue group-hover:bg-icon-bg-blue-invert rounded-full flex justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold">Vision</h2>
        </div>
      </div>
    </div>
  );
}

export default VisionSection;
