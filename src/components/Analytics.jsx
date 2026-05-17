import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Award, Target } from 'lucide-react';
import './Analytics.css';

const Analytics = () => {
  const features = [
    {
      icon: <Lightbulb size={24} strokeWidth={1.5} />,
      title: "Tailored Solutions for Every Business",
      desc: "Our digital marketing agency is dedicated to transforming online potential into tangible success"
    },
    {
      icon: <Award size={24} strokeWidth={1.5} />,
      title: "Dedicated Client Success Team",
      desc: "Our digital marketing agency is dedicated to transforming online potential into tangible success"
    },
    {
      icon: <Target size={24} strokeWidth={1.5} />,
      title: "Sustainability-Focused IT Practices",
      desc: "Our digital marketing agency is dedicated to transforming online potential into tangible success"
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="analytics-section section-padding" id="analytics">
      <div className="container analytics-container">
        
        {/* Left Content */}
        <motion.div 
          className="analytics-content"
        >
          <motion.p 
            className="subtitle analytics-subtitle" 
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            UNIQUE SERVICE FEATURES
          </motion.p>
          <motion.h2 
            className="title analytics-title" 
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Analytics Overview You've<br/>
            Always W<span className="analytics-text-overlay">anted</span>
          </motion.h2>

          <motion.div className="analytics-features-list" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {features.map((feature, idx) => (
              <motion.div className="analytics-feature-item" key={idx} variants={fadeRight}>
                <div className="analytics-feature-icon">
                  {feature.icon}
                </div>
                <div className="analytics-feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="analytics-image-wrapper"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <img src="/analytics.png" alt="Analytics Team Collaboration" className="analytics-img" />
          <div className="analytics-img-fade"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Analytics;
