import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const navigate = useNavigate();

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/product/all`,
      );

      if (res.data.success) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.log("ERROR", error);
      toast.error(error.response?.data?.message || "Failed to fetch products");
    }
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();

      formData.append("name", editProduct.name);
      formData.append("description", editProduct.description);
      formData.append("price", editProduct.price);
      formData.append("category", editProduct.category);

      if (newImage) {
        formData.append("image", newImage);
      }

      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/product/update/${editProduct._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (res.data.success) {
        toast.success("Product Updated ✅");
        setShowModal(false);
        setNewImage(null);
        fetchAllProducts();
      }
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/product/remove/${productId}`,
      );
      if (res.data.success) {
        toast.success("Product Deleted 🗑️");
        fetchAllProducts();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete product");
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Product Management
        </h2>

        <button
          onClick={() => navigate("/admin/add-product")}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          + Add Product
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-md shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b hover:bg-gray-50">
                {/* Image */}
                <td className="p-3">
                  <img
                    src={`https://e-shop-bab7.onrender.com/uploads/${product.image}`}
                    alt=""
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>

                {/* Name */}
                <td className="p-3 text-gray-700 text-medium max-w-[150px] truncate">
                  {product.name}
                </td>

                {/* Category */}
                <td className="p-3 text-gray-600 text-medium">
                  {product.category}
                </td>

                {/* Price */}
                <td className="p-3 font-semibold">₹ {product.price}</td>

                {/* Actions */}
                <td className="p-3 text-center space-x-2">
                  <button
                    onClick={() => {
                      setEditProduct(product);
                      setShowModal(true);
                    }}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white w-[420px] rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Edit Product</h2>

              <div className="space-y-3">
                {/* Image */}
                <div>
                  <label className="text-sm font-medium">Product Image</label>

                  <input
                    type="file"
                    onChange={(e) => setNewImage(e.target.files[0])}
                    className="mt-1"
                  />

                  <img
                    src={
                      newImage
                        ? URL.createObjectURL(newImage)
                        : `https://e-shop-bab7.onrender.com/uploads/${editProduct.image}`
                    }
                    className="w-20 h-20 mt-2 rounded object-cover"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="text-sm font-medium">Product Name</label>
                  <input
                    type="text"
                    value={editProduct.name}
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        name: e.target.value,
                      })
                    }
                    className="w-full border p-2 rounded mt-1"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <input
                    type="text"
                    value={editProduct.category}
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        category: e.target.value,
                      })
                    }
                    className="w-full border p-2 rounded mt-1"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="text-sm font-medium">Price</label>
                  <input
                    type="number"
                    value={editProduct.price}
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        price: e.target.value,
                      })
                    }
                    className="w-full border p-2 rounded mt-1"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <textarea
                    rows="3"
                    value={editProduct.description}
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        description: e.target.value,
                      })
                    }
                    className="w-full border p-2 rounded mt-1"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleUpdate}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                  >
                    Update Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManagement;
