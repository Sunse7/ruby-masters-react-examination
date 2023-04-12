import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from './EventDetails.module.css'
import PrimaryButton from '../Components/PrimaryButton';
import BackButton from "../Components/BackButton";
import CartButton from "../Components/CartButton";
import TicketCounter from "../Components/TicketCounter";
import { createContext, useState } from "react";

export const CartListContext = createContext();

function EventDetails() {
  const location = useLocation();
  const upComingEvent = location.state.upComingEvent;
  const {name, when, where, price} = upComingEvent;
  const navigate = useNavigate();
  const [cartList, setCartList] = useState([])

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
    setCartList([upComingEvent, ticketAmount, totalSum,...cartList])
  }

  return (
    <CartListContext.Provider value={[cartList, setCartList]}>
      <section className={styles.eventDetails}>
        <header className={styles.header}>
          <BackButton action={() => navigate(-1)}/>
          <NavLink to='/order' state={{cartList: cartList}}>
            <CartButton title='Kassa' />
          </NavLink>
        </header>

        <h2>EventDetails</h2>
        <h3>You are about to score some tickets to</h3>
        {upComingEvent ? (
          <>
            <h2>{name}</h2>
            <h4>{when.date} {when.from} - {when.to}</h4>
            <p>{where}</p>
          </>
        ) : <h2>Something went wrong...</h2>}

        <TicketCounter action={() => calculate(price)} action2={() => (setTotalSum(totalSum+price), setTicketAmount(ticketAmount+1))} totalSum={totalSum} ticketAmount={ticketAmount}/>
        <PrimaryButton title='Lägg i varukorgen' action={addToCartList} />
      </section>
    </CartListContext.Provider>
  );
}

export default EventDetails;
