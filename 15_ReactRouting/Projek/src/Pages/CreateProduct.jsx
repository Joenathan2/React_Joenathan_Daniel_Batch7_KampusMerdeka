import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductManager = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("brand_new");
  const [productPrice, setProductPrice] = useState("");
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newProduct = {
      id: Date.now().toString(), // Gunakan timestamp sebagai ID unik
      name: productName,
      category: productCategory,
      freshness: productFreshness,
      price: productPrice,
    };
    setProductList([...productList, newProduct]);
    clearForm();
  };

  const clearForm = () => {
    setProductName("");
    setProductCategory("");
    setProductFreshness("brand_new");
    setProductPrice("");
  };

  const handleView = (product) => {
    // Menggunakan navigate dengan state untuk mengirim data produk
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Create Product
        </h2>

        <p className="text-gray-700 mb-6 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi a
          dolores assumenda eveniet perspiciatis magni pariatur dolorem eos ipsa
          et illum fugiat, dolore aliquid perferendis? Similique impedit officia
          repellendus praesentium?.
        </p>

        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="product_name"
          >
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring transition duration-200"
            id="product_name"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="product_category"
          >
            Product Category
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
            id="product_category"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option value="">Choose...</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2">
            Product Freshness
          </label>
          <div className="mt-2">
            <div className="flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value="brand_new"
                name="product_freshness"
                checked={productFreshness === "brand_new"}
                onChange={(e) => setProductFreshness(e.target.value)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 transition duration-200"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Brand New
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                id="default-radio-2"
                type="radio"
                value="second_hand"
                name="product_freshness"
                checked={productFreshness === "second_hand"}
                onChange={(e) => setProductFreshness(e.target.value)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 transition duration-200"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Second Hand
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                id="default-radio-3"
                type="radio"
                value="refurbished"
                name="product_freshness"
                checked={productFreshness === "refurbished"}
                onChange={(e) => setProductFreshness(e.target.value)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 transition duration-200"
              />
              <label
                htmlFor="default-radio-3"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Refurbished
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="product_description"
          >
            Additional Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
            id="product_description"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="product_price"
          >
            Product Price
          </label>
          <div className="flex items-center">
            <span className="text-gray-700 font-medium">$</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
              id="product_price"
              type="number"
              min="0"
              step="0.01"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
        </div>

        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleSubmit}
        >
          Submit Product
        </button>

        {/* Tabel Produk */}
        <h2 className="text-2xl font-bold mt-8 mb-4 text-center text-blue-600">
          Product List
        </h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 border-b">No</th>
              <th className="py-2 border-b">Name</th>
              <th className="py-2 border-b">Category</th>
              <th className="py-2 border-b">Freshness</th>
              <th className="py-2 border-b">Price</th>
              <th className="py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index) => (
              <tr key={product.id}>
                <td className="py-2 border-b text-center">{index + 1}</td>
                <td className="py-2 border-b">{product.name}</td>
                <td className="py-2 border-b">{product.category}</td>
                <td className="py-2 border-b">{product.freshness}</td>
                <td className="py-2 border-b">${product.price}</td>
                <td className="py-2 border-b text-center">
                  <button
                    className="bg-green-500 text-white p-2 rounded"
                    onClick={() => handleView(product)}
                  >
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

export default ProductManager;
