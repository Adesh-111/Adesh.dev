import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./components/AppRouter/AppRouter";
import Loader from "./components/Loader/Loader";
import NoNetwork from "./components/NoNetwork/NoNetwork";
import BlobCursor from "./components/Other/BlobCursor/BlobCursor";

function Main() {
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (loading) return <Loader />;
  if (!isOnline) return <NoNetwork />;

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<>
  <BlobCursor />
  <React.StrictMode>
    <Main />
  </React.StrictMode>
  </>
);
