import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import products from "./Products";
import testimoni from "./Testimoni";
import "./css/Card.css";

const Card = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const [filteredCategory, setFilteredCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    "Lighting",
    "Vehicles",
    "Energy",
    "Smart Home",
    "Accessories",
    "Agriculture",
    "Sustainability",
    "Technology",
    "Outdoor",
    "Green Tech",
    "Smart Farming",
  ];

  const handleViewDetailClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const getOverallRating = (reviews) => {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length || 0;
    return averageRating;
  };

  const getTestimonialsForProduct = (productId) => {
    const productTestimonials = testimoni.find(
      (t) => t.productId === productId
    );
    return productTestimonials ? productTestimonials.reviews : [];
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <span key={i} className="star full">
            ★
          </span>
        );
      } else if (rating >= i - 0.5) {
        stars.push(
          <span key={i} className="star half">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="14px"
              height="14px"
              viewBox="0 0 32 32"
              style={{ marginTop: "2px" }}
            >
              <defs>
                <linearGradient id={`grad${i}`} gradientUnits="userSpaceOnUse">
                  <stop offset="50%" stopColor="#4caf50" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>

              <path
                d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
    l11.547-1.2L16.026,0.6L20.388,10.918z"
                fill={`url(#grad${i})`}
              />

              <path
                d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
    l11.547-1.2L16.026,0.6L20.388,10.918z"
                fill="none"
                stroke="grey"
                strokeWidth="1.5"
                clipPath="inset(0 0 0 50%)"
              />
            </svg>
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star empty">
            ☆
          </span>
        );
      }
    }
    return <div className="stars-container">{stars}</div>;
  };

  const filteredProducts = filteredCategory
    ? products.filter((product) => product.category.includes(filteredCategory))
    : products;

  return (
    <div className="Card x-4 sm:px-6 lg:px-8 my-4">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="categori absolute top-28 sm:top-36 md:top-44 lg:top-48 left-0"
      >
        <div className="category-filter justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilteredCategory(category)}
              className={filteredCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
          <button onClick={() => setFilteredCategory("")}>Show All</button>
        </div>
      </div>

      <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {filteredProducts.map((product) => {
          const reviews = getTestimonialsForProduct(product.id);
          const averageRating = getOverallRating(reviews);

          return (
            <div
              className="product-card mx-auto"
              key={product.id}
              onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
              onMouseLeave={(e) => e.currentTarget.classList.remove("hovered")}
              data-aos="fade-up" data-aos-duration="1000"
            >
              <div className="pcard">
                <img src={product.image} alt={product.name} />
                <div className="my-2">
                  <p className="category">
                    {filteredCategory || product.category[0]}
                  </p>
                  <h3>
                    <b>{product.name}</b>
                  </h3>
                  {/* <p>
                  {product.description.length > 50
                    ? product.description.slice(0, 50) + "..."
                    : product.description}
                </p> */}
                  <div
                    className="view-detail"
                    onClick={() => handleViewDetailClick(product)}
                  >
                    View Detail
                  </div>
                  <p>Rp {product.price.toLocaleString()}</p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      margin: "0",
                    }}
                  >
                    <span style={{ display: "flex" }}>
                      {renderStars(averageRating)}
                    </span>
                    <span>({averageRating.toFixed(1)})</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProduct && (
        <div
          className="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-50 z-50"
          onClick={closeModal}
          data-aos="zoom-out" data-aos-duration="500"
        >
          <div
            className="modal-content relative flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-3xl lg:max-w-4xl xl:max-w-5xl hover:bg-gray-100 overflow-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
              onClick={closeModal}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="relative w-full" style={{ height: "calc(43vw)" }}>
              <img
                className="object-cover w-full h-full"
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />
            </div>

            <div className="flex flex-col w-2/3 justify-between p-4 leading-normal max-h-[75vh] overflow-y-auto">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {selectedProduct.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <strong>Price:</strong> Rp{" "}
                {selectedProduct.price.toLocaleString()}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <strong>Description:</strong> {selectedProduct.description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <strong>Category:</strong>{" "}
                {selectedProduct.category.join(", ")}
              </p>
              <h3 className="text-lg font-semibold mb-2">Testimonials:</h3>
              <ul>
                {getTestimonialsForProduct(selectedProduct.id).map(
                  (testimony, index) => (
                    <li key={index} className="mb-2">
                      <strong>{testimony.user}:</strong> {testimony.comment} (
                      {renderStars(testimony.rating)})
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
