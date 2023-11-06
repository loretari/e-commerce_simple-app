import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';

function Footer () {
    return (
        <>
        <footer>
      <div className= "footer-links">
          <Link
              onClick={() => window.scrollTo(0, 0)}
              activeClass= 'active'
              to= '/'
              spy={true} s
              mooth={true}
              offset={-100}
              duration={500}
          >About</Link>
          <Link
              onClick={() => window.scrollTo(0, 0)}
              activeClass= 'active'
              to= '/'
              spy={true} s
              mooth={true}
              offset={-100}
              duration={500}
          >Store locator</Link>
          <Link
              onClick={() => window.scrollTo(0, 0)}
              activeClass= 'active'
              to= '/'
              spy={true} s
              mooth={true}
              offset={-100}
              duration={500}
          >FAQs</Link>
          <Link
              onClick={() => window.scrollTo(0, 0)}
              activeClass= 'active'
              to= '/'
              spy={true} s
              mooth={true}
              offset={-100}
              duration={500}
          >News</Link>
          <Link
              onClick={() => window.scrollTo(0, 0)}
              activeClass= 'active'
              to= '/'
              spy={true} s
              mooth={true}
              offset={-100}
              duration={500}
          >Careers</Link>
          <Link
              onClick={() => window.scrollTo(0, 0)}
              activeClass= 'active'
              to= '/'
              spy={true} s
              mooth={true}
              offset={-100}
              duration={500}
          >Contact us</Link>


      </div>
        <p className= "copyright" >Copyright @ 2023 &nbsp;
            <a
                target= "_blank"
                rel= "noreferrer"
                href= "https://github.com/loretari"
            > Lor@ </a>
            All rights reserved</p>
        </footer>
            </>
    )
}

export default Footer;