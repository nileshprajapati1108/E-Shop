import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !description || !price || !category) {
      return toast.error("Please fill all fields");
    }

    if (!image) {
      return toast.error("Please select an image");
    }

    try {
      const formData = new FormData();

      formData.append("name", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("image", image);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/product/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      if (res.data.success) {
        toast.success("Product added successfully 🎉");

        setProductName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setImage(null);
        setImagePreview(null);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white w-full max-w-lg shadow-md rounded-lg p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Add Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full border p-2 rounded-md mt-1 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Product name"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              rows="3"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-2 rounded-md mt-1 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Product description"
            />
          </div>

          {/* Price + Category */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border p-2 rounded-md mt-1 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="₹ Price"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border p-2 rounded-md mt-1 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Category"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Product Image
            </label>

            <label className="flex justify-center items-center border-2 border-dashed rounded-md h-24 mt-1 cursor-pointer hover:border-green-500 overflow-hidden">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="preview"
                  className="h-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-sm">Select Image</span>
              )}

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImage(file);
                  setImagePreview(URL.createObjectURL(file));
                }}
                className="hidden"
              />
            </label>
          </div>

          {/* Button */}
          <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;