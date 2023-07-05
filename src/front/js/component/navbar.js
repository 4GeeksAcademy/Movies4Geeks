import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login"
import  "../../styles/navbar.css"
import logo from "../../img/logo_transparente.png"


	export const Navbar = () => {
	return (

    <>
  
    {/* <Link to="/movieProfile" className="btn bg-light m-3">Prueba</Link> */}
		

  

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <img src={logo} className="navbar-brand logo " href="#"></img>
    <button className="navbar-toggler icon-navbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon " height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    </button>
    
 
    <div className="collapse navbar-collapse navbar-list" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-navbar">
		
    <li className="nav-item">
      <a className="nav-link text-light li-navbar" aria-current="page" href="#">Peliculas</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-light li-navbar" href="#">Trailers</a>
    </li>
<li className="nav-item">
  <a className="nav-link text-light li-navbar " aria-aria-current="page" href="#">Reviews</a>
</li>
<Link to="/movieProfile" className="btn bg-light m-3">Prueba</Link>
<li className="nav-item">
  <a className="nav-link text-light li-navbar" href="#">Top Rated</a>
</li>
  
  </ul>
  <form className="d-flex" >
   <input className="form-control  bg-light input-form " type="search"  placeholder="Buscar" aria-label="Search" />
   <span className="btn bg-light br-0 btn-submit" type="submit" >
   <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search ml-1" viewBox="0 0 16 16">
     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
   </svg>
 </span>
   
</form>
<button className="btn bg-light mr-1 br-0 btn-icon" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
 </svg></button>
    </div>
  </div>
</nav>
</>

	  

	);
};

