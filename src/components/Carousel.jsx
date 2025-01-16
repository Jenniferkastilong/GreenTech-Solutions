import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import lamp from "../assets/lamp.jpg";
import port from "../assets/solar.jpg";
import bin from "../assets/wind.jpg";
import "./css/Carousel.css";

const images = [lamp, port, bin];

const Carousel = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-full overflow-hidden mx-auto">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="foto w-full block"
      />
      <div data-aos="fade-down" data-aos-duration="2000" className="absolute inset-0 flex items-center justify-center">
        <span className="teks text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl italic text-center z-10">
          Inovasi Hijau untuk Masa Depan Berkelanjutan
        </span>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;