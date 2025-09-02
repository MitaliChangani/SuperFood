import React from "react";
import { useNavigate } from "react-router-dom";
import "./C1.css";

// Import your images
import indianImg from "./Indian.jpg";
import chineseImg from "./Chinese.jpg";
import americanImg from "./American.jpg";
import italianImg from "./Italian.jpg";
import thaiImg from "./Thai.jpg";
import japaneseImg from "./Japanese.jpg";
import snacksImg from "./Snacks.jpg";
import mexicanImg from "./Mexican.jpg";

const C1 = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Indian", img: indianImg, path: "/indian" },
    { name: "Chinese", img: chineseImg, path: "/chinese" },
    { name: "American", img: americanImg, path: "/american" },
    { name: "Italian", img: italianImg, path: "/italian" },
    { name: "Thai", img: thaiImg, path: "/thai" },
    { name: "Japanese", img: japaneseImg, path: "/japanese" },
    { name: "Snacks", img: snacksImg, path: "/snacks" },
    { name: "Mexican", img: mexicanImg, path: "/mexican" }
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="categories-container">
      <h2 className="title">Food Categories</h2>
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.img} alt={cat.name} className="category-image" />
            <button
              className="category-button"
              onClick={() => handleNavigate(cat.path)}
            >
              {cat.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default C1;
