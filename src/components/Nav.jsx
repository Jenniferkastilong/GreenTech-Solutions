import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/GreenTech Solutions.png";
import "./css/Nav.css";

const Navbar = () => {
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
    <nav className="header-nav relative">
      <div className="circles">
        <ul className="circle-list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div
        className="px-4 sm:px-6 lg:px-8"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className={`${location.pathname === "/" ? "active" : ""}`}
            >
              <img
                src={logo}
                alt="GreenTech Logo"
                className="h-20 w-30 mr-2"
              />
            </Link>
          </div>

          <button
            id="menu-toggle"
            className="md:hidden flex items-center px-2 py-1 border-none rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
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

          {/* Desktop */}
          <div className="desktop-menu uppercase hidden sm:flex md:items-center md:ml-10">
            <ul className="nav-links-desktop flex space-x-6">
              <li>
                <Link
                  to="/"
                  className={`${location.pathname === "/" ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`${
                    location.pathname === "/products" ? "active" : ""
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`${
                    location.pathname === "/blog" ? "active" : ""
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Handphone */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="flex flex-col space-y-2 pb-4 md:hidden"
          >
            <ul className="nav-links-mobile flex flex-col space-y-2">
              <li>
                <Link
                  to="/"
                  className={`${location.pathname === "/" ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`${
                    location.pathname === "/products" ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`${
                    location.pathname === "/blog" ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
