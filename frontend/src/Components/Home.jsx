import React from 'react';
import './Home.css';

import offer1 from './offer1.jpg';
import offer2 from './offer2.jpg';
import Indian from './Indian.jpg';
import Italian from './Italian.jpg';
import Mexican from './Mexican.jpg';
import American from './American.jpg';
import Thai from './Thai.jpg';
import Japanese from './Japanese.jpg';
import Chinese from './Chinese.jpg';
import item4 from './Street.jpg';
import item5 from './logo.png';

const cuisineItems = [
  { name: 'Indian', img: Indian },
  { name: 'Mexican', img: Mexican },
  { name: 'Italian', img: Italian },
  { name: 'American', img: American },
  { name: 'Chinese', img: Chinese },
  { name: 'Thai', img: Thai },
  { name: 'Japanese', img: Japanese },
  { name: 'Snacks', img: Indian },
  // repeated for infinite scroll
//   { name: 'Indian', img: Indian },
//   { name: 'Mexican', img: Mexican },
//   { name: 'Italian', img: Italian },
];

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="menu-title">Our Menu</h2>
<div className="slider-wrapper">
  <div className="slider-track">
    {[...cuisineItems, ...cuisineItems].map((item, index) => (
      <div className="slider-item" key={index}>
        <img src={item.img} alt={item.name} />
        <p>{item.name}</p>
      </div>
    ))}
  </div>
</div>

      <div className="offers-section">
        <div className="offer-card">
          <img src={offer1} alt="Offer 1" />
          <div className="offer-text">
            <h3>Today's Special Offer</h3>
            <a href="#">Buy Now →</a>
          </div>
        </div>
        <div className="offer-card">
          <img src={offer2} alt="Offer 2" />
          <div className="offer-text">
            <h3>Flat 30% Off</h3>
            <a href="#">Buy Now →</a>
          </div>
        </div>
      </div>

      <h2 className="menu-title">Best Items</h2>
      <div className="best-items">
        <img src={Italian} alt="Item 1" />
        <img src={Chinese} alt="Item 2" />
        <img src={Mexican} alt="Item 3" />
        <img src={item4} alt="Item 4" />
        <img src={item5} alt="Item 5" />
      </div>
    </div>
  );
};

export default Home;
