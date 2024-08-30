import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import config from "./config";

const heroPoints = [
  { text: "Customisable Topics", icon: CheckCircle },
  { text: "Receive personalised digest everyday", icon: CheckCircle },
  { text: "Stay ahead of the curve", icon: CheckCircle },
  { text: "Become your domain expert!", icon: CheckCircle },
];

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white w-full">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="RapidRead logo 2.png"
                  alt="RapidRead logo"
                />
                <span className="ml-2 text-xl font-bold text-gray-800">
                  RapidRead
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col justify-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Your Personalized</span>
            <span className="block text-blue-600">News Feed Summarizer</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Stay informed, save time, and become an expert in your field with
            RapidRead's customizable news digest.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Key Features
            </h2>
            <ul className="space-y-4">
              {heroPoints.map((point, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <point.icon className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">{point.text}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() =>
                (window.location.href = `${config.apiHostname}/auth/google`)
              }
              className="mt-8 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 max-w-2xl">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://app.supademo.com/embed/cm0cefuzf1msz128vyox8dgdj?embed_v=2"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
