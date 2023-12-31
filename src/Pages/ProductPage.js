import React, {useState, createContext } from "react";
import "../Components/ProudProducts/ProductPage.css";
import {items} from "../Components/Data/AllData";
import TrendingSlider from "../Components/Trending/TrendingSlider";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import ArrowLeft from "../Components/Assets/arrow-left.png";
import {useDispatch} from "react-redux";
import {addToCart} from "../Store/cartSlice";



export const CartContext = createContext();

function ProductPage () {

    const dispatch = useDispatch();

    const { id } = useParams();

    const item = items.filter((item) => item.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const [ image, setImage ] = useState(item[0].img);

    const handleAdd = (item, quantity) => {
        dispatch(addToCart({product: item, num: quantity}));
    }

    // const {  addToCart } = useContext(CartContext);

    const changeImage = (e) => {
        setImage(e.target.src);
    };

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

    const calcPrice = (quantity) => {
        return quantity * item[0].price;
    };

    // console.log(cartItem);

    const [notify, setNotify] = useState(false);

    const showNotify = () => {
        setNotify(!notify);
    };




    return (
         <>
             <div
             onAnimationEnd={() => setNotify(false)}
             className= {`notify ${notify ? "slide-in" : ""}`}
             >
                 <p>Item has been added to the cart &nbsp; ✅</p>
             </div>
         <div className= "product-page-div">
        <div className= "container">
            <div className= "title-home">
                <Link
                    onClick={() => window.scrollTo(0, 0)}
                    to= "/">
                    <img src={ArrowLeft} alt= "arrow" />
                    Back
                </Link>

            </div>
            <div className= "product-div">
                <h3 className= "product-big-name">{item[0].description}</h3>
                <div className= "product-left">
                    <div className= "big-img">
                        <img src={image} alt= "product"/>
                    </div>
                    <div className= "small-imgs">
                        <img
                            onMouseOver={changeImage}
                            src={item[0].img}
                            alt= "product"/>
                        <img
                            onMouseOver={changeImage}
                            src={item[0].otherImgs[0]}
                            alt= "product"/>
                        <img
                            onMouseOver={changeImage}
                            src={item[0].otherImgs[1]}
                            alt= "product"/>
                    </div>
                </div>
                    <div className= "product-right">
                        <p className= "product-spec">
                            {item[0].specs}
                        </p>
                        <div className= "product-quant">
                            <p>Quantity</p>
                            <div className= "product-btns">
                                <button onClick={decrease}>-</button>
                                <p className= "quantity">{quantity}</p>
                                <button onClick={increase}>+</button>
                            </div>
                                <p className= "product-price">{calcPrice(quantity)}.00 $</p>


                        </div>
                        <div className= "atc-buy">
                            <button
                                onClick={()=> {
                                    // addToCart(item[0], quantity);
                                    handleAdd(item[0], quantity)
                                    showNotify();
                                }}
                                className= "atc-btn">add to cart</button>
                            <button className= "buy-btn">buy now</button>
                        </div>
                    </div>
                </div>



                        <div className= "specifications">
                            <div className= "spec">
                                <p className= "spec-title">Fabric:</p>
                                <p className= "title-desc">{item[0].fabric}</p>
                            </div>
                            <div className= "spec">
                                <p className= "spec-title">Color:</p>
                                <p className= "title-desc">{item[0].color}</p>
                            </div>
                            <div className= "spec">
                                <p className= "spec-title">Size:</p>
                                <p className= "title-desc">{item[0].size}</p>
                            </div>
                        </div>
                    </div>


             <TrendingSlider/>
             <NewsLetter/>
             <Footer/>
    </div>
    </>
    )
}

export default ProductPage;