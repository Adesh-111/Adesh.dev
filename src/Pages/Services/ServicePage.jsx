import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AllServices from "../../components/Services/AllServices";
import "./ServicePage.css"

function ServicePage() {
    return ( <>
    <Navbar />
    <AllServices />
    <div className="mar"></div>
    <Footer />
    </> );
}

export default ServicePage;