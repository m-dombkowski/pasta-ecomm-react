import React, { Fragment } from "react";
import "./fonts/fonts.css";

import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
  const clickHandler = () => {
    console.log("test");
  };

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
