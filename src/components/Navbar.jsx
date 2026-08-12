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

          <Link
            to="/"
            className="navbar-logo"
            title="Go to the Climate Intelligence home page"
          >
            <FiGlobe className="navbar-logo-icon" />
            Climate Intelligence - Saksham Varshney
          </Link>

          <div className="navbar-links">
            <NavLink
              to="/"
              end
              className={linkClass}
              title="Go to the Climate Intelligence home page"
            >
              Home
            </NavLink>

            <NavLink
              to="/prediction"
              className={linkClass}
              title="View heatwave predictions"
            >
              Prediction
            </NavLink>

            <NavLink
              to="/safety"
              className={linkClass}
              title="View heatwave safety information"
            >
              Safety
            </NavLink>

            <NavLink
              to="/dashboard"
              className={linkClass}
              title="View the heatwave monitoring dashboard"
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/about"
              className={linkClass}
              title="Learn about Climate Intelligence"
            >
              About
            </NavLink>
          </div>

          <div className="navbar-right">
            <Link
              to="/dashboard"
              title="Get started with the heatwave monitoring dashboard"
            >
              <button className="navbar-btn">Get Started</button>
            </Link>

            <button
              className={`hamburger ${isOpen ? 'open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              title="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>

        <NavLink
          to="/"
          end
          className={linkClass}
          onClick={() => setIsOpen(false)}
          title="Go to the Climate Intelligence home page"
        >
          Home
        </NavLink>

        <NavLink
          to="/prediction"
          className={linkClass}
          onClick={() => setIsOpen(false)}
          title="View heatwave predictions"
        >
          Prediction
        </NavLink>

        <NavLink
          to="/safety"
          className={linkClass}
          onClick={() => setIsOpen(false)}
          title="View heatwave safety information"
        >
          Safety
        </NavLink>

        <NavLink
          to="/dashboard"
          className={linkClass}
          onClick={() => setIsOpen(false)}
          title="View the heatwave monitoring dashboard"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/about"
          className={linkClass}
          onClick={() => setIsOpen(false)}
          title="Learn about Climate Intelligence"
        >
          About
        </NavLink>

        <Link
          to="/dashboard"
          className="mobile-btn"
          onClick={() => setIsOpen(false)}
          title="Get started with the heatwave monitoring dashboard"
        >
          Get Started
        </Link>

      </div>
    </>
  );
};

export default Navbar;