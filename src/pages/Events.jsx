import { useContext, useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import styles from "./Events.module.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { EventContext } from "../App";

function Events() {
  const API_URL = "https://majazocom.github.io/Data/events.json";
  const [cartList, setCartList, upComingEvents, setUpComingEvents] = useContext(EventContext);

  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUpComingEvents(data.events))
      .catch((err) => console.log(err));
  }, []);

  function handleChange(e) {
    setSearchInput(e.target.value);

    // Får upp i loggen efter 2:a bokstaven - fixa
    if (searchInput.length > 0) {
      upComingEvents.filter((upComingEvent) => {
        return console.log(upComingEvent.name.match(searchInput));
        // return upComingEvent.name.match(searchInput);
      });
    }
  }

  // Vi använder inte searchbar-komponenten? Ta bort eller ändra här?

  return (
    <>
      <h2 className={styles.eventText}>Events</h2>
      <input
        onChange={handleChange}
        value={searchInput}
        className={styles.eventInput}
        placeholder='Sök event'
      />
      {/* <SearchBar action={handleChange} value={searchInput} /> */}
      {upComingEvents && upComingEvents.map((upComingEvent, i) => (
        <EventCard
          key={i}
          upComingEvent={upComingEvent}
          cartList={cartList}
          action={() => navigate("/details")}
        />
      ))}
    </>
  );
}

export default Events;
