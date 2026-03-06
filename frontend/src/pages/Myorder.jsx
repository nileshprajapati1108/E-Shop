import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const Myorder = () => {
  const navigate = useNavigate();
  const [userOrder, setUserOrder] = useState([]);

  const getMyOrders = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/order/my-orders`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      console.log("Full Response:", res); // pura axios response
      console.log("Response Data:", res.data); // backend data
      console.log("Orders:", res.data.orders);

      if (res.data.success) {
        setUserOrder(res.data.orders || []);
      } else {
        toast.error("Failed to fetch orders");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while fetching orders",
      );
    }
  };

  useEffect(() => {
    getMyOrders();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      {userOrder.length === 0 ? (
        <p className="text-gray-500 text-xl">No Orders Found</p>
      ) : (
        <div className="space-y-6">
          {userOrder.map((order) => (
            <div key={order._id} className="border rounded-xl shadow-md p-5">
              {/* ORDER HEADER */}

              <div className="flex justify-between mb-4">
                <div>
                  <p className="font-semibold">
                    Order ID :
                    <span className="text-gray-500 ml-2">{order._id}</span>
                  </p>

                  <p className="text-gray-500 text-sm">
                    Date : {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <span
                    className={`px-3 py-1 text-white rounded-lg text-sm
                    ${
                      order.status === "delivered"
                        ? "bg-green-500"
                        : order.status === "cancelled"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              {/* ADDRESS */}

              <div className="bg-gray-50 p-3 rounded mb-4">
                <p className="font-medium">{order.address?.fullName}</p>

                <p className="text-sm text-gray-600">
                  {order.address?.street}, {order.address?.city}
                </p>

                <p className="text-sm text-gray-600">
                  {order.address?.state} - {order.address?.zipCode}
                </p>

                <p className="text-sm text-gray-600">{order.address?.phone}</p>
              </div>

              {/* PRODUCTS */}

              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        onClick={() =>
                          navigate(`/products/${item.product?._id}`)
                        }
                        className="cursor-pointer"
                      >
                        <img
                          src={`http://localhost:5000/uploads/${item.product?.image}`}
                          alt={item.product?.name}
                          className="w-16 h-20 object-cover rounded-lg"
                        />
                      </div>

                      <div>
                        <p className="font-medium">{item.product?.name}</p>

                        <p className="text-sm text-gray-500">
                          ₹{item.product?.price} × {item.quantity}
                        </p>
                      </div>
                    </div>

                    <p className="font-semibold">
                      ₹{item.product?.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              {/* TOTAL */}

              <div className="flex justify-end mt-4">
                <p className="text-lg font-bold">Total : ₹{order.totalPrice}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Myorder;
