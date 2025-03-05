import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import '../css/perfume.css'

export default function Perfume() {
  return (
    <div className="perfume-page">
      <NavBar />
      
      <main className="perfume-content">
        <h1 className="perfume-title">Minh's Perfume</h1>
        <p className="perfume-description">
          Discover the finest fragrances with Minh's Perfume collection, offering a variety of scents 
          that elevate your presence and style.
        </p>
        {/* Additional perfume-related content can go here */}
      </main>

      <Footer />
    </div>
  );
}
