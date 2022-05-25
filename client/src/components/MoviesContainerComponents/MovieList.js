import React from "react";
import Movie from "./Movie";


const MovieList = ({movies, addToUser, duplicate, feedback}) => {


    const movieNodes = movies.map((movie, index) => {
        return <Movie movie={movie} key={index} addToUser={addToUser} duplicate={duplicate} feedback={feedback}/>
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