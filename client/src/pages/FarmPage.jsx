// FarmPage.jsx
import React from 'react';

const crops = [
  { name: 'Wheat', description: 'A staple food grain widely grown in India.' },
  { name: 'Rice', description: 'A primary staple food that is cultivated in various regions.' },
  { name: 'Sugarcane', description: 'A major cash crop used for producing sugar and ethanol.' },
  { name: 'Cotton', description: 'An important cash crop used in the textile industry.' },
  { name: 'Jute', description: 'A fiber crop used for making ropes, bags, and other products.' },
  { name: 'Maize', description: 'A versatile crop used for food, fodder, and industrial purposes.' },
];

const FarmPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-5">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-green-700">Crops in India</h1>
        <p className="text-lg text-gray-700 mt-2">
          Discover the diverse variety of crops cultivated across India.
        </p>
      </header>
      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {crops.map((crop, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-600 mb-2">{crop.name}</h2>
              <p className="text-gray-600">{crop.description}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default FarmPage;
