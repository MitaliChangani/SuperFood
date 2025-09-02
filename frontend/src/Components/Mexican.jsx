import React from "react";
import "./Mexican.css";

// Import your images
import tacos from "./tacos.jpg";
import burrito from "./burrito.jpg";
import nachos from "./nachos.jpg";
import quesadilla from "./quesadilla.jpg";
import enchiladas from "./enchiladas.jpg";
import guacamole from "./guacamole.jpg";
import churros from "./churros.jpg";
import fajitas from "./fajitas.jpg";
import tamales from "./tamales.jpg";
import salsa from "./salsa.jpg";
import elote from "./elote.jpg";
import tostada from "./tostada.jpg";

const items = [
  { name: "Tacos", desc: "Corn tortillas filled with seasoned meat & veggies", price: 350, img: tacos },
  { name: "Burrito", desc: "Flour tortilla stuffed with rice, beans, and meat", price: 400, img: burrito },
  { name: "Nachos", desc: "Crispy tortilla chips topped with cheese & jalapeños", price: 250, img: nachos },
  { name: "Quesadilla", desc: "Grilled tortilla with melted cheese", price: 300, img: quesadilla },
  { name: "Enchiladas", desc: "Rolled tortillas with savory fillings & sauce", price: 380, img: enchiladas },
  { name: "Guacamole", desc: "Creamy avocado dip", price: 200, img: guacamole },
  { name: "Churros", desc: "Fried-dough pastry with cinnamon sugar", price: 150, img: churros },
  { name: "Fajitas", desc: "Sizzling grilled meat with peppers & onions", price: 420, img: fajitas },
  { name: "Tamales", desc: "Steamed masa dough with savory filling", price: 350, img: tamales },
  { name: "Salsa", desc: "Fresh tomato-based dip with spice", price: 120, img: salsa },
  { name: "Elote", desc: "Grilled corn with cheese & chili powder", price: 180, img: elote },
  { name: "Tostada", desc: "Crispy tortilla with toppings", price: 270, img: tostada },
];

const Mexican = () => {
  return (
    <div className="mexican-container">
      <h1 className="mexican-title">Mexican Food</h1>
      <div className="mexican-grid">
        {items.map((item, index) => (
          <div key={index} className="mexican-card">
            <img src={item.img} alt={item.name} className="mexican-image" />
            <div className="mexican-card-content">
              <div>
                <h2 className="mexican-item-name">{item.name}</h2>
                <p className="mexican-item-desc">{item.desc}</p>
              </div>
              <div className="mexican-card-footer">
                <span className="mexican-price">₹{item.price}</span>
                <button className="mexican-add-btn">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mexican;
