import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="mb-2">UFC Watch Party</p>
          <p className="mb-2">Kinepolis Utrecht Jaarbeurs</p>
          <p className="mb-2">info@ufcwatchparty.com</p>
          <p className="mb-2">+31 123 456 789</p>
        </div>

        {/* Social Media Links */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">&copy; 2024 UFC Watch Party. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
