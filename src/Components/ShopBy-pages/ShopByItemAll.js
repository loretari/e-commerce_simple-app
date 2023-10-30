import React from 'react';
import { items } from "../Data/AllData";
import {Link} from "react-router-dom";

function ShopByItemBags () {
    const filterItems = items.filter((item) => item.category === "all");

    return (
        <>
            <div className= "proud-container">
                <div className= "container">
                    <div className= "products-grid">
                        {filterItems.map((item) => (
                            <div key={item.id} className= "product normal">
                                <Link to={`/shopBy/product/${item.id}`}>
                                    <div className= "product-header">
                                        <img src= {item.img} alt= "product1"/>
                                    </div>
                                    <div className= "product-details">
                                        <p>{item.description}</p>
                                        <p className= "item-price">USD{item.price}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopByItemBags;