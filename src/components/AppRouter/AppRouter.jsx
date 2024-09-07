import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TwoProjects from "../Projects/TwoProjects";
import Certificates from "../../Pages/Certificates/Certificates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/projects",
    element: <TwoProjects />, 
  },
  {
    path: "/certificates",
    element: <Certificates />, 
  },
]);

export default router;
