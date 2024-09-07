import React from "react";

function Certificates({ cert }) {
  return (
    <>
      <div className="certificate-card" data-aos= "fade-right">
        <div className="certificate-img">
          <img src={cert.image} alt={cert.name} />
        </div>

        <h3>{cert.name}</h3>
        <p>{cert.Date}</p>
        <div className="img-links">
          <img src={cert.icon} alt={cert.name + " icon"} />
          <div className="cert-link">
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-link"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificates;
