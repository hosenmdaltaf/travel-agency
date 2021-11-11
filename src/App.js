
import Navbar from './components/HomePage/Navbar';
import HeaderSlider from './components/HomePage/HeaderSlider';
import Adverts from './components/HomePage/Adverts';
import Trending from './components/HomePage/Trending';
import PackageCategory from './components/HomePage/PackageCategory';
import Footer from './components/HomePage/Footer';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Details from './components/HomePage/Details';
import Productpage from './components/HomePage/Productpage';

function App() {
  return (
    <div >
      <Navbar/>
      <HeaderSlider/>
      <Adverts/>
      <Trending/>
      <PackageCategory/>
      <Details/>
      <Productpage/>
      <Footer/>
    
    </div>
  );
}

export default App;
