import { useState } from "react";
import axios from "axios";
import assets from "../../assets/assets";
import "./Footer.css";

function Footer() {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("https://adesh-dev-api.vercel.app/sendMail", mail)
      .then((res) => {
        console.log("Email sent successfully: ", res);
        setMail({
          name: "",
          email: "",
          subject: "",
          body: "",
        });
      })
      .catch((err) => {
        console.log("Email sending failed: ", err);
      });
  }

  return (
    <>
      <div className="footer" data-aos="fade-up">
        <div className="footer-container">
          <div className="footer-description">
            <div>
              <img
                src={assets.profileIcon}
                alt="Profile"
                className="footer-profile"
              />
              <h3>Adesh D</h3>
              <p>Student 🖊. Creator 🚀. Developer 💻</p>
            </div>
            <div>
              <ul className="social-links">
                <li>
                  <a
                    href="https://linkedin.com/in/adesh-d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/adeshabin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/adesh-111"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:adeshabinesh25@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-pages">
            <h3>Pages</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1sPsfL6jVGy4Kg8RXN94AGmZT2kwFkM1A/view?usp=sharing">
                  Resume
                </a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/adesh_d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Links
                </a>
              </li>
              <li>
                <a href="/certificates">Certificates</a>
              </li>
            </ul>
          </div>

          <div className="contact" data-aos="fade-right">
            <h3>Contact me</h3>
            <a
              href="mailto:adeshabinesh25@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope"></i> adeshabinesh25@gmail.com
            </a>
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                value={mail.name} // Binding the value to state
                onChange={(e) =>
                  setMail((prev) => ({ ...prev, name: e.target.value }))
                }
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                value={mail.email} // Binding the value to state
                onChange={(e) =>
                  setMail((prev) => ({ ...prev, email: e.target.value }))
                }
              />

              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the Subject for mail"
                value={mail.subject} // Binding the value to state
                onChange={(e) =>
                  setMail((prev) => ({ ...prev, subject: e.target.value }))
                }
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Got any message for me?"
                value={mail.body} // Binding the value to state
                onChange={(e) =>
                  setMail((prev) => ({ ...prev, body: e.target.value }))
                }
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
