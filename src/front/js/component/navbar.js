import React, { useContext, useState } from "react";
import "../../styles/navbar.css"
import logo from "../../img/logo_transparente.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { UserPage } from "./userPage";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const {store,actions}=useContext (Context) 

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbarcontainer">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src={logo} className="navbar-brand logo " href="#"></img>
          </a>
          <button
            className={`navbar-toggler ${expanded ? '' : 'collapsed'}`}
            type="button"
            onClick={toggleNavbar}
          >
            {/* <span className="navbar-toggler-icon"> */}
            <FontAwesomeIcon className="iconBars" icon={faBars} />
            {/* </span> */}
          </button>
          <button className="btn btn-dark ms-auto d-lg-none perfilLarge">
            <FontAwesomeIcon icon={faUser} />
          </button>
          <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 links">
              <li className="nav-item">
                <a className="nav-link text-light" href="#link1">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#link2">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <div className="navbarSearch">
                  <input type="text" placeholder="Search " />
                  <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                </div>
              </li>
            </ul>
            <Link to={store.auth? "/userPage":"/login"}><button  className="btn btn-dark d-none d-lg-block perfilLarge">
              <FontAwesomeIcon icon={faUser} />
            </button></Link>
          </div>
        </div>
      </nav>
    </>
  );
};

