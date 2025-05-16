import React from "react";
import assets from "../../assets/assets";
import "./Events.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const eventData = [
  {
    name: "Global FreeLancers Festival 2025",
    image: assets.GFF25,
    link: "https://www.linkedin.com/posts/adesh-d_globalfreelancersfestival2025-gff2025-activity-7288967988597141507-2wLn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERSztwBKxIGxBO7qBowdW_BrTCR436sDkc",
    desc: "Attended the Global Freelancers Festival 2025 at IITM, where I connected with inspiring creators and explored innovative startups. It was a wholesome day of learning, networking, and unforgettable moments.",
    organizedBy: assets.makersTribe,
    organizerLink : "https://makerstribe.in"
  },
];
function Events() {
  return (
    <>
    <Navbar />
      <div className="events-container">
        <h2>Moments That <span>Mattered</span></h2>
        <div className="event-cards">
            {eventData.map((data, index) => (
                <div key={index} className="event-card">
                    <img src={data.image} alt="event-image" />
                    <h3>{data.name}</h3>
                    <p className="event-desc">{data.desc}</p>
                    <div className="event-card-links">
                        <h4>Organized by <a href={data.link}><img src={data.organizedBy} alt="organizer" /></a></h4>
                        <a href={data.link}><img src={assets.linkedIn} alt="linkedin" className="event-post-link" /></a>
                    </div>
                </div>
            ))}
            </div>{" "}
      </div>
      <Footer />
    </>
  );
}

export default Events;
