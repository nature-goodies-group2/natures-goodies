import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Jewelry from '../Jewelry';
import Plants from '../Plants';
import Perfume from '../Perfume';
import CoffeeVsTea from '../CoffeeVsTea';
import AboutUs from '../AboutUs';
import ContactUs from '../ContactUs';
import Register from '../Register';  // New import
import Login from '../Login';        // New import
import CheckOut from '../CheckOut';


export default function RoutersLink() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/coffeevstea" element={<CoffeeVsTea />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />  {/* New route */}
        <Route path="/login" element={<Login />} />        {/* New route */}
        <Route path="/checkout" element={<CheckOut />} /> 
      </Routes>
    </div>
  );
}
