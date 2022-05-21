import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const  HomeCardEach=(props)=> {

  const navigate = useNavigate();


  function handleClickCard(x)
  {
    switch(x) {
      case 0:
        console.log("notes");
        navigate("/notes");
        break;
      case 1:
        console.log("dsa");
        navigate("/dsa");
        break;
      case 2:
        console.log("event-notice");
        navigate("/event-notice");
        break;
      case 3:
        console.log("youtube");
        navigate("/youtube");
        break;
      default:
        console.log("oh")
    }
  }
  return (
    <>
    
      <div className="card" onClick={()=>{handleClickCard(props.index)}}>
        <div className="upper__container">
          <div className="img__container">
            <img className='card__img' src={props.img} alt=""/>
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