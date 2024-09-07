import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TicketBuy: React.FC = () => {
  const [individualCount, setIndividualCount] = useState<number>(0);
  const [familyCount, setFamilyCount] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  const individualPrice = 22.50;
  const familyPrice = 75.00;

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (individualCount === 0 && familyCount === 0) {
      alert("Please select at least one ticket.");
      return;
    }
  
    navigate('/checkout', {
      state: {
        individualCount,
        familyCount,
        totalCost: (individualCount * individualPrice) + (familyCount * familyPrice),
        email,
        name,
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Purchase Your Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Individual Ticket - €22.50</h2>
            <p className="text-gray-700 mb-4">Enjoy the event with a single ticket. Perfect for solo attendees.</p>
            <div className="flex items-center mb-4">
              <label className="mr-4 text-lg font-medium">Quantity:</label>
              <input
                type="number"
                min="0"
                value={individualCount}
                onChange={(e) => setIndividualCount(Number(e.target.value))}
                className="border border-gray-300 p-2 rounded-md w-20"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Family Ticket (4 people) - €75.00</h2>
            <p className="text-gray-700 mb-4">Includes 4 tickets at a discounted rate. Ideal for families or groups of friends.</p>
            <div className="flex items-center mb-4">
              <label className="mr-4 text-lg font-medium">Quantity:</label>
              <input
                type="number"
                min="0"
                value={familyCount}
                onChange={(e) => setFamilyCount(Number(e.target.value))}
                className="border border-gray-300 p-2 rounded-md w-20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Total Cost</h2>
        <p className="text-4xl font-bold text-red-600">€{((individualCount * individualPrice) + (familyCount * familyPrice)).toFixed(2)}</p>
      </div>

      <div className="mt-8">
        <label className="block text-lg font-medium mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full"
          required
        />
      </div>
      
      <div className="mt-4">
        <label className="block text-lg font-medium mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full"
          required
        />
      </div>

      <div className="mt-8 text-center">
        <button 
          onClick={handleCheckout}
          className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default TicketBuy;