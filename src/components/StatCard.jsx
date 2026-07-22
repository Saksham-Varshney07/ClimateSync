import React from 'react';

const StatCard = ({ icon, value, label, className }) => {
  return (
    <div className={`stat-card ${className || ''}`}>
      <div className="stat-card-icon">{icon}</div>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-label">{label}</div>
    </div>
  );
};

export default StatCard;

