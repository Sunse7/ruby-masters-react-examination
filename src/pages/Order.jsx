import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../Components/PrimaryButton";
import styles from './Order.module.css';
import BackButton from "../Components/BackButton";
import { useContext, useEffect, useState } from "react";
import { EventContext } from "../App";
import TicketCounter from "../Components/TicketCounter";

function Order() {
    const navigate = useNavigate();
    const [cartList] = useContext(EventContext);
    const location = useLocation();
    
    const [finalSum, setFinalSum] = useState();
    const [finalTicketAmount, setFinalTicketAmount] = useState();

    console.log(cartList, 'order');

    useEffect(() => {
        calSum();
    }, []);

    function calSum() {
        let sum = 0;
        cartList.forEach(item => {
            sum += item.totalSum;
        });
        setFinalSum(sum);
    }

    function calculate(price) {
        if (finalSum === 0 && cartList.ticketAmount === 0){
            return;
        }
        else {setFinalSum(finalSum - price)
            setFinalTicketAmount(cartList.ticketAmount - 1)}
      }

    return ( 
        <section className={styles.orderSummary}>
            <header className={styles.back}>
                <BackButton  action={() => navigate(-2)}/>
            </header>
            <h2 className={styles.headerText}>Order</h2>
            {cartList.map((cartItem, i) => <TicketCounter key={i} action={() => calculate(cartList.price)} action2={() => setFinalSum(finalSum + cartList.price)} name={cartItem.name} when={cartItem.when} ticketAmount={cartItem.ticketAmount} />)}
            <p className={styles.valueText}>Totalt värde på order</p>
            <h3 className={styles.totalSum}>{finalSum}</h3>
            <h3 className={styles.totalSum}>Totala summan</h3>
            <NavLink to='/tickets'>
                <PrimaryButton title='Skicka order' />
            </NavLink>
        </section>
     );
}

export default Order;