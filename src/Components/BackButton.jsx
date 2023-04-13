import styles from "./BackCartButton.module.css";

function BackButton({action}) {

    return ( 
        <button onClick={action} className={styles.back}> &#60; Tillbaka</button>
     );
}

export default BackButton;