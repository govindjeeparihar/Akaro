import React from 'react';
import BannerBG from '../images/about-bg.jpg';


const Supporter = () =>{
    return(
        <>
<div className="SectionHeader" style={{backgroundImage:`url(${BannerBG})`}}>
                <div className="container">
                    <h2>Supporter</h2>
                </div>
            </div>
        </>
    )
}

export default Supporter;