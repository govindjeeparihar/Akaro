import React from 'react';
import BannerBG from '../images/about-bg.jpg';


const Gallery = () =>{
    return(
        <>
<div className="SectionHeader" style={{backgroundImage:`url(${BannerBG})`}}>
                <div className="container">
                    <h2>Portfolio</h2>
                </div>
            </div>
        </>
    )
}

export default Gallery;