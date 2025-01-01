import React from "react";
import PropTypes from "prop-types";
import "./Project.css";

function Project({ project }) {
  return (
    <div className="project" data-aos="fade-right">
      <div className="project-container">
        <div className="project-description">
          <div className="project-domain">
            <img src={project.icon} alt="Project Icon" />
            <p>{project.domain}</p>
          </div>
          <h3>{project.title}</h3>
          <p className="description">{project.description}</p>
          <div className="project-links">
            {project.codeLinkAttached &&<a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="project-code">
                <i class="fa-brands fa-github"></i> Code
              </button>
            </a>}
            
            {project.linkAttached && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="project-link">
                  <i className="fa-solid fa-globe"></i> Link
                </button>
              </a>
            )}
          </div>
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
