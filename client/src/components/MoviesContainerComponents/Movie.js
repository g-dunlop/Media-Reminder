import React from "react";
import {Link} from "react-router-dom";
import WatchButtons from "../ButtonComponents/WatchButtons";
const Movie = ({movie, setNewId, addToToWatch, addToWatched}) => {

    const handleClick = (evt) => {
        
        setNewId(movie.imdbID)
    }

    return (

        <li className="movie-card" > 
            <img className="movie-poster" src={movie.Poster} alt="Image Coming Soon" />
            <Link to={`${movie.imdbID}`}><h3 onClick={handleClick}>{movie.Title}</h3></Link>
            {/* <a href="/detail">
                <h3 onClick={handleClick} id={movie.imdbID}>{movie.Title}</h3>
                </a> */}
            <div className="movie-info">
                <h4>Year: {movie.Year}</h4>
                <h4>Type: {movie.Type}</h4>
                {/* <h4>Year: {movie.imdbID}</h4> */}
                <WatchButtons movie={movie} addToToWatch={addToToWatch} addToWatched={addToWatched}/>
            </div>
        </li>
    )
}

export default Movie;