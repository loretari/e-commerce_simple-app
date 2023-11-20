import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import ShopBy from "./Pages/ShopBy";
import Dresses from "./Components/ShopBy-pages/Dresses";
import All from "./Components/ShopBy-pages/All";
import Capes from "./Components/ShopBy-pages/Capes";
import ConvertiblesDresses from "./Components/ShopBy-pages/ConvertiblesDresses";
import DressesPage from "./Pages/DressesPage";
import ConvertibleDressesPage from "./Pages/ConvertibleDressesPage";
import CapesPage from "./Pages/CapesPage";
import AllPage from "./Pages/AllPage";
import ProductPage from "./Pages/ProductPage";


function App() {



  return (
      <>

        <Navbar/>
        <Routes>
          <Route index path= "/" element={<Home />}/>
          <Route path= "shopBy" element={<ShopBy/>} >
              <Route path= "all" element={<All/>} />
              <Route path= "dresses" element={<Dresses/>} />
              <Route path= "capes" element={<Capes/>} />
              <Route path= "convertibleDresses" element={<ConvertiblesDresses/>} />
          </Route>
            <Route path= "allPage" element={<AllPage/>} >
                <Route path= "all" element={<All/>} />
            </Route>
          <Route path= "dressesPage" element={<DressesPage/>} >
              <Route path= "dresses" element={<Dresses/>} />
          </Route>
          <Route path= "capesPage" element={<CapesPage/>} >
              <Route path= "capes" element={<Capes/>} />
          </Route>
            <Route path= "convertibleDressesPage" element={<ConvertibleDressesPage/>} >
                <Route path= "convertibleDresses" element={<ConvertiblesDresses/>} />
            </Route>
            <Route path= "shopBy/product/:id" element={<ProductPage/>} />
        </Routes>

      </>

  );
}

export default App;
