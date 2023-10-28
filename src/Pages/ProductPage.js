import React, {useState} from "react";
import "../Components/ProudProducts/ProductPage.css";
import {items} from "../Components/AllData";
import TrendingSlider from "../Components/Trending/TrendingSlider";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";


function ProductPage ( props ) {

    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState(items[0].img);

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
        return quantity * items[0].price;
    };

    return (
         <>
         <div className= "product-page-div">
        <div className= "container">
            <div className= "product-div">
                <h3 className= "product-big-name">{items[0].description}</h3>
                <div className= "product-left">
                    <div className= "big-img">
                        <img src={image} alt= "product"/>
                    </div>
                    <div className= "small-imgs">
                        <img
                            onMouseOver={changeImage}
                            src={items[0].img}
                            alt= "product"/>
                        <img
                            onMouseOver={changeImage}
                            src={items[0].otherImgs[0]}
                            alt= "product"/>
                        <img
                            onMouseOver={changeImage}
                            src={items[0].otherImgs[1]}
                            alt= "product"/>
                    </div>
                </div>
                    <div className= "product-right">
                        <p className= "product-spec">
                            {items[0].specs}
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
                                <p className= "product-price">{calcPrice(quantity)}.00$</p>
                        </div>
                        <div className= "atc-buy">
                            <button className= "atc-btn">add to cart</button>
                            <button className= "buy-btn">buy now</button>
                        </div>
                    </div>
                </div>



                        <div className= "specifications">
                            <div className= "spec">
                                <p className= "spec-title">Fabric:</p>
                                <p className= "title-desc">96% viscose, 4% spandex</p>
                            </div>
                            <div className= "spec">
                                <p className= "spec-title">Color:</p>
                                <p className= "title-desc">Dark Blue</p>
                            </div>
                            <div className= "spec">
                                <p className= "spec-title">Size:</p>
                                <p className= "title-desc">M</p>
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