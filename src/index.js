import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./navbar-styles.css";

import App from "./App";
import HomePage from "./pages/HomePage";
import ApiExercise from "./pages/ApiExercise";

// import components from react router dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// create a router. to specify the individual routes in a react application.
const router = createBrowserRouter([
  // individual paths/routes go here for each page
  {
    path: "/",
    // loads homepage component when url is accessed
    element: <HomePage/> // includes the HomePage route here
  },
  {
    path: "/tic-tac-toe",
    element: <App/> // includes the App route here. This goes to the tic-tac-toe game.
  },
  {
    path: "/api-exercise",
    element: <ApiExercise/> // include App route here. This goes to the api exercise.
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} /> {/* pass in router to the route provider. */}
  </StrictMode>
);