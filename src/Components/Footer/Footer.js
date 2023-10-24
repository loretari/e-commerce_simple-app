import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';

function Footer () {
    return (
        <>
        <footer>
      <div className= "footer-links">
          <Link
              activeClass= 'active'
              to= 'navbar'
              spy={true} s
              mooth={true}
              offset={-100}
              duration={500}
          >About</Link>
          <Link
              activeClass= 'active'
              to= 'header'
              spy={true} s
              mooth={true}
              offset={-100}
              duration={500}
          >Store locator</Link>
          <Link
              activeClass= 'active'
              to= 'header'
              spy={true} s
              mooth={true}
              offset={-100}
              duration={500}
          >FAQs</Link>
          <Link
              activeClass= 'active'
              to= 'header'
              spy={true} s
              mooth={true}
              offset={-100}
              duration={500}
          >News</Link>
          <Link
              activeClass= 'active'
              to= 'header'
              spy={true} s
              mooth={true}
              offset={-100}
              duration={500}
          >Careers</Link>
          <Link
              activeClass= 'active'
              to= 'header'
              spy={true} s
              mooth={true}
              offset={-100}
              duration={500}
          >Contact us</Link>


      </div>
        <p className= "copyright" >Copyright @ 2023 Lor@. All rights reserved</p>
        </footer>
            </>
    )
}

export default Footer;