import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export const CarouselComp = () =>{
    const { store, actions } = useContext(Context);
    console.log(store.upcoming.length)



    return (
        <>
        {/* //--------------------------------with bootstrap ----------------------------------------------// */}
        <div id="carouselExampleCaptions" className="carousel slide ">
            {/* <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}
            <div className="carousel-inner">
                {store.upcoming.map((movie, index)=>{
                    if (index == 0) {
                        console.log(movie)
                        return (
                            <div className="carousel-item active" key={index}>
                                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption ">
                                    <h5 className="posterImage_title">{movie.title} </h5>
                                    <div className="d-none d-sm-block">
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    if (index > 0 && index < 4) {
                        return (
                            <div className="carousel-item" key={index}>
                                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption ">
                                    <h5 className="posterImage_title">{movie.title} </h5>
                                    <div className="d-none d-sm-block">
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        {/*  -------------------------------------------with react-responsive-carousel -------------  */}
        <Carousel
            showThumbs={false}
            autoPlay={false}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
        >
            {store.upcoming.map( (movie, index) =>{
                    {console.log("https://image.tmdb.org/t/p/original"+movie.backdrop_path)}
                    return(
                        <div className="poster" key={index}>
                            <div className="posterImage" key={index}>
                                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/> 
                                {/* <div className="legend">
                                    
                                </div> */}
                            <div className="posterImage_overlay">
                                <div className="posterImage_title">
                                    {movie ? movie.original_title : ""}
                                </div>
                                <div className="posterImage_runtime">
                                    {movie ? movie.release_date : ""}
                                </div>
                                <div className="posterImage_description .d-sm-none .d-md-block">
                                    {movie ? movie.overview : ""}
                                </div>
                            </div>
                            </div>
                        
                        </div>
                    )
                })}       



        </Carousel>
        </>
    )
}