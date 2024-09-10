import React from 'react';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

function EventDetails() {
    return (
        <><Header />
        <motion.div 
            className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-red-600 text-white py-6 px-6">
                    <h1 className="text-3xl font-bold text-center">UFC Watch Party</h1>
                    <p className="mt-2 text-lg text-center">Live Broadcast Event</p>
                </div>
                
                <div className="p-6">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <FaCalendar className="text-red-600 mr-3" />
                                <span className="text-lg">October 27, 2023</span>
                            </li>
                            <li className="flex items-center">
                                <FaClock className="text-red-600 mr-3" />
                                <span className="text-lg">Starting at 16:00</span>
                            </li>
                            <li className="flex items-center">
                                <FaMapMarkerAlt className="text-red-600 mr-3" />
                                <span className="text-lg">Kinepolis Jaarbeurs, Utrecht</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
                        <p className="text-gray-700">
                            Join us for an electrifying UFC Watch Party! Experience the thrill of live UFC action on the big screen, surrounded by fellow fight fans. Don't miss this opportunity to witness world-class mixed martial arts in an exciting atmosphere.
                        </p>
                    </div>
                    
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Live broadcast of UFC fights</li>
                            <li>State-of-the-art audio and visual experience</li>
                            <li>Food and beverages available for purchase</li>
                            <li>Exciting atmosphere with fellow UFC enthusiasts</li>
                        </ul>
                    </div>
                    
                    <div className="text-center">
                        <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                            Get Tickets
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
        <Footer />
        </>
    );
}

export default EventDetails;