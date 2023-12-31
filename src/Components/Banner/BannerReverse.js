import React from 'react';
import { Link } from "react-router-dom";
import './Banner.css';

function BannerReverse ({ title, text, img }) {
    return (
        <div className= "banner">
            <div className= "container">
                <div className= "banner-container-reverse">
                    <div className= "text-side">
                        <div className= "text">
                            <h2>{ title }</h2>
                            <p>{ text }</p>
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to= "dressesPage/dresses">
                                <button>Shop now</button>
                            </Link>

                        </div>
                    </div>
                    <div className= "img-side">
                        <img src={img} alt= "banner" className= "bannerImg"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BannerReverse;