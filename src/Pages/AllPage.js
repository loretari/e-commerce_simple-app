import React from 'react';
import '../Components/ProudProducts/ProudProducts.css';
import { Outlet } from "react-router";
import AllHeader from "../Components/ShopBy/AllHeader";

function AllPage () {


    return (
        <>

            <AllHeader />
            <Outlet />
        </>
    )
}
export default AllPage;