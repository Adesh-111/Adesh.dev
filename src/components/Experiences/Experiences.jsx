import React from "react";
import Experience from "./Experience";
import "./Experience.css";
import assets from "../../assets/assets";

const experienceData = [
  {
    duration: "Sept 2024 - Present",
    image: assets.zenhook,
    role: "Full stack Developer",
    name: "Zenhook",
    level: "Internship",
    link: "https://www.linkedin.com/company/zen-hook/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta nihil fugit. Eius quibusdam magni, ut omnis saepe, at eveniet hic nobis consequatur animi, eum esse sapiente doloribus perferendis consequuntur in voluptatum! Veritatis iste pariatur molestias totam rerum corrupti, explicabo dolorum cum expedita quo sequi fugit, quos soluta alias dignissimos",
  },
  {
    duration: "July 2024 - Present",
    image: assets.thinkDigital,
    name: "Think Digital",
    role: "Community member",
    level: "Part time",
    link: "https://think-digital.in/",
    desc: "As a member, I have participated in community activities such as meetups, playouts, and various online meetings to gain knowledge and expand my network. These activities serve as a refreshing boost for my career.",
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
      <div className="Experiences">
        <div className="Experiences-container">
          <div className="Experience-description">
            <h3>Take a closer look at my professional track record</h3>
            <p>
              Every experience is more impactful when it’s backed by a drive for
              personal development and full contribution
            </p>
            <button>View Resume</button>
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
