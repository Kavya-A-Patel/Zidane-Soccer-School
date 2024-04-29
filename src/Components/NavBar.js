import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-2.5">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="Logo.png"
            className="h-11 mr-3 sm:h-14 md:h-14 lg:h-14 xl:h-14 2xl:h-16"
            alt="Zidane Soccer School Logo"
          />
        </Link>
        <div className="flex items-center lg:order-2">
          {/* <div className="hidden mt-2 mr-28 sm:inline-block">
            <span></span>
          </div> */}

          <Link
            to="/join"
            className="text-black bg-blue-300 hover:bg-blue-600 hover:text-white transition duration-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-1 sm:px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-2"
          >
            Join Now
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`${isMenuOpen ? "" : "hidden"} w-4 h-4 sm:w-6 sm:h-6`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-opacity-0 rounded hover:bg-blue-700 hover:bg-opacity-100 transition duration-300"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-white bg-opacity-0 rounded hover:bg-blue-700 hover:bg-opacity-100 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block py-2 pl-3 pr-4 text-white bg-opacity-0 rounded hover:bg-blue-700 hover:bg-opacity-100 transition duration-300"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
