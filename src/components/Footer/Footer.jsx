import assets from "../../assets/assets";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-description">
            <div>
              <img src={assets.profile} alt="" className="footer-profile" />
              <h3>Adesh D</h3>
              <p>Student 🖊. Creator 🚀. Developer</p>
            </div>
            <div>
              <ul>
                <li>
                  <i className="fa-brands fa-linkedin"></i>
                </li>
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
                <li>
                  <i className="fa-brands fa-github"></i>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-pages">
            <h3>Pages</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
              <li>
                <a href="#">Links</a>
              </li>
              <li>
                <a href="#">Certificates</a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3>Contact me</h3>
            <a href="mailto: adeshabinesh25@gmail.com">
            <i className="fa-solid fa-envelope"></i> adeshabinesh25@gmail.com
            </a>
            <form action="">
              <label>Name</label>
              <input type="text" />
              <label htmlFor="email">Email</label>
              <input type="text" />
              <label htmlFor="Subject">Subject</label>
              <input type="text" />
              <label htmlFor="Message">Message</label>
              <textarea name="" id=""></textarea>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
