import React, { useState } from "react";
import './index.css';
import like from './../../assets/images/notesImage/like.png';
import unlike from './../../assets/images/notesImage/unlike.png';



const notesCardEach = ({ items }) => {
  return (
    <div className="notes__card__section">
      {items.map((item) => {
        const [val,setVal]=useState("");
        const { id, title, img, desc } = item;
        function handlePdf(x)
        {
          setVal("https://test-cuinfo.vercel.app/pdf"+String(x));
        }
        return (
          <a href={val} key={id} className="notes__card__item"  onClick={()=>{handlePdf(id)}}>
            <img src={img} alt={title} className="notes__card__photo" />
            <div className="notes__card__info">
              <header>
                <h4 className="notes__card__title">{title}</h4>
              </header>
              <p className="notes__card__text">{desc}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default notesCardEach;