import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login";
import "../../styles/footer.css"

export const Footer = () => (
		
	<footer className="d-flex justify-content-center footer"  style={{ background: "#161616" }} >
		<p className="text-light m-4">
			Made by Javier, Johanna and Ruben.  
		</p>
		<Link to="/contactUs" className="btn bg-light m-3">Contact us</Link>
	</footer>
);
