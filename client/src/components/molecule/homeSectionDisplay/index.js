import './index.css';
import logo from "../../assets/images/info_img.png"



const  HomeSectionDisplay=()=> {
  return (
    <>  
      <div className="outer__container">
        <div className="inner__container__1">
          <div className="info">
            <div className="info__title">Notes<br/> From CUinfo</div>
            <p className="info__desc">These notes are created by one and only Rakshit sharma with extraordiary efforts</p>
            <a href="#homeSectionCard" className="info__button">Get started</a>
          </div>
        </div>
        <div className="inner__container__2">
          <img className="info__img" src={logo} alt="info_img" />
        </div>
      </div>
    </>
  );
}

export default HomeSectionDisplay;