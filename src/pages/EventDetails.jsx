import { useLocation, useNavigate } from "react-router-dom";
import styles from './EventDetails.module.css'
import PrimaryButton from '../Components/PrimaryButton';
import BackButton from "../Components/BackButton";
import Cart from "../Components/Cart";
import TicketCounter from "../Components/TicketCounter";

function EventDetails() {
  const location = useLocation();
  const upComingEvent = location.state.upComingEvent;
  const {name, when, where, price} = upComingEvent;
  const navigate = useNavigate();

  return (
    <section className={styles.eventDetails}>
      <header className={styles.header}>
        <BackButton action={() => navigate(-1)}/>
        <Cart action={() => navigate('/order')}/>
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
      <TicketCounter price={price} />
      <PrimaryButton title='Lägg i varukorgen'/>
    </section>
  );
}

export default EventDetails;
