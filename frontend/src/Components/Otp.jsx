import React, { useState } from 'react';
import './Otp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpCode = otp.join('');
    if (otpCode.length !== 4) {
      setError('Please enter all 4 digits');
      return;
    }

    const phoneNumber = localStorage.getItem('phone_number');

    try {
      const response = await axios.post('http://localhost:8000/api/verify-otp/', {
        phone_number: phoneNumber,
        otp: otpCode,
      });

      if (response.status === 200) {
        setSuccess('✅ OTP Verified!');
        setError('');
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Verification failed. Please try again.');
      }
      setSuccess('');
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2 className="otp-title">🔐 Verify OTP</h2>
        <p className="otp-instruction">Please enter the 4-digit code sent to your phone number.</p>
        <form className="otp-form" onSubmit={handleSubmit}>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
          </div>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <button type="submit" className="otp-button">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default Otp;