import './index.css';
import logo from "../../assets/images/info_img.png"



const  HomeSectionDisplay=()=> {
  function getStartedClicked(){
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: 'smooth'
    });
  }
  return (
    <>  
      <div className="outer__container">
        <div className="inner__container__1">
          <div className="info">
            <div className="info__title">Notes<br/> From CUinfo</div>
            <p className="info__desc">These notes are created by one and only Rakshit sharma with extraordiary efforts</p>
            <div onClick={()=>{getStartedClicked()}} className="info__button">Get started</div>
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