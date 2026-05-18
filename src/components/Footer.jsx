import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, 
  ArrowUpRight, ArrowUp 
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <footer className="footer-section">
      {/* Decorative Background Elements */}
      <div className="footer-bg-decor top-left-dots">
        {/* Simple 6x4 dot grid */}
        <svg width="120" height="150" viewBox="0 0 120 150">
          <pattern id="dot-pattern-tl" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="none" stroke="#2a3f66" strokeWidth="1.5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern-tl)" />
        </svg>
      </div>

      <div className="footer-bg-decor top-right-waves">
        {/* Curved dotted arcs */}
        <svg width="250" height="150" viewBox="0 0 250 150">
          <path d="M50,-50 A100,100 0 0,1 150,50 A100,100 0 0,0 250,150" fill="none" stroke="#2a3f66" strokeWidth="2" strokeDasharray="4 8" strokeLinecap="round" />
          <path d="M20,-50 A130,130 0 0,1 150,80 A130,130 0 0,0 280,150" fill="none" stroke="#54a9df" strokeWidth="3" strokeDasharray="0 10" strokeLinecap="round" opacity="0.6"/>
          <path d="M-10,-50 A160,160 0 0,1 150,110 A160,160 0 0,0 310,150" fill="none" stroke="#2a3f66" strokeWidth="2" strokeDasharray="4 8" strokeLinecap="round" />
        </svg>
      </div>

      <div className="footer-bg-decor bottom-left-arrows">
        <svg width="80" height="20" viewBox="0 0 80 20">
          <path d="M0,0 L10,10 L0,20 Z" fill="#2a3f66" />
          <path d="M20,0 L30,10 L20,20 Z" fill="#2a3f66" />
          <path d="M40,0 L50,10 L40,20 Z" fill="#2a3f66" />
          <path d="M60,0 L70,10 L60,20 Z" fill="#54a9df" opacity="0.8" />
        </svg>
      </div>

      <div className="container footer-container">
        
        {/* Top Content Grid */}
        <motion.div 
          className="footer-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Col 1: Newsletter */}
          <motion.div className="footer-col" variants={fadeInUp}>
            <h3 className="footer-heading-large">Subscribe to Get Notified!</h3>
            <p className="footer-text">
              Subscribe to our Newsletter & Event Right Now to be<br/>Updated
            </p>
            <form className="footer-newsletter-wrapper" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter Your Email" className="footer-input" />
              <button type="submit" className="footer-submit-btn">Subscribe Now</button>
            </form>
          </motion.div>

          <div className="footer-divider hidden-mobile"></div>

          {/* Col 2: Brand & Social */}
          <motion.div className="footer-col" variants={fadeInUp}>
            <div className="footer-brand">
              <div className="footer-logo-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="#54A9DF"/>
                  <path d="M10 11H20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="20" cy="11" r="2.5" fill="white"/>
                  <path d="M15 11V24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M15 18H20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="20" cy="18" r="2.5" fill="white"/>
                </svg>
              </div>
              <span className="footer-logo-text">Tekly</span>
            </div>
            <p className="footer-text">
              Our dedicated support team is available<br/>
              24/7 to ensure smooth IT operations,<br/>
              quick issue resolution
            </p>
            <div className="footer-socials">
              <a href="#!" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#!" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#!" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#!" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 00-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.017 3.017 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </motion.div>

          <div className="footer-divider hidden-mobile"></div>

          {/* Col 3: Contact */}
          <motion.div className="footer-col" variants={fadeInUp}>
            <h4 className="footer-heading">Address Company</h4>
            <div className="footer-contact-list">
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>12 Tech Avenue,<br/>SuiteInnovation City, United<br/>States</span>
              </div>
              <div className="contact-item">
                <Phone size={16} className="contact-icon" />
                <span>Call Us : +12456978963</span>
              </div>
              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <span>Mail: tekz@gmail.com</span>
              </div>
              <div className="contact-item">
                <Clock size={16} className="contact-icon" />
                <span>Office : 8:00 AM - 7:00 PM</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Nav Bar */}
        <motion.div 
          className="footer-nav-bar"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="footer-nav-links">
            <a href="#!">Home</a>
            <a href="#!">About Us</a>
            <a href="#!">Services</a>
            <a href="#!">Blog</a>
            <a href="#!">Contact</a>
          </div>
          <button className="footer-nav-btn">
            Book Service <ArrowUpRight size={16} />
          </button>
        </motion.div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">Copyright @ 2025 Tekz. All Rights Received.</p>
          <div className="footer-bottom-links">
            <a href="#!">Privacy policy</a>
            <a href="#!">Terms of use</a>
            <a href="#!">Site map</a>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top button */}
      <motion.button 
        className="scroll-to-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, translateY: -4 }}
      >
        <ArrowUp size={20} />
      </motion.button>

    </footer>
  );
};

export default Footer;
