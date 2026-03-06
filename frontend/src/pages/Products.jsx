import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Products = () => {

  const [products, setProducts] = useState([]);

 
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/product/all`
      );

      if (res.data.success) {
        setProducts(res.data.products);
      }

    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch products");
    }
  };

  const addToCart = async(product) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/cart/add`,
        { productId: product._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        toast.success("Product added to cart");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add to cart");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">
        Our Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((product) => (

          <div
            key={product._id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >

            {/* Image */}
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.name}
              className="w-full h-40 object-contain rounded-lg bg-gray-100"
            />

            {/* Name */}
            <h3 className="text-sm font-semibold mt-3 line-clamp-1">
              {product.name}
            </h3>

            {/* Category */}
            <p className="text-gray-500 text-xs">
              {product.category}
            </p>

            {/* Price */}
            <p className="text-lg font-bold mt-1 text-green-600">
              ₹ {product.price}
            </p>

            {/* Button */}
            <button
              className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Products;