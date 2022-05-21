import './index.css';
import feedback1 from './../../assets/images/feedback1.svg';
import feedback2 from './../../assets/images/feedback2.svg';

const  homeSectionFeedback=()=> {
  return (
    <>
      <div className="feedback__section">
        <div className="feedback__section__suggestion">
          <div className="suggestion">
            <div className="suggestion__heading">What do you want us to provide you with? </div>
            <form action="">
              <label className="suggestion__label">Provide me with:</label>
              <textarea className="suggestion__textarea" required></textarea>
              <button className='suggestion__button'>Send Message</button>
            </form>
          </div>
          <div className="feedback__section__image">
            <img src={feedback2} className="feedback_img"/>
          </div>
        </div>
        
        <div className="feedback__section__create">
          <div className="feedback__section__image">
            <img src={feedback1} className="feedback_img"/>
          </div>
          <div className="create">       
            <div className='feedback__heading'>Your Feedback will help us improve a lot</div>
            <form action="">
              <label className='label__email'>Email:</label>
              <input type="email" name='email' required />
              <label className='label__feedback'>Give your Feedback:</label>
              <textarea name="feedback" required></textarea>
              <button className='feedback__button'>Send Feedback</button>
            </form>
          </div>
        </div>
        
      </div>

    </>
  );
}

export default homeSectionFeedback;