import React from "react";
import ReactDOM from "react-dom/client";

import { RickyApp } from "./RickyApp";
import "./main.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RickyApp />
    </BrowserRouter>
  </React.StrictMode>
);
