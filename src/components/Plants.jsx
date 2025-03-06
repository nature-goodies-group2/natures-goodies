import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import '../css/plants.css'
import umbrellaTree from '../img/umbreallaTreePlant.jpg';
import monsteraPlant from '../img/monsteraPlant.jpg';
import spiderPlant from '../img/spiderPlant.jpg';
import aloePlant from '../img/aloePlant.jpg';
import jadePlant from '../img/jadePlant.jpg'

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
        <img src={umbrellaTree} alt="Umbrella Tree Plant" />
        <p className="plant-description"> The Umbrella Tree is known for it's beauty and fast growing capabilities, it's a great plant for the beginner houseplant enthusiast as long as adequate 'bright/indirect' light is provided <br />
          
          Price = $15.99 <br />
          (10% discount for 1st time subcribers!)</p>
        <img src={monsteraPlant} alt="Monstera house Plant" />
        <p className="plant-description"> The Monstera Plant is known for it's lovely large fennestrated leaves, it's native to tropical forsests in Mexico and Panama and a great plant for beginners <br />

          Price = $25.99 <br />
          (10% discount for 1st time subcribers!)</p>
        <img src={spiderPlant} alt="Spider Plant" />
        <p className="plant-description"> The Spider Plant may sound spooky but buyer no need to beware! It's a great addition to your home and known for its air purifying qualities.  Purchase yours today! <br />

          Price = $12.99 <br />
          (10% discount for 1st time subcribers!)</p>

          
        <img src={aloePlant} alt="Aloe Plant" />
        <p className="plant-description"> The Aloe plant is known for it's many medicinal properties and for ease of care, it is drought tolerant and a great plant to add to your collection <br />
          Price = $14.99 <br />
          (10% discount for 1st time subcribers!)</p>
      
        <img src={jadePlant} alt="Jade" />
        <p className="plant-description"> It's your lucky day! In many cultures the Jade plant is known to bring good luck. It makes a great gift for friends or loved ones <br />
          Price = $18.99 <br />
          (10% discount for 1st time subcribers!)

         </p>

        
      </main>

      <Footer />
    </div>
  );
}
