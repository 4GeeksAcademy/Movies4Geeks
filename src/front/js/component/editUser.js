import React, { useState, useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/editUser.css"



export const EditUser = () => {



  const { store, actions } = useContext(Context);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [name, setName]=useState(store.use?.name);
  const [last_name,setLast_name]=useState(store.use?.Last_name);
  const [email,setEmail]=useState(store.use?.email);
  const [birthday,setBirthday]= useState(store.use?.birthday);
  const [nickname,setNickname]=useState(store.use?.nickname);
  

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleChangeConfirmPassword = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
  };

  useEffect(() => {
    
    setPasswordMatch(password === confirmPassword);

    
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*.\\-])(?=.{8,15})$/;

    setIsValidPassword(passwordRegex.test(password));
  }, [password, confirmPassword]);

  const [newEmail, setNewEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [emailMatch, setEmailMatch] = useState(true);


  const handleInputChange = (e) => {
    const { id, value } = e.target;

  
      const {store,actions}=useContext(Context)

    if (id === 'newemail') {
      setNewEmail(value);
    } else if (id === 'confirmemail') {
      setConfirmEmail(value);
    }

    setPasswordMatch(newEmail === confirmEmail);
  };
  const editContact = (e) => {
    const user= {
      name:name,
      last_name:last_name,
      email:email,
      password:password,
      nickname:nickname,
      birthday:birthday,
    }
  
    e.preventDefault()
    actions.editUser(user)
 

  }
  return (

    <div className="container userPage-container">
      <div className="aside-user col-lg-3 col-12">
        <p className="fw-bold">{store.user?.name}</p>
        <Link to="/" className="personal-aside-edit-user"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
        </svg>Personal information</Link>
        <Link to="/editUser" className="edit-user-active"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
        </svg>Edit information</Link>

      </div>
      <div className="main-user col-lg-9 col-12">
        <form  onSubmit={e=>editContact(e)} className="form-user mt-3">
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
              <label for="userName" className="form-label">Name</label>
              <input type="text" className="form-control input-user" id="userName" 
              onChange={e=>setName(e.target.value)} value={name} aria-describedby="emailHelp" />
            </div>

            <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
              <label for="userSurname" className="form-label">Surname</label>
              <input type="text" className="form-control input-user" id="userLastname" 
              onChange={e=>setLast_name(e.target.value)} value={last_name} aria-describedby="emailHelp" />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
              <label for="exampleInputEmail1" className="form-label">Nickname</label>
              <input type="text" className="form-control input-user" id="exampleInputEmail1" 
              onChange={e=>setNickname(e.target.value)}value={nickname} />

            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
              <label for="birthday" className="form-label">Birthday</label>
              <input type="text" className="form-control input-user" id="birthday" 
              onChange={e=>setBirthday(e.target.value)} value={birthday} />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
              <label for="password" className="form-label">Password</label>
              <input type="password" className="form-control input-user" id="password" value={password} onChange={handleChangePassword} />

              {!isValidPassword && (
                <p>La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.</p>
              )}
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
              <label for="confirmPassword" className="form-label">Confirm password</label>
              <input type="password" className="form-control input-user" id="confirmPassword" value={store.user?.password} onChange={handleChangeConfirmPassword} />

              {!passwordMatch && <p>Las contraseñas no coinciden.</p>}
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="newemail" className="form-label">New email</label>
              <input type="email" className="form-control input-user" id="newemail" 
              placeholder="a@a.com"
                value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="confirmemail" className="form-label">Confirm new email</label>
              <input type="email" className={`form-control ${emailMatch ? '' : 'is-invalid'}`}
                id="confirmemail" placeholder="a@a.com" value={confirmEmail} onChange={handleInputChange}/>
              {!emailMatch && <div className="invalid-feedback">Emails do not match.</div>}
            </div>
          </div>
        
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
