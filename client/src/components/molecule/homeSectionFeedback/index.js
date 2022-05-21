import './index.css';
import emailjs from 'emailjs-com';
import feedback1 from './../../assets/images/feedback1.svg';
import feedback2 from './../../assets/images/feedback2.svg';

const  homeSectionFeedback=()=> 
{


  const sendEmailMessage = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gxw1i1n', 'template_56ak8if', e.target, 'm9zEe7gyayQtF5mLB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const sendEmailFeedback = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gxw1i1n', 'template_xwjzxm6', e.target, 'm9zEe7gyayQtF5mLB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>
      <div className="feedback__section">
        <div className="feedback__section__suggestion">
          <div className="suggestion">
            <div className="suggestion__heading">What do you want us to provide you with? </div>
            <form onSubmit={sendEmailMessage}>
              <label className="suggestion__label">Provide me with:</label>
              <textarea className="suggestion__textarea" name="message" required></textarea>
              <button type="submit" className='suggestion__button'>Send Message</button>
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
            <form onSubmit={sendEmailFeedback}>
              <label className='label__email'>Email:</label>
              <input type="email" name='email' required />
              <label className='label__feedback'>Give your Feedback:</label>
              <textarea name="feedback" required></textarea>
              <button type="submit" className='feedback__button'>Send Feedback</button>
            </form>
          </div>
        </div>
        
      </div>

    </>
  );
}

export default homeSectionFeedback;