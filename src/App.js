import React, { Fragment } from "react";
import "./fonts/fonts.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Navigation from "./components/Navigation/Navigation";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
