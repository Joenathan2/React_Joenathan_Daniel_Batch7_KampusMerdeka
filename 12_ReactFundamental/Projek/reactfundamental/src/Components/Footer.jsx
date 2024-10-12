// Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-5xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Simple Footer</p>
      </div>
    </footer>
  );
}

export default Footer;
