import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import ShopBy from "./Pages/ShopBy";
import Clothing from "./Components/ShopBy-pages/Clothing";
import All from "./Components/ShopBy-pages/All";
import Shoes from "./Components/ShopBy-pages/Shoes";
import Bags from "./Components/ShopBy-pages/Bags";
import ClothingPage from "./Pages/ClothingPage";
import BagsPage from "./Pages/BagsPage";
import ShoesPage from "./Pages/ShoesPage";
import AllPage from "./Pages/AllPage";

function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route index path= "/" element={<Home />}/>
          <Route path= "shopBy" element={<ShopBy/>} >
              <Route path= "all" element={<All/>} />
              <Route path= "clothing" element={<Clothing/>} />
              <Route path= "shoes" element={<Shoes/>} />
              <Route path= "bags" element={<Bags/>} />
          </Route>
            <Route path= "all" element={<AllPage/>} >
                <Route path= "all" element={<All/>} />
            </Route>
          <Route path= "clothing" element={<ClothingPage/>} >
              <Route path= "clothing" element={<Clothing/>} />
          </Route>
          <Route path= "shoes" element={<ShoesPage/>} >
              <Route path= "shoes" element={<Shoes/>} />
          </Route>
            <Route path= "bags" element={<BagsPage/>} >
                <Route path= "bags" element={<Bags/>} />
            </Route>
        </Routes>
      </div>

  );
}

export default App;
