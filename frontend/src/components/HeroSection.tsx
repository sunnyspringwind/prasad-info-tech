import React from "react";
import hero from "./../assets/hero.png";
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={hero}
        alt="hero"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 max-w-3xl text-white">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow-lg">
          Effort is your prayer, <br />
          Growth is the prasad.
        </h1>
        <p className="mt-4 text-lg drop-shadow-md">
          We help businesses connect, converse, and convert <br />
          through powerful digital strategies tailored for Nepal’s market.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 items-center">
          {/* Primary CTA */}
          <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95">
            <FaCheckCircle className="text-white text-base" />
            Get a Free Consultation
          </button>

          {/* Secondary CTA */}
          <button className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold bg-transparent hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white active:scale-95">
            View Portfolio
            <FaArrowRight className="text-white group-hover:text-blue-700 transition" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
