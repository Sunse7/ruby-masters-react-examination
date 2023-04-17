import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../Components/PrimaryButton";
import styles from './Order.module.css';
import BackButton from "../Components/BackButton";
import { useContext, useEffect, useState } from "react";
import { EventContext } from "../App";
import TicketCounter from "../Components/TicketCounter";

function Order() {
    const navigate = useNavigate();
    const [cartList, setCartList] = useContext(EventContext);
    const location = useLocation();

    const [finalSum, setFinalSum] = useState(0);
    const [finalTicketAmount, setFinalTicketAmount] = useState();

    // console.log(cartList, 'order');

    useEffect(() => {
        calSum();
        console.log(cartList);
        setFinalTicketAmount(cartList.ticketAmount)
    }, []);

    function calSum() {
        let sum = 0;
        cartList.forEach(item => {
            console.log(item)
            sum += item.totalSum;
        });
        setFinalSum(sum);
    }

    function calculate(price) {
        if (finalSum === 0 && cartList.ticketAmount === 0) {
            return;
        }
        else {
            setFinalSum(finalSum - price)
            setFinalTicketAmount(cartList.ticketAmount - 1)
        }
    }

    function handleAddItem(itemPrice, cartItem) {
        let sum = finalSum + itemPrice;
        setFinalSum(sum);
        setFinalTicketAmount(finalTicketAmount + 1)

        // i cL ska vi hitta på det cartitem vi vill uppdatera
        const newCartList = cartList.map(c => {
            if (c.name === cartItem.name) {
                console.log(c);
                return {...c, ticketAmount: c.ticketAmount + 1}
            }
            return c;
        });
        setCartList(newCartList);
    };
    function handleSubtractItem(itemPrice,cartItem) {
        let sum = finalSum - itemPrice;
        setFinalSum(sum);
        setFinalTicketAmount(finalTicketAmount - 1)
    }


    return (
        <section className={styles.orderSummary}>
            <header className={styles.back}>
                <BackButton action={() => navigate(-2)} />
            </header>
            <h2 className={styles.headerText}>Order</h2>
            {cartList.map((cartItem, i) =>
                <TicketCounter
                    key={i}
                    subtactTickets={() => handleSubtractItem(cartItem.price, cartItem)}
                    addTickets={() => handleAddItem(cartItem.price, cartItem)}
                    name={cartItem.name}
                    when={cartItem.when}
                    ticketAmount={cartItem.ticketAmount} />)}
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