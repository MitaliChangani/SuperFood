import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import backgroundImage from './image.png';

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div className="welcome-container">
      <img src={backgroundImage} alt="Food Background" className="welcome-image" />
      <div className="welcome-content">
        <div className="welcome-box">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Welcome to the Food Zone</h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Indulge in the most delicious fast foods and sweets — all in one place!
          </p>

          <button className="get-started-button" onClick={handleGetStarted}>
            Get Started
          </button>

          <p className="login-text">
            Have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;