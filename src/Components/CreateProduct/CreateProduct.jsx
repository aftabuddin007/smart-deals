import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    condition: "Brand New",
    usageTime: "",
    productImage: "",
    sellerName: "",
    sellerEmail: "",
    sellerContact: "",
    sellerImage: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const productImage = e.target.productImage.value;
    const maxPrice = e.target.maxPrice.value;
    const minPrice = e.target.minPrice.value;
    console.log(productImage,title,minPrice,maxPrice)
    toast.success("Product Created Successfully!");
    const newProduct  = {productImage,title,minPrice,maxPrice}
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-2xl p-8 border border-gray-200">
        <a href="#" className="text-sm text-gray-500 mb-4 block">
          ← Back To Products
        </a>
        <h1 className="text-3xl font-semibold text-center mb-8">
          Create <span className="text-purple-600">A Product</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              name="title"
              type="text"
              placeholder="e.g. Yamaha Fz Guitar for Sale"
              className="border rounded-lg p-2 w-full"
              onChange={handleChange}
            />
            <select
              name="category"
              className="border rounded-lg p-2 w-full"
              onChange={handleChange}
            >
              <option value="">Select a Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Instruments">Instruments</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="minPrice"
              type="number"
              placeholder="Min Price you want to Sale ($)"
              className="border rounded-lg p-2 w-full"
              onChange={handleChange}
            />
            <input
              name="maxPrice"
              type="number"
              placeholder="Max Price you want to Sale ($)"
              className="border rounded-lg p-2 w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <p className="font-medium text-sm mb-1">Product Condition</p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="condition"
                  value="Brand New"
                  checked={formData.condition === "Brand New"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Brand New
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="condition"
                  value="Used"
                  checked={formData.condition === "Used"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Used
              </label>
            </div>
          </div>

          <input
            name="usageTime"
            type="text"
            placeholder="e.g. 1 year 3 months"
            className="border rounded-lg p-2 w-full"
            onChange={handleChange}
          />

          <input
            name="productImage"
            type="text"
            placeholder="Your Product Image URL"
            className="border rounded-lg p-2 w-full"
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="sellerName"
              type="text"
              placeholder="e.g. Artisan Roasters"
              className="border rounded-lg p-2 w-full"
              onChange={handleChange}
            />
            <input
              name="sellerEmail"
              type="email"
              placeholder="e.g. seller@email.com"
              className="border rounded-lg p-2 w-full"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="sellerContact"
              type="text"
              placeholder="e.g. +1-555-1234"
              className="border rounded-lg p-2 w-full"
              onChange={handleChange}
            />
            <input
              name="sellerImage"
              type="url"
              placeholder="Seller Image URL"
              className="border rounded-lg p-2 w-full"
              onChange={handleChange}
            />
          </div>

          <input
            name="location"
            type="text"
            placeholder="City, Country"
            className="border rounded-lg p-2 w-full"
            onChange={handleChange}
          />

          <textarea
            name="description"
            rows="3"
            placeholder="Simple Description about your Product"
            className="border rounded-lg p-2 w-full"
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Create A Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
