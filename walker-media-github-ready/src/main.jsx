import React from "react";
import { createRoot } from "react-dom/client";
import WalkerMediaSite from "./WalkerMediaSite.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WalkerMediaSite />
  </React.StrictMode>
);
