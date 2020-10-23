import React from 'react';
import HomeSlider from './HomeSlider';
import HandsG from '../images/hands-gray.png';
import HandsW from '../images/hands-white.png';

import DonationG from '../images/donation-gray.png';
import DonationW from '../images/donation-white.png';

import CharityG from '../images/charity-gray.png';
import CharityW from '../images/charity-white.png';

import WelcomeImg from '../images/welcome.jpg';

import Volunteeres from '../images/dove.png';
import WaterWells from '../images/logoIcon.png';
import ChildrenHelped from '../images/teamwork.png';


const Home = () => {
    return (
        <>
            <HomeSlider />

            <div className="IconBoxes">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                            <div className="icon-box active">
                                <figure className="d-flex justify-content-center">
                                    <img src={HandsG} alt="HandsG" />
                                    <img src={HandsW} alt="HandsW" />
                                </figure>
                                <header className="entry-header">
                                    <h3>Become a Volunteer</h3>
                                </header>
                                <div className="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <figure className="d-flex justify-content-center">
                                    <img src={DonationG} alt="DonationG" />
                                    <img src={DonationW} alt="DonationW" />
                                </figure>
                                <header className="entry-header">
                                    <h3>Dance &amp; Music</h3>
                                </header>
                                <div className="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <figure className="d-flex justify-content-center">
                                    <img src={CharityG} alt="CharityG" />
                                    <img src={CharityW} alt="CharityW" />
                                </figure>
                                <header className="entry-header">
                                    <h3>Online Conference</h3>
                                </header>
                                <div className="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-welcome">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 order-2 order-lg-1">
                            <div className="welcome-content">
                                <header className="entry-header">
                                    <h2>Wellcome to Akaro</h2>
                                </header>

                                <div className="entry-content mt-5">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu libero consequat tempus. Quisque molestie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.</p>
                                </div>

                                <div className="entry-footer mt-5">
                                    <a href="#" className="btn mr-2">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6 mt-4 order-1 order-lg-2">
                            <img className="img-fluid" src={WelcomeImg} alt="welcome" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="home-achieved">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="coL-sm-12 col-lg-6">
                            <div className="section-heading">
                                <h2>We like to help all those children who have not been able to study for any reason. After many years, we have achieved many goals.</h2>
                                <p className="mt-5">Dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6">
                            <div className="milestones d-flex flex-wrap justify-content-between">

                                <div className="col-sm-12 col-md-4 mt-5 mt-lg-0">
                                    <div className="counter-box">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img src={ChildrenHelped} alt="ChildrenHelped" />
                                        </div>

                                        <div className="d-flex justify-content-center align-items-baseline">
                                            <div className="start-counter" data-to="120" data-speed="2000">120</div>
                                            <div className="counter-k">K</div>
                                        </div>

                                        <h3 className="entry-title">Children helped</h3>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-4 mt-5 mt-lg-0">
                                    <div className="counter-box">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img src={WaterWells} alt="WaterWells" />
                                        </div>
                                        <div className="d-flex justify-content-center align-items-baseline">
                                            <div className="start-counter">79</div>
                                        </div>

                                        <h3 className="entry-title">Water wells</h3>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-4 mt-5 mt-lg-0">
                                    <div className="counter-box">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img src={Volunteeres} alt="Volunteeres" />
                                        </div>

                                        <div className="d-flex justify-content-center align-items-baseline">
                                            <div className="start-counter">253</div>
                                        </div>

                                        <h3 className="entry-title">Volunteeres</h3> 
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;