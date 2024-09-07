// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaTicketAlt, FaEnvelope } from 'react-icons/fa';

interface HeaderProps {
  showBuyTickets?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showBuyTickets = true }) => {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="ml-3 text-2xl font-bold tracking-wide text-white-500 animate-pulse">
              UFC Watch Party
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="flex items-center text-lg font-semibold text-white hover:text-red-500 transition duration-300"
          >
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link
            to="/evenementInfo"
            className="flex items-center text-lg font-semibold text-white hover:text-red-500 transition duration-300"
          >
            <FaCalendarAlt className="mr-2" />
            Events
          </Link>
          <Link
            to="/contact"
            className="flex items-center text-lg font-semibold text-white hover:text-red-500 transition duration-300"
          >
            <FaEnvelope className="mr-2" />
            Contact
          </Link>
          {showBuyTickets && (
            <Link
              to="/ticketKopen"
              className="flex items-center text-lg font-semibold text-white hover:text-red-500 transition duration-300"
            >
              <FaTicketAlt className="mr-2" />
              Tickets
            </Link>
          )}
        </nav>

        {/* Call-to-Action Button */}
        {showBuyTickets && (
          <div className="hidden md:flex items-center">
            <Link
              to="/buy-tickets"
              className="inline-block px-6 py-2 bg-red-600 text-white font-semibold text-lg rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
            >
              Buy Tickets
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white hover:text-red-500 focus:outline-none">
            <svg
              className="w-8 h-8 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
