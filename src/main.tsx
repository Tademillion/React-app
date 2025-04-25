import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Components/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}>
      {/* app is not here any more because it goes to the router */}
    </RouterProvider>
  </StrictMode>
);
