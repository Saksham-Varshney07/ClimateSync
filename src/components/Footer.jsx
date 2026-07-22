import React from 'react';
import { Link } from 'react-router-dom';
import { FiGlobe, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3><FiGlobe /> Climate Intelligence</h3>
            <p>
              Empowering communities with AI-driven climate analytics for heatwave monitoring,
              prediction, and early warning systems to build a safer future.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/prediction">Prediction</Link>
              <Link to="/safety">Safety</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/about">About</Link>
            </div>
          </div>

          <div>
            <h4>Resources</h4>
            <div className="footer-links">
              <a href="#">Climate Data</a>
              <a href="#">Research Papers</a>
              <a href="#">API Access</a>
              <a href="#">Documentation</a>
              <a href="#">Blog</a>
            </div>
          </div>

          <div>
            <h4>Contact</h4>
            <div className="footer-contact">
              <p><FiMail /> info@climateintel.io</p>
              <p><FiPhone /> +1 (555) 123-4567</p>
              <p><FiMapPin /> San Francisco, CA</p>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Climate Intelligence. All rights reserved. | Frontend Demonstration Project</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

