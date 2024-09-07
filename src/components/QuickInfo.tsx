import React from 'react';

const QuickInfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Event Details & Location</h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Event Location */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Event Location</h3>
            <p className="mt-4 text-lg text-gray-600">
              Join us for UFC 308 at the Kinepolis Jaarbeurs in Utrecht, Netherlands. 
              This premier venue will host the event, providing an incredible experience with state-of-the-art facilities.
            </p>
            <p className="mt-4 text-md text-gray-500">Address: Jaarbeursplein 6, 3521 AL Utrecht, Netherlands</p>
            <p className="mt-2 text-md text-gray-500">Venue Website: <a href="https://www.kinepolis.nl/" className="text-red-600 hover:underline">Kinepolis Jaarbeurs</a></p>
          </div>

          {/* Event Overview */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800">About UFC 308</h3>
            <p className="mt-4 text-lg text-gray-600">
              UFC 308 will be an electrifying event featuring a clash between top fighters, 
              with the main event showcasing a thrilling bout between Topuria and Holloway.
              Expect an action-packed night filled with high-energy fights and unforgettable moments.
            </p>
            <p className="mt-4 text-md text-gray-500">Date: October 19, 2024</p>
            <p className="mt-2 text-md text-gray-500">Location: Fight Island, Abu Dhabi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfoSection;
