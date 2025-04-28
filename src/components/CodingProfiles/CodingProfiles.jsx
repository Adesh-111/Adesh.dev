import "./CodingProfiles.css";

function CodingProfiles() {
  return (
    <>
      <div className="coding-profiles">
        <h2><span>Programmer</span> Footprint</h2>
        <div className="coding-profile-cards">
          <div className="coding-profile-card">
            <a href="https://leetcode.com/u/adeshabin/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://leetcard.jacoblin.cool/adeshabin?ext=heatmap"
                alt="LeetCode Profile"
              />
            </a>
          </div>
          <div className="coding-profile-card">
            <a href="https://www.geeksforgeeks.org/user/adeshabin/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://gfgstatscard.vercel.app/adeshabin"
                alt="GeeksforGeeks Profile"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodingProfiles;
