import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";




export const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [user, setUser] = useState(store.user && store.user);
  const token = localStorage.getItem("token");

  


  useEffect(() => {
    actions.isAuthenticated(token);
  //actions.getUserInfo();
  }, []);
  //const getUserInfo = async () => {
 // try {
   //    setUserName(user.name); 
  //   } catch (error) {
   //   navigate("/private");
  //   }
//   };
  
  const signOut = () => {
    actions.signOut();
    navigate("/");
  };
  console.log(store.user)
  

  if (store.storeToken && user) {
    return (
      <div className="container">
        <h1>Welcome, {user.name}</h1>
        <button type="button" className="btn btn-dark" onClick={signOut}>
          SignOut
        </button>
      </div>
    );
  } else {
    return null;
  }
};