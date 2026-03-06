import React, { useEffect, useState } from "react";
import axios from "axios";
import {toast} from "react-hot-toast";


const AdminOrders = () => {
const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/order/all`,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setOrders(res.data.orders);
      }
      console.log(res.data.orders);
    } catch (error) {
      toast.error(error.response.data.message || "Failed to fetch orders");
    }
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Orders Management</h1>

      {/* Table Card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">

        <table className="w-full text-sm text-left">
          
          {/* Header */}
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Total</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {orders.map((order,idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4 font-medium">{order._id}</td>
                <td className="p-4">{order.user.name}</td>
                <td className="p-4">{order.totalPrice}</td>
                <td className="p-4">{new Date(order.createdAt).toLocaleString()}</td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                {/* Action */}
                <td className="p-4 text-center">
                  <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default AdminOrders;