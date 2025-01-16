import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="px-4 sm:px-6 lg:px-8 lg:pt-8 pb-3 text-sm lg:text-base xl:text-base">
        <div className="footer-g grid grid-cols-1 sm:grid-cols-3 gap-8 pb-3">
          <div className="footer-gt">
            <h4 className="font-semibold mb-4">GreenTech</h4>
            <a href="/" className="px-1 pt-1 font-medium">Home</a><br />
            <a href="/products" className="px-1 pt-1 font-medium">Products</a><br />
            <a href="/blog" className="px-1 pt-1 font-medium">Blog</a><br />
            <a href="/about" className="px-1 pt-1 font-medium">About Us</a><br />
            <a href="/contact" className="px-1 pt-1 font-medium">Contact</a><br />
          </div>

          <div className="footer-sosial">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <a
              href="https://www.instagram.com/universitasmultimedianusantara/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="mr-2 fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://web.facebook.com/search/top?q=universitas%20multimedia%20nusantara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="mr-2 fa-brands fa-facebook"></i>
            </a>
            <a
              href="www.youtube.com/@UniversitasMultimediaNusantara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="mr-2 fa-brands fa-youtube"></i>
            </a>
          </div>

          <div className="footer-loc flex items-center space-x-4">
            <i className="fa-solid fa-location-dot"></i>
            <p>Jl. Scientia Boulevard, Gading Serpong, Kel. Curug Sangereng, Kec. Kelapa Dua, Kab. Tangerang,
            Prop. Banten 15810, Indonesia</p>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.05312203562!2d106.61572797515029!3d-6.256732661257988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb56b25975f9%3A0x50c7d605ba8542f5!2sUniversitas%20Multimedia%20Nusantara!5e0!3m2!1sid!2sid!4v1736846897007!5m2!1sid!2sid" width="300" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>

        <p className="cp mt-3 text-center">&copy; 2025 GreenTech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
