import React, { useState } from "react";
import Alert from "./Alert";
import "./css/Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Nama harus diisi.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email harus diisi.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Pesan harus diisi.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form is being submitted...");
    if (validateForm()) {
      setShowAlert(true);
      console.log("Form Valid! Show Alert");
      console.log("Form Submitted:", formData);

     
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setShowAlert(false);
      console.log("Form Invalid! Hide Alert");
    }
  };

  return (
    <div className="contact-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="contact-form" data-aos="fade-right" data-aos-duration="1000">
          <form
            className="Form p-3 sm:p-5 rounded shadow"
            onSubmit={handleSubmit}
          >
            <fieldset className="Form-dot border-4 border-dotted p-2 sm:p-5">
              <legend className="px-2 italic mx-2">Formulir Kontak</legend>

              <label
                className="block text-xs font-bold after:content-['*'] after:text-red-400"
                htmlFor="name"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mb-2 mt-1 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Masukkan nama Anda"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}

              <label
                className="block text-xs font-bold after:content-['*'] after:text-red-400"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-2 mt-1 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Masukkan email Anda"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}

              <label
                className="block text-xs font-bold after:content-['*'] after:text-red-400"
                htmlFor="message"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 mb-2 mt-1 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tulis pesan Anda"
                rows="4"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message}</p>
              )}

              <button
                type="submit"
                className="kirim mt-4 text-sm md:text-lg rounded text-white px-4 py-2"
              >
                Kirim Formulir
              </button>
            </fieldset>
          </form>
        </div>

        <div className="contact-info" data-aos="fade-left" data-aos-duration="1000">
          <h2>Informasi Kontak</h2>
          <div className="info mb-3 flex gap-3">
            <div>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <h3 className="text-xl">Email</h3>
              <p>info@greentech.com</p>
            </div>
          </div>
          <div className="info mb-3 flex gap-3">
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h3 className="text-xl">Telepon</h3>
              <p>0812-3456-7890</p>
            </div>
          </div>
          <div className="info flex gap-3">
            <div>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <h3 className="text-xl">Alamat</h3>
              <p>
                Jl. Scientia Boulevard, Gading Serpong, Kel. Curug Sangereng,
                Kec. Kelapa Dua, Kab. Tangerang, Prop. Banten 15810, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-map" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-center">Lokasi Kami</h2>
        <iframe
          title="GreenTech Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.05312203562!2d106.61572797515029!3d-6.256732661257988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb56b25975f9%3A0x50c7d605ba8542f5!2sUniversitas%20Multimedia%20Nusantara!5e0!3m2!1sid!2sid!4v1736846897007!5m2!1sid!2sid"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {showAlert && (
        <Alert
          title="Berhasil!"
          message="Formulir berhasil dikirim."
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default Form;
