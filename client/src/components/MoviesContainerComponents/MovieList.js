import React from "react";
import Movie from "./Movie";


const MovieList = ({movies, addToUser, saveRating}) => {


    const movieNodes = movies.map((movie, index) => {
        return <Movie movie={movie} key={index} addToUser={addToUser} saveRating={saveRating}/>
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