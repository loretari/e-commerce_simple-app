import React from 'react';
import '../Components/ProudProducts/ProudProducts.css';
import ShopByHeader from "../Components/ShopBy/ShopByHeader";
import { Outlet } from "react-router";

function ShopBy () {


    return (
        <>

            <ShopByHeader />
            <Outlet />
        </>
    )
}
export default ShopBy;