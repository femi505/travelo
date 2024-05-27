import React from 'react';
import './Footer.css'; // Adjust the import based on your folder structure

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Travelo. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://policies.google.com/terms?hl=en-US">Terms of Service</a>
          <a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
