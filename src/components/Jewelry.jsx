import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import goldNecklace from '../img/gold-necklace.png';
import diamondEarrings from '../img/diamond-earrings.png';
import silverBracelet from '../img/silver-bracelet.png';
import pearlRing from '../img/pearl-ring.png';
import '../css/jewelry.css';

export default function Jewelry() {
  const [jewelryItems] = useState([
    { id: 1, name: "Gold Necklace", price: 120, image: goldNecklace },
    { id: 2, name: "Diamond Earrings", price: 250, image: diamondEarrings },
    { id: 3, name: "Silver Bracelet", price: 90, image: silverBracelet },
    { id: 4, name: "Pearl Ring", price: 180, image: pearlRing },
  ]);

  const [cart, setCart] = useState([]);
  
  const navigate = useNavigate(); // Use navigate to programmatically redirect

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    navigate('/checkout'); // Redirect to checkout page
  };

  return (
    <div className="jewelry-page">
      <NavBar />
      <main className="jewelry-content">
        <h1 className="jewelry-title">Abigail's Jewelry</h1>
        <p className="jewelry-description">
          Discover our beautiful collection of fine jewelry crafted with precision and love.
          Find the perfect piece to express your style and elegance.
        </p>

        <div className="jewelry-grid">
          {jewelryItems.map((item) => (
            <div key={item.id} className="jewelry-item">
              <img src={item.image} alt={item.name} className="jewelry-image" />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)} className="add-to-cart">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Shopping Cart Section */}
        <div className="shopping-cart">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
              ))}
              <hr />
              <li><strong>Total: ${totalPrice}</strong></li>
              {/* Checkout button */}
              <button onClick={handleCheckout} className="checkout-button">Checkout</button>
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
