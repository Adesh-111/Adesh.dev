import assets from "../../assets/assets";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-container" data-aos = "fade-right">
        <div className="about" id="About">
          <div className="about-image">
            <img src={assets.aboutImg} alt="" />
          </div>

          <div className="about-details">
            <h3>
              Wait a minute, <span>who am i?</span>
            </h3>
            <p>
              I am a Computer science and Engineering student at Vel Tech High
              Tech, presently in my final year. I've been pursuing full-stack
              web development since my second year and have a big interest in
              developing products, improving services and delivering value. My
              core ideals are of consistency, hard work, discipline, and grit.
            </p>
            <a href="/about"><button>More about me</button></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
