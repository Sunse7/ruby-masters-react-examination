import { useContext } from 'react';
import styles from './Tickets.module.css';
import { EventContext } from '../App';
import TicketCounter from '../Components/TicketCounter';
import TicketCard from '../Components/TicketCard';

function Tickets() {
    const [cartList] = useContext(EventContext);

    return ( 
        <section className={styles.ticketContainer}>
            <h2 className={styles.ticketHeader}>{cartList.map((cartItem, i) => <TicketCard key={i} cartItem={cartItem}  />)}</h2>
            
        </section>
     );
}

export default Tickets;