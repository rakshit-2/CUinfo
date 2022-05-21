import React, {useState} from 'react'
import './index.css';
import Image1 from '../../assets/images/info_img.png'

const  HomeCardEach=(props)=> {

  function handleClick(x)
  {
    switch(x) {
      case 0:
        console.log("notes");
        break;
      case 1:
        console.log("dsa")
        break;
      case 2:
        console.log("event/notice")
        break;
      case 3:
        console.log("youtube")
        break;
      default:
        console.log("oh")
    }
  }
  return (
    <>
      <div className="card" onClick={()=>{handleClick(props.index)}}>
        <div className="upper__container">
          <div className="img__container">
            <img className='card__img' src={props.img} alt="" height="100px" width="100px" />
          </div>
        </div>
        <div className="lower__container">
          <h4 className='lower__h4'>{props.name}</h4>
          <p className='lower__p'>{props.info}</p>
        </div>
      </div>
    </>
  );
}

export default HomeCardEach;