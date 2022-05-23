import React, {useEffect, useState} from "react";
import MovieDetails from "../components/MovieDetailContainerComponents/MovieDetails.js";
import {useParams} from "react-router-dom";

const MovieDetailContainer = ({}) => {

    const [movie, setMovie] = useState(null);

    let params = useParams();

    const getMovie = () => {
        // setSelectedMovieID(imdbId);
        fetch(`http://www.omdbapi.com/?i=${params.imdbId}&apikey=7a9676`)
            // .then(response => console.log(response))
                .then(response => response.json())
                // .then(data => console.log(data))
                .then(data => setMovie(data));
    }
    useEffect(()=> {
        getMovie()
    }, [])
    

    // const [movie, setMovie] = useState(null)

    // useEffect(() => {
    //     setMovie(selectedMovie)
    //     console.log(movie);
    // }, [])
    
    return (
        <>
        
        { movie ? <MovieDetails movie={movie}/> : null}
        
        </>
    )
}

export default MovieDetailContainer;