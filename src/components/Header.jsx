import React, { useState } from 'react';
import { Hexagon, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <div className="logo-icon-wrapper">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#54A9DF"/>
              <path d="M10 11H20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="20" cy="11" r="2.5" fill="white"/>
              <path d="M15 11V24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path d="M15 18H20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="20" cy="18" r="2.5" fill="white"/>
            </svg>
          </div>
          <span className="logo-text">Tekly</span>
        </div>

        {/* Desktop nav */}
        <nav className="nav-links">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#projects" className="nav-link">Portfolio</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="header-right">
          <button className="btn btn-primary">Get Started</button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#home"     className="mobile-link" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about"    className="mobile-link" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#services" className="mobile-link" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#projects" className="mobile-link" onClick={() => setMenuOpen(false)}>Portfolio</a>
        <a href="#blog"     className="mobile-link" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="#contact"  className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</a>
        <button className="btn btn-primary mobile-cta">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
