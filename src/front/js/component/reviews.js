import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/reviews.css";
import "../../styles/addReviewModal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { AddReviewModal } from "./addReviewModal";
import { ReviewEntry } from "./reviewEntry";
import { useLocation, useNavigate } from "react-router-dom";


export const Reviews = (props) =>{
    const { store, actions } = useContext(Context);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const movieId = props?.movieId
    const userId = props.userId
    const location = useLocation();
    const navigate = useNavigate();
    //console.log(movieId)
    
    //const movie_id=976573 // this will change with the parameter passed when we call Reviews
    useEffect(() => {
        actions.getReviewsById(movieId)
    }, []);
    //console.log(store.reviews)


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const sendToLogin = () => {
        localStorage.setItem("redirectPath", `/allMovies/${movieId}`); // Reemplaza "/reviews" con la ruta de Reviews
        navigate("/login");
    }

    return (
        <div className="reviewsContainer container">
            <div className="reviewsHeader">
                <h2>Reviews: {store.reviews.length}</h2>
                <div>
                    {userId ? 
                        <button type="button" className="btn " onClick={openModal}>
                            <FontAwesomeIcon icon={faPlus} style={{color: "#3888B8"}} className="addReviewButtom"/>
                            <p className="addReviewButtom">Review</p>
                        </button>
                        : 
                        <button type="button" className="btn " onClick={sendToLogin}>
                            <FontAwesomeIcon icon={faPlus} style={{color: "#3888B8"}} className="addReviewButtom"/>
                            <p className="addReviewButtom">Login to review movie</p>
                        </button>
                    }
                    <AddReviewModal 
                        isOpen={isModalOpen} 
                        onClose={closeModal} 
                        movieId={movieId} 
                        originalTitle={props.title} 
                        image={props.image}
                        onAddReview = {() =>{
                            actions.getReviewsById(movieId);
                            closeModal();
                        }}
                    />
                </div>
            </div>
            {store.reviews.map((review, index)=>{
                return <ReviewEntry 
                    review={review} 
                    key={index}
                    onLikeChange = {() =>{
                        actions.getReviewsById(movieId);
                    }} 
                />
            })}
        </div>
    )
}