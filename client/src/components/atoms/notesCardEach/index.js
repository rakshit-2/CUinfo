import React from "react";
import './index.css';

const notesCardEach = ({ items }) => {
  return (
    <div className="notes__card__section">
      {items.map((item) => {
        const { id, title, img, desc } = item;
        return (
          <div key={id} className="notes__card__item">
            <img src={img} alt={title} className="notes__card__photo" />
            <div className="notes__card__info">
              <header>
                <h4 className="notes__card__title">{title}</h4>
              </header>
              <p className="notes__card__text">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default notesCardEach;