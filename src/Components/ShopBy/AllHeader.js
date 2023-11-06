import React, {useState} from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../Assets/arrow-left.png";

function AllHeader () {

    const [btnName, setBtnName] = useState("all");

    const handleBtnName = (e) => {
        setBtnName(e);
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
                            Back
                        </Link>
                        <h3>{btnName}</h3>
                    </div>

                    <div className= "filter-btns">
                        <Link
                            to= "/allPage/all">
                            <button  onClick={() => handleBtnName("all")}>All</button>
                        </Link>
                        <Link
                            to= "/dressesPage/dresses">
                            <button  onClick={() => handleBtnName("dresses")}>Dresses</button>
                        </Link>
                        <Link
                            to= "/convertibleDressesPage/convertibleDresses">
                            <button  onClick={() => handleBtnName("convertibleDresses")}>Convertible Dresses</button>
                        </Link>
                        <Link
                            to= "/capesPage/capes">
                            <button  onClick={() => handleBtnName("capes")}>Capes</button>
                        </Link>


                    </div>
                </div>
            </div>
        </>
    )
}
export default AllHeader;