import React from 'react';
import BannerBG from '../images/contact-bg.jpg';


const Contact = () => {
    return (
        <>
            <div className="SectionHeader" style={{ backgroundImage: `url(${BannerBG})` }}>
                <div className="container">
                    <h2>Contact Us</h2>
                </div>
            </div>

            <div className="contact-page py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <div className="entry-content">
                                <h4>Get In touch with us</h4>
                                <p>Akaro Association FOR Education AND Social Welfare is a Non-govt company, incorporated on 15 Sep, 2010. It's a private unlisted company and is classified as'company limited by shares'.</p>
                                <ul>
                                    <li><i className="fa fa-phone"></i><span>+91 9899287665</span></li>
                                    <li><i className="fa fa-envelope"></i><span>contact@akaro.com</span></li>
                                    <li><i className="fa fa-map-marker"></i><span>B-738, F.F GD COLONY MAYUR VIHAR PHASE-III, DL 110096 IN. DELHI New Delhi, India</span></li>
                                </ul>
                                 
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <form className="contact-form">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                <input className="form-control" type="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                <textarea className="form-control" rows="15" cols="6" placeholder="Messages"></textarea>
                                </div>
                                    <input className="btn-concat" type="submit" value="Contact us" />
                                 
                            </form>
                        </div>
                         
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;