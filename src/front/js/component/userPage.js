import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login"
import  "../../styles/navbar.css"
import logo from "../../img/logo_transparente.png"


	export const UserPage = () => {


        return(
            <>
            <form>
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
    <input type="password" className="form-control" id="password" placeholder="Ruben" disabled aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="newPassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="newPassword" placeholder="Ruben" disabled aria-describedby="emailHelp"/>
    
  </div> 
   <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">NickName</label>
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="RubenGarGu" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="birthday" className="form-label">Birthday</label>
    <input type="date" className="form-control" id="birthday"/>
  </div>
  {/* Avatar */}
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</>

        );
    }