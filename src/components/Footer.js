import React from 'react';
import '../css/Footer.css';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer>
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 pr-5">
                            <div className="foot-about">
                            <Logo />
                                <p className="text-justify">Akaro Association FOR Education AND Social Welfare is a Non-govt company, incorporated on 15 Sep, 2010. It's a private unlisted company and is classified as'company limited by shares'.</p>
                                <ul className="d-flex flex-wrap align-items-center">
                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                            <h2>Useful Links</h2>
                            <ul>
                                <li><a href="#">Privacy Polticy</a></li>
                                <li><a href="#">Become a Volunteer</a></li>
                                <li><a href="#">Donate</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Causes</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                            <div className="foot-contact">
                                <h2>Contact</h2>
                                <ul>
                                    <li><i className="fa fa-phone"></i><span>+91 9899287665</span></li>
                                    <li><i className="fa fa-envelope"></i><span>contact@akaro.com</span></li>
                                    <li><i className="fa fa-map-marker"></i><span>B-738, F.F GD COLONY MAYUR VIHAR PHASE-III, DL 110096 IN. DELHI New Delhi, India</span></li>
                                </ul>
                            </div>
                            <div className="subscribe-form">
                                <form className="d-flex flex-wrap align-items-center">
                                    <input type="email" placeholder="Your email" />
                                    <input type="submit" value="send" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                     
                            <p>Copyright © 2020 All rights reserved | This template is made by gjee </p>
                         
                </div>
            </div>
        </footer>
    )
}

export default Footer;