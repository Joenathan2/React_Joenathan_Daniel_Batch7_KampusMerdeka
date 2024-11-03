import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="bg-cover bg-center w-full h-screen flex flex-col"
      style={{
        backgroundImage: "url('src/assets/image.png')",
      }}
    >
      <nav className="bg-white bg-opacity-70 shadow w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-gray-900">Simple Header</div>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/create-product"
                className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                Home
              </Link>
              <a
                href="#"
                className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                FAQs
              </a>
              <a
                href="#"
                className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-grow text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nemo
          voluptas eaque ab distinctio, aliquam harum, tempora dolore dolor,
          natus corporis? Voluptates velit quos, deleniti commodi nemo vitae
          assumenda debitis?
        </p>
        <Link
          to="/create-product"
          className="bg-blur hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
