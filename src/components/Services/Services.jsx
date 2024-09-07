import React from "react";
import "./Services.css";

function Services({ services }) {
  return (
    <div className="services-container" data-aos="zoom-in">
      {services.map((service, index) => (
        <div key={index} className="section-card-wrapper">
          <div className="section-card">
            <div className="service-image">
              <img src={service.img} alt={service.title} />
            </div>

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
