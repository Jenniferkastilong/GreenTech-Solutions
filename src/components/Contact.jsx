import React, { useEffect } from "react";
import Navbar from "./Nav";
import Form from "./Form";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Contact.css";

const Contact = () => {
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
        data-aos="fade-down"
        data-aos-duration="2000"
        className="absolute top-36 inset-0 flex justify-center"
      >
        <span className="teks text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl italic text-center z-10">
          Hubungi Kami untuk Informasi Lebih Lanjut
        </span>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
