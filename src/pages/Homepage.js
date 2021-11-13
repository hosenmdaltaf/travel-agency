import React from 'react'

import Navbar from '../components/HomePageComponents/Navbar';
import HeaderSlider from '../components/HomePageComponents/HeaderSlider';
import Adverts from '../components/HomePageComponents/Adverts';
import Trending from '../components/HomePageComponents/Trending';
import PackageCategory from '../components/HomePageComponents/PackageCategory';
import Footer from '../components/HomePageComponents/Footer';

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
