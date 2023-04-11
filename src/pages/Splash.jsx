import styles from './Splash.module.css';

function Splash() {
    //TODO add setTimeout
    return ( 
        <>
            <img src="../src/assets/logo.png" alt="" />
            <h2>Where it's @</h2> 
            <h3 className={styles.splashH3}>Ticketing made easy</h3>
        </>
     );
}

export default Splash;