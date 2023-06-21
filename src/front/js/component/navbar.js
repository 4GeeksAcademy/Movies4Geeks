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
		<form className="d-flex">
  <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
  <button class="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
   
</form>

	  
		<div>
		  {isLoggedIn ? (
			<button className="mr-2" onClick={handleLogout}>Acceder a tu área de usuario</button>
		  ) : (
			<button className="mr-2" onClick={handleLogin}>Iniciar sesión</button>
		  )}
		</div>
	  </nav>
	  
	);
};

