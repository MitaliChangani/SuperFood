import React from "react";
import "./Thai.css";
import vegPadThai from "./veg-pad-thai.jpg";
import greenCurryVeg from "./green-curry-veg.jpg";
import tomYumSoup from "./tom-yum-soup.jpg";
import vegSpringRolls from "./veg-spring-rolls.jpg";
import vegFriedRice from "./veg-fried-rice.jpg";
import tofuSatay from "./tofu-satay.jpg";
import massamanCurry from "./massaman-curry.jpg";
import mangoStickyRice from "./mango-sticky-rice.jpg";
import pineappleFriedRice from "./pineapple-fried-rice.jpg";
import lemongrassSoup from "./lemongrass-soup.jpg";
import stirFriedBasil from "./stir-fried-basil.jpg";
import coconutSoup from "./coconut-soup.jpg";

const Thai = () => {
  const items = [
    { name: "Veg Pad Thai", desc: "Stir-fried rice noodles with vegetables and Thai flavors.", price: "₹150", img: vegPadThai },
    { name: "Green Curry Veg", desc: "Vegetables simmered in fragrant green curry with coconut milk.", price: "₹160", img: greenCurryVeg },
    { name: "Tom Yum Soup", desc: "Spicy and sour soup with fresh vegetables.", price: "₹120", img: tomYumSoup },
    { name: "Veg Spring Rolls", desc: "Crispy rolls filled with fresh vegetables.", price: "₹110", img: vegSpringRolls },
    { name: "Veg Fried Rice", desc: "Fragrant fried rice with mixed vegetables.", price: "₹140", img: vegFriedRice },
    { name: "Tofu Satay", desc: "Grilled tofu skewers served with peanut sauce.", price: "₹150", img: tofuSatay },
    { name: "Massaman Curry", desc: "Thai-style curry with potatoes, vegetables, and coconut milk.", price: "₹160", img: massamanCurry },
    { name: "Mango Sticky Rice", desc: "Sweet sticky rice served with fresh mango.", price: "₹120", img: mangoStickyRice },
    { name: "Pineapple Fried Rice", desc: "Fried rice with pineapple chunks and vegetables.", price: "₹140", img: pineappleFriedRice },
    { name: "Lemongrass Soup", desc: "Aromatic soup with lemongrass, vegetables, and tofu.", price: "₹120", img: lemongrassSoup },
    { name: "Stir-Fried Basil Veg", desc: "Vegetables stir-fried with Thai basil and spices.", price: "₹130", img: stirFriedBasil },
    { name: "Coconut Soup", desc: "Creamy coconut soup with vegetables.", price: "₹130", img: coconutSoup }
  ];

  return (
    <div className="thai-container">
      <h1 className="thai-title">Thai Food</h1>
      <div className="thai-grid">
        {items.map((item, index) => (
          <div className="thai-card" key={index}>
            <img src={item.img} alt={item.name} className="thai-image" />
            <div className="thai-card-content">
              <div>
                <div className="thai-item-name">{item.name}</div>
                <div className="thai-item-desc">{item.desc}</div>
              </div>
              <div className="thai-card-footer">
                <div className="thai-price">{item.price}</div>
                <button className="thai-add-btn">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thai;
