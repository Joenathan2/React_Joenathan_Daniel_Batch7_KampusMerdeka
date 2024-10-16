import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold">
            Weid's Website
          </Link>
        </div>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
