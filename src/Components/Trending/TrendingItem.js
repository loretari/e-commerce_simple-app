import React from 'react';
import './Trending.css';
import { items } from "../Data/AllData";
import {Link} from "react-router-dom";

function TrendingItem () {

    const filteredItems = items.filter((item) => item.id <= 8);


    return (
        <>
            {filteredItems.map((item) => (
                <div
                    key={item.id} className= "row-item">
                    <Link
                        onClick= {() => window.top}
                        to= {(`/shopBy/product/${item.id}`)}
                    >
                        <div className= "item-header">
                            <img src={item.img} alt= "product" />
                        </div>
                        <div className= "item-description">
                            <p>{item.description}</p>
                            <p className= "item-price">USD{item.price}</p>
                        </div>
                    </Link>

                </div>
            ))}

            </>
    )
}

export default TrendingItem;