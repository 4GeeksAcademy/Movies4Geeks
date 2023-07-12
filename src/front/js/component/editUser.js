import React,{useState} from "react";
import { Link } from "react-router-dom";

import  "../../styles/editUser.css"



	export const EditUser = () => {
        return(
            <>
            <form className="form-user mt-3">
              <div className="row">
  <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="userName" className="form-label">Name</label>
    <input type="text" className="form-control" id="userName" placeholder="Ruben" disabled aria-describedby="emailHelp"/>
    
  </div>

  <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="userSurname" className="form-label">Surname</label>
    <input type="text" className="form-control" id="userSurame" placeholder="Garcia Gutierrez" disabled aria-describedby="emailHelp"/>
    
  </div>
  </div>  
  <div className="row">
  <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="password" className="form-label">New Password</label>
    <input type="password" className="form-control" id="password"  aria-describedby="emailHelp"/>
    
  </div>
  
  <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="newPassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="newPassword"  />
    
  </div> 
  </div>
  <div className="row">
   <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="newemail" className="form-label">New email</label>
    <input type="text" className="form-control" id="newemail" placeholder="a@a.com" />
    
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="confirmemail" className="form-label">Confirm new email</label>
    <input type="password" className="form-control" id="confirmemail" placeholder="a@a.com"  />
    
  </div> 
  </div>
  <div className="row">
   <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="exampleInputEmail1" className="form-label">Alias</label>
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="RubenGarGu" />
    
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="birthday" className="form-label">Birthday</label>
    <input type="date" className="form-control" disabled id="birthday" placeholder="11/02/1988"/>
  </div>
  </div>
  {/* Avatar */}
  <div className="mb-3 form-check">
    
  </div>
<div className="button-user">
  <Link to="../editUser"><button type="reset" className="btn edit-user">Edit</button></Link>
  <button type="reset" className="btn cancel-user">Cancel</button>
  <button type="submit" className="btn submit-user">Submit</button>
  </div>
</form>

</>
          

        );
    }