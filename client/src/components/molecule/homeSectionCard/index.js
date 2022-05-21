import './index.css';
import HomeCardEach from '../../atoms/homeCardEach';
import notes_image from './../../assets/images/notes logo.png';
import dsa_img from './../../assets/images/dsa logo.png';
import event_logo from './../../assets/images/event logo.png';
import youtube_logo from './../../assets/images/youtube logo.png';

const  HomeSectionCards=()=> {

  function cardDisplay()
  {
    var li=[];
    var name=["Notes","DSA","Event/Notice","Youtube"];
    var image=[notes_image,dsa_img,event_logo,youtube_logo];
    var info=["Subject notes, handwritten 100% cho covered Subject notes, handwritten 100% cho covered",
    "Subject notes, handwritten 100% cho covered Subject notes, handwritten 100% cho covered",
    "Subject notes, handwritten 100% cho covered Subject notes, handwritten 100% cho covered",
    "Subject notes, handwritten 100% cho covered Subject notes, handwritten 100% cho covered"];
    for(var i=0;i<4;i++)
    {
      li.push(<HomeCardEach name={name[i]} img={image[i]} info={info[i]} index={i}/>)
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