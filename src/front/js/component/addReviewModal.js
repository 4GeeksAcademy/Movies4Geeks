import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/reviews.css";
import "../../styles/addReviewModal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faThumbsUp, faThumbsDown, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { StarRating } from "./starRating";
import { useNavigate } from "react-router-dom";



export const AddReviewModal = ({isOpen, onClose, movieId, image, originalTitle, onAddReview}) =>{
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [texto, setTexto] = useState('');
    const [mostrarContador, setMostrarContador] = useState(true);
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0); // this create the variable rating and set it 0 
    
    //console.log(moviefinded)
    if (!isOpen) return <></>;

    const handleOverlayClick = (event) => { //to close the modal when the user click outsite the modal
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    const handleChange = (event) => {
      const { value } = event.target;
      setTexto(value);
      if (value.length >= 600 && mostrarContador) {
        setMostrarContador(false);
      } else if (value.length < 600 && !mostrarContador) {
        setMostrarContador(true);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      actions.createReview(rating, title, texto, movieId)
      .then(()=>{
        onAddReview();
      })
    }

    const handleRatingChange = (newRating) => { // this we change de value of the rating var according to the number of start selected 
      setRating(newRating)
    }

  return (

    <div className="modal-overlay" 
      onClick={handleOverlayClick}
    >
      <div className="addReviewModal">
        <div className="reviewModalIconClose" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="reviewModalContent">
          <div className="reviewModalHeader row">
            <div className="reviewModalHeaderImg col-4">
              <img src={`https://image.tmdb.org/t/p/original${image}`} className="d-block w-100" alt="..."/>
            </div>
            <div className="reviewModalHeaderTitle col-8">
              <h3>{originalTitle}</h3>
            </div>
          </div>
          <div className="rating row">
            <div className="stars col-10">
              <StarRating  rating={rating} onRatingChange={handleRatingChange} />
            </div>
            <div className="col-2">
              <p>
                {rating}
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className=" reviewModalInput row">
              <h3 className="col-12">Title</h3>
              <input 
                type="text" 
                className="form-control reviewModalTextTitle" 
                placeholder="Review title" 
                aria-label="" 
                aria-describedby="basic-addon1" 
                onChange={(e) => {
                  setTitle(e.target.value)
                }}>

              </input>
              <h3 className="col-12">Review</h3>
              {mostrarContador && (
                <small className={texto.length <= 600 ? '' : 'text-danger'}>
                  Required characters: {600 - texto.length}
                </small>
              )}
              {!mostrarContador && <div style={{ height: '1.25rem' }}></div>}
              <textarea 
                className="form-control reviewModalTextArea" 
                aria-label="With textarea" 
                value={texto}
                onChange={handleChange}>
              </textarea>
            </div>
            <button type="submit" className="btn reviewModalBtnSubmit" style={{textAlign: "center"}} disabled={texto.length < 600}>Submit</button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

