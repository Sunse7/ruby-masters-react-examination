import { createContext, useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import styles from './Events.module.css';

export const EventContext = createContext();

function Events() {
    const API_URL = 'https://majazocom.github.io/Data/events.json';
    
    const [upComingEvents, setUpComingEvents] = useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setUpComingEvents(data.events))
        .catch(err => console.log(err));
    }, []);


    console.log(upComingEvents);

    return ( 
        <EventContext.Provider value={[upComingEvents, setUpComingEvents]}>
            <h2>Events</h2>
            {
                upComingEvents.map((upComingEvent, i) => <EventCard key={i} upComingEvent={upComingEvent} />)
            }
        </EventContext.Provider>
     );
}

export default Events;