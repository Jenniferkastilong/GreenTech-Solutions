import React, { useEffect, useState } from "react";
import products from "./Products"; // Data produk
import testimoni from "./Testimoni"; // Data testimoni
import loadings from "../assets/GreenTech Solution.png"; // Gambar loading
import "./css/Rekomen.css"; // CSS tambahan

const Recommended = () => {
  const [carbonIntensity, setCarbonIntensity] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Menghitung rata-rata rating
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

  // Menggabungkan data produk dengan rating
  const mergeRatingsWithProducts = (ratings) => {
    return products.map((product) => {
      const productRating = ratings.find(
        (rating) => rating.productId === product.id
      );
      return { ...product, averageRating: productRating?.averageRating || 0 };
    });
  };

  // Filter produk berdasarkan intensitas karbon
  const filterProductsByCarbon = (productsWithRatings, intensity) => {
    return productsWithRatings.filter(
      (product) => product.carbonIntensity <= intensity
    );
  };

  // Mendapatkan produk dengan rating tertinggi
  const getTopRatedProducts = (productsWithRatings) => {
    return [...productsWithRatings]
      .sort((a, b) => b.averageRating - a.averageRating)
      .slice(0, 3);
  };

  // Fetch data intensitas karbon dari API
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

  // Filter dan rekomendasi produk
  useEffect(() => {
    const ratings = calculateAverageRatings();
    const productsWithRatings = mergeRatingsWithProducts(ratings);

    let filteredProducts = [];
    if (carbonIntensity !== null && !isNaN(carbonIntensity)) {
      // Jika intensitas karbon ditemukan, filter berdasarkan intensitas karbon
      filteredProducts = filterProductsByCarbon(
        productsWithRatings,
        carbonIntensity
      );
    }

    // Jika hasil filter kosong (intensitas karbon tidak ditemukan atau filter tidak menghasilkan apapun),
    // gunakan produk dengan rating tertinggi
    const topProducts = filteredProducts.length
      ? getTopRatedProducts(filteredProducts)
      : getTopRatedProducts(productsWithRatings);

    setRecommendedProducts(topProducts);
  }, [carbonIntensity]);

  // Render loading state
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

  // Render komponen
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