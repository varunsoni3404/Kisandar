  import { useEffect, useState } from "react";
  import { Route, Routes } from "react-router-dom";
  import IndexPage from "./pages/IndexPage";
  import LoginPage from "./pages/LoginPage";
  import Layout from "./Components/Layout";
  import RegisterPage from "./pages/RegisterPage";
  import axios from "axios";
  import { UserContextProvider } from "./Components/UserContext";
  import Account from "./pages/Account";
  import FarmPage from "./pages/FarmPage";
  import MainSection from "./pages/MainSection";
  import FarmerDashboard from "./pages/FarmerDashboard";
  import VendorDashboard from "./pages/VendorDashboard";
  import FarmerOffers from "./pages/FarmerOffers";
  import VendorOffers from "./pages/VendorOffers";
  import DiseaseForm from "./pages/DiseaseForm";
  import ImagePage from "./pages/ImagePage";
  import PaymentCard from "./pages/PaymentCard";
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;
  function App() {

    return (
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainSection />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account/:subpage?" element={<Account />} />
            <Route path="/account/:subpage/:action" element={<Account />} />
            <Route path="/farm" element={<FarmPage />}></Route>
            <Route path="/MainSection" element={<MainSection />}></Route>
            <Route path="/farmer/dashboard" element={<FarmerDashboard />}></Route>
            <Route path="/vendor/dashboard" element={<VendorDashboard />}></Route>
            <Route path="/farmer/offers" element={<FarmerOffers />} />
            <Route path="/farmer/quality" element={<DiseaseForm />} />
            <Route path="/farmer/imagepage" element={<ImagePage />} />
            <Route path="/vendor/offers" element={<VendorOffers/>}></Route>
            <Route path="/vendor/shop" element={<PaymentCard/>}></Route>
            
          </Route>
        </Routes>
      </UserContextProvider>
    );
  }

  export default App;
