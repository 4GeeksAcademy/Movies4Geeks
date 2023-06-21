import React from "react";
import { Link } from "react-router-dom";
import {Login} from "./login"

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
  
	const handleLogin = () => {
	  setIsLoggedIn(true);
	};
  
	const handleLogout = () => {
	  setIsLoggedIn(false);
	};
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light "style={{background:"#3F97CD"}}>
			<p>LOGO</p>
			<a className="nav-link text-light" href="#">Peliculas</a>
			<a className="nav-link text-light" href="#">Trailers</a>
			<form classname="form-inline my-2 my-lg-0">
      <input classname="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button classname="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Acceder a tu área de usuario</button>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  );
};



		
		</nav>
	);
};
