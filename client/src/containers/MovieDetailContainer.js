import React, {useEffect, useState} from "react";
import MovieDetails from "../components/MovieDetailContainerComponents/MovieDetails.js";
import {useParams} from "react-router-dom";

const MovieDetailContainer = ({addToUser}) => {

    const [movie, setMovie] = useState(null);

    let params = useParams();

    const getMovie = () => {
  
        fetch(`http://www.omdbapi.com/?i=${params.imdbId}&apikey=7a9676`)
            
                .then(response => response.json())
                
                .then(data => setMovie(data));
    }
    useEffect(()=> {
        getMovie()
    }, [])
    
    
    return (
        <>
        
        { movie ? <MovieDetails movie={movie} addToUser={addToUser}/> : null}
        
        </>
    )
}

export default MovieDetailContainer;