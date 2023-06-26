import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login"
import  "../../styles/navbar.css"
import logo from "../../img/logo_transparente.png"


	export const Navbar = () => {
		
			const [isLoggedIn, setIsLoggedIn] = useState(false);
		  
			const handleLogin = () => {
			  setIsLoggedIn(true);
			};
		  
			const handleLogout = () => {
			  setIsLoggedIn(false);
			};
	
	return (
// 		<nav classNameName="navbar " >
// 		<p>LOGO</p>
 		// <a classNameName="nav-link text-light d-none d-sm-block" href="#">Peliculas</a>
 		// <a classNameName="nav-link text-light d-none d-sm-block" href="#">Trailers</a>
 		// <a classNameName="nav-link text-light d-none d-sm-block" href="#">Reviews</a>
 		// <a classNameName="nav-link text-light d-none d-sm-block" href="#">Top rated</a>
		

// 		<form classNameName="d-flex" >
//   <input classNameName="form-control  bg-light input-form" type="search"  placeholder="Buscar" aria-label="Search" />
//   <span classNameName="btn bg-light br-0 btn-submit" type="submit" >
//   <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameName="bi bi-search ml-1" viewBox="0 0 16 16">
//     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//   </svg>
// </span>
   
// </form>
// <button classNameName="btn bg-light mr-1 br-0" type="submit" style={{ borderRadius:"10px", marginRight:"25px", border:"0" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
//   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
// </svg></button>
// <button classNameName="navbar-toggler bg-light  d-md-none" type="button" data-mdb-toggle="collapse"
//       data-mdb-target="#navbarToggleExternalContent2" aria-controls="navbarToggleExternalContent2"
//       aria-expanded="false" aria-label="Toggle navigation">
//       <i className="fas fa-bars"></i>
//     </button>
	

// 	<nav classNameName="navbar navbar-light bg-light">
//   <div classNameName="container-fluid">
//     <button classNameName="navbar-toggler" type="button" data-mdb-toggle="collapse"
//       data-mdb-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
//       aria-expanded="false" aria-label="Toggle navigation">
//       <i classNameName="fas fa-bars"></i>
//     </button>
//   </div>
// </nav>
// <div classNameName="collapse" id="navbarToggleExternalContent">
//   <div classNameName="bg-light shadow-3 p-4">
//     <button classNameName="btn btn-link btn-block border-bottom m-0">Link 1</button>
//     <button classNameName="btn btn-link btn-block border-bottom m-0">Link 2</button>
//     <button classNameName="btn btn-link btn-block m-0">Link 3</button>
//   </div>
// </div>
	  
		
// 	  </nav>
<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <img src={logo} className="navbar-brand logo " href="#"></img>
    <button className="navbar-toggler  icon-navbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
		
        <li className="nav-item">
          <a className="nav-link text-light" aria-current="page" href="#">Trailers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Reviews</a>
        </li>
		<li className="nav-item">
			<a className="nav-link text-light " aria-aria-current="page" href="#">Reviews</a>
		</li>
		<li className="nav-item">
			<a className="nav-link text-light" href="#">Top Rated</a>
		</li>
      
      </ul>
       		<form className="d-flex" >
   <input className="form-control  bg-light input-form" type="search"  placeholder="Buscar" aria-label="Search" />
   <span className="btn bg-light br-0 btn-submit" type="submit" >
   <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search ml-1" viewBox="0 0 16 16">
     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
   </svg>
 </span>
   
</form>
 <button classNameName="btn bg-light mr-1 br-0" type="submit" style={{ borderRadius:"10px", marginRight:"25px", border:"0" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
 </svg></button>


    </div>
  </div>
</nav>
	  
	);
};

