import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login"


	export const Navbar = () => {
		
			const [isLoggedIn, setIsLoggedIn] = useState(false);
		  
			const handleLogin = () => {
			  setIsLoggedIn(true);
			};
		  
			const handleLogout = () => {
			  setIsLoggedIn(false);
			};
	
	return (
		<nav className="navbar navbar-light" style={{ background: "#3F97CD" }}>
		<p>LOGO</p>
		<a className="nav-link text-light" href="#">Peliculas</a>
		<a className="nav-link text-light" href="#">Trailers</a>
		<a className="nav-link text-light" href="#">Reviews</a>
		<a className="nav-link text-light" href="#">Top rated</a>
		

		<form className="d-flex" >
  <input className="form-control  bg-light" type="search"style={{ borderRadius:"10px 0 0 10px ", border:"0" }}  placeholder="Buscar" aria-label="Search" />
  <span className="btn bg-light br-0" type="submit" style={{ borderRadius:"0 10px 10px 0", border:"0" }}>
  <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search ml-1" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
</span>
   
</form>
<button className="btn bg-light mr-1 br-0" type="submit" style={{ borderRadius:"10px", marginRight:"25px", border:"0" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg></button>

	  
		
	  </nav>
	  
	);
};

