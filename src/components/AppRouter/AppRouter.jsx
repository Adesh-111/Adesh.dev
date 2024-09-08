import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TwoProjects from "../Projects/TwoProjects";
import Certificates from "../../Pages/Certificates/Certificates";
import AllProjects from "../../Pages/AllProjects/AllProjects";
import Contact from "../../Pages/Contact/Contact";
import AboutMe from "../../Pages/About/AboutMe";
import ServicePage from "../../Pages/Services/ServicePage";

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
  {
    path :"/about",
    element: <AboutMe />
  },
  {
    path : "/services",
    element : <ServicePage />
  }
]);

export default router;
