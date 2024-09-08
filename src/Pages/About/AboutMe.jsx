import Experiences from "../../components/Experiences/Experiences";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function AboutMe() {
  return (
    <>
      <Navbar />
      <div className="AboutMe">
        <div className="head">
          <h3></h3>
          <p></p>
          <a href="">
            <button>Get in touch</button>
          </a>
          <a href="">
            <button></button>
          </a>
        </div>
        <div className="story">
          <div className="story-head">
            <h3></h3>
            <img src="" alt="" />
          </div>
          <div className="story-desc">
            <p></p>
            <a href="">
              <button>Get in Touch</button>
            </a>
          </div>
        </div>
        <div className="titles">
          <marquee behavior="scroll" direction="right">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </marquee>
        </div>
        <div className="core-values">
            <h3></h3>
            <p>

            </p>
            <div className="core-cards">
                <div className="core-card">
                    <img src="" alt="" />
                    <h4></h4>
                    <p></p>
                </div>
            </div>
        </div>
        <Experiences />
      </div>

      <Footer />
    </>
  );
}

export default AboutMe;
