import React from "react";
import Project from "./Project";
import assets from "../../assets/assets";

function TwoProjects() {
  const projectsData = [
    {
      icon: assets.bookIcon,
      title: "Book Notes",
      domain: "Backend Development",
      description:
        "Book Notes is a web app for managing book information, integrating Express/Node.js with a PostgreSQL database. It supports CRUD operations and uses public APIs to fetch book covers. Users can add, update, sort, and view book entries with a user-friendly interface, ensuring seamless data management and presentation.",
      image: assets.BookNotes,
      imageAlt: "Book Notes Project",
    },
    {
      icon: assets.geminiIcon,
      title: "Gemini AI Clone",
      domain: "Web Development",
      description:
        "This project is a ReactJS-based application designed to replicate the functionality and user experience of Google Gemini AI. The app provides an interactive platform where users can ask questions and receive AI-generated responses in real-time, all within a clean and user-friendly interface.",
      image: assets.Gemini,
      imageAlt: "Gemini AI Project",
    },
  ];

  return (
    <div className="two-projects-container">
      <h2>
        From <span>Code to Creation,</span> Noteworthy Additions to My Portfolio
      </h2>
      {projectsData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
      <button className="more-projects">
        <i class="fa-solid fa-bars"></i>View all Projects
      </button>
    </div>
  );
}

export default TwoProjects;
