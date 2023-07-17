import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/userPage.css"



export const UserPage = () => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };


  return (
    <>
      <div className="container userPage-container">
        <div className="aside-user col-lg-3 col-12">
          <p className="fw-bold">Ruben Garcia</p>
          <Link to="/" className="personal-aside-user"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>Personal information</Link>
          <Link to="/editUser" className="edit-user"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>Edit information</Link>
          
        </div>
        <div className="main-user col-lg-9 col-12">
          <form className="form-user">
            <div className="row">
              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label for="userName" className="form-label">Name</label>
                <input type="text" className="form-control input-user" id="userName" placeholder="Ruben" disabled aria-describedby="emailHelp" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label for="userSurname" className="form-label">Surname</label>
                <input type="text" className="form-control input-user" id="userSurname" placeholder="Garcia Gutierrez" disabled aria-describedby="emailHelp" />
              </div>
            </div>


            <div className="row">
              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label for="exampleInputEmail1" className="form-label">Alias</label>
                <input type="text" className="form-control input-user" id="exampleInputEmail1" disabled placeholder="RubenGarGu" />

              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label for="birthday" className="form-label">Birthday</label>
                <input type="text" className="form-control input-user" id="birthday" disabled placeholder="11/02/1988" />
              </div>
            </div>
            {/* Avatar */}
            <div className="mb-3 form-check">

            </div>
           
          </form>
        </div>
      </div>

    </>

  );
}