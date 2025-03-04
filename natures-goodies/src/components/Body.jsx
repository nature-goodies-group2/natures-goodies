import React from 'react';
import '../css/body.css';
import homepage from '../img/homepage.png'; // Correct import

export const Body = () => {
  return (
    <main>
      {/* Product Section */}
      <div >
        <center><img  src={homepage} alt="Our products" /></center>        
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
  );
};
