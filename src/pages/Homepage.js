import React from 'react'
import HeaderSlider from '../components/HomePageComponents/HeaderSlider';
import Adverts from '../components/HomePageComponents/Adverts';
import PackageCategory from '../components/HomePageComponents/PackageCategory';

import Navbar from '../components/GlobalComponents/Navbar';
import Footer from '../components/GlobalComponents/Footer';
import Trending from '../components/GlobalComponents/Trending';


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
