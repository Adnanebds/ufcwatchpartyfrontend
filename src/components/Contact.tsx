import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Footer from './Footer';
import Header from './Header';

function Contact() {
    return (
        <><Header/>
        <motion.div 
            className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-red-700 text-white py-8 px-6 text-center">
                    <h1 className="text-4xl font-extrabold">Contact Us</h1>
                    <p className="mt-2 text-lg font-semibold">We’re here to help!</p>
                </div>
                
                <div className="p-6">
                    <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        If you have any questions, concerns, or need assistance with refunds, feel free to reach out to us!
                    </p>
                    
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <FaEnvelope className="text-red-600 mr-3 text-2xl" />
                                <span className="text-lg">Email: <a href="mailto:watchpartyufc@outlook.com" className="text-red-600 hover:underline">watchpartyufc@outlook.com</a></span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="text-red-600 mr-3 text-2xl" />
                                <span className="text-lg">Phone: <span className="text-red-600">+31 123 456 789</span></span>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Stay updated by following us on our social media channels!
                        </p>
                        <div className="flex justify-center space-x-4">
                            {/* Add social media icons here if desired */}
                            <a href="#" className="text-red-600 hover:text-red-700 transition duration-300">Tiktok</a>
                            <a href="#" className="text-red-600 hover:text-red-700 transition duration-300">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        <Footer />
        </>
    );
}

export default Contact;