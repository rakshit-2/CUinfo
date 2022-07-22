import React from "react";
import './index.css';
import { useEffect,useState } from "react";
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
    var hour=parseInt(props.hour,10);
    var min=parseInt(props.min, 10);
    var period=-1;

    if((hour>=9 && hour<=9) && (min>=0 && min<=49))
    {
        period=1;
    }
    else if((hour>=9 && hour<=10) && ((min>=50 && min<=60)||(min>=0 && min<=39)))
    {
        period=2;
    }
    else if((hour>=10 && hour<=11) && ((min>=40 && min<=60)||(min>=0 && min<=30)))
    {
        period=3;
    }
    else if((hour>=11 && hour<=12) && ((min>=30 && min<=60)||(min>=0 && min<=19)))
    {
        period=4;
    }
    else if((hour>=12 && hour<=13) && ((min>=20 && min<=60)||(min>=0 && min<=9)))
    {
        period=5;
    }
    else if((hour>=13 && hour<=14) && ((min>=10 && min<=60)))
    {
        period=6;
    }
    else if((hour>=14 && hour<=14) && ((min>=0 && min<=50)))
    {
        period=7;
    }
    else if((hour>=14 && hour<=15) && ((min>=50 && min<=60)||(min>=0 && min<=39)))
    {
        period=8;
    }
    else if((hour>=15 && hour<=16) && ((min>=40 && min<=60)||(min>=0 && min<=30)))
    {
        period=9;
    }
    
    if(period===-1)
    {
      return [<div className="Eclass__modale">
      No Class Empty!!
    </div>];
    }
    var lis=items[day][period];
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
            Lecture:{'\u00A0'}<span style={{color:"#C1576A",fontSize:"20px"}}> {props.pp}</span>
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