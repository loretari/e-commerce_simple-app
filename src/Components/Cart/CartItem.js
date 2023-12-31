import React from "react";
import '../Navbar/Navbar.css';
import { IconX } from "@tabler/icons-react";
import {useDispatch} from "react-redux";
import { addToCart, decreaseQty, deleteProduct } from "../../Store/cartSlice";

    const CartItem = ({item}) => {


    const dispatch = useDispatch();

    return (
        <>
                    <div className="cart-item">
                    <div className="cart-img">
                                <img src={item.img} alt="product"/>
                            </div>
                            <div className="cart-middle">
                                <p className="cart-name">{item.description}</p>
                                <div className="cart-btns">
                                    <button onClick={() =>
                                        dispatch(decreaseQty(item))
                                    }>-</button>
                                    <p className="quantity">{item.qty}</p>

                                    <button  onClick={() =>
                                        dispatch(addToCart({product: item, num: 1}))
                                    }>+</button>
                                </div>
                            </div>

                            <div className="cart-right">
                                <p className="cart-price">{item.qty * item.price}.00$</p>

                                <div>
                                    <IconX onClick={() => dispatch(deleteProduct(item))} />
                                </div>
                            </div>
                        </div>


            </>

    )
}

export default CartItem;