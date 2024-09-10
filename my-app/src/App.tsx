// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure Tailwind CSS is imported here
import Home from './components/Home';
import Contact from './components/Contact';
import EventDetails from './components/EventDetails';
import TicketBuy from './components/TicketBuy';
import Checkout from './components/Checkoutpage.jsx';
import ConfirmPurchase from './components/ConfirmPurchase';

const App: React.FC = () => {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/evenementInfo" element={<EventDetails />} />
          <Route path="/ticketKopen" element={<TicketBuy />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirm-purchase" element={<ConfirmPurchase />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
