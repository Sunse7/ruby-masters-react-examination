import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../Components/PrimaryButton";
import styles from './Order.module.css';
import BackButton from "../Components/BackButton";

function Order() {
    const location = useLocation();
    const cartList = location.state.cartList;
    const navigate = useNavigate();
    
    console.log(cartList);

    return ( 
        <section className={styles.orderSummary}>
            <header className={styles.back}>
                <BackButton  action={() => navigate(-1)}/>
            </header>
            <h2>Order</h2>
            {/* <p>{cartList}</p> */}
            <p className={styles.valueText}>Totalt värde på order</p>
            <h3 className={styles.totalSum}>Totala summan</h3>
            <NavLink to='/tickets'>
                <PrimaryButton title='Skicka order' />
            </NavLink>
        </section>
     );
}

export default Order;