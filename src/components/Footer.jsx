import React from 'react';
import { Hexagon, Globe as Facebook, Mail as Twitter, Share2 as Linkedin, Camera as Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col about-col">
            <div className="logo footer-logo">
              <Hexagon className="logo-icon" size={28} />
              <span className="logo-text text-white">IT.Solu</span>
            </div>
            <p className="footer-desc">
              We provide the best IT solutions for your business. Discover customized solutions that cater to the financial needs of modern businesses.
            </p>
            <div className="social-links text-white">
              <Facebook size={20} />
              <Twitter size={20} />
              <Linkedin size={20} />
              <Instagram size={20} />
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Portfolio</a></li>
              <li><a href="#blog">Blog Post</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Support Center</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-col newsletter-col">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-desc">Subscribe to our newsletter to get our latest news & updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 IT.Solu agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
