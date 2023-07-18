import React,{useState} from "react";
import { Link } from "react-router-dom";

import  "../../styles/editUser.css"



	export const EditUser = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
  
    const handleChangePassword = (event) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
      setIsValidPassword(validatePassword(newPassword));
      setPasswordsMatch(newPassword === confirmPassword);
    };
  
    const handleChangeConfirmPassword = (event) => {
      const newConfirmPassword = event.target.value;
      setConfirmPassword(newConfirmPassword);
      setPasswordsMatch(password === newConfirmPassword);
    };
  
    const validatePassword = (password) => {
      const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*().-])[A-Za-z\d!@#$%^&*().-]{8,}$/;
      return regex.test(password);
    };
    const [newEmail, setNewEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const handleInputChange = (e) => {
      const { id, value } = e.target;
  
      
      if (id === 'newemail') {
        setNewEmail(value);
      } else if (id === 'confirmemail') {
        setConfirmEmail(value);
      }
  

      setPasswordMatch(newEmail === confirmEmail);
    };
    
        return(
            
            <div className="container userPage-container">
        <div className="aside-user col-lg-3 col-12">
          <p className="fw-bold">Ruben Garcia</p>
          <Link to="/" className="personal-aside-edit-user"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>Personal information</Link>
          <Link to="/editUser" className="edit-user-active"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>Edit information</Link>
          
        </div>
        <div className="main-user col-lg-9 col-12">
            <form className="form-user mt-3">
  <div className="row">
    <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
     <label for="userName" className="form-label">Name</label>
     <input type="text" className="form-control" id="userName" placeholder="Ruben" aria-describedby="emailHelp"/>  
    </div>

    <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
      <label for="userSurname" className="form-label">Surname</label>
      <input type="text" className="form-control" id="userSurame" placeholder="Garcia Gutierrez" aria-describedby="emailHelp"/> 
    </div>
  </div>  
  <div className="row">
   <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
      <label for="password" className="form-label">Password</label>
      <input type="password"  className="form-control" id= "password" value={password} onChange={handleChangePassword} />
     
      {!isValidPassword && (
        <p>La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.</p>
      )}
   </div>
  <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="confirmPassword" className="form-label">Confirm password</label>
    <input type="password"  className="form-control" id="confirmPassword" value={confirmPassword} onChange={handleChangeConfirmPassword} />
     
      {!passwordsMatch && <p>Las contraseñas no coinciden.</p>}
    </div>
    </div>
  
    <div className="row">
      <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
        <label htmlFor="newemail" className="form-label">New email</label>
        <input type="email" className="form-control" id="newemail" placeholder="a@a.com" value={newEmail} onChange={handleInputChange}
        />
      </div>
      <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
        <label htmlFor="confirmemail" className="form-label">Confirm new email</label>
        <input type="email" className={`form-control ${passwordMatch ? '' : 'is-invalid'}`} id="confirmemail" placeholder="a@a.com" value={confirmEmail} onChange={handleInputChange}
        />
        { !passwordsMatch && <div className="invalid-feedback">Emails do not match.</div> }
      </div>
    </div>
  






  </div>
  <div className="row">
   <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="exampleInputEmail1" className="form-label">Alias</label>
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="RubenGarGu" />
    
  </div>
  {/* <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
    <label for="birthday" className="form-label">Birthday</label>
    <input type="date" className="form-control"  value={selectedDate} onChange={handleDateChange} placeholder="Selecciona una fecha"/>
  </div> */}
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


          

        );
  };
