import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import'../css/coffeevstea.css'

export default function CoffeeVsTea() {
  return (
    <div className="coffee-vs-tea-page">
      <NavBar />
      
      <main className="coffee-vs-tea-content">
        <h1 className="coffee-vs-tea-title">Engel's Coffee vs. Tea</h1>
        <p className="coffee-vs-tea-description">
          Discover the timeless debate between coffee and tea. Which do you prefer: the rich boldness of coffee 
          or the soothing flavors of tea? Explore our selection and decide for yourself!
        </p>
        {/* Additional content comparing coffee and tea can go here */}
      </main>

      <Footer />
    </div>
  );
}
