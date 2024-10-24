import { useState } from "react";
import axios from "axios";

function VendorDashboard() {
  const [crop, setCrop] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/vendor/offer", { 
        crop, 
        price, 
        quantity, 
        additionalDetails 
      });
      setMessage("Offer submitted successfully!");
      setCrop("");
      setPrice("");
      setQuantity("");
      setAdditionalDetails("");
    } catch (error) {
      setMessage("Failed to submit offer.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-bg-image bg-cover">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96">
      <h1 className="text-2xl font-bold text-center mb-6">Vendor Dashboard</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="crop" className="text-lg font-semibold">Crop:</label>
          <input
            type="text"
            id="crop"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="text-lg font-semibold">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity" className="text-lg font-semibold">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit Offer
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-center ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </p>
      )}
      </div>
    </div>
  );
}

export default VendorDashboard;
