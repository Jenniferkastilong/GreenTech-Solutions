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
        {/* <h1>GreenTech Solutions</h1>
        <p>
          GreenTech Solutions adalah perusahaan yang berdedikasi sebagai pelopor
          dalam teknologi ramah lingkungan. Kami hadir untuk memberikan solusi
          inovatif yang membantu menciptakan masa depan yang lebih hijau dan
          berkelanjutan.
        </p> */}
      </div>
      <div>
        {/* <Carousel /> */}
        <Navbars />
        <div className="grid grid-cols-1 md:grid-cols-2 text-center my-5 px-4 sm:px-6 lg:px-8 gap-2">
          <WeatherComponent />
          {/* <StrapiDataComponent/> */}
          <CarbonIntensity />
        </div>
        <Recommended/>
        <Testimoni/>
      </div>
    </div>
  );
};

export default Home;
