import React from "react";
import ReactDOM from "react-dom/client";
import App from "./modules/common/components/App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH_DOMAIN}
        clientId={import.meta.env.VITE_AUTH_CLIENT}
        authorizationParams={{
          redirect_uri: `${import.meta.env.VITE_AUTH_CALLBACK_URL}`,
          audience: "http://localhost:8000/",
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
