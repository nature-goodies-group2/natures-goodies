import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import perfume1 from '../img/perfume1.png';
import perfume2 from '../img/pefume2.png';
import perfume3 from '../img/perfume3.png';
import perfume4 from '../img/perfume4.png';
import perfume5 from '../img/pefume5.png';
import '../css/perfume.css';

export default function Perfume() {
  const [perfumeItems] = useState([
    { id: 1, name: "PureEssence", type: "perfume", description: "A delicate bouquet of fresh roses with hints of jasmine.", price: 49.99, image: perfume1 },
    { id: 2, name: "NatureScents", type: "perfume", description: "A zesty burst of bergamot and lemon, like a summer day.", price: 64.99, image: perfume2 },
    { id: 3, name: "GreenFragrance", type: "perfume", description: "A fresh, vibrant scent like freshly cut grass with a hint of green tea.", price: 74.99, image: perfume3 },
    { id: 4, name: "OrganicFactory", type: "perfume", description: "A soft, velvety scent reminiscent of baby powder with a hint of iris.", price: 89.99, image: perfume4 },
    { id: 5, name: "EcoPerfumes", type: "perfume", description: "A luxurious, opulent scent with layers of amber and patchouli.", price: 79.99, image: perfume5 }
  ]);

  return (
    <div className="perfume-page">
      <NavBar />

      <main className="perfume-content">
        <h1 className="perfume-title">Minh's Perfume</h1>
        <p className="perfume-description">
          Discover the finest fragrances with Minh's Perfume collection, offering a variety of scents 
          that elevate your presence and style.
        </p>

        <table className="perfume-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {perfumeItems.map(perfume => (
              <tr key={perfume.id}>
                <td>{perfume.name}</td>
                <td>{perfume.description}</td>
                <td>${perfume.price}</td>
                <td><img src={perfume.image} alt={perfume.name} className="perfume-img" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <Footer />
    </div>
  );
}
