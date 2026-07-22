import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const linkClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <FiGlobe className="navbar-logo-icon" />
            Climate Intelligence - Saksham Varshney
          </Link>

          <div className="navbar-links">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/prediction" className={linkClass}>Prediction</NavLink>
            <NavLink to="/safety" className={linkClass}>Safety</NavLink>
            <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
          </div>

          <div className="navbar-right">
            <Link to="/dashboard">
              <button className="navbar-btn">Get Started</button>
            </Link>
            <button
              className={`hamburger ${isOpen ? 'open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" end className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/prediction" className={linkClass} onClick={() => setIsOpen(false)}>Prediction</NavLink>
        <NavLink to="/safety" className={linkClass} onClick={() => setIsOpen(false)}>Safety</NavLink>
        <NavLink to="/dashboard" className={linkClass} onClick={() => setIsOpen(false)}>Dashboard</NavLink>
        <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>About</NavLink>
        <Link to="/dashboard" className="mobile-btn" onClick={() => setIsOpen(false)}>
          Get Started
        </Link>
      </div>
    </>
  );
};

export default Navbar;

