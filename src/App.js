import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Home/Header";

function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path= "/" element={<Header />}/>
        </Routes>
      </div>

  );
}

export default App;
