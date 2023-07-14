import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/allMovies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";




export const AllMovies = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllMovies()
    }, []);


    //setMovies(store.allMovies)
    //console.log(store.allMovies)

    const allMovies = store.allMovies

    const handleSearch = (event) =>{
        setSearchTerm(event.target.value);
    }

    const filteredMovies = allMovies?.filter((movie) =>{
        //console.log(movie)
        return movie.original_title.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === ""
    })

    const handleClick = (movieId) =>{
        navigate(`/allMovies/${movieId}`);
    }


    //console.log(filteredMovies)
    return <>
        
        <div className="allMoviesSearch">
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search Movie"  />
            <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        </div>
        <ul className="allMovies" >
            {filteredMovies.map((movie, index) =>{
                return(
                    <li key={index} className="singleMovie" onClick={() => handleClick(movie.id)}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="singleMoviePoster" alt="..."/>
                        <div className="singleMovieData">
                            <h3>{movie.original_title} </h3>
                        </div>
                    </li>

                )
            })}
        </ul>
    
    </>
    
}