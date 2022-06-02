import './index.css';
import dsa_img1 from './../../assets/images/dsaimage/dsa img10.svg';
import DsaSectionDisplay from './../../molecule/dsaSectionDisplay/index';


function sectionDisplay()
{
  
  var li=[];
  for(var i=0;i<4;i++)
  {
    li.push(<DsaSectionDisplay id={i}/>)
  }
  return li;
}
const  Dsa=()=> {
  return (
    <>
      <div className="dsa__outer__outer" >
        <div className="dsa__outer">
          <div className="dsa__section1">
            <img src={dsa_img1} className="dsa_img" alt=""/>
          </div>
          <div className="dsa__heading">
            Data Structure And Algorithms (DSA)
          </div>
          {sectionDisplay()}
        </div>
      </div>
    </>
  );
}

export default Dsa;