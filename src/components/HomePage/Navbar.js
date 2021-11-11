import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";

function Navbar() {

    return (
        <div className="navbardesign">

      <div class="container">
    <div class="row  ">
    <Router>

    <ul class="navbar" > 
                <div class="logo">
                    <h3>Travle</h3>
                </div>
                <div class="nav-tags">
                    <li ><Link to="/">Home</Link></li>
                    <li><Link to="/DetailsPage/Detail">Detail</Link></li> 
                    <li>Contact</li> 
                    <li>Buy</li>
                    <li>Disable</li>
               </div>

               <div >
                 <img src="images/menu.png" alt="hemburger"/>
               </div>
            </ul>


       </Router>

      </div>
      </div>
         

    

      </div>

      
    )
}

export default Navbar
