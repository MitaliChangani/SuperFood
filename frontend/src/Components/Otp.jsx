import React from 'react';
import './Otp.css';

const Otp = () => {
  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2 className="otp-title">🔐 Verify OTP</h2>
        <p className="otp-instruction">Please enter the 4-digit code sent to your phone number.</p>
        <form className="otp-form">
          <div className="otp-inputs">
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
          </div>
          <button type="submit" className="otp-button">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
