import React from "react";
import EmptyCary from '../Assets/Cart/empty-cart.png';

function EmptyCart ({openCart}) {
    return (
    <div className= "empty-cart">
        <img src={EmptyCary} alt= "cart"/>
        <p>Your cart is empty</p>
        <button onClick={openCart}>Keep Browsing</button>
    </div>

    )
}

export default EmptyCart;