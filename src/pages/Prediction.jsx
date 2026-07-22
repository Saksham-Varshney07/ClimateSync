import React from 'react';
import { FiCloud, FiCpu, FiActivity, FiAlertTriangle, FiBarChart2, FiDatabase, FiSun, FiGlobe } from 'react-icons/fi';
import { FaSatelliteDish, FaHistory, FaBrain } from 'react-icons/fa';
import '../styles/prediction.css';

const Prediction = () => {
  const steps = [
    { number: 1, title: 'Weather Data Collection', icon: <FiDatabase /> },
    { number: 2, title: 'AI Processing', icon: <FiCpu /> },
    { number: 3, title: 'Risk Analysis', icon: <FiBarChart2 /> },
    { number: 4, title: 'Heatwave Prediction', icon: <FiActivity /> },
    { number: 5, title: 'Alert Generation', icon: <FiAlertTriangle /> },
  ];

  const predictions = [
    { label: "Today's Temperature", value: '42°C', icon: <FiCloud />, color: '#EF4444' },
    { label: 'Humidity', value: '68%', icon: <FiCloud />, color: '#2563EB' },
    { label: 'UV Index', value: '9', icon: <FiSun />, color: '#F97316' },
    { label: 'Heat Index', value: '46°C', icon: <FiActivity />, color: '#DC2626' },
  ];

  const explainCards = [
    {
      icon: <FaBrain />,
      title: 'Machine Learning',
      description: 'Our ML models are trained on decades of historical climate data to identify patterns and predict heatwave events with 94% accuracy.',
    },
    {
      icon: <FiGlobe />,
      title: 'Climate Models',
      description: 'Advanced climate simulation models analyze atmospheric conditions, ocean currents, and global weather patterns for accurate predictions.',
    },
    {
      icon: <FaHistory />,
      title: 'Historical Weather Data',
      description: 'Over 50 years of historical temperature, humidity, and weather data is analyzed to establish baselines and detect anomalies.',
    },
    {
      icon: <FaSatelliteDish />,
      title: 'Satellite Data',
      description: 'Real-time satellite imagery and remote sensing data provide critical information about land surface temperatures and atmospheric conditions.',
    },
  ];

  // Chart data
  const chartData = [
    { label: 'Mon', value: 70 },
    { label: 'Tue', value: 85 },
    { label: 'Wed', value: 92 },
    { label: 'Thu', value: 78 },
    { label: 'Fri', value: 88 },
    { label: 'Sat', value: 95 },
    { label: 'Sun', value: 82 },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="prediction-hero">
        <div className="container">
          <h1>Heatwave Prediction</h1>
          <p>
            Leveraging AI and climate science to predict heatwave events with high accuracy,
            enabling timely preparation and response.
          </p>
        </div>
      </section>

      {/* Steps Flow */}
      <section className="section steps-section">
        <div className="container">
          <h2 className="section-title">How Prediction Works</h2>
          <p className="section-subtitle">
            Our end-to-end pipeline processes vast amounts of climate data to generate accurate heatwave predictions.
          </p>
          <div className="steps-flow">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="step-item animate-fade-in-up" style={{ animationDelay: `${index * 0.12}s` }}>
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h4>{step.title}</h4>
                </div>
                {index < steps.length - 1 && <span className="step-arrow">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Prediction Data */}
      <section className="section prediction-data">
        <div className="container">
          <h2 className="section-title">Current Conditions</h2>
          <p className="section-subtitle">
            Real-time weather data and heatwave risk assessment for monitored regions.
          </p>
          <div className="prediction-cards">
            {predictions.map((item, index) => (
              <div key={index} className="pred-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="pred-card-icon" style={{ color: item.color }}>{item.icon}</div>
                <div className="pred-card-label">{item.label}</div>
                <div className="pred-card-value" style={{ color: item.color }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Risk Badge */}
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#0F172A', marginBottom: '12px' }}>Current Risk Level</h3>
            <span className="risk-badge risk-high">High Risk 🔴</span>
            <p style={{ color: '#64748B', marginTop: '12px', fontSize: '0.9rem' }}>
              Take necessary precautions. Stay hydrated and avoid prolonged sun exposure.
            </p>
          </div>

          {/* Chart Placeholder */}
          <div className="chart-placeholder animate-fade-in">
            <h3>Weekly Temperature Trend</h3>
            <div className="chart-bars">
              {chartData.map((item, index) => (
                <div
                  key={index}
                  className="chart-bar"
                  style={{ height: `${item.value}%` }}
                >
                  <span className="chart-bar-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explain Cards */}
      <section className="section explain-section">
        <div className="container">
          <h2 className="section-title">The Science Behind Predictions</h2>
          <p className="section-subtitle">
            Understanding how we combine multiple data sources and technologies to forecast heatwave events.
          </p>
          <div className="explain-grid">
            {explainCards.map((card, index) => (
              <div key={index} className="explain-card animate-fade-in-up" style={{ animationDelay: `${index * 0.12}s` }}>
                <div className="explain-card-icon">{card.icon}</div>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Prediction;

