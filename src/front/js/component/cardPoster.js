import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { TrailerModal } from "./trailerModal";

import { createPortal } from "react-dom";
import "../../styles/trailerModal.css";

export const CardPoster = (props) =>{
    //console.log(props.movie.id);
    const { store, actions } = useContext(Context);
    const [displayTitle, setDisplayTitle] = useState("none"); 

    const [isModalOpen, setIsModalOpen] = useState(false);

    

    
    return(
        <>
        <div className="carouselImage">
            <img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} className="d-block w-100" alt="..."/>
            <div className="starAverage">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <span>{props.movie.vote_average}</span>
            </div>
            <div className="carouselTrailer">
                <div 
                    className="buttonPlay" 
                    onMouseEnter={() => setDisplayTitle("block")} 
                    onMouseLeave={() => setDisplayTitle("none")}
                    onClick={ () => props.onTrailerButtonClick(props.movie.id)}
                >                
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"  ><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>
                
                {/* {createPortal(
                    <TrailerModal isOpen={isModalOpen} onClose={closeModal} trailer={trailer} key={trailer}/>,
                    document.getElementById('modal-root')
                )} */}
                {/* <TrailerModal isOpen={isModalOpen} onClose={closeModal} trailer={trailer}/> */}
            </div>
                <span style={{display: displayTitle}}>{props.movie.original_title}</span>
                
            </div>
        </div>
        
        
        {/* <div className="carouselBody ">
            <h5 className="">{props.movie.title} </h5>
            <div className="">
                <a href="#" className="btn btn-primary">Trailer</a>
            </div>
        </div> */}
        </>
        
    )
        
}