import React, { useState, useEffect } from "react";
import "./weather.css";
import girl from "./assets/Rainy girl.png";
import clouds from "./assets/Clouds.png";
import Rains from "./assets/Rains.png";

function Weather() {
  const [weather, setWeather] = useState({
    date: "",
    location: "",
    temp: "",
  });

  async function getWeather(lat, lon) {
    const apiKey = "eda8d98890214bab926190059241708";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`;

    try {
      const response = await fetch(url);

      const data = await response.json();

      function formatDate(date) {
        return date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }

      setWeather({
        date: formatDate(new Date()),
        location: `${data.location.name}, ${data.location.country}`,
        temp: `${data.current.temp_c}℃`,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  function requestLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeather(lat, lon);
      });
    }
  }

  useEffect(() => {
    requestLocation();
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className="bod">
        <div className="master">
          <img className="Rains" src={Rains} alt="Rains" />

          <p className="date">{weather.date}</p>
          <p className="location">{weather.location}</p>
          <p className="temp">{weather.temp}</p>
        </div>
        <img className="girl" src={girl} alt="Rainy girl" />
        <div className="master2">
          <img className="Clouds" src={clouds} alt="Clouds" />
          <p className="day">WEDNESDAY</p>
          <p className="type">Showers</p>
        </div>
        <div className="master3">
          <div className="words">
            <button id="yesterday">
              <i className="fa-solid fa-angle-left"> </i> Yesterday
            </button>
            <pre className="today">Today •</pre>
            <button id="tomorrow">
              Tomorrow <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <div className="hours">
            <div className="o1">
              <div className="o2">
                <p className="time">12 pm</p>
                <i className="fa-solid fa-cloud-sun" id="icon"></i>
                <p className="tempr">21℃</p>
              </div>
            </div>
            <div className="o11">
              <div className="o22">
                <p className="time">2 pm</p>
                <i className="fa-solid fa-cloud-showers-heavy" id="icon"></i>
                <p className="tempr">19℃</p>
              </div>
            </div>
            <div className="o1">
              <div className="o2">
                <p className="time">4 pm</p>
                <i className="fa-solid fa-cloud-showers-heavy" id="icon"></i>
                <p className="tempr">18℃</p>
              </div>
            </div>
            <div className="o1">
              <div className="o2">
                <p className="time">6 pm</p>
                <i className="fa-solid fa-cloud-sun" id="icon"></i>
                <p className="tempr">20℃</p>
              </div>
            </div>
            <div className="o1">
              <div className="o2">
                <p className="time">8 pm</p>
                <i className="fa-solid fa-cloud-sun" id="icon"></i>
                <p className="tempr">21℃</p>
              </div>
            </div>
            <div className="o1">
              <div className="o2">
                <p className="time">10 pm</p>
                <i className="fa-solid fa-cloud-sun" id="icon"></i>
                <p className="tempr">22℃</p>
              </div>
            </div>
            <div className="o1">
              <div className="o2">
                <p className="time">12 Am</p>
                <i className="fa-solid fa-cloud-sun" id="icon"></i>
                <p className="tempr">19℃</p>
              </div>
            </div>
            <div className="o1">
              <div className="o2">
                <p className="time">2 Am</p>
                <i className="fa-solid fa-cloud-sun" id="icon"></i>
                <p className="tempr">18℃</p>
              </div>
            </div>
            <div className="o1">
              <div className="o2">
                <p className="time">12 pm</p>
                <i className="fa-solid fa-cloud-sun" id="icon"></i>
                <p className="tempr">21℃</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
