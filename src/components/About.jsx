import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-content">
            <p className="about-subtitle">About Us</p>
            <h2 className="about-title">
              Our mission is to look after the financial best interests with atom2025
            </h2>
            <p className="about-text">
              We provide cutting-edge IT solutions designed to help modern businesses thrive. From digital transformation to software development, our experienced team delivers results that matter.
            </p>
            <button className="btn btn-outline-white">Discover More</button>
          </div>
          <div className="about-image">
            <img src="/about.png" alt="IT Team Collaboration" className="about-img" />
            <div className="play-button-overlay">
              <Play size={20} fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
