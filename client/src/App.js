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






const App =()=> {

  const[adminLoggedIn,setAdminLoggedIn]=useState("none");
  const[loading,setLoading]=useState(false);



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
      </BrowserRouter>
    </>
  );
}

export default App;
