import React, {useState } from "react";
import './index.css';
import download_icon from './../../assets/icon/download.svg';
import pdf1 from './../../assets/pdfs/pdf_subid_1.pdf';
import pdf2 from './../../assets/pdfs/pdf_subid_2.pdf';
import pdf3 from './../../assets/pdfs/pdf_subid_3.pdf';
import Java from './../../assets/pdfs/JAVA_dsacamp.pdf';
import Python from './../../assets/pdfs/PYTHON_dsacamp.pdf';
import pdf6 from './../../assets/pdfs/pdf_subid_6.pdf';
import pdf7 from './../../assets/pdfs/pdf_subid_7.pdf';
import pdf8 from './../../assets/pdfs/pdf_subid_8.pdf';
import pdf9 from './../../assets/pdfs/pdf_subid_9.pdf';



const notesCardEach = ({ items }) => {
  return (
    <div className="notes__card__section">
      {items.map((item) => {
        const [view,setView]=useState();
        const { id, title, img, desc } = item;
        function handlePdfView(x)
        {
          var li=[pdf1,pdf2,pdf3,Java,Python,pdf6,pdf7,pdf8,pdf9];
          setView(li[x-1]);
        }
        return (
            <div key={id} className="notes__card__item">
              <img src={img} alt={title} className="notes__card__photo" />
              <div className="notes__card__info">
                <div className="notes__card__titlee">{title}</div>
                <p className="notes__card__text">{desc}</p>
                <div className="notes__card__button">
                  <a href={view} target="_black" className="notes__card__download__button" onClick={()=>{handlePdfView(id)}}>
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