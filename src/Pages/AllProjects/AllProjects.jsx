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
      icon: assets.fabware,
      title: "Fabware",
      domain: "Full stack Development",
      description:
        "I developed Fabware related to intern at zenhook, a dynamic real-time e-commerce platform using React, Node.js, and Express.js. The platform features a responsive design, an engaging and visually appealing theme, and showcases products seamlessly. ",
      image: assets.fabwareMain,
      imageAlt: "Fabware Project",
      link: "https://fabware-zenhook-main-test.vercel.app/",
      codeLink: "https://github.com/Adesh-111/fabware_zenhook-main-test",
      linkAttached: true,
      codeLinkAttached: true
    },
    {
      icon: assets.portfolioIcon,
      title: "Portfolio Giveaway",
      domain: "Frontend Development",
      description:
        "I created a responsive portfolio for Gokul Krishna JN using React and EmailJS, turning his Figma design into a professional showcase. Overcoming challenges like device responsiveness and domain deployment, the platform highlights his achievements and supports his journey to success.",
      image: assets.portfolio,
      imageAlt: "Portfolio Giveaway",
      codeLink: "https://github.com/Adesh-111/Gokul-portfolio",
      linkAttached: true,
      link: "https://gokul2x.me",
      codeLinkAttached: true
    },
    {
      icon: assets.SRY,
      title: "SRY Wedding decorations",
      domain: "Frontend Development",
      description:
        "I developed a responsive website for SRY Wedding Decorations, transforming a Figma design and logo by Bhagya B into a fully functional site using ReactJS. This project, completed during college, taught me the value of stepping out of my comfort zone, embracing challenges, and turning visions into reality.",
      image: assets.wedding,
      imageAlt: "Wedding image",
      codeLink: "https://github.com/Adesh-111/",
      linkAttached: true,
      codeLinkAttached: false,
      link: "https://gokul2x.me"
    },
    {
      icon: assets.bookIcon,
      title: "Book Notes",
      domain: "Backend Development",
      description:
        "Book Notes is a web app for managing book information, integrating Express/Node.js with a PostgreSQL database. It supports CRUD operations and uses public APIs to fetch book covers. Users can add, update, sort, and view book entries with a user-friendly interface, ensuring seamless data management and presentation.",
      image: assets.BookNotes,
      imageAlt: "Book Notes Project",
      codeLink: "https://github.com/Adesh-111/Book-notes",
      linkAttached: false,
      codeLinkAttached: true
    },
    {
      icon: assets.geminiIcon,
      title: "Gemini AI Clone",
      domain: "Web Development",
      description:
        "This project is a ReactJS-based application designed to replicate the functionality and user experience of Google Gemini AI. The app provides an interactive platform where users can ask questions and receive AI-generated responses in real-time, all within a clean and user-friendly interface.",
      image: assets.Gemini,
      imageAlt: "Gemini AI Project",
      link: "https://gemini-clone-beta-ivory.vercel.app/",
      codeLink: "https://github.com/Adesh-111/gemini-clone",
      linkAttached: true,
      codeLinkAttached: true
    },
    {
      icon: assets.Udemy,
      title: "Udemy Clone",
      domain: "Frontend Development",
      description:
        "Welcome to my Udemy clone project! This project is a replication of the popular online learning platform Udemy, built entirely from scratch. It has been developed to enhance my proficiency in HTML, CSS, and responsive design, providing me with valuable front-end development skills.",
      image: assets.UdemyClone,
      imageAlt: "Udemy clone Project",
      codeLink: "https://github.com/Adesh-111/udemy-clone",
      link: "https://adesh-111.github.io/Udemy-Clone/",
      linkAttached: true,
      codeLinkAttached: true
    },
    {
      icon: assets.APIIcon,
      title: "API Explorer",
      domain: "Backend Development",
      description:
        "This project aims to create a web application named API Explorer using Express/Node.js platform, Axios HTTP client, and a chosen public API from the provided list. The website will interact with the chosen API, retrieve data, and present it in a user-friendly manner.",
      image: assets.APIexplorer,
      imageAlt: "API Explorer",
      codeLink: "https://github.com/Adesh-111/Api-Explorer",
      linkAttached: false,
      codeLinkAttached: true
    },
    {
      icon: assets.WordIcon,
      title: "Interactive Word guessing ",
      domain: "Frontend Development",
      description:
        "The interactive word guessing tool helps novice coders and job seekers improve technical vocabulary and skills. It features Coding tutorials and exercises, and an Aptitude section for problem-solving in job assessments.",
      image: assets.Word,
      imageAlt: "Word guesser",
      codeLink: "https://github.com/Adesh-111/word-guesser",
      link: "https://adesh-111.github.io/word-guesser/",
      linkAttached: true,
      codeLinkAttached: true
    },
    {
      icon: assets.assignmnetIcon,
      title: "Assignment Manager",
      domain: "Backend Development",
      description:
        "Assignment Manager is a web application built with Node.js, Express.js, and EJS that allows users to create, view, update, and delete assignments effortlessly. It provides a user-friendly interface for managing assignments and ensures a seamless experience across desktop and mobile devices.",
      image: assets.Assignment,
      imageAlt: "Assignment Manager",
      codeLink: "https://github.com/Adesh-111/Assignment-manager",
      linkAttached: false,
      codeLinkAttached: true
    },
    {
      icon: assets.PersonalWebsiteIcon,
      title: "Personal Website",
      domain: "Frontend Development",
      description:
        "This is the first version of my portfolio, built using HTML and styled with CSS. Here, you'll find information about me, my skills, projects I've worked on, and how to get in touch with me. Feel free to explore and get to know more about my journey and expertise.",
      image: assets.PersonalWebsite,
      imageAlt: "Personal-website",
      codeLink : "https://github.com/Adesh-111/Personal-site",
      link: "https://adesh-111.github.io/Personal-site/",
      linkAttached: true,
      codeLinkAttached: true
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
