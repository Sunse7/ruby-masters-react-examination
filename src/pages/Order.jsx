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


    useEffect(() => {
        // cartList.map(cartItem => {
        //     let finalTotalTicketAmount = cartItem.ticketAmount;
        //     // loop för att kunna jämföra varje objekt i listan för att se om namnet redan finns
        //     for(let i = 0; i < cartList.length; i++){
        //         console.log(cartItem.name)
        //         if(cartItem.name === cartList[i].name){
        //             finalTotalTicketAmount += cartList[i].ticketAmount
        //             console.log(cartList[i]);
        //             return {...cartList, ticketAmount: finalTotalTicketAmount}
        //         }
        //     }
        // })

        calSum();
         console.log('i order.jsx: ---- ',cartList);
        setFinalTicketAmount(cartList.ticketAmount)
    }, []);

    function calSum() {
        let sum = 0;
        cartList.forEach(item => {
            //console.log(item)
            sum += item.totalSum;
        });
        setFinalSum(sum);
    }

    function handleAddItem(itemPrice, cartItem) {
        let sum = finalSum + itemPrice;
        setFinalSum(sum);
        setFinalTicketAmount(finalTicketAmount + 1)

        // i cL ska vi hitta på det cartitem vi vill uppdatera
        const newCartList = cartList.map(c => {
            if (c.name === cartItem.name) {
                //console.log(c);
                return {...c, ticketAmount: c.ticketAmount + 1}
            }
            return c;
        });
        setCartList(newCartList);
    };

    function handleSubtractItem(itemPrice,cartItem) {
        if( finalSum > 0 ){
            let sum = finalSum - itemPrice;
            setFinalSum(sum);
        }
        setFinalTicketAmount(finalTicketAmount - 1)

        const newCartList = cartList.map(c => {
            if (c.name === cartItem.name && c.ticketAmount > 0) {
                //console.log(c);
                return {...c, ticketAmount: c.ticketAmount - 1}
            }
            return c;
        });
        setCartList(newCartList);
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
                    subtractTickets={() => handleSubtractItem(cartItem.price, cartItem)}
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