import './index.css';


const  homeSectionFeedback=()=> {
  return (
    <>
      <div className="feedback__section">
        <div className="suggestion">
          <h1 className="suggestion__heading">What do you want us to provide you with? </h1>
          <form action="">
            <label className="suggestion__label">Provide me with:</label>
            <textarea className="suggestion__textarea" cols="30" rows="10" required></textarea>
            <button className='suggestion__button'>Send Message</button>
          </form>
        </div>
        <div className="create">       
            <h2 className='feedback__heading'>Your Feedback will help us improve a lot</h2>
            <form action="">
              <label className='label__email'>Email:</label>
              <input type="email" name='email' required />
              <label className='label__feedback'>Give your Feedback:</label>
              <textarea name="feedback" cols="30" rows="10" required></textarea>
              <button className='feedback__button'>Send Feedback</button>
            </form>
          </div>
      </div>

    </>
  );
}

export default homeSectionFeedback;