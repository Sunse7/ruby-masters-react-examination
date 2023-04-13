import { NavLink } from "react-router-dom";
import styles from "./EventCard.module.css";

function EventCard({ upComingEvent, cartList, action }) {
  const { when, name, where, price } = upComingEvent;

  return (
    <NavLink to='/details' state={{upComingEvent: upComingEvent, cartList: cartList}}>
      <article className={styles.wrapper}>
        <article className={styles.eventContainer}>
          <section className={styles.date}>
            <p>{when.date}</p>
          </section>
          <section className={styles.infoContainer}>
            <section className={styles.info}>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.where} >{where}</p>
              <p className={styles.time}>
                {when.from} - {when.to}
              </p>
            </section>
            <section className={styles.price}>
              <p>{price} sek</p>
            </section>
          </section>
        </article>
      </article>
    </NavLink>
  );
}

export default EventCard;
