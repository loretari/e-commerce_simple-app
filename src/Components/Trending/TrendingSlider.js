import React from 'react';
import './Trending.css';
// import Img9 from '../Assets/Products/9.jpg';
// import Img9 from '../Assets/Products/9.jpg';
import Img5 from '../Assets/ProudProducts/5.jpg';
// import arrow from '../Assets/arrow.png';
import Img13 from '../Assets/Products/13.jpg';
import Img12 from '../Assets/Products/12.jpg';
import Img11 from '../Assets/Products/11.jpg';
import Img10 from '../Assets/Products/10.jpg';
import Img9 from '../Assets/Products/9.jpg';
import TrendingItem from "./TrendingItem";

function TrendingSlider () {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    }

    return (
         <div className= "trending">
             <div className= "container">
             <div className= "title-btns">
                 <h3>Our expert curation of consciously crafted, lasting luxury</h3>
                 <div className= "btns">
                     <button onClick={slideLeft}>
                         <i className= "fa-solid fa-arrow-left"></i>
                         {/*<img src={arrow}/>*/}
                         <svg xmlns="http://www.w3.org/2000/svg"
                              height="1em" viewBox="0 0 448 512">
                             <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                     </button>
                     <button onClick={slideRight}>
                         <i className= "fa-solid fa-arrow-right"></i>
                         <svg xmlns="http://www.w3.org/2000/svg"
                              height="1em" viewBox="0 0 448 512">
                             <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                     </button>
                 </div>
             </div>

             <div className= "row-container" id= "slider">
                 <TrendingItem
                 img={Img9}
                 description= "Navy Blue Dress"
                 price= "$121"
                 />
                 <TrendingItem
                     img={Img10}
                     description= "Navy Blue Dress"
                     price= "$104"
                 />
                 <TrendingItem
                     img={Img11}
                     description= "Blue Dress in Ornament"
                     price= "$108"
                 />
                 <TrendingItem
                     img={Img12}
                     description= "Dress with dragon-flies"
                     price= "$95"
                 />
                 <TrendingItem
                     img={Img13}
                     description= "Black dress"
                     price= "$103"
                 />
                 <TrendingItem
                     img={Img5}
                     description= "Navy Blue Dress"
                     price= "$121"
                 />
                 <TrendingItem
                     img={Img9}
                     description= "Navy Blue Dress"
                     price= "$121"
                 />
                 <TrendingItem
                     img={Img9}
                     description= "Navy Blue Dress"
                     price= "$121"
                 />

             </div>
             </div>
         </div>


    )
}

export default TrendingSlider;