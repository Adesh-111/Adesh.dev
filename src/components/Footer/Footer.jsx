import assets from "../../assets/assets";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer" data-aos="fade-up">
        <div className="footer-container">
          <div className="footer-description">
            <div>
              <img src={assets.profile} alt="Profile" className="footer-profile" />
              <h3>Adesh D</h3>
              <p>Student 🖊. Creator 🚀. Developer</p>
            </div>
            <div>
              <ul className="social-links">
                <li>
                  <a href="https://linkedin.com/in/adesh07" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/adeshabin" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/adesh-111" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:adeshabinesh25@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-pages">
            <h3>Pages</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Resume</a></li>
              <li><a href="#">Links</a></li>
              <li><a href="#">Certificates</a></li>
            </ul>
          </div>
          <div className="contact" data-aos="fade-right">
            <h3>Contact me</h3>
            <a href="mailto:adeshabinesh25@gmail.com">
              <i className="fa-solid fa-envelope"></i> adeshabinesh25@gmail.com
            </a>
            <form action="#" method="post" className="contact-form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
