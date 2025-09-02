import React, { useState } from 'react';
import './Header.css';
import logo from './logo.png';
import homeIcon from './home.png';
import menuIcon from './menu.png';
import cartIcon from './cart.png';
import userIcon from './profile.avif';
import userPhoto from './user.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="header-center">
          <img
            src={homeIcon}
            alt="Home"
            className="nav-icon"
            onClick={() => navigate('/home')}   
          />
          <img src={menuIcon} alt="Menu" className="nav-icon" />
          <img src={cartIcon} alt="Cart" className="nav-icon" />
        </div>

        <div className="header-right">
          <img
            src={userIcon}
            alt="Profile"
            className="user-icon"
            onClick={togglePopup}
          />
        </div>
      </header>

      {showPopup && (
        <div className="profile-popup">
          <div className="popup-header">
            <h3>My Profile</h3>
            <button className="close-btn" onClick={togglePopup}>×</button>
          </div>

          <div className="circle-avatar">
            <div
              className="circle-icon"
              style={{ backgroundImage: `url(${userPhoto})` }}
            ></div>
          </div>

          <div className="user-info">
            <div className="user-name">John Doe</div>
            <div className="user-phone">+91 1234567890</div>
          </div>

          <div className="popup-option">My Addresses <span>&gt;</span></div>
          <div className="popup-option">Track Order <span>&gt;</span></div>
          <div className="popup-option">Order History <span>&gt;</span></div>
          <div className="popup-option">Terms & Conditions <span>&gt;</span></div>
          <div className="popup-option">Contact Us <span>&gt;</span></div>

          <button className="logout-btn">Logout</button>
        </div>
      )}
    </>
  );
};

export default Header;
