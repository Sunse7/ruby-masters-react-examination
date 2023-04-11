import styles from "./EventCard.module.css";

function EventCard({ upComingEvent }) {
  const { when, name, where, price } = upComingEvent;

  return (
    <article className={styles.wrapper}>
      <article className={styles.eventContainer}>
        <section className={styles.date}>
          <p>{when.date}</p>
        </section>
        <section className={styles.infoContainer}>
          <section className={styles.info}>
            <h3>{name}</h3>
            <p>{where}</p>
            <p>
              {when.from} - {when.to}
            </p>
          </section>
          <section className={styles.price}>
            <p>{price} sek</p>
          </section>
        </section>
      </article>
    </article>
  );
}

export default EventCard;
