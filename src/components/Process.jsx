import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  return (
    <section className="process-section section-padding" id="process">
      <div className="container">
        <motion.div 
          className="section-header text-center process-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="subtitle process-subtitle">WORK PROCESS</p>
          <h2 className="title process-title">
            How We Wor<span className="process-text-overlay">ks</span>
          </h2>
          <p className="description process-desc">
            Our team is dedicated to delivering exceptional IT solutions tailored to meet<br/>
            the unique needs of each client.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
