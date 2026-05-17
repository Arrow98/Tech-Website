import React from 'react';
import { motion } from 'framer-motion';
import { Star, ClipboardEdit, Rocket } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "350",
      icon: <Star size={24} strokeWidth={2} />,
      features: [
        "24/7 (Help Desk & Remote Assistance)",
        "Network Monitoring & Security Updates",
        "Cloud Storage (Up to 100GB)",
        "Software Installation & Maintenance",
        "Monthly System Health Reports"
      ]
    },
    {
      name: "Professional Plan",
      price: "650",
      icon: <ClipboardEdit size={24} strokeWidth={2} />,
      features: [
        "24/7 (Help Desk & Remote Assistance)",
        "Network Monitoring & Security Updates",
        "Cloud Storage (Up to 100GB)",
        "Software Installation & Maintenance",
        "Monthly System Health Reports"
      ]
    },
    {
      name: "Enterprise Plan",
      price: "950",
      icon: <Rocket size={24} strokeWidth={2} />,
      features: [
        "24/7 (Help Desk & Remote Assistance)",
        "Network Monitoring & Security Updates",
        "Cloud Storage (Up to 100GB)",
        "Software Installation & Maintenance",
        "Monthly System Health Reports"
      ]
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Generate radii for the dotted circle pattern with more density and higher visibility
  const patternRadii = Array.from({ length: 24 }, (_, i) => 30 + i * 36);

  return (
    <section className="pricing-section section-padding" id="pricing">
      {/* Background Dotted Concentric Pattern */}
      <div className="pricing-pattern-container">
        <svg viewBox="0 0 800 800" className="pricing-pattern-svg">
          {patternRadii.map((r, i) => (
            <circle 
              key={i}
              cx="0" 
              cy="400" 
              r={r} 
              fill="none" 
              stroke="#7e3af2" 
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`0 ${24 + i * 2.5}`} 
              opacity={0.65 - (i * 0.02)}
            />
          ))}
        </svg>
      </div>

      <div className="container pricing-container">
        <motion.div 
          className="section-header text-center pricing-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="subtitle pricing-subtitle">OUR PRICING PLAN</p>
          <h2 className="title pricing-title">
            Affordable Pricing Pack<span className="text-overlay">ages</span>
          </h2>
        </motion.div>

        <motion.div 
          className="pricing-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, idx) => (
            <motion.div 
              className="pricing-card-wrapper" 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="pricing-card-top">
                <div className="pricing-icon">{plan.icon}</div>
                <div className="pricing-badge">Essential IT Support</div>
              </div>
              
              <div className="pricing-card-inner">
                <h4 className="plan-name">{plan.name}</h4>
                <div className="plan-price-wrapper">
                  <span className="price-currency">$</span>
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">Month</span>
                </div>
                
                <hr className="pricing-divider" />
                
                <h5 className="feature-title">Feature Option:</h5>
                <ul className="pricing-features">
                  {plan.features.map((opt, i) => (
                    <li key={i}>
                      <span className="bullet-point">•</span> {opt}
                    </li>
                  ))}
                </ul>
                
                <motion.button 
                  className="pricing-btn"
                  whileHover={{ scale: 1.05, backgroundColor: "#3b8ac2" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
