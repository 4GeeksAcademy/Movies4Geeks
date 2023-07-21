import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login";
import "../../styles/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => (
	<footer>
	  <div className="container">
		<div className="social-media-icons">
			<a href="https://es-es.facebook.com/" target="_blank" rel="noopener noreferrer">
			<i className="fa-brands fa-facebook-f" id="facebook">
			<span className="tooltip">Facebook</span>
			</i>
			</a>
			<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
			<i className="fa-brands fa-instagram" id="instagram">
			<span className="tooltip">Instagram</span>
			</i>
			</a>
			<a href="http://twitter.com/" target="_blank" rel="noopener noreferrer">
			<i className="fa-brands fa-twitter" id="twitter">
				<span className="tooltip">Twitter</span>
			</i>
			</a>
			<a href="http://linkedin.com/" target="_blank" rel="noopener noreferrer">
			<i className="fa-brands fa-linkedin-in" id="linkedin">
				<span className="tooltip">LinkedIn</span>
			</i>
			</a>
		  	<Link to="/contactUs" className="btn contact-button">
			<FontAwesomeIcon icon={faEnvelope} className="mr-2" />
			Contact us
			<span className="tooltip">Contact</span>
		  </Link>
		</div>
			<div className="centered-text my-2">
		  	<p className="made-with-love"> By Ruben, Javier, and Johana</p>
		  	<p className="copyright">
         	 &copy; {new Date().getFullYear()} Movies4Geeks. All rights reserved.</p>
			</div>
	  </div>
	</footer>
  );