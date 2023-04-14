import { useState } from 'react';
import styles from './TicketCounter.module.css';

function TicketCounter({action, action2, totalSum, ticketAmount, name, when}) {

    return ( 
        <section className={styles.ticketWrapper}>
            <section className={styles.ticketCounter}>
                <h4 className={styles.name}>{name}</h4>
                {
                    when ? <p className={styles.date}>{when.date} {when.from} - {when.to}</p> :
                    <h3 className={styles.total}>{totalSum} sek</h3>
                }
                <button className={styles.minus} onClick={action}>-</button>
                <p className={styles.amount}>{ticketAmount}</p>
                <button className={styles.plus} onClick={action2}>+</button>
            </section>
        </section>
     );
}

export default TicketCounter;