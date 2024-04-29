import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-300 text-white py-6">
      <div className="container mx-auto px-4 lg:px-8 mr-auto ml-auto">
        {/* Footer content for large screens */}
        <div className="hidden lg:flex lg:items-center lg:justify-between">
          {/* Left box */}
          <div className="flex items-center ml-auto mr-auto">
            <div className="mr-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Contact Us
              </h4>
              <p className="text-gray-900">
                Phone: <a href="tel:+918369846903">+91 83698 46903</a> <br />
                Email: <a href="mailto:info@example.com">info@example.com</a>
              </p>
              {/* Social media icons */}
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Logo */}
          <div className="ml-auto mr-auto">
            <img src="FullLogo.png" alt="Logo" className="h-60" />
          </div>
          {/* Right box */}
          <div className="flex items-center ml-auto mr-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdipjkdaO4crzc8o1Np_pKE7xIbDXRNvC7oekBcKYnAEEY2mw/viewform?embedded=true"
              width="300"
              height="300"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Google Form"
            >
              Loading…
            </iframe>
          </div>
        </div>

        {/* Footer content for small screens */}
        <div className="lg:hidden mt-6">
          <div>
            <img src="FullLogo.png" alt="Logo" className="h-60 mx-auto" />
          </div>
          <div className="mt-6">
            <h4 className="text-lg text-gray-900 font-semibold text-center">
              Contact Us
            </h4>
            <p className="text-gray-900 text-center">
              Phone: <a href="tel:123456789">123-456-789</a> <br />
              Email: <a href="mailto:info@example.com">info@example.com</a>
            </p>
            {/* Social media icons */}
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="mt-6">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdipjkdaO4crzc8o1Np_pKE7xIbDXRNvC7oekBcKYnAEEY2mw/viewform?embedded=true"
              width="100%"
              height="500"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Google Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
