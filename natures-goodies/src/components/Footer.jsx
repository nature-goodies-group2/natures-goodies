import React from 'react';
import '../css/footer.css'; // Link to the CSS file for footer styles

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; CopyRight | Nature's Goodies. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};
