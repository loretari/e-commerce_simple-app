import React, {useContext, useState} from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import LogoImg from '../Assets/logo_Smile2.png';
import CrossImg from '../Assets/cart_cross_icon.png';
import EmptyCart from '../Cart/EmptyCart';
import CartWithItems from "../Cart/CartWithItems";
import {CartContext} from "../../Pages/ProductPage";



function Navbar () {

    // const [sticky, setSticky] = useState(false);


    const [cart, setCart] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    const { cartItem } = useContext(CartContext);




    // const handleScroll = () => {
    //     if (window.scrollY > 10) {
    //         setSticky(true);
    //      } else  {
    //         sticky(false);
    //     }
    // };

// window.addEventListener("scroll", handleScroll);

// const scrollToTop = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// };

    const openCart = () => {
        setCart(!cart);
    };


    return (
        <>
            <div className= {`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}>

            {/*<div className= "navMenu" style={{display: mobileNav? 'flex' : 'none'}}>*/}

                        <span
                            onClick={() => setMobileNav(!mobileNav)}
                            // className= "header-icon-cross"
                           >
                            <img src={CrossImg} alt= "cross" className= "header-icon-cross"/>
                            {/*<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.54 5.48H3.5a.48.48 0 01-.463-.662.47.47 0 01.443-.288h13A.48.48 0 0117 5a.49.49 0 01-.46.48zM16.54 15.48H3.5A.49.49 0 013 15a.48.48 0 01.48-.47h13A.471.471 0 0117 15a.48.48 0 01-.46.48zM16.54 10.48H3.5A.49.49 0 013 10a.48.48 0 01.48-.47h13A.48.48 0 0117 10a.49.49 0 01-.46.48z" fill="currentColor"></path></svg>*/}
                        </span>
                <div className= "mobile-links">
                <Link
                    activeClass= 'active'
                    to= "/shopBy/all"
                    spy={true} s
                    mooth={true}
                    offset={-100}
                    duration={500}
                    className= "listItem"
                    onClick = {() => setMobileNav(!mobileNav)}>Shop By</Link>
                <Link
                    activeClass= 'active'
                    to= "/clothingPage/clothing"
                    spy={true} s
                    mooth={true}
                    offset={-100}
                    duration={500}
                    className= "listItem"
                    onClick = {() => setMobileNav(!mobileNav)}>Clothing</Link>
                <Link
                    activeClass= 'active'
                    to= "/shoesPage/shoes"
                    spy={true} s
                    mooth={true}
                    offset={-100}
                    duration={500}
                    className= "listItem"
                    onClick = {() => setMobileNav(!mobileNav)}>Shoes</Link>
                <Link
                    activeClass= 'active'
                    to= "/bagsPage/bags"
                    spy={true} s
                    mooth={true}
                    offset={-100}
                    duration={500}
                    className= "listItem"
                    onClick = {() => setMobileNav(!mobileNav)}>Bags</Link>
                </div>
            </div>


            {/* overly */}
            <div
                onClick={openCart}
                className= {`page-overly ${cart ? "open-flex" : "closed-flex"}`}
            ></div>


            {/* cart */}
            <div className= {`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
            <div className= "cart-title-btn">
                    {/*{cart? (<h2 className= "cart-full-h2">Your Shopping Cart (0 items)</h2>) : (<h2>Your Shopping Cart (0 items)</h2>)}*/}
                <h2 className= "cart-full-h2">Your Shopping Cart (0 items)</h2>
                    <span onClick={openCart} >
                        <img src={CrossImg} alt= "cross" />
                    </span>
                </div>

                {/*----------*/}
                <div className= "cart-body">
                    {/*{cartArray === "" ? <EmptyCart/> : <CartWithItems/>}*/}
                    {cartItem.length < 1 ? (
                        <EmptyCart openCart={openCart} />
                        ) : (
                        <CartWithItems />
                    )}

                </div>
            </div>


        <nav className= "navbar" id= "navbar">
        <div className= "container">
            {/*<div className= {`nav-container ${sticky ? "cont-sticky" : ""}`}>*/}
            <div className= "nav-container">

            <div className= "nav-logo">
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        activeClass= 'active'
                        to= '/'
                        spy={true} s
                        mooth={true}
                        offset={-100}
                        duration={500}
                        style={{textDecoration: 'none'}}
                        className= "navLinksLogo">
                        <img
                            // onClick={scrollToTop}
                            src={LogoImg}
                            alt= "logo" /></Link>

                </div>
                <div className= "nav-links">
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to= '/shopBy/all'
                        activeClass= 'active'
                        spy={true} s
                        mooth={true}
                        offset={-100}
                        duration={500}
                        style={{textDecoration: 'none'}}
                        className= "navLinksListItem">Shop By</Link>
                    <Link
                        activeClass= 'active'
                        onClick={() => window.scrollTo(0, 0)}
                        to= '/clothingPage/clothing'
                        spy={true} s
                        mooth={true}
                        offset={-100}
                        duration={500}
                        style={{textDecoration: 'none'}}
                        className= "navLinksListItem">Clothing</Link>
                   <Link
                        activeClass= 'active'
                        onClick={() => window.scrollTo(0, 0)}
                        to= '/shoesPage/shoes'
                        spy={true} s
                        mooth={true}
                        offset={-100}
                        duration={500}
                        style={{textDecoration: 'none'}}
                        className= "navLinksListItem">Shoes</Link>
                    <Link
                        activeClass= 'active'
                        onClick={() => window.scrollTo(0, 0)}
                        to= '/bagsPage/bags'
                        // to= '/bags/bags'
                        spy={true} s
                        mooth={true}
                        offset={-100}
                        duration={500}
                        style={{textDecoration: 'none'}}
                        className= "navLinksListItem">Bags</Link>
                    <div className= "nav-login-cart">
                        <ul>
                            <li className= "header-icon">
                                   <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.48 3.91a3.25 3.25 0 012.68 1.62L10 6.85l.83-1.33a3.12 3.12 0 012.63-1.61 2.8 2.8 0 012.08.93c1.48 1.59 1.33 3.78-.37 5.57L10 15.66l-5.22-5.3c-1.67-1.85-1.8-4-.36-5.53a2.8 2.8 0 012.06-.92zm0-1a3.8 3.8 0 00-2.79 1.24C1.94 6 2 8.73 4 11l6 6.06 5.9-6c2.16-2.27 2.15-5.06.4-6.95a3.871 3.871 0 00-2.82-1.25A4.1 4.1 0 0010 5a4.23 4.23 0 00-3.52-2.09z" fill="currentColor"></path></svg>
                        </span>
                            </li>
                            <li className= "header-icon">
                                <span >
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0-7a3 3 0 110 6 3 3 0 010-6zM10 11c-5 0-7 2-7 7h14c0-5-2-7-7-7zm0 1c4.08 0 5.73 1.33 6 5H4c.27-3.67 1.92-5 6-5z" fill="currentColor"></path></svg>
                       </span>
                            </li>
                            <li className= "header-icon">
                               <span
                                   data-array-length={cartItem.length}
                                   onClick={openCart}
                                   className= {`fa-solid fa-cart-shopping ${
                                       cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                                       }`}
                               >
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.63 17.47l-.6-11a.51.51 0 00-.5-.47h-2v-.43a3.5 3.5 0 00-7 0V6h-2a.51.51 0 00-.5.47l-.62 11a.49.49 0 00.49.53h12.3a.49.49 0 00.43-.53zm-12.31-.42L4.9 7h10.2l.56 10.1-11.34-.05zM7.5 5.57a2.5 2.5 0 115 0V6h-5v-.43z" fill="currentColor"></path></svg>
                                   {/*<div className= "nav-cart-count">0</div>*/}
                               </span>

                            </li>



                        </ul>

                    </div>
                </div>

                <section >

                <section className= "hamburger-menu">
                {/*    <div className= "header-mobile">*/}
                    <div className= "nav-login-cart">
                        <ul>
                            <li className= "header-icon">
                                   <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.48 3.91a3.25 3.25 0 012.68 1.62L10 6.85l.83-1.33a3.12 3.12 0 012.63-1.61 2.8 2.8 0 012.08.93c1.48 1.59 1.33 3.78-.37 5.57L10 15.66l-5.22-5.3c-1.67-1.85-1.8-4-.36-5.53a2.8 2.8 0 012.06-.92zm0-1a3.8 3.8 0 00-2.79 1.24C1.94 6 2 8.73 4 11l6 6.06 5.9-6c2.16-2.27 2.15-5.06.4-6.95a3.871 3.871 0 00-2.82-1.25A4.1 4.1 0 0010 5a4.23 4.23 0 00-3.52-2.09z" fill="currentColor"></path></svg>
                        </span>
                            </li>
                            <li className= "header-icon">
                                <span>
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0-7a3 3 0 110 6 3 3 0 010-6zM10 11c-5 0-7 2-7 7h14c0-5-2-7-7-7zm0 1c4.08 0 5.73 1.33 6 5H4c.27-3.67 1.92-5 6-5z" fill="currentColor"></path></svg>
                       </span>
                            </li>
                            <li className= "header-icon">
                               <span
                                   data-array-length={cartItem.length}
                                   onClick={openCart}
                               className= {`fa-solid fa-cart-shopping hamburger-cart ${
                                   cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                                   }`}>
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.63 17.47l-.6-11a.51.51 0 00-.5-.47h-2v-.43a3.5 3.5 0 00-7 0V6h-2a.51.51 0 00-.5.47l-.62 11a.49.49 0 00.49.53h12.3a.49.49 0 00.43-.53zm-12.31-.42L4.9 7h10.2l.56 10.1-11.34-.05zM7.5 5.57a2.5 2.5 0 115 0V6h-5v-.43z" fill="currentColor"></path></svg>
                                   {/*<div className= "nav-cart-count">0</div>*/}
                               </span>

                            </li>
                <li className= "header-icon">
                    <span onClick={() => setMobileNav(!mobileNav)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.54 5.48H3.5a.48.48 0 01-.463-.662.47.47 0 01.443-.288h13A.48.48 0 0117 5a.49.49 0 01-.46.48zM16.54 15.48H3.5A.49.49 0 013 15a.48.48 0 01.48-.47h13A.471.471 0 0117 15a.48.48 0 01-.46.48zM16.54 10.48H3.5A.49.49 0 013 10a.48.48 0 01.48-.47h13A.48.48 0 0117 10a.49.49 0 01-.46.48z" fill="currentColor"></path></svg>

                    </span>
                   </li>


                        </ul>
                    </div>


                </section>

                </section>
            </div>
        </div>

    </nav>

        </>

)
}

export default Navbar;



