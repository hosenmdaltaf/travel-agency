import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
             

            <nav class="navbar navbar-expand-lg navbar-light mb-5">
                    <div class="container-fluid"> 
                    {/* <a class="navbar-brand" href="#">Travle</a> */}
                    <h1 className="navlogo" >Travle</h1> 
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-bar" aria-controls="navbar-bar" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                        <div class="collapse navbar-collapse" id="navbar-bar">
                            <div class="navbar-nav ms-auto"> 
                          <NavLink to="/" className="nav-link" style={{ textDecoration: 'none',  color: 'inherit',}}>Home</NavLink>
                 <NavLink to="/Productpage" className="nav-link" style={{ textDecoration: 'none',  color: 'inherit',}}>Product</NavLink>
                 <NavLink to="#" className="nav-link" style={{ textDecoration: 'none',  color: 'inherit',}}>Contact</NavLink>
                 <NavLink to="#" className="nav-link" style={{ textDecoration: 'none',  color: 'inherit',}}>Sign in</NavLink>
                             
                            </div>
                        </div>
                    </div>
                </nav>

              
        </div>
    )
}

export default Navbar
