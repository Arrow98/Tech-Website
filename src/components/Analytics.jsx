import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Analytics.css';

const Analytics = () => {
  const benefits = [
    {
      title: "Increase Profit by 34%",
      desc: "Our customized solutions cater to the financial needs of modern businesses, driving measurable growth."
    },
    {
      title: "Better Work Efficiency",
      desc: "Streamline your operations with smart tools and automation that cut costs and save time."
    },
    {
      title: "Build for Your Business",
      desc: "Tailored technology solutions built around your unique business goals and growth strategy."
    }
  ];

  return (
    <section className="analytics section-padding" id="analytics">
      <div className="container analytics-container">
        <motion.div
          className="analytics-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="analytics-subtitle">Data Analytics</p>
          <h2 className="analytics-title">Analytics Overview You've Always Wanted</h2>

          <div className="benefits-list">
            {benefits.map((item, index) => (
              <div className="benefit-item" key={index}>
                <div className="benefit-icon">
                  <CheckCircle2 fill="var(--primary-blue)" color="white" size={32} />
                </div>
                <div className="benefit-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="analytics-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/analytics.png" alt="Analytics Dashboard" className="analytics-img" />
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;
