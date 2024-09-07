import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TwoProjects from "../Projects/TwoProjects";
import Certificates from "../../Pages/Certificates/Certificates";
import AllProjects from "../../Pages/AllProjects/AllProjects";
import Contact from "../../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/certificates",
    element: <Certificates />,
  },
  {
    path: "/projects",
    element: <AllProjects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
