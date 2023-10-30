import React, {useState} from 'react';
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
import ProductPage, { CartContext } from "./Pages/ProductPage";


function App() {

    const [cartItem, setCartItem] = useState([]);

    const addToCart = (item) => {
        setCartItem([...cartItem, item])
    }

  return (
      <>
          <CartContext.Provider value= {{ cartItem, addToCart }}>
        <Navbar/>
        <Routes>
          <Route index path= "/" element={<Home />}/>
          <Route path= "shopBy" element={<ShopBy/>} >
              <Route path= "all" element={<All/>} />
              <Route path= "clothing" element={<Clothing/>} />
              <Route path= "shoes" element={<Shoes/>} />
              <Route path= "bags" element={<Bags/>} />
          </Route>
            <Route path= "allPage" element={<AllPage/>} >
                <Route path= "all" element={<All/>} />
            </Route>
          <Route path= "clothingPage" element={<ClothingPage/>} >
              <Route path= "clothing" element={<Clothing/>} />
          </Route>
          <Route path= "shoesPage" element={<ShoesPage/>} >
              <Route path= "shoes" element={<Shoes/>} />
          </Route>
            <Route path= "bagsPage" element={<BagsPage/>} >
                <Route path= "bags" element={<Bags/>} />
            </Route>
            <Route path= "shopBy/product/:id" element={<ProductPage/>} />
        </Routes>
              </CartContext.Provider>
      </>

  );
}

export default App;
