// AboutUs.jsx

import React from 'react';
import './Aboutus.css';
import backgroundImage from '../../Assets/backimage.jpg';

const AboutUs = () => {
  return (
    <div>
      <div className='about-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='about-content'>
          <h1>About Us</h1>
          <div className="about-description">
            <p>Welcome to our website! We are dedicated to providing the best travel experiences for our customers.</p>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default AboutUs;
