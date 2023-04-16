import styles from "./PrimaryButton.module.css";

function PrimaryButton({title, action, actionMessage}) {
    return ( 
        <button onClick={() => {action(); actionMessage();}} className={styles.button}>{title}</button>
     );
}

export default PrimaryButton;