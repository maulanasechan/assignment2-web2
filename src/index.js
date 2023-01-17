import { PublicClientApplication } from "@azure/msal-browser";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { msalConfig } from "./authConfig";
import { BrowserRouter } from "react-router-dom";

const msalInstance = new PublicClientApplication(msalConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App msalInstance={msalInstance} />
    </BrowserRouter>
  </React.StrictMode>
);
