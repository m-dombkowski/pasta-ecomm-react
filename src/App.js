import React, { Fragment } from "react";
import "./fonts/fonts.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Fragment>
  );
}

export default App;
