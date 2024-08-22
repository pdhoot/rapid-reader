import React from "react";
import "tailwindcss/tailwind.css";
import { FcGoogle } from "react-icons/fc";

function Landing() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Top Bar */}
      <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
        <div className="w-full px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="logo.jpeg"
              alt="Rapid Reader Logo"
              className="h-8 w-8 mr-2"
            />
            <div className="text-2xl font-bold text-gray-800">Rapid Reader</div>
          </div>
          <div className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-50 min-h-screen w-full pt-24 flex items-center">
        <div className="w-full px-6 md:flex md:items-start md:justify-between md:gap-x-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Stay Informed, Straight to Your Inbox
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Set up topics of interest and receive daily email summaries with
              Rapid Reader.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex items-center text-lg">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7h2V5H9v6zm1 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                    clipRule="evenodd"
                  />
                </svg>
                Customizable topics
              </li>
              <li className="flex items-center text-lg">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7h2V5H9v6zm1 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                    clipRule="evenodd"
                  />
                </svg>
                Daily email summaries
              </li>
              <li className="flex items-center text-lg">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7h2V5H9v6zm1 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                    clipRule="evenodd"
                  />
                </svg>
                No more clutter
              </li>
              <li className="flex items-center text-lg">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7h2V5H9v6zm1 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                    clipRule="evenodd"
                  />
                </svg>
                Stay informed effortlessly
              </li>
            </ul>
            <button
              className="mt-8 bg-black text-white py-3 px-8 rounded-lg text-lg hover:bg-gray-800 flex items-center"
              onClick={() => {
                window.location.href =
                  "https://4a14-2401-4900-1cba-87f5-b046-8858-cddb-3a15.ngrok-free.app/auth/google";
              }}
            >
              <FcGoogle className="h-5 w-5 mr-2" />
              Sign Up with Google
            </button>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-start">
            <img
              src="home.webp"
              alt="Rapid Reader Interface"
              className="w-full h-auto max-w-none rounded-lg shadow-lg"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full px-6 py-20">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <p className="text-gray-600">
                "Rapid Reader keeps me updated without the hassle!"
              </p>
              <div className="mt-4">
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <p className="text-gray-600">
                "I love the daily summaries delivered straight to my inbox!"
              </p>
              <div className="mt-4">
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <p className="text-gray-600">
                "A must-have tool for staying informed!"
              </p>
              <div className="mt-4">
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
