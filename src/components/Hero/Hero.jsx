import React from "react";
import { Typewriter } from "react-simple-typewriter";
import assets from "../../assets/assets";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="Hero" id="Home" data-aos="zoom">
        <div className="hero-top">
          <h1 className="title">
            <span className="intro">I'm</span>
            <span className="hero-title">Adesh</span>,
            <div>
              <div className="Typewriter">
                a{" "}
                <Typewriter
                  words={[
                    "Creator",
                    "Developer",
                    "Innovator",
                    "Engineer",
                    "Student",
                  ]}
                  loop={80}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </div>
            </div>
          </h1>
          <p>
            Creative web developer, passionate about pushing boundaries,
            continuously learning, and building impactful projects.
          </p>
        </div>
        <div className="Image">
          <img src={assets.profile} alt="profile-picture" />
        </div>
      </div>
    </>
  );
}

export default Hero;
