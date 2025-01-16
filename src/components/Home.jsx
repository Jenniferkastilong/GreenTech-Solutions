import React from "react";
import Carousel from "./Carousel";
import Navbars from "./Nav2";
import WeatherComponent from "./Weather";
import CarbonIntensity from "./Carbon";
import Recommended from "./Rekomen";
import Testimoni from "./Testimoni.jsx";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="mb-5">
      <div className="max-w-7xl w-auto px-4 sm:px-6 lg:px-8">
      </div>
      <div>
        <Navbars />
        <div className="grid grid-cols-1 md:grid-cols-2 text-center my-5 px-4 sm:px-6 lg:px-8 gap-2">
          <WeatherComponent />
          <CarbonIntensity />
        </div>
        <Recommended/>
        <Testimoni/>
      </div>
    </div>
  );
};

export default Home;
