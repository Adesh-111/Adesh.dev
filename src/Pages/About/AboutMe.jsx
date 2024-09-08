import assets from "../../assets/assets";
import Experiences from "../../components/Experiences/Experiences";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import CoreCard from "./CoreCard";
import "./AboutMe.css";

function AboutMe() {
  const titles = [
    "Developer",
    "Student",
    "Innovator",
    "Friend",
    "React JS",
    "Node JS",
    "PostgreSQL",
    "JavaScript",
    "Frontend",
    "Backend",
    "Programmer",
    "Coding",
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
      desc: "Discipline is the foundation of my success. By maintaining self-control and sticking to a set of principles, I am able to prioritize my goals and stay on track, no matter what challenges come my way. Whether in my personal or professional life, discipline allows me to make the most of my time and resources, achieve my ambitions, and live a fulfilling life.",
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
      <div className="AboutMe">
        <div className="head">
          <h3>
            Hello World, <span>I'm Adesh</span>
          </h3>
          <p>Explore my story, works and what are my values are.</p>
          <div>
            <a href="/contact">
              <button className="getIn">
                <i class="fa-solid fa-envelope"></i>Get in touch
              </button>
            </a>
            <a href="">
              <button>
                <i class="fa-solid fa-user"></i>My story
              </button>
            </a>
          </div>
        </div>
        <div className="story">
          <div className="story-head">
            <h3>
              Let me tell you <span>my story.</span>{" "}
            </h3>
            <img
              src="https://www.careerguide.com/career/wp-content/uploads/2020/03/developer-dribbble.gif"
              alt=""
            />
          </div>
          <div className="story-desc">
            <p>
              <span>I</span> come from a middle-class family, and ever since my
              school days, I had a strong interest in computer science. However,
              due to certain circumstances, I ended up taking biology in 12th
              standard. Even though I followed that path, deep down, I always
              knew I wanted to pursue engineering. When I finally got the chance
              to enroll in a computer science engineering program, I was
              excited, but I had no prior experience with coding or any
              technical knowledge.
            </p>

            <p>
              Everything changed during my second year when my college hosted
              the Smart India Hackathon. I decided to participate, even though I
              didn't know much about coding. I worked hard and managed to build
              a simple project, which I presented to the judges. But to my
              surprise, instead of encouragement, I was laughed at. The mockery
              was difficult to handle, and it left me feeling defeated.
            </p>

            <p>
              That experience, though painful, became the turning point in my
              life. I knew I had to do something about it. My mind was racing,
              and I was determined to find a career where I could truly thrive.
              I turned to the internet, researching different paths, and
              eventually stumbled upon Full Stack Development. It felt like a
              perfect match for me.
            </p>

            <p>
              I didn't rush the process. I enrolled in a Udemy course and took
              my time learning everything, step by step. I believed that slow
              and steady progress would lead to good results, and I was right.
              As I learned, I started building my own projects and
              mini-projects, and I discovered a deep joy in applying my
              technical skills.
            </p>

            <p>
              From that moment on, I felt complete in my career as a developer.
              I found fulfillment in every new website I created, every custom
              solution I developed, and every challenge I overcame. I've gone
              from knowing nothing to becoming a full-fledged developer, and
              now, I’m eager to keep growing, learning, and helping others
              through my work. Every new project pushes me to go beyond what I
              thought was possible.
            </p>

            <p>That’s how I went from zero to becoming a developer.</p>

            <a href="">
              <button>
                <i class="fa-solid fa-envelope"></i>Get in Touch
              </button>
            </a>
          </div>
        </div>
        <div className="titles">
          <marquee
            className="title-marquee"
            behavior="scroll"
            direction="left"
            scrollamount="5"
            loop="infinite"
          >
            <ul className="title-list">
              {Titles.map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </marquee>
        </div>
        <div className="core-values">
          <h3>My core values, personally and professionally</h3>
          <p>
            These principles motivate me to strive for excellence, maintain
            integrity, and foster positive relationships, guiding me to be my
            best self and achieve success in all my endeavors.
          </p>
          <div className="core-cards">
            {CardDetails.map((card, index) => (
              <CoreCard key={index} card={card} />
            ))}
          </div>
        </div>
        <Experiences />
      </div>

      <Footer />
    </>
  );
}

export default AboutMe;
