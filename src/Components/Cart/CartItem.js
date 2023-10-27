import React, {useState} from "react";
import Product2 from "../Assets/Products/9.jpg";
import CrossImg from "../Assets/cart_cross_icon.png";
import '../Navbar/Navbar.css';

function CartItem () {

    const [quantity, setQuantity] = useState(1);

   const increase = () => {
       if (quantity >= 1) {
           setQuantity(quantity + 1);
       }
    }

    const decrease = () => {
       if (quantity > 1) {
           setQuantity(quantity - 1);
       }
    }

    return (
   <div className= "cart-item">
       <div className= "cart-img">
           <img src={Product2} alt= "product"/>
       </div>
       <div className= "cart-middle">
           <p className= "cart-name">Black Velvet Dress</p>
           <div className= "cart-btns">
               <button onClick={decrease}>-</button>
               <p className= "quantity">{quantity}</p>
               <button onClick={increase}>+</button>
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