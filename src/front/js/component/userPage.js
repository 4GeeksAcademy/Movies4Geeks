import React,{useState} from "react";
import { Link } from "react-router-dom";
import  "../../styles/userPage.css"



	export const UserPage = () => {
    const handleLogout = () => {
      setIsLoggedIn(false);
    };


        return(
            <>
            <div className="container">
            <div className="aside-user col-lg-3">
              <p className="fw-bold">Ruben Garcia</p>
              <p>User</p>
              <p className="personal-aside-user"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>Personal information</p>
              <Link to="../editUser"><button type="reset" className="btn edit-user" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>Edit</button></Link>
              <button className="btn text-light text-decoration-none  " onClick={handleLogout}><svg xmlns="http://www.w3.org/2000/svg" className="logout-button" width="16" height="16" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
              <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
              </svg><p className="logout-button">Cerrar sesión</p></button>
            </div>
            <div className="main-user col-lg-9">
              <form className="form-user mt-3">
                <div className="row">
                  <div className="mb-3 col-lg-9 col-md-6 col-sm-12">
                    <label for="userName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="userName" placeholder="Ruben" disabled aria-describedby="emailHelp"/>
                 </div>
                 <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                   <label for="userSurname" className="form-label">Surname</label>
                   <input type="text" className="form-control" id="userSurname" placeholder="Garcia Gutierrez" disabled aria-describedby="emailHelp"/>
                 </div>
                </div>  

  
  <div className="row">
   <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="exampleInputEmail1" className="form-label">Alias</label>
    <input type="text" className="form-control" id="exampleInputEmail1" disabled placeholder="RubenGarGu" />
    
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="birthday" className="form-label">Birthday</label>
    <input type="text" className="form-control"  id="birthday" disabled placeholder="11/02/1988"/>
  </div>
  </div>
  {/* Avatar */}
  <div className="mb-3 form-check">
    
  </div>
<div className="button-user">
  <button type="reset" className="btn cancel-user">Cancel</button>
  <button type="submit" className="btn submit-user">Submit</button>
  </div>
</form>
</div>
</div>

</>

        );
    }