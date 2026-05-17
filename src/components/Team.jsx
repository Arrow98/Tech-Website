import React from 'react';
import { motion } from 'framer-motion';
import { Globe as Facebook, Mail as Twitter, Share2 as Linkedin } from 'lucide-react';
import './Team.css';

const Team = () => {
  const team = [
    { name: "Eleanor Pena",    role: "UI/UX Designer",    img: "/team1.png" },
    { name: "Cody Fisher",     role: "Software Engineer", img: "/team2.png" },
    { name: "Bessie Cooper",   role: "Product Manager",   img: "/team3.png" },
    { name: "Leslie Alexander",role: "Data Analyst",      img: "/team2.png" },
  ];

  return (
    <section className="team section-padding" id="team">
      <div className="container">
        <div className="team-header text-center">
          <p className="team-subtitle">Our Team</p>
          <h2 className="team-title">Our Experienced Tech Experts</h2>
          <p className="team-desc">
            We are providing the best IT solutions for your business. Meet our experienced tech experts.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, idx) => (
            <motion.div
              className="team-card"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="team-image-holder">
                <img src={member.img} alt={member.name} className="team-img" />
                <div className="social-links-hover">
                  <Facebook size={18} />
                  <Twitter size={18} />
                  <Linkedin size={18} />
                </div>
              </div>
              <div className="team-info">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="team-cta">
          <button className="btn btn-outline-blue">View All Members</button>
        </div>
      </div>
    </section>
  );
};

export default Team;
