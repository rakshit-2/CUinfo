import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/organism/homePage/index";
import Notes from "./components/organism/notes/index";
import Event from "./components/organism/event/index";
import Dsa from "./components/organism/dsa/index";
import Youtube from "./components/organism/youtube/index";






const App =()=> {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Routes>
          <Route path="/notes" element={<Notes />}></Route>
        </Routes>
        <Routes>
          <Route path="/dsa" element={<Dsa />}></Route>
        </Routes>
        <Routes>
          <Route path="/event-notice" element={<Event />}></Route>
        </Routes>
        <Routes>
          <Route path="/youtube" element={<Youtube />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
