import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login"
import  "../../styles/movieProfile.css"
import logo from "../../img/logo_transparente.png"
import cartel from "../../img/lord_of_the_rings.jpg"
  
        export const MovieProfile = () => {
            return (
                <div className="movie-profile-full">
                <div className="movie-profile">
                <h1 className="title-movie-profile">El señor de los anillos:La comunidad del anillo</h1>
                <div className="center-div">
                    <div className="poster">
                    <img src={cartel} className="navbar-brand logo cartel" href="#"></img>
                    </div>
                    <div className="trailer">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3GJp6p_mgPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="center-div-right">
                        <ul className="list-profile-movie">
                            <li>Lord of the rings</li>
                            <li>19 de diciembre 2001</li>
                            <li>Fantasía</li>
                            <li>Valoracion</li>
                        </ul>
                    </div>

                </div>
                <h3>Sinopsis</h3><p>"El Señor de los Anillos: La Comunidad del Anillo" narra la historia de Frodo Bolsón, quien debe emprender un peligroso viaje para destruir un anillo mágico que puede sumir a la Tierra Media en la oscuridad. Con la ayuda de un grupo de valientes compañeros, enfrentan criaturas malévolas y peligrosas, mientras el poderoso Señor Oscuro Sauron busca recuperar el anillo. La Comunidad del Anillo se enfrenta a numerosos desafíos, y Frodo se ve obligado a tomar una difícil 
                    decisión para proteger a los demás y cumplir su misión de destruir el anillo.</p>
                <h3>Reseñas</h3>
                <div className="reseña">
                <h4>Ruben</h4>
                <p>"El Señor de los Anillos: La Comunidad del Anillo" narra la historia de Frodo Bolsón, quien debe emprender un peligroso viaje para destruir un anillo mágico que puede sumir a la Tierra Media en la oscuridad. Con la ayuda de un grupo de valientes compañeros, enfrentan criaturas malévolas y peligrosas, mientras el poderoso Señor Oscuro Sauron busca recuperar el anillo. La Comunidad del Anillo se enfrenta a numerosos desafíos, y Frodo se ve obligado a tomar una difícil 
                    decisión para proteger a los demás y cumplir su misión de destruir el anillo.</p>
                <button className="btn "><i class="far fa-thumbs-up icon-thumbs" ></i></button> 
                 <button className="btn "><i class="far fa-thumbs-down icon-thumbs" ></i></button> 
                </div>
                <div className="reseña">
                <h4>Javi</h4>
                <p>Demasiado larga, pero genial!</p>
                <button className="btn "><i class="far fa-thumbs-up icon-thumbs" ></i></button> <p>OK</p>
                 <button className="btn "><i class="far fa-thumbs-down icon-thumbs" ></i></button> <p>KO</p>
                 </div>
                <h4>Es la leche!</h4><h6>Johanna</h6>
                <p>Me encantan los paisajes! Y la escena de Arwen en el río es brutal!</p>
                <h4>Vaya porqueria</h4>
                <p>Me encantan los paisajes! Y la escena de Arwen en el río es brutal!</p>
                <h6>Ashley</h6>
                </div>
                <h4>Vaya porqueria</h4>
                <p>Me encantan los paisajes! Y la escena de Arwen en el río es brutal!</p>
                <h6>Ashley</h6>
                </div>
    )
            }
            
