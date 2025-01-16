import { useEffect, useState } from "react";
import loading from "../assets/GreenTech Solution.png";
import "./css/Api.css";

function WeatherComponent() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "fd84666b4484940adf399922a1224658";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (err) => {
          console.error("Error getting location:", err);
          setError("Gagal mendapatkan lokasi pengguna.");
        }
      );
    } else {
      setError("Geolocation tidak didukung di browser ini.");
    }
  }, []);

  useEffect(() => {
    if (location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((err) => {
          console.error("Error fetching weather data:", err);
          setError("Gagal mengambil data cuaca.");
        });
    }
  }, [location, API_KEY]);

  return (
    <div className="Api" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-lg sm:text-xl lg:text-3xl">Cuaca</h1>
      {error ? (
        <p>{error}</p>
      ) : weather ? (
        <div>
          <h2 className="text-md md:text-xl">{weather.name}</h2>
          <p className="text-xs sm:text-sm lg:text-base">{weather.weather[0].description}</p>
          <p className="text-xs sm:text-sm lg:text-base">Suhu: {weather.main.temp}°C</p>
        </div>
      ) : (
        <img className="w-20 m-auto opacity-70" src={loading} alt="Loading..." />
      )}
    </div>
  );
}

export default WeatherComponent;

