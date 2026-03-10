import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  // get products
  const getProducts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/product/all`
      );

      if (res.data.success) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to E-Shop
            </h1>

            <p className="text-gray-300 mb-6">
              Best Products. Best Prices. Fast Delivery.
            </p>

            <button className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600">
              Shop Now
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
            alt="shopping"
            className="w-[400px] mt-10 md:mt-0 rounded-lg"
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-5 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col"
            >
              <img
                src={`https://e-shop-bab7.onrender.com/uploads/${product.image}`}
                alt={product.name}
                className="rounded-md mb-3 h-[200px] w-full object-cover"
              />

              <h3 className="font-semibold text-lg truncate">{product.name}</h3>

              <p className="text-green-600 font-bold mb-3">₹{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
