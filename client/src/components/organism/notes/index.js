import React, { useState } from "react";
import './index.css';
import items from "./../../assets/store/notesCardData";
import notes_img1 from './../../assets/images/notesImage/notes img1.svg'
import Catogary from './../../atoms/notesCatogaryEach/index';
import Card from './../../atoms/notesCardEach/index';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const  Notes=()=> {
  
  const [cardItems, setCardItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const [filterDisplay, setFilterDisplay] = useState("none");
  const [notesDisplay, setNotesDisplay] = useState("block");


  const changeFilterDisplayFunc=(props)=>{
    if(props===1)
    {
      setFilterDisplay("block");
      setNotesDisplay("none");
    }
    else
    {
      setFilterDisplay("none");
      setNotesDisplay("block");
    }
    
  }

  const filterItems = (category) => {
    changeFilterDisplayFunc(0);
    setActiveCategory(category);
    if (category === "all") {
      setCardItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setCardItems(newItems);
  };


  return (
    <>
    <div className="notes__outer__outer" style={{display:notesDisplay}}>
      <div className="notes__outer">
        <div className="notes__section1">
          <img src={notes_img1} className="notes_img"/>
        </div>
        <div className="notes__heading">
          Notes
        </div>
        <div className="notes__catogary__outer">
          <Catogary
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
            filterDisplay={filterDisplay}
            changeFilterDisplayFunc={changeFilterDisplayFunc}
          />
        </div>
        <div className="notes__card__outer">
          <Card items={cardItems} />
        </div>
      </div>
    </div>

    <div className="notes__filter__modale__outer" style={{display:filterDisplay}}>
      <div className="notes__filter__modale__inner">
        <div className="notes__filter__close" onClick={()=>{changeFilterDisplayFunc(0)}}>
            Close
          </div>
          {categories.map((categories, index) => {
            return (
              <button
                type="button"
                className={`${
                  activeCategory === categories ? "notes__filter__btn__mobile notes__active__mobile" : "notes__filter__btn__mobile"
                }`}
                key={index}
                onClick={() => filterItems(categories)}
              >
                {categories}
              </button>
            );
          })}
      </div>
    </div>
    </>
  );
}

export default Notes;