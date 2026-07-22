import React from 'react';

const AlertBanner = ({ city, status, type }) => {
  const getStatusClass = () => {
    switch (type) {
      case 'extreme': return 'alert-badge-extreme';
      case 'high': return 'alert-badge-high';
      case 'moderate': return 'alert-badge-moderate';
      default: return 'alert-badge-moderate';
    }
  };

  return (
    <div className={`alert-card ${type}`}>
      <span className="alert-card-city">{city}</span>
      <span className="alert-card-status">{status}</span>
      <span className={`alert-card-badge ${getStatusClass()}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    </div>
  );
};

export default AlertBanner;

