import React, { useEffect, useState } from "react";
import products from "./Products"; 
import testimoni from "./Testimoni"; 
import loadings from "../assets/GreenTech Solution.png"; 
import "./css/Rekomen.css"; 

const Recommended = () => {
  const [carbonIntensity, setCarbonIntensity] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const calculateAverageRatings = () => {
    return testimoni.map((item) => {
      const totalRating = item.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      const averageRating = totalRating / item.reviews.length;
      return { productId: item.productId, averageRating };
    });
  };

  
  const mergeRatingsWithProducts = (ratings) => {
    return products.map((product) => {
      const productRating = ratings.find(
        (rating) => rating.productId === product.id
      );
      return { ...product, averageRating: productRating?.averageRating || 0 };
    });
  };

  
  const filterProductsByCarbon = (productsWithRatings, intensity) => {
    return productsWithRatings.filter(
      (product) => product.carbonIntensity <= intensity
    );
  };

  
  const getTopRatedProducts = (productsWithRatings) => {
    return [...productsWithRatings]
      .sort((a, b) => b.averageRating - a.averageRating)
      .slice(0, 3);
  };

  
  useEffect(() => {
    const fetchCarbonIntensity = async () => {
      const url = "https://api.carbonintensity.org.uk/intensity";
      try {
        const response = await fetch(url);
        const result = await response.json();

        if (result.data && result.data.length > 0) {
          const latestData = result.data[0];
          setCarbonIntensity(latestData.intensity.actual);
        }
      } catch (error) {
        console.error("Error fetching Carbon Intensity data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarbonIntensity();
  }, []);

  
  useEffect(() => {
    const ratings = calculateAverageRatings();
    const productsWithRatings = mergeRatingsWithProducts(ratings);

    let filteredProducts = [];
    if (carbonIntensity !== null && !isNaN(carbonIntensity)) {
      
      filteredProducts = filterProductsByCarbon(
        productsWithRatings,
        carbonIntensity
      );
    }

    
    
    const topProducts = filteredProducts.length
      ? getTopRatedProducts(filteredProducts)
      : getTopRatedProducts(productsWithRatings);

    setRecommendedProducts(topProducts);
  }, [carbonIntensity]);

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          className="w-20 m-auto opacity-70"
          src={loadings}
          alt="Loading..."
        />
      </div>
    );
  }


  return (
    <div className="mt-5">
      <div className="mb-3" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-center text-xl sm:text-3xl lg:text-5xl">
          Rekomendasi Produk
        </h1>
        {carbonIntensity ? (
          <p className="text-center text-xs sm:text-sm lg:text-base">
            Intensitas Karbon: {carbonIntensity} gCO₂/kWh
          </p>
        ) : (
          <p className="text-center text-xs sm:text-sm lg:text-base">
            Data intensitas karbon tidak tersedia.
          </p>
        )}
      </div>
      <div className="product-list grid grid-cols-1 sm:grid-cols-3 gap-2 px-2">
        {recommendedProducts.length > 0 ? (
          recommendedProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={product.image} alt={product.name} />
              <h2 className="text-base lg:text-lg font-bold">{product.name}</h2>
              <p className="text-xs sm:text-sm lg:text-base">{product.description}</p>
              <p className="text-xs sm:text-sm lg:text-base">Harga: Rp{product.price.toLocaleString()}</p>
              <p className="text-xs sm:text-sm lg:text-base">Rating: {product.averageRating.toFixed(1)} / 5</p>
            </div>
          ))
        ) : (
          <p className="text-center text-sm sm:text-base lg:text-lg col-span-3">
            Tidak ada produk yang direkomendasikan saat ini.
          </p>
        )}
      </div>
      <div className="text-center mt-3">
        <a href="/products" className="lihat">
          Lihat Semua Produk
        </a>
      </div>
    </div>
  );
};

export default Recommended;