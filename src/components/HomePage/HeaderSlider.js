import React from 'react'
import Slider from "react-slick";

function HeaderSlider() {

    const settings = {
        // dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    
      };
    return (
        <div class="container header">
             <Slider {...settings}>
          <div  className="hero-seaction">
            <img src="images/pexels-lumn-167699.jpg" className="bannerimg" alt="bannerimg"/>
          </div>
        
          <div  className="hero-seaction">
            <img src="images/pexels-aleksandar-pasaric-325185(1).jpg" className="bannerimg" alt="bannerimg"/>
          </div>
          
        </Slider>
        </div>
    )
}

export default HeaderSlider
