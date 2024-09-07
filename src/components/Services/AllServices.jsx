import React from "react";
import assets from "../../assets/assets";
import Services from "./Services";
import ServiceTitle from "./ServiceTitle";

function AllServices() {
  const servicesData = [
    {
      title: "Web Development",
      img: assets.web,
      desc: "With expertise in full-stack development and a passion for coding, I bring your web development projects to life with efficient, scalable and user-friendly solutions. I excel in both frontend and backend technologies, delivering solutions that meet your needs and exceed your expectations.",
    },
    {
      title: "Backend Development",
      img: assets.backend,
      desc: "With a keen eye for design and a passion for creating interactive user experiences, I specialize in back-end development that powers your applications seamlessly. I excel in creating efficient APIs, managing databases, and ensuring secure data handling with technologies like Node.js, Express, and SQL.",
    },
    {
      title: "Frontend Development",
      img: assets.frontend,
      desc: "With a passion for creating interactive user experiences, I specialize in front-end development that brings your vision to life. I excel in crafting responsive, accessible, and visually appealing interfaces using the latest technologies like React, HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <> <div className="all-services" data-aos = "fade-up">
      <ServiceTitle />
      <Services services={servicesData} /></div>
    </>
  );
}

export default AllServices;
