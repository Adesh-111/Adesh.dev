import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "../../components/Navbar/Navbar.css";
import "./AllProjects.css";
import React from "react";
import assets from "../../assets/assets.js";
import Project from "../../components/Projects/Project.jsx";

function AllProjects() {
  const projectsData = [
    {
      icon: assets.bookIcon,
      title: "Book Notes",
      domain: "Backend Development",
      description:
        "Book Notes is a web app for managing book information, integrating Express/Node.js with a PostgreSQL database. It supports CRUD operations and uses public APIs to fetch book covers. Users can add, update, sort, and view book entries with a user-friendly interface, ensuring seamless data management and presentation.",
      image: assets.BookNotes,
      imageAlt: "Book Notes Project",
      linktitle: "book-notes",
    },
    {
      icon: assets.geminiIcon,
      title: "Gemini AI Clone",
      domain: "Web Development",
      description:
        "This project is a ReactJS-based application designed to replicate the functionality and user experience of Google Gemini AI. The app provides an interactive platform where users can ask questions and receive AI-generated responses in real-time, all within a clean and user-friendly interface.",
      image: assets.Gemini,
      imageAlt: "Gemini AI Project",
      linktitle: "gemini-clone",
    }, {
        icon: assets.geminiIcon,
        title: "Udemy Clone",
        domain: "Frontend Development",
        description:
          "Welcome to my Udemy clone project! This project is a replication of the popular online learning platform Udemy, built entirely from scratch. It has been developed to enhance my proficiency in HTML, CSS, and responsive design, providing me with valuable front-end development skills.",
        image: assets.Gemini,
        imageAlt: "Udemy clone Project",
        linktitle: "udemy-clone",
      }, {
        icon: assets.geminiIcon,
        title: "Gemini AI Clone",
        domain: "Web Development",
        description:
          "This project is a ReactJS-based application designed to replicate the functionality and user experience of Google Gemini AI. The app provides an interactive platform where users can ask questions and receive AI-generated responses in real-time, all within a clean and user-friendly interface.",
        image: assets.Gemini,
        imageAlt: "Gemini AI Project",
        linktitle: "gemini-clone",
      }, {
        icon: assets.geminiIcon,
        title: "Gemini AI Clone",
        domain: "Web Development",
        description:
          "This project is a ReactJS-based application designed to replicate the functionality and user experience of Google Gemini AI. The app provides an interactive platform where users can ask questions and receive AI-generated responses in real-time, all within a clean and user-friendly interface.",
        image: assets.Gemini,
        imageAlt: "Gemini AI Project",
        linktitle: "gemini-clone",
      }, {
        icon: assets.geminiIcon,
        title: "Gemini AI Clone",
        domain: "Web Development",
        description:
          "This project is a ReactJS-based application designed to replicate the functionality and user experience of Google Gemini AI. The app provides an interactive platform where users can ask questions and receive AI-generated responses in real-time, all within a clean and user-friendly interface.",
        image: assets.Gemini,
        imageAlt: "Gemini AI Project",
        linktitle: "gemini-clone",
      }, {
        icon: assets.geminiIcon,
        title: "Gemini AI Clone",
        domain: "Web Development",
        description:
          "This project is a ReactJS-based application designed to replicate the functionality and user experience of Google Gemini AI. The app provides an interactive platform where users can ask questions and receive AI-generated responses in real-time, all within a clean and user-friendly interface.",
        image: assets.Gemini,
        imageAlt: "Gemini AI Project",
        linktitle: "gemini-clone",
      }, {
        icon: assets.geminiIcon,
        title: "Gemini AI Clone",
        domain: "Web Development",
        description:
          "This project is a ReactJS-based application designed to replicate the functionality and user experience of Google Gemini AI. The app provides an interactive platform where users can ask questions and receive AI-generated responses in real-time, all within a clean and user-friendly interface.",
        image: assets.Gemini,
        imageAlt: "Gemini AI Project",
        linktitle: "gemini-clone",
      }, {
        icon: assets.geminiIcon,
        title: "Gemini AI Clone",
        domain: "Web Development",
        description:
          "This project is a ReactJS-based application designed to replicate the functionality and user experience of Google Gemini AI. The app provides an interactive platform where users can ask questions and receive AI-generated responses in real-time, all within a clean and user-friendly interface.",
        image: assets.Gemini,
        imageAlt: "Gemini AI Project",
        linktitle: "gemini-clone",
      }, {
        icon: assets.geminiIcon,
        title: "Gemini AI Clone",
        domain: "Web Development",
        description:
          "This project is a ReactJS-based application designed to replicate the functionality and user experience of Google Gemini AI. The app provides an interactive platform where users can ask questions and receive AI-generated responses in real-time, all within a clean and user-friendly interface.",
        image: assets.Gemini,
        imageAlt: "Gemini AI Project",
        linktitle: "gemini-clone",
      }, {
        icon: assets.geminiIcon,
        title: "Gemini AI Clone",
        domain: "Web Development",
        description:
          "This project is a ReactJS-based application designed to replicate the functionality and user experience of Google Gemini AI. The app provides an interactive platform where users can ask questions and receive AI-generated responses in real-time, all within a clean and user-friendly interface.",
        image: assets.Gemini,
        imageAlt: "Gemini AI Project",
        linktitle: "gemini-clone",
      },

  ];

  return (
    <>
      <Navbar />
      <div className="all-projects" data-aos="fade-up">
        <div className="all-projects-container">
          <h2>
            From <span>Code to Creation,</span> Noteworthy Additions to My
            Portfolio
          </h2>
          {projectsData.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllProjects;
