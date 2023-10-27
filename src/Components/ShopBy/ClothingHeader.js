import React, {useState} from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../Assets/arrow-left.png";

function ClothingHeader () {

    const [btnName, setBtnName] = useState("clothing");

    const handleBtnName = (e) => {
        setBtnName();
    };

    return (
        <>
            <div className= "container">
                <div className= "shopBy-header">
                    <div className= "title-home">
                        <Link
                            onClick={() => window.scrollTo(0, 0)}
                            to= "/">
                            <img src={ArrowLeft} alt= "arrow" />
                            Home
                        </Link>
                        <h3>{btnName}</h3>
                    </div>

                    <div className= "filter-btns">
                        <Link
                            to= "/all">
                            <button  onClick={() => handleBtnName("all")}>All</button>
                        </Link>
                        <Link
                            to= "/clothing">
                            <button  onClick={() => handleBtnName("clothing")}>Clothing</button>
                        </Link>
                        <Link
                            to= "/shoes">
                            <button  onClick={() => handleBtnName("shoes")}>Shoes</button>
                        </Link>
                        <Link
                            to= "/bags">
                            <button  onClick={() => handleBtnName("bags")}>Bags</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ClothingHeader;