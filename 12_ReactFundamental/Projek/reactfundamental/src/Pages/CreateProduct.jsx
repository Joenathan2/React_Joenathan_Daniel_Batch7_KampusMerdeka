import React from "react";
import Header from "./Components/Header";
import Footer from "../Components/Footer";

function CreateProduct() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Create Product</title>
      <script src="https://cdn.tailwindcss.com"></script>

      <Header />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Create Product
          </h2>
          <p className="text-gray-700 mb-6 text-center">
            Below is an example form built entirely with Tailwind's form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>

          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-bold mb-2"
              htmlFor="product_name"
            >
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
              id="product_name"
              type="text"
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
            >
              <option>Choose...</option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
          </div>

          <div className="flex items-center justify-center py-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreateProduct;
