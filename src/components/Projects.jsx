import React from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const projects = [
  { 
    img: '/hero.png', 
    title: 'Advanced Threat Protection Development', 
    desc: 'The Advanced Threat Protection (ATP) Suite Development project focuses on creating a robust and comprehensive...' 
  },
  { 
    img: '/about.png', 
    title: 'Financial Dashboard Infrastructure', 
    desc: 'A cutting-edge financial dashboard designed for modern enterprise operations with real-time data.' 
  },
  { 
    img: '/analytics.png', 
    title: 'Data Analytics Platform', 
    desc: 'Real-time data visualization and processing engine for large scale metrics and business intelligence.' 
  },
  { 
    img: '/team2.png', 
    title: 'Cloud Systems Migration', 
    desc: 'Seamless transition of legacy architecture to scalable distributed cloud networks with zero downtime.' 
  }
];

const Projects = () => {
  return (
    <section className="projects section-padding bg-dark" id="projects">
      <div className="projects-container-wide">
        <div className="section-header text-center projects-header">
          <p className="subtitle projects-subtitle">Our Projects</p>
          <h2 className="title text-white">Our Recent Projects</h2>
          <p className="description projects-desc">
            Our team is dedicated to delivering exceptional IT solutions tailored to meet<br/>
            the unique needs of each client.
          </p>
        </div>

        <div className="projects-slider">
          {projects.map((item, idx) => (
            <div 
              className="project-card" 
              key={idx}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="project-card-top-action">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
              
              <div className="project-card-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="project-explore-btn">
                  <span>Explore Project</span>
                  <div className="explore-icon-circle">
                    <Plus size={14} strokeWidth={2.5} />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
