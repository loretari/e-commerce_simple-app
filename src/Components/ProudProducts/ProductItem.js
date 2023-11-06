import React from 'react';
import './ProudProducts.css';
import { items } from "../Data/AllData";
import {Link} from "react-router-dom";

function ProductItem () {

    // const filteredItems = items.filter((item) => item.id <= 8);
    const filteredItems = items.filter((item) => item.proud);


    return (
        <>
            {filteredItems.map((item) => (
                <div
                    key={item.id} className= "product normal">
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                         to= {`/shopBy/product/${item.id}`}
                    >
                        <div className= "product-header">
                            <img src={item.img} alt= "product1"/>

                        </div>
                        <div className= "product-details">
                            <p>{item.description}</p>
                            <p className= "item-price">USD {item.price}</p>
                        </div>
                    </Link>

                </div>

            ))}
        </>

    )
}
export default ProductItem;