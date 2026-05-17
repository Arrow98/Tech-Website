import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, MessageSquare } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  const blogs = [
    {
      title: "Discover a customized solution that caters to modern business needs",
      date: "04 May 2025",
      author: "Admin",
      comments: "3 Comments",
      tag: "Technology",
      color: "#3b82f6"
    },
    {
      title: "Maximize your business potential with the right IT solutions today",
      date: "12 May 2025",
      author: "Admin",
      comments: "1 Comment",
      tag: "Business",
      color: "#8b5cf6"
    },
    {
      title: "How data analytics is reshaping the future of enterprise software",
      date: "18 May 2025",
      author: "Admin",
      comments: "5 Comments",
      tag: "Analytics",
      color: "#06b6d4"
    }
  ];

  return (
    <section className="blog section-padding" id="blog">
      <div className="container">
        <div className="section-header text-center">
          <p className="subtitle">Blog</p>
          <h2 className="title">Read Our Latest Blog</h2>
          <p className="description" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Stay updated with our latest insights on IT solutions, technology trends, and business strategy.
          </p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog, idx) => (
            <motion.div
              className="blog-card"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="blog-image" style={{ background: `linear-gradient(135deg, ${blog.color}33 0%, ${blog.color}66 100%)` }}>
                <div className="blog-tag" style={{ background: blog.color }}>{blog.tag}</div>
                <div className="blog-date-badge">
                  <Calendar size={14} />
                  {blog.date}
                </div>
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <span><User size={13} /> {blog.author}</span>
                  <span className="dot">•</span>
                  <span><MessageSquare size={13} /> {blog.comments}</span>
                </div>
                <h3>{blog.title}</h3>
                <button className="read-more">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
