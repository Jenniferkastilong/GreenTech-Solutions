import React, { useState, useEffect } from "react";
import Navbar from "./Nav";
import lamp from "../assets/greenlight.svg"
import bangunan from "../assets/bangunan.jpg"
import foto from "../assets/jennifer.jpeg"
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="absolute top-28 sm:top-36 left-0 inset-0 flex"
      >
        <span className="teks text-white text-md sm:text-lg md:text-xl lg:text-2xl italic text-center z-10">
          GreenTech Solutions adalah perusahaan yang didedikasikan untuk
          menciptakan dunia yang lebih hijau melalui inovasi teknologi. Kami
          berkomitmen untuk menawarkan solusi ramah lingkungan yang bisa
          digunakan oleh semua orang, dari individu hingga perusahaan besar.
          Halaman ini memberikan wawasan tentang siapa kami, visi, misi, serta
          nilai-nilai yang kami junjung tinggi
        </span>
      </div>
      <img src={lamp} alt="GreenTech" className="absolute" data-aos="fade-dowm"
        data-aos-duration="1000"/>
      <div className="my-5 mx-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:max-w-4xl mx-auto mb-5">
          <h1 className="cerita text-center sm:text-end sm:max-w-sm text-3xl sm:text-4xl lg:text-5xl font-bold" data-aos="fade-right"
          data-aos-duration="1000">
            Cerita Perusahaan
          </h1>
          <p data-aos="fade-left"
          data-aos-duration="1000">
            GreenTech Solutions dimulai sebagai sebuah ide untuk mengatasi
            tantangan besar yang dihadapi dunia dalam hal keberlanjutan
            lingkungan. Kami percaya bahwa setiap orang dapat memainkan peran
            penting dalam melindungi planet kita, dan teknologi adalah kunci
            untuk perubahan tersebut
          </p>
        </div>
        <div className="mb-5" data-aos="fade-up"
          data-aos-duration="1000">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Visi</h1>
          <p className="text-center mb-2">
            <i className="text-xl">Menciptakan dunia yang lebih hijau melalui inovasi teknologi</i>
          </p>
          <div>
            <p className="visi mx-auto max-w-2xl">
              Kami berkomitmen untuk menyediakan solusi teknologi yang ramah
              lingkungan, mengurangi ketergantungan pada sumber daya alam yang
              terbatas, dan mempercepat transisi menuju kehidupan yang lebih
              berkelanjutan
            </p>
          </div>
        </div>
        <div className="mb-5">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" data-aos="fade-up"
          data-aos-duration="1000">Misi</h1>
          <div className="misi-grid grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="Grid" data-aos="fade-up"
          data-aos-duration="1000">
              <i class="fa-brands fa-stack-overflow"></i>
              <p className="mt-2 text-xs sm:text-sm lg:text-base">
                Mengembangkan produk ramah lingkungan yang efisien dan
                terjangkau
              </p>
            </div>
            <div className="Grid" data-aos="fade-up"
          data-aos-duration="1000">
              <i class="fa-solid fa-signal"></i>
              <p className="mt-2 text-xs sm:text-sm lg:text-base">
                Meningkatkan kesadaran tentang pentingnya gaya hidup hijau dan
                penggunaan energi terbarukan
              </p>
            </div>
            <div className="Grid" data-aos="fade-up"
          data-aos-duration="1000">
              <i class="fa-regular fa-lightbulb"></i>
              <p className="mt-2 text-xs sm:text-sm lg:text-base">
                Berinovasi dalam setiap aspek kehidupan untuk menciptakan
                perubahan positif bagi planet kita
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" data-aos="fade-up"
          data-aos-duration="1000">
            Nilai-Nilai Inti
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="nilai" data-aos="fade-up"
          data-aos-duration="1000">
              <h3 className="text-center font-bold mb-2 text-base sm:text-lg lg:text-xl">Inovasi</h3>
              <p className="text-xs sm:text-sm lg:text-base">
                Kami berusaha untuk selalu menemukan cara-cara baru dan lebih
                baik dalam mengatasi masalah lingkungan
              </p>
            </div>
            <div className="nilai" data-aos="fade-up"
          data-aos-duration="1000">
              <h3 className="text-center font-bold mb-2 text-base sm:text-lg lg:text-xl">Keberlanjutan</h3>
              <p className="text-xs sm:text-sm lg:text-base">
                Kami percaya bahwa masa depan hanya bisa dijamin jika kita
                menjaga lingkungan dan menggunakan sumber daya dengan bijak
              </p>
            </div>
            <div className="nilai" data-aos="fade-up"
          data-aos-duration="1000">
              <h3 className="text-center font-bold mb-2 text-base sm:text-lg lg:text-xl">Komunitas</h3>
              <p className="text-xs sm:text-sm lg:text-base">
                Kami mendukung kolaborasi dan kebersamaan dalam mencapai tujuan
                yang lebih besar
              </p>
            </div>
          </div>
        </div>
        <div className="creator text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" data-aos="fade-up"
          data-aos-duration="1000">Creator</h1>
            <img src={foto} alt="Jennifer Kastilong" data-aos="zoom-in"
          data-aos-duration="1000"/>
            <h2 className="mt-2 font-bold text-base sm:text-lg lg:text-xl" data-aos="fade-up"
          data-aos-duration="1000">Jennifer M D Kastilong</h2>
            <p className="text-xs sm:text-sm lg:text-base" data-aos="fade-up"
          data-aos-duration="1000">UI/UX Designer & Developer</p>
            <a
              href="https://www.instagram.com/jenniferkastilong/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="mr-2 fa-brands fa-instagram"></i>
            Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default About;
