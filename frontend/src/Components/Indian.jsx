import React from "react";
import "./Indian.css";

// Import your images
import gt from "./gt.jpg";
import dabeli from "./dabeli.jpg";
import Vadapav from "./Vadapav.jpg";
import Pavbhaji from "./Pavbhaji.jpg";
import panipuri from "./panipuri.jpg";
import jalebi from "./jalebi.jpg";
import gj from "./gj.jpg";
import chhole from "./chhole.jpg";
import Purishak from "./Puri-shak.jpg";
import samosa from "./samosa.jpg";
import Dosa from "./Dosa.jpg";
import dahipuri from "./dahipuri.jpg";

const items = [
  { name: "Gujarati Thali", desc: "A wholesome platter of traditional Gujarati dishes with a balance of sweet, spicy, and tangy flavors.", price: 300, img: gt },
  { name: "Dabeli", desc: "A spiced potato filling in a soft bun, garnished with pomegranate, peanuts, and chutneys.", price: 250, img: dabeli },
  { name: "Vadapav", desc: "Mumbai’s iconic street snack — spicy potato fritter served in a bun with chutneys.", price: 280, img: Vadapav },
  { name: "Pavbhaji", desc: "A buttery mix of mashed vegetables served with soft, toasted pav buns.", price: 320, img: Pavbhaji },
  { name: "Panipuri", desc: "Crispy puris filled with spicy, tangy water and a delicious potato filling.", price: 270, img: panipuri },
  { name: "Jalebi", desc: "Crisp, spiral-shaped sweets soaked in fragrant sugar syrup.", price: 260, img: jalebi },
  { name: "Gulab-Jambu", desc: "Soft, spongy milk-based balls soaked in cardamom-infused sugar syrup.", price: 120, img: gj },
  { name: "Chhole", desc: "A spicy and flavorful chickpea curry, best enjoyed with bhature or rice.", price: 130, img: chhole },
  { name: "Purishak", desc: "Golden puris served with a mildly spiced potato curry.", price: 200, img: Purishak },
  { name: "Samosa", desc: "Crispy fried pastry stuffed with a spiced potato and pea filling.", price: 310, img: samosa },
  { name: "Dosa", desc: "A thin, crispy South Indian crepe made from fermented rice and lentil batter.", price: 310, img: Dosa },
  { name: "Dahipuri", desc: "Mini crispy puris filled with yogurt, chutneys, and spices for a burst of flavor.", price: 310, img: dahipuri },
];

const Indian = () => {
  return (
    <div className="indian-container">
      <h1 className="indian-title">Indian Food</h1>
      <div className="indian-grid">
        {items.map((item, index) => (
          <div key={index} className="indian-card">
            <img src={item.img} alt={item.name} className="indian-image" />
            <div className="indian-card-content">
              <div>
                <h2 className="indian-item-name">{item.name}</h2>
                <p className="indian-item-desc">{item.desc}</p>
              </div>
              <div className="indian-card-footer">
                <span className="indian-price">₹{item.price}</span>
                <button className="indian-add-btn">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Indian;
