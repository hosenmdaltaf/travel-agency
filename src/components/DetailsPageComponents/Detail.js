import React from 'react'

function Details() {
    return (
        <div>


            <div class="container">
            <div class="row ">
                <div class=" col-lg-3 col-md-12 col-sm-12 col-xs-12 m-gri">
                            <h1>Price range</h1>
                        
                            <hr/>
                            <div className="priceRange" class="mb-4">
                                <div>
                                    <p>Minimum Price</p>
                                    <p className="pricebold">10000</p>
                                </div>
                                <div>
                                    <p>Maximum Price</p>
                                    <p className="pricebold">80000</p>
                                </div>
                            </div>


                    <section class="mb-4">
                        
                        <h6 class="font-weight-bold mb-3">Price</h6>

                        <form class="multi-range-field w-100 mb-1">
                            <input id="multi" class="multi-range" type="range" />
                        </form>
                    
                    </section>


                    <div class="py-2 border-bottom ml-3">
                <h6 class="font-weight-bold">Categories</h6>
            
                <form>
                    <div class="form-group"> <input type="checkbox" id="artisan"/> <label for="artisan">Fresh Artisan Breads</label> </div>
                    <div class="form-group"> <input type="checkbox" id="breakfast"/> <label for="breakfast">Breakfast Breads</label> </div>
                    <div class="form-group"> <input type="checkbox" id="healthy"/> <label for="healthy">Healthy Breads</label> </div>
                </form>
            </div>

        </div>

           

                <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12 m-gri">

                <div class="row productpackagerow">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-gri">
                <div  className="productimg-seaction">
                            <img src="images/DtJfvWYtSJc0elYWC2okSUrZAJwqGtMo.jpg" className="productimg" alt="bannerimg"/>
                        <div className="packagebigimgtxt">
                        <h1>USA-CANADA</h1>
                            <p>Starts from 40000</p>
                            <p>Dhaka to chattagong</p>
                        </div>
                        </div>
                </div>
                
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-gri">
                <div  className="productimg-seaction">
                            <img src="images/DtJfvWYtSJc0elYWC2okSUrZAJwqGtMo.jpg" className="productimg" alt="bannerimg"/>
                        <div className="packagebigimgtxt">
                        <h1>USA-CANADA</h1>
                            <p>Starts from 40000</p>
                            <p>Dhaka to chattagong</p>
                        </div>
                </div>

                </div>

                </div>


                <div class="row  productpackagerow">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-gri">
                <div  className="productimg-seaction">
                            <img src="images/DtJfvWYtSJc0elYWC2okSUrZAJwqGtMo.jpg" className="productimg" alt="bannerimg"/>
                        <div className="packagebigimgtxt">
                        <h1>USA-CANADA</h1>
                            <p>Starts from 40000</p>
                            <p>Dhaka to chattagong</p>
                        </div>
                        </div>
                </div>
                
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-gri">
                <div  className="productimg-seaction">
                            <img src="images/DtJfvWYtSJc0elYWC2okSUrZAJwqGtMo.jpg" className="productimg" alt="bannerimg"/>
                        <div className="packagebigimgtxt">
                        <h1>USA-CANADA</h1>
                            <p>Starts from 40000</p>
                            <p>Dhaka to chattagong</p>
                        </div>
                </div>

                </div>
                
                </div>


                </div>



                </div>
                </div>


        </div>
    )
}

export default Details
