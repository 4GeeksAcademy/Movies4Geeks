import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [userName, setUserName] = useState("");
  const token = localStorage.getItem("token")

  useEffect(() => {
    actions.isAuthenticated(token);
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const user = await actions.getUserInfo();
      setUserInfo(user);
      setUserName(user.name); 
    } catch (error) {
      navigate("/error");
    }
  };

  const signOut = () => {
    // actions.signOut();
    // localStorage.removeItem("token");
    // navigate("/");
  };
  if (store.storeToken && userInfo) {
    return (
      <div className="container">
          <h1>Bienvenido, {store.user && store.user.name}</h1>
        <button type="button" className="btn btn-primary" onClick={signOut}>
          Cerrar sesión
        </button>
      </div>
    );
  } else {
    return null;
  }
};