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
  <div>
      <label>
        Password:
        <input type="password" value={password} onChange={handleChangePassword} />
      </label>
      {!isValidPassword && (
        <p>La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.</p>
      )}

      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={handleChangeConfirmPassword} />
      </label>
      {!passwordsMatch && <p>Las contraseñas no coinciden.</p>}
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
 
  <button type="reset" className="btn cancel-user">Cancel</button>
  <button type="submit" className="btn submit-user">Submit</button>
  </div>
</form>

</>
          

        );
    }