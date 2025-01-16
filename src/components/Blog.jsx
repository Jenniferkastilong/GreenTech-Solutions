import React, { useState, useEffect } from "react";
import Navbar from "./Nav";
import artikelData from "./Artikel";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Blog.css";

function formatContent(content) {
  let formattedContent = content.replace(/\n/g, "<br />");
  formattedContent = formattedContent.replace(
    /\t/g,
    "&nbsp;&nbsp;&nbsp;&nbsp;"
  );
  return formattedContent;
}

const Blog = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArtikel, setSelectedArtikel] = useState(null);

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const handleClickArtikel = (artikel) => {
    setSelectedArtikel(artikel);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedArtikel(null);
  };

  return (
    <div>
      <Navbar />
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="absolute top-36 inset-0 flex justify-center"
      >
        <span className="teks text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl italic text-center z-10">
          Belajar Menjadi Lebih Hijau dengan GreenTech Solutions
        </span>
      </div>

      <div className="artikel-container" data-aos="fade-up" data-aos-duration="1000">
        {artikelData.map((artikel) => (
          <div
            key={artikel.id}
            className="artikel"
            onClick={() => handleClickArtikel(artikel)}
          >
            <img
              alt={artikel.title}
              src={artikel.Image}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity"
            />
            <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col justify-between h-full">
              <div className="desc">
                <p className="text-sm text-white">
                  {artikel.content
                    ? artikel.content.split("\n")[1]
                    : "Deskripsi tidak tersedia"}
                </p>
              </div>
              <h2 className="title text-xl font-bold text-white mt-auto">
                {artikel.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedArtikel && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" data-aos="zoom-out" data-aos-duration="1000">
          <div className="modal-container bg-white p-6 rounded-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-xl text-green-400"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img
              src={selectedArtikel.Image}
              alt={selectedArtikel.title}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedArtikel.title}</h2>
            <div
              className="content mt-4"
              dangerouslySetInnerHTML={{
                __html: formatContent(selectedArtikel.content),
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
