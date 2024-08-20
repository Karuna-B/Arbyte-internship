import React from "react";
import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AboutPage from "./pages/AboutPage.jsx";
import "./index.css";
import HomePage from "./pages/homepage.jsx";
import App from "./App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element ={<App/>}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
