import React from "react";
import "./American.css";

// Import your images
import vegBurger from "./vegburger.jpg";
import grilledCheese from "./grilledcheese.jpg";
import macCheese from "./maccheese.jpg";
import veggiePizza from "./veggiepizza.jpg";
import onionRings from "./onionrings.jpg";
import fries from "./fries.jpg";
import pancakes from "./pancakes.jpg";
import waffle from "./waffle.jpg";
import salad from "./salad.jpg";
import soup from "./soup.jpg";
import cornBread from "./cornbread.jpg";
import milkshake from "./milkshake.jpg";

const items = [
  { name: "Veggie Burger", desc: "Grilled vegetable patty with lettuce & cheese in a bun", price: 350, img: vegBurger },
  { name: "Grilled Cheese Sandwich", desc: "Golden toasted bread with gooey melted cheese", price: 280, img: grilledCheese },
  { name: "Mac & Cheese", desc: "Creamy macaroni pasta with cheddar cheese", price: 320, img: macCheese },
  { name: "Veggie Pizza", desc: "Thin-crust pizza loaded with fresh veggies & cheese", price: 400, img: veggiePizza },
  { name: "Onion Rings", desc: "Crispy battered onion rings", price: 200, img: onionRings },
  { name: "French Fries", desc: "Crispy golden potato fries", price: 180, img: fries },
  { name: "Pancakes", desc: "Fluffy pancakes served with maple syrup", price: 250, img: pancakes },
  { name: "Waffles", desc: "Crispy waffles topped with butter & syrup", price: 270, img: waffle },
  { name: "Garden Salad", desc: "Fresh greens with a light dressing", price: 220, img: salad },
  { name: "Tomato Soup", desc: "Rich and creamy tomato soup", price: 200, img: soup },
  { name: "Cornbread", desc: "Moist & fluffy traditional cornbread", price: 210, img: cornBread },
  { name: "Vanilla Milkshake", desc: "Creamy milkshake with vanilla flavor", price: 180, img: milkshake },
];

const American = () => {
  return (
    <div className="american-container">
      <h1 className="american-title">American Food</h1>
      <div className="american-grid">
        {items.map((item, index) => (
          <div key={index} className="american-card">
            <img src={item.img} alt={item.name} className="american-image" />
            <div className="american-card-content">
              <div>
                <h2 className="american-item-name">{item.name}</h2>
                <p className="american-item-desc">{item.desc}</p>
              </div>
              <div className="american-card-footer">
                <span className="american-price">₹{item.price}</span>
                <button className="american-add-btn">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default American;
