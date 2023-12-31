import React from 'react';
import Hero from "../Components/Hero/Hero";
import ProudProducts from "../Components/ProudProducts/ProudProducts";
import Banner from "../Components/Banner/Banner";
import Banner1 from '../Components/Assets/Banner/Banner1.jpg';
import Banner2 from '../Components/Assets/Banner/Banner2.jpg';
import BannerReverse from "../Components/Banner/BannerReverse";
import TrendingSlider from "../Components/Trending/TrendingSlider";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";


function Home () {
    return (
        <>
            <Hero />
            <ProudProducts />
            <Banner
            title= "Cloaks from Wool we love"
            text = "Discover universally flattering and endlessly versatile styles, perfect for fall."
            img={Banner1}
            />
            <TrendingSlider/>
            <BannerReverse
            title= "Dresses it is so charming."
            text= "Discover a fresh twist on power dressing with playful proportions."
            img={Banner2}
            />
            <NewsLetter/>
            <Footer/>
       </>
    )
}

export default Home;