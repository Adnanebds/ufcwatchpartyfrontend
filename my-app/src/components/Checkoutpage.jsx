import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_dGtLgGdTICn70sUb4eG3mX2x00mjEVczpA');

// Function to send email after payment
const sendEmail = async (paymentIntentId, email) => {
  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentIntentId, email }),
    });

    const data = await response.json();
    if (data.success) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email:', data.error || 'Unknown error');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const CheckoutForm = ({ clientSecret, email, totalCost }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

 const handleSubmit = async (event) => {
  event.preventDefault();
  
  if (!stripe || !elements) {
    console.error('Stripe or Elements not loaded');
    return;
  }

  try {
    setLoading(true);
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/confirm-purchase`,
        payment_method_data: {
          billing_details: {
            email: email,
            name: fullName,
          },
        },
      },
    });

    if (error) {
      console.error('Payment Error:', error);
      alert('Payment failed! Please try again.');
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      console.log('Payment Intent:', paymentIntent);
      alert('Payment successful!');
      await sendEmail(paymentIntent.id, email);
    }
  } catch (error) {
    console.error('Error in handleSubmit:', error);
    alert('An error occurred. Please try again.');
  } finally {
    setLoading(false);
  }
};
  
  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6 bg-white shadow-xl rounded-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label className="block text-lg font-medium mb-2 text-gray-700">Payment Information</label>
        <PaymentElement options={{ fields: { billingDetails: { name: 'never' } } }} />
      </div>
      <motion.button
        type="submit"
        className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
        disabled={loading || !clientSecret}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {loading ? 'Processing...' : 'Pay Now with iDEAL'}
      </motion.button>
    </motion.form>
  );
};

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState('');
  const location = useLocation();
  const state = location.state || {};

  
  const { individualCount = 0, familyCount = 0, totalCost = 0, email = '' } = state;

  useEffect(() => {
    const fetchClientSecret = async () => {
      if (totalCost === 0) {
        console.error("Total cost is zero or undefined.");
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            amount: totalCost * 100, // amount in cents
            individualCount,
            familyCount,
            totalCost,
            email,
          }),
        });

        const data = await response.json();
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          console.error('Failed to retrieve client secret:', data.error || 'Unknown error');
        }
      } catch (error) {
        console.error('Error fetching client secret:', error);
      }
    };

    fetchClientSecret();
  }, [individualCount, familyCount, totalCost, email]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-5xl font-extrabold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Complete Your Purchase
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white shadow-xl rounded-lg p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">Order Summary</h2>
              <div className="space-y-4">
                {individualCount > 0 && (
                  <p className="text-lg">Individual Tickets: <span className="font-semibold">{individualCount}</span></p>
                )}
                {familyCount > 0 && (
                  <p className="text-lg">Family Tickets: <span className="font-semibold">{familyCount}</span></p>
                )}
                <p className="text-lg">Email: <span className="font-semibold">{email}</span></p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-2xl font-bold text-red-600">Total: €{(totalCost || 0).toFixed(2)}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm clientSecret={clientSecret} email={email} totalCost={totalCost} />
                </Elements>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
