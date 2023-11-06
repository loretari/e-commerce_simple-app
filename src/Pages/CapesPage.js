import React from 'react';
import '../Components/ProudProducts/ProudProducts.css';
import { Outlet } from "react-router";
import CapesHeader from "../Components/ShopBy/CapesHeader";

function CapesPage () {


    return (
        <>

            <CapesHeader />
            <Outlet />
        </>
    )
}
export default CapesPage;