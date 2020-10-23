import React from 'react';
import BannerBG from '../images/about-bg.jpg';
import WelcomeImg from '../images/welcome.jpg';

const About = () => {
    return (
        <>
            <div className="SectionHeader" style={{ backgroundImage: `url(${BannerBG})` }}>
                <div className="container">
                    <h2>About Us</h2>
                </div>
            </div>



            <div className="About py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-7 order-2 order-lg-1">
                            <div className="about-content">
                                <header className="entry-header">
                                    <h2>About AKARO</h2>
                                </header>
                                <div className="entry-content mt-5 text-justify">
                                    <p>Akaro Association FOR Education AND Social Welfare is a Non-govt company, incorporated on 15 Sep, 2010. It's a private unlisted company and is classified as'company limited by shares'.</p>

                                    <p>Company's authorized capital stands at Rs 1.0 lakhs and has 100.0% paid-up capital which is Rs 1.0 lakhs. Akaro Association FOR Education AND Social Welfare last annual general meet (AGM) happened on 28 Sep, 2017. The company last updated its financials on 31 Mar, 2017 as per Ministry of Corporate Affairs (MCA).</p>

                                    <p>Akaro Association FOR Education AND Social Welfare is majorly in Community, personal & Social Services business from last 10 years and currently, company operations are active. Current board members & directors are SHIV PUJAN MISHRA and KANCHAN KUMARI .</p>

                                    <p>Company is registered in Delhi (Delhi) Registrar Office. Akaro Association FOR Education AND Social Welfare registered address is B-738, F.F GD COLONY MAYUR VIHAR PHASE-III, DELHI New Delhi DL 110096 IN.</p>
                                </div>
                                <div className="entry-footer mt-5">
                                    <a href="#" className="btn gradient-bg mr-2">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 order-1 order-lg-2">
                            <img className="img-fluid" src={WelcomeImg} alt="welcome" />
                        </div>
                    </div>
                </div>
            </div>


        </>


    )
}

export default About;