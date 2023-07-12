import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login"
import  "../../styles/navbar.css"
import logo from "../../img/logo_transparente.png"


	export const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (

    <>
  
    {/* <Link to="/movieProfile" className="btn bg-light m-3">Prueba</Link> */}
		

  

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid ms-3 mt-2 me-3">
    
    
    <div className="col-2">
   <a href="/" className="li-logo"><img src={logo} className="navbar-brand logo " ></img></a>
   </div>
   <button className="navbar-toggler icon-navbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon " height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    </button>
    <div className="collapse navbar-collapse navbar-list" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-4 ul-navbar">
        {/* <li className="li-logo">
      <Link to="../../">
  
  </Link>
    </li> */}
		
    <li className="nav-item me-5 ms-4 buttton-login-navbar">
      <Link to="/" className="nav-link text-light li-navbar" aria-current="page" >Peliculas</Link>
    </li>
    
<li className="nav-item me-5 ms-4 buttton-login-navbar">
  <Link to="/" className="nav-link text-light li-navbar " aria-aria-current="page" >Reviews</Link>
</li>

{/* <li className="nav-item">
<Link to="/movieProfile" className="btn bg-light m-3">
  <a className="nav-link text-light li-navbar" href="#">Top Rated</a>
  </Link>
</li> */}
  
  <li className="buttton-login-navbar">
  <form className="d-flex ms-4" >
   <input className="form-control  bg-light input-form " type="search"  placeholder="Buscar" aria-label="Search" />
   <span className="btn bg-light br-0 btn-submit" type="submit" >
   <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search ml-1" viewBox="0 0 16 16">
     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
   </svg>
 </span>
   
</form>
</li>

    
    <li className="btn  buttton-login-navbar ">
{isLoggedIn ? (
            <Link className="text-light text-decoration-none" to="/perfil">Mi perfil</Link>
          ) : (
            <Link className="text-light text-decoration-none btn-login" to="/userPage">Log in</Link>
          )}
          </li>
          </ul>
  </div>
  </div>
</nav>
</>

	  

	);
};

