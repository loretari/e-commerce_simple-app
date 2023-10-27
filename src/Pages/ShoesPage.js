import React from 'react';
import '../Components/ProudProducts/ProudProducts.css';
import { Outlet } from "react-router";
import ShoesHeader from "../Components/ShopBy/ShoesHeader";

function ShoesPage () {


    return (
        <>

            <ShoesHeader />
            <Outlet />
        </>
    )
}
export default ShoesPage;