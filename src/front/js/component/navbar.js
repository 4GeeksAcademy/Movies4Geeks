

import React, { useState, useContext } from "react";

import "../../styles/navbar.css"
import logo from "../../img/logo_transparente.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { UserPage } from "./userPage";
import { Link } from "react-router-dom";
import { ProfileButton } from "./profileButton";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Search } from "./search";


export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const token = store.token;
  const userId = store.userId;
  const nickname = store.nickname

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
  const logout = () => {
    actions.signOut();
    navigate(0);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbarcontainer">
        <div className="container">
          <Link to={"/"} className="navbar-brand" href="#home">
            <img src={logo} className="navbar-brand logo " href="#"></img>
          </Link>
          <button
            className={`navbar-toggler hamburguer ${expanded ? '' : 'collapsed'}`}
            type="button"
            onClick={toggleNavbar}
          >
            <FontAwesomeIcon className="iconBars" icon={faBars} />
          </button>
          {token ? (
            <>
              <div className="dropdown-center ms-auto d-lg-none perfilLarge">
                <button className="btn btn-secondary dropdown-toggle perfilLargeDropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <ProfileButton nickname={nickname} />
                </button>
                <ul className="dropdown-menu dropdown-menu-dark dropdownMenu">
                  <li>
                    <Link
                      to={`/perfil/${userId}`}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginLeft: "16px"
                      }}>
                      Profile
                    </Link>
                  </li>
                  <li><a className="dropdown-item" onClick={logout} href="#">logout</a></li>
                </ul>
              </div>

            </>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="btn btn-dark ms-auto d-lg-none perfilLarge" >
                <ProfileButton label="Login" />
              </button>
            </Link>
          )}
          <div className={`collapse navbar-collapse row ${expanded ? 'show' : ''}`}>
            <div className="col-lg-6">
            <Search />

            </div>
            <Link to={"/allMovies"} className="nav-link text-light col-lg-2 linkAlign" href="#link1">
              Movies
            </Link>
            <Link to={"/aboutUs"} className="nav-link text-light col-lg-2 linkAlign" href="#link1">
              About Us
            </Link>
            
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 links">
              <li className="nav-item">
                <Link to={"/allMovies"} className="nav-link text-light" href="#link1">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#link2">
                  About Us
                </a>
              </li>
              
            </ul> */}
            {token ? (
              <div className="dropdown-center d-none d-lg-block perfilLarge col-lg-2">
                <button className="btn btn-secondary dropdown-toggle perfilLargeDropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <ProfileButton nickname={nickname} />
                </button>
                <ul className="dropdown-menu dropdown-menu-dark dropdownMenu">
                  <li>
                    <Link
                      to={`/userPage`}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginLeft: "16px"
                      }}>
                      Profile
                    </Link>
                  </li>
                  <li><a className="dropdown-item" onClick={logout} href="#">logout</a></li>
                </ul>
              </div>

            ) : (
              <Link to="/login" style={{ textDecoration: "none" }} className="col-lg-2">
                <button className="btn btn-dark d-none d-lg-block perfilLarge" >
                  <ProfileButton label="Login" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

