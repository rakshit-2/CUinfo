import React, {useState } from "react";
import './index.css';
import download_icon from './../../assets/icon/download.svg';



const notesCardEach = ({ items }) => {
  return (
    <div className="notes__card__section">
      {items.map((item) => {
        const [val,setVal]=useState("");
        const { id, title, img, desc } = item;
        function handlePdf(x)
        {
          setVal("http://localhost:3001/pdf"+String(x));
        }
        return (
            <div key={id} className="notes__card__item">
              <img src={img} alt={title} className="notes__card__photo" />
              <div className="notes__card__info">
                <header>
                  <h4 className="notes__card__title">{title}</h4>
                </header>
                <p className="notes__card__text">{desc}</p>
                <div className="notes__card__button">
                  <a href={val} className="notes__card__download__button" onClick={()=>{handlePdf(id)}}>
                    <img src={download_icon} className="notes__download" alt=""/>{'\u00A0'}Download PDF
                  </a>
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default notesCardEach;