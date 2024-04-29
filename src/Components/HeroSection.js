import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "h-screen", // Set height of slider to full screen
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src="Photos/Photo (19).jpeg"
            alt="Slide 1"
            className="w-full h-screen object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
        </div>
        <div>
          <img
            src="Photos/Photo (13).jpeg"
            alt="Slide 2"
            className="w-full h-screen object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
        </div>
        <div>
          <img
            src="Photos/Photo (27).jpeg"
            alt="Slide 3"
            className="w-full h-screen object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
          Dribble, Shoot, Score - Repeat
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
