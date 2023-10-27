import React, {useState} from "react";
import "../Components/ProudProducts/ProductPage.css";
import Product1 from '../Components/Assets/Products/9.jpg';
import Product2 from '../Components/Assets/Products/10.jpg';
import Product3 from '../Components/Assets/Products/11.jpg';
import Product4 from '../Components/Assets/Products/12.jpg';


function ProductPage () {

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
         <>
         <div className= "product-page-div">
        <div className= "container">
            <div className= "product-div">
                <h3 className= "product-big-name">Dress in Dark Blue</h3>
                <div className= "product-left">
                    <div className= "big-img">
                        <img src={Product1} alt= "product"/>
                    </div>
                    <div className= "small-imgs">
                        <img src={Product2} alt= "product"/>
                        <img src={Product3} alt= "product"/>
                        <img src={Product4} alt= "product"/>
                    </div>
                    <div className= "product-right">
                        <p className= "product-spec">
                            This above the knee length a Navy-Blue dress
                            is made of viscose and elastane blend,
                            this is a 3/4 sleeves dress. This casual dress
                            is essentia clothing in summer.
                        </p>
                        <div className= "product-quant">
                            <p>{quantity}</p>
                            <div className= "product-btns">
                                <button onClick={decrease}>-</button>
                                <p className= "quantity">{quantity}</p>
                                <button onClick={increase}>+</button>
                            </div>
                                <p className= "product-price">980.00$</p>
                        </div>
                        <div className= "atc-buy">
                            <button className= "atc-btn">add to cart</button>
                            <button className= "buy-btn">buy now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default ProductPage;