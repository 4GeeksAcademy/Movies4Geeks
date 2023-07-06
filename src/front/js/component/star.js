import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/reviews.css";
import "../../styles/addReviewModal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faThumbsUp, faThumbsDown, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Star = ({ filled, handleHover, handleClick, handleLeave }) => {
    const starColor = filled ? '#3F97CD' : 'gray';
  
    return (
      <span
        style={{ color: starColor }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faStar} />
      </span>
    );
  };