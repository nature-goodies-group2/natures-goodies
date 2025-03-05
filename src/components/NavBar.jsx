import React from 'react';
import '../css/navbar.css'
import { Link } from 'react-router-dom';
export const NavBar = () => {
  return (
    <header>
      <h1>Nature's Goodies🌱</h1>
      <nav id="nav">
        <ul>
          <li><Link to="/">Home</Link></li>

          <li><Link to="/jewelry">Jewelry</Link></li>

          <li><Link to="/plants">Plants</Link></li>

          <li><Link to="/perfume">Perfume</Link></li>

          <li><Link to="/coffeevstea">Coffee Vs. Tea</Link></li>

          <li><Link to="/aboutus">About Us</Link></li>

          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};
