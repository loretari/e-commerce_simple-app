import React from 'react';
import './Header.css';
// import Dress1 from '../Assets/Header/Dress1.jpg';
import Dress2 from '../Assets/Header/Dress2.jpg';
import Dress3 from '../Assets/Header/Dress3.jpg';
import Dress4 from '../Assets/Header/Dress4.jpg';
import { useState } from 'react';


function Header () {

    const [overlay, setOverlay] = useState(false);

    function inOverlay() {
        setOverlay(true);
    }

    function outOverlay() {
        setOverlay(false);
    }

    return (
        <>
            <div className= "home-container">
                <div className= "container">
                    <div className= "grid-container">
                        <div className= "featured grid-one">
                           <div
                           id= "img1"
                           className= "lil-overlay"
                           onMouseEnter={inOverlay}
                           onMouseLeave={outOverlay}
                           ></div>
                         <img src={Dress2} alt= "dress1" />
                            <p className="main-description">Velvet In Black</p>

                        </div>
                        <div className="featured grid-two">
                            <div
                                id="img2"
                                className={overlay ? "hard-overlay" : "lil-overlay"}
                                onMouseEnter={inOverlay}
                                onMouseLeave={outOverlay}
                            ></div>
                            <img src={Dress2} alt="dress2" />
                            <p className="main-description">Elegant in Black</p>
                        </div>
                        <div className="featured grid-four">
                            <div
                                id="img3"
                                className={overlay ? "hard-overlay" : "lil-overlay"}
                                onMouseEnter={inOverlay}
                                onMouseLeave={outOverlay}
                            ></div>
                            <img src={Dress3} alt="dress3" />
                            <p className= "main-description">Black in Black</p>

                        </div>
                        <div className="featured grid-four-low">
                            <div
                                id="img4"
                                className={overlay ? "hard-overlay" : "lil-overlay"}
                                onMouseEnter={inOverlay}
                                onMouseLeave={outOverlay}
                            ></div>
                            <img src={Dress4} alt="dress4" />
                            <p className="main-description">If it is not black?</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;