import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import ShopBy from "./Pages/ShopBy";

function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route index path= "/" element={<Home />}/>
          <Route path= "/shopBy" element={<ShopBy/>} />
        </Routes>
      </div>

  );
}

export default App;
