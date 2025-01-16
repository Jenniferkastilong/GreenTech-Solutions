import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products.jsx";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;