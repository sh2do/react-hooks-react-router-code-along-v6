import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

root.render(<Home />);
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
]);

root.render(<RouterProvider router={router} />);
