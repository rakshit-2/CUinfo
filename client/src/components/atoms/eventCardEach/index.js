import './index.css';


const  EventCardEach=(props)=> {
  return (
    <>
    <div className="event__card__inner">
        <div className="event__card__heading">
            <div className="event__card__heading__no">
                {props.all.event_id}
            </div>
            <div className="event__card__heading__topic">
                {props.all.event_topic}
            </div>
            <div className="event__card__heading__date">
                {props.all.event_date}
            </div>
        </div>
        <div className="event__card__text">
            {props.all.event_text}
        </div>
    </div>
    </>
  );
}

export default EventCardEach;