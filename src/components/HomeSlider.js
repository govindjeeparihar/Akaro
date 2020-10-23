import React from 'react';
import '../css/HomeSlider.css';
import Slider from 'react-slick';
 


const HomeSlider = () => {
    const settings = {
        fade:true,
        dots: true,
        infinite: true,
        autplay: true,
        speed:400,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
        <div className="HomeSlider">
            <Slider {...settings}>
                <div className="SliderItem">
                     
                    <div className="sliderInner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>Akaro 1</h2>
                                    <h4>4 a better world 1</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus ullamcorper</p>
                                   
                                    <a href="#" className="rm">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="SliderItem">
                     
                    <div className="sliderInner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>Akaro 2</h2>
                                    <h4>4 a better world 2</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus ullamcorper</p>
                                     
                                    <a href="#" className="btn ob">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="SliderItem">
                     
                    <div className="sliderInner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>Akaro 3</h2>
                                    <h4>4 a better world 3</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus ullamcorper</p>
                                    
                                    <a href="#" className="btn ob">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Slider>
        </div>
    )
}

export default HomeSlider;