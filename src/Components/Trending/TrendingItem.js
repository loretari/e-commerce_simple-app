import React from 'react';
import './Trending.css';
import { items } from "../Data";

function TrendingItem () {
    return (
        <>
            {items.map((item) => (
                <div
                    key={item.id} className= "row-item">
                    <div className= "item-header">
                        <img src={item.img} alt= "product" />
                    </div>
                    <div className= "item-description">
                        <p>{item.description}</p>
                        <p className= "item-price">USD{item.price}</p>
                    </div>
                </div>
            ))}

            </>
    )
}

export default TrendingItem;