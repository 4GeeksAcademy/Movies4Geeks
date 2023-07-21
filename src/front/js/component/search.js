import React, { useState } from 'react';
import "../../styles/search.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleClick = (movieId) => {
    console.log(movieId)
    navigate(`/allMovies/${movieId}`);
    setSearchQuery('');
    setSearchResults([]);
  }

  const handleSearch = async (query) => {
    setSearchQuery(query);

    if (query.trim() !== '') {
      try {
        const response = await fetch(process.env.BACKEND_URL + `/api/search/${encodeURIComponent(query)}`);
        const data = await response.json();
        console.log(data)
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-bar navbarSearch">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search..."
      />
      <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
      {searchQuery !== '' && searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.slice(0, 3).map((movie) => (
            <li key={movie.id} className="search-result-item" onClick={() => handleClick(movie.id)}>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} />
              <div className="movie-info">
                <h3>{movie.original_title}</h3>
                <p>{movie.release_date}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
