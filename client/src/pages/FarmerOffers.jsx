// import { useEffect, useState } from "react";
// import axios from "axios";

// function FarmerOffers() {
//   const [offers, setOffers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchOffers() {
//       try {
//         const response = await axios.get("/farmer/offers");
//         setOffers(response.data);
//       } catch (error) {
//         setError("Failed to fetch offers.");
//         console.error("Error fetching offers:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchOffers();
//   }, []);

//   if (loading) return <p className="text-center text-lg">Loading offers...</p>;
//   if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

//   return (
//     <div className="min-h-screen p-6 bg-primary3">
//       <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
//         Available Offers
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {offers.map((offer) => (
//           <div
//             key={offer._id}
//             className="flex items-center p-6 bg-white rounded-lg shadow-md"
//             style={{ border: "1px solid #0000001A" }}
//           >
//             <div className="ml-4 flex-1">
//               <div
//                 className="font-bold text-green-800"
//                 style={{ fontFamily: "Roboto, sans-serif" }}
//               >
//                 Contracter : {offer.vendorId.name}
//               </div>
//               <div
//                 className="text-green-800"
//                 style={{ fontFamily: "Roboto, sans-serif" }}
//               >
//                 Crop: {offer.crop}
//               </div>
//               <div
//                 className="text-green-800"
//                 style={{ fontFamily: "Roboto, sans-serif" }}
//               >
//                 Quantity: {offer.quantity} | Price: ₹{offer.price}
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FarmerOffers;

// import { useEffect, useState } from "react";
// import axios from "axios";

// function FarmerOffers() {
//   const [offers, setOffers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchOffers() {
//       try {
//         const response = await axios.get("/farmer/offers");
//         setOffers(response.data);
//       } catch (error) {
//         setError("Failed to fetch offers.");
//         console.error("Error fetching offers:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchOffers();
//   }, []);

//   const acceptOffer = async (offerId) => {
//     try {
//       const response = await axios.post("/farmer/accept-offer", { offerId });

//       // Update offers list to mark offer as accepted
//       setOffers((prevOffers) =>
//         prevOffers.map((offer) =>
//           offer._id === offerId ? { ...offer, status: "accepted" } : offer
//         )
//       );

//     } catch (error) {
//       console.error("Error accepting offer:", error);
//       alert("Failed to accept offer.");
//     }
//   };

//   if (loading) return <p className="text-center text-lg">Loading offers...</p>;
//   if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

//   return (
//     <div className="min-h-screen p-6 bg-primary3">
//       <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
//         Available Offers
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {offers.map((offer) => (
//           <div
//             key={offer._id}
//             className="flex items-center p-6 bg-white rounded-lg shadow-md"
//             style={{ border: "1px solid #0000001A" }}
//           >
//             <div className="ml-4 flex-1">
//               <div
//                 className="font-bold text-green-800"
//                 style={{ fontFamily: "Roboto, sans-serif" }}
//               >
//                 Contractor : {offer.vendorId.name}
//               </div>
//               <div className="text-green-800">Crop: {offer.crop}</div>
//               <div className="text-green-800">
//                 Quantity: {offer.quantity} | Price: ₹{offer.price}
//               </div>
//               <div className="text-green-800">
//                 Status: {offer.status === "accepted" ? "Accepted" : "Pending"}
//               </div>
//               <button
//                 onClick={() => acceptOffer(offer._id)}
//                 className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
//               >
//                 Accept Offer
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FarmerOffers;

import { useEffect, useState } from "react";
import axios from "axios";

function FarmerOffers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOffers() {
      try {
        const response = await axios.get("/farmer/offers");
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

  const acceptOffer = async (offerId) => {
    // Ask for confirmation
    const isConfirmed = window.confirm(
      "Are you sure you want to accept this offer?"
    );

    if (!isConfirmed) return; // Exit if the user cancels

    try {
      const response = await axios.post("/farmer/accept-offer", { offerId });

      // Update offers list to mark offer as accepted and disable the button
      setOffers((prevOffers) =>
        prevOffers.map((offer) =>
          offer._id === offerId
            ? { ...offer, status: "accepted", isAccepted: true }
            : offer
        )
      );
    } catch (error) {
      console.error("Error accepting offer:", error);
      alert("Failed to accept offer.");
    }
  };

  if (loading) return <p className="text-center text-lg">Loading offers...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div className="min-h-screen p-6 bg-custom-bg-image bg-cover">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-black">
        Available Offers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <div
            key={offer._id}
            className="flex items-center p-6 bg-white rounded-lg shadow-md"
            style={{ border: "1px solid #0000001A" }}
          >
            <div className="ml-4 flex-1">
              <div
                className="font-bold text-green-800"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Contractor : {offer.vendorId.name}
              </div>
              <div className="text-green-800">Crop: {offer.crop}</div>
              <div className="text-green-800">
                Quantity: {offer.quantity} | Price: ₹{offer.price}
              </div>
              <div className="text-green-800">
                Status: {offer.status === "accepted" ? "Accepted" : "Pending"}
              </div>
              <button
                onClick={() => acceptOffer(offer._id)}
                className={`mt-4 px-4 py-2 rounded ${
                  offer.status === "accepted"
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-green-500"
                } text-white`}
                disabled={offer.status === "accepted"}
              >
                {offer.status === "accepted"
                  ? "Offer Accepted"
                  : "Accept Offer"}

                {/* onClick={() => acceptOffer(offer._id)}
                className={`mt-4 px-4 py-2 rounded ${
                  offer.isAccepted ? "bg-gray-500 cursor-not-allowed" : "bg-green-500"
                } text-white`}
                disabled={offer.isAccepted}
              >
                {offer.isAccepted ? "Offer Accepted" : "Accept Offer"} */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FarmerOffers;
