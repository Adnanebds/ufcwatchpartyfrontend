import React from 'react';
import { FaTicketAlt } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center transform scale-110 hover:scale-100 transition-transform duration-[2500ms] ease-in-out"
          src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_lg/s3/2024-08/102624-ufc-308-topuria-vs-holloway-TEMP-HERO.jpg?h=d1cb525d&itok=hzyyy5Da"
          alt="UFC 308 Topuria vs Holloway"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
      </div>

      {/* Animated and Interactive Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white uppercase tracking-wider animate-fadeInUp">
          UFC 308: Topuria vs Holloway
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-medium text-gray-200 animate-fadeInUp delay-200">
          Witness the action live from Fight Island, Abu Dhabi
        </p>
        <p className="mt-2 text-md md:text-xl font-light text-gray-300 animate-fadeInUp delay-400">
          October 19, 2024 | 10:00 PM EST
        </p>

        <div className="mt-8 animate-fadeInUp delay-600">
          <a
            href="/buy-tickets"
            className="inline-block px-8 py-3 bg-red-600 text-white font-semibold text-lg rounded-full shadow-lg transform transition duration-500 hover:bg-red-700 hover:scale-110 hover:rotate-1"
          >
            <FaTicketAlt className="inline-block mr-2 text-xl animate-pulse" />
            Buy Tickets
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
