import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_dGtLgGdTICn70sUb4eG3mX2x00mjEVczpA');

const sendEmail = async (paymentIntentId) => {
  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentIntentId }),
    });
    const data = await response.json();
    if (data.success) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      setLoading(true);
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.href,
        },
      });

      if (error) {
        console.error('Payment Error:', error);
        alert('Payment failed! Please try again.');
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        console.log('Payment Intent:', paymentIntent);
        alert('Payment successful!');
        await sendEmail(paymentIntent.id);
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-lg font-medium mb-2">Payment Information</label>
        <PaymentElement />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
        disabled={loading || !clientSecret}
      >
        {loading ? 'Processing...' : 'Pay Now with iDEAL'}
      </button>
    </form>
  );
};

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState('');
  const location = useLocation();
  const state = location.state || {};

  const { individualCount = 0, familyCount = 0, totalCost = 0, email = '', name = '' } = state;

  useEffect(() => {
    const fetchClientSecret = async () => {
      if (totalCost === 0) {
        console.error("Total cost is zero or undefined.");
        return;
      }
      
      const response = await fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amount: totalCost * 100, // amount in cents
          individualCount,
          familyCount,
          totalCost,
          email,
          name,
        }),
      });

      const data = await response.json();
      setClientSecret(data.clientSecret);
    };

    fetchClientSecret();
  }, [individualCount, familyCount, totalCost, email, name]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Checkout</h1>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Total Cost</h2>
        <p className="text-4xl font-bold text-red-600">€{(totalCost || 0).toFixed(2)}</p>
      </div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;