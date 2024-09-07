import assets from "../../assets/assets";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Certificates from "./Certificate";
import React from "react";
import "./Certificates.css";


function AllCertificates() {
  const certData = [
    {
      name: "The Complete 2024 Web Development Bootcamp",
      image: assets.udemyCert,
      icon: assets.Udemy,
      Date: "Aug 29 2024",
      link: "https://www.udemy.com/certificate/UC-208ea9ef-8fe8-4230-abc2-bb5484a4c55c/",
    },
    {
      name: "Postman API Fundamentals Student Expert",
      image: assets.postmanCert,
      icon: assets.postman,
      Date: "Jun 7 2024",
      link: "https://badgr.com/public/assertions/0_p4h6NlScGdgju4kCF7GA?identity__email=adeshabinesh25@gmail.com",
    },
    {
      name: "Responsive Web Design",
      image: assets.freeCodeCamp,
      icon: assets.fccIcon,
      Date: "Jun 9 2024",
      link: "https://www.freecodecamp.org/certification/Adesh-D/responsive-web-design",
    },
    {
      name: "Web Development for beginners",
      image: assets.cursaCert,
      icon: assets.cursa,
      Date: "Mar 27 2024",
      link: "https://cursa.app/en/my-certificate/certb73147561952bd807878ece1ad51b310/ok",
    },
    {
      name: "Web Development for beginners",
      image: assets.ibmCertificate,
      icon: assets.ibm,
      Date: "Mar 08 2024",
      link: "https://www.credly.com/badges/5374e0c2-6b59-4fde-8e6f-c40a8c7f45f8/public_url",
    },
    {
      name: "HTML CSS Program",
      image: assets.emc,
      icon: assets.emcIcon,
      Date: "Apr 05 2024",
      link: "https://courses.errormakesclever.com/share-certificate?serialno=KSLVPPMH",
    },
    {
      name: "Google Analytics for Beginners",
      image: assets.googleAnalytics,
      icon: assets.google,
      Date: "Mar 29 2024",
      link: "https://analytics.google.com/analytics/academy/certificate/8i7kLs42QaKDSdoEFMzuGg",
    },
    {
      name: "FrontEnd Development - HTML",
      image: assets.greatLearning,
      icon: assets.greatLearningIcon,
      Date: "Mar 13 2024",
      link: "https://verify.mygreatlearning.com/verify/MCITWLLZ",
    },
    {
      name: "JavaScript (Basic)",
      image: assets.javascriptCert,
      icon: assets.hackerRank,
      Date: "Mar 31 2024",
      link: "https://www.hackerrank.com/certificates/a174b4980668",
    },
    {
      name: "Node (Basic)",
      image: assets.nodeCert,
      icon: assets.hackerRank,
      Date: "Apr 18 2024",
      link: "https://www.hackerrank.com/certificates/94c682ee6248",
    },
    {
      name: "SQL (Basic)",
      image: assets.sqlCert,
      icon: assets.hackerRank,
      Date: "May 04 2024",
      link: "https://www.hackerrank.com/certificates/996acc09f66b",
    },
    {
      name: "React (Basic)",
      image: assets.reactCert,
      icon: assets.hackerRank,
      Date: "Aug 11 2024",
      link: "https://www.hackerrank.com/certificates/32f64630b85c",
    },
    {
      name: "ChatGPT for Everyone",
      image: assets.guviCertification,
      icon: assets.guvi,
      Date: "Apr 10 2024",
      link: "https://www.guvi.in/certificate.html?id=Y33l1tW0707O72Zs14",
    },
    {
      name: "FullStack Development Workshop",
      image: assets.guviWorkshop,
      icon: assets.guvi,
      Date: "Apr 10 2024",
      link: "https://www.guvi.in/share-certificate/71Ub35I2R5z516102f",
    },
    {
      name: "Programming in Java",
      image: assets.javaCert,
      icon: assets.nptel,
      Date: "Apr 29 2024",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S105350595330378538",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="certificates" data-aos = "fade-up">
        <div className="certificates-container">
          {certData.map((cert, index) => (
            <Certificates key={index} cert={cert} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllCertificates;
