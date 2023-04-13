import { createContext, useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import styles from './Events.module.css';
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";

export const EventContext = createContext([]);

function Events() {
    const API_URL = 'https://majazocom.github.io/Data/events.json';
    const [cartList, setCartList] = useState([]);
    
    const [upComingEvents, setUpComingEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setUpComingEvents(data.events))
        .catch(err => console.log(err));
    }, []);

    console.log(cartList);

    return ( 
        <EventContext.Provider value={[upComingEvents, setUpComingEvents, cartList, setCartList]}>
            <h2>Events</h2>
            <SearchBar />
            {
                upComingEvents.map((upComingEvent, i) => <EventCard key={i} upComingEvent={upComingEvent} cartList={cartList} action={() => navigate('/details')} />)
            }
        </EventContext.Provider>
     );
}

export default Events;