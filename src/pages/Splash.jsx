import styles from './Splash.module.css';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function Splash() {
    //TODO add setTimeout
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/events')
        }, 2000);
    })

    return ( 
        <section className={styles.splash}>
            <img src="../src/assets/logo.png" alt="" className={styles.splashImg}/>
            <h2 className={styles.splashH2}>Where it's @</h2> 
            <h3 className={styles.splashH3}>Ticketing made easy</h3>
        </section>
     );
}

export default Splash;