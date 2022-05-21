import './index.css';
import HomeCardEach from '../../atoms/homeCardEach';
import notes_image from './../../assets/images/notes.png';
import info_img from './../../assets/images/info_img.png';



const  HomeSectionCards=()=> {

  function cardDisplay()
  {
    var li=[];
    var name=["Notes","DSA","Event/Notice","Youtube"];
    var image=[notes_image,info_img,info_img,info_img];
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