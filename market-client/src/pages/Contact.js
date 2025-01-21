import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const companyInfo = {
    name: "Enigma Software Company",
    tagline: "Shaping Tomorrow's Digital Landscape",
    description: "Leading innovation in quantum computing, AI solutions, and space technology.",
    offices: [
      {
        name: "Global HQ",
        location: "Bucaramaga",
        address: " Main Street, Tech District",
        phone: "+57 302 305 6191"
      },
      {
        name: "Customer Services",
        location: "Bucarmanga",
        address: " Main Street, Tech District",
        phone: "+57 "
      }
    ],
    socialMedia: [
      { name: "LinkedIn", url: "#", icon: "🔗" },
      { name: "Whatsapp", url: "#", icon: "🐦" },
      { name: "GitHub", url: "#", icon: "💻" }
    ],
    departments: [
      {
        name: "Business Development",
        email: "business@enigma.com",
        response: "24-48 hours"
      },
      {
        name: "Technical Support",
        email: "support@enigma.com",
        response: "12 hours"
      }
    ]
  };

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-hero">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {companyInfo.name}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {companyInfo.tagline}
        </motion.p>
      </div>

      <div className="contact-grid">
        <motion.section 
          className="offices-section"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Global Offices</h2>
          <div className="office-cards">
            {companyInfo.offices.map((office, index) => (
              <div key={index} className="office-card">
                <h3>{office.name}</h3>
                <p>{office.location}</p>
                <p>{office.address}</p>
                <p>{office.phone}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="departments-section"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2>Contact Departments</h2>
          {companyInfo.departments.map((dept, index) => (
            <div key={index} className="department-card">
              <h3>{dept.name}</h3>
              <p>{dept.email}</p>
              <p>Response time: {dept.response}</p>
            </div>
          ))}
        </motion.section>

        <motion.section 
          className="social-section"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h2>Connect With Us</h2>
          <div className="social-links">
            {companyInfo.socialMedia.map((social, index) => (
              <a 
                key={index} 
                href={social.url}
                className="social-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon} {social.name}
              </a>
            ))}
          </div>
        </motion.section>

        <motion.form 
          className="contact-form"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2>Send Us a Message</h2>
          <div className="form-group">
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <select>
              <option value="">Select Department</option>
              {companyInfo.departments.map((dept, index) => (
                <option key={index} value={dept.name}>{dept.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;