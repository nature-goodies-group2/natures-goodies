import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import '../css/coffeevstea.css'
import { TabletProducts } from './TabletProducts';

export default function CoffeeVsTea() {
  return (
    <div className="coffee-vs-tea-page">
      <NavBar />

      <table>
        <td>
          <main className="coffee-vs-tea-content">

            <section id="coffee-vs-tea-title-container">
              <h1 className="coffee-vs-tea-title">Engel's Coffee vs. Tea</h1>
            </section>

            <section id="coffee-vs-tea-section">
              <p className="coffee-vs-tea-description">
                "We choose the flavor,
                You choose your taste!"
              </p>
            </section>
          </main>
        </td>
        <td><TabletProducts /></td>
      </table>


      <Footer />
    </div>
  );
}
