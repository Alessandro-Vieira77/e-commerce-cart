import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Cart } from "./pages/cart/Cart";
import { Layout } from "./components/layout/Layot";
import { Product } from "./pages/product/Prouct";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cart/:product",
        element: <Product />,
      },
    ],
  },
]);

export { router };
