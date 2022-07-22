import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {useState } from 'react';
import HomePage from "./components/organism/homePage/index";
import Notes from "./components/organism/notes/index";
import Event from "./components/organism/event/index";
import Dsa from "./components/organism/dsa/index";
import Youtube from "./components/organism/youtube/index";
import Eclass from "./components/organism/Eclass/index";






const App =()=> {

  const[adminLoggedIn,setAdminLoggedIn]=useState("none");
  const[loading,setLoading]=useState(false);
  const d = new Date();
  var day=d.getDay();
  var hour=d.getHours();
  var min=d.getMinutes();

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
    period="No class Empty";
  }

  function changeLoading()
  {
    setLoading(true);
  }

  function changeLoadingFalse()
  {
    setLoading(false);
  }

  function adminControl(x)
  {
    if(x===1)
    {
      setAdminLoggedIn("block");
    }
    else
    {
      setAdminLoggedIn("none");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage adminControl={adminControl} changeLoading={changeLoading}/>} ></Route>
        </Routes>
        <Routes>
          <Route path="/notes" element={<Notes/>}></Route>
        </Routes>
        <Routes>
          <Route path="/dsa" element={<Dsa />}></Route>
        </Routes>
        <Routes>
          <Route path="/event-notice" element={<Event adminLoggedIn={adminLoggedIn} changeLoadingFalse={changeLoadingFalse} loading={loading} /> } ></Route>
        </Routes>
        <Routes>
          <Route path="/youtube" element={<Youtube />}></Route>
        </Routes>
        <Routes>
          <Route path="/EmptyClass" element={<Eclass day={day} hour={hour} min={min} pp={period}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
