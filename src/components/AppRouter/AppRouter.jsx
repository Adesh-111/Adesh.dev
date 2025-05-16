import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TwoProjects from "../Projects/TwoProjects";
import Certificates from "../../Pages/Certificates/Certificates";
import AllProjects from "../../Pages/AllProjects/AllProjects";
import Contact from "../../Pages/Contact/Contact";
import AboutMe from "../../Pages/About/AboutMe";
import ServicePage from "../../Pages/Services/ServicePage";
import NotFound from "../NotFound/NotFound";
import Events from "../Events/Events";

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
  },
  {
    path : "/events",
    element : <Events />
  },
  {
    path: "*", 
    element: <NotFound />,
  },
]);

export default router;
