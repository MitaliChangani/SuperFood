import React from "react";
import "./Italian.css";

// Import your images
import pizza from "./Pizza.jpg";
import pasta from "./Pasta.jpg";
import lasagna from "./lasagna.jpg";
import risotto from "./risotto.jpg";
import tiramisu from "./tiramisu.jpg";
import bruschetta from "./bruschetta.jpg";
import gnocchi from "./gnocchi.jpg";
import fettuccine from "./fettuccine.jpg";
import ravioli from "./ravioli.jpg";
import calzone from "./calzone.jpg";
import caprese from "./caprese.jpg";
import minestrone from "./minestrone.jpg";

const items = [
  { name: "Margherita Pizza", desc: "Classic tomato sauce, mozzarella & basil", price: 450, img: pizza },
  { name: "Pasta Alfredo", desc: "Creamy sauce with parmesan and garlic", price: 380, img: pasta },
  { name: "Lasagna", desc: "Layers of pasta, meat sauce, and cheese", price: 500, img: lasagna },
  { name: "Risotto", desc: "Creamy rice with mushrooms & parmesan", price: 420, img: risotto },
  { name: "Tiramisu", desc: "Coffee-flavored dessert with mascarpone", price: 300, img: tiramisu },
  { name: "Bruschetta", desc: "Toasted bread with tomatoes & olive oil", price: 220, img: bruschetta },
  { name: "Gnocchi", desc: "Soft potato dumplings with sauce", price: 350, img: gnocchi },
  { name: "Fettuccine Carbonara", desc: "Pasta with eggs, cheese & pancetta", price: 400, img: fettuccine },
  { name: "Ravioli", desc: "Stuffed pasta with spinach & ricotta", price: 370, img: ravioli },
  { name: "Calzone", desc: "Folded pizza with cheese & fillings", price: 390, img: calzone },
  { name: "Caprese Salad", desc: "Fresh mozzarella, tomatoes & basil", price: 250, img: caprese },
  { name: "Minestrone Soup", desc: "Vegetable soup with pasta & beans", price: 280, img: minestrone },
];

const Italian = () => {
  return (
    <div className="italian-container">
      <h1 className="italian-title">Italian Food</h1>
      <div className="italian-grid">
        {items.map((item, index) => (
          <div key={index} className="italian-card">
            <img src={item.img} alt={item.name} className="italian-image" />
            <div className="italian-card-content">
              <div>
                <h2 className="italian-item-name">{item.name}</h2>
                <p className="italian-item-desc">{item.desc}</p>
              </div>
              <div className="italian-card-footer">
                <span className="italian-price">₹{item.price}</span>
                <button className="italian-add-btn">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Italian;
