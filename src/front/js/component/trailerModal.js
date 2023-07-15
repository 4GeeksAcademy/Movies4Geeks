import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/reviews.css";
//import "../../styles/addReviewModal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faThumbsUp, faThumbsDown, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { StarRating } from "./starRating";


export const TrailerModal = ({ isOpen, onClose, trailer }) => {

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target.classList.contains('trailerModalOverlay')) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    
    if (!isOpen) return null;

    const handleOverlayClick = (event) => { //to close the modal when the user click outsite the modal
        
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    
    return (
        <>
            <div className="trailerModalOverlay" >
                <div className="trailerModal" >
                    <div className="trailerModalIconClose" onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className="ratio ratio-16x9">
                        <iframe className="movieTrailerIframe" key={trailer}
                            width="100%" height="100%" src={`https://www.youtube.com/embed/${trailer}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        >

                        </iframe>
                    </div>

                </div>
            </div>


        </>


    )
}