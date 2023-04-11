import { useLocation } from "react-router-dom";

function EventDetails() {
  const location = useLocation();
  const upComingEvent = location.state.upComingEvent;
  const {name, when, where, price} = upComingEvent;

  return (
    <>
      <h2>EventDetails</h2>
        <h3>You are about to score some tickets to</h3>
      {upComingEvent ? (
        <>
          <h2>{name}</h2>
          <h4>{when.date} {when.from} - {when.to}</h4>
            <p>{where}</p>
        </>
      ) : <h2>Something went wrong...</h2>}
    </>
  );
}

export default EventDetails;
