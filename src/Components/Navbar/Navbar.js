import React, {useState} from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import LogoImg from '../Assets/logo_Smile2.png';

function Navbar () {

    const [links, setLinks] = useState("shop");

    return (
        <>
        <nav className= "navbar">
            <div className= "container">
                <div className= "nav-container">

            <div className= "nav-logo">
                <Link style={{textDecoration: 'none'}} to='/'><img src={LogoImg} alt= "logo"/></Link>
                <Link style={{textDecoration: 'none'}} to='/'><p>Lor_DesIgn</p></Link>
            </div>
            <ul className= "nav-links">
              <li onClick={() => {setLinks("shop")}}>
                  <Link style={{textDecoration: 'none'}} to= '/'>
                      Shop By
                  </Link> {links==="shop" ? <hr/>:<></>}</li>
              <li onClick={() => {setLinks ("clothing")}}>
                  <Link style={{textDecoration: 'none'}} to={'/clothing'}>
                      Clothing
                  </Link> {links==="clothing" ? <hr/>:<></>}</li>
              <li onClick={() => {setLinks ("shoes")}}>
                  <Link style={{textDecoration: 'none'}} to='/shoes'>
                      Shoes
                  </Link> {links==="shoes" ? <hr/>:<></>}</li>
              <li onClick={() => {setLinks ("bags")}}>
                  <Link style={{textDecoration: 'none'}} to='/bags'>
                      Bags
                  </Link>{links==="bags" ? <hr/>:<></>}</li>
                <div className= "nav-login-cart">
                    <Link  to='/login'><button>Login</button></Link>
                    <Link  to= '/cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
                        </svg>
                    </Link>
                    <div className= "nav-cart-count">0</div>
                </div>
                       </ul>

            </div>
            </div>
        </nav>
</>
    )
}

export default Navbar;