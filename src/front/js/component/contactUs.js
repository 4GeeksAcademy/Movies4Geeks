import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login"
import  "../../styles/contactUs.css"

export const ContactUs = () => (
	<form className="container-fluid form-contact-us">
		<div className="row row-contact-us">
		<div className="mb-3">
    <label for="name" className="form-label">Who are you?</label>
    <input type="email" className="form-control" id="name" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label for="name" className="form-label">And what is your email?</label>
    <input type="email" className="form-control" id="name" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">What do you want?</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button type="submit" className="btn btn-contactUs">Tell this to us!</button>
  </div>
</form>
);

