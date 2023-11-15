import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {IconX} from "@tabler/icons-react";
import {addToCart, decreaseQty, deleteProduct} from "../../Store/cartSlice";
import {Link} from "react-router-dom";

const Cart = () => {
    const { cartList } = useSelector((state) => state.cart);

    const dispatch = useDispatch();



    const totalPrice = cartList.reduce(
        (price, item) => price + item.qty * item.price,
        0
    )

    return (
        <>

            {cartList.map((item, id) => {
                const calcPrice = item.price * item.qty
                return(
                        <div key={id} className="cart-item">
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

                                <p className="cart-price">{calcPrice}.00$</p>


                                <div>
                                    <IconX onClick={() => dispatch(deleteProduct(item))} />
                                </div>
                            </div>
                        </div>

                    )

                }

            )}

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

export default Cart;