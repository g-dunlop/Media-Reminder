import React, {useState, useEffect} from "react";
import SearchBar from "../components/MoviesContainerComponents/SearchBar";
import MovieList from "../components/MoviesContainerComponents/MovieList";
import {Outlet} from "react-router-dom";

const MoviesContainer = ({addToUser}) => {

    const [apiUrl, setApiUrl] = useState("http://www.omdbapi.com/?s=&apikey=7a9676");
    const [searchResults, setSearchResults] = useState([]);
  
    

        useEffect(() => {
            getMovies()
        }, [apiUrl])

        const getMovies = function(){
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => setSearchResults(data.Search))
        }

        const searchApi = (searchTerm) => {
            let newUrl = `http://www.omdbapi.com/?s=${searchTerm}&apikey=7a9676`
            setApiUrl(newUrl)
        }

    

    return (
        <div className="movies-container">
            <h2>Movies</h2>
            <SearchBar searchApi={searchApi} />
             <Outlet />
            {searchResults !== undefined ? <MovieList movies={searchResults} addToUser={addToUser} />: null}
           
        </div>

    )
} 

export default MoviesContainer;

// https://imdb-api.com/en/API/Search/k_y32hye86/inception