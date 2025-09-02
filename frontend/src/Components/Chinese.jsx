import React from "react";
import "./Chinese.css";
import vegSpringRolls from "./veg-spring-rolls.jpg";
import vegManchurian from "./veg-manchurian.jpg";
import vegChowMein from "./veg-chow-mein.jpg";
import vegFriedRice from "./veg-fried-rice.jpg";
import kungPaoTofu from "./kung-pao-tofu.jpg";
import sweetSourVeg from "./sweet-sour-veg.jpg";
import hotSourSoup from "./hot-sour-soup.jpg";
import schezwanNoodles from "./schezwan-noodles.jpg";
import honeyChiliPotatoes from "./honey-chili-potatoes.jpg";
import vegHakkaNoodles from "./veg-hakka-noodles.jpg";
import cornSoup from "./corn-soup.jpg";
import crispyVeg from "./crispy-veg.jpg";

const Chinese = () => {
  const items = [
    { name: "Veg Spring Rolls", desc: "Crispy rolls stuffed with fresh vegetables and served with sweet chili sauce.", price: "₹120", img: vegSpringRolls },
    { name: "Veg Manchurian", desc: "Vegetable balls cooked in a spicy tangy Chinese sauce.", price: "₹150", img: vegManchurian },
    { name: "Veg Chow Mein", desc: "Stir-fried noodles with vegetables and soy sauce.", price: "₹130", img: vegChowMein },
    { name: "Veg Fried Rice", desc: "Fragrant rice tossed with vegetables and Chinese spices.", price: "₹140", img: vegFriedRice },
    { name: "Kung Pao Tofu", desc: "Tofu stir-fried with peanuts, vegetables, and spicy sauce.", price: "₹160", img: kungPaoTofu },
    { name: "Sweet & Sour Vegetables", desc: "Mixed vegetables in a tangy sweet-sour sauce.", price: "₹150", img: sweetSourVeg },
    { name: "Hot & Sour Soup", desc: "Spicy and tangy soup with fresh vegetables and tofu.", price: "₹110", img: hotSourSoup },
    { name: "Schezwan Noodles", desc: "Fiery noodles tossed in spicy Schezwan sauce.", price: "₹150", img: schezwanNoodles },
    { name: "Honey Chili Potatoes", desc: "Crispy potatoes tossed in sweet and spicy honey chili sauce.", price: "₹130", img: honeyChiliPotatoes },
    { name: "Veg Hakka Noodles", desc: "Soft noodles stir-fried with vegetables and a hint of soy sauce.", price: "₹140", img: vegHakkaNoodles },
    { name: "Corn Soup", desc: "Sweet and creamy corn soup with crunchy vegetable bits.", price: "₹100", img: cornSoup },
    { name: "Crispy Vegetables", desc: "Batter-fried vegetables served with tangy dip.", price: "₹150", img: crispyVeg }
  ];

  return (
    <div className="chinese-container">
      <h1 className="chinese-title">Chinese Food</h1>
      <div className="chinese-grid">
        {items.map((item, index) => (
          <div className="chinese-card" key={index}>
            <img src={item.img} alt={item.name} className="chinese-image" />
            <div className="chinese-card-content">
              <div>
                <div className="chinese-item-name">{item.name}</div>
                <div className="chinese-item-desc">{item.desc}</div>
              </div>
              <div className="chinese-card-footer">
                <div className="chinese-price">{item.price}</div>
                <button className="chinese-add-btn">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chinese;
