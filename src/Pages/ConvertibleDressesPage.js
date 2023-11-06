import React from 'react';
import '../Components/ProudProducts/ProudProducts.css';
import { Outlet } from "react-router";
import ConvertibleDressesHeader from "../Components/ShopBy/ConvertibleDressesHeader";

function ConvertibleDressesPage () {


    return (
        <>

            <ConvertibleDressesHeader />
            <Outlet />
        </>
    )
}
export default ConvertibleDressesPage;