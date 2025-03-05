import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import '../css/plants.css'

export default function Plants() {
  return (
    <div className="plants-page">
      <NavBar />
      
      <main className="plants-content">
        <h1 className="plants-title">Meghan's Plants</h1>
        <p className="plants-description">
          Explore our collection of beautiful and healthy house plants to bring nature into your home. 
          Discover unique plants that will thrive in any environment.
        </p>
        {/* Additional plant-related content can go here */}
      </main>

      <Footer />
    </div>
  );
}
