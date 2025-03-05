import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import '../css/jewerly.css'


export default function Jewelry() {
  return (
    <div className="jewelry-page">
      <NavBar />      
      <main className="jewelry-content">
        <h1 className="jewelry-title">Abigail's Jewelry</h1>
        <p className="jewelry-description">
          Discover our beautiful collection of fine jewelry crafted with precision and love.
          Find the perfect piece to express your style and elegance.
        </p>
        {/* Add more content here as needed */}
      </main>
      <Footer />
    </div>
  );
}
