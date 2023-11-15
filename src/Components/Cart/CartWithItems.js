import React from "react";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import '../ProudProducts/ProudProducts.css';
import EmptyCart from "./EmptyCart";
import { useSelector} from "react-redux";

function CartWithItems () {

    const { cartList } = useSelector((state) => state.cart);


    const totalPrice = cartList.reduce(
        (price, item) => price + item.qty * item.price,
        0
    )



    return (
        <>
     <div className= "full-cart-div">
         <div className= "full-cart">
             {cartList.map((item, id) =>

             cartList.length !== 0 ? (

                 <CartItem
                     key= {id}
                     item= {item}
                 />
                 ) : (
                 <EmptyCart key={id} />
             )
              )
             }



         </div>
     </div>
            <div className= "subtotal-div">
                <div className= "sub-right">
                    <p>Subtotal</p>
                    <p className= "total-price">{totalPrice}.00$</p>
                </div>
                <div className= "sub-left">
                    <Link>Go To Checkout</Link>
                </div>
            </div>
            </>
    )
}
   export default CartWithItems;