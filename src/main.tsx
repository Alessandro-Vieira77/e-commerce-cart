import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./App";
import CartProvaider from "./components/context/CartContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvaider>
      <RouterProvider router={router} />
    </CartProvaider>
  </StrictMode>
);
