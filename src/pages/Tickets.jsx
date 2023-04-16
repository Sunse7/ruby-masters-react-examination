import { useContext } from 'react';
import styles from './Tickets.module.css';
import { EventContext } from '../App';
import TicketCounter from '../Components/TicketCounter';
import TicketCard from '../Components/TicketCard';

function Tickets() {
    const [cartList] = useContext(EventContext);

    return ( 
        <section>
            <h2 className={styles.ticketHeader}>{cartList.map((cartItem, i) => (<p key={i}>{cartItem.name}</p>))}</h2>
            <TicketCard />
            
        </section>
     );
}

export default Tickets;