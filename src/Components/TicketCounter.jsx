import { useState } from 'react';
import styles from './TicketCounter.module.css';

function TicketCounter({price}) {
    const [totalSum, setTotalSum] = useState(price);
    const [ticketAmount, setTicketAmount] = useState(1);
     
    function calculate(price) {
        if (totalSum === 0 && ticketAmount === 0){
            return;
        }
        else {setTotalSum(totalSum-price)
        setTicketAmount(ticketAmount-1)}
    }

    return ( 
        <section className={styles.ticketWrapper}>
            <section className={styles.ticketCounter}>
                <h3 className={styles.total}>{totalSum}</h3>
                <button className={styles.minus} onClick={() => calculate(price)}>-</button>
                <p className={styles.amount}>{ticketAmount}</p>
                <button className={styles.plus} onClick={() => (setTotalSum(totalSum+price), setTicketAmount(ticketAmount+1))}>+</button>
            </section>
        </section>
     );
}

export default TicketCounter;