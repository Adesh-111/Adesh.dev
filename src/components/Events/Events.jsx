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
    organizerLink: "https://makerstribe.in",
  },
  {
    name: "StartupAtti - Feb 2025",
    image: assets.StartupAttiEvent1,
    link: "https://www.linkedin.com/posts/adesh-d_united-all-the-entrepreneurs-in-one-localized-activity-7299095439243427840-EQs2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERSztwBKxIGxBO7qBowdW_BrTCR436sDkc",
    desc: "Attended StartupAtti at YuniQ, a vibrant monthly meetup uniting entrepreneurs under the localized spirit of Atti, where inspiring founders shared powerful insights on resilience, innovation, and purpose. Key takeaway: embrace the journey, solve real problems, and generate value.",
    organizedBy: assets.StartupAttiLogo,
    organizerLink:
      "https://www.linkedin.com/showcase/startupatti/posts/?feedView=all",
  },
  {
    name : "StartupAtti - Apr 2025",
    image : assets.StartupAttiEvent2,
    link : "https://www.linkedin.com/feed/update/urn:li:activity:7321941976759554049/",
    desc : "Attended StartupAtti again, this time themed around FinTech — explored basics and gained powerful insights from FinTech founders on perseverance, feedback, execution, and the value of sharing ideas. Each month brings fresh faces, new needs, and endless possibilities.",
    organizedBy : assets.StartupAttiLogo,
    organizerLink: "https://www.linkedin.com/showcase/startupatti/posts/?feedView=all"
  },
  {
    name : "Community Gathering - Mar 2025",
    image : assets.communityGatheringMar2025,
    link : "https://www.linkedin.com/feed/update/urn:li:activity:7312150004553371648/",
    desc : "Felt right at home at the Think Digital Community gathering at Makers Tribe reconnected, reflected on growth, set future goals, and soaked in powerful insights on passion, failure, and learning. Takeaway: Learn to learn, the journey and people make all the difference.",
    organizedBy : assets.thinkDigital,
    organizerLink: "https://think-digital.in/"
  },
  {
    name : "DNA Documentary",
    image : assets.DNAdocumentary,
    link : "https://www.linkedin.com/feed/update/urn:li:activity:7294419353733672960/",
    desc : "Skipped Interstellar for the DNA School Documentary, and it was worth it met inspiring people, shed my hesitation, and gained deep insights on content, growth, and mindset. Takeaway: Start small, stay consistent, and the right ones will listen.",
    organizedBy : assets.DNA,
    organizerLink: "https://think-digital.in/"
  },
  {
    name : "Movie Screening - DEC 2024",
    image : assets.movieScreeningDec24,
    link : "https://www.linkedin.com/feed/update/urn:li:activity:7294419353733672960/",
    desc : "A Cinema, Connection, and Community hosted my first movie screening with the Teedians Community and watched Anbe Sivam together. Beyond the film, it was about shared laughs, deep conversations, and building meaningful bonds through storytelling. Truly unforgettable!",
    organizedBy : assets.thinkDigital,
    organizerLink: "https://think-digital.in/"
  },
  {
    name : "Branding workshop",
    image : assets.brandingWorkshop,
    link : "https://www.linkedin.com/feed/update/urn:li:activity:7322274208254767104/",
    desc : "Been on a streak of weekend events, and today’s Branding Workshop by Shashank SN (aka Stupidpreneur) broke my old beliefs, branding isn’t the product, it’s beyond that. Learned, laughed, and leveled up my perspective (because I am the product).",
    organizedBy : assets.Stupidpreneur,
    organizerLink: "https://stupidpreneur.in/"
  },
];
function Events() {
  return (
    <>
      <Navbar />
      <div className="events-container">
        <h2>
          Moments That <span>Mattered</span>
        </h2>
        <div className="event-cards">
          {eventData.map((data, index) => (
            <div key={index} className="event-card">
              <img src={data.image} alt="event-image" />
              <h3>{data.name}</h3>
              <p className="event-desc">{data.desc}</p>
              <div className="event-card-links">
                <h4>
                  Organized by{" "}
                  <a href={data.link}>
                    <img src={data.organizedBy} alt="organizer" />
                  </a>
                </h4>
                <a href={data.link}>
                  <img
                    src={assets.linkedIn}
                    alt="linkedin"
                    className="event-post-link"
                  />
                </a>
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
