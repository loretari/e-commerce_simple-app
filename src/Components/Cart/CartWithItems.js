import React from "react";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import '../ProudProducts/ProudProducts.css';

function CartWithItems () {
    return (
        <>
     <div className= "full-cart-div">
         <div className= "full-cart">
             <CartItem/>
             <CartItem/>
             <CartItem/>
         </div>
     </div>
            <div className= "subtotal-div">
                <div className= "sub-right">
                    <p>Subtotal</p>
                    <p className= "total-price">1000$</p>
                </div>
                <div className= "sub-left">
                    <Link>Go To Checkout</Link>
                </div>
            </div>
            </>
    )
}
   export default CartWithItems;