import "tailwindcss/tailwind.css";
import { FcGoogle } from "react-icons/fc";
import config from "./config";
import NavbarCustom from "./NavbarCustom";

function Landing() {
  return (
    <div className="w-full overflow-x-hidden">
      <NavbarCustom />
      {/* Hero Section */}
      <div className="bg-gray-50 min-h-screen w-full pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-x-12">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mt-8 md:mt-0">
                Fastest way to track the topics and trends that matter to you
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600">
                Share your target themes and let AI filter the relevant articles
                for you
              </p>
              <ul className="mt-8 space-y-4 sm:space-y-6">
                <li className="flex items-center text-base sm:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
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
                <li className="flex items-center text-base sm:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
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
                <li className="flex items-center text-base sm:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
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
                <li className="flex items-center text-base sm:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
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
                className="mt-8 bg-black text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg hover:bg-gray-800 flex items-center"
                onClick={() => {
                  window.location.href = `${config.apiHostname}/auth/google`;
                }}
              >
                <FcGoogle className="h-5 w-5 mr-2" />
                Sign Up with Google
              </button>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div
                className="relative w-full"
                style={{
                  aspectRatio: "1.8421052631578947",
                  maxHeight: "80vh",
                }}
              >
                <iframe
                  src="https://app.supademo.com/embed/cm0cefuzf1msz128vyox8dgdj?embed_v=2"
                  loading="lazy"
                  title="RapidRead Demo"
                  allow="clipboard-write"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
