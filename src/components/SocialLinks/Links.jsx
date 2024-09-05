import { useEffect } from "react";

function Links() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll(".links ul li a"));
    let currentIndex = 0;

    function jumpSequence() {
      const isSmallScreen = window.innerWidth <= 600;
      const sequence = isSmallScreen ? links.slice().reverse() : links;

      sequence.forEach((link) => link.classList.remove("jump"));
      sequence[currentIndex].classList.add("jump");
      currentIndex = (currentIndex + 1) % sequence.length;
    }

    const intervalId = setInterval(jumpSequence, 700);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="links-container">
        <h3 className="link-title"><span>Let's Connect</span>, Find Me on Social Media</h3>
        <div className="links">
          <ul>
            <li className="linkedIn">
              <a href="https://www.linkedin.com/in/adesh07/" >
                <i className="fa-brands fa-linkedin"></i>
                <span> LinkedIn</span>
              </a>
            </li>
            <li className="github">
              <a href="https://github.com/Adesh-111" >
                <i className="fa-brands fa-github"></i>
                <span> Github</span>
              </a>
            </li>
            <li className="Mail">
              <a href="mailto: adeshabinesh25@gmail.com">
                <i className="fa-solid fa-envelope"></i>
                <span> Google</span>
              </a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/adesh_abin/">
                <i className="fa-brands fa-instagram"></i>
                <span> Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Links;
