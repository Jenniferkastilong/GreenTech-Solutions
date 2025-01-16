import React from "react";
import Slider from "react-slick";
import testimoni from "./Testimoni";
import "./css/Testimoni.css";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={i <= rating ? "text-yellow-500" : "text-gray-400"}
      >
        ★
      </span>
    );
  }
  return <div>{stars}</div>;
};

const TestimoniCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimoni relative p-8 mt-5">
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
      <h1
        className="text-center text-xl sm:text-3xl lg:text-5xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Testimonial
      </h1>
      <Slider {...settings}>
        {testimoni.map((product) => (
          <div
            key={product.productId}
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {product.reviews.slice(0, 1).map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs mx-auto"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
                  {review.user}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mt-2">{review.comment}</p>
                <div className="mt-3">
                  <RatingStars rating={review.rating} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimoniCarousel;
