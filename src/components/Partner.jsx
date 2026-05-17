import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';
import './Partner.css';

const Partner = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { 
      q: "What technologies and tools do you use in your projects?", 
      a: "IT solutions also help improve customer experiences through enhanced engagement tools, seamless communication, and tailored services. Whether it's building robust digital infrastructures, optimizing workflows..." 
    },
    { 
      q: "How long does it typically take to complete a project?", 
      a: "The timeline varies greatly depending on the complexity and scope of the project. A typical software development project taking anywhere from a few weeks to several months." 
    },
    { 
      q: "Do you offer scalable IT solutions for growing businesses?", 
      a: "Yes, all our architectures are designed with scalability in mind, using cloud-native microservices and flexible database solutions to grow seamlessly with your user base." 
    },
    { 
      q: "Can you help us with network setup and management?", 
      a: "Absolutely. Our infrastructure team specializes in secure, high-performance network topologies, VPN setups, and continuous 24/7 monitoring and management." 
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="partner-section" id="partner">
      {/* Absolute Image spanning the left edge */}
      <motion.div 
        className="partner-bg-image-wrapper"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <img src="/about.png" alt="Partners collaborating" className="partner-bg-image" />
        
        {/* Floating Review Card */}
        <motion.div 
          className="client-review-card"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="review-avatars">
            <img src="/team1.png" alt="Client 1" />
            <img src="/team2.png" alt="Client 2" />
            <img src="/team3.png" alt="Client 3" />
            <img src="/team2.png" alt="Client 4" />
          </div>
          <div className="review-info">
            <span className="review-count">260+ Client Review</span>
            <div className="review-stars">
              <Star size={14} fill="#ffb800" color="#ffb800" />
              <Star size={14} fill="#ffb800" color="#ffb800" />
              <Star size={14} fill="#ffb800" color="#ffb800" />
              <Star size={14} fill="#ffb800" color="#ffb800" />
              <Star size={14} fill="#ffb800" color="#ffb800" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="container partner-container">
        <motion.div 
          className="partner-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p className="partner-subtitle" variants={fadeUp}>
            FREQUENTLY ASKED QUESTIONS
          </motion.p>
          
          <motion.h2 className="partner-title" variants={fadeUp}>
            Your Success Is Our Priority Why<br/>
            Partner With <span className="text-faded">Tekz?</span>
          </motion.h2>
          
          <motion.div className="accordion-list" variants={fadeUp}>
            {faqs.map((faq, idx) => {
              const isActive = openIdx === idx;
              return (
                <div 
                  className={`accordion-item ${isActive ? 'active' : ''}`} 
                  key={idx}
                >
                  <div 
                    className="accordion-header"
                    onClick={() => setOpenIdx(isActive ? -1 : idx)}
                  >
                    <h4>{faq.q}</h4>
                    {isActive ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronDown size={20} strokeWidth={2.5} />}
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        className="accordion-body-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="accordion-body">
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
