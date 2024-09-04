import { useEffect } from "react";

function Links() {
  useEffect(() => {
    const links = document.querySelectorAll(".links ul li a");
    let currentIndex = 0;

    function jumpSequence() {
      links.forEach((link) => link.classList.remove("jump"));
      links[currentIndex].classList.add("jump");
      currentIndex = (currentIndex + 1) % links.length;
    }
    const intervalId = setInterval(jumpSequence, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    
      <div className="links-container">
        
        <div className="links">
          <ul>
            <li className="linkedIn">
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
                <span> LinkedIn</span>
              </a>
            </li>
            <li className="github">
              <a href="#">
                <i className="fa-brands fa-github"></i>
                <span> Github</span>
              </a>
            </li>
            <li className="Mail">
              <a href="#">
                <i className="fa-solid fa-envelope"></i>
                <span> Google</span>
              </a>
            </li>
            <li className="instagram">
              <a href="#">
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
