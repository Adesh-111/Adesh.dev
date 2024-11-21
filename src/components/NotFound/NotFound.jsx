import React, { useState } from "react";
import "./NotFound.css"; 

const NotFound = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.pageX, y: event.pageY });
  };

  return (
    <div className="torch-effect" onMouseMove={handleMouseMove}>
      <div className="text">
        <h1>404</h1>
        <h2>Uh, Ohh</h2>
        <h3>Sorry we can't find what you're looking for 'cuz it's so dark in here</h3>
      </div>
      <div
        className="torch"
        style={{
          top: position.y - 100, 
          left: position.x - 100,
        }}
      ></div>
    </div>
  );
};

export default NotFound;
