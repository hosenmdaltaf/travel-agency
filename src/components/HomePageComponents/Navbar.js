import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div className="navbardesign">

      <div class="container">
    <div class="row  ">

    <ul class="navbar" > 
                <div class="logo">
                    <h3>Travle</h3>
                </div>
                <div class="nav-tags">
                    <li ><NavLink to="/" style={{ textDecoration: 'none',  color: 'inherit',}}>Home</NavLink></li>
                    <li><NavLink to="/Productpage"  style={{ textDecoration: 'none',  color: 'inherit',}}>Product</NavLink></li> 
                   
                    <li>Contact</li> 
                   
               </div>

               {/* <div >
                 <img src="images/menu.png" alt="hemburger"/>
               </div> */}
            </ul>

      </div>
      </div>
         

    

      </div>

      
    )
}

export default Navbar
