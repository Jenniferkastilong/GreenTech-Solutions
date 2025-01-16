import React from "react";
import Navbar from "./Nav";
import Card from "./Card";
import "./css/Products.css";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="absolute top-24 inset-0 flex justify-center"
      >
        <span className="teks text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl italic text-center z-10">
          Solusi Ramah Lingkungan untuk Semua Kebutuhan Anda
        </span>
      </div>
      <Card />
    </div>
  );
};

export default Products;
