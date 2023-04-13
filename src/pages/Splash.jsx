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
        <>
            <img src="../src/assets/logo.png" alt="" />
            <h2>Where it's @</h2> 
            <h3 className={styles.splashH3}>Ticketing made easy</h3>
        </>
     );
}

export default Splash;