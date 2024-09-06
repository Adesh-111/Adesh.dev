import React from "react";
import PropTypes from "prop-types";
import "./Project.css";

function Project({ project }) {
  return (
    <div className="project">
      <div className="project-container">
        <div className="project-description">
          <div className="project-domain">
            <img src={project.icon} alt="Project Icon" />
            <p>{project.domain}</p>
          </div>
          <h3>{project.title}</h3>
          <p className="description">{project.description}</p>
          <button>
            {"More about " + project.title}
            <span>→</span>
          </button>
        </div>
        <div className="project-image">
          <img src={project.image} alt={project.imageAlt || "Project Image"} />
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
  }).isRequired,
};

export default Project;
