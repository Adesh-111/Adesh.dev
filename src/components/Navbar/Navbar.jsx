import { useEffect } from "react";
import assets from "../../assets/assets";
import "./Navbar.css";
import AOS from "aos";

function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, 
    });
    AOS.refresh(); 
  }, []);
  

  return (
    <>
      <div className="nav-container" >
        <div className="navbar">
          <img src={assets.profile} alt="" />
          {/* <a href="#"><img src={assets.profile} alt="" /></a> */}
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about">About</a>
            </li>
            <li className="nav-item">
              <a href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a href="#" className="more">
                More🔻
              </a>
              <ul className="dropdown">
                <li>
                  <a href="/certificates">Certificates</a>
                </li>
                <li>
                  <a href={assets.resume} download="Adesh Resume.pdf">Resume</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="https://linktr.ee/adesh_d" target="__blank">Links</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
