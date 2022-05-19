import './index.css';
import HomeSectionCards from "./../../molecule/homeSectionCard/index"
import HomeSectionDisplay from "./../../molecule/homeSectionDisplay/index"
import HomeSectionFeedback from "./../../molecule/homeSectionFeedback/index"


const  HomePage=()=> {
  return (
    <>
      <HomeSectionDisplay/>
      <br></br>
      <HomeSectionCards/>
      <br></br>
      <HomeSectionFeedback/>

    </>
  );
}

export default HomePage;