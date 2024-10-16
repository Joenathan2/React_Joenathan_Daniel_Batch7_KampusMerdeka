import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import './index.css';
function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-16 text-gray-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
