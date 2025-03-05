import React from 'react'
import {Route,Routes}  from 'react-router-dom';
import  Home  from '../Home';
import  Jewerly  from '../Jewelry';
import  Plants  from '../Plants';
import  Perfume  from '../Perfume';
import  CoffeeVsTea  from '../CoffeeVsTea';
import  AboutUs  from '../AboutUs';
import  ContactUs  from '../ContactUs';




export default function RoutersLink() {
  return (
    <div>

<Routes>
<Route path ='/' element={<Home/>} />
<Route path ='/home' element={<Home />} />
<Route path ='/jewelry' element={<Jewerly/>} />
<Route path ='/plants' element={<Plants />} />
<Route path ='/perfume' element={<Perfume />} />
<Route path ='/coffeevstea' element={<CoffeeVsTea />} />
<Route path ='/aboutus' element={<AboutUs />} />
<Route path ='/contactus' element={<ContactUs />} />
</Routes>
    </div>
  )
}
