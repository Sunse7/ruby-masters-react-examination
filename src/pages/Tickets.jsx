import { useContext } from 'react';
import styles from './Tickets.module.css';
import { EventContext } from '../App';
import TicketCard from '../Components/TicketCard';

function Tickets() {
    const [cartList] = useContext(EventContext);
    console.log(cartList)


    function renderTickets(cartItem) {
        if (cartItem.ticketAmount > 0){
            return <TicketCard cartItem={cartItem} />
        }
    }

    return ( 
        <section className={styles.ticketContainer}>
            <h2 className={styles.ticketHeader}>
                {cartList.map((cartItem) => {
                    renderTickets(cartItem)
                })
            }</h2>
            
        </section>
     );
}

export default Tickets;