import React from "react";
import Movie from "./Movie";


const MovieList = ({movies, removeSearchResults, addToToWatch, addToWatched}) => {


    const movieNodes = movies.map((movie, index) => {
        return <Movie movie={movie} key={index} removeSearchResults={removeSearchResults} addToToWatch={addToToWatch} addToWatched={addToWatched}/>
    })

    return (
        <>
            <h3>Search Results</h3>
             <ul className="results-list">
                 {movieNodes}
             </ul>
        </>
    )
}
export default MovieList;