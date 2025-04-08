import React from "react";
import Project from "./Project";
import assets from "../../assets/assets";

function TwoProjects() {
  const projectsData = [
    {
      icon: assets.sleepIcon,
      title: "DIVI Sleep Tracker",
      domain: "Full Stack Development",
      description:
        "DIVI Sleep Tracker is a full-stack web app that helps users monitor and analyze their sleep patterns. With real-time tracking, sleep history insights, secure login, and an intelligent dashboard, it ensures better sleep management. Built using React, Node.js, Express, and PostgreSQL.",
      image: assets.diviSleepTracker,
      imageAlt: "DIVI Sleep Tracker Project",
      link: "https://divisleep.live",
      codeLink: "https://github.com/Adesh-111/divi-sleep",
      linkAttached: true,
      codeLinkAttached: true,
    },    
    {
      icon: assets.fabware,
      title: "Fabware",
      domain: "Full stack Development",
      description:
        "I developed Fabware related to intern at zenhook, a dynamic real-time e-commerce platform using React, Node.js, and Express.js. The platform features a responsive design, an engaging and visually appealing theme, and showcases products seamlessly. ",
      image: assets.fabwareMain,
      imageAlt: "Fabware Project",
      link: "https://fabware.in",
      codeLink: "https://github.com/Adesh-111/fabware_zenhook-main-test",
      linkAttached: true,
      codeLinkAttached: true,
    },
  ];

  return (
    <div className="projects-container" data-aos="fade-up">
      <div className="two-projects-container">
        <h2>
          From <span>Code to Creation,</span> Noteworthy Additions to My
          Portfolio
        </h2>
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
        <a href="/projects">
          <button className="more-projects">
            <i class="fa-solid fa-bars"></i>View all Projects
          </button>
        </a>
      </div>
    </div>
  );
}

export default TwoProjects;
