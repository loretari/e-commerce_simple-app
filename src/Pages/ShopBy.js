import React from 'react';
import { Link } from "react-router-dom";
import '../Components/ProudProducts/ProudProducts.css';
import ArrowLeft from '../Components/Assets/arrow-left.png'
import ShopByItem from "../Components/ShopBy/ShopByItem";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";

function ShopBy () {

    const filterShopBy = (event) => {
        console.log(event.target.value);
    }

    return (
        <>
            <div className= "container">
                <div className= "shopBy-header">

                    <Link
                        className= "title-home"
                        to= '/'>
                   <img src={ArrowLeft} alt= "arrow"  />
                        <p>Home</p>
                    </Link>
                    <h3>All</h3>

                    <select name= "shopBy" onChange={filterShopBy}>
                        <option value= "all">All</option>
                        <option value= "clothing">Clothing</option>
                        <option value= "shoes">Shoes</option>
                        <option value= "bags">Bags</option>
                    </select>
                </div>
            </div>

            <div className= "proud-container">
                <div className= "container">
                    <div className= "products-grid">
                        <ShopByItem/>
                    </div>
                </div>
            </div>
            <NewsLetter/>
            <Footer/>
        </>
    )
}
export default ShopBy;