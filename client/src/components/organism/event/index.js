import './index.css';
import event_img1 from './../../assets/images/eventImage/event img1.svg';
import EventCardEach from './../../atoms/eventCardEach/index';
import Axios from 'axios';
import {useState,useEffect} from 'react';




const  Event=()=> {

  const [all,setAll]=useState()
  const [displayFilter,setDisplayFilter]=useState({
                                              section:"none",
                                              onButton:"block",
                                              closeButton:"none"
  })
  const [whichDisplay,setWhichDisplay]=useState("all");
  const [accendingDateRes,setAccendingDateRes]=useState()
  const [decendingDateRes,setDecendingDateRes]=useState()
  const [accendingSNoRes,setAccendingSNoRes]=useState()
  const [decendingSNoRes,setDecendingSNoRes]=useState()

  useEffect(() => {
    Axios.get('http://localhost:3001/eventAll',
    {
      name:"eventAll",
    }).then((res)=>{
      console.log(res.data)
      setAll(res.data);
    });
  }, []);
  

  function displayCard()
  {
    var li=[];
    var i;
    if(whichDisplay==="all")
    {
      li=[];
      for(i in all)
      {
        li.push(<EventCardEach all={all[i]}/>)
      }
      li.reverse();
      return li;
    }
    else if(whichDisplay==="dateAccending")
    {
      li=[];
      for(i in accendingDateRes)
      {
        li.push(<EventCardEach all={accendingDateRes[i]}/>)
      }
      return li;
    }
    else if(whichDisplay==="dateDecending")
    {
      li=[];
      for(i in decendingDateRes)
      {
        li.push(<EventCardEach all={decendingDateRes[i]}/>)
      }
      return li;
    }
    else if(whichDisplay==="SNoAccending")
    {
      li=[];
      for(i in accendingSNoRes)
      {
        li.push(<EventCardEach all={accendingSNoRes[i]}/>)
      }
      return li;
    }
    else if(whichDisplay==="SNoDecending")
    {
      li=[];
      for(i in decendingSNoRes)
      {
        li.push(<EventCardEach all={decendingSNoRes[i]}/>)
      }
      return li;
    }
  }

  function accendingDateFetch()
  {
    setWhichDisplay("dateAccending");
    setDisplayFilter({section:"none",onButton:"block",closeButton:"none"});
    Axios.get('http://localhost:3001/eventDate/accending',
    {
      name:"eventDateAccending",
    }).then((res)=>{
      setAccendingDateRes(res.data);
    });
  }

  function decendingDateFetch()
  {
    setWhichDisplay("dateDecending");
    setDisplayFilter({section:"none",onButton:"block",closeButton:"none"});
    Axios.get('http://localhost:3001/eventDate/decending',
    {
      name:"eventDateDecending",
    }).then((res)=>{
      setDecendingDateRes(res.data);
    });
  }

  function accendingSNoFetch()
  {
    setWhichDisplay("SNoAccending");
    setDisplayFilter({section:"none",onButton:"block",closeButton:"none"});
    Axios.get('http://localhost:3001/eventSNo/accending',
    {
      name:"eventSNoAccending",
    }).then((res)=>{
      setAccendingSNoRes(res.data);
    });
  }

  function decendingSNoFetch()
  {
    setWhichDisplay("SNoDecending");
    setDisplayFilter({section:"none",onButton:"block",closeButton:"none"});
    Axios.get('http://localhost:3001/eventSNo/decending',
    {
      name:"eventSNoDecending",
    }).then((res)=>{
      setDecendingSNoRes(res.data);
    });
  }

  return (
    <>
      <div className="event__outer__outer" >
        <div className="event__outer">
          <div className="event__section1">
            <img src={event_img1} className="event_img" alt=""/>
          </div>
          <div className="event__heading">
            Event/Notice
          </div>
          <div className='event__filter'>
            <div className="event__filter__button" style={{display:displayFilter.onButton}} onClick={()=>{setDisplayFilter({section:"block",onButton:"none",closeButton:"block"})}}>
              <div className="event__filter__button__inner">
                Filter
              </div>
            </div>
            <div className="event__filter__button" style={{display:displayFilter.closeButton}} onClick={()=>{setDisplayFilter({section:"none",onButton:"block",closeButton:"none"})}}>
              <div className="event__filter__button__inner">
                Close
              </div>
            </div>
          </div>
          <div className='event__filter__display' style={{display:displayFilter.section}}>
          <div className='event__filter__display__inner'>
            <div className='event__filter__display__each'>
              <div className='event__filter__display__heading'>
                Sort Date : 
              </div>
              <div className='event__filter__display__button__outer'>
                <div className='event__filter__display__button' onClick={()=>{accendingDateFetch()}}>
                  Accending
                </div>
                <div className='event__filter__display__button' onClick={()=>{decendingDateFetch()}}>
                  Decending
                </div>
              </div>
            </div>

            <div className='event__filter__display__each'>
              <div className='event__filter__display__heading'>
                Sort SNo. : 
              </div>
              <div className='event__filter__display__button__outer'>
                <div className='event__filter__display__button' onClick={()=>{accendingSNoFetch()}} >
                  Accending
                </div>
                <div className='event__filter__display__button' onClick={()=>{decendingSNoFetch()}}>
                  Decending
                </div>
              </div>
            </div>
          </div>
            
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