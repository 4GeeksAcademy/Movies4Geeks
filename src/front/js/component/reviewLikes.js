import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"

export const ReviewLikes = ({review, onLikeChange}) => {

    const addLike = async (type) =>{
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify({
                review_id: review.id,
                like_type: type,
            })
        };
        try {
            const resp = await fetch(`${process.env.BACKEND_URL}/api/like`, options);
            const data = await resp.json();
            console.log(data);
            onLikeChange();
            return data;
            //setStore({ reviews: data.results })
        } catch (error) {
            console.log("Error", error);
        }
    }
    
    return (
        <>
            <div className="helpfull" >
                <p className="helpfullCount">{review.likes}</p>
                <FontAwesomeIcon icon={faThumbsUp} onClick={() => { addLike(1) }} style={{
                    color: review.vote_type === 1 ? "#3F97CD" : "inherit"
                }} />
            </div>
            <div className="notHelpfull">
            <p className="helpfullCount">{review.dislike}</p>
                <FontAwesomeIcon icon={faThumbsDown} onClick={() => { addLike(0) }} style={{
                    color: review.vote_type === 0 ? "#3F97CD" : "inherit"
                }} />
            </div>
        </>
    )
}