import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


export const ProfileButton = ({ nickname, label }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [user, setUser] = useState(store.userName);
    //console.log(store.nickname)
    //console.log(store.userId)

        return (
            <div className="profileButton">
                {nickname && <span>{nickname}</span>}
                {!nickname && <span>{label}</span>}
                <FontAwesomeIcon icon={faUser} className="perfilIcon" />
            </div>
        )
              
     
    
}