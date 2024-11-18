import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./components/AppRouter/AppRouter";
import Loader from "./components/Loader/Loader";


function Main() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000); 
    }, []);

    return loading ? <Loader /> : <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
