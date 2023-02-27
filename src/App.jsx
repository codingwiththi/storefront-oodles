import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Item from "./pages/Item";
import Layout from "./pages/Layout";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
