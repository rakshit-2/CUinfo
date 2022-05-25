import React from "react";
import './index.css';




const catogaryEach = ({ categories, filterItems, activeCategory }) => {
  return (
    <div className="notes__category__container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default catogaryEach;