import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const NotFound = () => {
  return (
    <main style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      background: '#F8FAFC'
    }}>
      <h1 style={{
        fontSize: '8rem',
        fontWeight: '800',
        background: 'linear-gradient(135deg, #2563EB, #38BDF8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: '1',
        marginBottom: '16px'
      }}>
        404
      </h1>
      <h2 style={{
        fontSize: '1.8rem',
        fontWeight: '700',
        color: '#0F172A',
        marginBottom: '12px'
      }}>
        Page Not Found
      </h2>
      <p style={{
        fontSize: '1.05rem',
        color: '#64748B',
        maxWidth: '450px',
        marginBottom: '32px',
        lineHeight: '1.7'
      }}>
        The page you are looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>
      <Link to="/" className="btn btn-primary">
        <FiHome /> Back to Home
      </Link>
    </main>
  );
};

export default NotFound;

