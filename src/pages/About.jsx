import React from 'react';
import {
  FiGlobe, FiTarget, FiEye, FiStar, FiCpu, FiDatabase,
  FiServer, FiSmartphone, FiCloud, FiMap
} from 'react-icons/fi';
import { FaReact, FaSatelliteDish, FaBrain } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import '../styles/about.css';

const About = () => {
  const missionData = [
    {
      icon: <FiTarget />,
      title: 'Our Mission',
      description: 'To democratize climate intelligence and provide accessible heatwave monitoring and early warning systems for communities worldwide.',
    },
    {
      icon: <FiEye />,
      title: 'Our Vision',
      description: 'A world where every community has the tools and knowledge to prepare for and respond to extreme heat events effectively.',
    },
    {
      icon: <FiStar />,
      title: 'Our Objectives',
      description: 'Develop accurate prediction models, deliver timely alerts, educate communities, and drive climate resilience through technology.',
    },
  ];

  const techStack = [
    { icon: <FaReact />, title: 'React', description: 'UI Framework' },
    { icon: <SiVite />, title: 'Vite', description: 'Build Tool' },
    { icon: <FiDatabase />, title: 'React Router', description: 'Navigation' },
    { icon: <FiCpu />, title: 'CSS Modules', description: 'Styling' },
  ];

  const timeline = [
    { title: 'Phase 1: Research', description: 'Comprehensive research on climate patterns, heatwave formation, and existing early warning systems worldwide.' },
    { title: 'Phase 2: Data Collection', description: 'Aggregation of historical climate data from global weather agencies and satellite sources for model training.' },
    { title: 'Phase 3: AI Model Development', description: 'Development and training of machine learning models to predict heatwave events with high accuracy.' },
    { title: 'Phase 4: Platform Development', description: 'Building the frontend demonstration platform with interactive dashboards and real-time monitoring interfaces.' },
    { title: 'Phase 5: Testing & Validation', description: 'Rigorous testing of prediction models against historical data and validation of alert systems.' },
    { title: 'Phase 6: Launch & Impact', description: 'Platform launch to demonstrate capabilities and drive awareness about climate intelligence solutions.' },
  ];

  const futureScope = [
    { icon: <FiCloud />, title: 'Real-time Weather APIs', description: 'Integration with live weather data providers for real-time monitoring.' },
    { icon: <FaBrain />, title: 'Machine Learning Integration', description: 'Advanced ML models for improved prediction accuracy.' },
    { icon: <FaSatelliteDish />, title: 'Satellite Data', description: 'Direct satellite imagery analysis for better coverage.' },
    { icon: <FiServer />, title: 'IoT Sensors', description: 'Integration with ground-based IoT sensors for localized data.' },
    { icon: <FiSmartphone />, title: 'Mobile Notifications', description: 'Push notifications for instant emergency alerts.' },
    { icon: <FiMap />, title: 'Global Coverage', description: 'Expand monitoring to cover all vulnerable regions worldwide.' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>About Climate Intelligence</h1>
          <p>
            A frontend demonstration platform showcasing how artificial intelligence and climate analytics
            can assist in heatwave monitoring, prediction, and early warning systems.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section about-overview">
        <div className="container">
          <div className="overview-content">
            <h2 className="section-title">Project Overview</h2>
            <p>
              Climate Intelligence is a comprehensive frontend demonstration platform that visualizes how
              modern technology can be leveraged to address one of the most pressing climate challenges of
              our time: extreme heat events.
            </p>
            <p>
              As global temperatures continue to rise due to climate change, heatwaves are becoming more
              frequent, intense, and longer-lasting. Our platform demonstrates how AI-powered analytics
              can help communities monitor, predict, and prepare for these dangerous weather events.
            </p>
          </div>

          {/* Mission / Vision / Objectives */}
          <div className="mv-grid">
            {missionData.map((item, index) => (
              <div key={index} className="mv-card animate-fade-in-up" style={{ animationDelay: `${index * 0.12}s` }}>
                <div className="mv-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section tech-section">
        <div className="container">
          <h2 className="section-title">Technologies Used</h2>
          <p className="section-subtitle">
            Built with modern web technologies for performance, scalability, and great user experience.
          </p>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="tech-item-icon">{tech.icon}</div>
                <h4>{tech.title}</h4>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">Project Timeline</h2>
          <p className="section-subtitle">
            The journey of developing this climate intelligence platform from concept to completion.
          </p>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="timeline-item-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Scope */}
      <section className="section future-section">
        <div className="container">
          <h2 className="section-title">Future Scope</h2>
          <p className="section-subtitle">
            Planned enhancements and features to extend the platform's capabilities.
          </p>
          <div className="future-grid">
            {futureScope.map((item, index) => (
              <div key={index} className="future-item animate-fade-in-up" style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="future-item-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

