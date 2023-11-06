import React from 'react';
import '../Components/ProudProducts/ProudProducts.css';
import DressesHeader from "../Components/ShopBy/DressesHeader";
import { Outlet } from "react-router";

function DressesPage () {


    return (
        <>

            <DressesHeader />
            <Outlet />
        </>
    )
}
export default DressesPage;