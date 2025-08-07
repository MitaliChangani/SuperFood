import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from './logo.png'; // Replace with actual logo path

const Footer = () => {
  return (
    <footer className="superfood-footer">
      <div className="footer-top">
        <div className="footer-column footer-brand">
          <img src={logo} alt="Superfood Logo" className="footer-logo" />
          <p className="footer-description">
            Your one-stop shop for wholesome meals, fresh groceries, and healthy snacks. Eat clean, live well with Superfood!
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Explore</h4>
          <ul>
            <li><a href="#">Meals</a></li>
            <li><a href="#">Snacks</a></li>
            <li><a href="#">Groceries</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Customer Service</h4>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Superfood. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
