import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

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

  // Function to add product to cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);
    let updatedCart;

    if (exist) {
      updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

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

              <button
                onClick={() => addToCart(product)}
                className="mt-auto w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-5 right-5 bg-white p-4 rounded-lg shadow-lg">
        <h4 className="font-bold mb-2">Cart ({cart.length})</h4>
        <ul>
          {cart.map((item) => (
            <li key={item._id} className="text-sm">
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
