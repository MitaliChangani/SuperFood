import React from "react";
import "./Snacks.css";
import wafers from "./wafers.jpg";
import biscuits from "./biscuits.webp";
import fryums from "./fryums.jpg";
import chakli from "./chakli.jpg";
import namkeenMix from "./namkeen-mix.jpg";
import peanutChikki from "./peanut-chikki.jpg";
import sev from "./sev.jpg";
import masalaPeanuts from "./masala-peanuts.jpg";
import mathri from "./mathri.jpg";
import murukku from "./murukku.jpg";
import khakhra from "./khakhra.jpg";
import bhujia from "./bhujia.jpg";
import khariBiscuits from "./khari-biscuits.jpg";
import samosaChips from "./samosa-chips.jpg";
import masalaPopcorn from "./masala-popcorn.jpg";
import cornChips from "./corn-chips.jpg";
import alooBhujia from "./aloo-bhujia.jpg";
import moongDal from "./moong-dal.jpg";
import soyaSticks from "./soya-sticks.jpg";
import dhokla from "./dhokla.jpg";

const Snacks = () => {
  const items = [
    { name: "Wafers", desc: "Crispy and salty potato wafers.", price: "₹30", img: wafers },
    { name: "Biscuits", desc: "Buttery and crunchy biscuits for tea-time.", price: "₹40", img: biscuits },
    { name: "Fryums", desc: "Colorful fried snack for kids.", price: "₹25", img: fryums },
    { name: "Chakli", desc: "Spicy spiral-shaped crunchy snack.", price: "₹50", img: chakli },
    { name: "Namkeen Mix", desc: "A mix of crunchy Indian snacks and spices.", price: "₹60", img: namkeenMix },
    { name: "Peanut Chikki", desc: "Sweet and crunchy peanut brittle.", price: "₹70", img: peanutChikki },
    { name: "Sev", desc: "Thin and crispy spicy noodles made from gram flour.", price: "₹45", img: sev },
    { name: "Masala Peanuts", desc: "Spicy roasted peanuts coated with masala.", price: "₹40", img: masalaPeanuts },
    { name: "Mathri", desc: "Crispy flaky snack made from flour and spices.", price: "₹35", img: mathri },
    { name: "Murukku", desc: "South Indian crunchy rice flour snack.", price: "₹50", img: murukku },
    { name: "Khakhra", desc: "Thin roasted crispy flatbread with spices.", price: "₹45", img: khakhra },
    { name: "Bhujia", desc: "Crispy and spicy gram flour noodles.", price: "₹50", img: bhujia },
    { name: "Khari Biscuits", desc: "Flaky buttery puff pastry biscuits.", price: "₹55", img: khariBiscuits },
    { name: "Samosa Chips", desc: "Crunchy snack made from samosa filling.", price: "₹60", img: samosaChips },
    { name: "Masala Popcorn", desc: "Spicy and tangy popcorn snack.", price: "₹35", img: masalaPopcorn },
    { name: "Corn Chips", desc: "Crispy fried corn chips with spices.", price: "₹40", img: cornChips },
    { name: "Aloo Bhujia", desc: "Spicy potato noodles, crispy and crunchy.", price: "₹45", img: alooBhujia },
    { name: "Moong Dal", desc: "Crispy fried moong dal with spices.", price: "₹35", img: moongDal },
    { name: "Soya Sticks", desc: "Crunchy soya-based snack sticks.", price: "₹50", img: soyaSticks },
    { name: "Dhokla Chips", desc: "Crispy fried dhokla pieces with spices.", price: "₹55", img: dhokla }
  ];

  return (
    <div className="snacks-container">
      <h1 className="snacks-title">Indian Snacks</h1>
      <div className="snacks-grid">
        {items.map((item, index) => (
          <div className="snacks-card" key={index}>
            <img src={item.img} alt={item.name} className="snacks-image" />
            <div className="snacks-card-content">
              <div>
                <div className="snacks-item-name">{item.name}</div>
                <div className="snacks-item-desc">{item.desc}</div>
              </div>
              <div className="snacks-card-footer">
                <div className="snacks-price">{item.price}</div>
                <button className="snacks-add-btn">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snacks;
