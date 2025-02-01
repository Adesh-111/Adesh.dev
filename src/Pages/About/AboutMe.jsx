import assets from "../../assets/assets";
import Experiences from "../../components/Experiences/Experiences";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import CoreCard from "./CoreCard";
import "./AboutMe.css";
import ImageTrail from "../../components/Other/ImageTrail/ImageTrail";

const imageTrailImages = Array.from({ length: 28 }, (_, i) => assets[`Image${i}`] || "");

function AboutMe() {
  const titles = [
    "•   Developer",
    "•   Student",
    "•   Innovator",
    "•   Friend",
    "•   React JS",
    "•   Node JS",
    "•   PostgreSQL",
    "•   JavaScript",
    "•   Frontend",
    "•   Backend",
    "•   Programmer",
    "•   Coding",
  ];

  const Titles = Array(100).fill(titles).flat();

  const CardDetails = [
    {
      image: assets.web,
      title: "Focus",
      desc: "Staying focused is essential to achieving my goals and delivering high-quality work. By keeping my eyes on the prize and avoiding distractions, I'm able to make the most of my time and energy.",
    },
    {
      image: assets.frontend,
      title: "Responsibility",
      desc: "Taking responsibility for my actions is a cornerstone of my personal and professional life. By owning my mistakes and working to rectify them, I show my dedication to doing what's right and building a better future.",
    },
    {
      image: assets.APIexplorer,
      title: "Consistency",
      desc: "Consistency is key in everything I do, from delivering on my commitments to maintaining high standards in my work. By being reliable and dependable, I earn the trust of my clients and colleagues.",
    },
    {
      image: assets.BookNotes,
      title: "Learning",
      desc: "Continuous learning is crucial to my growth and success as a developer. By seeking out new opportunities to expand my knowledge and skills, I'm able to stay ahead of the curve and tackle new challenges with confidence.",
    },
    {
      image: assets.Gemini,
      title: "Discipline",
      desc: "Discipline is the foundation of my success. By maintaining self-control and sticking to a set of principles, I am able to prioritize my goals and stay on track, no matter what challenges come my way.",
    },
    {
      image: assets.PersonalWebsite,
      title: "Adaptability",
      desc: "Embracing change and being adaptable to new challenges is essential to my growth. I approach each situation with an open mind, ready to pivot and innovate when needed.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="AboutMe" data-aos="fade-up">
        <div className="head">
          <h3>
            Hello World, <span>I'm Adesh</span>
          </h3>
          <p>Explore my story, works, and what my values are.</p>
          <div className="core-buttons">
            <a href="/contact">
              <button className="getIn">
                <i className="fa-solid fa-envelope"></i> Get in touch
              </button>
            </a>
            <a href="#">
              <button>
                <i className="fa-solid fa-user"></i> My story
              </button>
            </a>
          </div>
        </div>
        <div className="story" data-aos="zoom-out">
          <div className="story-head">
            <h3>
              Let me tell you <span>my story.</span>
            </h3>
            <img
              src="https://www.careerguide.com/career/wp-content/uploads/2020/03/developer-dribbble.gif"
              alt="Developer Animation"
            />
          </div>
          <div className="story-desc">
            <p>
              <span>E</span>ver since my school days, I had a strong interest in computer science. However, due to certain circumstances, I ended up taking biology in 12th standard. Even though I followed that path, deep down, I always knew I wanted to pursue engineering.
            </p>
            <p>
              Everything changed during my second year when my college hosted the Smart India Hackathon. I decided to participate, even though I didn't know much about coding. I worked hard and managed to build a simple project, which I presented to the judges. But to my surprise, instead of encouragement, I was laughed at. The mockery was difficult to handle, and it left me feeling defeated.
            </p>
            <p>
              That experience, though painful, became the turning point in my life. I turned to the internet, researched different paths, and eventually stumbled upon Full Stack Development. It felt like a perfect match for me.
            </p>
            <p>
              I didn't rush the process. I enrolled in a Udemy course and took my time learning step by step. I built projects and mini-projects and discovered a deep joy in applying my technical skills.
            </p>
            <p>
              From that moment on, I felt complete in my career as a developer. I've gone from knowing nothing to becoming a full-fledged developer, eager to keep growing, learning, and helping others through my work.
            </p>
            <p>That’s how I went from zero to becoming a developer.</p>
            <a href="/contact">
              <button>
                <i className="fa-solid fa-envelope"></i> Get in Touch
              </button>
            </a>
          </div>
        </div>
        <div className="titles" data-aos="fade-down">
          <marquee className="title-marquee" behavior="scroll" direction="left" scrollamount="5">
            <ul className="title-list">
              {Titles.map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </marquee>
        </div>
        <div className="core-values" data-aos="fade-up">
          <div className="core-desc">
            <h3>My core values, personally and professionally</h3>
            <p>
              These principles guide me to strive for excellence, maintain integrity, and foster positive relationships.
            </p>
          </div>
          <div className="core-cards">
            {CardDetails.map((card, index) => (
              <CoreCard key={index} card={card} />
            ))}
          </div>
        </div>
        <h3 className="image-trail-title">Visionary Vault</h3>
        <div className="image-trail" style={{ height: "800px", position: "relative", overflow: "hidden", border: "2px solid white", borderRadius: "20px", margin: "auto 30px", marginBottom: "-250px" }}>
          <ImageTrail items={imageTrailImages} variant={7} />
        </div>
        <Experiences />
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
