import React from 'react'
import {  BrowserRouter, Routes, Route} from 'react-router-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Detailpage from './pages/Detailpage';
import Productpage from './pages/Productpage';
import Homepage from './pages/Homepage';


function App() {
  return (
    <div >
      
{/* 
    <Homepage/>
    <Detailpage/>
    <Productpage/> */}

   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Productpage' element={ <Detailpage/>} />
          <Route path='/Detailpage' element={ <Productpage/> } />
      </Routes>
    </BrowserRouter>



    {/* <Routes>
          <Route path='/Homepage' element={<Homepage/>} />
          <Route path='/Productpage' element={ <Detailpage/>} />
          <Route path='/Detailpage' element={ <Productpage/> } />
    </Routes> */}

    
    </div>
  );
}

export default App;
