import React from 'react'

import Product from '../components/ProductPageComponents/Product'


import Trending from '../components/GlobalComponents/Trending';
import Navbar from '../components/GlobalComponents/Navbar'
import Footer from '../components/GlobalComponents/Footer'



function Productpage() {
    return (
        <div>
        <Navbar/>
        <Product/>
        <Trending/>
        <Footer/>
            
        </div>
    )
}

export default Productpage
