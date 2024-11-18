import { Triangle } from "react-loader-spinner";
import "./Loader.css"

function Loader() {
    return (
        <div className="loader">
        <Triangle
            visible={true}
            height="300"
            width="300"
            color="orange"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
        /></div>
    );
}

export default Loader;
