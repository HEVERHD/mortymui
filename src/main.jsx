import React from "react";
import ReactDOM from "react-dom/client";
import { RickyApp } from "./RickyApp";
import { BrowserRouter } from "react-router-dom";
import "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RickyApp />
    </BrowserRouter>
  </React.StrictMode>
);
