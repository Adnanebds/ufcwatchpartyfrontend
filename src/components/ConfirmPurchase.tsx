import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const ConfirmPurchase = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paymentIntentId = searchParams.get('payment_intent');

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/get-ticket/${paymentIntentId}`);
        if (response.ok) {
          const data = await response.json();
          setEmail(data.email);
        } else {
          setError('Failed to retrieve ticket data');
        }
      } catch (error) {
        setError('An error occurred while fetching ticket data');
      } finally {
        setLoading(false);
      }
    };

    if (paymentIntentId) {
      fetchTicketData();
    } else {
      setError('Invalid payment intent ID');
      setLoading(false);
    }
  }, [paymentIntentId]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        className="text-2xl font-semibold text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading...
      </motion.div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        className="text-2xl font-semibold text-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {error}
      </motion.div>
    </div>
  );

  return (
    <>
      <Header />
      <motion.div 
        className="min-h-screen bg-gray-100 py-12 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white shadow-xl rounded-lg overflow-hidden"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4">
              <h1 className="text-3xl font-extrabold text-white text-center">Thank You for Your Purchase!</h1>
            </div>
            <div className="p-6">
              <p className="text-lg text-gray-700 text-center mb-4">
                A confirmation email has been sent to:
              </p>
              <motion.div 
                className="flex items-center justify-center bg-gray-50 rounded-lg p-4 shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="text-red-500 mr-2 text-xl" />
                <p className="text-xl font-semibold text-gray-900">{email}</p>
              </motion.div>
              <p className="text-md text-gray-600 text-center mt-4">
                Please check your inbox for further details about your ticket.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default ConfirmPurchase;