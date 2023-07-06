import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/reviews.css";
import "../../styles/addReviewModal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faThumbsUp, faThumbsDown, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Star } from "./star";

export const  StarRating = ({rating, onRatingChange}) => {
    
    //const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
  
    const handleStarHover = (starIndex) => {
      setHoveredRating(starIndex);
    };
    const handleStarLeave = () => {
      setHoveredRating(0);
    };
  
    const handleStarClick = (starIndex) => {
      //setRating(starIndex);
      onRatingChange(starIndex);
    };
  
    const stars = [];
  
    for (let i = 1; i <= 10; i++) {
      const filled = i <= (hoveredRating || rating); 
  
      stars.push(
        <Star
          key={i}
          filled={filled}
          handleHover={() => handleStarHover(i)}
          handleClick={() => handleStarClick(i)}
          handleLeave={handleStarLeave}
        />
      );
    }
  
    return <div>{stars}</div>;
}