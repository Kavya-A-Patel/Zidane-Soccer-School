import React, { useState } from "react";

function CardBatch({
  imageUrl,
  imageUrlHover,
  timings,
  days,
  ageGroup,
  fees,
  location,
  locationUrl,
}) {
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
      className="container text-gray-700 bg-blue-300 rounded-lg shadow-md mt-5 mb-5 w-72 sm:w-72 md:w-96 lg:w-96 xl:w-96 2xl:w-96 h-auto sm:h-auto md:h-auto lg:h-auto xl:h-auto 2xl:h-auto mr-64 ml-64 sm:mr-64 sm:ml-64 md:mr-3 md:ml-3 lg:mr-4 lg:ml-4 xl:mr-5 xl:ml-5 2xl:mr-16 2xl:ml-16 hover:text-white hover:bg-blue-900 transition duration-300"
    >
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
        <p>
          {timings}
          <br />
          {days}
          <br />
          {ageGroup}
          <br />
          {fees}
          <br />
          {location}
          <iframe
            src={locationUrl}
            className="h-auto w-64 sm:w-64 md:w-80 lg:w-80 xl:w-80 2xl:w-80 mr-auto ml-auto"
            // width="310"
            // height="192"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
      </div>
    </div>
  );
}

export default CardBatch;
