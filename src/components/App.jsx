import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import AllServices from "./Services/AllServices";
import About from "./About/About";
import Links from "./SocialLinks/Links";
import TwoProjects from "./Projects/TwoProjects";
import Experiences from "./Experiences/Experiences";
import Footer from "./Footer/Footer";
import "aos/dist/aos.css"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <AllServices />
      <About />
      <Links />
      <TwoProjects />
      <Experiences />
      <Footer />
    </>
  );
}

export default App;
