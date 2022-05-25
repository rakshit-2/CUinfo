import './index.css';
import HomeCardEach from '../../atoms/homeCardEach';
import items from "./../../assets/store/homeCardData";

const  HomeSectionCards=()=> {

  function cardDisplay()
  {
    var li=[];
    for(var i=0;i<4;i++)
    {
      li.push(<HomeCardEach name={items[i].name} img={items[i].image} info={items[i].info} index={i}/>)
    }
    return li;
  }


  return (
    <>
    <h1 className='card__heading'>Services Provided By CUinfo</h1>
    <div className="card__section">
      {cardDisplay()}
    </div>
    </>
  );
}

export default HomeSectionCards;