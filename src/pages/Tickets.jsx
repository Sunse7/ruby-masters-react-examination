import { useContext } from 'react';
import styles from './Tickets.module.css';
import { EventContext } from '../App';
import TicketCard from '../Components/TicketCard';

function Tickets() {
    const [cartList] = useContext(EventContext);
    console.log(cartList)
    
    return ( 
        <section className={styles.ticketContainer}>
            <h2 className={styles.ticketHeader}></h2>
            {cartList.map((cartItem, i) => 
             <TicketCard key={i} cartItem={cartItem} />)
            }
                
        </section>
     );
}

export default Tickets;