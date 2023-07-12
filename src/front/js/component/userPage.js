import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login"
import  "../../styles/userPage.css"
import logo from "../../img/logo_transparente.png"


	export const UserPage = () => {


        return(
            <>
            <form className="form-user">
  <div className="mb-3">
    <label for="userName" className="form-label">Name</label>
    <input type="text" className="form-control" id="userName" placeholder="Ruben" disabled aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="userSurname" className="form-label">Surname</label>
    <input type="text" className="form-control" id="userSurame" placeholder="Garcia Gutierrez" disabled aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">New Password</label>
    <input type="password" className="form-control" id="password"  aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="newPassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="newPassword"  />
    
  </div> 
   <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Alias</label>
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="RubenGarGu" />
    
  </div>
  <div className="mb-3">
    <label for="birthday" className="form-label">Birthday</label>
    <input type="date" className="form-control" id="birthday"/>
  </div>
  {/* Avatar */}
  <div className="mb-3 form-check">
    
  </div>
<div className="button-user">
  <button type="reset" className="btn btn-danger">Cancel</button>
  <button type="submit" className="btn btn-success ml-1">Submit</button>
  </div>
</form>

</>

        );
    }