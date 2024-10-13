import React, { useState } from "react";

function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    setProductName(value);

    if (value.length > 10 && value.length <= 25) {
      setErrorMessage("Product Name should not exceed 10 characters.");
    } else if (value.length > 25) {
      setErrorMessage("Product Name must not exceed 25 characters.");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = () => {
    if (productName === "") {
      alert("Please enter a valid product name.");
    } else if (productName.length > 25) {
      alert("Product Name must not exceed 25 characters.");
    } else {
      console.log("Product Created:", productName);
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Create Product</title>
      <script src="https://cdn.tailwindcss.com"></script>

      <nav className="bg-white shadow w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-blue-600">Simple Header</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-blue-600 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-blue-600 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                Features
              </a>
              <a
                href="#"
                className="text-blue-600 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-blue-600 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                FAQs
              </a>
              <a
                href="#"
                className="text-blue-600 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Create Product
          </h2>
          <p className="text-gray-700 mb-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi a
            dolores assumenda eveniet perspiciatis magni pariatur dolorem eos
            ipsa et illum fugiat, dolore aliquid perferendis? Similique impedit
            officia repellendus praesentium?.
          </p>

          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-bold mb-2"
              htmlFor="product_name"
            >
              Product Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring transition duration-200 ${
                errorMessage ? "border-red-500" : ""
              }`}
              id="product_name"
              type="text"
              value={productName}
              onChange={handleProductNameChange}
              placeholder="Enter product name"
            />
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
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
            >
              <option>Choose...</option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-bold mb-2"
              htmlFor="product_image"
            >
              Image of Product
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
              id="product_image"
              type="file"
            />
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
              />
            </div>
          </div>

          <div className="flex items-center justify-center py-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
              type="button"
              onClick={handleSubmit}
            >
              Create Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
