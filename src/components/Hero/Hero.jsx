import React from "react";
import { Typewriter } from "react-simple-typewriter";
import assets from "../../assets/assets";
import "./Hero.css";
// import Bootstrap from "bootstrap";

function Hero() {
  return (
    <>
      <div className="Hero" id="Home">
        <div>
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
                    "Full stack Developer",
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
            <div className="from">
              from
              <span>One of you</span>
            </div>
          </h1>
          <p>
            Creative web developer, passionate about pushing boundaries,
            continuously learning, and building impactful projects.
          </p>
          <div className="button">
            <button>
              <img src={assets.mailIcon} alt="mail" />
              Get in Touch
            </button>
            <button>
              <img src={assets.project} alt="projects" />
              View projects
            </button>
          </div>
        </div>
        <div className="Image">
          <img src={assets.profile} alt="profile-picture" />
        </div>
      </div>
    </>
  );
}

export default Hero;
