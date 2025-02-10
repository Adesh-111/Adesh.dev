import React from "react";
import Experience from "./Experience";
import "./Experience.css";
import assets from "../../assets/assets";

const experienceData = [
  {
    duration: "Feb 2025 - Present",
    image: assets.fellowFounder,
    role: "Web Developer",
    name: "Fellow Founder",
    level: "Internship",
    link: "https://www.linkedin.com/company/fellow-founder/",
    desc: "Lorem ipsum dolor sit, ameluptates officia ipsum error veniam neque! Assumenda laudantium consequuntur, iste, repellat dolorum eaque quidem inventore asperiores saepe itaque reprehenderit corporis labore dolorem incidunt quam.",
  },
  {
    duration: "July 2024 - Present",
    image: assets.thinkDigital,
    name: "Think Digital",
    role: "Community Builder",
    level: "Part time",
    link: "https://think-digital.in/",
    desc: "As a builder, I have participated and conducted the community activities such as meetups, playouts, and various online meetings to gain knowledge and expand my network. These activities serve as a refreshing boost for my career.",
  },
  {
    duration: "Sept 2024 - Nov 2024",
    image: assets.zenhook,
    role: "Full stack Developer",
    name: "Zenhook",
    level: "Internship",
    link: "https://www.linkedin.com/company/zen-hook/",
    desc: "I developed Fabware, a real-time e-commerce platform, using React, Node.js, and Express.js, collaborating with team members to meet milestones and enhance user experience through improved responsiveness and performance.",
  },
  {
    duration: "May 2024- June 2024",
    image: assets.afame,
    name: "Afame Technologies",
    role: "Web developer Intern",
    level: "Internship",
    link: "https://afame.in/",
    desc: "I have mastered web development fundamentals and advanced techniques, designing secure, user-friendly login forms and collaborating with teams to create responsive, visually appealing web pages. These experiences have enhanced my front-end development skills and coding proficiency.",
  },
];

function Experiences() {
  return (
    <>
      <div className="Experiences" data-aos="zoom">
        <div className="Experiences-container">
          <div className="Experience-description">
            <h3>
              Take a closer look at <span>my professional track record</span>
            </h3>
            <p>
              Every experience is more impactful when it’s backed by a drive for
              personal development and full contribution
            </p>
            <a href={assets.resume} download="Adesh Resume.pdf">
              <button>
                <i className="fa-solid fa-bars"></i>View Resume
              </button>
            </a>
          </div>
          <div className="Experience-cards">
            <Experience details={experienceData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;
