import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Rocket, BarChart2, Megaphone, Phone } from 'lucide-react';
import './Hero.css';

const images = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1280&h=720&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&h=720&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&h=720&fit=crop'
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Switch images exactly every 5 seconds
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <section className="hero" id="home">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        
        <div className="hero-overlay-left"></div>
        <div className="hero-overlay-angled"></div>

        <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
          <ArrowLeft size={20} />
        </button>

        <button className="slider-btn slider-btn-next" onClick={nextSlide}>
          <ArrowRight size={20} />
        </button>

        <div className="container hero-container">
          <div className="hero-content">
            <p className="hero-subtitle">HEY THERE! WE'RE TEKZ AGENCY</p>
            <h1 className="hero-title">
              Be the best IT Solution<br/>
              <span className="highlight-blue">agency 2025</span>
            </h1>
            <p className="hero-description">
              we understand the importance of financial planning for individuals and businesses alike.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-white-pill">
                <span className="phone-icon-wrapper"><Phone size={14} strokeWidth={2.5} /></span>
                (00) 123 456 789
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section overlaps the bottom of hero */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card-rounded">
              <div className="stat-card-top">
                <div className="stat-icon-wrapper"><Rocket size={24} /></div>
                <div className="stat-title-area">
                  <h3>38X</h3>
                  <h4>Return on investment</h4>
                </div>
              </div>
              <p className="stat-desc">Return on investment is a financial metric that measures</p>
            </div>
            
            <div className="stat-card-rounded">
              <div className="stat-card-top">
                <div className="stat-icon-wrapper"><BarChart2 size={24} /></div>
                <div className="stat-title-area">
                  <h3>19X</h3>
                  <h4>Amazing Growth</h4>
                </div>
              </div>
              <p className="stat-desc">Return on investment is a financial metric that measures</p>
            </div>
            
            <div className="stat-card-rounded">
              <div className="stat-card-top">
                <div className="stat-icon-wrapper"><Megaphone size={24} /></div>
                <div className="stat-title-area">
                  <h3>14X</h3>
                  <h4>Successful Marketing</h4>
                </div>
              </div>
              <p className="stat-desc">Return on investment is a financial metric that measures</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
