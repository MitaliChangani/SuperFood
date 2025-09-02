import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !phoneNumber || !address) {
      setError('Please fill all fields');
      setSuccess('');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register/', {
        name,
        phone_number: phoneNumber,
        address,
      });

      if (response.status === 201 || response.data.message === 'User registered successfully') {
        setSuccess('Registered successfully. Redirecting to login...');
        setError('');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Something went wrong. Please try again.');
      }
      setSuccess('');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Registration</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Enter your address" rows="3" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;