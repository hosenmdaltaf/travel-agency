import React from 'react'

function Navbar() {
    return (
        <div className="navbardesign">
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Travle</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <div class="d-flex"> */}

      <nav>
            <ul class="navbar" > 
                <div class="logo">
                    {/* <img src="imags/default.svg" alt=""> */}
                    <h3>Travle</h3>
                </div>
                <div class="nav-tags">
                    <li >Home</li>
                    <li>About</li> 
                    <li>Contact</li> 
                    <li>Buy</li>
                    <li>Disable</li>
               </div>
            </ul>
        </nav>

      </div>

      
    )
}

export default Navbar
