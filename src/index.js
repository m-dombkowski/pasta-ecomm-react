import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/main";
import { SortingProvider } from "./context/sort-context";

const container = document.getElementById("root");
const root = createRoot(container);
initializeApp(firebaseConfig);

root.render(
  <BrowserRouter>
    <SortingProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SortingProvider>
  </BrowserRouter>
);
