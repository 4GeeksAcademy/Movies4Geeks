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
  }, []);
  
  const signOut = () => {
    actions.signOut();
    navigate("/");
  };

  if (store.storeToken && user) {
    return (
      <div className="container">
        <h1>Welcome, {user.name}</h1>
        <button type="button" className="btn btn-dark" onClick={signOut}>
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div className="container py-3">
        <div className="alert alert-danger  d-flex align-items-center " role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-octagon-fill flex-shrink-0 me-2" viewBox="0 0 16 16">
            <path d="M10.293 1.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414L12.414 8l2.293 2.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0L8 12.414l-2.293 2.293a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414L3.586 8 1.293 5.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0L8 3.586z"/>
            <path d="M8 4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1 1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1z"/>
          </svg>
          <div>
            Error: You are not authenticated.... Please login...
          </div>
        </div>
      </div>
    );
  }
};