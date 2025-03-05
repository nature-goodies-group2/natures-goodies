import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import '../css/home.css';
import homepage from '../img/homepage.png';
import Login from './Login.jsx';
import Register from './Register.jsx';
export default function Home() { // Changed "home" to "Home"
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <div>
          <Login />
          <h3>New here?</h3>
          <Register />
        </div>
        <div >
          <center><img src={homepage} alt="Our products" /></center>
        </div>
        <section className="product-section">
          <h2>Our Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <h3>Jewelry</h3>
              <p>Elegant and eco-friendly jewelry pieces.</p>
              <button>Explore Jewelry</button>
            </div>
            <div className="product-card">
              <h3>House Plants</h3>
              <p>Bring nature into your home with our beautiful plants.</p>
              <button>Explore Plants</button>
            </div>
            <div className="product-card">
              <h3>Perfume</h3>
              <p>Fragrances inspired by the beauty of nature.</p>
              <button>Explore Perfume</button>
            </div>
            <div className="product-card">
              <h3>Coffee vs. Tea</h3>
              <p>Delicious blends to match your mood.</p>
              <button>Explore Coffee & Tea</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
