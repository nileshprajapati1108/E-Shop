import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const fetchCartItems = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/cart/cart`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      if (res.data.success) {
        setCartItems(res.data.cart);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch cart");
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  // Remove single item from cart
  const handleRemove = async (itemId) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/cart/remove/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        toast.success("Item removed from cart");
        fetchCartItems();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to remove item");
    }
  };

  // Clear entire cart
  const handleClearCart = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/cart/clear`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        toast.success("Cart cleared");
        fetchCartItems();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to clear cart");
    }
  };

  // Update quantity of an item
  const handleUpdateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/cart/update/${itemId}`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        fetchCartItems();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update quantity");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`http://localhost:5000/uploads/${item.product.image}`}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-medium truncate w-40">
                        {item.product.name}
                      </p>
                      <div className="flex items-center gap-2 justify-center ">
                        <button
                          className="bg-gray-200 px-2 rounded"
                          onClick={() =>
                            handleUpdateQuantity(item._id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border rounded text-center w-16">
                          {item.quantity}
                        </span>
                        <button
                          className="bg-gray-200 px-2 rounded"
                          onClick={() =>
                            handleUpdateQuantity(item._id, item.quantity + 1)
                          }
                          disabled={item.quantity >= (item.product.stock || 10)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">
                      ₹ {item.product.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    ₹ {item.product.price * item.quantity}
                  </p>

                  <button
                    className="text-red-500 text-sm mt-2"
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between mt-6 text-lg font-semibold">
              <span>Total</span>
              <span>₹ {total}</span>
            </div>

            <button onClick={()=>navigate("/address")} className="w-full mt-6 bg-green-500 text-white py-3 rounded hover:bg-green-600">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
