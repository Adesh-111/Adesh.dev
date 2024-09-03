import assets from "../../assets/assets";
import "./Skills.css";

function Skills() {
  const images = [
    assets.html,
    assets.css,
    assets.react,
    assets.bootstrap,
    assets.js,
    assets.jquery,
    assets.bash,
    assets.git,
    assets.github,
    assets.nodejs,
    assets.npm,
    assets.express,
    assets.postman,
    assets.postgreSQL,
    assets.python,
    assets.java,
    assets.vscode,
    assets.windows,
    assets.materialui,
    assets.vite,
  ];

  const Images = Array(100).fill(images).flat();

  return (
    <div className="skills-container">
      <marquee
        className="skills-marquee"
        behavior="scroll"
        direction="left"
        scrollamount="5"
        loop="infinite"
      >
        {Images.map((src, index) => (
          <img key={index} src={src} alt="skill" />
        ))}
      </marquee>
    </div>
  );
}

export default Skills;
