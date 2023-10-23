import React from 'react';
import './ProudProducts.css'
// import Img1 from '../Assets/ProudProducts/1.jpg';
import Img2 from '../Assets/ProudProducts/2.jpg';
import Img3 from '../Assets/ProudProducts/3.jpg';
import Img4 from '../Assets/ProudProducts/4.jpg';
import Img5 from '../Assets/ProudProducts/5.jpg';
import Img6 from '../Assets/ProudProducts/6.jpg';
import Img7 from '../Assets/ProudProducts/7.jpg';
import Img8 from '../Assets/ProudProducts/8.jpg';
import ProductItem from "./ProductItem";


function ProudProducts() {
    return (
          <div className= "proud-container">
              <h2 className= "container proud-h2">
                  The Selection</h2>
              <div className= "container">
                  <div className= "products-grid">
                      <ProductItem
                          img={Img2}
                          description= "Wool Coat with Belt"
                          price= "USD 119.00"
                      />
                      <ProductItem
                          img={Img2}
                          description= "Wool Coat with Belt"
                          price= "USD 119.00"
                      />
                      <ProductItem
                          img={Img3}
                          description= "Wool Coat with Belt"
                          price= "USD 119.00"
                      />
                      <ProductItem
                          img={Img4}
                          description= "Wool Coat with Belt"
                          price= "USD 119.00"
                      />
                      <ProductItem
                          img={Img5}
                          description= "Wool Coat with Belt"
                          price= "USD 119.00"
                      />
                      <ProductItem
                          img={Img6}
                          description= "Wool Coat with Belt"
                          price= "USD 119.00"
                      />
                      <ProductItem
                          img={Img7}
                          description= "Wool Coat with Belt"
                          price= "USD 119.00"
                      />
                      <ProductItem
                          img={Img8}
                          description= "Wool Coat with Belt"
                          price= "USD 119.00"
                      />
                  </div>

              </div>
          </div>
    )
}

export default ProudProducts;