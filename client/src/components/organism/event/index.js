import './index.css';
import event_img1 from './../../assets/images/eventImage/event img1.svg';
import EventCardEach from './../../atoms/eventCardEach/index';
import Axios from 'axios';
import {useState,useEffect} from 'react';




const  Event=()=> {

  const [all,setAll]=useState()


  useEffect(() => {
    Axios.get('http://localhost:3001/eventAll',
    {
      name:"eventAll",
    }).then((res)=>{
      setAll(res.data);
    });
  }, []);
  

  function displayCard()
  {
    var li=[];
    for(var i in all)
    {
      li.push(<EventCardEach all={all[i]}/>)
    }
    return li;
  }

  return (
    <>
      <div className="event__outer__outer" >
        <div className="event__outer">
          <div className="event__section1">
            <img src={event_img1} className="event_img" alt=""/>
          </div>
          <div className="event__heading__mobile">
            Event's
          </div>
          <div className="event__heading">
            Event/Notice
          </div>
          <div className="event__card__outer">
            {displayCard()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;