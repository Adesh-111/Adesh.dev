import React from "react";
import "./Experience.css";

function Experience({ details }) {
  return (
    <>
      {details.map((service, index) => (
        <div className="card" key={index} data-aos = "fade-left">
          <div className="top">
            <h4 className="duration">{service.duration}</h4>
            <img className="ex-image" src={service.image} alt={service.role} />
          </div>
          <div className="bottom">
            <h3 className="Experience--title">{service.role}</h3>
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
            >{service.name}</a>
            <p className="ex-desc">{service.desc}</p>
            <button>{service.level}</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Experience;
