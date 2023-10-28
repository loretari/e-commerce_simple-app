import React from 'react';
import { items } from '../AllData';
import {Link} from "react-router-dom";
// import '../ProudProducts/ProudProducts.css'


function ShopByItem () {
    return (
        <>
        <div className= "proud-container">
            <div className= "container">
                <div className= "products-grid">
                    { items.map((item) => (
                        <div key={item.id} className= "product normal">
                            <Link to={`/product/${item.id}`}>
                                <div className= "product-header">
                                    <img src={item.img} alt= "product1"/>
                                </div>
                                <div className= "product-details">
                                    <p>{item.description}</p>
                                    <p className= "item-price">USD{item.price}</p>
                                </div>
                            </Link>


                    </div>
                    )) }
                </div>

        </div>
        </div>
            </>
    )
}

export default ShopByItem;