import React, { useEffect, useState } from "react";
import loading from "../assets/GreenTech Solution.png";
import "./css/Api.css";

const CarbonIntensity = () => {
  const [data, setData] = useState(null);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.carbonintensity.org.uk/intensity";
      try {
        const response = await fetch(url);
        const result = await response.json();

        console.log(result);
        if (result.data && result.data.length > 0) {
          setData(result.data[0]);
        } else {
          console.error("Data tidak ditemukan atau struktur tidak valid.");
        }
      } catch (error) {
        console.error("Error fetching Carbon Intensity data:", error);
      } finally {
        setLoadingState(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Api" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-lg sm:text-xl lg:text-3xl">Carbon Intensity</h1>
      {loadingState ? (
        <img
          className="w-20 m-auto opacity-70"
          src={loading}
          alt="Loading..."
        />
      ) : data ? (
        <div>
          <p className="text-xs sm:text-sm lg:text-base">From: {data.from}</p>
          <p className="text-xs sm:text-sm lg:text-base">To: {data.to}</p>
          <p className="text-xs sm:text-sm lg:text-base">Intensity Forecast: {data?.intensity?.forecast || '-'} gCO₂/kWh</p>
        </div>
      ) : (
        <p>Data tidak tersedia.</p>
      )}
    </div>
  );
};

export default CarbonIntensity;