import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import '../css/plants.css';
import umbrellaTree from '../img/umbreallaTreePlant.jpg';
import monsteraPlant from '../img/monsteraPlant.jpg';
import spiderPlant from '../img/spiderPlant.jpg';
import aloePlant from '../img/aloePlant.jpg';
import jadePlant from '../img/jadePlant.jpg';

export default function Plants() {
  return (
    <div className="plants-page">
      <NavBar />
      <main className="plants-content">
        <h1 className="plants-title">Meghan’s Plants</h1>
        <p className="plants-description">
          Explore our collection of beautiful and healthy house plants to bring nature into your home.
          Discover unique plants that will thrive in any environment.
        </p>
        <table className="plants-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={umbrellaTree} alt="Umbrella Tree Plant" /></td>
              <td>Umbrella Tree</td>
              <td>The Umbrella Tree is known for its beauty and fast-growing capabilities. It's a great plant for beginners, as long as adequate 'bright/indirect' light is provided.</td>
              <td>$15.99 (10% discount for first-time subscribers!)</td>
            </tr>
            <tr>
              <td><img src={monsteraPlant} alt="Monstera House Plant" /></td>
              <td>Monstera</td>
              <td>The Monstera Plant is known for its lovely large fenestrated leaves. It's native to tropical forests in Mexico and Panama and is a great plant for beginners.</td>
              <td>$25.99 (10% discount for first-time subscribers!)</td>
            </tr>
            <tr>
              <td><img src={spiderPlant} alt="Spider Plant" /></td>
              <td>Spider Plant</td>
              <td>The Spider Plant may sound spooky, but no need to beware! It's a great addition to your home and is known for its air-purifying qualities.</td>
              <td>$12.99 (10% discount for first-time subscribers!)</td>
            </tr>
            <tr>
              <td><img src={aloePlant} alt="Aloe Plant" /></td>
              <td>Aloe</td>
              <td>The Aloe plant is known for its many medicinal properties and ease of care. It is drought tolerant and a great plant to add to your collection.</td>
              <td>$14.99 (10% discount for first-time subscribers!)</td>
            </tr>
            <tr>
              <td><img src={jadePlant} alt="Jade Plant" /></td>
              <td>Jade Plant</td>
              <td>In many cultures, the Jade plant is known to bring good luck. It makes a great gift for friends or loved ones.</td>
              <td>$18.99 (10% discount for first-time subscribers!)</td>
            </tr>
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}
