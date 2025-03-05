import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import '../css/aboutus.css'

export default function AboutUs() {
  return (
    <div className="about-us-page">
      <NavBar />
      
      <main className="about-us-content">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-description">
          Welcome to Nature's Goodies! We are passionate about offering high-quality, sustainable products 
          that bring the beauty of nature into your life. Our curated selection includes jewelry, house plants, 
          perfume, coffee, and tea, all crafted or sourced with care and love for the environment.
        </p>
        {/* Additional content about the company's mission, team, or history can go here */}
      </main>

      <Footer />
    </div>
  );
}
