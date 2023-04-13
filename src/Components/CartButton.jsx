import styles from "./BackCartButton.module.css";

function CartButton({action}) {
    return ( 
        <button onClick={action} className={styles.cart}>Kassan</button>
     );
}

export default CartButton;