import styles from "./PrimaryButton.module.css";

function PrimaryButton({title, action}) {
    return ( 
        <button onClick={action}>{title}</button>
     );
}

export default PrimaryButton;