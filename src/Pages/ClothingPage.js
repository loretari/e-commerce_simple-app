import React from 'react';
import '../Components/ProudProducts/ProudProducts.css';
import ClothingHeader from "../Components/ShopBy/ClothingHeader";
import { Outlet } from "react-router";

function ClothingPage () {


    return (
        <>

            <ClothingHeader />
            <Outlet />
        </>
    )
}
export default ClothingPage;