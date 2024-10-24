import { useEffect, useState } from "react";
import axios from "axios";

function VendorOffers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingOffer, setEditingOffer] = useState(null);
  const [newDetails, setNewDetails] = useState({
    crop: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    async function fetchOffers() {
      try {
        const response = await axios.get("/vendor/offers");
        setOffers(response.data);
      } catch (error) {
        setError("Failed to fetch offers.");
        console.error("Error fetching offers:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOffers();
  }, []);

  const handleEdit = (offer) => {
    setEditingOffer(offer);
    setNewDetails({
      crop: offer.crop,
      price: offer.price,
      quantity: offer.quantity,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/vendor/offer/${id}`);
      setOffers(offers.filter((offer) => offer._id !== id));
    } catch (error) {
      setError("Failed to delete offer.");
      console.error("Error deleting offer:", error);
    }
  };

  const handleUpdate = async () => {
    if (editingOffer) {
      try {
        const updatedOffer = await axios.put(
          `/vendor/offer/${editingOffer._id}`,
          newDetails
        );
        setOffers(
          offers.map((offer) =>
            offer._id === updatedOffer.data._id ? updatedOffer.data : offer
          )
        );
        setEditingOffer(null);
        setNewDetails({ crop: "", price: "", quantity: "" });
      } catch (error) {
        setError("Failed to update offer.");
        console.error("Error updating offer:", error);
      }
    }
  };

  if (loading) return <p className="text-center text-lg">Loading offers...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex  justify-center">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
          Vendor Offers
        </h1>
        {/* <div className="text-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer._id}
              className="flex flex-col p-6 bg-white rounded-lg shadow-md"
              style={{ border: "1px solid #0000001A" }}
            >
              <div className="flex-1">
                <div
                  className="font-bold text-green-800"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Contracter: {offer.vendorId.name}
                </div>
                <div
                  className="text-green-800"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Crop: {offer.crop}
                </div>
                <div
                  className="text-green-800"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Quantity: {offer.quantity} | Price: ₹{offer.price}
                </div>
                <div
                  className="text-green-800"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Status: {offer.status}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                  onClick={() => handleEdit(offer)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  onClick={() => handleDelete(offer._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div> */}
        <div className="text-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer._id}
              className="flex flex-col p-6 bg-white rounded-lg shadow-md"
              style={{ border: "1px solid #0000001A" }}
            >
              <div className="flex-1">
                <div
                  className="font-bold text-green-800"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Contractor: {offer.vendorId.name}
                </div>
                <div
                  className="text-green-800"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Crop: {offer.crop}
                </div>
                <div
                  className="text-green-800"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Quantity: {offer.quantity} | Price: ₹{offer.price}
                </div>
                <div
                  className="text-green-800"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Status: {offer.status}
                </div>
              </div>

              {/* Conditionally render Edit and Delete buttons if the status is not 'accepted' */}
              {offer.status !== "accepted" && (
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                    onClick={() => handleEdit(offer)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    onClick={() => handleDelete(offer._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {editingOffer && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Edit Offer</h2>
              <div className="mb-4">
                <label className="block text-gray-700">Crop:</label>
                <input
                  type="text"
                  value={newDetails.crop}
                  onChange={(e) =>
                    setNewDetails({ ...newDetails, crop: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price:</label>
                <input
                  type="number"
                  value={newDetails.price}
                  onChange={(e) =>
                    setNewDetails({ ...newDetails, price: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Quantity:</label>
                <input
                  type="number"
                  value={newDetails.quantity}
                  onChange={(e) =>
                    setNewDetails({ ...newDetails, quantity: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  onClick={handleUpdate}
                >
                  Update
                </button>
                <button
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                  onClick={() => setEditingOffer(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VendorOffers;
