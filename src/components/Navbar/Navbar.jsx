import { useEffect } from "react";
import assets from "../../assets/assets";
import "./Navbar.css";
import AOS from "aos";

function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false, 
    });
    AOS.refresh(); 
  }, []);
  

  return (
    <>
      <div className="nav-container" >
        <div className="navbar">
          <img src={assets.profileIcon} alt="" />
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
                More <span style={{paddingTop: "2px"}}>▾</span>
              </a>
              <ul className="dropdown">
                <li>
                  <a href="/certificates">Certificates</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/12-qMaB_5hRZCsPg95lHWw1ceDKCkWlpC/view?usp=drive_link">Resume</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="https://scrollme.today/adesh" target="__blank">Links</a>
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
