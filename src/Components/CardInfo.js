import React, { useState } from "react";
import { Link } from "react-router-dom";

function CardInfo({ imageUrl, imageUrlHover, description }) {
  //   const [isHovered, setIsHovered] = useState(false);
  const [url, setUrl] = useState(imageUrl);

  const handleMouseEnter = () => {
    // setIsHovered(true);
    setUrl(imageUrlHover);
  };

  const handleMouseLeave = () => {
    // setIsHovered(false);
    setUrl(imageUrl);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="container text-gray-700 bg-blue-300 rounded-lg shadow-md mt-5 mb-5 w-72 sm:w-72 md:w-96 lg:w-96 xl:w-96 2xl:w-96 sm:mr-3 sm:ml-3 md:mr-3 md:ml-3 lg:mr-4 lg:ml-4 xl:mr-5 xl:ml-5 2xl:mr-16 2xl:ml-16 hover:text-white hover:bg-blue-900 transition duration-300"
    >
      <Link to="/about">
        <div className="relative mt-2">
          {/* Image */}
          <img
            src={url}
            alt="Card"
            className="w-32 ml-auto mr-auto object-cover"
          />
        </div>
        <br />
        <hr />

        {/* Description */}
        <div className="p-4">
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default CardInfo;
