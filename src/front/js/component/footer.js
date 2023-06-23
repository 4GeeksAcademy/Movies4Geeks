import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login"

export const Footer = () => (
	<footer className="d-flex justify-content-center"  style={{ background: "#3F97CD" }} >
		<p className="text-light m-4">
			Made by Javier, Johanna, Johanna and Ruben.  
		</p>
		<Link to="contactUs" className="btn bg-light m-3">Contact us</Link>
	</footer>
);
