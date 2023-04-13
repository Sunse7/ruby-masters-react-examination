import { useLocation } from "react-router-dom";
import PrimaryButton from "../Components/PrimaryButton";

function Order() {
    const location = useLocation();
    const cartList = location.state.cartList;
    
    console.log(cartList);

    return ( 
        <>
        <h2>Order</h2>
        {/* <p>{cartList}</p> */}
        <PrimaryButton title='Skicka order' />
        </>

     );
}

export default Order;