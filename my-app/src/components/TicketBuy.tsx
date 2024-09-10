import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

const TicketBuy: React.FC = () => {
  const [individualCount, setIndividualCount] = useState<number>(0);
  const [familyCount, setFamilyCount] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isTicketSelected, setIsTicketSelected] = useState<boolean>(false);

  const individualPrice = 22.50;
  const familyPrice = 75.00;

  const navigate = useNavigate();

  useEffect(() => {
    setIsEmailValid(/\S+@\S+\.\S+/.test(email));
  }, [email]);

  useEffect(() => {
    setIsTicketSelected(individualCount > 0 || familyCount > 0);
  }, [individualCount, familyCount]);

  const handleCheckout = () => {
    if (!isTicketSelected) {
      alert("Please select at least one ticket.");
      return;
    }

    if (!isEmailValid) {
      alert("Please enter a valid email address.");
      return;
    }

    navigate('/checkout', {
      state: {
        individualCount,
        familyCount,
        totalCost: (individualCount * individualPrice) + (familyCount * familyPrice),
        email,
      },
    });
  };

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50"
      >
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900">Purchase Your Tickets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <TicketCard
            title="Individual Ticket"
            price={individualPrice}
            description="Enjoy the event with a single ticket. Perfect for solo attendees."
            count={individualCount}
            setCount={setIndividualCount}
          />
          <TicketCard
            title="Family Ticket (4 people)"
            price={familyPrice}
            description="Includes 4 tickets at a discounted rate. Ideal for families or groups of friends."
            count={familyCount}
            setCount={setFamilyCount}
          />
        </div>

        {!isTicketSelected && (
          <p className="mt-4 text-red-500 text-center">Please select at least one ticket.</p>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Total Cost</h2>
          <p className="text-5xl font-black text-red-600">€{((individualCount * individualPrice) + (familyCount * familyPrice)).toFixed(2)}</p>
        </motion.div>

        <div className="mt-12">
          <label className="block text-xl font-semibold mb-3 text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border ${isEmailValid ? 'border-gray-300' : 'border-red-500'} p-3 rounded-lg w-full text-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200`}
            required
          />
          {!isEmailValid && <p className="mt-2 text-red-500">Please enter a valid email address.</p>}
        </div>

        <div className="mt-12 text-center">
          <motion.button 
            onClick={handleCheckout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-4 text-white text-xl font-bold rounded-lg transition duration-300 shadow-lg ${
              isTicketSelected && isEmailValid ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isTicketSelected || !isEmailValid}
          >
            Proceed to Checkout
          </motion.button>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

interface TicketCardProps {
  title: string;
  price: number;
  description: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const TicketCard: React.FC<TicketCardProps> = ({ title, price, description, count, setCount }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white shadow-xl rounded-2xl overflow-hidden transition duration-300 ease-in-out"
  >
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-3 text-gray-900">{title}</h2>
      <p className="text-2xl font-semibold mb-4 text-red-600">€{price.toFixed(2)}</p>
      <p className="text-gray-700 mb-6 text-lg">{description}</p>
      <div className="flex items-center justify-between">
        <label className="text-xl font-medium text-gray-700">Quantity:</label>
        <div className="flex items-center">
          <button
            onClick={() => setCount(Math.max(0, count - 1))}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-300 transition duration-200"
          >
            -
          </button>
          <input
            type="number"
            min="0"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="border-t border-b border-gray-300 p-1 w-16 text-center text-lg"
          />
          <button
            onClick={() => setCount(count + 1)}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-300 transition duration-200"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default TicketBuy;