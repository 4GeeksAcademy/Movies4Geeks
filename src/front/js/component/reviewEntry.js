
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export const ReviewEntry = ({ review }) => {
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
                <div className="helpfull">
                    <FontAwesomeIcon icon={faThumbsUp} />
                </div>
                <div className="notHelpfull">
                    <FontAwesomeIcon icon={faThumbsDown} />
                </div>
            </div>
        </div>

    )
}