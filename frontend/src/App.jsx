import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddProduct from "./pages/Admin/AddProduct";
import ProductList from "./pages/Admin/ProductList";
import Order from "./pages/Admin/Order";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import Myorder from "./pages/Myorder";

const App = () => {
  const location = useLocation();

  
  const hideLayout = ["/signup", "/login"];

  return (
    <>
      {!hideLayout.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/myorders" element={<Myorder />} />



         {/* AdminRoutes  */}
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/orders" element={<Order />} />

      </Routes>

      {!hideLayout.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
