import React from "react";

function Services(props) {
    return ( <>
    <div className="services">
        <h2 className="service-title">
        Find out how I can <span>help you.</span>
        </h2>
        <p>As a full-stack developer, I offer a comprehensive range of services to build dynamic, high-performing web applications.</p>
        <div className="section-cards">
            <div className="section-card">
                <h3>{props.title}</h3>
                
            </div>
        </div>
    </div>
    </> );
}

export default Services;