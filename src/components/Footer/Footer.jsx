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
        </div>
      </div>
    </>
  );
}

export default Footer;
