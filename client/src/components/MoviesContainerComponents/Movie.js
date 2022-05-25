import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import WatchButtons from "../ButtonComponents/WatchButtons";
import {Rating} from 'react-simple-star-rating';

const Movie = ({movie, setNewId, addToUser, listType, saveRating, removeFromUser}) => {

    const [rating, setRating] = useState(movie.Rating);

    // Catch Rating value
    const handleRating = (number) => {
        setRating(number)
        saveRating({
            imdbID: movie.imdbID,
            Title: movie.Title,
            Poster: movie.Poster,
            Year: movie.Year,
            Type: movie.Type,
            Rating: rating
        })
        // other logic
    }

    
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
            {listType === "watched" ? <Rating onClick={handleRating} ratingValue={rating} allowHalfIcon={true}/* Available Props */ /> : null}
            <div className="movie-info">
                <h4>Year: {movie.Year}</h4>
                <h4>Type: {movie.Type}</h4>
                {/* <h4>Year: {movie.imdbID}</h4> */}
                <WatchButtons movie={movie} addToUser={addToUser} listType={listType} removeFromUser={removeFromUser} addToUser={addToUser}/>
            </div>
        </li>
    )
}

export default Movie;