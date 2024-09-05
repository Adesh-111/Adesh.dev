import React from "react";
import "./Services.css"

function Services({ services }) {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="section-card-wrapper">
          <div className="section-card">
            <img src={service.img} alt={service.title} />
            <hr className="line" />
            <div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
