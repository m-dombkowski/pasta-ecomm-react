import React, { Fragment } from "react";
import "./fonts/fonts.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Navigation from "./components/Navigation/Navigation";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CartPage from "./pages/CartPage/CartPage";
import SecretPage from "./pages/SecretPage/SecretPage";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/secret" element={<SecretPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
