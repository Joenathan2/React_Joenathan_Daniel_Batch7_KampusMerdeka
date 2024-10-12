import React from "react";

function Header() {
  return (
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
  );
}

export default Header;
