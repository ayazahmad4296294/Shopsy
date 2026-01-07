import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import TopProducts from "./Components/Top Products/TopProducts";
import Banner from "./Components/Banner/Banner";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import CategoryProducts from "./Pages/CategoryProducts";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { AuthProvider } from "./context/AuthContext";
import AuthPopup from "./Components/AuthPopup/AuthPopup";
import GuardRoute from "./Components/GuardRoute";

const App = () => {

   React.useEffect(() => {
      AOS.init({
         offset: 100,
         duration: 300,
         easing: "ease-in-sine",
         delay: 100,
      });
      AOS.refresh();
   }, []);

   return (
      <AuthProvider>
         <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
            <Navbar />
            <AuthPopup />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route
                  path="/products"
                  element={
                     <GuardRoute>
                        <AllProducts />
                     </GuardRoute>
                  }
               />
               <Route
                  path="/products/category/:category"
                  element={
                     <GuardRoute>
                        <CategoryProducts />
                     </GuardRoute>
                  }
               />
               <Route
                  path="/product/:slug"
                  element={
                     <GuardRoute>
                        <ProductDetails />
                     </GuardRoute>
                  }
               />
               <Route path="/register" element={<Register />} />
               <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
         </div>
      </AuthProvider>
   )
}

export default App
