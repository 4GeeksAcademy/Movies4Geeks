
import React, { useState } from "react";
import "../../styles/reviewEntry.css";
import { ReviewLikes } from "./reviewLikes";

export const ReviewEntry = ({ review, onLikeChange }) => {
    const [showAllText, setShowAllText] = useState(false);
    const wordsLimit = 40;
    const words = review.text.split(' ');
    const clickChangeShow = () => {
        setShowAllText(!showAllText)
    }
    const shortText = words.slice(0, wordsLimit).join(' ') + "...";
    const text = showAllText ? review.text : shortText;


    return (
        <div className="reviewContainer" >
            <div className="reviewBody">
                <h3 className="reviewTitle">
                    {review.title}
                </h3>
                <i className="fa-solid fa-user"></i>
                <p className="reviewUserName">User: {review.user_name}</p>
                <p className="reviewText" dangerouslySetInnerHTML={{ __html: text }}>

                    {/* {text} */}
                </p>
                <div style={{ textAlign: 'end' }}>
                    {words.length > wordsLimit && (
                        <span onClick={clickChangeShow} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                            {showAllText ? 'Show less' : 'Show more'}
                        </span>
                    )}
                </div>
            </div>
            <div className="reviewFooter">
                <ReviewLikes review={review} onLikeChange={onLikeChange} />
            </div>
        </div>

    )
}