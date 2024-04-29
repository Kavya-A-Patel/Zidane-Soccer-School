import React, { useState } from "react";

function Gallery() {
  // State to track which photo is clicked
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // State to track number of photos to display
  const [visiblePhotos, setVisiblePhotos] = useState(15);

  // Sample photo data (replace with your own)
  const photos = [
    "Photos/Photo (1).jpeg",
    "Photos/Photo (2).jpeg",
    "Photos/Photo (3).jpeg",
    "Photos/Photo (4).jpeg",
    "Photos/Photo (5).jpeg",
    "Photos/Photo (6).jpeg",
    "Photos/Photo (7).jpeg",
    "Photos/Photo (8).jpeg",
    "Photos/Photo (9).jpeg",
    "Photos/Photo (10).jpeg",
    "Photos/Photo (11).jpeg",
    "Photos/Photo (12).jpeg",
    "Photos/Photo (13).jpeg",
    "Photos/Photo (14).jpeg",
    "Photos/Photo (15).jpeg",
    "Photos/Photo (16).jpeg",
    "Photos/Photo (17).jpeg",
    "Photos/Photo (18).jpeg",
    "Photos/Photo (19).jpeg",
    "Photos/Photo (20).jpeg",
    "Photos/Photo (21).jpeg",
    "Photos/Photo (22).jpeg",
    "Photos/Photo (23).jpeg",
    "Photos/Photo (24).jpeg",
    "Photos/Photo (25).jpeg",
    "Photos/Photo (26).jpeg",
    "Photos/Photo (27).jpeg",
    "Photos/Photo (28).jpeg",
    "Photos/Photo (29).jpeg",
    "Photos/Photo (30).jpeg",
    "Photos/Photo (1).jpeg",
    "Photos/Photo (2).jpeg",
    "Photos/Photo (3).jpeg",
    "Photos/Photo (4).jpeg",
    "Photos/Photo (5).jpeg",
    "Photos/Photo (6).jpeg",
    "Photos/Photo (7).jpeg",
    "Photos/Photo (8).jpeg",
    "Photos/Photo (9).jpeg",
    "Photos/Photo (10).jpeg",
    "Photos/Photo (11).jpeg",
    "Photos/Photo (12).jpeg",
    "Photos/Photo (13).jpeg",
    "Photos/Photo (14).jpeg",
    "Photos/Photo (15).jpeg",
    "Photos/Photo (16).jpeg",
    "Photos/Photo (17).jpeg",
    "Photos/Photo (18).jpeg",
    "Photos/Photo (19).jpeg",
    "Photos/Photo (20).jpeg",
    "Photos/Photo (21).jpeg",
    "Photos/Photo (22).jpeg",
    "Photos/Photo (23).jpeg",
    "Photos/Photo (24).jpeg",
    "Photos/Photo (25).jpeg",
    "Photos/Photo (26).jpeg",
    "Photos/Photo (27).jpeg",
    "Photos/Photo (28).jpeg",
    "Photos/Photo (29).jpeg",
    "Photos/Photo (30).jpeg",
  ];

  // Function to handle photo click
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  // Function to close selected photo
  const handleClosePhoto = () => {
    setSelectedPhoto(null);
  };

  // Function to handle Load More button click
  const handleLoadMore = () => {
    setVisiblePhotos((prevVisiblePhotos) => prevVisiblePhotos + 15);
  };

  return (
    <div className="px-6 lg:px-16 mt-24 mb-4">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold mb-6">Gallery</h2>

      {/* Photo grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.slice(0, visiblePhotos).map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="cursor-pointer hover:opacity-75 transition duration-300"
            onClick={() => handlePhotoClick(photo)}
          />
        ))}
      </div>

      {/* Load More button */}
      {visiblePhotos < photos.length && (
        <div className="text-center mt-4">
          <button
            onClick={handleLoadMore}
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Load More
          </button>
        </div>
      )}

      {/* Selected photo modal */}
      {selectedPhoto && (
        <div
          onClick={handleClosePhoto}
          className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
        >
          <div className="max-w-3xl w-full mx-4 overflow-hidden rounded-lg shadow-lg">
            <img
              src={selectedPhoto}
              alt="Selected Photo"
              className="w-full h-auto"
            />
            <button
              onClick={handleClosePhoto}
              className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 focus:outline-none"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
