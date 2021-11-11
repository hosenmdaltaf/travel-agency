import React from 'react'
import Slider from "react-slick";

function Trending() {

    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    return (
      
        <div class="container">
        <h1 >Trending Deals </h1>
      {/* <Slider {...settings}>         */}
  <div className="row trdcol ">
 
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-gri ">
  
    <div className="trdseaction">
            <div className="trdimgcover">
            <img  className="trdimg" src="images/DtJfvWYtSJc0elYWC2okSUrZAJwqGtMo.jpg" alt="cardimg"/>
            </div>
            <div className="trdcontent">
            <h5>5 Nights 6 Days of Glittering </h5>
            <div className="trdprice">
           
           <img className="moneyimg" src="images/icons8-euro-money-50.png" alt="cardimg"/>
           <p>18000</p>
           </div>
              <p className="trdcontentp">Kathmandu, Nepal - Pokhara, Nepal - Nagarkot, Nepal</p>


            </div>
            </div>
    </div>
    
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-gri">
    <div className="trdseaction">
            <div className="trdimgcover">
            <img  className="trdimg" src="images/pexels-lumn-167699.jpg" alt="cardimg"/>
            </div>
            <div className="trdcontent">
            <h5>5 Nights 6 Days of Glittering </h5>
            <div className="trdprice">
           
           <img className="moneyimg" src="images/icons8-euro-money-50.png" alt="cardimg"/>
           <p>18000</p>
           </div>
              <p className="trdcontentp">Kathmandu, Nepal - Pokhara, Nepal - Nagarkot, Nepal</p>


            </div>
            </div>
    </div>
    
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-gri">
    <div className="trdseaction">
            <div className="trdimgcover">
            <img  className="trdimg" src="images/pexels-pixabay-221457.jpg" alt="cardimg"/>
            </div>
            <div className="trdcontent">
            <h5>5 Nights 6 Days of Glittering </h5>
            <div className="trdprice">
           
           <img className="moneyimg" src="images/icons8-euro-money-50.png" alt="cardimg"/>
           <p>18000</p>
           </div>
              <p className="trdcontentp">Kathmandu, Nepal - Pokhara, Nepal - Nagarkot, Nepal</p>


            </div>
            </div>
    </div>
    
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-gri">
    <div className="trdseaction">
            <div className="trdimgcover">
            <img  className="trdimg" src="images/pexels-aleksandar-pasaric-325185(1).jpg" alt="cardimg"/>
            </div>
            <div className="trdcontent">
            <h5>5 Nights 6 Days of Glittering </h5>
            <div className="trdprice">
           
            <img className="moneyimg" src="images/icons8-euro-money-50.png" alt="cardimg"/>
            <p>18000</p>
            </div>
              
              <p className="trdcontentp">Kathmandu, Nepal - Pokhara, Nepal - Nagarkot, Nepal</p>


            </div>
          
        </div>

    </div>
    
  </div>
{/* </Slider> */}
  
  </div>

     
    )
}

export default Trending
