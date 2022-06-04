import './index.css';


const  EventCardEach=(props)=> {
  return (
    <>
    <div className="event__card__inner">
        <div className="event__card__heading">
            <div className="event__card__heading__no">
                {props.all.id}
            </div>
            <div className="event__card__heading__topic">
                {props.all.topic}
            </div>
            <div className="event__card__heading__date">
                {props.all.date}
            </div>
        </div>
        <div className="event__card__text">
            {props.all.text}
        </div>
    </div>
    </>
  );
}

export default EventCardEach;