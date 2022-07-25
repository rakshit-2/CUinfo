import React from "react";
import './index.css';
import { useEffect } from "react";
import items from "./../../assets/store/EmptyClassData";
import EclassCardEach from './../../atoms/EclassCardEach/index';
import notes_img1 from './../../assets/images/notesImage/notes img11.svg';

const Eclass=(props)=> {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function sectionDisplay()
  {
    var day=parseInt(props.day,10);
    
    if(props.pp===-1)
    {
      return [<div className="Eclass__modale">
      No Class Empty!!
    </div>];
    }
    var lis=items[day][props.pp];
    console.log(lis)
    if(lis[0]===-1)
    {
      return [<div className="Eclass__modale">
      No Class Empty!!
    </div>];
    }
    else{
      // setLecture(period);
      var li=[];
      for(var i=0;i<lis.length;i++)
      {
        li.push(<EclassCardEach key={i} ele={lis[i]}/>)
      }
      return li;
    }
    
  }
  return (
    <>
    <div className="Eclass__outer__outer" >
      <div className="Eclass__outer">
        <div className="Eclass__section1">
          <img src={notes_img1} className="Eclass_img" alt=""/>
        </div>
        <div className="Eclass__heading">
          EmptyClass(Turing)
        </div>
        <div className="Eclass__heading__mobile">
            Empty Class
        </div>
        <div className="Eclass__heading2">
            Empty Classes in Turing Block, Chitkara University, Punjab
        </div>
        <div className="Eclass__heading2" style={{fontWeight:'600'}}>
            Lecture No. :{'\u00A0'}<span style={{color:"#C1576A",fontSize:"20px"}}> {props.pp}</span>
        </div>
        <div className="Eclass__heading2" style={{fontWeight:'600',height:"1rem",marginBottom:"10px"}}>
            Time:{'\u00A0'}<span style={{color:"#C1576A",fontSize:"20px"}}>{props.hour}:{props.min}</span>{'\u00A0'}(RELOAD For latest results)
        </div>
        <div className="Eclass__card__outer">
          <div className="Eclass__card__inner">
            {sectionDisplay()}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Eclass;