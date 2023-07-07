import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/reviews.css";
import "../../styles/addReviewModal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { AddReviewModal } from "./addReviewModal";


export const Reviews = () =>{

    const movie_id=424 // this will change with the parameter passed when we call Reviews

    const { store, actions } = useContext(Context);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="reviewsContainer container">
            <div className="reviewsHeader">
                <h2>Reviews 2k</h2>
                <div>
                    <button type="button" className="btn " onClick={openModal}>
                        <FontAwesomeIcon icon={faPlus} style={{color: "#3888B8"}} className="addReviewButtom"/>
                        <p className="addReviewButtom">Review</p>
                    </button>
                    <AddReviewModal isOpen={isModalOpen} onClose={closeModal} movie_id={movie_id}/>
                </div>
            </div>
            {store.reviews.map((review, index)=>{
                const [showAllText, setShowAllText] = useState(false);
                const wordsLimit = 40;
                const words = review.text.split(' ');
                const clickChangeShow = () =>{
                    setShowAllText(!showAllText)
                }
                const shortText = words.slice(0, wordsLimit).join(' ') + "...";
                const text = showAllText ? review.text : shortText;
                return (
                    <div className="reviewContainer" key={index}>
                        <div className="reviewBody">
                            <h3 className="reviewTitle">
                                {review.title}
                            </h3>
                            <p className="reviewText" dangerouslySetInnerHTML={{__html:text}}>

                                {/* {text} */}
                            </p>
                            <div style={{textAlign: 'end'}}>
                                {words.length > wordsLimit && (
                                    <span onClick={clickChangeShow} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                                    {showAllText ? 'Show less' : 'Show more'}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="reviewFooter">
                            <div className="helpfull">
                                <FontAwesomeIcon icon={faThumbsUp} />
                            </div>
                            <div className="notHelpfull">
                                <FontAwesomeIcon icon={faThumbsDown} />
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}