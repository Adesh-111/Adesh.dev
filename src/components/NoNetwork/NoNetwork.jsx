import React, { useEffect } from "react";
import "./NoNetwork.css";
import assets from "../../assets/assets";



const NoNetwork = () => {
  useEffect(() => {
    const background = document.getElementById("background");

    let clouds = [];
    const cloudCount = window.innerWidth >= 768 ? 14 : 7;

    const randomPosition = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const createClouds = (length) => {
        const cloudsImgs = {
            1: assets.c1,
            2: assets.c2,
            3: assets.c3,
            4: assets.c4,
            5: assets.c5,
          };
      for (let i = 0; i < length; i++) {
        const cloud = document.createElement("img");
        cloud.className = "Cloud";
        cloud.style.top = `${randomPosition(-10, background.offsetHeight)}px`;
        cloud.style.right = `${-randomPosition(100, 1000)}px`;
        cloud.style.width = `${randomPosition(100, 600)}px`;
        cloud.style.zIndex = randomPosition(1, 2);
        cloud.src = cloudsImgs[randomPosition(1, 5)];
        background.appendChild(cloud);
        clouds.push(cloud);
      }
    };

    const cloudAnimation = () => {
      for (let i = 0; i < clouds.length; i++) {
        clouds[i].style.left = `${clouds[i].offsetLeft - 15}px`;
        if (clouds[i].offsetLeft < -400) {
          clouds[i].remove();
          clouds.splice(i, 1);
          createClouds(1);
        }
      }
    };

    const createStars = (length) => {
      const stars = ["★", "☆", "⚝", "✩", "✮", "✵", "✹", "⭑", "🟉", "🟊", "🟌", "🟒"];
      const starColors = ["#ffffff", "#ff0000", "#ff8c00", "#ffff00", "#00ff00", "#0000ff", "#ff00ff"];

      for (let i = 0; i < length; i++) {
        const star = document.createElement("p");
        star.className = "Star";
        star.style.top = `${randomPosition(-10, background.offsetHeight)}px`;
        star.style.left = `${randomPosition(0, background.offsetWidth)}px`;
        star.style.fontSize = `${randomPosition(1, 10)}px`;
        star.style.color = starColors[randomPosition(0, starColors.length - 1)];
        star.style.textShadow = `${star.style.color} 0 0 ${randomPosition(3, 20)}px`;
        star.innerText = stars[randomPosition(0, stars.length - 1)];
        background.appendChild(star);
      }
    };

    createClouds(cloudCount);
    createStars(60);

    const interval = setInterval(cloudAnimation, 70);

    return () => {
      clearInterval(interval);
      clouds.forEach((cloud) => cloud.remove());
    };
  }, []);

  return (
    <div className="no-network">
      <section id="background" className="background">
        <svg className="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="190">
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#D8D5B2" />
            <img src="" alt="" />
          </filter>
          <path fill="#FCF7CB" d="M64 29A41.5 42 0 1 0 64 113A41.5 42 0 1 0 64 29Z" />
          <path
            fill="#D8D5B2"
            d="M64,29.5c-2.2,0-4.4,0.2-6.5,0.5c19.9,3.2,35,20.5,35,41.5c0,21-15.2,38.3-35,41.5
              c2.1,0.3,4.3,0.5,6.5,0.5c22.9,0,41.5-18.8,41.5-42C105.5,48.3,86.9,29.5,64,29.5z"
          />
          <path
            filter="url(#shadow)"
            fill="#454B54"
            d="M64,116.5c-24.6,0-44.5-20.2-44.5-45s20-45,44.5-45s44.5,20.2,44.5,45S88.6,116.5,64,116.5z 
              M64,32.5c-21.3,0-38.5,17.5-38.5,39s17.3,39,38.5,39s38.5-17.5,38.5-39S85.3,32.5,64,32.5z"
          />
          <path
            fill="#D8D5B2"
            d="M56 71.6A7.5 7.5 0 1 0 56 86.6 7.5 7.5 0 1 0 56 71.6zM61 43.5A4 4 0 1 0 61 51.5 4 4 0 1 0 61 43.5zM91 61.5A6 6 0 1 0 91 73.5 6 6 0 1 0 91 61.5z"
          />
        </svg>
      </section>
      <section className="T404">
        <h1>Network</h1>
        <h1 className="X">Un</h1>
        <h1>available</h1>
      </section>
    </div>
  );
};

export default NoNetwork;
