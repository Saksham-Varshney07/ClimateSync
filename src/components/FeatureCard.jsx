import React from 'react';

const FeatureCard = ({ icon, title, description, className }) => {
  return (
    <div className={`feature-card ${className || ''}`}>
      <div className="feature-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;

