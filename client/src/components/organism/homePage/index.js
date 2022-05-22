import './index.css';
import HomeSectionCards from "./../../molecule/homeSectionCard/index"
import HomeSectionDisplay from "./../../molecule/homeSectionDisplay/index"
import HomeSectionFeedback from "./../../molecule/homeSectionFeedback/index"
import HomeSectionNavbar from "./../../molecule/homeSectionNavbar/index"


const  HomePage=()=> {
  return (
    <>
      <div className='home__page__outer'>
        <HomeSectionNavbar/>
        <br></br>
        <HomeSectionDisplay/>
        <br></br>
        <HomeSectionCards/>
        <br></br>
        <HomeSectionFeedback/>
      </div>
      

    </>
  );
}

export default HomePage;