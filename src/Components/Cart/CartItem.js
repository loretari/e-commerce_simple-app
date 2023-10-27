import React from "react";
import Product2 from "../Assets/Products/9.jpg";
import CrossImg from "../Assets/cart_cross_icon.png";
import '../Navbar/Navbar.css';

function CartItem () {
    return (
   <div className= "cart-item">
       <div className= "cart-img">
           <img src={Product2} alt= "product"/>
       </div>
       <div className= "cart-middle">
           <p className= "cart-name">Black Velvet Dress</p>
           <div className= "cart-btns">
               <button>-</button>
               <p className= "quantity">1</p>
               <button>+</button>
           </div>
       </div>
       <div className= "cart-right">
           <p className= "cart-price">100.00$</p>
           <img src={CrossImg} alt= "cross" className= "cart-icon-cross"/>
       </div>
   </div>
    )
}

export default CartItem;