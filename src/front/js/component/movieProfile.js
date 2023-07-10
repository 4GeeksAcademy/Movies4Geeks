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
            // console.log(response)
            .then((response) => 
              setmovie(response),
              // console.log(response)
              
             
          )
         
          }, [])
          console.log(movie.genres)
           
            const renderGeneros = () => {
              return(
                <ul>
                 {movie.map(movie =>(

                  
                  <li key={movie.genre.id}>{movie.genre}</li>
                  ))}
              
              
              </ul>
              );
            };
          // La linea 24 es la logica para obtener el trailer
          // const videoTrailers = movie.filter(movie => movie.videos.includes("trailer"));
          // console.log(videoTrailers)
           
         
       
            return (
                <div className="movie-profile-full">
                <div className="movie-profile container">
                 <h1 className="title-movie-profile">{movie.original_title}</h1> 
                <div className="center-div row " >
                   <div className="poster col-lg-3 col-md-3 col-sm-0">
                       <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="navbar-brand img-fluid cartel" href="#"></img> 
                  </div>
                  //Linea 37 codigo para llamar a video</div>
                  <div className="trailer col-lg-6 col-md-6 col-sm-12 ">
                  {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoTrailers}`} title="YouTube video player" frameborder="0"  */}
                  {/* allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                  {/* <video src={trailerPrime} controls />  */}
                  </div>
                  <div className="center-div-right col-lg-3 col-md-3 col-sm-6">
                        <ul className="list-profile-movie">
                            <li><h5>{movie.original_title}</h5></li>
                             <li><p>{movie.release_date}</p></li>
                            <ul>
                         {renderGeneros()}
                          </ul>
                          </ul> 
                            
                       
                           
                 

                <div className="sinopsis">
                <h3>Sinopsis</h3><p>{movie.overview}</p>
                    </div>
                    </div>
                </div>
                </div>
               
)}
      