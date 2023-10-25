import React, {useState} from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import LogoImg from '../Assets/logo_Smile2.png';


function Navbar () {





    const [mobileNav, setMobileNav] = useState(false);



    return (
        <>
            <div className= "navMenu" style={{display: mobileNav? 'flex' : 'none'}}>

                        <span className= "header-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.54 5.48H3.5a.48.48 0 01-.463-.662.47.47 0 01.443-.288h13A.48.48 0 0117 5a.49.49 0 01-.46.48zM16.54 15.48H3.5A.49.49 0 013 15a.48.48 0 01.48-.47h13A.471.471 0 0117 15a.48.48 0 01-.46.48zM16.54 10.48H3.5A.49.49 0 013 10a.48.48 0 01.48-.47h13A.48.48 0 0117 10a.49.49 0 01-.46.48z" fill="currentColor"></path></svg>

                        </span>
                <Link
                    activeClass= 'active'
                    to= "/"
                    spy={true} s
                    mooth={true}
                    offset={-100}
                    duration={500}
                    className= "listItem"
                    onClick = {() => setMobileNav(false)}>Shop By</Link>
                <Link
                    activeClass= 'active'
                    to= "/"
                    spy={true} s
                    mooth={true}
                    offset={-100}
                    duration={500}
                    className= "listItem"
                    onClick = {() => setMobileNav(false)}>Clothing</Link>
                <Link
                    activeClass= 'active'
                    to= "/"
                    spy={true} s
                    mooth={true}
                    offset={-100}
                    duration={500}
                    className= "listItem"
                    onClick = {() => setMobileNav(false)}>Shoes</Link>
                <Link
                    activeClass= 'active'
                    to= "/"
                    spy={true} s
                    mooth={true}
                    offset={-100}
                    duration={500}
                    className= "listItem"
                    onClick = {() => setMobileNav(false)}>Bags</Link>

            </div>


        <nav className= "navbar" id= "navbar">
        <div className= "container">
            <div className= "nav-container">
                <div className= "nav-logo">
                    <Link
                        activeClass= 'active'
                        to= '/'
                        spy={true} s
                        mooth={true}
                        offset={-100}
                        duration={500}
                        style={{textDecoration: 'none'}}
                        className= "navLinksLogo">
                        <img src={LogoImg} alt= "logo" /></Link>

                </div>
                <div className= "nav-links">
                    <Link
                        activeClass= 'active'
                        to= '/'
                        spy={true} s
                        mooth={true}
                        offset={-100}
                        duration={500}
                        style={{textDecoration: 'none'}}
                        className= "navLinksListItem">Shop By</Link>
                    <Link
                        activeClass= 'active'
                        to= '/'
                        spy={true} s
                        mooth={true}
                        offset={-100}
                        duration={500}
                        style={{textDecoration: 'none'}}
                        className= "navLinksListItem">Clothing</Link>
                   <Link
                        activeClass= 'active'
                        to= '/'
                        spy={true} s
                        mooth={true}
                        offset={-100}
                        duration={500}
                        style={{textDecoration: 'none'}}
                        className= "navLinksListItem">Shoes</Link>
                    <Link
                        activeClass= 'active'
                        to= '/'
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
                                <span>
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0-7a3 3 0 110 6 3 3 0 010-6zM10 11c-5 0-7 2-7 7h14c0-5-2-7-7-7zm0 1c4.08 0 5.73 1.33 6 5H4c.27-3.67 1.92-5 6-5z" fill="currentColor"></path></svg>
                       </span>
                            </li>
                            <li className= "header-icon">
                               <span>
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
                               <span>
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
                    {/*</div>*/}

                </section>

                </section>
            </div>
        </div>

    </nav>

        </>

)
}

export default Navbar;

{/*<>*/}
{/*    <div className= {`mobile-nav-full ${mobileNav ? "open-nav" : "closed-nav"}`}>*/}
{/*        <i*/}
{/*            onClick={() => setMobileNav(!mobileNav)}*/}
{/*        >*/}
{/*            <svg xmlns="http://www.w3.org/2000/svg"*/}
{/*                 height="1em" viewBox="0 0 384 512">*/}
{/*                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>*/}
{/*            </svg>*/}
{/*        </i>*/}
{/*        /!*<i*!/*/}
{/*        /!*    onClick={() => setMobileNav(!mobileNav)}*!/*/}
{/*        /!*    className= "fa-sharp fal-solid fa-xmark"*!/*/}
{/*        /!*></i>*!/*/}
{/*        <div className= "mobile-links">*/}
{/*            <Link to= "/">clothing</Link>*/}
{/*            <Link to= "/">shoes</Link>*/}
{/*            <Link to= "/">bags</Link>*/}
{/*        </div>*/}
{/*    </div>*/}


{/*    <nav className= "navbar" id= "navbar">*/}
{/*        <div className= "container">*/}
{/*            <div className= "navMenu" style={{display: mobileNav? 'flex' : 'none'}}>*/}
{/*                /!*<div className= {`nav-container ${sticky ? "cont-sticky" : ""}`}>*!/*/}
{/*                <div className= "nav-container">*/}

{/*                    <div className= "nav-logo">*/}
{/*                        <Link style={{textDecoration: 'none'}} to='/'><img src={LogoImg} alt= "logo"/></Link>*/}
{/*                        <Link style={{textDecoration: 'none'}} to='/'><p>Lor_DesIgn</p></Link>*/}
{/*                    </div>*/}


{/*                    <Link style={{textDecoration: 'none'}} to= '/'>*/}
{/*                        Shop By*/}
{/*                    </Link>*/}

{/*                    <Link style={{textDecoration: 'none'}} to={'/clothing'}>*/}
{/*                        Clothing*/}
{/*                    </Link>*/}

{/*                    <Link style={{textDecoration: 'none'}} to='/shoes'>*/}
{/*                        Shoes*/}
{/*                    </Link>*/}

{/*                    <Link style={{textDecoration: 'none'}} to='/bags'>*/}
{/*                        Bags*/}
{/*                    </Link>*/}
{/*                    <div className= "nav-login-cart">*/}



{/*                        <Link  to='/login'><button>Login</button></Link>*/}
{/*                        /!*<i className= "fa-solid fa-cart-shopping"></i>*!/*/}

{/*                        <Link  to= '/cart'>*/}
{/*                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">*/}
{/*                                <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />*/}
{/*                            </svg>*/}
{/*                        </Link>*/}
{/*                        <div className= "nav-cart-count">0</div>*/}
{/*                    </div>*/}

{/*                    <div className= "hamburger-menu">*/}
{/*                        <img src={MenuImg} alt= "menu"/>*/}
{/*                        <img alt= "menu" onClick={() => setMobileNav(!mobileNav)}*/}
{/*                             className="fa-solid fa-bars hamburger-hamb"*/}
{/*                        />*/}

{/*                    </div>*/}
{/*                </div>*/}

{/*            </div>*/}
{/*        </div>*/}
{/*    </nav>*/}
{/*</>*/}


















