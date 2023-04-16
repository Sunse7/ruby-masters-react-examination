import styles from './TicketCard.module.css';

function TicketCard() {
    return ( 
        <article className={styles.ticketContainer}>

            {/* <article  className={styles.ticketSection}> */}

                <section className={styles.artist}>
                    <p className={styles.title}>WHAT</p>
                    <h3>Namn</h3>
                </section>

                <section className={styles.place}>
                    <p className={styles.title}>WHERE</p>
                    <h4>Vart</h4>
                </section>

                <section  className={styles.infoBox}>
                    <section>
                        <p className={styles.title}>WHEN</p>
                        <h4>Datum</h4>
                    </section>
                    <section className={styles.infoBoxFrom}>
                        <p className={styles.title}>FROM</p>
                        <h4>Start tid</h4>
                    </section>
                    <section className={styles.infoBoxTo}>
                        <p className={styles.title}>TO</p>
                        <h4>Slut tid</h4>
                    </section>
                </section>

                <section className={styles.infoBoxInfo}>
                    <p className={styles.title}>INFO</p>
                    <p>Textitext</p>
                </section>

                <section className={styles.ticketCodeBox}>
                    <figure className={styles.qrContainer}>
                        <img src="../src/assets/qr-code.png" alt="" className={styles.qrCode}/>
                    </figure>
                    <p className={styles.code}>Kod</p>
                </section>

            {/* </article> */}

        </article>
     );
}

export default TicketCard;