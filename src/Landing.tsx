import "tailwindcss/tailwind.css";
import { FcGoogle } from "react-icons/fc";
import config from "./config";

function Landing() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Top Bar */}
      <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
        <div className="w-full px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="RapidRead logo 2.png"
              alt="Rapid Reader Logo"
              className="h-8 w-8 mr-2"
            />
            <div className="text-2xl font-bold text-gray-800">RapidRead</div>
          </div>
          <div className="space-x-6">
            {/* <a href="#" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Pricing
            </a> */}
            <a
              href="mailto:ayush@rapidread.io?subject=Feedback%20for%20RapidRead"
              className="text-gray-700 hover:text-blue-500"
            >
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
              Fastest way to track the topics and trends that matter to you
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Share your target themes and let AI filter the relevant articles
              for you
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex items-center text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-6 h-6"
                  fill="none"
                  stroke="green"
                  strokeWidth="5"
                >
                  <path
                    d="M10 10 L90 10 L90 90 L10 90 Z"
                    fill="none"
                    stroke="green"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M30 50 L45 70 L75 30"
                    fill="none"
                    stroke="green"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Customisable Topics
              </li>
              <li className="flex items-center text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-6 h-6"
                  fill="none"
                  stroke="green"
                  strokeWidth="5"
                >
                  <path
                    d="M10 10 L90 10 L90 90 L10 90 Z"
                    fill="none"
                    stroke="green"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M30 50 L45 70 L75 30"
                    fill="none"
                    stroke="green"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Receive personalised digest everyday
              </li>
              <li className="flex items-center text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-6 h-6"
                  fill="none"
                  stroke="green"
                  strokeWidth="5"
                >
                  <path
                    d="M10 10 L90 10 L90 90 L10 90 Z"
                    fill="none"
                    stroke="green"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M30 50 L45 70 L75 30"
                    fill="none"
                    stroke="green"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Stay ahead of the curve
              </li>
              <li className="flex items-center text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-6 h-6"
                  fill="none"
                  stroke="green"
                  strokeWidth="5"
                >
                  <path
                    d="M10 10 L90 10 L90 90 L10 90 Z"
                    fill="none"
                    stroke="green"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M30 50 L45 70 L75 30"
                    fill="none"
                    stroke="green"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Become your domain expert!
              </li>
            </ul>
            <button
              className="mt-8 bg-black text-white py-3 px-8 rounded-lg text-lg hover:bg-gray-800 flex items-center"
              onClick={() => {
                window.location.href = `${config.apiHostname}/auth/google`;
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

      {/* Testimonials Section
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
      </div> */}
    </div>
  );
}

export default Landing;
