import assets from "../../assets/assets";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="navbar">
          <img src={assets.profile} alt="" />
          {/* <a href="#"><img src={assets.profile} alt="" /></a> */}
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#Home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#About">About</a>
            </li>
            <li className="nav-item">
              <a href="#Project">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#Contact">Contact</a>
            </li>
            <li className="nav-item">
              <a href="#" className="more">
                More🔻
              </a>
              <ul className="dropdown">
                <li>
                  <a href="">Certificates</a>
                </li>
                <li>
                  <a href="">Resume</a>
                </li>
                <li>
                  <a href="">Story</a>
                </li>
                <li>
                  <a href="">Links</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
