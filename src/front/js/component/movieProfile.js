import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login"
import  "../../styles/movieProfile.css"
import logo from "../../img/logo_transparente.png"
import cartel from "../../img/lord_of_the_rings.jpg"
  
        export const MovieProfile = () => {
            const [colorBoton1, setColorBoton1] = useState('');
            const [colorBoton2, setColorBoton2] = useState('');
          
            const handleClickBoton1 = () => {
              setColorBoton1('green');
              setColorBoton2('');
            };
          
            const handleClickBoton2 = () => {
              setColorBoton1('');
              setColorBoton2('#E74C3C ');
            };
            const [colorBoton3, setColorBoton3] = useState('');
            const [colorBoton4, setColorBoton4] = useState('');
          
            const handleClickBoton3 = () => {
              setColorBoton3('green');
              setColorBoton4('');
            };
          
            const handleClickBoton4 = () => {
              setColorBoton3('');
              setColorBoton4('#E74C3C ');
            };
            const [colorBoton5, setColorBoton5] = useState('');
            const [colorBoton6, setColorBoton6] = useState('');
          
            const handleClickBoton5 = () => {
              setColorBoton5('green');
              setColorBoton6('');
            };
          
            const handleClickBoton6 = () => {
              setColorBoton5('');
              setColorBoton6('#E74C3C ');
            };
            const [colorBoton7, setColorBoton7] = useState('');
            const [colorBoton8, setColorBoton8] = useState('');
          
            const handleClickBoton7 = () => {
              setColorBoton7('green');
              setColorBoton8('');
            };
          
            const handleClickBoton8 = () => {
              setColorBoton7('');
              setColorBoton8('#E74C3C ');
            };
            return (
                <div className="movie-profile-full">
                <div className="movie-profile container">
                <h1 className="title-movie-profile">El señor de los anillos:La comunidad del anillo</h1>
                <div className="center-div " >
                    <div className="poster col-lg-4 col-md-3 col-sm-0">
                    <img src={cartel} className="navbar-brand img-fluid cartel" href="#"></img>
                    </div>
                    <div className="trailer col-lg-6 col-md-6 col-sm-12 ">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3GJp6p_mgPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="center-div-right col-lg-2 col-md-3 col-sm-0">
                        <ul className="list-profile-movie">
                            <li><h5>Lord of the rings</h5></li>
                            <li><p>19 de diciembre 2001</p></li>
                            <li ><p className="genre">Fantasía</p><p className="genre">Epica</p></li>
                            <li><p>Valoracion</p></li>
                        </ul>
                    </div>

                </div>
                <div className="sinopsis">
                <h3>Sinopsis</h3><p>"El Señor de los Anillos: La Comunidad del Anillo" narra la historia de Frodo Bolsón, quien debe emprender un peligroso viaje para destruir un anillo mágico que puede sumir a la Tierra Media en la oscuridad. Con la ayuda de un grupo de valientes compañeros, enfrentan criaturas malévolas y peligrosas, mientras el poderoso Señor Oscuro Sauron busca recuperar el anillo. La Comunidad del Anillo se enfrenta a numerosos desafíos, y Frodo se ve obligado a tomar una difícil 
                    decisión para proteger a los demás y cumplir su misión de destruir el anillo.</p>
                    </div>
                <h3 className="title-resenas">Reseñas</h3>
                <h4 className="write-review">Qué te ha parecido la película?</h4>
                <div className="form-group own-review col-4">
    <label for="exampleFormControlTextarea1">Escribe tu reseña</label>
    <textarea className="form-control textarea-own" id="exampleFormControlTextarea1" rows="3"></textarea>
    <button className="btn btn-review-send  ">Enviar</button>
  </div>
                <div className="resena">
                <h4 className="title-review">Brutal</h4>
                <p>"El Señor de los Anillos: La Comunidad del Anillo" narra la historia de Frodo Bolsón, quien debe emprender un peligroso viaje para destruir un anillo mágico que puede sumir a la Tierra Media en la oscuridad. Con la ayuda de un grupo de valientes compañeros, enfrentan criaturas malévolas y peligrosas, mientras el poderoso Señor Oscuro Sauron busca recuperar el anillo. La Comunidad del Anillo se enfrenta a numerosos desafíos, y Frodo se ve obligado a tomar una difícil 
                    decisión para proteger a los demás y cumplir su misión de destruir el anillo.</p>
                    <h6 className="author">Ruben</h6>
                <button style={{ backgroundColor: colorBoton1 }} onClick={handleClickBoton1} className="btn "><i className="far fa-thumbs-up icon-thumbs" ></i></button> 
                 <button style={{ backgroundColor: colorBoton2 }} onClick={handleClickBoton2} className="btn "><i className="far fa-thumbs-down icon-thumbs" ></i></button> 
                </div>
                <div className="resena">
                <h6 className="title-review">Larga y buena</h6>
                
                <p>Demasiado larga, pero genial!</p>
                <h4 className="author">Javi</h4>
                <button style={{ backgroundColor: colorBoton3 }} onClick={handleClickBoton3} className="btn "><i className="far fa-thumbs-up icon-thumbs" ></i></button> 
                 <button style={{ backgroundColor: colorBoton4 }} onClick={handleClickBoton4} className="btn "><i className="far fa-thumbs-down icon-thumbs" ></i></button> 
                 </div>
              
                
                <div className="resena">
                <h4 className="title-review">Peliculon!</h4>
                <p className="review">Los paisajes que tiene, la historia, la banda sonora.. me encantan!</p>
                
                <h6 className="author">Johanna</h6>
                <button style={{ backgroundColor: colorBoton7 }} onClick={handleClickBoton7} className="btn "><i className="far fa-thumbs-up icon-thumbs" ></i></button> 
                 <button style={{ backgroundColor: colorBoton8 }} onClick={handleClickBoton8} className="btn "><i className="far fa-thumbs-down icon-thumbs" ></i></button> 
                </div>
                </div>
                </div>
    )
            }
            
