import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiThermometer, FiAlertTriangle, FiActivity, FiSun, FiUsers, FiGlobe } from 'react-icons/fi';
import { FaBrain, FaChartLine } from 'react-icons/fa';
import FeatureCard from '../components/FeatureCard';
import StatCard from '../components/StatCard';
import '../styles/home.css';

const Home = () => {
  const features = [
    {
      icon: <FiActivity />,
      title: 'Real-Time Monitoring',
      description: 'Continuous tracking of temperature, humidity, and heat indices across multiple regions with instant data updates.',
    },
    {
      icon: <FaBrain />,
      title: 'AI-Based Prediction',
      description: 'Advanced machine learning models analyze weather patterns to predict heatwave events with high accuracy.',
    },
    {
      icon: <FiShield />,
      title: 'Risk Assessment',
      description: 'Comprehensive risk evaluation for vulnerable areas and populations using multi-factor analysis.',
    },
    {
      icon: <FiAlertTriangle />,
      title: 'Early Alerts',
      description: 'Automated early warning system that notifies communities about impending heatwave conditions.',
    },
    {
      icon: <FaChartLine />,
      title: 'Climate Analytics',
      description: 'In-depth climate data analytics and visualization for researchers and policymakers.',
    },
    {
      icon: <FiUsers />,
      title: 'Community Awareness',
      description: 'Educational resources and safety guidelines to help communities prepare for extreme heat.',
    },
  ];

  const whyCards = [
    {
      icon: <FiThermometer />,
      title: 'Increasing Global Temperatures',
      description: 'Global temperatures have risen by 1.1°C since pre-industrial times, leading to more frequent and intense heatwaves worldwide.',
    },
    {
      icon: <FiSun />,
      title: 'Health Risks',
      description: 'Extreme heat causes over 12,000 deaths annually in the US alone. Vulnerable populations face the highest risk.',
    },
    {
      icon: <FiAlertTriangle />,
      title: 'Need for Early Warning',
      description: 'Early warning systems can reduce heatwave mortality by up to 50% through timely alerts and preparedness.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <FiActivity /> Powered by AI
            </div>
            <h1 className="hero-title">
              Climate Intelligence for <span>Heatwave</span> Monitoring, Prediction & Early Warning
            </h1>
            <p className="hero-subtitle">
              Leveraging artificial intelligence and climate analytics to monitor, predict, and provide
              early warnings for heatwave events, protecting communities worldwide.
            </p>
            <div className="hero-buttons">
              <Link to="/prediction" className="btn btn-primary">
                Learn More <FiArrowRight />
              </Link>
              <Link to="/dashboard" className="btn btn-secondary" style={{ color: 'black', borderColor: 'rgba(255,255,255,0.3)' }}>
                View Dashboard
              </Link>
            </div>
            <div className="hero-stats-row">
              <div className="hero-stat">
                <div className="hero-stat-value">150+</div>
                <div className="hero-stat-label">Cities Monitored</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">94%</div>
                <div className="hero-stat-label">Accuracy</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">24/7</div>
                <div className="hero-stat-label">Real-time Data</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <svg className="hero-illustration" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Sun */}
              <circle cx="250" cy="120" r="60" fill="url(#sunGrad)" />
              <g stroke="#F97316" strokeWidth="3" strokeLinecap="round">
                <line x1="250" y1="30" x2="250" y2="10" />
                <line x1="250" y1="210" x2="250" y2="230" />
                <line x1="160" y1="120" x2="140" y2="120" />
                <line x1="340" y1="120" x2="360" y2="120" />
                <line x1="186" y1="56" x2="172" y2="42" />
                <line x1="314" y1="184" x2="328" y2="198" />
                <line x1="314" y1="56" x2="328" y2="42" />
                <line x1="186" y1="184" x2="172" y2="198" />
              </g>
              {/* Thermometer */}
              <rect x="380" y="180" width="16" height="100" rx="8" fill="#2563EB" />
              <rect x="382" y="190" width="12" height="80" rx="6" fill="#EF4444" />
              <circle cx="388" cy="290" r="14" fill="#EF4444" />
              {/* Data waves */}
              <path d="M50 320 Q100 280, 150 320 T250 320 T350 320 T450 320" stroke="#38BDF8" strokeWidth="3" fill="none" opacity="0.5" />
              <path d="M50 340 Q100 310, 150 340 T250 340 T350 340 T450 340" stroke="#38BDF8" strokeWidth="2" fill="none" opacity="0.3" />
              {/* Buildings */}
              <rect x="60" y="300" width="40" height="60" rx="4" fill="#1E293B" opacity="0.8" />
              <rect x="120" y="280" width="35" height="80" rx="4" fill="#1E293B" opacity="0.8" />
              <rect x="180" y="310" width="30" height="50" rx="4" fill="#1E293B" opacity="0.8" />
              <rect x="280" y="290" width="45" height="70" rx="4" fill="#1E293B" opacity="0.8" />
              <rect x="350" y="270" width="35" height="90" rx="4" fill="#1E293B" opacity="0.8" />
              <rect x="410" y="300" width="30" height="60" rx="4" fill="#1E293B" opacity="0.8" />
              <defs>
                <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EF4444" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Why Heatwaves Matter */}
      <section className="section why-section">
        <div className="container">
          <h2 className="section-title">Why Heatwaves Matter</h2>
          <p className="section-subtitle">
            Understanding the growing threat of extreme heat and the urgent need for advanced monitoring systems.
          </p>
          <div className="why-cards">
            {whyCards.map((card, index) => (
              <div key={index} className="why-card animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="why-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Our platform combines cutting-edge AI with comprehensive climate data to deliver actionable insights.
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <p className="section-subtitle">
            Real-time statistics showcasing the scale and effectiveness of our climate intelligence platform.
          </p>
          <div className="stats-grid">
            <StatCard icon="🌡️" value="150+" label="Heatwaves Monitored" />
            <StatCard icon="🏙️" value="50" label="Cities Covered" />
            <StatCard icon="🎯" value="94%" label="Prediction Accuracy" />
            <StatCard icon="🔔" value="1200+" label="Alerts Generated" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Stay Ahead of the Heat?</h2>
            <p>
              Explore our interactive dashboard to view real-time climate data, heatwave predictions,
              and safety recommendations for your region.
            </p>
            <Link to="/dashboard" className="btn btn-primary">
              Explore Dashboard <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

