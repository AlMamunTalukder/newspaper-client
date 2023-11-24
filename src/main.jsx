import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import router from "./Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Authentication/Providers/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="mx-auto max-w-screen-xl">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
