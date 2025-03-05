import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import '../css/contactus.css'
export default function ContactUs() {
  return (
    <div className="contact-us-page">
      <NavBar />
      
      <main className="contact-us-content">
        <h1 className="contact-us-title">Contact Us</h1>
        <p className="contact-us-description">
          We'd love to hear from you! Whether you have questions, feedback, or just want to chat, feel free to reach out. 
          Our team is always happy to assist you.
        </p>
        {/* Add contact form or contact details here */}
      </main>

      <Footer />
    </div>
  );
}
