import React from "react";
import "./Japanese.css";
import vegSushi from "./veg-sushi.jpg";
import edamame from "./edamame.jpg";
import vegetableTempura from "./vegetable-tempura.jpg";
import misoSoup from "./miso-soup.jpg";
import seaweedSalad from "./seaweed-salad.jpg";
import tofuSteak from "./tofu-steak.jpg";
import veggieRamen from "./veggie-ramen.jpg";
import avocadoRoll from "./avocado-roll.jpg";
import kabochaCurry from "./kabocha-curry.jpg";
import inariSushi from "./inari-sushi.jpg";
import yasaiUdon from "./yasai-udon.jpg";
import gomaae from "./goma-ae.jpg";

const Japanese = () => {
  const items = [
    { name: "Veg Sushi", desc: "Delicious vegetarian sushi rolls with fresh vegetables.", price: "₹180", img: vegSushi },
    { name: "Edamame", desc: "Steamed young soybeans lightly salted.", price: "₹120", img: edamame },
    { name: "Vegetable Tempura", desc: "Crispy fried vegetables in a light batter.", price: "₹150", img: vegetableTempura },
    { name: "Miso Soup", desc: "Traditional Japanese soup with tofu and seaweed.", price: "₹100", img: misoSoup },
    { name: "Seaweed Salad", desc: "Fresh seaweed with sesame dressing.", price: "₹130", img: seaweedSalad },
    { name: "Tofu Steak", desc: "Grilled tofu with teriyaki sauce and vegetables.", price: "₹160", img: tofuSteak },
    { name: "Veggie Ramen", desc: "Noodles in a savory vegetable broth with fresh vegetables.", price: "₹150", img: veggieRamen },
    { name: "Avocado Roll", desc: "Sushi roll with fresh avocado and rice.", price: "₹140", img: avocadoRoll },
    { name: "Kabocha Curry", desc: "Japanese pumpkin curry with vegetables.", price: "₹160", img: kabochaCurry },
    { name: "Inari Sushi", desc: "Rice stuffed in sweet tofu pockets.", price: "₹130", img: inariSushi },
    { name: "Yasai Udon", desc: "Thick wheat noodles stir-fried with vegetables.", price: "₹150", img: yasaiUdon },
    { name: "Goma-ae", desc: "Vegetables dressed in sesame sauce.", price: "₹120", img: gomaae }
  ];

  return (
    <div className="japanese-container">
      <h1 className="japanese-title">Japanese Food</h1>
      <div className="japanese-grid">
        {items.map((item, index) => (
          <div className="japanese-card" key={index}>
            <img src={item.img} alt={item.name} className="japanese-image" />
            <div className="japanese-card-content">
              <div>
                <div className="japanese-item-name">{item.name}</div>
                <div className="japanese-item-desc">{item.desc}</div>
              </div>
              <div className="japanese-card-footer">
                <div className="japanese-price">{item.price}</div>
                <button className="japanese-add-btn">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Japanese;