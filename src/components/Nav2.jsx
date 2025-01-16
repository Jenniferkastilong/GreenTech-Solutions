import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "./Carousel";
import logo from "../assets/GreenTech Solutions.png";
import "./css/Nav2.css";

const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="relative">
      <Carousel />
      <nav className="header-nav2 border-b">
        <div className="absolute top-0 w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 h-24" data-aos="fade-down" data-aos-duration="2000">
          <div className="flex items-center">
            <Link
              to="/"
              className={`${location.pathname === "/" ? "active" : ""}`}
            >
              <img src={logo} alt="GreenTech Logo" className="h-20 w-auto" />
            </Link>
          </div>

          <div className=" nav-links-desktop hidden sm:flex items-center space-x-6 uppercase">
            <Link
              to="/"
              className={`${location.pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${location.pathname === "/products" ? "active" : ""}`}
            >
              Products
            </Link>
            <Link
              to="/blog"
              className={`${location.pathname === "/blog" ? "active" : ""}`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`${location.pathname === "/about" ? "active" : ""}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`${location.pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </div>

          <button
            id="menu-toggle"
            className="md:hidden flex items-center px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Handphone */}
        {isMenuOpen && (
          <div className="flex flex-col space-y-2 py-4 px-4 sm:hidden">
            <Link
              to="/"
              className={`${location.pathname === "/" ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${location.pathname === "/products" ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/blog"
              className={`${location.pathname === "/blog" ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`${location.pathname === "/about" ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`${location.pathname === "/contact" ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbars;
