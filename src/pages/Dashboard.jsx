import React from 'react';
import {
  FiThermometer, FiCloud, FiWind, FiSun, FiActivity,
  FiAlertTriangle, FiMapPin
} from 'react-icons/fi';
import DashboardCard from '../components/DashboardCard';
import AlertBanner from '../components/AlertBanner';
import '../styles/dashboard.css';

const Dashboard = () => {
  const metrics = [
    { icon: <FiThermometer />, value: '41°C', label: 'Temperature', color: '#EF4444' },
    { icon: <FiCloud />, value: '72%', label: 'Humidity', color: '#2563EB' },
    { icon: <FiWind />, value: '15 km/h', label: 'Wind Speed', color: '#22C55E' },
    { icon: <FiSun />, value: '9', label: 'UV Index', color: '#F97316' },
    { icon: <FiActivity />, value: '46°C', label: 'Heat Index', color: '#DC2626' },
    { icon: <FiAlertTriangle />, value: 'Extreme', label: 'Risk', color: '#EF4444', isRisk: true },
  ];

  const forecasts = [
    { time: 'Morning', temp: '36°C', icon: '🌤️' },
    { time: 'Afternoon', temp: '42°C', icon: '☀️' },
    { time: 'Evening', temp: '39°C', icon: '🌅' },
    { time: 'Night', temp: '33°C', icon: '🌙' },
  ];

  const progressData = [
    { label: 'Temperature', value: 88, type: 'temp' },
    { label: 'Humidity', value: 72, type: 'humidity' },
    { label: 'Wind', value: 45, type: 'wind' },
    { label: 'Air Quality', value: 65, type: 'aqi' },
    { label: 'UV Exposure', value: 90, type: 'uv' },
  ];

  const alerts = [
    { city: 'Mumbai', status: 'Extreme Heat Warning', type: 'extreme' },
    { city: 'Delhi', status: 'High Risk', type: 'high' },
    { city: 'Ahmedabad', status: 'Moderate Risk', type: 'moderate' },
    { city: 'Nagpur', status: 'Extreme Risk', type: 'extreme' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="dashboard-hero">
        <div className="container">
          <h1>Climate Dashboard</h1>
          <p>Real-time climate monitoring and analytics dashboard</p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="dashboard-content">
        <div className="container">
          {/* Metrics Grid */}
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="metric-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="metric-card-icon" style={{ color: metric.color }}>
                  {metric.icon}
                </div>
                {metric.isRisk ? (
                  <>
                    <div style={{ marginBottom: '6px' }}>
                      <span className="risk-badge risk-extreme">Extreme</span>
                    </div>
                  </>
                ) : (
                  <div className="metric-card-value">{metric.value}</div>
                )}
                <div className="metric-card-label">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Row 1: Forecast + Progress */}
          <div className="dashboard-row">
            <DashboardCard title="Today's Forecast" icon={<FiSun />}>
              <div className="forecast-grid">
                {forecasts.map((item, index) => (
                  <div key={index} className="forecast-item">
                    <div className="forecast-icon">{item.icon}</div>
                    <div className="forecast-time">{item.time}</div>
                    <div className="forecast-temp">{item.temp}</div>
                  </div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Climate Indicators" icon={<FiActivity />}>
              <div className="progress-list">
                {progressData.map((item, index) => (
                  <div key={index} className="progress-item">
                    <div className="progress-header">
                      <span className="progress-label">{item.label}</span>
                      <span className="progress-value">{item.value}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className={`progress-fill ${item.type}`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Row 2: Alerts */}
          <div className="dashboard-row">
            <DashboardCard title="Recent Alerts" icon={<FiMapPin />}>
              <div className="alerts-list">
                {alerts.map((alert, index) => (
                  <AlertBanner
                    key={index}
                    city={alert.city}
                    status={alert.status}
                    type={alert.type}
                  />
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Quick Actions" icon={<FiActivity />}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  View Full Report
                </button>
                <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Subscribe to Alerts
                </button>
                <button className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                  Emergency Contact
                </button>
              </div>
            </DashboardCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

