import React from 'react';
import { Link } from 'react-router-dom';

function FarmerDashboard() {
  return (
    <div className='w-full h-screen bg-custom-bg-image flex items-center justify-center bg-cover'>
      <div className="mt-10 max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Farmer Dashboard</h1>
      <p className="text-lg mb-4 text-gray-700 text-center">
        Welcome to your dashboard. Here you can view and manage your offers, track your transactions, and more.
      </p>
      <div className="flex justify-center">
        <Link
          to="/farmer/offers"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-md"
        >
          View Offers
        </Link>
      </div>
    </div>
    </div>
    
  );
}

export default FarmerDashboard;
