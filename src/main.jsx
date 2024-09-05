import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./components/Navbar/Navbar.css";
import "./components/Hero/Hero.css";
import "./components/Skills/Skills.css";
import "./components/Services/Services.css";
import "./components/About/About.css";
import "./components/SocialLinks/Links.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
