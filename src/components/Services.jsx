import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Image as ImageIcon, Layout, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Monitor size={28} strokeWidth={1.5} />,
      title: "Software Development",
      desc: "IT involves a structured approach to coding and problem-solving"
    },
    {
      icon: <ImageIcon size={28} strokeWidth={1.5} />,
      title: "Content Management",
      desc: "IT involves a structured approach to coding and problem-solving"
    },
    {
      icon: <Layout size={28} strokeWidth={1.5} />,
      title: "Website Maintenance",
      desc: "IT involves a structured approach to coding and problem-solving"
    }
  ];

  // Framer Motion Variants for staggering animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="services-wrapper">
          {/* Decorative Corner Blobs matching design */}
          <motion.div 
            className="services-blob-tl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
          <motion.div 
            className="services-blob-br"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          ></motion.div>

          {/* Header */}
          <motion.div 
            className="section-header text-center services-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="subtitle services-subtitle">Unique Services</p>
            <h2 className="title services-title">Our Services</h2>
            <p className="description services-desc">
              Our comprehensive range of services is designed to help businesses thrive<br/>
              in today's fast-paced digital world.
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div 
                className="service-card"
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)", transition: { duration: 0.3 } }}
              >
                <div className="service-icon-wrapper">
                   <div className="service-icon-inner">
                     {service.icon}
                   </div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <motion.button 
                  className="service-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More <ArrowRight size={16} className="btn-arrow" strokeWidth={2.5} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
