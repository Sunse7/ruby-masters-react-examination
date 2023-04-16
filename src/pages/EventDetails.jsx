import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from './EventDetails.module.css'
import PrimaryButton from '../Components/PrimaryButton';
import BackButton from "../Components/BackButton";
import CartButton from "../Components/CartButton";
import TicketCounter from "../Components/TicketCounter";
import { useContext, useState } from "react";
import { EventContext } from "../App";

function EventDetails() {
  const location = useLocation();
  const upComingEvent = location.state.upComingEvent;
  const [cartList, setCartList] = useContext(EventContext);

  const {name, when, where, price} = upComingEvent;

  const navigate = useNavigate();

  const [totalSum, setTotalSum] = useState(price);
  const [ticketAmount, setTicketAmount] = useState(1);
   
  function calculate(price) {
    if (totalSum === 0 && ticketAmount === 0){
        return;
    }
    else {setTotalSum(totalSum-price)
    setTicketAmount(ticketAmount-1)}
  }

  function addToCartList() {
    let newCartListObj = {
       name: name,
       when: when,
       where: where,
       price: price,
       ticketAmount: ticketAmount,
       totalSum: totalSum
    }
    setCartList([newCartListObj, ...cartList]);
  }

  return (
    <section className={styles.eventDetails}>
      <header className={styles.header}>
        <BackButton action={() => navigate(-1)}/>
        <NavLink to='/order' state={{ticketAmount, totalSum}}>
            <CartButton title='Kassa' />
        </NavLink>
      </header>
      
      <section className={styles.eventText}>
        <h2 className={styles.eventTitle}>Event details</h2>
        <h3 className={styles.scoreTickets}>You are about to score some tickets to:</h3>
      </section>
      {upComingEvent ? (
        <>
          <h2 className={styles.eventName}>{name}</h2>
          <h4 className={styles.eventInfo}>{when.date} {when.from} - {when.to}</h4>
          <p className={styles.eventPlace}>@ {where}</p>
        </>
      ) : <h2>Something went wrong...</h2>}
      <section className={styles.ticketContainer}>
        <TicketCounter action={() => calculate(price)} action2={() => (setTotalSum(totalSum+price), setTicketAmount(ticketAmount+1))} totalSum={totalSum} ticketAmount={ticketAmount}/>
      </section>
      <PrimaryButton title='Lägg i varukorgen' action={addToCartList} />
    </section>
  );
}

export default EventDetails;