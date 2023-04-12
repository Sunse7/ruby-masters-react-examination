import { useLocation } from "react-router-dom";

function Order() {
    const location = useLocation();
    const cartList = location.state.cartList;
    console.log(cartList);

    return ( 
        <>
        <h2>Order</h2>
        {/* <p>{cartList}</p> */}
        </>

     );
}

export default Order;