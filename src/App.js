
import Navbar from './components/HomePage/Navbar';
import HeaderSlider from './components/HomePage/HeaderSlider';
import Adverts from './components/HomePage/Adverts';
import Trending from './components/HomePage/Trending';
import PackageCategory from './components/HomePage/PackageCategory';
import Footer from './components/HomePage/Footer';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div >
      <Navbar/>
      <HeaderSlider/>
      <Adverts/>
      <Trending/>
      <PackageCategory/>
      <Footer/>
    
    </div>
  );
}

export default App;
