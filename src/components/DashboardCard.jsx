import React from 'react';

const DashboardCard = ({ title, icon, children, className }) => {
  return (
    <div className={`dashboard-card ${className || ''}`}>
      <h3>
        {icon && <span className="card-icon">{icon}</span>}
        {title}
      </h3>
      {children}
    </div>
  );
};

export default DashboardCard;

