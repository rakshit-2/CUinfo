import './index.css';


const  EventCardEach=(props)=> {

    function eventCardText()
    {
        var li=[];
        var ele=(props.all.event_text).toString();
        var word="";
        var flag=0;
        for(var i=0;i<ele.length;i++)
        {
            if(ele[i]==="$")
            {
                li.push(<><p>{word}</p><br></br></>);
                word="";
            }
            else if(ele[i]==="%")
            {
                li.push(<><p>{word}</p></>);
                word="";
            }
            else
            {
                word=word+ele[i]
            }
        }
        li.push(word);
        return li;
    }
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
            {/* {props.all.event_text} */}
            {eventCardText()}
        </div>
    </div>
    </>
  );
}

export default EventCardEach;