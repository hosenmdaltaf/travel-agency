import React from 'react'
import HeaderSlider from '../components/HomePageComponents/HeaderSlider';
import Adverts from '../components/HomePageComponents/Adverts';
import Trending from '../components/HomePageComponents/Trending';
import PackageCategory from '../components/HomePageComponents/PackageCategory';

import Navbar from '../components/GlobalComponents/Navbar'
import Footer from '../components/GlobalComponents/Footer';


function Homepage() {
    return (
        <div>

        <Navbar/>
        <HeaderSlider/>
        <Adverts/>
        <Trending/>
        <PackageCategory/>
        <Footer/>
            
        </div>
    )
}

export default Homepage
