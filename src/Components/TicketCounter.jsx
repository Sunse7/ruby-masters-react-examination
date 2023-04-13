import { useState } from 'react';
import styles from './TicketCounter.module.css';

function TicketCounter({action, action2, totalSum, ticketAmount}) {


    return ( 
        <section className={styles.ticketWrapper}>
            <section className={styles.ticketCounter}>
                <h3 className={styles.total}>{totalSum} sek</h3>
                <button className={styles.minus} onClick={action}>-</button>
                <p className={styles.amount}>{ticketAmount}</p>
                <button className={styles.plus} onClick={action2}>+</button>
            </section>
        </section>
     );
}

export default TicketCounter;