import React from "react";
import { Link } from "react-router-dom";

function HeroSectionAbout() {
  return (
    <div className="relative overflow-hidden group">
      <div className="w-full h-auto flex items-center justify-center">
        <img
          src="FullLogo.png"
          alt="Slide 1"
          className="h-1/2 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-bold text-gray-800">
          About Us
        </h1>
        <Link
          to="/about"
          className="inline-block mt-4 text-black hover:text-white transition duration-300 bg-blue-300 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-1 sm:px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-2"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default HeroSectionAbout;
