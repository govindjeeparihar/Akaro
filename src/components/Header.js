import React from 'react';
import '../css/Header.css';
import Logo from './Logo';
import Navigation from './Navigation'

const Header = () => {
    return (
        <>
            <header>
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="header-email-phone">
                                    <ul>
                                        <li>MAIL: <a href="#">contact@akaro.com</a></li>
                                        <li>PHONE: <span>+91 9899287665</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="donate-btn">
                                    <a href="#">Donate Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
                <div className="container">
                <p className="tagline">Association FOR Education AND Social Welfare</p>  
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-3"><Logo /></div>
                    <div className="col-sm-12 col-md-8 col-lg-9"><Navigation /></div>
                </div>
            </div>
            </header>
        </>
    )
}

export default Header;