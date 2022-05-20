import React, {useState} from 'react'
import './index.css';
import Image1 from '../../assets/images/info_img.png'

const  HomeCardEach=()=> {

  const [category, setCategory] = useState('category');
  const [title, setTitle] = useState('Title');
  const [about, setAbout] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');

  return (
    <>
      <h1 className='heading'>Services Provided By Rakshit Sharma</h1>
      <div className="card__section">

        <div className="card">
          <div className="upper__container">
            <div className="img__container">
              <img className='card__img' src={Image1} alt="" height="100px" width="100px" />
            </div>
          </div>
          <div className="lower__container">
            <h3>{category}</h3>
            <h4>{title}</h4>
            <p>{about}</p>
            <button>View</button>
          </div>
        </div>


        <div className="card">
          <div className="upper__container">
            <div className="img__container">
              <img className='card__img' src={Image1} alt="" height="100px" width="100px" />
            </div>
          </div>
          <div className="lower__container">
            <h3>{category}</h3>
            <h4>{title}</h4>
            <p>{about}</p>
            <button>View</button>
          </div>
        </div>


        <div className="card">
          <div className="upper__container">
            <div className="img__container">
              <img className='card__img' src={Image1} alt="" height="100px" width="100px" />
            </div>
          </div>
          <div className="lower__container">
            <h3>{category}</h3>
            <h4>{title}</h4>
            <p>{about}</p>
            <button>View</button>
          </div>
        </div>


        <div className="card">
          <div className="upper__container">
            <div className="img__container">
              <img className='card__img' src={Image1} alt="" height="100px" width="100px" />
            </div>
          </div>
          <div className="lower__container">
            <h3>{category}</h3>
            <h4>{title}</h4>
            <p>{about}</p>
            <button>View</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCardEach;