import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

import offer1 from './offer1.jpg';
import offer2 from './offer2.jpg';
import Indian from './Indian.jpg';
import Snacks from './Snacks.jpg';
import Italian from './Italian.jpg';
import American from './American.jpg';
import Mexican from './Mexican.jpg';
import Pizza from './Pizza.jpg';
import Thai from './Thai.jpg';
import Japanese from './Japanese.jpg';
import Chinese from './Chinese.jpg';
import item4 from './Street.jpg';
import item5 from './logo.png';
import Meggie from './Meggie.jpg';
import Pasta from './Pasta.jpg';
import Mojito from './Mojito.jpg';
import Sandwich from './Sandwich.jpg';
import Hotdog from './Hotdog.jpg';
import Dosa from './Dosa.jpg';
import Frankie from './Frankie.jpg';
import Burger from './Burger.jpg';
import Chocolava from './Chocolava.jpg';
import Pavbhaji from './Pavbhaji.jpg';
import Vadapav from './Vadapav.jpg';

const cuisineItems = [
  { name: 'Indian', img: Indian },
  { name: 'Mexican', img: Mexican },
  { name: 'Italian', img: Italian },
  { name: 'American', img: American },
  { name: 'Chinese', img: Chinese },
  { name: 'Thai', img: Thai },
  { name: 'Japanese', img: Japanese },
  { name: 'Snacks', img: Snacks },
];

const specialItems = [
  { name: 'Dosa', desc: 'Espresso, steamed milk, milk foam', price: '₹300', img: Dosa },
  { name: 'Pizza', desc: 'Espresso, hot water', price: '₹250', img: Pizza },
  { name: 'Burger', desc: 'Espresso, milk, foam art', price: '₹280', img: Burger },
  { name: 'Chocolava', desc: 'Espresso, chocolate, steamed milk', price: '₹320', img: Chocolava },
  { name: 'Pasta', desc: 'Fruit smoothie delight', price: '₹270', img: Pasta },
  { name: 'Frankie', desc: 'Minty mojito cooler', price: '₹260', img: Frankie },
  { name: 'Mojito', desc: 'Blueberry muffin', price: '₹120', img: Mojito },
  { name: 'Meggie', desc: 'Chocolate glazed donut', price: '₹130', img: Meggie },
  { name: 'Hotdog', desc: 'Strong and bold', price: '₹200', img: Hotdog },
  { name: 'Pavbhaji', desc: 'Slow-brewed coffee', price: '₹310', img: Pavbhaji },
  { name: 'Sandwich', desc: 'Slow-brewed coffee', price: '₹310', img: Sandwich },
  { name: 'Vadapav', desc: 'Slow-brewed coffee', price: '₹310', img: Vadapav },
];

const Home = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/C1'); // Navigates to C1 page
  };

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

      {/* Order Now Button */}
      <div className="order-now-container">
        <button className="order-now-btn" onClick={handleOrderNow}>
          Order Now
        </button>
      </div>

      <h2 className="menu-title">Our Special Items</h2>
      <div className="special-items">
        {specialItems.map((item, idx) => (
          <div className="special-card" key={idx}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="desc">{item.desc}</p>
            <div className="price-row">
              <span>{item.price}</span>
              <button className="plus-button">+</button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="h2">Special Offers</h2>
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
    </div>
  );
};

export default Home;
