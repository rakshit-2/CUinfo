import React from "react";
import './index.css';
import items from "./../../assets/store/notesCardData";
import notes_img1 from './../../assets/images/notesImage/notes img1.svg'
// import CatogaryFile from './../../atoms/notesCatogaryEach/index';
import Card from './../../atoms/notesCardEach/index';

// const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Notes=()=> {
  
  // const [cardItems, setCardItems] = useState(items);
  // const [activeCategory, setActiveCategory] = useState("");
  // const [categories, setCategories] = useState(allCategories);
  // const [notesDisplay, setNotesDisplay] = useState({page:"block",filter:"none"});

  // const changeFilterDisplayFunc=(x)=>{
  //   if(x===1)
  //   {
  //     setNotesDisplay({page:"none",filter:"block"});
  //   }
  //   else
  //   {
  //     setNotesDisplay({page:"block",filter:"none"});
  //   }
    
  // }
  
  // const filterItems = (x) => {
  //   changeFilterDisplayFunc(0);
  //   setActiveCategory(x);
  //   if (x==="all") {
  //     setCardItems(items);
  //     // return;
  //   }
  //   const newItems = items.filter((item) => item.category === x);
  //   setCardItems(newItems);
  // };


  return (
    <>
    <div className="notes__outer__outer" >
      <div className="notes__outer">
        <div className="notes__section1">
          <img src={notes_img1} className="notes_img" alt=""/>
        </div>
        <div className="notes__heading">
          Notes
        </div>
        {/* <div className="notes__catogary__outer">
          <CatogaryFile
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
            changeFilterDisplayFunc={changeFilterDisplayFunc}
          />
        </div> */}
        <div className="notes__card__outer">
          <Card items={items} />
        </div>
      </div>
    </div>

    {/* <div className="notes__filter__modale__outer" style={{display:notesDisplay.filter}}>
      <div className="notes__filter__modale__inner">
        <div className="notes__filter__close" onClick={()=>{changeFilterDisplayFunc(0)}}>
          Close
        </div>
          {categories.map((category, index) => {
            return (
              <button
                type="button"
                className={`${
                  activeCategory === category ? "notes__filter__btn__mobile notes__active__mobile" : "notes__filter__btn__mobile"
                }`}
                key={index}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            );
          })}
      </div>
    </div> */}
    </>
  );
}

export default Notes;