import React from 'react';
import './ProudProducts.css'
import ProductItem from "./ProductItem";


function ProudProducts() {
    return (
          <div className= "proud-container">
              <h2 className= "container proud-h2">
                  The Selection</h2>
              <div className= "container">
                  <div className= "products-grid">
                     <ProductItem/>
                  </div>

              </div>
          </div>
    )
}

export default ProudProducts;