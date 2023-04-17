import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./EventDetails.module.css";
import PrimaryButton from "../Components/PrimaryButton";
import BackButton from "../Components/BackButton";
import CartButton from "../Components/CartButton";
import TicketCounter from "../Components/TicketCounter";
import { useContext, useState } from "react";
import { EventContext } from "../App";

function EventDetails() {
  const location = useLocation();
  const upComingEvent = location.state.upComingEvent;
  const [cartList, setCartList] = useContext(EventContext);

  const { name, when, where, price } = upComingEvent;

  const navigate = useNavigate();

  const [totalSum, setTotalSum] = useState(price);
  const [ticketAmount, setTicketAmount] = useState(1);

  function calculate(price) {
    if (totalSum === 0 && ticketAmount === 0) {
      return;
    } else {
      setTotalSum(totalSum - price);
      setTicketAmount(ticketAmount - 1);
    }
  }

  function addToCartList() {
    let newCartListObj = {
      name: name,
      when: when,
      where: where,
      price: price,
      ticketAmount: ticketAmount,
      totalSum: totalSum,
    };

    // kolla om den nya biljetten redan existerar i varukorgen
    let itemAlreadyExists = false;
    let itemAlreadyExistsIndex;
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].name === newCartListObj.name) {
        newCartListObj.ticketAmount = newCartListObj.ticketAmount + cartList[i].ticketAmount;
        newCartListObj.totalSum = newCartListObj.totalSum + cartList[i].totalSum;
        itemAlreadyExists = true;
        itemAlreadyExistsIndex = i;
      }
    }
    if (itemAlreadyExists) {
      // ändra på befintligt objekt i cartList
      const updatedCartList = [...cartList];
      updatedCartList.splice(itemAlreadyExistsIndex, 1);
      updatedCartList.push(newCartListObj);
      setCartList(updatedCartList);
    } else {
      // pusha in nytt objekt
      setCartList([...cartList, newCartListObj])
    }
  }

  return (
    <section className={styles.eventDetails}>
      <header className={styles.header}>
        <BackButton action={() => navigate(-1)} />
        <NavLink to="/order" state={{ ticketAmount, totalSum }}>
          <CartButton title="Kassa" />
        </NavLink>
      </header>

      <section className={styles.eventText}>
        <h2 className={styles.eventTitle}>Event details</h2>
        <h3 className={styles.scoreTickets}>
          You are about to score some tickets to:
        </h3>
      </section>
      {upComingEvent ? (
        <>
          <h2 className={styles.eventName}>{name}</h2>
          <h4 className={styles.eventInfo}>
            {when.date} {when.from} - {when.to}
          </h4>
          <p className={styles.eventPlace}>@ {where}</p>
        </>
      ) : (
        <h2>Something went wrong...</h2>
      )}
      <section className={styles.ticketContainer}>
        <TicketCounter
          subtractTickets={() => calculate(price)}
          addTickets={() => (
            setTotalSum(totalSum + price), setTicketAmount(ticketAmount + 1)
          )}
          totalSum={totalSum}
          ticketAmount={ticketAmount}
        />
      </section>
      <PrimaryButton
        title="Lägg i varukorgen"
        action={addToCartList}
      />
    </section>
  );
}

export default EventDetails;
