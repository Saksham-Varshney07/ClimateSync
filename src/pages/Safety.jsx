import React from 'react';
import { FiDroplet, FiSun, FiShield, FiUsers, FiHeart, FiAlertTriangle, FiArrowRight } from 'react-icons/fi';
import { FaWater, FaTshirt, FaFirstAid } from 'react-icons/fa';
import '../styles/safety.css';

const Safety = () => {
  const guidelines = [
    {
      icon: <FaWater />,
      title: 'Stay Hydrated',
      description: 'Drink plenty of water throughout the day, even if you do not feel thirsty. Avoid caffeinated and alcoholic beverages as they can dehydrate you.',
    },
    {
      icon: <FiSun />,
      title: 'Avoid Afternoon Sun',
      description: 'Stay indoors during peak heat hours between 12 PM and 4 PM. If you must go out, schedule activities for early morning or evening.',
    },
    {
      icon: <FaTshirt />,
      title: 'Wear Light Clothing',
      description: 'Wear lightweight, loose-fitting, and light-colored clothing. Use wide-brimmed hats and sunglasses for additional protection.',
    },
    {
      icon: <FiShield />,
      title: 'Use Sunscreen',
      description: 'Apply broad-spectrum sunscreen with SPF 30 or higher. Reapply every two hours, especially if you are sweating or swimming.',
    },
    {
      icon: <FiUsers />,
      title: 'Check on Elderly',
      description: 'Regularly check on elderly family members and neighbors who are more vulnerable to heat-related illnesses.',
    },
    {
      icon: <FiAlertTriangle />,
      title: 'Emergency Preparedness',
      description: 'Keep emergency supplies ready including water, first-aid kit, and a list of emergency contacts. Know the signs of heat stroke.',
    },
  ];

  const emergencySteps = [
    {
      title: 'Recognize Symptoms',
      description: 'Look for signs of heat exhaustion: heavy sweating, weakness, cold skin, nausea, and headache.',
    },
    {
      title: 'Move to Shade',
      description: 'Immediately move the person to a cool, shaded area or air-conditioned environment.',
    },
    {
      title: 'Drink Water',
      description: 'Provide cool water or sports drinks. Have them sip slowly. Avoid sugary or alcoholic beverages.',
    },
    {
      title: 'Seek Medical Help',
      description: 'If symptoms worsen or include confusion, loss of consciousness, or high body temperature (104°F+), call emergency services.',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="safety-hero">
        <div className="container">
          <h1>Heatwave Safety Guidelines</h1>
          <p>
            Essential precautions and emergency response procedures to protect yourself and others
            during extreme heat events.
          </p>
        </div>
      </section>

      {/* Guidelines */}
      <section className="section safety-guidelines">
        <div className="container">
          <h2 className="section-title">Essential Safety Tips</h2>
          <p className="section-subtitle">
            Follow these guidelines to stay safe during heatwave conditions and protect your loved ones.
          </p>
          <div className="safety-grid">
            {guidelines.map((item, index) => (
              <div key={index} className="safety-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="safety-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="section emergency-section">
        <div className="container">
          <h2 className="section-title">Emergency Response</h2>
          <p className="section-subtitle">
            If you or someone around you is experiencing heat-related illness, follow these critical steps.
          </p>
          <div className="emergency-steps">
            {emergencySteps.map((step, index) => (
              <div key={index} className="emergency-step animate-fade-in-up" style={{ animationDelay: `${index * 0.12}s` }}>
                <div className="emergency-step-num">{index + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {index < emergencySteps.length - 1 && (
                  <span className="emergency-step-arrow"><FiArrowRight /></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotline */}
      <section className="hotline-section">
        <div className="container">
          <h2>📞 Emergency Hotline</h2>
          <p>If you or someone else is experiencing a medical emergency due to extreme heat, call immediately:</p>
          <div className="hotline-number">1-800-HEAT-WARN</div>
          <p style={{ marginTop: '16px', fontSize: '0.95rem', opacity: '0.85' }}>
            Available 24/7 for heat-related emergencies and guidance.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Safety;

