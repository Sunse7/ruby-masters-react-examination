import styles from './TicketCard.module.css';

function TicketCard({cartItem}) {
    const {name, when, where, ticketAmount} = cartItem;
    return ( 
        <article className={styles.ticketContainer}>

                <section className={styles.artist}>
                    <p className={styles.title}>WHAT</p>
                    <h3 className={styles.artistName}>{ticketAmount}&nbsp; x &nbsp; {name}</h3>
                </section>

                <section className={styles.place}>
                    <p className={styles.title}>WHERE</p>
                    <h4 className={styles.placetText}>{where}</h4>
                </section>

                <section className={styles.infoBox}>
                    <section>
                        <p className={styles.title}>WHEN</p>
                        <h4 className={styles.infoBoxText}>{when.date}</h4>
                    </section>
                    <section className={styles.infoBoxFrom}>
                        <p className={styles.title}>FROM</p>
                        <h4 className={styles.infoBoxText}>{when.from}</h4>
                    </section>
                    <section className={styles.infoBoxTo}>
                        <p className={styles.title}>TO</p>
                        <h4 className={styles.infoBoxText}>{when.to}</h4>
                    </section>
                </section>

                <section className={styles.infoBoxInfo}>
                    <p className={styles.title}>INFO</p>
                    <p className={styles.infoBoxInfoText}>Section C - seat 233, bring popcorn and a camera</p>
                </section>

                <section className={styles.ticketCodeBox}>
                    <figure>
                        <img src="../src/assets/qr-code.png" alt="" className={styles.qrCode}/>
                    </figure>
                    <p className={styles.code}>#A2ED7</p>
                </section>

        </article>
     );
}

export default TicketCard;