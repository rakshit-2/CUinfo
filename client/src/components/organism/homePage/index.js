import './index.css';
import { useState } from 'react';
import HomeSectionCards from "./../../molecule/homeSectionCard/index";
import HomeSectionDisplay from "./../../molecule/homeSectionDisplay/index";
import HomeSectionFeedback from "./../../molecule/homeSectionFeedback/index";
import HomeSectionNavbar from "./../../molecule/homeSectionNavbar/index";
import Axios from "axios";


const  HomePage=()=> {

  const[adminLoggedIn,setAdminLoggedIn]=useState("out");
  const[adminDisplay,setAdminDisplay]=useState({
                                              admin:"none",
                                              home:"block",
  });
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[pass,setPass]=useState("");

  function adminClicked(click)
  {
    if(click===1)
    {
      setAdminDisplay({admin:"block",home:"none"});
    }
    else{
      setAdminDisplay({admin:"none",home:"block"});
    }
  }
  function loginClicked()
  {
    Axios.get('http://localhost:3001/adminInfo',
    {
      params:{
        name:name,
        email:email,
        pass:pass,
      }
    }).then((res)=>{
      if(res.data.length===0)
      {
        setAdminLoggedIn("out");
      }
      else
      {
        setAdminLoggedIn("in");
        setAdminDisplay({admin:"none",home:"block"});
      }
    });
  }
  console.log(adminLoggedIn)
  return (
    <>
      <div className='home__page__outer' style={{display:adminDisplay.home}}>
        <HomeSectionNavbar adminClicked={adminClicked}/>
        <br></br>
        <HomeSectionDisplay/>
        <br></br>
        <HomeSectionCards/>
        <br></br>
        <HomeSectionFeedback/>
      </div>
      <div className='admin__login__outer' style={{display:adminDisplay.admin}}>
        <div className='admin__login__inner'>
          <div className='admin__login__inner__card'>
            <div className='admin__heading'>
              ADMIN LOGIN
            </div>
            <div className='admin__text'>
              Name : 
            </div>
            <input typr="text" className='admin__text__input' onChange={(e)=>{setName(e.target.value)}}/>
            <div className='admin__text'>
              Email : 
            </div>
            <input typr="email" className='admin__text__input' onChange={(e)=>{setEmail(e.target.value)}}/>
            <div className='admin__text'>
              Password : 
            </div>
            <input typr="password" className='admin__text__input' onChange={(e)=>{setPass(e.target.value)}}/>
            <div className='admin__submit'>
              <div className='admin__submit__button' onClick={()=>{loginClicked()}}>
                Login
              </div>
            </div>
          </div>
          <div className='admin__home__button' onClick={()=>{adminClicked(0)}}>
            HOME
          </div>
        </div>
      </div>

    </>
  );
}

export default HomePage;