import React from 'react';
import './ProudProducts.css';
import { items } from "../Data/AllData";

function ProductItem () {

    const filteredItems = items.filter((item) => item.id <= 8);

    return (
        <>
            {filteredItems.map((item) => (
                <div
                    key={item.id} className= "product normal">
                    <div className= "product-header">
                        <img src={item.img} alt= "product1"/>

                    </div>
                    <div className= "product-details">
                        <p>{item.description}</p>
                        <p className= "item-price">USD{item.price}</p>
                    </div>
                </div>

            ))}
        </>

    )
}
export default ProductItem;