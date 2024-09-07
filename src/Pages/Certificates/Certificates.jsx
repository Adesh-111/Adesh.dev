import assets from "../../assets/assets";
import Certificates from "./Certificate";

function AllCertificates() {
  const certData = [
    {
      name: "The Complete 2024 Web Development Bootcamp",
      image: assets.udemyCert,
      icon: assets.Udemy,
      Date: "Aug 29 2024",
    },
    {
      name: "Postman API Fundamentals Student Expert",
      image: assets.postmanCert,
      icon: assets.postman,
      Date: "Jun 7 2024",
    },
    {
      name: "Responsive Web Design",
      image: assets.freeCodeCamp,
      icon: assets.fccIcon,
      Date: "Jun 9 2024" 
    },{
      name: "Web Development for beginners",
      image : assets.cursaCert,
      icon: assets.cursa,
      Date: "27 March 2024"
    }
  ];

  return (
    <>
      <div className="certificates">
        <div className="certificates-container">
          <Certificates />
        </div>
      </div>
    </>
  );
}

export default AllCertificates;
