import React from "react";
import Footer from "../Components/Footer";
const MainSection = () => {
  return (
    <div>
      <main className="grid grid-cols-2 gap-4   bg-primary2">
        <div className="relative">
          {<img src="1.png" alt="3D visual of farming" />}
        </div>
        <div className="flex flex-col justify-center items-start ">
          <h1 className="text-6xl font-bold text-primary1">KISANDAR</h1>
          <p className="mt-4 text-lg text-primary3">
            Empowering farmers with trusted partnerships
          </p>
          <div className="flex gap-5">
          <a href="/login" className=" mt-5 text-white flex w-24 h-12 bg-primary3 items-center justify-center">Login</a>
          <a href="/register" className="mt-5 border-2 border-primary3 text-primary3 flex w-28 h-12 items-center justify-center">Register</a>

          </div>
        </div>
      </main>
      <section className="bg-primary1 text-white py-16">
        <div className="container mx-auto text-center">
          <p className="text-xs mb-1">WHO WE ARE</p>
          <h2 className="text-3xl ">ABOUT KISANDAR</h2>
          <p className="mt-6  mx-auto text-2xl">
            At Kisandhar, we're dedicated to revolutionizing the way agriculture
            works through innovative contract <br /> farming solutions. Our
            mission is to bridge the gap between farmers and agribusinesses,
            fostering a <br />
            sustainable and mutually beneficial partnership that enhances
            productivity, profitability, and sustainability.
          </p>
        </div>
      </section>
      <div className="py-12 bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-green-700 mb-8">
          What do we provide?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-primary2 p-10 py-14 border-2  border-black  rounded-[60px] shadow-lg hover:shadow-black hover:scale-105 transition-transform duration-300 ease-in-out w-96 h-128 flex flex-col items-center">
            <div className="flex justify-center mb-4 flex-grow">
              <img
                src="triangle.png"
                alt="Tiered Buyer Verification"
                className="h-44 w-h-44 object-contain"
              />
            </div>
            <h2 className="text-lg font-semibold text-green-700 text-center">
              Tiered Buyer Verification
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              Tailored software solutions for precision farming, crop monitor,
              and yield prediction.
            </p>
          </div>
          <div className="bg-primary2 p-10 py-14 border-2  border-black  rounded-[60px] shadow-lg hover:shadow-black hover:scale-105 transition-transform duration-300 ease-in-out w-96 h-128 flex flex-col items-center">
            <div className="flex justify-center mb-4 flex-grow">
              <img
                src="smartanalysis.png"
                alt="Tiered Buyer Verification"
                className="h-44 w-h-44 object-contain"
              />
            </div>
            <h2 className="text-lg font-semibold text-green-700 text-center">
              Smart analysis Dashboard
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              Tailored software solutions for precision farming, crop monitor,
              and yield prediction.
            </p>
          </div>
          <div className="bg-primary2 p-10 py-14 border-2  border-black  rounded-[60px] shadow-lg hover:shadow-black hover:scale-105 transition-transform duration-300 ease-in-out w-96 h-128 flex flex-col items-center">
            <div className="flex justify-center mb-4 flex-grow">
              <img
                src="payment.png"
                alt="Tiered Buyer Verification"
                className="h-44 w-h-44 object-contain"
              />
            </div>
            <h2 className="text-lg font-semibold text-green-700 text-center">
              Monitoring payment and Secure Transactions
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              Tailored software solutions for precision farming, crop monitor,
              and yield prediction.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-primary3 text-white py-12 relative flex">
        <div className="container  text-center px-20 ">
          <p className="text-xs mb-1" style={{ textAlign: "justify" }}>
            NAVIGATION
          </p>
          <h2 className="text-3xl" style={{ textAlign: "justify" }}>
            How it Works
          </h2>
          <p className="mt-6  text-2xl" style={{ textAlign: "justify" }}>
            Our secure transactions dashboard provides real-time insights <br />{" "}
            into the status of your transactions with intuitive visual <br />{" "}
            indicators and AI-powered analytics. Easily monitor security <br />{" "}
            levels, track trends, and receive alerts to ensure your <br />{" "}
            transactions are always protected.
          </p>
        </div>
        
      </section>
    <Footer></Footer>
    </div>
  );
};

export default MainSection;
