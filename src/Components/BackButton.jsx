import styles from "./BackCartButton.module.css";

function BackButton({action}) {

    return ( 
        <button onClick={action} className={styles.back}>Tillbaka</button>
     );
}

export default BackButton;