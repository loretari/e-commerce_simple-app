import React from 'react';
import '../Components/ProudProducts/ProudProducts.css';
import { Outlet } from "react-router";
import BagsHeader from "../Components/ShopBy/BagsHeader";

function BagsPage () {


    return (
        <>

            <BagsHeader />
            <Outlet />
        </>
    )
}
export default BagsPage;