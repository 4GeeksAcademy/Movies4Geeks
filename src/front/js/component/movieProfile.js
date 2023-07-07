import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {Login} from "./login"
import  "../../styles/movieProfile.css"
import logo from "../../img/logo_transparente.png"
import cartel from "../../img/lord_of_the_rings.jpg"
  
export const MovieProfile = () => {
        const [movie,setmovie] = useState([])

          useEffect(() => {
          fetch (process.env.BACKEND_URL + "/api/movie/455476")
            .then((response) => response.json())
            .then((response) => {
              setmovie(response)
              // console.log(response)
              
             
          })
         
          }, [])
          console.log(movie)
       
            return (
                <div className="movie-profile-full">
                <div className="movie-profile container">
                 <h1 className="title-movie-profile">{movie.original_title}</h1> 
                <div className="center-div row " >
                   <div className="poster col-lg-3 col-md-3 col-sm-0">
                       <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="navbar-brand img-fluid cartel" href="#"></img> 
                  </div>
                  <div className="trailer col-lg-6 col-md-6 col-sm-12 ">
                   
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/-y92BJwnEpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <div className="center-div-right col-lg-3 col-md-3 col-sm-6">
                        <ul className="list-profile-movie">
                            <li><h5>{movie.original_title}</h5></li>
                             <li><p>{movie.release_date}</p></li>
                            {/* <ul > 
                            {movie.genre.map((genre,index) => {
                              console.log(genre)
                              return(
                                <li key={index} className="genre"></li>
                              )
                            })
                          }
                          </ul> */}
                            
                            //Hacer un bucle que recorra los generos
                              <ul></ul>
                            {/* <li><p>Tu valoracion</p></li>
                            <li><p>Valoracion</p></li> */}
                        </ul>
                  </div>

                </div>
                <div className="sinopsis">
                <h3>Sinopsis</h3><p>{movie.overview}</p>
                    </div>
                
                <h4 className="write-review">Qué te ha parecido la película?</h4>
                
                <div className="form-group own-review col-4">
    <label for="exampleFormControlTextarea1">Escribe tu reseña</label>
    <textarea className="form-control textarea-own" id="exampleFormControlTextarea1" rows="3"></textarea>
    <p>Valoracion</p>
    <button className="btn review-send  ">Enviar</button>
  </div>
  <h3 className="title-resenas">Reseñas de los usuarios</h3>
                {/* <div className="resena">
                <h4 className="title-review">Brutal</h4>
                <p className="review">"El Señor de los Anillos: La Comunidad del Anillo" narra la historia de Frodo Bolsón, quien debe emprender un peligroso viaje para destruir un anillo mágico que puede sumir a la Tierra Media en la oscuridad. Con la ayuda de un grupo de valientes compañeros, enfrentan criaturas malévolas y peligrosas, mientras el poderoso Señor Oscuro Sauron busca recuperar el anillo. La Comunidad del Anillo se enfrenta a numerosos desafíos, y Frodo se ve obligado a tomar una difícil 
                    decisión para proteger a los demás y cumplir su misión de destruir el anillo.</p>
                    <h4 className="author">Ruben</h4>
                <button style={{ backgroundColor: colorBoton1 }} onClick={handleClickBoton1} className="btn "><i className="far fa-thumbs-up icon-thumbs" ></i></button> 
                 <button style={{ backgroundColor: colorBoton2 }} onClick={handleClickBoton2} className="btn "><i className="far fa-thumbs-down icon-thumbs" ></i></button> 
                </div>
                <div className="resena">
                <h4 className="title-review">Larga y buena</h4>
                
                <p className="review">Demasiado larga, pero genial!</p>
                <h6 className="author">Javi</h6>
                <button style={{ backgroundColor: colorBoton3 }} onClick={handleClickBoton3} className="btn "><i className="far fa-thumbs-up icon-thumbs" ></i></button> 
                 <button style={{ backgroundColor: colorBoton4 }} onClick={handleClickBoton4} className="btn "><i className="far fa-thumbs-down icon-thumbs" ></i></button> 
                 </div>
              
                
                <div className="resena">
                <h4 className="title-review">Peliculon!</h4>
                <p className="review">Los paisajes que tiene, la historia, la banda sonora.. me encantan!</p>
                
                <h6 className="author">Johanna</h6>
                <button style={{ backgroundColor: colorBoton7 }} onClick={handleClickBoton7} className="btn "><i className="far fa-thumbs-up icon-thumbs" ></i></button> 
                 <button style={{ backgroundColor: colorBoton8 }} onClick={handleClickBoton8} className="btn "><i className="far fa-thumbs-down icon-thumbs" ></i></button> 
                </div> */}
                </div>
                </div>
    )
            }
            
